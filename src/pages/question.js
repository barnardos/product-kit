import {
  BackLink,
  Form,
  Main,
  RadioButtons,
  Submit,
  TextInput,
  Title
} from "@barnardos/components";
import React from "react";

import Page from "../components/Page";

export default () => (
  <Page>
    <BackLink href="/" />
    <Main>
      <Title>[Title]</Title>
      <Form action="#">
        <TextInput
          hint="[Hint]"
          id="text-input-email-example"
          label="[Label]"
          size={48}
        />
        <RadioButtons
          items={[
            {
              label: "[Label]",
              id: "radio-buttons-1"
            },
            {
              label: "[Label]",
              id: "radio-buttons-2"
            }
          ]}
          id="radio-buttons"
          legend="[Legend]"
          name="radio-buttons"
        />
        <Submit>[Submit]</Submit>
      </Form>
    </Main>
  </Page>
);
