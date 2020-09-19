
import React from "react"
import Layout from '../components/Layout'
import {Card,Button} from "React-Bootstrap"


export default function Home() {

  return (
    <Layout>
    <Card>
  <Card.Body>
    <Card.Title>Λίστα αποφάσεων</Card.Title>
    <Card.Text>
      με αναθέτουσες αρχές που έχουν
    </Card.Text>
    <Card.Link href="/comply"><Button variant="success"> συμμορφωθεί </Button></Card.Link>
    <Card.Link href="/nocomply"> <Button variant="danger"> μη συμμορφωθεί </Button> </Card.Link>
  </Card.Body>
</Card>
    </Layout>
    )
  
}