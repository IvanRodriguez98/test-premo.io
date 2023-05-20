import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
import Logo from "../shared/logo/logo";
import FOOTERDATA from "src/util/footerData";
import "./footer.css"

export default function Footer() {
    let { office, company_links, info_links, legal_links, social_links } = FOOTERDATA;
    let { address, phone, email } = office;
    function renderLinks(links = []) {
        return links.map(({ text, redirect_to }, i) => <li key={i * Math.round(Math.random() + 10)} className="ml-5 mt-4"><a href={redirect_to} className="link">{text}</a></li>)
    }

    return (
        <footer className="mt-5 ml-5">
            {/* Logo */}
            <Logo />
            <br />
            {/* Info y links */}
            <section className="row col-md-12">
                <div className="col-md-3">
                    <ul className="list-unstyled">
                        <h3>Oficina</h3>
                        <li>{address}</li>
                        <li className="mt-3">Teléfono <br /> {phone}</li>
                        <li className="mt-3">Email <br /> {email}</li>
                    </ul>
                </div>
                <div className="p-2 col-md-2 col-lg-3 col-sm-2">
                    <ul className="list-unstyled">
                        <h3>Compañia</h3>
                        {renderLinks(company_links)}
                    </ul>
                </div>
                <div className="p-2 col-md-2 col-lg-3 col-sm-2">
                    <ul className="list-unstyled">
                        <h3>Información</h3>
                        {renderLinks(info_links)}
                    </ul>
                </div>
                <div className="p-2 col-md-3">
                    <ul className="list-unstyled">
                        <h3>Legal</h3>
                        {renderLinks(legal_links)}
                    </ul>
                </div>
            </section>
            {/* Newsletter y redes sociales */}
            <section className="row col-md-12">
                <div className="col-md-10">
                    <div className="row col-md-12">
                        <div className="col-md-4">
                            <h4>Suscríbete a nuestro newsletter.</h4>
                            <br />
                            <p>Las últimas noticias, actualizaciones, tips y más cada semana.</p>
                        </div>
                        <div className="col-sm-8 col-md-8 col-lg-8 mt-3">
                            <div className="form-inline">
                                <div className="form-group mx-sm-4">
                                    <input type="email" className="form-control form-control-lg input-rounded" placeholder="Escribe tu correo aquí" readOnly />
                                </div>
                                <button type="button" className="btn btn-primary mb-2 btn-rounded btn-c-size mt-2">Suscribete <PaperAirplaneIcon className="btn-icon" /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 mt-4">
                    <div className="row">
                        {social_links.map(({ icon, redirect_to }, i) => (
                            <div className="col-2" key={i * Math.round(Math.random() + 10)}>
                                <a href={redirect_to} target="_blank" className="btn btn-primary btn-floating">
                                    {icon}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </footer>
    )
}