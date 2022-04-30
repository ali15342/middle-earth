import React from "react";
import {QuizModel} from "./QuizModel";

const QuizMaster: React.FC<QuizModel> = ({question, joyces , answer}) =>{
    return(
        <div className="topMargin">
            <h2>{question}</h2>
            {joyces.map(data=>
            <>
                <label style={{marginRight: "10px"}}>
                <input type={"radio"} name={"quiz"}/>
                    {data}
                </label>
            </>
            )}
        </div>
    );
};

export default QuizMaster;