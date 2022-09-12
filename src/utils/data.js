import IceCream from '../img/i1.png';
import StrawBerries from '../img/f1.png';
import ChickenKebab from '../img/c3.png';
import FishKebab from '../img/fi1.png';

export const heroData = [
  { id: 1, name: 'Icecream', decp: 'Chocolate & Vanilla', price: '5.25', imageScr: IceCream },
  {
    id: 2,
    name: 'Strawberries',
    decp: 'Fresh Strawberries',
    price: '5.25',
    imageScr: StrawBerries,
  },
  { id: 3, name: 'Chicken', decp: 'Mixed Chicken & Kebab', price: '5.25', imageScr: ChickenKebab },
  { id: 4, name: 'Fish', decp: 'mixed Fish & Kebab', price: '5.25', imageScr: FishKebab },
];

export const categories = [
  {
    id: 1,
    name: 'Chicken',
    urlParamName: 'chicken',
  },
  {
    id: 2,
    name: 'Curry',
    urlParamName: 'curry',
  },
  {
    id: 3,
    name: 'Rice',
    urlParamName: 'rice',
  },
  {
    id: 4,
    name: 'Fish',
    urlParamName: 'fish',
  },
  {
    id: 5,
    name: 'Fruits',
    urlParamName: 'fruits',
  },
  {
    id: 6,
    name: 'Icecreams',
    urlParamName: 'icecreams',
  },

  {
    id: 7,
    name: 'Soft Drinks',
    urlParamName: 'drinks',
  },
];
