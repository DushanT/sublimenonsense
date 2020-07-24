import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GoBack = () => (
  <Layout>
    <SEO title="Go back page" />
    <h1>Go back!</h1>
    <Link to="/">Go back</Link>
  </Layout>
)

export default GoBack
