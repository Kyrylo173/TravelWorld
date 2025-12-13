export interface City {
  id: string;
  name: string;
  nameUa: string;
  description: string;
  image: string;
  attractions: string[];
  bestTime: string;
  duration: string;
}

export interface Country {
  id: string;
  name: string;
  nameUa: string;
  flag: string;
  description: string;
  capital: string;
  language: string;
  currency: string;
  cities: City[];
}