let _id: number = 0;
export class Itask {
  id?: any;
  title: string;
  description: string;
  due_date: string;
  priority: string;
  status: string;
  last_edit?: any;
  edit_history?: any[] = [];
  constructor(
    title: string,
    description: string,
    due_date: string,
    priority: string,
    status: string
  ) {
    this.id = ++_id;
    this.title = title;
    this.description = description;
    this.due_date = due_date;
    this.priority = priority;
    this.status = status;
    this.last_edit = new Date();
  }
}
