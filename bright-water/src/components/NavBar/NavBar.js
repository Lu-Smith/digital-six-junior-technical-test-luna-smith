import { Link } from "react-router-dom";
import classes from "./navBar.sass";

export default function NavBar({ navItems }) {
  return (
    <div>
      <h2>NavBar Component</h2>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
