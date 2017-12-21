const { chaosSpaceMarines } = require('../data/chaosSpaceMarines');

const typeDefs = `
  type Unit {
    id: ID!
    name: String!
    subFactions: [SubFaction]
    forceOrg: String
    models: [Model]
  }
  
  type Model {
    min: Int,
		max: Int,
		name: String,
		m: String,
		ws: String,
		bs: String,
		s: String,
		t: String,
		w: String,
		a: String,
		ld: String,
		sv: String,
		equipment: [String],
		options: [Option],
		abilities: [String]
  }
  
  type Option {
  	replace: String
  	with: [String]
  }
`;

const queryDefs = `
  unit(id: ID, name: String, subFaction: String!): [Unit]
`;

const data = [].concat(chaosSpaceMarines);

module.exports = {
	units: data,
	unitTypeDefs: typeDefs,
	unitQueryDefs: queryDefs
};