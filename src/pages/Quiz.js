import React, { useState, useEffect } from 'react'
import { quiz as quizData } from '../components/quiz/fakeData'
import { useTimer } from 'react-timer-hook';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [quiz, setQuiz] = useState(quizData);
    const [score, setScore] = useState({
        correct: 0,
        false: 0,
    })



    const { question, options } = quiz[currentIndex];

    const MINUTES = 10 * 60;
    const time = new Date();
    time.setSeconds(time.getSeconds() + MINUTES); // 10 minutes timer

    const { seconds, minutes, hours, } = useTimer({
        expiryTimestamp: time,
        onExpire: () => navigate('/quizsummary', { state: { quiz, score } }),

    });

    const checkscore = () => {
        const questionAnswred = quiz.filter((item) => item.selected);
        const questionCorrect = questionAnswred.filter((item) =>
            item.options.find(
                (option) => option.correct && option.selected === option.correct
            )
        )
        setScore({
            correct: questionCorrect.length,
            false: quiz.length - questionCorrect.length,
        })
    }

    useEffect(() => {
        checkscore();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quiz]);

    const nextQuestion = () => {
        if (quiz.length - 1 === currentIndex) return;
        setCurrentIndex(currentIndex + 1)

    }

    const perviousQuestion = () => {
        if (currentIndex === 0) return;
        setCurrentIndex(currentIndex - 1)

    }

    const selectOption = (indexSelected, indexOptionSelected) => {
        setQuiz(
            quiz.map((item, index) =>
                index === indexSelected
                    ? {
                        ...item,
                        selected: true,
                        options: options.map((item, index) =>
                            index === indexOptionSelected
                                ? { ...item, selected: true }
                                : { ...item, selected: false }

                        ),
                    }
                    : item
            )
        )
    }


    return (
        <div className='container'>
            {/* Tittle */}
            <h1 className='text-center'>
                Quiz Screeen - Score: {score.correct} - {score.false} || Timer : {hours} : {minutes} : {seconds}
            </h1>
            {/* Nomor quiz */}
            <div className="card">
                <div className="card-body" style={{
                    display: "flex",
                    padding: 10,
                    flexWrap: "wrap"
                }}>

                    {quiz.map((item, index) => (
                        <div className="border border-primary"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 40,
                                width: 40,
                                marginRight: 5,
                                borderRadius: 5,
                                cursor: "pointer",
                                backgroundColor:
                                    index === currentIndex
                                        ? "greenyellow"
                                        : item?.selected
                                            ? "grey"
                                            : "transparent"
                            }}
                            onClick={() => setCurrentIndex(index)}
                        >
                            {index + 1}
                        </div>
                    ))}

                </div>
            </div>

            {/* Body Quiz */}
            <div className="card">
                <div className="card-header bg-white fw-bold" style={{
                    fontSize: 20,
                }}>
                    {currentIndex + 1}. {question}
                </div>
                <div className="card-body">
                    {/* Option Quiz */}
                    {options.map((item, index) => (
                        <div style={{
                            display: "flex",
                            justifyItems: "center",
                            alignItems: "center"
                        }}
                            key={index}
                        >
                            <div style={{
                                height: 20,
                                width: 20,
                                borderRadius: 100,
                                backgroundColor: item?.selected ? "greenYellow" : "grey",
                                cursor: "pointer",
                                marginRight: 5,

                            }}

                                onClick={() => selectOption(currentIndex, index)}
                            />
                            {item.title}
                        </div>
                    ))}
                </div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: "space-between",
                paddingTop: 5

            }}>
                {/* pre button */}
                <button
                    className="btn btn-info col-sm-2"
                    onClick={() => perviousQuestion()}
                    disabled={currentIndex === 0 ? true : false}
                >
                    Previos
                </button>

                {quiz.length - 1 === currentIndex ? (
                    (
                        <Link className="btn btn-success col-sm-2" to='/quizsummary' state={{ quiz, score }}>
                            Finish</Link>
                    )
                ) : (
                    <button
                        className="btn btn-info col-sm-2"
                        onClick={() => nextQuestion()}
                    >
                        Next
                    </button>
                )}

            </div>
        </div >
    )
}

export default Quiz