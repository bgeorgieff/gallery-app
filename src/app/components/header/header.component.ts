import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Assets } from "src/app/enums/assets.enum";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  logo = Assets.logo;
  altTxt = "Gallery logo";
  @Output() toggler = new EventEmitter();

  constructor(private userService: UserService, private router: Router) {}

  isLogged() {
    return this.userService.isLoggedIn();
  }

  toggleSideNav() {
    this.toggler.emit();
  }

  logOut() {
    this.userService.logOut();
    this.router.navigate(["/"]);
  }
}
