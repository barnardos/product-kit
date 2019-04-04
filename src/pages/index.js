import {
  BulletedList,
  Heading,
  Hero,
  Lede,
  Link,
  ListItem,
  Main,
  Paragraph,
  SignpostLink,
  Title
} from "@barnardos/components";
import React from "react";

import Page from "../components/Page";

export default () => (
  <Page>
    <Main>
      <Hero>
        <Title>Barnardo’s product kit</Title>
        <Lede>A foundation to start developing your product.</Lede>
      </Hero>
      <Heading>Getting started</Heading>
      <Paragraph>
        You can use this to design, prototype and build your product.
      </Paragraph>
      <Paragraph>Duplicate the page templates you need:</Paragraph>
      <BulletedList>
        <ListItem>
          <Link href="/content/">Content</Link>
        </ListItem>
        <ListItem>
          <Link href="/start/">Start</Link>
        </ListItem>
        <ListItem>
          <Link href="/question/">Question</Link>
        </ListItem>
        <ListItem>
          <Link href="/confirmation/">Confirmation</Link>
        </ListItem>
      </BulletedList>
      <SignpostLink href="https://github.com/barnardos/example-product">
        Installation instructions (technical)
      </SignpostLink>
    </Main>
  </Page>
);
