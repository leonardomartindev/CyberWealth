import  GlobalStyle from './GlobalStyle'
import Cta from './components/CallToAction/Cta'
import Cripto from './components/CriptoCurrency/Cripto'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Nav from "./components/Nav/Nav"
import Servico from './components/Servicos/Servico'


function App() {
  return (
    <>
        <GlobalStyle/>
        <Nav/>
        <Header/>
        <Servico/>
        <Cripto/>
        <Faq/>
        <Cta/>
        <Footer/>
    </>
  )
}

export default App
