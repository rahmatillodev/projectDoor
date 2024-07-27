import Navbar from '../../components/Navbar/Navbar'
import Header from "../../components/Header/Header"
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'
import HomeCategory from '../../components/HomeCategory/HomeCategory'
import Examples from '../../components/Examples/Examples'
import Testimonial from '../../components/Testimonial/Testimonial'
import Service from '../../components/Service/Service'
import Design from '../../components/Design/Design'
const Home = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <About/>
        <HomeCategory/>
        <Examples/>
        <Testimonial/>
        <Service/>
        <Design/>
        <Footer/>
    </>
  )
}

export default Home