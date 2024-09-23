import { Link } from "react-router-dom"

const BottomWarning = ({warningText, link, linkText}) => {
    return <div>
        <div className="text-center">
            {warningText}
            <Link to={link} className="underline">{linkText}</Link>  
        </div>
    </div>
}

export {BottomWarning}