import React, { useState } from "react";
import { quizInput } from "./QuizInput";
import Quiz from "./Quiz";
import QuizResult from "./QuizResult";

function QuizMaster() {
    const [pageIndex, setPageIndex] = useState(0);

    const goToNextPage = () => {
        setPageIndex(pageIndex + 1);
    };
    return (
        <div>
            <div style={{ margin: "auto", width: "80%", height: "30%" }}>
                <hr />
                <h2 className="mb-1" style={{ color: "black" }}>
                    Quiz
                </h2>
                <div className="control" style={{ color: "black" }}>
                    {quizInput?.map((data) => (
                        <>
                            {pageIndex === data.id ? (
                                <Quiz
                                    question={data.question}
                                    joyces={data.joyces}
                                    correctAnswer={data.correctAnswer}
                                    id={pageIndex}
                                    userAnswer={data.userAnswer}
                                />
                            ) : (
                                <></>
                            )}
                        </>
                    ))}
                </div>
                {pageIndex < quizInput.length ? (
                    <input
                        className={"btn btn-primary App"}
                        type={"button"}
                        value={"Next Question"}
                        onClick={() => goToNextPage()}
                    />
                ) : (
                    quizInput?.map((data) => (
                        <>
                            <QuizResult
                                correctAnswer={data.correctAnswer}
                                id={data.id}
                                userAnswer={data.userAnswer}
                                question={data.question}
                                joyces={data.joyces}
                            />
                        </>
                    ))
                )}
            </div>
        </div>
    );
}

export default QuizMaster;
