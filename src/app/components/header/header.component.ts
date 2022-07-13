import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  @Output() toggler = new EventEmitter();

  toggleSideNav() {
    this.toggler.emit();
  }
}
