import './Footer.css'
import {useContext} from "react";
import {AppContext} from "../../../context/appContext";

const Footer = () => {
  const {theme} = useContext(AppContext)

  return <div className={`footer theme_${theme}`}>
    <nav className={'footer__links'}>
    </nav>
  </div>
}
export default Footer