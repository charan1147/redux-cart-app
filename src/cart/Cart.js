import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../cart/cartSlice';
import './Cart.css';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const subtotal = cart.reduce(
    (total, item) => total + parseInt(item.price.replace(/,/g, '')) * item.quantity,
    0
  );
  
  console.log((subtotal ));
  
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} />
            
              <ul>
              <h4>{item.title}</h4> 
              {item.features.map((feature,index)=>(
              <li key={index} >{feature}</li>
              ))}
              <p>Price: ₹{item.price.toLocaleString('en-IN')}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
              <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              </ul>
              
            </li>
          ))}
        </ul> 
      )}
    <p>SubTotal: ₹{subtotal.toLocaleString('en-IN')}</p>
    </div>
  );
};

export default Cart;
