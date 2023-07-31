import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnChanges, OnInit {
  isLoggedIn: { status: boolean; name: string } = {
    status: false,
    name: "user",
  };
  userInLocalStorage: any = JSON.parse(localStorage.getItem("authUser") as any);
  constructor(private router: Router, private user_auth: AuthService) {
    console.log("navbar constructor result", this.isLoggedIn);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("samole changes", changes);
  }
  ngOnInit(): void {
    const { email, password, name } = this.userInLocalStorage;
    console.warn("nav ngOnit", email, password);
    this.user_auth.loginUser(this.userInLocalStorage).subscribe((res) => {
      if (res) {
        this.isLoggedIn.status = true;
        this.isLoggedIn.name = name;
      }
    });
  }
  handleLogout = () => {
    localStorage.clear();
    this.isLoggedIn.status = false;
    this.router.navigate(["login"]);
  };
}
