
import React from "react"
import Layout from '../components/Layout'
import Article from '../components/Article'
import Pager from '../components/Pager'
import {graphql} from "gatsby"


const Comply = ({data,pageContext})=>{


	return(
	  <>
	  <Layout>
      
      {data.allMarkdownRemark.edges.map((edge,counter)=>{
       
      const {node}=edge
      const {frontmatter,fields,html}=node
       
       return(
       <Article key={counter} title={frontmatter.title} contractor={frontmatter.contractor} location={fields.slug} date={frontmatter.date} html={html} email={frontmatter.email}
       tags={frontmatter.tags}></Article>
          )

      	})}
      	
      <Pager pageContext={pageContext} />
      </Layout>
      </> 
       )

}

export default Comply


export const pageQuery=graphql `
    query($category:String,$skip:Int!,$limit:Int!) {
    allMarkdownRemark(
    filter: {frontmatter: {category: {eq: $category}}}, sort: {fields: frontmatter___date, order: ASC},
    skip: $skip,
    limit: $limit) {
    edges {
      node {
        html
        frontmatter {
          title
          email
          date(formatString: "MMMM  DD, YYYY")
          contractor
          tags
        }
        fields {
          slug
        }
      }
    }
  }
 }
    `