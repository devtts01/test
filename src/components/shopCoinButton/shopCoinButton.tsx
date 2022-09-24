import "./shopCoinButton.scss";
import Button from "@atlaskit/button";
import Styled from "styled-components";
import React from "react";
import styled from "styled-components";

interface coinButton {
  label: string;
  iconBefore?: string;
  iconAfter?: string;
  onClick?: (e: any) => void;
  isDisabled?: boolean;
  buttonColor?: "yellow" | "red" | "border-red" | "border-yellow" | "pure";
}

const RedButton = styled.div`
  button {
    background-color: #d50000 !important;
  }
  .shopCoinButton-title {
    color: #ffffff !important;
  }
`;
const BorderYellowButton = styled.div`
  button {
    background-color: white !important;
    border: 1px solid #fbb000 !important;
  }
  .shopCoinButton-title {
    color: #fbb000 !important;
  }
`;
const BorderRedButton = styled.div`
  button {
    background-color: white !important;
    border: 1px solid #d50000 !important;
  }
  .shopCoinButton-title {
    color: #d50000 !important;
  }
`;
const PureButton = styled.div`
  button {
    background-color: white !important;
    border: 1.5px solid #E0E0E0 !important;
  }
  .shopCoinButton-title {
    color: #424242 !important;
  }
`;

function ShopCoinButton(props: coinButton) {
  return (
    <div className="shopCoinButton-container">
      {props.buttonColor == "red" && (
        <RedButton>
          <Button
            className="buttonCoin"
            appearance="primary"
            onClick={props.onClick}
            isDisabled={props.isDisabled}
          >
            {!!props.iconBefore && (
              <div className="shopCoinButton-iconBefore">
                <img src={props.iconBefore}></img>
              </div>
            )}
            <div className="shopCoinButton-title">{props.label}</div>
            {!!props.iconAfter && (
              <div className="shopCoinButton-iconAfter">
                <img src={props.iconAfter}></img>
              </div>
            )}
          </Button>
        </RedButton>
      )}

      {(!props.buttonColor || props.buttonColor == "yellow") && (
        <Button
          className="buttonCoin"
          appearance="primary"
          onClick={props.onClick}
          isDisabled={props.isDisabled}
        >
          {!!props.iconBefore && (
            <div className="shopCoinButton-iconBefore">
              <img src={props.iconBefore}></img>
            </div>
          )}
          <div className="shopCoinButton-title">{props.label}</div>
          {!!props.iconAfter && (
            <div className="shopCoinButton-iconAfter">
              <img src={props.iconAfter}></img>
            </div>
          )}
        </Button>
      )}

      {props.buttonColor == "border-yellow" && (
        <BorderYellowButton>
          <Button
            className="buttonCoin"
            appearance="primary"
            onClick={props.onClick}
            isDisabled={props.isDisabled}
          >
            {!!props.iconBefore && (
              <div className="shopCoinButton-iconBefore">
                <img src={props.iconBefore}></img>
              </div>
            )}
            <div className="shopCoinButton-title">{props.label}</div>
            {!!props.iconAfter && (
              <div className="shopCoinButton-iconAfter">
                <img src={props.iconAfter}></img>
              </div>
            )}
          </Button>
        </BorderYellowButton>
      )}

      {props.buttonColor == "border-red" && (
        <BorderRedButton>
          <Button
            className="buttonCoin"
            appearance="primary"
            onClick={props.onClick}
            isDisabled={props.isDisabled}
          >
            {!!props.iconBefore && (
              <div className="shopCoinButton-iconBefore">
                <img src={props.iconBefore}></img>
              </div>
            )}
            <div className="shopCoinButton-title">{props.label}</div>
            {!!props.iconAfter && (
              <div className="shopCoinButton-iconAfter">
                <img src={props.iconAfter}></img>
              </div>
            )}
          </Button>
        </BorderRedButton>
      )}

      {props.buttonColor == "pure" && (
        <PureButton>
          <Button
            className="buttonCoin"
            appearance="primary"
            onClick={props.onClick}
            isDisabled={props.isDisabled}
          >
            {!!props.iconBefore && (
              <div className="shopCoinButton-iconBefore">
                <img src={props.iconBefore}></img>
              </div>
            )}
            <div className="shopCoinButton-title">{props.label}</div>
            {!!props.iconAfter && (
              <div className="shopCoinButton-iconAfter">
                <img src={props.iconAfter}></img>
              </div>
            )}
          </Button>
        </PureButton>
      )}
    </div>
  );
}

export default ShopCoinButton;
