import React from "react";
import { graphql } from 'gatsby'
import Layout from "../components/Layout";
import Posts from '../components/Posts';
import SEO from '../components/SEO/SEO';

export default ({ data, pathContext: { tag }, location: { pathname } }) => (
	<Layout>
		<div>
			<SEO title={`Tag: ${tag}`} description={`Todos os posts marcados com a tag "${tag}" no GatsbyBlog`} url={pathname} />
			<h2 style={{ fontSize: '22px', padding: '0px 15px' }}>Todos os posts com a tag: {tag}</h2>
			<Posts data={data} />
		</div>
	</Layout>
);

export const pageQuery = graphql`
query TagPage($tag: String) {
    allMarkdownRemark(
      	limit: 1000
      	sort: { fields: [fields___prefix], order: DESC }
      	filter: { frontmatter: { tags: { in: [$tag] }, draft: { ne: true } } }
    ) {
      	edges {
        	node {
          		fields {
            		slug
          		}
          		frontmatter {
            		title
            		date(formatString: "DD/MM/YYYY")
            		description
          		}
        	}
      	}
    }
}
`