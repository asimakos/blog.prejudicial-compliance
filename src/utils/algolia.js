

const postQuery = `{
    posts: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/judgements/"}}
    ) {
        edges {
		      node {
		        id
		        fields {
		          slug
		        }
		        excerpt(pruneLength: 100000)
		        frontmatter {
		          contractor
		          date(formatString: "MMMM  DD, YYYY")
		          email
		          title
		        }
		        html
		      }
        }
    }
}`;

const flatten = (arr) =>
    arr.map(({ node: { frontmatter, ...rest } }) => ({
        ...frontmatter,
        ...rest
    }));
const settings = { attributesToSnippet: [`excerpt:50`] };

const queries = [
    {
        query: postQuery,
        transformer: ({ data }) => flatten(data.posts.edges),
        indexName: `posts`,
        settings
    }
];

module.exports = queries;
