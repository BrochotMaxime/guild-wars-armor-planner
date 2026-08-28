const paragonArmors = [
  {
    id: "paragon-istani-armor",
    name: "Istani Armor",
    professionId: "paragon",
    campaignId: "nightfall",
    craftingLocation: [
      {
        name: "Consulate Docks",
        campaignId: "nightfall",
      },
      {
        name: "Command Post",
        campaignId: "nightfall",
      },
    ],
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/paragon/nightfall/Paragon_Istani_armor_m.webp",
      female: "/images/armors/paragon/nightfall/Paragon_Istani_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 175,
        },
        {
          materialId: "leather-square",
          quantity: 28,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Paragon_Istani_armor",
  },
  {
    id: "paragon-sunspear-armor",
    name: "Sunspear Armor",
    professionId: "paragon",
    campaignId: "nightfall",
    craftingLocation: [
      {
        name: "Consulate Docks",
        campaignId: "nightfall",
      },
      {
        name: "Command Post",
        campaignId: "nightfall",
      },
    ],
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/paragon/nightfall/Paragon_Sunspear_armor_m.webp",
      female: "/images/armors/paragon/nightfall/Paragon_Sunspear_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 175,
        },
        {
          materialId: "steel-ingot",
          quantity: 28,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Paragon_Sunspear_armor",
  },
  {
    id: "paragon-elonian-armor",
    name: "Elonian Armor",
    professionId: "paragon",
    campaignId: "nightfall",
    craftingLocation: [
      {
        name: "Consulate Docks",
        campaignId: "nightfall",
      },
      {
        name: "Command Post",
        campaignId: "nightfall",
      },
      {
        name: "Bone Palace",
        campaignId: "nightfall",
      },
      {
        name: "Throne of Secrets",
        campaignId: "nightfall",
      },
      {
        name: "Boreal Station",
        campaignId: "eye-of-the-north",
      },
    ],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/paragon/nightfall/Paragon_Elonian_armor_m.webp",
      female: "/images/armors/paragon/nightfall/Paragon_Elonian_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 175,
        },
        {
          materialId: "leather-square",
          quantity: 28,
        },
        {
          materialId: "pile-of-glittering-dust",
          quantity: 28,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Paragon_Elonian_armor",
  },
  {
    id: "paragon-elite-sunspear-armor",
    name: "Elite Sunspear Armor",
    professionId: "paragon",
    campaignId: "nightfall",
    craftingLocation: {
      name: "Command Post",
      campaignId: "nightfall",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/paragon/nightfall/Paragon_Elite_Sunspear_armor_m.webp",
      female:
        "/images/armors/paragon/nightfall/Paragon_Elite_Sunspear_armor_f.webp",
    },
    cost: {
      gold: 60000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 350,
        },
        {
          materialId: "elonian-leather-square",
          quantity: 35,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Paragon_Elite_Sunspear_armor",
  },
  {
    id: "paragon-vabbian-armor",
    name: "Vabbian Armor",
    professionId: "paragon",
    campaignId: "nightfall",
    craftingLocation: {
      name: "The Kodash Bazaar",
      campaignId: "nightfall",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/paragon/nightfall/Paragon_Vabbian_armor_m.webp",
      female: "/images/armors/paragon/nightfall/Paragon_Vabbian_armor_f.webp",
    },
    cost: {
      gold: 21000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 175,
        },
        {
          materialId: "elonian-leather-square",
          quantity: 28,
        },
        {
          materialId: "pile-of-glittering-dust",
          quantity: 25,
        },
        {
          materialId: "ruby",
          quantity: 16,
        },
        {
          materialId: "sapphire",
          quantity: 16,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Paragon_Vabbian_armor",
  },
  {
    id: "paragon-ancient-armor",
    name: "Ancient Armor",
    professionId: "paragon",
    campaignId: "nightfall",
    craftingLocation: {
      name: "Command Post",
      campaignId: "nightfall",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/paragon/nightfall/Paragon_Ancient_armor_m.webp",
      female: "/images/armors/paragon/nightfall/Paragon_Ancient_armor_f.webp",
    },
    cost: {
      gold: 40000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 350,
        },
        {
          materialId: "elonian-leather-square",
          quantity: 35,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Paragon_Ancient_armor",
  },
  {
    id: "paragon-primeval-armor",
    name: "Primeval Armor",
    professionId: "paragon",
    campaignId: "nightfall",
    craftingLocation: {
      name: "Throne of Secrets",
      campaignId: "nightfall",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/paragon/nightfall/Paragon_Primeval_armor_m.webp",
      female: "/images/armors/paragon/nightfall/Paragon_Primeval_armor_f.webp",
    },
    cost: {
      gold: 60000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 350,
        },
        {
          materialId: "steel-ingot",
          quantity: 35,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Paragon_Primeval_armor",
  },

  {
    id: "paragon-norn-armor",
    name: "Norn Armor",
    professionId: "paragon",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Gunnar's Hold",
      campaignId: "eye-of-the-north",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/paragon/eotn/Paragon_Norn_armor_m.webp",
      female: "/images/armors/paragon/eotn/Paragon_Norn_armor_f.webp",
    },
    cost: {
      gold: 40000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 350,
        },
        {
          materialId: "fur-square",
          quantity: 35,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Paragon_Norn_armor",
  },
  {
    id: "paragon-asuran-armor",
    name: "Asuran Armor",
    professionId: "paragon",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Rata Sum 	",
      campaignId: "eye-of-the-north",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/paragon/eotn/Paragon_Asuran_armor_m.webp",
      female: "/images/armors/paragon/eotn/Paragon_Asuran_armor_f.webp",
    },
    cost: {
      gold: 40000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 350,
        },
        {
          materialId: "leather-square",
          quantity: 35,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Paragon_Asuran_armor",
  },
  {
    id: "paragon-monument-armor",
    name: "Monument Armor",
    professionId: "paragon",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Eye of the North",
      campaignId: "eye-of-the-north",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/paragon/eotn/Paragon_Monument_armor_m.webp",
      female: "/images/armors/paragon/eotn/Paragon_Monument_armor_f.webp",
    },
    cost: {
      gold: 40000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 350,
        },
        {
          materialId: "leather-square",
          quantity: 35,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Paragon_Monument_armor",
  },
  {
    id: "paragon-deldrimor-armor",
    name: "Deldrimor Armor",
    professionId: "paragon",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Central Transfer Chamber",
      campaignId: "eye-of-the-north",
    },
    pieces: ["chest", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/paragon/eotn/Paragon_Deldrimor_armor_m.webp",
      female: "/images/armors/paragon/eotn/Paragon_Deldrimor_armor_f.webp",
    },
    cost: {
      gold: 30000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 300,
        },
        {
          materialId: "leather-square",
          quantity: 35,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Paragon_Deldrimor_armor",
  },

  {
    id: "paragon-obsidian-armor",
    name: "Obsidian Armor",
    professionId: "paragon",
    campaignId: "core",
    craftingLocation: {
      name: "Fissure of Woe",
      campaignId: "core",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/paragon/core/Paragon_Obsidian_armor_m.webp",
      female: "/images/armors/paragon/core/Paragon_Obsidian_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 350,
        },
        {
          materialId: "pile-of-glittering-dust",
          quantity: 50,
        },
        {
          materialId: "deldrimor-steel-ingot",
          quantity: 35,
        },
        {
          materialId: "granite-slab",
          quantity: 5,
        },
        {
          materialId: "glob-of-ectoplasm",
          quantity: 120,
        },
        {
          materialId: "obsidian-shard",
          quantity: 120,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Paragon_Obsidian_armor",
  },
];

export default paragonArmors;
