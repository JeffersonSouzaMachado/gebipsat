import { useNavigate } from "react-router-dom";
import './components_styles/head_bar.css'
import { DataAtual } from "./date";


const HeadBar = () => {
    const navigate = useNavigate();

    const actualData = DataAtual;

    return <div className="headDiv">
        <button
            onClick={() => navigate("/home")} className="headBar">
            Voltar para Home
        </button>

        <div>{actualData}</div>
    </div>
}

export default HeadBar


