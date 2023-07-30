import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { SnackbarService } from "../services/snackbar.service";
import { AuthService } from "../services/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router);
  let _snackAlert = inject(SnackbarService);
  let _userAuth = inject(AuthService);
  if (!_userAuth.isValidUser) {
    _snackAlert.alert("login to access this page", "login");
    _router.navigate(["login"]);
    return false;
  } else {
    return true;
  }
};
