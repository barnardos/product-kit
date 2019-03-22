import {
  Breadcrumbs,
  BulletedList,
  Confirmation,
  ListItem,
  Main,
  Paragraph
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
      <Confirmation
        title="[Confirmation title]"
        lede="[Confirmation lede]"
        reference="[Confirmation reference]"
      />
      <Paragraph>[Paragraph]</Paragraph>
      <BulletedList>
        <ListItem>[ListItem]</ListItem>
      </BulletedList>
    </Main>
  </Page>
);
