import { Injectable } from "@angular/core";
import { Iuser } from "../userModel/iuser";
import { Observable, of } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isValidUser = { status: false, userDetails: {} };
  users: Iuser[] = [
    new Iuser("vivek", "krvivi28@gmail.com", "vivek28@", "male"),
    new Iuser("echo", "echo@gmail.com", "vivek28@", "female"),
  ];
  constructor(private router: Router) {}
  findIndex = (arr: Iuser[], ind: number) => {
    return arr.findIndex((user) => {
      return user.id == ind;
    });
  };

  logOut = (): Observable<any> => {
    this.isValidUser = { status: false, userDetails: {} };
    this.router.navigate(["login"]);
    return of(this.isValidUser);
  };
  loggedInStatus = (): Observable<any> => {
    return of(this.isValidUser);
  };
  addUser = (newUser: Iuser) => {
    let { name, email, password, gender } = newUser;
    let user = new Iuser(name, email, password, gender);
    this.users.push(user);
    return `user with ${user.id} created successfully `;
  };
  loginUser = (l_data: any): Observable<any> => {
    const { email, password } = l_data;
    let user = this.users.find((user) => {
      return user.email == email && user.password == password;
    });
    const jsonUser = JSON.stringify(user);
    if (user) {
      this.isValidUser.status = true;
      this.isValidUser.userDetails = user;
      localStorage.setItem("authUser", jsonUser);
    }
    return of(user);
  };
  getAllUsers = () => {
    return this.users;
  };
  getUserById = (id: number) => {
    return this.users.find((user) => {
      return user.id == id;
    });
  };
  updateUser = (_id: number, updatedDetails: Iuser) => {
    let ind = this.findIndex(this.users, _id);
    if (ind >= 0) {
      this.users[ind] = updatedDetails;
    }
    return this.users[ind];
  };
  deleteUser = (id: number) => {
    let ind = this.findIndex(this.users, id);
    if (ind >= 0) {
      this.users.splice(ind, 1);
    }
    return `user with id: ${id} deleted successfully! updated array length ${this.users.length}`;
  };
  userValidationStatus = (): Observable<any> => {
    return of(this.isValidUser);
  };
}
