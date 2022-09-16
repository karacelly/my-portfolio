import React from "react";
import s from "./style.module.scss";

const BorderButton = (props) => (
  <>
    <button className={s.button}>
      <span className={s.buttonText}>{props.children}</span>
    </button>
  </>
);

export default BorderButton;
