import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/20/solid"
import ProductCard from "src/components/shared/card/Card";
import PRODUCTS from "src/util/productsData"

export default function ProductsV2() {
    return (
        <section className="w-100 h-100" style={{ backgroundColor: "#0A142F" }}>
            <div className="container m-auto">
                <div className="row">
                    <div className="col-md-8 mb-3 mt-5">
                        <h1 className="text-white">Liquidez inmediata</h1>
                        <h1 className="text-white">para tu <span className="highlighted-word">negocio.</span></h1>
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</p>
                    </div>
                    <div className="col-md-4 mt-5">
                        <a className="btn btn-primary btn-floating btn-rounded-c-size ml-5 mt-5" href="#carousel" data-slide="prev"> <ArrowLongLeftIcon /> </a>
                        <a className="btn btn-primary btn-floating btn-rounded-c-size ml-5 mt-5" href="#carousel" data-slide="next"> <ArrowLongRightIcon /> </a>
                    </div>
                </div>
            </div>
            <div id="carousel" className="carousel slide" data-interval="false">
                <div className="carousel-inner container">
                    <div className="carousel-item active">
                        <div className="row">
                            {PRODUCTS.map(({ icon, title, desc }, i) => (
                                <>
                                    {i < 3 ? <ProductCard key={i * Math.round(Math.random() * 2)} icon={icon} title={title} description={desc} /> : null}
                                </>
                            ))}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <ProductCard key={3} icon={PRODUCTS[3].icon} title={PRODUCTS[3].title} description={PRODUCTS[3].desc} />
                            <ProductCard key={4} icon={PRODUCTS[4].icon} title={PRODUCTS[4].title} description={PRODUCTS[4].desc} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}