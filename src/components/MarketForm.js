import { useSelector, useDispatch } from "react-redux";
import { addProduct, changeProductForm, resetProductForm } from "../actions/actionCreators";

export default function MarketForm() {
  const form = useSelector((state) => state.marketForm);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addProduct(
      form.title,
      form.price,
      form.discount,
      form.image,
    ));
    dispatch(resetProductForm());
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(changeProductForm(name, value));
  }

  const handleReset = () => {
    dispatch(resetProductForm());
  }

  return (
    <form className="MarketForm" onSubmit={handleSubmit}>
      <label>Название товара
        <input name="title" onChange={handleChange} value={form.title} />
      </label>
      <label>Цена
        <input name="price" onChange={handleChange} value={form.price} />
      </label>
      <label>Цена со скидкой
        <input name="discount" onChange={handleChange} value={form.discount} />
      </label>
      <label>Ссылка на фото товара
        <input name="image" onChange={handleChange} value={form.image} />
      </label>
      <button type="submit">Добавить</button>
      <button type="reset" onClick={handleReset}>Сбросить</button>
    </form>
  )
}