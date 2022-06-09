
import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Inprogress.scss";

interface IInprogress {
    score: number
}
const Inprogress: React.FC<IInprogress> = ({
    score
}) => {
    const { t } = useTranslation();
    return (
        <div className="inprogress-container">
            <div className="inprogress-wrapper">
                <progress id="id" className='inprogress' value="0" max="100" ></progress>
            </div>
        </div >
    );
};

export default Inprogress;