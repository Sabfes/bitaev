import './Main.css'
import {useContext} from "react";
import {AppContext} from "../../../context/appContext";

const Main = () => {
  const {theme} = useContext(AppContext)

  return <div className={`main theme_${theme}`}>
    <h1 className={`title theme_${theme}`}>
      Denis Bitaev
    </h1>
    <h2 className={`subtitle theme_${theme}`}><span>Frontend</span> developer</h2>
  </div>
}
export default Main