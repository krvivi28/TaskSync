import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { TasksService } from "src/app/services/tasks.service";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.scss"],
})
export class HistoryComponent implements OnInit {
  history: any = [];
  constructor(
    private task_api: TasksService,
    @Inject(MAT_DIALOG_DATA) private history_data: any,
    private dialog_ref: MatDialogRef<HistoryComponent>
  ) {}

  ngOnInit(): void {
    this.history = this.history_data;
  }
}
