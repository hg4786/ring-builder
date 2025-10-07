import type { Product } from "../types/product";

export const jewelryCategories = [
    {
        id: 1,
        name: 'Solitaire',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/5810db99b3352d7e902cbf99f84d1668c79c1bd7?width=290',
    },
    {
        id: 2,
        name: 'Oval',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/49c59a6bb944928a5543984e7f0b1afc00f080ac?width=344',
    },
    {
        id: 3,
        name: 'Trilogy',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/d5bd6cfd281c7b283e11c04da882b80177de98a1?width=290',
    },
    {
        id: 4,
        name: 'Platinum',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/e09116f62ac3743fd145492abc4c0a2b479f449d?width=314',
    },
    {
        id: 5,
        name: 'Diamond Band',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/695687cbf567e486ae03241eff4ca3d97d202d7d?width=328',
    },
    {
        id: 6,
        name: 'Halo',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/5b5c8d1e80eabde4b4c31120e2185507cf9239c6?width=318',
    },
    {
        id: 7,
        name: 'Round',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/69735d0d5d4c499897dedd363b2cceb492fef600?width=344',
    },
    {
        id: 8,
        name: 'Toi et Moi',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/241c4c17d661025a6abb3ce5a54d9f988150f88b?width=292',
    },
    {
        id: 9,
        name: 'Emrald Cut',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/8688dfbffeaa3b49d77186511c10261f25052e35?width=288',
    }
];

export const products: Product[] = [
    {
        id: 1,
        name: 'Classic Solitaire Ring',
        price: '$16,570',
        metal: 'Rose Gold',
        shape: 'Oval',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/130f9357b1bea02faa73b4bdc1d02d843e1e9807?width=1100',
        metalColors: ['#E8C5AF', '#DBD9DA', '#E7D5BF', '#D8D5DC'],
        selectedMetal: 0
    },
    {
        id: 2,
        name: 'Classic Solitaire Ring',
        price: '$16,570',
        metal: 'Rose Gold',
        shape: 'Oval',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/049cb4b716c1f2db69008a82461ed02ef0cf9037?width=1100',
        metalColors: ['#E8C5AF', '#DBD9DA', '#E7D5BF', '#D8D5DC'],
        selectedMetal: 0
    },
    {
        id: 3,
        name: 'Classic Solitaire Ring',
        price: '$16,570',
        metal: 'Rose Gold',
        shape: 'Oval',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/1d834eb5ab2582c7756d4f3361998dad65c1f18f?width=1100',
        metalColors: ['#E8C5AF', '#DBD9DA', '#E7D5BF', '#D8D5DC'],
        selectedMetal: 0
    },
    {
        id: 4,
        name: 'Classic Solitaire Ring',
        price: '$16,570',
        metal: 'Rose Gold',
        shape: 'Oval',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/5958c1efab8f4e8461fb6dd710195119222c39d2?width=1100',
        metalColors: ['#E8C5AF', '#DBD9DA', '#E7D5BF', '#D8D5DC'],
        selectedMetal: 0
    },
    {
        id: 5,
        name: 'Classic Solitaire Ring',
        price: '$16,570',
        metal: 'Rose Gold',
        shape: 'Oval',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/3a5e61d0d5980719976e55935f3a79d8b0517252?width=1100',
        metalColors: ['#E8C5AF', '#DBD9DA', '#E7D5BF', '#D8D5DC'],
        selectedMetal: 0,
        isBestSeller: true,
    },
    {
        id: 6,
        name: 'Classic Solitaire Ring',
        price: '$16,570',
        metal: 'Rose Gold',
        shape: 'Oval',
        image: 'https://api.builder.io/api/v1/image/assets/TEMP/049cb4b716c1f2db69008a82461ed02ef0cf9037?width=1100',
        metalColors: ['#E8C5AF', '#DBD9DA', '#E7D5BF', '#D8D5DC'],
        selectedMetal: 0
    }
];

export const diamondShapes = ["Round", "Radiant", "Pear"]