import { nanoid } from 'nanoid';
import { ADD_PRODUCT } from '../actions/actionTypes';

const initial_state = [
  { id: nanoid(), title: 'Горный Алтай', price: 65000, discount: 48000, image: `https://placeimg.com/150/150/nature?${nanoid(5)}` },
  { id: nanoid(), title: 'Камчатка с комфортом', price: 87000, discount: 0, image: `https://placeimg.com/150/150/nature?${nanoid(5)}` },
  { id: nanoid(), title: 'Велотур по берегам Крыма', price: 32000, discount: 24500, image: `https://placeimg.com/150/150/nature?${nanoid(5)}` },
  { id: nanoid(), title: 'Байкал за 5 дней', price: 57000, discount: 0, image: `https://placeimg.com/150/150/nature?${nanoid(5)}` },
  { id: nanoid(), title: 'Сплав по Карелии', price: 47000, discount: 45300, image: `https://placeimg.com/150/150/nature?${nanoid(5)}` },
];

export default function marketListReducer(state = initial_state, action) {
  switch (action.type) {
    case ADD_PRODUCT: {
      const {
        title,
        price,
        discount,
        image,
      } = action.payload;
      return [...state,
      {
        id: nanoid(),
        title,
        price: Number(price),
        discount: Number(discount),
        image,
      }
      ];
    }
    default:
      return state;
  }
}