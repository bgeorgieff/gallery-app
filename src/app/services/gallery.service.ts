import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API } from "../constants/end-points";
import { GalleryEndPoints } from "../constants/gallery-endpoints";
import { ICard } from "../interfaces/ICard.interface";
@Injectable({
  providedIn: "root",
})
export class GalleryService {
  constructor(private http: HttpClient) {}

  createNewPainting(formData: FormData): Observable<ICard> {
    return this.http.post<ICard>(
      API.Endpoint(GalleryEndPoints.MainRoute),
      formData
    );
  }

  updatePainting(id: string, newItems: FormData): Observable<ICard> {
    return this.http.patch<ICard>(
      API.Endpoint(GalleryEndPoints.SinglePainting(id)),
      newItems
    );
  }

  getAllPaintings(): Observable<ICard[]> {
    return this.http.get<ICard[]>(API.Endpoint(GalleryEndPoints.MainRoute));
  }

  getPainting(id: string): Observable<ICard> {
    return this.http.get<ICard>(
      API.Endpoint(GalleryEndPoints.SinglePainting(id))
    );
  }

  deletePainting(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(
      API.Endpoint(GalleryEndPoints.SinglePainting(id))
    );
  }
}
