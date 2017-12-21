const { makeExecutableSchema } = require('graphql-tools');
const { resolvers, typeDefs } = require('./resolvers/index');

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({
	typeDefs,
	resolvers
});