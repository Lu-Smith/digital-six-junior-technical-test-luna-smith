import { Link } from "react-router-dom";
import classes from "./footer.sass";

export default function Footer({ navItems }) {
  return (
    <div className="Footer">
      <h2>Bright Water</h2>
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
