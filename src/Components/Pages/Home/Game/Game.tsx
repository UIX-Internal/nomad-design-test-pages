
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
    compare: boolean,
    hendleTarget: any,
    hendleNext: any,
}
const Game: React.FC<IGame> = ({
    score,
    stage,
    type_a,
    type_b,
    result,
    compare,
    hendleTarget,
    hendleNext
}) => {
    const { t } = useTranslation();
    const [select, setSelect] = useState(0);
    useState(() => {
        console.log(stage);
    })
    function hendleCompare() {

    }
    return (
        <div className="game-container">
            <div className="game-wrapper">
                <div className="game-select">
                    <div className="select" ></div>
                    <p onClick={() => { hendleTarget(1, result); }}>{type_a}</p>
                </div>
                <div className="game-select">
                    <div className="select" ></div>
                    <p onClick={() => { hendleTarget(2, result); }}>{type_b}</p>
                </div>
                {compare === false &&
                    <p className='description'>완벽한 디자인을 선택해주세요</p>
                }

                {compare === true &&
                    <div className='result-btn-wrapper'>
                        <div className='compare' onClick={hendleCompare}>
                            비교하기
                        </div>
                        <div className='next' onClick={hendleNext}>
                            다음
                        </div>
                    </div>
                }
            </div>
        </div >
    );
};

export default Game;