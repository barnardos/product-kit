import {
  Breadcrumbs,
  BulletedList,
  Callout,
  Caption,
  Image,
  Lede,
  ListItem,
  Main,
  Pagination,
  Paragraph,
  Teaser,
  Teasers,
  Title
} from "@barnardos/components";
import { withPrefix } from "gatsby";
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
      <Lede>[Lede]</Lede>
      <Paragraph>[Paragraph]</Paragraph>
      <BulletedList>
        <ListItem>[ListItem]</ListItem>
      </BulletedList>
      <Caption label="[Caption]">
        <Image src={withPrefix("/example.jpg")} />
      </Caption>
      <Callout>
        <Paragraph>[CallOut]</Paragraph>
      </Callout>
      <Teasers>
        <Teaser href="/" heading="[Teaser heading]">
          [Teaser children]
        </Teaser>
        <Teaser href="/" heading="[Teaser heading]">
          [Teaser children]
        </Teaser>
      </Teasers>
      <Pagination
        next={{
          href: "#",
          label: "[Pagination]"
        }}
      />
    </Main>
  </Page>
);
