import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO
        title="Sublimenonsense"
        keywords={[`sublime`, `nonsense`, `sublimenonsense`, `projects`]}
      />
      <Link to="/songs/">Songs</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___band] }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            band
            title
          }
          excerpt
        }
      }
    }
  }
`
