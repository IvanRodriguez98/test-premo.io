import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const FOOTERDATA = {
    office: {
        address: "Calle de la oficina, Mexico.",
        phone: "(55) 1234 567",
        email: "info@correoempresa.mx"
    },
    company_links: [
        {
            text: "Empresas",
            redirect_to: "#"
        },
        {
            text: "Personas",
            redirect_to: "#"
        },
        {
            text: "Nosotros",
            redirect_to: "#"
        },
        {
            text: "Blog",
            redirect_to: "#"
        },
    ],
    info_links: [
        {
            text: "Educación Financiera",
            redirect_to: "#"
        },
        {
            text: "Tasas y Comisiones",
            redirect_to: "#"
        },
        {
            text: "Descarga la App",
            redirect_to: "#"
        },
    ],
    legal_links: [
        {
            text: "Empresas",
            redirect_to: "#"
        },
        {
            text: "Avisos de privacidad",
            redirect_to: "#"
        },
        {
            text: "Términos y condiciones",
            redirect_to: "#"
        },
        {
            text: "Información financiera",
            redirect_to: "#"
        },
        {
            text: "UNE",
            redirect_to: "#"
        },
        {
            text: "Buró",
            redirect_to: "#"
        },
        {
            text: "CONDUSEF",
            redirect_to: "#"
        },
    ],
    social_links: [
        {
            icon: <FontAwesomeIcon icon="fa-brands fa-facebook-f" />,
            redirect_to: "https://www.facebook.com/PREMOmx"
        },
        {
            icon: <FontAwesomeIcon icon="fa-brands fa-instagram" />,
            redirect_to: "https://www.instagram.com/premomx/"
        },
        {
            icon: <FontAwesomeIcon icon="fa-brands fa-twitter" />,
            redirect_to: "https://twitter.com/PREMOmx"
        },
        {
            icon: <FontAwesomeIcon icon="fa-brands fa-youtube" />,
            redirect_to: "https://www.youtube.com/c/PremoMxcreditoanegocio"
        },
        {
            icon: <FontAwesomeIcon icon="fa-brands fa-linkedin" />,
            redirect_to: "https://www.linkedin.com/company/pr-stamo-empresarial-oportuno-premo-/"
        }
    ]
}

export default FOOTERDATA;