import FAQ from "src/components/faq/FAQ";
import ProductsV1 from "src/components/products/ProductsV1";
import ProductsV2 from "src/components/products/ProductsV2";

export default function Home() {
    return (
        <section className="animate__animated animate__fadeIn animate__slow">
            <ProductsV1/>
            <ProductsV2/>
            <FAQ/>
        </section>
    )
}