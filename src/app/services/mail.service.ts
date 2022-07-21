import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API } from "../constants/end-points";
import { MailEndpoints } from "../constants/mail-endpoints";
import { IMail } from "../interfaces/IMail.interface";

@Injectable({
  providedIn: "root",
})
export class MailService {
  constructor(private http: HttpClient) {}

  sendMail(mailBody: IMail): Observable<string> {
    return this.http.post<string>(
      API.Endpoint(MailEndpoints.sendMail),
      mailBody
    );
  }
}
