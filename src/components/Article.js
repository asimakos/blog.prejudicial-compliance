
import React from "react"
import {Link} from "gatsby"
import {Card,Button} from "React-Bootstrap"
import Obfuscate from "react-obfuscate"


const Article =({title,contractor,location,date,html,email,tags})=>{

return(
	<>
   <Card>
   <Card.Header> <Button variant="light">{title} </Button> {' '} <Button variant="warning"> {date} </Button> </Card.Header>
   <Card.Body>
    <Card.Title> <Button variant="secondary"> {contractor} </Button> </Card.Title>
    
  <Button variant="success"> Επικοινωνία: &nbsp;
  <Obfuscate
      email={email}
      headers={{
        subject: `Επικοινωνία με ${contractor}`,
        body: `Συμμόρφωση με ${title}`,
      }}
    />
    </Button>
    &nbsp; 
    {html && (
    <Link to={location}>
    <Button variant="primary">Περισσότερα</Button>
    </Link>)}

   </Card.Body>
   <Card.Footer className="text-muted">
    <b> tags: </b>
     {tags.map((tag,counter)=>{

        return(
          <Link key={counter} to={`/${tag}`}> {tag} </Link>
          )

        })}

   </Card.Footer>
   </Card>
   </>
	)

}

export default Article 
