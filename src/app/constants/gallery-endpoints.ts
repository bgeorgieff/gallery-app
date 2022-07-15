export class GalleryEndPoints {
  static MainRoute = "gallery";

  static SinglePainting(id: string) {
    return `${this.MainRoute}/${id}`;
  }
}
