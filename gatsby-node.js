/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 const {createFilePath} = require(`gatsby-source-filesystem`)
 const path = require(`path`)
 const {paginate} = require(`gatsby-awesome-pagination`)


exports.onCreateNode=({node,getNode,actions})=>{

	if (node.internal.type === 'MarkdownRemark'){

		const slug = createFilePath({node,getNode,basePath:`content`})

        actions.createNodeField({
        	node,
        	name:`slug`,
        	value:`${slug}`
        })
	}
}

exports.createPages=async ({actions,graphql})=>{

	const {createPage}=actions

	const results=await graphql(`
     query {
		  allMarkdownRemark {
		    edges {
		      node {
		        fields {
		          slug
		        }
		      }
		    }
		  }
        }
    `)

    if (results.errors){
    	console.error(results.errors)
    	return
    }

  const taxonomy=await graphql(`
     query {
          allMarkdownRemark {
        group(field: frontmatter___tags) {
        nodes {
          id
        }
        fieldValue
        }
      }
        }
    `)

   if (taxonomy.errors){
        console.error(taxonomy.errors)
        return
    }


    taxonomy.data.allMarkdownRemark.group.forEach(({ nodes: posts, fieldValue: subject }) => {

    let blogPostsCount = posts.length
    let blogPostsPerPaginatedPage = 5
    let paginatedPagesCount = Math.ceil(blogPostsCount / blogPostsPerPaginatedPage)

    for (let i = 0; i <= paginatedPagesCount; i++) {

    createPage({
      path: i === 0 ? `/${subject}` : `/${subject}/${i + 1}`,
      component: path.resolve(`./src/templates/Subject.js`),
      context: {
        subject: subject,
        limit: blogPostsPerPaginatedPage,
        skip: i * blogPostsPerPaginatedPage,
        paginatedPagesCount,
        currentPage: i + 1,
        },
     })
   }
 })


   const compliance=await graphql(`
     query {
          allMarkdownRemark {
            group(field: frontmatter___category) {
              fieldValue
              nodes {
                frontmatter {
                  title
                }
       }
     }
          }
        }
    `)

   if (compliance.errors){
        console.error(compliance.errors)
        return
    }

    compliance.data.allMarkdownRemark.group.forEach(({ nodes: posts, fieldValue: category }) => {

    let blogPostsCount = posts.length
    let blogPostsPerPaginatedPage = 5
    let paginatedPagesCount = Math.ceil(blogPostsCount / blogPostsPerPaginatedPage)

    for (let i = 0; i <= paginatedPagesCount; i++) {

    createPage({
      path: i === 0 ? `/${category}` : `/${category}/${i + 1}`,
      component: path.resolve(`./src/templates/Comply.js`),
      context: {
        category: category,
        limit: blogPostsPerPaginatedPage,
        skip: i * blogPostsPerPaginatedPage,
        paginatedPagesCount,
        currentPage: i + 1,
        },
     })
   }
 })

    results.data.allMarkdownRemark.edges.forEach(post=>{

    	const {node}=post
    	const {fields}=node

    	createPage({
    		path:fields.slug,
    		component:path.resolve(`./src/templates/BlogPost.js`),
    		context:{
    			slug:fields.slug,
    		},
    	})
    })


}
