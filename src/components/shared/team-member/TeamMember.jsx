import "./teammember.css"
import {LinkIcon} from "@heroicons/react/20/solid"
export default function TeamMember({img, name = "", charge = "", chargeDesc = ""}){
    return (
        <div className="col-md-4 bg-gray mb-2 ml-5">
            <div className="align-items-center mt-3 mb-4">
                <img src={img} className="member-image" />
                <h5>{name}</h5>
                <span className="text-blue">{charge}</span>
                <p className="text-gray">{chargeDesc}</p>
                <button className="btn btn-primary btn-floating"><LinkIcon className="btn-icon"/> </button>
            </div>
        </div>
    )
}