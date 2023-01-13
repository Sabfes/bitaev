import './App.css';
import StartPage from "../../pages/startPage/StartPage";
import {AppContext} from "../../context/appContext";
import {useEffect, useState} from "react";

function App() {
  const [state, setState] = useState({
    theme: 'light'
  })

  const changeState = (title, args) => {
    setState({
      ...state,
      [title]: args
    })
  }

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <div className={`App app_theme_${state.theme}`}>
      <AppContext.Provider value={{...state, changeState}}>
        <StartPage/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
