import HeadBar from "./components/head_bar"
import '../styles/devotional.css'

function Devotional() {
    return (
        <>
            <div id="main">
                <HeadBar />
                <div id="body">
                    <div id="headTitle">
                        <h2>Devocional da Semana</h2>
                    </div>
                    <div id="inputArea">

                        <textarea name="devotionalTitle"
                            id="devotionalTitle"
                            placeholder="Insira aqui o título."></textarea>

                        <textarea name="devotionalSubtitle"
                            id="devotionalSubtitle"
                            placeholder="Insira aqui o sub-título."></textarea>

                        <textarea name="devotionalInput"
                            id="devotionalInput"
                            placeholder="Insira aqui a mensagem devocional da semana."></textarea>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Devotional