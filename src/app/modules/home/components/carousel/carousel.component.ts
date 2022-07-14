import { animate, style, transition, trigger } from "@angular/animations";
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Slide } from "src/app/interfaces/carousel.interface";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
  animations: [
    trigger("carouselAnimation", [
      transition("void => *", [
        style({ opacity: 0 }),
        animate("500ms", style({ opacity: 1 })),
      ]),
      transition("* => void", [animate("500ms", style({ opacity: 0 }))]),
    ]),
  ],
})
export class CarouselComponent implements OnInit, OnChanges {
  @Input() slides: Slide[] = [];
  @Input() autoSlide = false;
  @Input() autoSlideInterval = 3000;
  currentSlide = 0;

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
    this.preloadImages();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["slides"]) {
      this.preloadImages();
    }
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

  autoSlideImages() {
    setInterval(() => {
      this.onNextClick();
    }, this.autoSlideInterval);
  }

  preloadImages() {
    for (const slide of this.slides) {
      new Image().src = slide.src;
    }
  }
}
