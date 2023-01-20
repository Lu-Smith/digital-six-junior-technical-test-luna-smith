import { Link } from "react-router-dom";
import classes from "./viewProductButton.sass";

export default function ViewProductButton({ productPermaLink}) {
  const permaLink = productPermaLink;

  return (
    <div className="ViewProductButton">
      <Link to={`/product/${permaLink}`}>View Product</Link>
      <div className="bubble1"></div>
      <div className="bubble2"></div>
      <div className="bubble3"></div>
      <div className="bubble4"></div>
      <div className="bubble5"></div>
      <div className="bubble6"></div>
    </div>
  );
}
