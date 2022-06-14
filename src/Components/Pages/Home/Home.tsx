import React, { useEffect, useState } from "react";

import { QuestContents, IQuest } from 'Components/Data/Contents/Quest';
import './Home.scss';
import Header from "./Header/Header"
import Game from "./Game/Game"
import Inprogress from "./Inprogress/Inprogress"
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
function Home() {
    const [score, setScore] = useState(0);
    const [stage, setStage] = useState(0);
    const [data, setData] = useState(QuestContents)
    const [total, setTotal] = useState(0);
    const [compare, setCompare] = useState(false)
    const [current, setCurrent] = useState({
        type_a: "",
        type_b: "",
        result: 0,
    })

    useEffect(() => {
        setTotal(data.length);
        hendleStageUp();
    }, [])
    useEffect(() => {
        console.log(current)
    }, [current])
    useEffect(() => {
        console.log("score : " + score)
    }, [score])
    function hendleStageUp() {
        setStage(stage + 1);
        hendleStageSetting()
    }
    function hendleScoreUp() {
        setScore(score + 1);
    }
    function hendleTarget(input: number, result: number) {
        setCompare(true);
        if (!compare && input === result) {
            hendleScoreUp();
            console.log("성공");
        }
        else if (!compare) {
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
                    <Header />
                    {!(total <= stage) && <Game
                        score={score}
                        stage={stage}
                        type_a={current.type_a}
                        type_b={current.type_b}
                        result={current.result}
                        compare={compare}
                        hendleTarget={hendleTarget}
                        hendleNext={hendleNext}
                    />
                    }

                    <Inprogress score={score} inprogress={stage - 1} total={total - 1} />
                </div>

            </div>
        </>
    )
}

export default Home;