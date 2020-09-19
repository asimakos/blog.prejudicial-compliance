
import React from "react"
import {graphql,useStaticQuery} from "gatsby"
import Header from "./Header"
import Footer from "./Footer"


const Layout =({children})=>{

const data = useStaticQuery(graphql`
     query SiteInfoQuery{
     	site {
     		siteMetadata {
     			title
     			copyinfo
     		}
     	}
     }
   `)


return(
	<>
		<Header headerinfo={data.site.siteMetadata.title}></Header>
			<div className="container">
				{children}
		    </div>
		<Footer footerinfo={data.site.siteMetadata.copyinfo}></Footer>
	</>
	  )

}

export default Layout 
