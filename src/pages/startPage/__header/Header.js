import "./Header.css"
import light from '../../../img/light.png'
import {useContext} from "react";
import {AppContext} from "../../../context/appContext";

const Header = () => {
  const {theme, changeState} = useContext(AppContext)

  return <div className={`header theme_${theme}`}>
    <nav className={`header__nav`}>

    </nav>

    <div className={'fire'}/>

    <img
      onClick={() => {
        if (theme === 'light') {
          changeState('theme', 'dark')
        } else {
          changeState('theme', 'light')
        }
      }}
      src={light}
      alt=""
      style={{
        opacity: theme === 'dark' ? .3 : 1
      }}
      className={'header__image'}
    />
  </div>
}

export default Header