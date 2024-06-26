function Status(props) {
  return (
    <div>
      <h2>
        {props.details.direction} - {props.details.airport} ✈{" "}
      </h2>
      <hr />
    </div>
  );
}

export default Status;
