import React from "react";

import LogoImg from "../../assets/images/burger-logo.png";

import css from "./style.module.css"

const Logo = () => (
    <div className={css.Logo}>
        <img src={LogoImg}/>
    </div>
)

export default Logo;