import React from 'react'
import { AiFillInstagram, AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'
const footer = () => {
   return (
      <div className="footer-container">
         <p>2022 DB Services. All rights reserved.</p>
         <p className="icons">
            <a href="#">
               <AiFillInstagram />
            </a>
            <a href="#">
               <AiFillFacebook />
            </a>
            <a href="#">
               <AiOutlineTwitter />
            </a>
         </p>
      </div>
   )
}

export default footer
