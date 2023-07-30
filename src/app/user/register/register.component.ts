import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { SnackbarService } from "src/app/services/snackbar.service";
import { Iuser } from "src/app/userModel/iuser";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  hide = true;
  constructor(
    private formBuild: FormBuilder,
    private salert: SnackbarService,
    private userServices: AuthService,
    private route: Router
  ) {}
  registerForm = this.formBuild.group({
    name: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    gender: ["", [Validators.required]],
    role: [""],
  });
  handleFormSubmit = () => {
    if (this.registerForm.valid) {
      console.log(this.registerForm);
      console.log(this.registerForm.value);
      const res = this.userServices.addUser(this.registerForm.value as Iuser);
      this.salert.alert(
        "user created successfully",
        `welcom ${this.registerForm.value.name} `
      );
      this.route.navigate(["login"]);
    } else {
      this.salert.alert("invalid form data", "fill valid details");
    }
  };
}
