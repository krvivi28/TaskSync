import { Injectable } from "@angular/core";
import { Itask } from "../userModel/itask";

@Injectable({
  providedIn: "root",
})
export class TasksService {
  allTasks: Itask[] = [
    new Itask(
      "Deploy Events page",
      "Fix and deploy the CN events page",
      "22-Aug-2023",
      "High",
      "In-Progress"
    ),
    new Itask(
      "JEST Error",
      "while submitting problems in nodejs JEST is throwing some unwanted errors",
      "10-Aug-2023",
      "Med",
      "In-Progress"
    ),
    new Itask(
      "Angular Interview",
      "with Parikshit Sir SDE Coding Ninjas",
      "02-Aug-2023",
      "Priority",
      "In-Progress"
    ),
  ];
  constructor() {}
  getAllTask = () => {
    return this.allTasks;
  };
  createTask = (data: any) => {
    const { title, description, due_date, priority, status } = data;
    this.allTasks.push(
      new Itask(title, description, due_date, priority, status)
    );
    return true;
  };
  getTaskById = (id: string) => {
    return this.allTasks.find((task) => {
      return task.id == id;
    });
  };
  getHistoryById = (_id: any) => {
    let tasks = this.allTasks.find((task) => {
      return task.id == _id;
    });
    return tasks?.edit_history?.reverse();
  };
  delTaskById = (id: any) => {
    let ind = this.allTasks.findIndex((task) => {
      return task.id == id;
    });
    this.allTasks.splice(ind, 1);
  };
  updateTaskById = (id: any, u_data: Itask) => {
    let ind = this.allTasks.findIndex((task) => {
      return task.id == id;
    });

    let { edit_history, ...last_history } = this.allTasks[ind];
    this.allTasks[ind].edit_history?.push(last_history);
    this.allTasks[ind].title = u_data.title;
    this.allTasks[ind].description = u_data.description;
    this.allTasks[ind].priority = u_data.priority;
    this.allTasks[ind].status = u_data.status;
    this.allTasks[ind].due_date = u_data.due_date;
    return this.allTasks[ind];
  };
}
