import Navbar from '../../components/Navbar/Navbar'
import Header from "../../components/Header/Header"
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'
import HomeCategory from '../../components/HomeCategory/HomeCategory'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <About/>
        <HomeCategory/>
        <Footer/>
    </div>
  )
}

export default Home