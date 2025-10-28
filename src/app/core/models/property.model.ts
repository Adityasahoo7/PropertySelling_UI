export interface Property {
  id?: number;         // optional
  sellerId: number;
  title: string;
  description: string;
  type: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  areaSqFt: number;
  imageUrl: string;
  createdAt?: Date;    // optional
  imageFile:File|null;
}
