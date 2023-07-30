import { Component } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  isAuthUser: any = JSON.parse(localStorage.getItem("authUser") as any);
  constructor() {
    console.log("cons se", this.isAuthUser);
  }

  handleLogout = () => {
    localStorage.clear();
    // this.isAuthUser = null;
  };
}
