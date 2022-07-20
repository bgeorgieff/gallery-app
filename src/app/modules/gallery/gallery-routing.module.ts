import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/guards/auth.guard";
import { AddEditPaintingComponent } from "./pages/add-edit-painting/add-edit-painting.component";
import { GalleryComponent } from "./pages/gallery/gallery.component";
import { SingleImageComponent } from "./pages/single-image/single-image.component";

const routes: Routes = [
  { path: "paintings", component: GalleryComponent },
  { path: "painting/:id", component: SingleImageComponent },
  {
    path: "add",
    component: AddEditPaintingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "edit/:id",
    component: AddEditPaintingComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryRoutingModule {}
