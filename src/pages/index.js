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
  const { edges: publication } = data.markdownRemark.frontmatter.publications
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
          <div class="row">
          {data.markdownRemark.frontmatter.publications.map((publications, i) => [
                <div class="col-12 col-lg-4"key={i}>
                  <div class="publication">
                {publications.publication}
                </div>
                </div>
              ])}
          </div>
        </div>
      </section>
      <section id="bio-contact">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-6">
              <div id="bio">
                <h2>About</h2>
                <div class="regular-text" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}}></div>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div id="contact">
                <div class="d-flex align-items-center justify-content-between">
                <h2>Contact</h2>
                <a href="https://www.linkedin.com/in/sarah-jokhu-ccrp%C2%AE-313016a6"><svg width="34" height="34" viewBox="0 0 34 34" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M31.1167 0.333332H2.88335C2.56598 0.328925 2.25085 0.387078 1.95596 0.504472C1.66107 0.621866 1.39219 0.7962 1.16468 1.01752C0.937169 1.23884 0.755485 1.50281 0.630003 1.79435C0.50452 2.08589 0.437697 2.3993 0.43335 2.71667V31.2833C0.437697 31.6007 0.50452 31.9141 0.630003 32.2057C0.755485 32.4972 0.937169 32.7612 1.16468 32.9825C1.39219 33.2038 1.66107 33.3781 1.95596 33.4955C2.25085 33.6129 2.56598 33.6711 2.88335 33.6667H31.1167C31.4341 33.6711 31.7492 33.6129 32.0441 33.4955C32.339 33.3781 32.6078 33.2038 32.8354 32.9825C33.0629 32.7612 33.2446 32.4972 33.37 32.2057C33.4955 31.9141 33.5623 31.6007 33.5667 31.2833V2.71667C33.5623 2.3993 33.4955 2.08589 33.37 1.79435C33.2446 1.50281 33.0629 1.23884 32.8354 1.01752C32.6078 0.7962 32.339 0.621866 32.0441 0.504472C31.7492 0.387078 31.4341 0.328925 31.1167 0.333332ZM10.4834 28.2333H5.48335V13.2333H10.4834V28.2333ZM7.98335 11.1333C7.29379 11.1333 6.63247 10.8594 6.14487 10.3718C5.65728 9.88422 5.38335 9.2229 5.38335 8.53333C5.38335 7.84377 5.65728 7.18245 6.14487 6.69486C6.63247 6.20726 7.29379 5.93333 7.98335 5.93333C8.34951 5.89181 8.72031 5.92809 9.07148 6.0398C9.42264 6.15152 9.74625 6.33615 10.0211 6.5816C10.296 6.82706 10.5159 7.1278 10.6665 7.46414C10.817 7.80048 10.8949 8.16483 10.8949 8.53333C10.8949 8.90184 10.817 9.26619 10.6665 9.60253C10.5159 9.93887 10.296 10.2396 10.0211 10.4851C9.74625 10.7305 9.42264 10.9151 9.07148 11.0269C8.72031 11.1386 8.34951 11.1749 7.98335 11.1333ZM28.5167 28.2333H23.5167V20.1833C23.5167 18.1667 22.8 16.85 20.9834 16.85C20.4211 16.8541 19.8737 17.0305 19.4147 17.3553C18.9558 17.6801 18.6075 18.1378 18.4167 18.6667C18.2863 19.0584 18.2297 19.471 18.25 19.8833V28.2167H13.25C13.25 28.2167 13.25 14.5833 13.25 13.2167H18.25V15.3333C18.7042 14.5452 19.3649 13.8959 20.1608 13.4553C20.9566 13.0148 21.8576 12.7998 22.7667 12.8333C26.1 12.8333 28.5167 14.9833 28.5167 19.6V28.2333Z"
								fill="black" />
						</svg>
					</a>
                </div>
                
              <form name="contactForm" method="post" data-netlify="true" netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contactForm" />
                <div class="input-wrapper"><input type="text" name="name" placeholder="Name" required name="name"/><label for="name">Name</label></div>
                <div class="input-wrapper"><input type="email" name="email" placeholder="Email" required name="email"/><label for="email">Email</label></div>
                <div class="input-wrapper"><textarea name="message" placeholder="Message" required name="message"></textarea><label for="message">Message</label></div>
                <button type="submit" class="btn solid">Send</button>
            </form>
              </div>
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
