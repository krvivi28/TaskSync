import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialUiModule } from "./material-ui/material-ui.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { UserModule } from "./user/user.module";
import { HomeComponent } from "./components/home/home.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { TasksComponent } from "./tasks/tasks/tasks.component";
import { TaskFormComponent } from "./tasks/task-form/task-form.component";
import { NavbarComponent } from "./common/navbar/navbar.component";
import { HistoryComponent } from "./common/history/history.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent,
    TasksComponent,
    TaskFormComponent,
    NavbarComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialUiModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
