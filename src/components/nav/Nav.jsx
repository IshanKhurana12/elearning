import React from "react";
import style from "./Nav.module.css";
import { Link, NavLink, Outlet } from "react-router-dom";

function Nav() {
  
  
  return (
    <>
    <nav>
      <div className={style.nav_container}>
        <div className={style.nav_title_wrapper}>
         
         
         <Link to={'/'}><img
            className={style.logo}
            src="https://yt3.ggpht.com/SFXXP0D2ylqlwOVnyFk6ldYWdGBSJpZS6huOK56kCavBrlWS9YLFMQJ2Swnxze3URgbqyWg=s108-c-k-c0x00ffffff-no-rj"
            alt="logo"
          />
          </Link> 
          <h4>2 OP Coding</h4>
        </div>
        <div className={style.nav_details}>
          
       <button><NavLink to={'/courses'}>
        {({isActive})=>(isActive? "On courses" : "Go to courses")}
        </NavLink></button>
        </div>
      </div>
    </nav>
    <Outlet/>
    </>
  );
}

export default Nav;

//  <img
//    alt='cart-icon'
//    src='https://cdn-icons-png.flaticon.com/512/4903/4903482.png'
//    className={`${style.cart_icon} ${style.icon} `}
//  />;
