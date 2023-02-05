import MenuList from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/menu.css";
const Menu = () => {
  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              info={menuItem.info}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;

// {MenuList.map((menuItem, key) => {
//   return <div>{menuItem.name}</div>;
// })}
