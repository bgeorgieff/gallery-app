import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API } from "../constants/end-points";
import { GalleryEndPoints } from "../constants/gallery-endpoints";
import { ICard } from "../interfaces/card.interface";
@Injectable({
  providedIn: "root",
})
export class GalleryService {
  constructor(private http: HttpClient) {}

  createNewPainting(painting: ICard): Observable<ICard> {
    return this.http.post<ICard>(
      API.Endpoint(GalleryEndPoints.MainRoute),
      painting
    );
  }

  updatePainting(id: string, newItems: Partial<ICard>): Observable<ICard> {
    return this.http.patch<ICard>(
      API.Endpoint(GalleryEndPoints.SinglePainting(id)),
      newItems
    );
  }

  getAllPainting(): Observable<ICard[]> {
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
