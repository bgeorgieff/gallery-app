import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { PageTitles } from "src/app/enums/page-titles.enum";
import { Regex } from "src/app/enums/regex.enum";
import { ICard } from "src/app/interfaces/card.interface";
import { TitleService } from "src/app/services/title.service";

@Component({
  templateUrl: "./contact-me.component.html",
  styleUrls: ["./contact-me.component.scss"],
})
export class ContactMeComponent implements OnInit {
  title = PageTitles.contactPage;

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private titleService: TitleService
  ) {}

  contactForm = this.formBuilder.group({
    name: new FormControl("", [Validators.required, Validators.maxLength(56)]),
    paintingId: new FormControl("", [Validators.required]),
    email: new FormControl("", [
      Validators.required,
      Validators.maxLength(56),
      Validators.pattern(Regex.emailPattern),
    ]),
    message: new FormControl("", [
      Validators.required,
      Validators.maxLength(356),
    ]),
  });

  ngOnInit(): void {
    const state = this.location.getState() as ICard;
    if (state.uniqueId) {
      this.contactForm.get("paintingId")?.setValue(state.uniqueId);
    }
    this.titleService.setTitle(this.title);
  }

  isInvalid(field: string) {
    return (
      this.contactForm.get(field)?.invalid &&
      (this.contactForm.get(field)?.touched ||
        this.contactForm.get(field)?.dirty)
    );
  }

  onSubmit() {}
}
