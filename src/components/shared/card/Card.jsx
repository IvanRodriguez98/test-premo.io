import { ArrowLongRightIcon } from "@heroicons/react/24/solid"

import "./card.css"

export default function ProductCard({ icon, title = "", description = "" }) {
    return (
        <div className="col-md-3 mb-2 ml-5">
            <div className="card">
                <div className="icon-holder">{icon}</div>
                
                <div className="card-body mt-5">
                    <h5 className="card-title">{title.toUpperCase()}</h5>
                    <hr />
                    <p className="card-text text-justify">{description}</p>
                </div>
                <a href="#" className="link text-right">Más info <ArrowLongRightIcon className="btn-icon" /> </a>
            </div>
        </div>
    )
}