import React from "react";
import { AnswerModel, FractionPointModel } from "./FractionQuestionModel";
import * as _ from "lodash";
import { parseInt } from "lodash";
import toast, { Toaster } from "react-hot-toast";

interface QuizParameters {
    question: string;
    id: number;
    answers: AnswerModel[];
    updatePointMatrix: (pointMatrix: FractionPointModel[]) => void;
    nextPage: () => void;
}

const FractionQuiz: React.FC<QuizParameters> = ({
    question,
    id,
    answers,
    updatePointMatrix,
    nextPage
}) => {
    let answerResult = 0;
    const shuffeledAnswers = _.shuffle(answers);

    function evaluatePoints() {
        if (answerResult !== 0) {
            const answerPoints = answers.find(
                (answer) => answer.id === answerResult
            );

            updatePointMatrix(answerPoints!.points);
            nextPage();
        } else {
            toast.error("Please select an answer", {
                position: "top-center",
                duration: 3000
            });
        }
    }

    function inputChange(event: React.ChangeEvent<HTMLInputElement>) {
        answerResult = parseInt(event.target.value);
    }

    {
        return (
            <div className="textCenter">
                <h2 className="textCenter" style={{ color: "black" }}>{question}</h2>
                {shuffeledAnswers.map((data) => (
                    <>
                        <label style={{ marginRight: "10px", textAlign: "center"}}>
                            <input
                                type={"radio"}
                                value={data.id}
                                name={"fraction"}
                                onChange={inputChange}
                            />
                            {data.answer}
                        </label>
                        <br />
                    </>
                ))}
                <button className={"btn btn-primary"} onClick={evaluatePoints}>
                    Next
                </button>
            </div>
        );
    }
};

export default FractionQuiz;
