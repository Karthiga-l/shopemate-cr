import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

export const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, cartList } = useCart();
  const [isInCart, setIsInCart] = useState(false);
  const { id, name, price, image } = product;

  function handleAdd() {
    addToCart(product);
  }

  useEffect(() => {
    const productIsInCart = cartList.find((cartItem) => cartItem.id === id);
    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, id]);

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (
          <button className="remove" onClick={() => removeFromCart(product)}>
            Remove
          </button>
        ) : (
          <button onClick={handleAdd}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};