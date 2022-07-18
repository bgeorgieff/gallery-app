import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API } from "../constants/end-points";
import { UserEndpoints } from "../constants/user-endpoints";
import { IToken } from "../interfaces/IToken.interface";
import { IUser } from "../interfaces/IUser.interface";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  register(formData: IUser): Observable<string> {
    return this.http.post<string>(
      API.Endpoint(UserEndpoints.register),
      formData
    );
  }

  login(formData: IUser): Observable<IToken> {
    return this.http.post<IToken>(API.Endpoint(UserEndpoints.login), formData);
  }

  isLoggedIn() {
    return !!document.cookie.split("=")[1];
  }

  isAdmin() {
    const cookie = document.cookie.split("=")[1] || "";
    if (cookie) {
      const { isAdmin } = JSON.parse(window.atob(cookie.split(".")[1]));
      return !!isAdmin;
    } else {
      return false;
    }
  }

  logOut() {
    document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
  }

  setCookie(response: IToken) {
    document.cookie = `${Object.keys(response)}=${Object.values(
      response
    )};path=/`;
  }

  getCookie() {
    return document.cookie.split("=")[1] || "";
  }
}
