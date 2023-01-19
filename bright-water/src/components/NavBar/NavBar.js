import { Link } from "react-router-dom";
import classes from "./navBar.sass";

export default function NavBar({ navItems }) {
  return (
    <div className="NavBar">
      <h2>Bright Water</h2>
      <ul>
        {navItems.map((item, index) => {
          if (item.name === "Basket") {
            return <li key={index}>
                      <Link to={item.link}>
                          <span class="material-symbols-outlined">
                              shopping_basket
                          </span>
                      </Link>
                   </li>
          } else {
            return <li key={index}>
                      <Link to={item.link}>{item.name}</Link>
                   </li>
          }
        }
      )}
      </ul>
    </div>
  );
}
