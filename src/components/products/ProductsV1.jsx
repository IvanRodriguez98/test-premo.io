import { UsersIcon } from "@heroicons/react/20/solid"
import imgSrc from "src/assets/imagenes/pexels-fauxels-3184405.jpg"

export default function ProductsV1() {
    const isMobile = useMediaQuery({query: 'max-width: 760px'})

    return (
        <section className="d-flex align-items-center mt-5 bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-1 order-lg-1 order-sm-1">
                        <div className="align-top">
                            <h1 className="align-top">Nuestro negocio es hacer crecer el tuyo.</h1>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <button className="btn btn-rounded btn-success text-black">Contacta a un ejecutivo <UsersIcon className="btn-icon" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-2 order-lg-2 order-sm-2">
                        <img src={imgSrc} className="img-rounded img-fluid" />
                    </div>
                </div>
                <br />
                <h1 className="text-center text-white">Soluciones financieras efectivas</h1>
                <h4 className="text-center text-white">Crédito PyME, inversión, paneles solares</h4>
            </div>
        </section>
    )
}