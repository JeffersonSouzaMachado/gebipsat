import { CalendarDays, HomeIcon } from 'lucide-react';
import '../styles/home.css'
import NavButton from './components/nav_button';


function Home() {

    return (
        <>
            <div className="mainColumn">

                <div className="leftColumn">
                    <p>Atalhos</p>

                    <NavButton label='Semana na IPSat' to='/weekOnIpsat' icon={CalendarDays} />
                    <NavButton label='Devocional' to='/devotional' icon={HomeIcon} />



                </div>
                <div className="centerColumn">
                    <p>Coluna Central</p>
                </div>
                <div className="rightColumn">Coluna Direita</div>
            </div>
        </>
    )
}

export default Home