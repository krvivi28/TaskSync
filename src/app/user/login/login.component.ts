import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { SnackbarService } from "src/app/services/snackbar.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private snake_alert: SnackbarService,
    private auth_services: AuthService,
    private router: Router
  ) {}

  loginForm = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]],
  });

  handleLogin = () => {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      let res = this.auth_services.loginUser(this.loginForm.value);
      if (res) {
        this.snake_alert.alert("login successfull", "redirection to tasks...");
        this.router.navigate(["tasks"]);
      } else {
        this.snake_alert.alert(
          "invalid credentials or user not found",
          "pls try again or register!"
        );
      }
    } else {
      this.snake_alert.alert("invalid form details", "enter valid details");
    }
  };
}
