
import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image"

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div class="row justify-content-center">
      
        {posts &&
          posts.map(({ node: post }) => (
            <div className="col-11 col-lg-4">
              <Link to={"/blog/" + post.frontmatter.path} className="post-preview">
                  {post.frontmatter.image ? (
                    <div className="image">
                      <Img
                        fixed={post.frontmatter.image}
                        />
                    </div>
                  ) : null}
                <div className="text">
                <h3>
                      {post.frontmatter.title}
                </h3>
                <p>
                  {post.frontmatter.description}
                </p>
                <span className="btn outline white">Read</span>
                </div>
                </Link>
                </div>
          ))}
      
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default ({count}) => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          limit: 3
        ) {
          edges {
            node {
              frontmatter {
                title
                templateKey
                path
                date
                description
                image
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)