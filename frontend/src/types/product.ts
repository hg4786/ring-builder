export type Product = {
  id: number;
  name: string;
  price: string;
  metal: string;
  shape: string;
  image: string;
  metalColors: string[];
  selectedMetal: number;
  isBestSeller?: boolean;
};