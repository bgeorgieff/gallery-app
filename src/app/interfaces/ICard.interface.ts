export interface ICard {
  _id?: string;
  imageUrl: string;
  imageAltTxt: string;
  name: string;
  dateCreated: string;
  size: string;
  uniqueId?: string;
  description: string;
  isFeatured: boolean;
}
