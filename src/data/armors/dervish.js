const dervishArmors = [
  {
    id: "dervish-istani-armor",
    name: "Istani Armor",
    professionId: "dervish",
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
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/dervish/nightfall/Dervish_Istani_armor_m.webp",
      female: "/images/armors/dervish/nightfall/Dervish_Istani_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 200,
        },
        {
          materialId: "bolt-of-linen",
          quantity: 32,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Dervish_Istani_armor",
  },
  {
    id: "dervish-sunspear-armor",
    name: "Sunspear Armor",
    professionId: "dervish",
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
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/dervish/nightfall/Dervish_Sunspear_armor_m.webp",
      female: "/images/armors/dervish/nightfall/Dervish_Sunspear_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 200,
        },
        {
          materialId: "steel-ingot",
          quantity: 32,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Dervish_Sunspear_armor",
  },
  {
    id: "dervish-elonian-armor",
    name: "Elonian Armor",
    professionId: "dervish",
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
        name: "Boreal Station",
        campaignId: "eye-of-the-north",
      },
    ],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/dervish/nightfall/Dervish_Elonian_armor_m.webp",
      female: "/images/armors/dervish/nightfall/Dervish_Elonian_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 200,
        },
        {
          materialId: "steel-ingot",
          quantity: 32,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Dervish_Elonian_armor",
  },
  {
    id: "dervish-elite-sunspear-armor",
    name: "Elite Sunspear Armor",
    professionId: "dervish",
    campaignId: "nightfall",
    craftingLocation: {
      name: "Command Post",
      campaignId: "nightfall",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/dervish/nightfall/Dervish_Elite_Sunspear_armor_m.webp",
      female:
        "/images/armors/dervish/nightfall/Dervish_Elite_Sunspear_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 400,
        },
        {
          materialId: "steel-ingot",
          quantity: 40,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Dervish_Elite_Sunspear_armor",
  },
  {
    id: "dervish-vabbian-armor",
    name: "Vabbian Armor",
    professionId: "dervish",
    campaignId: "nightfall",
    craftingLocation: {
      name: "The Kodash Bazaar",
      campaignId: "nightfall",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/dervish/nightfall/Dervish_Vabbian_armor_m.webp",
      female: "/images/armors/dervish/nightfall/Dervish_Vabbian_armor_f.webp",
    },
    cost: {
      gold: 25000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 200,
        },
        {
          materialId: "elonian-leather-square",
          quantity: 32,
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
    wikiLink: "https://wiki.guildwars.com/wiki/Dervish_Vabbian_armor",
  },
  {
    id: "dervish-ancient-armor",
    name: "Ancient Armor",
    professionId: "dervish",
    campaignId: "nightfall",
    craftingLocation: {
      name: "Bone Palace",
      campaignId: "nightfall",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/dervish/nightfall/Dervish_Ancient_armor_m.webp",
      female: "/images/armors/dervish/nightfall/Dervish_Ancient_armor_f.webp",
    },
    cost: {
      gold: 50000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 400,
        },
        {
          materialId: "elonian-leather-square",
          quantity: 40,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Dervish_Ancient_armor",
  },
  {
    id: "dervish-primeval-armor",
    name: "Primeval Armor",
    professionId: "dervish",
    campaignId: "nightfall",
    craftingLocation: {
      name: "Throne of Secrets",
      campaignId: "nightfall",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/dervish/nightfall/Dervish_Primeval_armor_m.webp",
      female: "/images/armors/dervish/nightfall/Dervish_Primeval_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "bone",
          quantity: 400,
        },
        {
          materialId: "elonian-leather-square",
          quantity: 40,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Dervish_Primeval_armor",
  },

  {
    id: "dervish-norn-armor",
    name: "Norn Armor",
    professionId: "dervish",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Gunnar's Hold",
      campaignId: "eye-of-the-north",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/dervish/eotn/Dervish_Norn_armor_m.webp",
      female: "/images/armors/dervish/eotn/Dervish_Norn_armor_f.webp",
    },
    cost: {
      gold: 50000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 400,
        },
        {
          materialId: "fur-square",
          quantity: 40,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Dervish_Norn_armor",
  },
  {
    id: "dervish-asuran-armor",
    name: "Asuran Armor",
    professionId: "dervish",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Rata Sum",
      campaignId: "eye-of-the-north",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/dervish/eotn/Dervish_Asuran_armor_m.webp",
      female: "/images/armors/dervish/eotn/Dervish_Asuran_armor_f.webp",
    },
    cost: {
      gold: 50000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 400,
        },
        {
          materialId: "leather-square",
          quantity: 40,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Dervish_Asuran_armor",
  },
  {
    id: "dervish-monument-armor",
    name: "Monument Armor",
    professionId: "dervish",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Eye of the North",
      campaignId: "eye-of-the-north",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/dervish/eotn/Dervish_Monument_armor_m.webp",
      female: "/images/armors/dervish/eotn/Dervish_Monument_armor_f.webp",
    },
    cost: {
      gold: 50000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 400,
        },
        {
          materialId: "steel-ingot",
          quantity: 40,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Dervish_Monument_armor",
  },
  {
    id: "dervish-deldrimor-armor",
    name: "Deldrimor Armor",
    professionId: "dervish",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Central Transfer Chamber",
      campaignId: "eye-of-the-north",
    },
    pieces: ["chest", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/dervish/eotn/Dervish_Deldrimor_armor_m.webp",
      female: "/images/armors/dervish/eotn/Dervish_Deldrimor_armor_f.webp",
    },
    cost: {
      gold: 30000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 150,
        },
        {
          materialId: "iron-ingot",
          quantity: 150,
        },
        {
          materialId: "deldrimor-steel-ingot",
          quantity: 15,
        },
        {
          materialId: "leather-square",
          quantity: 15,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Dervish_Deldrimor_armor",
  },

  {
    id: "dervish-obsidian-armor",
    name: "Obsidian Armor",
    professionId: "dervish",
    campaignId: "core",
    craftingLocation: {
      name: "Fissure of Woe",
      campaignId: "core",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/dervish/core/Dervish_Obsidian_armor_m.webp",
      female: "/images/armors/dervish/core/Dervish_Obsidian_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 400,
        },
        {
          materialId: "elonian-leather-square",
          quantity: 40,
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
    wikiLink: "https://wiki.guildwars.com/wiki/Dervish_Obsidian_armor",
  },
];

export default dervishArmors;
