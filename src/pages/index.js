import {
  BulletedList,
  Hero,
  Link,
  ListItem,
  Main,
  Paragraph,
  SignpostLink
} from "@barnardos/components";
import React from "react";

import Page from "../components/Page";

export default () => (
  <Page title="Home">
    <Main>
      <Hero
        title="Barnardo’s Product Kit"
        lede="Design, prototype and build your product using page templates."
      />
      <Paragraph>
        The Product Kit uses the{" "}
        <Link href="https://design-system.barnardos.org.uk/">
          Design System
        </Link>{" "}
        and includes:
      </Paragraph>
      <BulletedList>
        <ListItem>all the components</ListItem>
        <ListItem>tools to enforce the standards</ListItem>
      </BulletedList>
      <Paragraph>
        You should first install the Product Kit, then duplicate the templates
        you need:
      </Paragraph>
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
        Install the Product Kit from GitHub
      </SignpostLink>
    </Main>
  </Page>
);
