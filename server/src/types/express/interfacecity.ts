export interface City {
  id: number;
  name: string;
  type: "city" | "island" | "resort";
  destination_id: number;
  location_coordinates: [number, number];
  stay_duration: string;
  about: string;
  continent: string;
  average_price: number;
  description: string;
  time_zone: string;
  language: string;
  currency: string;
  tourist_season: string;
  theme: string;
}
