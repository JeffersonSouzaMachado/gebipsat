import { BookCheck, CalendarDays, CalendarRange, HandCoins, Handshake, Megaphone, PartyPopperIcon, Phone, UserCog } from 'lucide-react';
import '../styles/home.css'
import NavButton from './components/nav_button';


function Home() {

    return (
        <>
            <div className="mainColumn">

                <div className="leftColumn">
                    <p>Atalhos</p>
                    <NavButton label='Semana na IPSat' to='/weekOnIpsat' icon={CalendarDays} />
                    <NavButton label='Avisos' to='/notices' icon={Megaphone} />
                    <NavButton label='Serviços dos Cultos' to='/cultServices' icon={UserCog} />
                    <NavButton label='Calendário do Mês' to='/monthCalendar' icon={CalendarRange} />
                    <NavButton label='Números Importantes' to='/importantPhones' icon={Phone} />
                    <NavButton label='Parcerias IPSat' to='/partners' icon={Handshake} />
                    <NavButton label='Dízimos e Ofertas' to='/tithesOfferings' icon={HandCoins} />
                    <NavButton label='Aniversáriantes da Semana' to='/weekBirthday' icon={PartyPopperIcon} />
                    <NavButton label='Reserva de Salas' to='/roomReservation' icon={BookCheck} />
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