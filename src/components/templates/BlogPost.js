import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"



const BlogPost = ({ data }) => {
  console.log("data,", data)
  return (
    
    <Layout>

      <div id="blog-post">

      <div class="container">
        <div class="row align-content-center justify-content-center">
          <div class="col-12 col-lg-6 text-center">
          <a href="/blog/" class="arrow-btn white reverse">See All Blogs</a>
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <div class="sub">{data.markdownRemark.frontmatter.date}</div>
          </div>
          <div class="col-12 col-lg-6 text-center">
          <img
          src={data.markdownRemark.frontmatter.image.publicURL}
        />
          </div>
        </div>
       <div class="row justify-content-center">
           <div class="col-12 col-md-10">
           <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}} class="regular-text"></div>
           </div>
       </div>
      </div>
      </div>
    </Layout>
  )
}

export default BlogPost

export const BlogPostTemplateQuery = graphql`
  query BlogPostTemplateQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        image {
          publicURL
          childImageSharp {
            fixed(width: 1920) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        seo{
          seoTitle
          seoDescription
        }
        cta{
          ctaTitle
          ctaText
          ctaBtn
        }
      }
    }
  }
`