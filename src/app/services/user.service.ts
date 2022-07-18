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
}
