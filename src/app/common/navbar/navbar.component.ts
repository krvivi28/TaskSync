import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  userStatus!: any;
  constructor(private user_auth: AuthService) {
    console.log("navbar constructor result", this.user_auth.isValidUser);
  }

  ngOnInit(): void {
    this.user_auth.loggedInStatus().subscribe((res) => {
      this.userStatus = res;
    });
  }
  handleLogout = () => {
    this.user_auth.logOut().subscribe((res) => {
      this.userStatus = res;
    });
  };
}
