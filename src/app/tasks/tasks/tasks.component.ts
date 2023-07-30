import { Component, OnInit } from "@angular/core";
import { TaskFormComponent } from "../task-form/task-form.component";
import { MatDialog } from "@angular/material/dialog";
import { FormBuilder } from "@angular/forms";
import { TasksService } from "src/app/services/tasks.service";
import { ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { HistoryComponent } from "src/app/common/history/history.component";
import { SnackbarService } from "src/app/services/snackbar.service";
@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"],
})
export class TasksComponent implements OnInit {
  displayedColumns: string[] = [
    "id",
    "title",
    "description",
    "due_date",
    "priority",
    "status",
    "action",
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    public dialog1: MatDialog,
    private formBuilder: FormBuilder,
    private task_services: TasksService,
    private snake_alert: SnackbarService
  ) {}

  ngOnInit(): void {
    let res = this.task_services.getAllTask();
    console.log(res);
    this.dataSource = new MatTableDataSource(res);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openDialog = () => {
    const dialogRef = this.dialog.open(TaskFormComponent, {
      width: "40%",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      this.upDateTable();
    });
  };
  upDateTable = () => {
    let res = this.task_services.getAllTask();
    this.dataSource = new MatTableDataSource(res);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  };
  viewHistory = (task_id: any) => {
    let all_history = this.task_services.getHistoryById(task_id);
    this.dialog1.open(HistoryComponent, {
      width: "60%",
      data: all_history,
    });
  };
  editTask = (last_data: any) => {
    const dialogRef = this.dialog.open(TaskFormComponent, {
      width: "50%",
      data: last_data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
    this.upDateTable();
  };
  deleteTask = (id: string) => {
    let user_resp = window.confirm("are you sure want to delete this task");
    if (user_resp) {
      this.task_services.delTaskById(id);
      this.upDateTable();
      this.snake_alert.alert("Task deleted Successfully", "undo");
    } else {
      this.snake_alert.alert("process reverted", "undo");
    }
  };
}
