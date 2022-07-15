import {
  Component,
  ElementRef,
  HostListener,
  Input,
  Output,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { Classes } from "src/app/enums/classes.enum";
import { MatDialog } from "@angular/material/dialog";
import { ModalWindowComponent } from "../modal-window/modal-window.component";
import { ICard } from "src/app/interfaces/card.interface";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent {
  @Input() paintings: ICard[] = [];

  constructor(private renderer: Renderer2, private matDialog: MatDialog) {}

  onIntersection({
    target,
    visible,
  }: {
    target: Element;
    visible: boolean;
  }): void {
    this.renderer.addClass(
      target,
      visible ? Classes.cardAnimationClass : "inactive"
    );
    this.renderer.removeClass(
      target,
      visible ? "inactive" : Classes.cardAnimationClass
    );
  }

  openDetails(painting: ICard) {
    this.matDialog.open(ModalWindowComponent, {
      width: "85vw",
      height: "85vh",
      data: painting,
    });
  }
}
