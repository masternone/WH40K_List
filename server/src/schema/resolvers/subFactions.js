const { chaosSubFactions } = require('../data/chaosSubFactions');

const typeDefs = `
  type SubFaction {
    id: ID!
    name: String!
    type: Type!
    units: [Unit]
  }
`;

const queryDefs = `
  subFaction(id: ID, name: String, type: String!): [SubFaction]
`;

const data = [].concat(chaosSubFactions);

module.exports =
	{
		subFactions: data,
		subFactionTypeDefs: typeDefs,
		subFactionQueryDefs: queryDefs
	};