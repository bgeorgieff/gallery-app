import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoggedInGuard } from "./guards/logged-in.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadChildren: () =>
      import("./modules/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "about",
    loadChildren: () =>
      import("./modules/about/about.module").then((m) => m.AboutModule),
  },
  {
    path: "gallery",
    loadChildren: () =>
      import("./modules/gallery/gallery.module").then((m) => m.GalleryModule),
  },
  {
    path: "user",
    loadChildren: () =>
      import("./modules/user/user.module").then((m) => m.UserModule),
    canActivate: [LoggedInGuard],
  },
  // {
  //   path: "**",
  //   redirectTo: "home",
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
