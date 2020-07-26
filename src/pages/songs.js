import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Songs({ data }) {
  const songs = data.allSitePage.edges

  return (
    <Layout>
      <SEO title="Songs" />
      <h1>Let's play!</h1>
      <ul>
        {Object.entries(
          songs.reduce(
            (acc, curr) => ({
              ...acc,
              [curr.node.context.band]: [
                ...(acc?.[curr.node.context.band] ?? []),
                { ...curr.node },
              ],
            }),
            {}
          )
        ).map(([band, bandSongs]) => (
          <>
            <li>{band}</li>
            <ul>
              {bandSongs.map(
                ({ context, path }) =>
                  context.slug && (
                    <li key={path}>
                      <Link to={context.slug}>
                        {context.title}
                      </Link>
                    </li>
                  )
              )}
            </ul>
          </>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allSitePage {
      edges {
        node {
          path
          context {
            slug
            band
            title
          }
        }
      }
    }
  }
`
