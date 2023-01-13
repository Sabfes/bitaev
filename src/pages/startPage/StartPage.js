import "./StartPage.css"
import Footer from "./__footer/Footer";
import Main from "./__main/Main";
import Header from "./__header/Header";

const StartPage = () => {
  return <div className={'container'}>
    <Header/>
    <Main/>
    <Footer/>
  </div>
}

export default StartPage