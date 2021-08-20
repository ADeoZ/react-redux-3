import { useSelector } from "react-redux";

export default function MarketList() {
  const goods = useSelector((state) => state.marketList);

  return (
    <ul>
      {goods.map((product) =>
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          {product.price} - {product.discount}
          <a href={`/buy/${product.id}`}>
            {product.title}
          </a>
        </li>
      )
      }
    </ul >
  );
}