function Button(props) {
  return (
    <a href="https://example.come">
      <button className="btn small"> {props.text} </button>
    </a>
  );
}

export default Button;
