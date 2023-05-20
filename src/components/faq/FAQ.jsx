import Question from "src/components/shared/question/Question"
import QUESTIONS from "src/util/questionsData"

export default function FAQ() {
    function renderQuestions() {
        return QUESTIONS.map(({ question, answer }, i) => <Question key={i + 100} question={question} answer={answer} isLast={i == QUESTIONS.length - 1} />)
    }

    return (
        <section className="w-100 bg-gray">
            <br />
            <div className="container mt-4">
                <div className="align-items-center">
                    <h1 className="text-center">Preguntas frecuentes</h1>
                    <p >Tenemos a tu disposición toda la información que necesitas conocer, así como también sobre el proceso de facturación y pagos. Además, nuestro equipo de atención al cliente está disponible para brindarte asesoramiento y resolver cualquier duda que puedas tener al respecto</p>
                </div>
                <div className="w-100">
                    <div className="ml-5 mr-5">
                        {renderQuestions()}
                        <br />
                    </div>
                </div>
            </div>
        </section>
    )
}