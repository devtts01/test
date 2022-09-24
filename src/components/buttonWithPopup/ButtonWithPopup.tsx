import { memo, useEffect, useRef, useState } from "react";
import "./ButtonWithPopup.scss";

interface IButtonWithPopupProps {
  menuItem: { title?: string; action: (e: any) => void; iconPre?: any }[];
  icon?: string;
  label?: string;
}

function ButtonWithPopup(props: IButtonWithPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef() as any;

  const clickOutSide = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickOutSide);

    return () => document.removeEventListener("click", clickOutSide);
  }, [ref]);
  return (
    <div className="button-with-popup-container">
      {isOpen && (
        <div className="menu-wrapper">
          {props.menuItem.map((item, index) => (
            <div
              className="item hover"
              key={"menuItem-" + index}
              onClick={(e) => {
                item.action(e);
                setIsOpen(false);
              }}
            >
              {item.iconPre && <img src={item.iconPre} />}
              <div>{item.title}</div>
            </div>
          ))}
        </div>
      )}
      <div
        className="action-wrapper"
        onClick={() => setIsOpen(!isOpen)}
        ref={ref}
      >
        {!!props.icon && <img className="hover" src={props.icon} />}
        {!!props.label && <div>{props.label}</div>}
      </div>
    </div>
  );
}

export default memo(ButtonWithPopup);
