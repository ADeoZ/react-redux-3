import { nanoid } from 'nanoid';
import { ADD_PRODUCT } from '../actions/actionTypes';

const initial_state = [
  { id: nanoid(), title: 'Товар1', price: 2000, discount: 1850, image: `https://placeimg.com/200/200/tech?${nanoid(5)}` },
  { id: nanoid(), title: 'Товар2', price: 3700, discount: 0, image: `https://placeimg.com/200/200/tech?${nanoid(5)}` },
  { id: nanoid(), title: 'Товар3', price: 4500, discount: 2320, image: `https://placeimg.com/200/200/tech?${nanoid(5)}` },
  { id: nanoid(), title: 'Товар4', price: 5620, discount: 0, image: `https://placeimg.com/200/200/tech?${nanoid(5)}` },
  { id: nanoid(), title: 'Товар5', price: 1000, discount: 0, image: `https://placeimg.com/200/200/tech?${nanoid(5)}` },
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
        image: `${image}?${nanoid(5)}`,
      }
      ];
    }
    default:
      return state;
  }
}