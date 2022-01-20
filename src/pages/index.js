import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import BlogRoll from '../components/BlogRoll'
import { Helmet } from "react-helmet"



const IndexPage = ({ data }) => {
  console.log("data,", data)
  return (
    
    <Layout>

      <div id="home-blog">

      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2>Blog</h2>
          </div>
        </div>
        <BlogRoll/>
      </div>
      </div>
    </Layout>
  )
}

export default IndexPage

// export const pageQuery = graphql`
//   query IndexPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "home" } }) {
//       frontmatter {
//         title
//         subtitle
//         blog_background{
//           publicURL
//         }
//         about_image{
//           childImageSharp {
//             fixed(width: 960) {
//               ...GatsbyImageSharpFixed
//             }
//           }
//         }
//         seo{
//           seoTitle
//           seoDescription
//         }
//       }
//       html
//     }
//   }
// `
