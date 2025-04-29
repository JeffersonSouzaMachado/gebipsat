import { useNavigate } from "react-router-dom";
import './components_styles/head_bar.css'
import { DataAtual } from "./date";


const HeadBar = () => {
    const navigate = useNavigate();


    return <div className="headDiv">
        <button
            onClick={() => navigate("/home")} className="headBar">
            Voltar para Home
        </button>

        <DataAtual />
    </div>
}

export default HeadBar


