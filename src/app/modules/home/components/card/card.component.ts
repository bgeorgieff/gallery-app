import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() cardItem = [...Array(8)];
  breakpoint!: number;

  ngOnInit(): void {
    this.breakpoint = window.innerWidth <= 600 ? 1 : 2;
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
  }
}
