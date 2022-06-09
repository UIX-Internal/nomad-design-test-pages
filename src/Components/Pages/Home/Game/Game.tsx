
import { QuestContents, IQuest } from 'Components/Data/Contents/Quest';
import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import "./Game.scss";

interface IGame {
    score: number,
    stage: number,
    type_a: any,
    type_b: any,
    result: number,
    hendleTarget: any
}
const Game: React.FC<IGame> = ({
    score,
    stage,
    type_a,
    type_b,
    result,
    hendleTarget
}) => {
    const { t } = useTranslation();
    const [select, setSelect] = useState(0);
    useState(() => {
        console.log(stage);
    })
    return (
        <div className="game-container">
            <div className="game-wrapper">
                <div className="game-select" onClick={() => { hendleTarget(1, result) }}>
                    <div className="select" ></div>
                    <p>{type_a}</p>
                </div>
                <div className="game-select" onClick={() => { hendleTarget(2, result) }}>
                    <div className="select" ></div>
                    <p>{type_b}</p>
                </div>
                <p className='description'>완벽한 디자인을 선택해주세요</p>
            </div>
        </div >
    );
};

export default Game;