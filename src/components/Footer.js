
import React from "react"
import FooterStyles from "./Footer.module.css"


const Footer =({footerinfo})=>{

return(
      <div className="container">
      <span className={FooterStyles.footer}> &copy; {footerinfo} </span>
      </div>	
       )

}

export default Footer 