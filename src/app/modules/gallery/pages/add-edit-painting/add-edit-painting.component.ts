import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { MessageTxts } from "src/app/enums/message-txt.enum";
import { MessageType } from "src/app/enums/message-types.enum";
import { PageTitles } from "src/app/enums/page-titles.enum";
import { ICard } from "src/app/interfaces/card.interface";
import { GalleryService } from "src/app/services/gallery.service";
import { TitleService } from "src/app/services/title.service";
import { ToastrService } from "src/app/services/toastr.service";

@Component({
  templateUrl: "./add-edit-painting.component.html",
  styleUrls: ["./add-edit-painting.component.scss"],
})
export class AddEditPaintingComponent implements OnInit, OnDestroy {
  id = this.activatedRoute.snapshot.paramMap.get("id");
  painting?: ICard;
  paintingForm!: FormGroup;
  file!: File;
  subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private galleryService: GalleryService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService,
    private titleService: TitleService
  ) {
    this.paintingForm = this.formBuilder.group({
      editName: new FormControl("", [Validators.required]),
      addFile: new FormControl("", [Validators.required]),
      altText: new FormControl("", [Validators.required]),
      size: new FormControl("", [Validators.required]),
      date: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      featured: new FormControl(false, [Validators.required]),
    });
  }

  ngOnInit(): void {
    if (this.id) {
      this.titleService.setTitle(PageTitles.editPainting);

      this.subscriptions.push(
        this.galleryService.getPainting(this.id).subscribe((painting) => {
          this.painting = painting;
          const date = new Date(painting.dateCreated)
            .toISOString()
            .split("T")[0];

          this.paintingForm = this.formBuilder.group({
            editName: new FormControl(this.painting.name, [
              Validators.required,
            ]),
            addFile: new FormControl(""),
            altText: new FormControl(this.painting.imageAltTxt, [
              Validators.required,
            ]),
            size: new FormControl(this.painting.size, [Validators.required]),
            date: new FormControl(date, [Validators.required]),
            description: new FormControl(this.painting.description, [
              Validators.required,
            ]),
            featured: new FormControl(this.painting.isFeatured, [
              Validators.required,
            ]),
          });
        })
      );
    } else {
      this.titleService.setTitle(PageTitles.addPainting);
    }
  }

  onFileChange($event: any) {
    this.file = $event.target.files[0];
  }

  isInvalid(field: string) {
    return (
      this.paintingForm.get(field)?.invalid &&
      (this.paintingForm.get(field)?.touched ||
        this.paintingForm.get(field)?.dirty)
    );
  }

  onSubmit() {
    if (this.paintingForm.invalid) {
      this.toastrService.showMessage(
        MessageTxts.ThereIsSmthWrongWithPic,
        MessageType.warning
      );
      return;
    }

    const formData = new FormData();
    if (this.file) {
      formData.append("imageUrl", this.file);
    }
    formData.append("imageAltTxt", this.paintingForm.get("altText")?.value);
    formData.append("name", this.paintingForm.get("editName")?.value);
    formData.append("dateCreated", this.paintingForm.get("date")?.value);
    formData.append("size", this.paintingForm.get("size")?.value);
    formData.append("description", this.paintingForm.get("description")?.value);
    formData.append("isFeatured", this.paintingForm.get("featured")?.value);

    if (!this.id) {
      this.galleryService.createNewPainting(formData).subscribe({
        next: () => {
          this.toastrService.showMessage(
            MessageTxts.PictureUploaded,
            MessageType.success
          );
          this.paintingForm.reset();
          this.router.navigate(["/gallery/paintings"]);
        },
        error: (err) => {
          this.toastrService.showMessage(
            MessageTxts.ThereIsSmthWrongWithPic,
            MessageType.warning
          );
        },
      });
    } else {
      this.galleryService.updatePainting(this.id, formData).subscribe({
        next: (e) => {
          this.toastrService.showMessage(
            MessageTxts.PictureUpdated,
            MessageType.success
          );
          this.paintingForm.reset();
          this.router.navigate(["gallery/paintings"]);
        },
        error: (err) => {
          this.toastrService.showMessage(
            MessageTxts.ThereIsSmthWrongWithPic,
            MessageType.warning
          );
        },
      });
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((e) => e.unsubscribe());
  }
}
