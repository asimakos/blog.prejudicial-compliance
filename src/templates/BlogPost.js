
import React from "react"
import Layout from '../components/Layout'
import {Card,Button} from "React-Bootstrap"
import {graphql} from "gatsby"
import Obfuscate from "react-obfuscate"


export default function BlogPost({data}) {

	const {markdownRemark} = data
	const {html,frontmatter} = markdownRemark

return(
	  <>
	  <Layout>
      <Card>
		<Card.Header>
        <Button variant="light">{frontmatter.title} </Button> </Card.Header>
		<Card.Body>
		<Card.Title><Button variant="secondary"> {frontmatter.contractor} </Button> &nbsp;
        <Button variant="info"> Επικοινωνία: &nbsp; 
        <Obfuscate
	      email={frontmatter.email}
	      headers={{
	        subject: `Επικοινωνία με ${frontmatter.contractor}`,
	        body: `Συμμόρφωση με ${frontmatter.title}`,
	      }}
	    />
        </Button>

		</Card.Title>
		<Card.Text>
		<div dangerouslySetInnerHTML={{ __html:` ${html} `}}/> 
		</Card.Text>
		</Card.Body>
		<Card.Footer className="text-muted"> <Button variant="warning"> {frontmatter.date} </Button></Card.Footer>
		</Card>
      </Layout>
      </> 
       )

}

export const pageQuery=graphql `
     query($slug:String!) {
		 markdownRemark(fields: {slug: {eq: $slug}}) {
         html
         frontmatter {
		      contractor
		      date(formatString: "MMMM  DD, YYYY")
		      email
		      title
		    }
         }
       }
    `