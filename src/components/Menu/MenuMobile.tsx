import { Link } from "react-router-dom";
import "./menumobile.scss";
import { menu } from "../../data.ts";
import { useState } from "react";

export const MenuMobile = (props: any) => {
  const { setOpen } = props;
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setOpen(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <>
      <div
        className={`menuMobile ${isClosing ? "closing" : ""}`}
        onClick={handleClose}
      >
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={handleClose}>
            X
          </span>

          {menu.map((item) => (
            <div className="item" key={item.id}>
              <span className="title">{item.title}</span>
              {item.listItems.map((listItem) => (
                <Link
                  to={listItem.url}
                  className="listItem"
                  key={listItem.id}
                  onClick={() => setOpen(false)}
                >
                  <img src={listItem.icon} alt={listItem.title} />
                  <span className="listItemTitle">{listItem.title}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
