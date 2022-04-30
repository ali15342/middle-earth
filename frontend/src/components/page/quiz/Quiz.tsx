import React, {useState} from "react";
import {quizInput} from "./QuizInput";
import QuizMaster from "./QuizMaster";

function Quiz () {
    const [pageIndex, setPageIndex] = useState(0);
    const goToNextPage = () => {
        setPageIndex(pageIndex + 1);
    };

    return (
        <div className="App">
            <div className="content" style={{margin: "auto", width: "80%", height: "30%"}}>
                <hr/>
                <h2 className="mb-1" style={{color: "white"}}>Quiz</h2>
                        <div className="control" style={{color: "white"}}>
                            {quizInput?.map(data =>(
                            <>
                                {
                                pageIndex === data.id ?
                                    <QuizMaster question={data.question} joyces={data.joyces} answer={data.answer}
                                                id={pageIndex}/>
                                    :
                                    <></>
                                }
                            </>))}
                        </div>
                {
                    pageIndex < quizInput.length ?
                    <input className={"btn btn-primary App"} type={"button"} value={"Next Question"}
                           onClick={() => goToNextPage()}/>
                        :
                        <p>Quiz done - Retry</p>
                }
            </div>
        </div>
    );
}

export default Quiz;