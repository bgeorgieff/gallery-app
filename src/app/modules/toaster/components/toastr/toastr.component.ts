import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-toast",
  templateUrl: "./toastr.component.html",
  styleUrls: ["./toastr.component.scss"],
})
export class ToastrComponent implements OnInit {
  @Input() message!: string;
  @Input() type!: string;
  @Input() timeOut = 4000;
  @ViewChild("toastrContainer", { static: false })
  toaster!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.renderer.removeClass(this.toaster.nativeElement, "focus-in");
      this.renderer.addClass(this.toaster.nativeElement, "blur-out");
    }, this.timeOut);
  }

  checkType(): String {
    if (this.type === "success") {
      return "success";
    }
    if (this.type === "warning") {
      return "warning";
    }
    if (this.type === "info") {
      return "info";
    }
    return "";
  }
}
