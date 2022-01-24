import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import BlogRoll from '../components/BlogRoll'
import { Helmet } from "react-helmet"



const IndexPage = ({ data }) => {
  console.log("data,", data)
  var mastheadStyles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${data.markdownRemark.frontmatter.background.publicURL})`
  }
  return (
    
    <Layout>
      <section id="masthead"  style={mastheadStyles}>
		<div class="text">
			<div class="sub">{data.markdownRemark.frontmatter.title}</div>
			<h1>Sarah Jokhu</h1>
		</div>
	</section>
      <section id="home-blog">

      <div class="container">
        <div class="row">
          <div class="col-12 d-flex justify-content-center">
            <h2>Blog</h2>
          </div>
        </div>
        

        <BlogRoll/>
        
      </div>
      </section>
      <section id="publications">
        <div class="container">
          <div class="row">
            <div class="col-12 d-flex justify-content-center">
              <h2>Publications</h2>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: null } }) {
      frontmatter {
        title
        background{
          publicURL
        }
        publications{
          publication
        }
        seo{
          seoTitle
          seoDescription
        }
      }
      html
    }
  }
`
