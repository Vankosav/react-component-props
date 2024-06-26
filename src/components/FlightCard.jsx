import Button from "./Button";

function FlightCard(props) {
  return (
    <div className="FlightCard">
      <p>Flight: {props.flightCode}</p>
      <p>Destination: {props.destination}</p>
      <p>Price: {props.price} USD</p>

      <Button text="Book Flight" />
    </div>
  );
}

export default FlightCard;
