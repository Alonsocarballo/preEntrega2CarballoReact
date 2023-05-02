import { useState } from "react";
import Button from 'react-bootstrap/Button';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);
  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };
  const decrement = () => {
    if (quantity < stock) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="Counter">
      <div className="Controls">
        <Button variant="primary" onClick={decrement}>
          -
        </Button>
        <h4 className="Number">{quantity}</h4>
        <Button className="Button2" onClick={increment}>
          + 
        </Button>
      </div>

      <div>
        <Button
          className="Button"
          onClick={() => onAdd(quantity)}disabled={!stock}>
          Agregar al Carrito
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;