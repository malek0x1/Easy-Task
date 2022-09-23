import './Navbar.css'
import LOGO from './logo.png'
import { Sling as Hamburger } from 'hamburger-react'
import { useEffect, useState } from 'react';

function Navbar() {
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {

    if (!isOpen) {
      try {
        document.querySelector(".navbar-right-menu.active").style.transform = "translate(900px,0px)";
      }
      catch (e) {
        console.log(e)
      }
    }
    if (isOpen) {
      document.querySelector(".navbar-right-menu.active").style.transform = "translate(0px,0px)";
    }
  }, [isOpen])





  return (
    <div className="navbar ">
      <div className="navbar-top">
        <img draggable={false} className="logo-nav" src={LOGO} alt="" />
        <div className="navbar-top-right">
          <img src="./images/delivery.png" alt="" />
          <h3>Express Delivery +1 234 567 890</h3>

          <div className={!isOpen ? "hamburger active" : "hamburger"}
          >


            <Hamburger duration={0.6} toggled={isOpen} toggle={setOpen} />


          </div>
        </div>
      </div>
      <div className={isOpen ? "navbar-right-menu active" : "navbar-right-menu"}>
        <h4>home</h4>
        <h4>menu</h4>
        <h4>our story</h4>
        <h4>contact us</h4>
      </div>
      <div className="close"

      >


      </div>
    </div>
  );
}

export default Navbar;
