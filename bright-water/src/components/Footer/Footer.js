import { Link } from "react-router-dom";
import { footerContent } from "../../lib/footerContent";
import classes from "./footer.sass";

export default function Footer({ navItems }) {
  return (
    <div className="Footer">
      <div className="mainFooter">
          <h2>Bright Water</h2>
          <ul>
            {navItems.map((item, index) => {
                  if (item.name === "Basket") {
                      return <li key={index}>
                                <Link to={item.link}>
                                    <span className="material-symbols-outlined">
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
      <div className="fillerFooter">
        {footerContent.map((content, index) => {
          return (
            <ul key={index}>
              <ul>
                <li className="title">{content.title}</li>
                <li>{content.filler1}</li>
                <li>{content.filler2}</li>
                <li>{content.filler3}</li>
              </ul>
            </ul>
          )
        })}
      </div>
        
       
    </div>
  );
}
