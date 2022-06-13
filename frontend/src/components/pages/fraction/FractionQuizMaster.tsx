import React, { useState } from "react";
import { FractionQuestions } from "./FractionQuestion";
import FractionQuiz from "./FractionQuiz";
import { FractionPointModel } from "./FractionQuestionModel";
import { FractionEnum } from "./FractionEnum";
import axios from "axios";
import FadeIn from "react-fade-in";

function FractionQuizMaster() {
    const [pageIndex, setPageIndex] = useState(1);
    const [pointMatrix, setPointMatrix] = useState(new Map<number, number>());
    const [quizFinished, setQuizFinished] = useState<boolean>(false);
    const [resultFraction, setResultFraction] = useState<string>();

    const goToNextPage = () => {
        setPageIndex(pageIndex + 1);
    };

    async function updatePointMatrix(points: FractionPointModel[]) {
        for (const point of points) {
            if (!pointMatrix.has(point.fraction)) {
                pointMatrix.set(point.fraction, point.point);
            } else {
                pointMatrix.set(
                    point.fraction,
                    pointMatrix.get(point.fraction)! + point.point
                );
            }
        }

        if (pageIndex === FractionQuestions.length) {
            setQuizFinished(true);

            let highestPointsFraction: FractionEnum = FractionEnum.HUMAN;
            let highestPoints = 0;

            for (const [fraction, point] of pointMatrix) {
                if (highestPoints === 0) {
                    highestPoints = pointMatrix.get(fraction)!;
                    highestPointsFraction = fraction;
                } else if (point > highestPoints) {
                    highestPoints = point;
                    highestPointsFraction = fraction;
                }
            }

            console.log(
                `You got ${highestPoints} points for ${FractionEnum[highestPointsFraction]}`,
                pointMatrix
            );

            setResultFraction(FractionEnum[highestPointsFraction]);

            const { REACT_APP_BASE_URL } = process.env;
            const fractionApiUrl = `${REACT_APP_BASE_URL}/api/user/fraction`;
            const headers = {
                headers: {
                    "Content-Type": "application/json",
                    mode: "no-cors",
                    AccessControlAllowOrigin: "*",
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`
                }
            };

            await axios.put(
                fractionApiUrl,
                {
                    fraction: FractionEnum[highestPointsFraction]
                },
                headers
            );
        }
    }

    return (
        <>
            <div>
                <div
                    style={{
                        margin: "auto",
                        width: "80%",
                        height: "30%"
                    }}
                >
                    <hr />
                    <h1 className="mb-1" style={{ color: "black" }}>
                        Which character are you
                    </h1>
                    {!quizFinished && (
                        <div className="control" style={{ color: "black" }}>
                            {FractionQuestions?.map((data) => (
                                <>
                                    {pageIndex === data.id ? (
                                        <FractionQuiz
                                            question={data.question}
                                            id={data.id}
                                            answers={data.answers}
                                            updatePointMatrix={(points) =>
                                                updatePointMatrix(points)
                                            }
                                            nextPage={goToNextPage}
                                        />
                                    ) : (
                                        <></>
                                    )}
                                </>
                            ))}
                        </div>
                    )}
                    {quizFinished && (
                        <>
                            <FadeIn delay={200} transitionDuration={3000}>
                                <div
                                    style={{
                                        display: "flex"
                                    }}
                                >
                                    <img
                                        src={
                                            "../fractions/" +
                                            resultFraction?.toLocaleLowerCase() +
                                            ".jpg"
                                        }
                                        style={{
                                            width: "30vw",
                                            height: "50vh",
                                            margin: "auto"
                                        }}
                                    />
                                </div>
                                <div
                                    style={{
                                        color: "black",
                                        display: "flex",
                                        alignItems: "center"
                                    }}
                                >
                                    <h2>
                                        Your race{" "}
                                        {resultFraction?.toLocaleLowerCase()}
                                    </h2>
                                </div>
                            </FadeIn>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default FractionQuizMaster;
