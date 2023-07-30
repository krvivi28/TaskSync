import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { SnackbarService } from "src/app/services/snackbar.service";
import { TasksService } from "src/app/services/tasks.service";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
@Component({
  selector: "app-task-form",
  templateUrl: "./task-form.component.html",
  styleUrls: ["./task-form.component.scss"],
})
export class TaskFormComponent implements OnInit {
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private _tservice: TasksService,
    private _alert: SnackbarService,
    @Inject(MAT_DIALOG_DATA) public update_data: any,
    private dialog_ref: MatDialogRef<TaskFormComponent>
  ) {}
  ngOnInit(): void {
    this.taskForm.patchValue(this.update_data);
  }

  taskForm = this.formBuilder.group({
    title: ["", [Validators.required]],
    description: ["", [Validators.required, Validators.minLength(10)]],
    due_date: ["", [Validators.required]],
    status: ["to-do", [Validators.required]],
    priority: ["low", [Validators.required]],
  });

  handleFormSubmit = () => {
    if (this.taskForm.valid) {
      if (this.update_data) {
        let updated_res = this._tservice.updateTaskById(
          this.update_data.id,
          this.taskForm.value as any
        );
        console.log("updated res is", updated_res);
        this.taskForm.reset();
        this._alert.alert("Task updated", "Successfull");
        console.log(
          "task form component se console",
          this._tservice.getAllTask()
        );
        this.dialog_ref.close("task created");
      } else {
        this._tservice.createTask(this.taskForm.value);
        this.taskForm.reset();
        this._alert.alert("Task creation", "Successfull");
        console.log(
          "task form component se console",
          this._tservice.getAllTask()
        );
        this.dialog_ref.close("task created");
      }
    } else {
      this._alert.alert("Invalid Inputs", "Try again");
    }
  };
}
