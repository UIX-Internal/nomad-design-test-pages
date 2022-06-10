
import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Inprogress.scss";

interface IInprogress {
    score: number,
    inprogress: number,
    total: number
}
const Inprogress: React.FC<IInprogress> = ({
    score,
    inprogress,
    total
}) => {
    const { t } = useTranslation();
    return (
        <div className="inprogress-container">
            <div className="inprogress-wrapper">
                <progress id="id" className='inprogress' value={inprogress} max={total} ></progress>
            </div>
        </div >
    );
};

export default Inprogress;