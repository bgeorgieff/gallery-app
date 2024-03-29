import { Location } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ErrorMsgs } from "src/app/enums/error-status-codes.enum";
import { MessageTxts } from "src/app/enums/message-txt.enum";
import { MessageType } from "src/app/enums/message-types.enum";
import { PageTitles } from "src/app/enums/page-titles.enum";
import { Regex } from "src/app/enums/regex.enum";
import { ICard } from "src/app/interfaces/ICard.interface";
import { IMail } from "src/app/interfaces/IMail.interface";
import { MailService } from "src/app/services/mail.service";
import { TitleService } from "src/app/services/title.service";
import { ToastrService } from "src/app/services/toastr.service";

@Component({
  templateUrl: "./contact-me.component.html",
  styleUrls: ["./contact-me.component.scss"],
})
export class ContactMeComponent implements OnInit, OnDestroy {
  title = PageTitles.contactPage;
  subscriptions: Subscription[] = [];

  contactForm = this.formBuilder.group({
    name: ["", [Validators.required, Validators.maxLength(56)]],
    paintingId: ["", [Validators.required]],
    email: [
      "",
      [
        Validators.required,
        Validators.maxLength(56),
        Validators.pattern(Regex.emailPattern),
      ],
    ],
    message: ["", [Validators.required, Validators.maxLength(356)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private titleService: TitleService,
    private mailService: MailService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

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

  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }

    const formData: IMail = {
      name: (this.contactForm.get("name") as FormControl)?.value,
      paintingRef: (this.contactForm.get("paintingId") as FormControl)?.value,
      email: (this.contactForm.get("email") as FormControl)?.value,
      message: (this.contactForm.get("message") as FormControl)?.value,
    };

    this.subscriptions.push(
      this.mailService.sendMail(formData).subscribe({
        next: () => {
          this.toastrService.showMessage(
            MessageTxts.EmailSent,
            MessageType.success
          );
          this.router.navigate(["/gallery/paintings"]);
          this.contactForm.reset();
        },
        error: ({ error }) => {
          if (error.status === ErrorMsgs.notFound) {
            return this.toastrService.showMessage(
              MessageTxts.ProvidedRefNotValid,
              MessageType.info
            );
          }
          this.toastrService.showMessage(
            MessageTxts.EmailWasntSent,
            MessageType.warning
          );
        },
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
