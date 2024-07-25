import "./Footer.css"
import logo from "../../assets/logo.png"
import { FaFacebook } from "react-icons/fa6"
import { BsInstagram, BsTwitter } from "react-icons/bs"
const Footer = () => {
  return (
    <footer>
        <div className="footer">
            <div>
                <img src={logo} alt="logo" />
                <p>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
            </div>
            <div>
                <a href="#">Asosiy</a>
                <a href="#">Yetkazib Berish</a>
                <a href="#">To’lov</a>
                <a href="#">Biz bilan bog’lanish</a>
            </div>
            <div>
                <a href="">Katalog</a>
                <a href="">Eshiklar</a>
                <a href="">Stollar</a>
                <a href="">Zinapoyalar</a>
                <a href="">Qozonlar</a>
            </div>
            <div>
                <a href="">Ishtimoiy tarmoq</a>
                <a href=""><FaFacebook/> Facebook</a>
                <a href=""><BsTwitter/> Twitter</a>
                <a href=""><BsInstagram/> Instagram</a>
            </div>
        </div>
        <div className="footerBottom">
            <p>Copyright © 2024</p>
            <div className="footerBottomRight">
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer