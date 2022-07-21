import { Component, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-side-nav-list",
  templateUrl: "./side-nav-list.component.html",
  styleUrls: ["./side-nav-list.component.scss"],
})
export class SideNavListComponent {
  @Output() closeSideNav = new EventEmitter();

  constructor(private userService: UserService, private router: Router) {}

  sideNavClose() {
    this.closeSideNav.emit();
  }

  isLoggedIn() {
    return this.userService.isLoggedIn();
  }

  logOut() {
    this.userService.logOut();
    this.router.navigate(["/"]);
  }
}
