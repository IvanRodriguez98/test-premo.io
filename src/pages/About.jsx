import Contact from "src/components/contact/Contact";
import Metrics from "src/components/metrics/Metrics";
import Team from "src/components/team/Team";

export default function About() {
    return (
        <section className="w-100 animate__animated animate__fadeIn animate__slow">
            {/* Inicio de pagina */}
            <div className="container mt-4">
                <div className="align-items-center text-center">
                    <span className="text-blue">Nosotros</span>
                    <h1>Información sobre la compañia</h1>
                    <p className="text-gray">Aprende más acerca de la empresa y el equipo detrás de ella</p>
                </div>
            </div>
            {/* Seccion de metricas */}
            <Metrics />
            {/* Seccion de equipo */}
            <Team />
            {/* Seccion de contacto */}
            <Contact />
        </section>
    )
}