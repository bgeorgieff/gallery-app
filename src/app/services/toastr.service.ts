import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IMessage } from "../interfaces/IMessage.interface";

@Injectable({
  providedIn: "root",
})
export class ToastrService {
  setMessage$ = new BehaviorSubject<IMessage>({} as IMessage);
  message$ = this.setMessage$.asObservable();

  showMessage(text: string, type: string) {
    this.setMessage$.next({ text, type });
    setTimeout(() => {
      this.setMessage$.next({} as IMessage);
    }, 5000);
  }
}
