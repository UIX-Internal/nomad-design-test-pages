
import React, { useState, useCallback } from 'react';
import { QuestContents, IQuest } from 'Components/Data/Contents/Quest';
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
        if (select === 1) {
            setSelect(2);
        }
        else if (select === 2) {
            setSelect(1);
        }
    }
    function toggleMouseUp() {
        if (select === 1) {
            setSelect(2);
        }
        else if (select === 2) {
            setSelect(1);
        }
    }
    function toggleMouseDown() {
        if (select === 1) {
            setSelect(2);
        }
        else if (select === 2) {
            setSelect(1);
        }
    }

    return (
        <div className="game-container">
            <div className="game-wrapper">

                <div className='select-container'>
                    <div className="select-wrapper">
                        <div className='box-front'>
                            {select !== 2 &&
                                <div className={'front ' + (compare ? "check" : "")}>
                                    <img src={type_a} alt="" onClick={() => {
                                        hendleTarget(1, result);
                                        setSelect(1)
                                    }} />
                                </div>
                            }
                            {select !== 1 &&
                                <div className={'back ' + (compare ? "check" : "")}>
                                    <img src={type_b} alt="" onClick={() => {
                                        hendleTarget(2, result);
                                        setSelect(2)
                                    }} />
                                </div>
                            }

                        </div>
                    </div>
                </div>
                {
                    !compare
                        ?
                        <p className='description'>완벽한 디자인을 선택해주세요</p>
                        :
                        select === result ?
                            <p className='description-compare'>정답입니다.</p>
                            :
                            <p className='description-compare'>틀렸습니다.</p>
                }
                {/* {compare === true &&
                    select === result ?
                    <p className='description-compare'>정답입니다.</p>
                    :
                    <p className='description-compare'>틀렸습니다.</p>
                }
                {compare === false &&
                    <p className='description'>완벽한 디자인을 선택해주세요</p>
                } */}


                {compare === true &&
                    <div className='result-btn-wrapper'>
                        <button className='compare' onTouchStart={toggleMouseUp} onTouchEnd={toggleMouseDown} onMouseUp={toggleMouseUp} onMouseDown={toggleMouseDown} /*onClick={hendleCompare}*/>
                            비교하기
                        </button>
                        <div className='next' onClick={() => {
                            hendleNext();
                            setSelect(0)
                        }}>
                            다음
                        </div>
                    </div>
                }
            </div>
        </div >
    );
};

export default Game;