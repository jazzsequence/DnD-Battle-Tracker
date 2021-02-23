const characters = {
	frodo: {
		name: "Frodo",
		dex: 15,
		hp: 55,
		init: 15
	},
	samwise: {
		name: "Samwise",
		dex: 10,
		hp: 45,
		init: 13
	},
	merry: {
		name: "Merry",
		dex: 16,
		hp: 35,
		init: 15
	},
	pippin: {
		name: "Pippin",
		dex: 16,
		hp: 35,
		init: 16
	}
};

const npcs = {
	shelob: {
		name: "Shelob",
		dex: 14,
		hp: 85,
		init: 15
	},
	gollum: {
		name: "Gollum",
		dex: 13,
		hp: 35,
		init: 14
	}
};

const sampleState = {
	characters,
	npcs,
	battleCanStart: true,
	battleStarted: false,
	characterCount: 4,
	npcCount: 2
};

export { characters };
export { npcs };
export default sampleState;