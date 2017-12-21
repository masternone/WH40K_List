const pistols = [],
	combiWeapons = [],
	meleeWeapons = [],
	terminatorMeleeWeapons = [],
	forceWeapons = ['force sword', 'force staff', 'force axe'],
	DttFE = '',
	LoC = '',
	SoC = '',
	JPA = '',
	TpS = '';
const data = [{
	id: 'Chaos-Lord',
	name: 'Chaos Lord',
	subFactions: ['Black Legion',
		'Alpha Legion',
		'Iron Warriors',
		'Night Lords',
		'Word Bearers',
		'World Eaters',
		'Death Guard',
		'Emperors Children'
	],
	forceOrg: 'HQ',
	models: [{
		min: 1,
		max: 1,
		name: 'Chaos Lord',
		m: '6"',
		ws: '2+',
		bs: '2+',
		s: '4',
		t: '4',
		w: '5',
		a: '4',
		ld: '9',
		sv: '3+',
		equipment: ['chainsword', 'bolt pistol', 'frag grenade', 'krak grenade'],
		options: [{
			replace: 'bolt pistol',
			with: pistols.concat(combiWeapons, meleeWeapons)
		}, {
			replace: 'chainsword',
			with: pistols.concat(meleeWeapons)
		}, {
			replace: 'take',
			with: ['jump pack']
		}
		],
		abilities: [DttFE, LoC, SoC, JPA]
	}
	]
}, {
	id: 'Chaos-Lord-Terminator',
	name: 'Chaos Lord in Terminator Armor',
	subFactions: ['Black Legion',
		'Alpha Legion',
		'Iron Warriors',
		'Night Lords',
		'Word Bearers',
		'World Eaters',
		'Death Guard',
		'Emperors Children'
	],
	forceOrg: 'HQ',
	models: [{
		min: 1,
		max: 1,
		name: 'Chaos Lord',
		m: '6"',
		ws: '2+',
		bs: '2+',
		s: '4',
		t: '4',
		w: '6',
		a: '4',
		ld: '9',
		sv: '2+',
		equipment: ['power sword', 'combi-bolter'],
		options: [{
			replace: 'combi-bolter',
			with: combiWeapons.concat(terminatorMeleeWeapons)
		}, {
			replace: 'power sword',
			with: terminatorMeleeWeapons
		}
		],
		abilities: [DttFE, LoC, SoC, TpS]
	}
	]
}, {
	id: 'Chaos-Sorcerer',
	name: 'Chaos Sorcerer',
	subFactions: ['Black Legion',
		'Alpha Legion',
		'Iron Warriors',
		'Night Lords',
		'Word Bearers',
		'World Eaters',
		'Thousand Sons',
		'Death Guard',
		'Emperors Children'
	],
	forceOrg: 'HQ',
	models: [{
		min: 1,
		max: 1,
		name: 'Chaos Sorcerer',
		m: '6"',
		ws: '3+',
		bs: '3+',
		s: '4',
		t: '4',
		w: '4',
		a: '3',
		ld: '9',
		sv: '3+',
		equipment: ['force sword', 'bolt pistol', 'frag grenade', 'krak grenade'],
		options: [{
			replace: 'bolt pistol',
			with: pistols.concat(combiWeapons, meleeWeapons)
		}, {
			replace: 'force sword',
			with: pistols.concat(forceWeapons)
		}, {
			replace: 'take',
			with: ['jump pack']
		}
		],
		abilities: [DttFE, JPA, 'Psyker-2-1-Y-2']
	}
	]
}, {
	id: 'Chaos-Sorcerer-Terminator',
	name: 'Chaos Sorcerer in Terminator Armor',
	subFactions: ['Black Legion',
		'Alpha Legion',
		'Iron Warriors',
		'Night Lords',
		'Word Bearers',
		'World Eaters',
		'Thousand Sons',
		'Death Guard',
		'Emperors Children'
	],
	forceOrg: 'HQ',
	models: [{
		min: 1,
		max: 1,
		name: 'Chaos Sorcerer',
		m: '6"',
		ws: '3+',
		bs: '3+',
		s: '4',
		t: '4',
		w: '5',
		a: '3',
		ld: '9',
		sv: '2+',
		equipment: ['force sword', 'combi-bolter'],
		options: [{
			replace: 'combi-bolter',
			with: combiWeapons.concat(terminatorMeleeWeapons)
		}, {
			replace: 'force sword',
			with: pistols.concat(forceWeapons)
		}, {
			replace: 'take',
			with: ['jump pack']
		}
		],
		abilities: [DttFE, TpS, 'Psyker-2-1-Y-2']
	}
	]
}
];

module.exports = {
	chaosSpaceMarines: data
};