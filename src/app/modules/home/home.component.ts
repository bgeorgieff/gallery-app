import { Component } from "@angular/core";
import { Slide } from "../../interfaces/carousel.interface";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  slides: Slide[] = [
    { src: "/assets/images/pexels-artūras-kokorevas-12670601.jpg" },
    { src: "/assets/images/pexels-chris-larson-1123567.jpg" },
    { src: "/assets/images/pexels-greg-gulik-1001435.jpg" },
    { src: "/assets/images/pexels-luis-quintero-2106203.jpg" },
    { src: "/assets/images/pexels-wendy-wei-2986357.jpg" },
  ];
}
