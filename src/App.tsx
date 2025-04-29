import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login.tsx'
import Home from './pages/home.tsx'
import CultServices from './pages/cult_services.tsx'
import Devotional from './pages/devotional.tsx'
import ImportantPhones from './pages/important_phones.tsx'
import MonthCalendar from './pages/month_calendar.tsx'
import Notices from './pages/notices.tsx'
import Partners from './pages/partners.tsx'
import RoomReservation from './pages/room_reservation.tsx'
import TithesOfferings from './pages/tithes_offerings.tsx'
import WeekBirthdays from './pages/week_birthdays.tsx'
import WeekOnIpsat from './pages/week_on_ipsat.tsx'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cultServices" element={<CultServices />} />
        <Route path="/devotional" element={<Devotional />} />
        <Route path="/importantPhones" element={<ImportantPhones />} />
        <Route path="/monthCalendar" element={<MonthCalendar />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/roomReservation" element={<RoomReservation />} />
        <Route path="/tithesOfferings" element={<TithesOfferings />} />
        <Route path="/weekBirthday" element={<WeekBirthdays />} />
        <Route path="/weekOnIpsat" element={<WeekOnIpsat />} />

      </Routes>
    </BrowserRouter>
  )
}


export default App
