import { useNavigate } from "react-router-dom";
import './components_styles/nav_button.css'
import { HomeIcon, LucideIcon } from "lucide-react";

type NavButtonProps = {
    label: string;
    to: string;
    icon: LucideIcon
};

const NavButton = ({ label, to, icon: Icon }: NavButtonProps) => {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(to)} className="navButton">
            <Icon size={20} />
            {label}</button>
    )
}

export default NavButton