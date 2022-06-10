import React, { useEffect, useState } from "react";

import { QuestContents, IQuest } from 'Components/Data/Contents/Quest';
import './Home.scss';
import Header from "./Header/Header"
import Game from "./Game/Game"
import Inprogress from "./Inprogress/Inprogress"

function Home() {
    const [score, setScore] = useState(0);
    const [stage, setStage] = useState(0);
    const [data, setData] = useState(QuestContents)
    const [total, setTotal] = useState(0);
    const [compare, setCompare] = useState(false)
    const [current, setCurrent] = useState({
        type_a: 0,
        type_b: 0,
        result: 0,
    })

    useEffect(() => {
        setTotal(data.length);
        hendleStageUp();
    }, [])
    useEffect(() => {
        console.log(current)
    }, [current])
    function hendleStageUp() {
        setStage(stage + 1);
        hendleStageSetting()
    }
    function hendleScoreUp() {
        setScore(score + 1);
    }
    function hendleTarget(input: number, result: number) {
        setCompare(true);
        if (input === result) {
            hendleScoreUp();
            console.log("성공");
        }
        else {
            console.log("실패");
        }
    }

    function hendleNext() {
        setCompare(false);
        hendleStageUp();
    }
    function hendleStageSetting() {
        data.map((value) => {
            if (value.id === stage) {
                let newItem = {
                    type_a: value.type_a,
                    type_b: value.type_b,
                    result: value.result
                }
                setCurrent(
                    newItem
                )

            }
        })
    }
    return (
        <>
            <div className="home-container">

                <div className="home-wrapper">
                    <Header score={score} />
                    <Game
                        score={score}
                        stage={stage}
                        type_a={current.type_a}
                        type_b={current.type_b}
                        result={current.result}
                        compare={compare}
                        hendleTarget={hendleTarget}
                        hendleNext={hendleNext}
                    />
                    <Inprogress score={score} inprogress={stage} total={total} />
                </div>

            </div>
        </>
    )
}

export default Home;