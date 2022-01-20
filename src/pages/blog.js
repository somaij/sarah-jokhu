import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"



const BlogPage = ({ data }) => {
  console.log("data,", data)
  return (
    
    <Layout>

      <div id="home-blog">

      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2>Blog Page</h2>
          </div>
        </div>
       
      </div>
      </div>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
      query BlogAllQuery {
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
