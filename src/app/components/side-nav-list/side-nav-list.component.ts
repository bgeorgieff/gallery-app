import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-side-nav-list",
  templateUrl: "./side-nav-list.component.html",
  styleUrls: ["./side-nav-list.component.scss"],
})
export class SideNavListComponent {
  @Output() closeSideNav = new EventEmitter();

  sideNavClose() {
    this.closeSideNav.emit();
  }
}
