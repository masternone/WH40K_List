const { imperiumTypes } = require('../data/imperiumTypes');
const { chaosTypes } = require('../data/chaosTypes');

const typeDefs = `
  type Type {
    id: ID!
    name: String!
    faction: Faction!
    subFactions: [SubFaction]
  }
`;

const queryDefs = `
  type(id: ID, name: String, faction: String!): [Type]
`;

const data = [].concat(imperiumTypes, chaosTypes);

module.exports = {
	types: data,
	typeTypeDefs: typeDefs,
	typeQueryDefs: queryDefs
};