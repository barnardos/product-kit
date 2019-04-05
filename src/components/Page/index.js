import { Footer, Header, Layout, SkipLink, Site } from "@barnardos/components";
import PropTypes from "prop-types";
import React from "react";

const Page = ({ children }) => (
  <Site description="Product description">
    <Layout>
      <SkipLink />
      <Header title="Go to the homepage" />
      {children}
      <Footer />
    </Layout>
  </Site>
);

Page.propTypes = {
  children: PropTypes.any
};

export default Page;
