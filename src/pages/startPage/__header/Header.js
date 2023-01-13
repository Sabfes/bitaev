import "./Header.css"
import light from '../../../img/light.png'

const Header = () => {
  return <div className={'header'}>
    <nav className={'header__nav'}>
      <span>About</span>
      <span>Projects</span>
      <span>Portfolio</span>
    </nav>

    <img src={light} alt="" className={'header__image'}/>
  </div>
}

export default Header