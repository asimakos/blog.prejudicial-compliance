
import React from "react"
import {Navbar,Nav} from "React-Bootstrap"

const Header =({headerinfo})=>{

return(
	<>
  <title> {headerinfo} </title>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Αποφάσεις</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/comply">Συμμόρφωση</Nav.Link>
      <Nav.Link href="/nocomply">Μη Συμμόρφωση</Nav.Link>
      <Nav.Link href="/search">Αναζήτηση</Nav.Link>
    </Nav>
  </Navbar>
  </>
		)

}

export default Header 