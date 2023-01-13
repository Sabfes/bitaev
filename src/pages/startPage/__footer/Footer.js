import './Footer.css'
import {useContext} from "react";
import {AppContext} from "../../../context/appContext";

const Footer = () => {
  const {theme} = useContext(AppContext)

  return <div className={`footer theme_${theme}`}>
    <nav className={'footer__links'}>
      <span>Instagram</span>
      <span>Telegram</span>
      <span>Github</span>
    </nav>
  </div>
}
export default Footer