import { Link, graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

const DangerStyles = styled.p`
color: rebeccapurple;
font-size: 2rem;
`

export default function BlogPage({ data }) {
  const posts = data.allWpPost.nodes
  console.log({ posts })

  return (
    <Layout>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>Baby's first blog post</h1>
          <p>{post.author.node.name} - {post.date}</p>
          <p>{post.title}</p>
          <p>{post.content}</p>
          <DangerStyles dangerouslySetInnerHTML={{ __html: post.content }}></DangerStyles>
        </div>
      ))}
      <Link to="/">home</Link>
    </Layout>
  )
}

export const query = graphql`
  query AllWpPost {
    allWpPost {
      nodes {
        date(formatString: "MM DD, YYYY")
        id
        slug
        title
        content
        author {
          node {
            name
          }
        }
      }
    }
  }
`
