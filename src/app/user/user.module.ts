import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { MaterialUiModule } from "../material-ui/material-ui.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserRoutingModule } from "./user-roouting.module";
import { RegFormComponent } from "./reg-form/reg-form.component";

@NgModule({
  declarations: [LoginComponent, RegisterComponent, RegFormComponent],
  imports: [
    CommonModule,
    MaterialUiModule,
    ReactiveFormsModule,
    FormsModule,
    UserRoutingModule,
  ],
})
export class UserModule {}
