import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Header.scss";
import Logo from "Assets/Images/logo-bk.png"
interface IHeader {
    score: number
}
const Header: React.FC<IHeader> = ({
    score
}) => {
    const { t } = useTranslation();
    return (
        <div className="header-container">
            <div className="header-wrapper">
                {/* <div className="header-title">NOMAD</div> */}
                <img className="header-title" src={Logo} alt="" />
                {/* <div className="header-score">SCORE : {score}</div> */}
            </div>
        </div >
    );
};

export default Header;