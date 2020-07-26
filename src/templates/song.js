import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Song({ data }) {
  const song = data.markdownRemark
  const { frontmatter, html } = song
  const { band, title } = frontmatter
  const pages = data.allSitePage.edges
  const formatHtml = html.replace(/\[/g, '<strong style="font-size: 26px;"><sup>').replace(/\]/g, '</sup></strong>');
  
  return (
    <Layout>
      <Link to="/songs/">&lt; Back</Link>
      <h2>{title}</h2>
      <h4>by {band}</h4>
      <pre dangerouslySetInnerHTML={{ __html: formatHtml }} />
      {pages.length > 0 && (
        <>
          Other songs by {band}
          {pages.map(({ node: page }) => (
            <ul>
              <li>
                <Link to={page.context.slug}>{page.context.title}</Link>
              </li>
            </ul>
          ))}
        </>
      )}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $band: String, $title: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        band
        title
      }
    }
    allSitePage(
      filter: { context: { band: { eq: $band }, title: { ne: $title } } }
    ) {
      edges {
        node {
          path
          context {
            slug
            title
          }
        }
      }
    }
  }
`
