import { useState } from "react";
import "./textFieldShopCoin.scss";

interface coinField {
  placeholder?: string;
  title?: string;
  valueStateFunction?: any;
  valueEdit?: string;
  message?: any;
  iconBefore?: string;
  iconAfter?: string;
  validation?: boolean;
  isDisable?: boolean;
  type?: string;
  keyDownEvent?: any;
}

function TextFieldShopCoin(props: coinField) {
  let [valueFieldCoin, setcoinField] = useState(props.valueEdit);
  const handleChange = (event: any) => {
    setcoinField((valueFieldCoin = event.target.value));
    props.valueStateFunction(valueFieldCoin);
  };
  if (!props.isDisable || props.isDisable === undefined) {
    if (props.validation || props.validation === undefined)
      return (
        <div className="textFieldShopCoin-container">
          {!!props.title && (
            <div className="textFieldShopCoin-title">{props.title}</div>
          )
          }
          <div className="textFieldShopCoin-input">
            {!!props.iconBefore && (
              <div className="iconBefore">
                <img alt="" src={props.iconBefore}></img>
              </div>
            )}
            {!!props.type && (
              <input
                type={props.type}
                onChange={handleChange}
                placeholder={props.placeholder}
                value={props.valueEdit}
                onKeyDown={props.keyDownEvent}
              />
            )}
            {!props.type && (
              <input
                type="text"
                onChange={handleChange}
                placeholder={props.placeholder}
                value={props.valueEdit}
                onKeyDown={props.keyDownEvent}
              />
            )}
            {!!props.iconAfter && (
              <div className="iconAfter">
                <img alt="" src={props.iconAfter}></img>
              </div>
            )}
          </div>
          {!!props.message && (
            <div className="textFieldShopCoin-message">{props.message}</div>
          )}
        </div>
      );
    else
      return (
        <div className="textFieldShopCoin-container-error">
          {!!props.title && (
            <div className="textFieldShopCoin-title">{props.title}</div>
          )
          }
          <div className="textFieldShopCoin-input">
            {!!props.iconBefore && (
              <div className="iconBefore">
                <img alt="" src={props.iconBefore}></img>
              </div>
            )}

            {!!props.type && (
              <input
                type={props.type}
                onChange={handleChange}
                placeholder={props.placeholder}
                value={props.valueEdit}
                onKeyDown={props.keyDownEvent}
              />
            )}
            {!props.type && (
              <input
                type="text"
                onChange={handleChange}
                placeholder={props.placeholder}
                value={props.valueEdit}
                onKeyDown={props.keyDownEvent}
              />
            )}
            {!!props.iconAfter && (
              <div className="iconAfter">
                <img alt="" src={props.iconAfter}></img>
              </div>
            )}
          </div>
          {!!props.message && (
            <div className="textFieldShopCoin-message">{props.message}</div>
          )}
        </div>
      );
  } else
    return (
      <div className="textFieldShopCoin-container-disable">
        {!!props.title && (
          <div className="textFieldShopCoin-title">{props.title}</div>
        )
        }
        <div className="textFieldShopCoin-input">
          {!!props.iconBefore && (
            <div className="iconBefore">
              <img alt="" src={props.iconBefore}></img>
            </div>
          )}

          {!!props.type && (
            <input
              type={props.type}
              onChange={handleChange}
              placeholder={props.placeholder}
              value={props.valueEdit}
              onKeyDown={props.keyDownEvent}
            />
          )}
          {!props.type && (
            <input
              type="text"
              onChange={handleChange}
              placeholder={props.placeholder}
              value={props.valueEdit}
              onKeyDown={props.keyDownEvent}
            />
          )}
          {!!props.iconAfter && (
            <div className="iconAfter">
              <img alt="" src={props.iconAfter}></img>
            </div>
          )}
        </div>
        {!!props.message && (
          <div className="textFieldShopCoin-message">{props.message}</div>
        )}
      </div>
    );
}

export default TextFieldShopCoin;
