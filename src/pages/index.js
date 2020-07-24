import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Sublimenonsense" keywords={[`sublime`, `nonsense`, `sublimenonsense`]} />
    <h1>Hi hello ahoj</h1>
    <Link to="/go-back/">Go</Link>
  </Layout>
)

export default IndexPage
