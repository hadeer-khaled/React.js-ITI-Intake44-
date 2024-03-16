import Card from "react-bootstrap/Card";

function MyCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body className="d-flex align-items-center">
        <Card.Title className="text-center">{props.cardTitle}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
