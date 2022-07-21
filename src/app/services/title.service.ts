import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TitleService {
  private title$ = new BehaviorSubject<string>("");
  titleStr$ = this.title$.asObservable();

  setTitle(title: string) {
    this.title$.next(title);
  }
}
