import React from "react"
import { Container, Content, ContentCard, FeatureImage } from '../components'

const IndexPage = () => {
  return(
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard 
          date="Novembre 12, 2021" 
          title="blog sport" 
          excerpt="muscu et cardio"
          slug="/test" />
      </Content>
    </Container>
    )
}

export default IndexPage