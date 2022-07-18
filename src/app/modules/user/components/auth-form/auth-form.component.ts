import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { PageTitles } from "src/app/enums/page-titles.enum";
import { TitleService } from "src/app/services/title.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Regex } from "src/app/enums/regex.enum";
import { UserService } from "src/app/services/user.service";
import { IUser } from "src/app/interfaces/IUser.interface";
import { ToastrService } from "src/app/services/toastr.service";
import { MessageTxts } from "src/app/enums/message-txt.enum";
import { MessageType } from "src/app/enums/message-types.enum";

@Component({
  selector: "app-auth-form",
  templateUrl: "./auth-form.component.html",
  styleUrls: ["./auth-form.component.scss"],
})
export class AuthFormComponent implements OnInit, OnDestroy {
  authForm!: FormGroup;
  login = true;
  btnInput!: string;
  subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private titleService: TitleService,
    private userService: UserService,
    private toastrService: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.url === "/user/login" ? this.login : (this.login = false);

    if (this.login) {
      this.authForm = this.formBuilder.group({
        email: new FormControl("", [
          Validators.required,
          Validators.maxLength(56),
          Validators.pattern(Regex.emailPattern),
        ]),
        password: new FormControl("", [
          Validators.required,
          Validators.maxLength(56),
        ]),
      });
      this.titleService.setTitle(PageTitles.login);
      this.btnInput = "Login";
    } else {
      this.authForm = this.formBuilder.group({
        email: new FormControl("", [
          Validators.required,
          Validators.maxLength(56),
          Validators.pattern(Regex.emailPattern),
        ]),
        password: new FormControl("", [
          Validators.required,
          Validators.maxLength(56),
        ]),
        rePassword: new FormControl("", [
          Validators.required,
          Validators.maxLength(56),
        ]),
      });
      this.titleService.setTitle(PageTitles.register);
      this.btnInput = "Register";
      this.validatePasswords();
    }
  }

  isInvalid(field: string) {
    return (
      this.authForm.get(field)?.invalid &&
      (this.authForm.get(field)?.touched || this.authForm.get(field)?.dirty)
    );
  }

  validatePasswords() {
    this.subscriptions.push(
      this.authForm.valueChanges.subscribe((value) => {
        if (value.password !== value.rePassword) {
          this.authForm.get("rePassword")?.setErrors({
            message: true,
          });
        } else {
          this.authForm.get("rePassword")?.setErrors(null);
        }
      })
    );
  }

  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }

    const formData: IUser = {
      email: this.authForm.get("email")?.value,
      password: this.authForm.get("password")?.value,
    };

    if (this.login) {
      this.userService.login(formData).subscribe({
        next: (response) => {
          this.userService.setCookie(response);
          this.router.navigate(["/home"]);
          this.toastrService.showMessage(
            MessageTxts.LoginSuccess,
            MessageType.success
          );
        },
        error: () => {
          this.toastrService.showMessage(
            MessageTxts.LoginFail,
            MessageType.warning
          );
        },
      });
    } else {
      this.userService.register(formData).subscribe({
        next: () => {
          this.router.navigate(["/home"]);
          this.toastrService.showMessage(
            MessageTxts.RegisterSuccess,
            MessageType.success
          );
        },
        error: () => {
          this.toastrService.showMessage(
            MessageTxts.RegisterFail,
            MessageType.warning
          );
        },
      });
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
