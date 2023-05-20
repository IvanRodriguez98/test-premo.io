import elspethPhoto from "src/assets/imagenes/elspeth.jpg";
import linettePhoto from "src/assets/imagenes/linnete.jpg";
import TeamMember from "../shared/team-member/TeamMember";

export default function Team() {
    return (
        <div className="container mt-4 mb-4">
            <div className="align-items-center text-center">
                <span className="text-blue">Estamos contratando</span>
                <h1>Conoce a nuestro equipo</h1>
                <p className="text-gray text-center">Tenemos una filosofía sencilla: contratamos a individuos apasionados y diversos, y creamos una cultura que les permita realizar su trabajo de la mejor manera posible.</p>
                <button className="btn btn-primary btn-rounded text-center">Vacantes disponibles</button>
                <div className="row mt-5 ml-5 mr-5">
                    <TeamMember img={elspethPhoto} name="Elspeth Watkiss" charge="Fundador" chargeDesc="Fundador de PREMO"/>
                    <TeamMember img={linettePhoto} name="Linette Sebrens" charge="CEO" chargeDesc="Directora general de PREMO"/>
                </div>
            </div>
        </div>
    )
}