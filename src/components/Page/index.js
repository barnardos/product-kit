import { Footer, Header, Layout, SkipLink, Site } from "@barnardos/components";
import PropTypes from "prop-types";
import React from "react";
import Helmet from "react-helmet";

const Page = ({ children, title }) => (
  <Site description="<Product description>" name="<Product name>">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Layout>
      <SkipLink />
      <Header title="Go to the <product name> homepage" />
      {children}
      <Footer />
    </Layout>
  </Site>
);

Page.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string
};

export default Page;
