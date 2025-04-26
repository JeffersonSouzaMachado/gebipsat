import { useNavigate } from "react-router-dom";
import './components_styles/head_bar.css'


const HeadBar = () => {
    const navigate = useNavigate();

    return <div className="headDiv">
        <button
            onClick={() => navigate("/home")} className="headBar">
            Voltar para Home
        </button>
    </div>
}

export default HeadBar