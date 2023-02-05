const MenuItem = (props) => {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${props.image})` }}></div>
      <h1>{props.name}</h1>
      <p>{props.price}$</p>
      <p>{props.info}</p>
    </div>
  );
};

export default MenuItem;
