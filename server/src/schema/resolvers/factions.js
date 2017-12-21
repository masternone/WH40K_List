const typeDefs = `
  type Faction {
    id: ID!
    name: String!
    types: [Type]
  }
`;

const queryDefs = `
  faction(id: ID, name: String): [Faction]
`;

const data = [{
	id: 0,
	name: 'Imperium'
}, {
	id: 1,
	name: 'Chaos'
}
];

module.exports = {
	factions: data,
	factionTypeDefs: typeDefs,
	factionQueryDefs: queryDefs
};