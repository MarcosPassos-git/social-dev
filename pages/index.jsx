import styled from "styled-components"

import Navbar from "../src/components/layout/NavBar"
import Container from "../src/components/layout/Container"
import CriatePost from "../src/components/cards/CreatePost"

const Content = styled.div`
  margin: 50px 0;
`

function HomePage () {
  
  return (
    <>
      <Navbar />
      <Content>
        <Container>
          <CriatePost />
        </Container>        
      </Content>
    </>
  )
}

export default HomePage