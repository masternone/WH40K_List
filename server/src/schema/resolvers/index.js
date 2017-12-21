const { factions, factionTypeDefs, factionQueryDefs } = require('./factions');
const { types, typeTypeDefs, typeQueryDefs } = require('./types');
const { subFactions, subFactionTypeDefs, subFactionQueryDefs } = require('./subFactions');
const { units, unitTypeDefs, unitQueryDefs } = require('./units');

let typeDefs = `
 ${factionTypeDefs}
 ${typeTypeDefs}
 ${subFactionTypeDefs}
 ${unitTypeDefs}
  
  type Query {
    ${factionQueryDefs}
    ${typeQueryDefs}
    ${subFactionQueryDefs}
    ${unitQueryDefs}
  }
`;

let factionFunc = function(args) {
	factions.map(f => f.types = typeFunc({ faction: f.name }));
	if((args.id || args.name)) {
		return factions.filter(f => (f.id === Number(args.id) || f.name === args.name));
	} else {
		return factions
	}
};

let typeFunc = function(args) {
	types.map(t => t.subFactions = subFactionFunc({ type: t.name }));
	if((args.id || args.name)) {
		return types.filter(t => (t.id === Number(args.id) || t.name === args.name));
	} else {
		return types.filter(t => t.faction === args.faction);
	}
};

let subFactionFunc = function(args) {
	subFactions.map(sf => sf.units = unitFunc({ subFaction: sf.name }));
	if((args.id || args.name)) {
		return subFactions.filter(sf => (sf.id === Number(args.id) || sf.name === args.name));
	} else {
		return subFactions.filter(sf => sf.type === args.type);
	}
};

let unitFunc = function(args) {
	if((args.id || args.name)) {
		return units.filter(u => (u.id === Number(args.id) || u.name === args.name));
	} else {
		return units.filter(u => u.subFactions.includes(args.subFaction));
	}
};

module.exports = {
	typeDefs: typeDefs,
	resolvers: {
		Query: {
			faction: async(root, args) => {return factionFunc(args);},
			type: async(root, args) => {return typeFunc(args);},
			subFaction: async(root, args) => {return subFactionFunc(args);},
			unit: async(root, args) => {return unitFunc(args);}
		}
	}
};