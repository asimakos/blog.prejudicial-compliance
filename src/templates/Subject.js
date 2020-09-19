
import React from "react"
import Layout from '../components/Layout'
import Article from '../components/Article'
import Paginate from '../components/Paginate'
import {graphql} from "gatsby"


const Subject = ({data,pageContext})=>{

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
      	
      <Paginate pageContext={pageContext} />
      </Layout>
      </> 
       )

}

export default Subject

export const pageQuery=graphql `
    query($subject:String,$skip:Int!,$limit:Int!) {
    allMarkdownRemark(
    filter: {frontmatter: {tags: {in: [$subject]}}}, sort: {fields: frontmatter___date, order: ASC},
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