import { Link } from "react-router-dom";
import classes from "./footer.sass";

export default function Footer({ navItems }) {
  return (
    <div>
      <h2>Footer Component</h2>
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
