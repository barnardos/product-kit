import {
  Breadcrumbs,
  BulletedList,
  ListItem,
  Main,
  Paragraph,
  StartLink,
  Title
} from "@barnardos/components";
import React from "react";

import Page from "../components/Page";

export default () => (
  <Page>
    <Breadcrumbs
      items={[
        {
          text: "[Breadcrumbs]",
          href: "/"
        }
      ]}
    />
    <Main>
      <Title>[Title]</Title>
      <Paragraph>[Paragraph]</Paragraph>
      <BulletedList>
        <ListItem>[ListItem]</ListItem>
      </BulletedList>
      <StartLink />
    </Main>
  </Page>
);
