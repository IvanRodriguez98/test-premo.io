import imgSrc from "src/assets/imagenes/contact.jpg"

export default function Contact() {
    return (
        <section className="d-flex align-items-center">
            <div className="container mt-5 mb-5">
                <br />
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-1 order-lg-1">
                        <div className="align-top mb-5">
                            <h1 className="align-top">Contáctanos</h1>
                            <span className="text-gray">Nuestro equipo de ejecutivos estará encantado de ayudarte y resolver tus dudas</span>
                        </div>
                        <div className="row">
                            {/* Formulario */}
                            <div className="col-sm-6 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input type="text" className="form-control" placeholder="Primer nombre" id="nombre" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="apellidos">Apellidos</label>
                                    <input type="text" className="form-control" placeholder="Apellidos" id="apellidos" />
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="correo">Email</label>
                                    <input type="email" className="form-control" placeholder="tucorreo@ejemplo.com" id="correo" />
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="correo">Email</label>
                                    <input type="email" className="form-control" placeholder="tucorreo@ejemplo.com" id="correo" />
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="telefono">Número de teléfono</label>
                                    <input type="text" className="form-control" placeholder="+52 (55) 000-0000" id="telefono" />
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="mensaje">Mensaje</label>
                                    <textarea type="text" className="form-control" id="mensaje" rows={5}/>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <div className="form-check ml-2">
                                    <input type="checkbox" className="form-check-input" id="terminos" />
                                    <label htmlFor="terminos">Estoy de acuerdo con nuestra política de privacidad.</label>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12 mb-4">
                                <button className="btn btn-primary btn-rounded btn-block text-center">Enviar mensaje</button>
                            </div>
                            {/* Fin formulario */}
                        </div>
                    </div>
                    <div className="col-lg-6 order-2 order-lg-2">
                        <img src={imgSrc} className="img-rounded img-fluid" style={{height: "100%", width: "100%"}}/>
                    </div>
                </div>
                <br />
            </div>
        </section>
    )
}