import * as React from "react"

import styled from "styled-components"
import { HeadingTwo, Paragraph } from "../../components/Typography"

const InnerContainer = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 50px;
`;

const Container = styled.section`
  background: #fbfbfb;
  width: 100%;
`;

interface ISectionProps {
  heading: string
  paragraph: string
}


export const Section: React.FC<ISectionProps> = ({ heading, paragraph }) => (
  <Container>
    <InnerContainer>
      <HeadingTwo>{heading}</HeadingTwo>
      <Paragraph>
        {paragraph}
      </Paragraph>
    </InnerContainer>
  </Container>
);
