import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import "./question.css"

function Question({ question = "", answer = "", isLast = false }) {
    const [hideAnswer, setHideAnswer] = useState(true)

    return (
        <div className={`${isLast ? 'question-container-no-border' : 'question-container-border'} w-100 mt-4`} onClick={() => setHideAnswer(!hideAnswer)}>
            <div className="d-flex justify-content-between">
                <h4>{question}</h4>
                {hideAnswer ? <ChevronDownIcon className="btn-icon" /> : <ChevronUpIcon className="btn-icon" />}
            </div>
            {hideAnswer ? null : <p className="text-gray text-justify animate__animated animate__fadeIn">{answer}</p>}
        </div>
    )
}

export default Question