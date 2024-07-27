import Navbar from '../../components/Navbar/Navbar'
import Header from "../../components/Header/Header"
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'
import HomeCategory from '../../components/HomeCategory/HomeCategory'
import Examples from '../../components/Examples/Examples'
import Testimonial from '../../components/Testimonial/Testimonial'
import Service from '../../components/Service/Service'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <About/>
        <HomeCategory/>
        <Examples/>
        <Testimonial/>
        <Service/>
        <Footer/>
    </div>
  )
}

export default Home