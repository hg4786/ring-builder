export type RingItem = {
  id: string;
  title: string;
  price: number;
  img: string;        // main image
  images?: string[];  // gallery
  metal: string;
  metalOptions?: string[];
  shape: string;
  bandWidth?: number;
  sizeOptions?: string[];
  bars: [number, number, number];
  icons: string[];
};

export const RINGS_MOCK: RingItem[] = [
  {
    id: "r1",
    title: "Classic Solitaire Ring",
    price: 16570,
    img: "/assets/rings/r2.png",
    images: ["/assets/rings/r2.png","/assets/rings/r3.png","/assets/rings/r4.png","/assets/rings/r5.png"],
    metal: "Rose Gold",
    metalOptions: ["Rose Gold","Yellow Gold","White Gold","Platinum"],
    shape: "Oval",
    bandWidth: 2.0,
    sizeOptions: ["5","5.5","6","6.5","7","7.5","8"],
    bars: [78,40,62],
    icons: ["/assets/icons/cut.png","/assets/icons/shape.png","/assets/icons/cert.png","/assets/icons/clarity.png"]
  },
  {
    id: "r2",
    title: "The Signature Oval Yellow Gold Engagement Ring",
    price: 18300,
    img: "/assets/rings/r3.png",
    images: ["/assets/rings/r3.png","/assets/rings/r4.png","/assets/rings/r5.png"],
    metal: "Yellow Gold",
    metalOptions: ["Rose Gold","Yellow Gold","White Gold","Platinum"],
    shape: "Oval",
    bandWidth: 2.2,
    sizeOptions: ["5","6","7","8"],
    bars: [70,45,55],
    icons: ["/assets/icons/cut.png","/assets/icons/shape.png","/assets/icons/cert.png","/assets/icons/clarity.png"]
  },
  {
    id: "r3",
    title: "Modern Bezel Platinum Ring",
    price: 19750,
    img: "/assets/rings/r4.png",
    images: ["/assets/rings/r4.png","/assets/rings/r5.png"],
    metal: "Platinum",
    metalOptions: ["Platinum","White Gold"],
    shape: "Round",
    bandWidth: 2.0,
    sizeOptions: ["5","6","7","8"],
    bars: [60,50,40],
    icons: ["/assets/icons/cut.png","/assets/icons/shape.png","/assets/icons/cert.png","/assets/icons/clarity.png"]
  }
];

export function getRingById(id: string) {
  return RINGS_MOCK.find(r => r.id === id) || null;
}

export function getRelated(seed: { shape?: string; metal?: string; excludeId?: string }, limit = 8) {
  const list = RINGS_MOCK.filter(r => r.id !== seed.excludeId && (r.shape === seed.shape || r.metal === seed.metal));
  return (list.length ? list : RINGS_MOCK.filter(r => r.id !== seed.excludeId)).slice(0, limit);
}
