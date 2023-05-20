import imgSrc from "src/assets/imagenes/metrics.png"

function SingleMetric({metric = "", desc = ""}) {
    return (
        <>
            <h1 className="text-blue-strong">{metric}</h1>
            <span>{desc}</span>
        </>
    )
}

export default function Metrics() {
    return (
        <section className="d-flex align-items-center bg-gray">
            <div className="container mt-5 mb-5">
                <br />
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-2">
                        <div className="align-top">
                            <span className="text-blue">Hemos ayudado a muchas compañias a lo largo de los años</span>
                            <h1 className="align-top">Esto es solo el comienzo</h1>
                        </div>
                        <div className="row p-1">
                            <div className="col-md-6 mt-4">
                                <SingleMetric metric="400+" desc="Empresas"/>
                            </div>
                            <div className="col-md-6 mt-4">
                                <SingleMetric metric="600%" desc="Crecimiento en 2 años"/>
                            </div>
                            <div className="col-md-6 mt-4">
                                <SingleMetric metric="10k" desc="Préstamos otorgados"/>
                            </div>
                            <div className="col-md-6 mt-4">
                                <SingleMetric metric="200+" desc="Reseñas de 5 estrellas"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-1">
                        <img src={imgSrc} className="img-rounded img-fluid" />
                    </div>
                </div>
                <br />
            </div>
        </section>
    )
}