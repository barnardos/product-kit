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
  Section,
  Title
} from "@barnardos/components";
import React from "react";

import Page from "../components/Page";

export default () => (
  <Page>
    <Main>
      <Hero>
        <Title>Barnardo’s product kit</Title>
        <Lede>Design, prototype and build your product.</Lede>
      </Hero>
      <Section>
        <SignpostLink href="https://github.com/barnardos/example-product">
          Install the kit (technical)
        </SignpostLink>
      </Section>
      <Section>
        <Heading>Templates</Heading>
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
      </Section>
    </Main>
  </Page>
);
