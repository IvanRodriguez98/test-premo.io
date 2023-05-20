import { UsersIcon } from "@heroicons/react/20/solid"
import { useEffect, useState } from "react";
import imgSrc from "src/assets/imagenes/pexels-fauxels-3184405.jpg"

export default function ProductsV1() {
    const [swapButtons, setSwapButtons] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 1000) {
                setSwapButtons(true)
            } else {
                setSwapButtons(false)
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <section className="d-flex align-items-center mt-5 bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-1 order-lg-1 order-sm-1">
                        <div className="align-top">
                            <h1 className="align-top">Nuestro negocio es hacer crecer el tuyo.</h1>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                {swapButtons ? null : (
                                    <button className="btn btn-rounded btn-success btn-text-black">Contacta a un ejecutivo <UsersIcon className="btn-icon" /></button>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-2 order-lg-2 order-sm-2">
                        <img src={imgSrc} className="img-rounded img-fluid" />
                        <div className="d-flex justify-content-center justify-content-lg-start">
                            {swapButtons ? (
                                <button className="btn btn-rounded btn-success">Contacta a un ejecutivo <UsersIcon className="btn-icon" /></button>
                            ) : null}
                        </div>
                    </div>
                </div>
                <br />
                <h1 className="text-center text-white">Soluciones financieras efectivas</h1>
                <h4 className="text-center text-white">Crédito PyME, inversión, paneles solares</h4>
            </div>
        </section>
    )
}