import { Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({ id, name, img, description, price, stock }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <img src={img} alt={name} style={{ height: "10rem" }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Precio: ${price}</Card.Text>
        <Card.Text>Codigo: {id}</Card.Text>
        <Card.Text>Stock disponible: {stock}</Card.Text>
        <footer>
          <ItemCount
            initial={1}
            stock={10}
            onAdd={(quantity) => console.log("Cantidad agregada", quantity)}
          ></ItemCount>
        </footer>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
