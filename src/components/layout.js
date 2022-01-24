/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 
 import Header from "./header"
 import "./styles/styles.scss"
 
 const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
         }
       }
     }
   `)
 
   return (
     <div>
       <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
       <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Inter:wght@400;600&display=swap"
		rel="stylesheet"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
         <main>{children}</main>
         <footer>
           <div class="container">
             <div class="row">
               <div class="col-12">
           Sarah Jokhu © {new Date().getFullYear()}. <br class="d-block d-lg-none"/> Built by
           {` `}
           <a href="https://jasonsomai.com">Jason Somai</a> with ❤️.
           </div>
           </div>
           </div>
         </footer>
     </div>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 