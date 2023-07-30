import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent {
  constructor(private userServices: AuthService) {
    // console.log(this.userServices.getAllUsers());
    // console.log(this.userServices.getUserById(1));
    // console.log(
    //   this.userServices.updateUser(1, {
    //     id: 1,
    //     name: "vivi",
    //     email: "kr28@gmail.com",
    //     password: "vivek28@",
    //     gender: "female",
    //   })
    // );
    // console.log(this.userServices.deleteUser(1));
    // console.log(this.userServices.getAllUsers());
  }
}
