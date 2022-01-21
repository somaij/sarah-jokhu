import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"



const BlogPost = ({ data }) => {
  console.log("data,", data)
  return (
    
    <Layout>

      <div id="home-blog">

      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
          <a href="/blog/" class="arrow-btn white reverse">All Blogs</a>
            <h2>Blog Post</h2>
          </div>
        </div>
       
      </div>
      </div>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
      query BlogPostQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                path
                templateKey
                date(formatString: "MMMM DD, YYYY")
                description
                
              }
            }
          }
        }
      }
    `
