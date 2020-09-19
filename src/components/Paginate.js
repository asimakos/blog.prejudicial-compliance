
import React from "react"
import {Link} from "gatsby"
import {Pagination} from  "React-Bootstrap"

const Paginate = ({pageContext})=>{

  const {currentPage,numPages} = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()


  return(
   <Pagination>
   {!isFirst && (
      <Pagination.Prev> <Link to={`/${pageContext.subject}/${prevPage}`}>   
        ← Προηγούμενο
      </Link> </Pagination.Prev>
       )}
  {!isLast && (
      <Pagination.Next> <Link to={`/${pageContext.subject}/${nextPage}`}> 
       Επόμενο →
      </Link></Pagination.Next>
     )}
   </Pagination>
  	)

}

export default Paginate