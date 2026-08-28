const assassinArmors = [
  {
    id: "assassin-shing-jea-armor",
    name: "Shing Jea Armor",
    professionId: "assassin",
    campaignId: "factions",
    craftingLocation: {
      name: "Kaineng Center",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/assassin/factions/Assassin_Shing_Jea_armor_m.webp",
      female:
        "/images/armors/assassin/factions/Assassin_Shing_Jea_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 200,
        },
        {
          materialId: "bolt-of-damask",
          quantity: 8,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Assassin_Shing_Jea_armor",
  },
  {
    id: "assassin-seitung-armor",
    name: "Seitung Armor",
    professionId: "assassin",
    campaignId: "factions",
    craftingLocation: {
      name: "Kaineng Center",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/assassin/factions/Assassin_Seitung_armor_m.webp",
      female: "/images/armors/assassin/factions/Assassin_Seitung_armor_f.webp",
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
    wikiLink: "https://wiki.guildwars.com/wiki/Assassin_Seitung_armor",
  },
  {
    id: "assassin-canthan-armor",
    name: "Canthan Armor",
    professionId: "assassin",
    campaignId: "factions",
    craftingLocation: [
      {
        name: "Kaineng Center",
        campaignId: "factions",
      },
      {
        name: "Boreal Station",
        campaignId: "eye-of-the-north",
      },
    ],
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/assassin/factions/Assassin_Canthan_armor_m.webp",
      female: "/images/armors/assassin/factions/Assassin_Canthan_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 200,
        },
        {
          materialId: "leather-square",
          quantity: 32,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Assassin_Canthan_armor",
  },
  {
    id: "assassin-exotic-armor",
    name: "Exotic Armor",
    professionId: "assassin",
    campaignId: "factions",
    craftingLocation: {
      name: "Wajjun Bazaar",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/assassin/factions/Assassin_Exotic_armor_m.webp",
      female: "/images/armors/assassin/factions/Assassin_Exotic_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "chitin-fragment",
          quantity: 200,
        },
        {
          materialId: "steel-ingot",
          quantity: 32,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Assassin_Exotic_armor",
  },
  {
    id: "assassin-imperial-armor",
    name: "Imperial Armor",
    professionId: "assassin",
    campaignId: "factions",
    craftingLocation: {
      name: "Bukdek Byway",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/assassin/factions/Assassin_Imperial_armor_m.webp",
      female: "/images/armors/assassin/factions/Assassin_Imperial_armor_f.webp",
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
    wikiLink: "https://wiki.guildwars.com/wiki/Assassin_Imperial_armor",
  },
  {
    id: "assassin-kurzick-armor",
    name: "Kurzick Armor",
    professionId: "assassin",
    campaignId: "factions",
    craftingLocation: {
      name: "House zu Heltzer",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/assassin/factions/Assassin_Kurzick_armor_m.webp",
      female: "/images/armors/assassin/factions/Assassin_Kurzick_armor_f.webp",
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
        {
          materialId: "amber-chunk",
          quantity: 24,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Assassin_Kurzick_armor",
  },
  {
    id: "assassin-luxon-armor",
    name: "Luxon Armor",
    professionId: "assassin",
    campaignId: "factions",
    craftingLocation: {
      name: "Cavalon",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/assassin/factions/Assassin_Luxon_armor_m.webp",
      female: "/images/armors/assassin/factions/Assassin_Luxon_armor_f.webp",
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
        {
          materialId: "jadeite-shard",
          quantity: 24,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Assassin_Luxon_armor",
  },
  {
    id: "assassin-elite-canthan-armor",
    name: "Elite Canthan Armor",
    professionId: "assassin",
    campaignId: "factions",
    craftingLocation: {
      name: "Divine Path",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/assassin/factions/Assassin_Elite_Canthan_armor_m.webp",
      female:
        "/images/armors/assassin/factions/Assassin_Elite_Canthan_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 400,
        },
        {
          materialId: "leather-square",
          quantity: 40,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Assassin_Elite_Canthan_armor",
  },
  {
    id: "assassin-elite-exotic-armor",
    name: "Elite Exotic Armor",
    professionId: "assassin",
    campaignId: "factions",
    craftingLocation: {
      name: "Divine Path",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/assassin/factions/Assassin_Elite_Exotic_armor_m.webp",
      female:
        "/images/armors/assassin/factions/Assassin_Elite_Exotic_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "chitin-fragment",
          quantity: 400,
        },
        {
          materialId: "steel-ingot",
          quantity: 40,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Assassin_Elite_Exotic_armor",
  },
  {
    id: "assassin-elite-imperial-armor",
    name: "Elite Imperial Armor",
    professionId: "assassin",
    campaignId: "factions",
    craftingLocation: {
      name: "Divine Path",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/assassin/factions/Assassin_Elite_Imperial_armor_m.webp",
      female:
        "/images/armors/assassin/factions/Assassin_Elite_Imperial_armor_f.webp",
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
    wikiLink: "https://wiki.guildwars.com/wiki/Assassin_Elite_Imperial_armor",
  },
  {
    id: "assassin-elite-kurzick-armor",
    name: "Elite Kurzick Armor",
    professionId: "assassin",
    campaignId: "factions",
    craftingLocation: {
      name: "Vasburg Armory",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/assassin/factions/Assassin_Elite_Kurzick_armor_m.webp",
      female:
        "/images/armors/assassin/factions/Assassin_Elite_Kurzick_armor_f.webp",
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
        {
          materialId: "amber-chunk",
          quantity: 80,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Assassin_Elite_Kurzick_armor",
  },
  {
    id: "assassin-elite-luxon-armor",
    name: "Elite Luxon Armor",
    professionId: "assassin",
    campaignId: "factions",
    craftingLocation: {
      name: "Leviathan Pits",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/assassin/factions/Assassin_Elite_Luxon_armor_m.webp",
      female:
        "/images/armors/assassin/factions/Assassin_Elite_Luxon_armor_f.webp",
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
        {
          materialId: "jadeite-shard",
          quantity: 80,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Assassin_Elite_Luxon_armor",
  },

  {
    id: "assassin-vabbian-armor",
    name: "Vabbian Armor",
    professionId: "assassin",
    campaignId: "nightfall",
    craftingLocation: {
      name: "The Kodash Bazaar",
      campaignId: "nightfall",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/assassin/nightfall/Assassin_Vabbian_armor_m.webp",
      female: "/images/armors/assassin/nightfall/Assassin_Vabbian_armor_f.webp",
    },
    cost: {
      gold: 25000,
      materials: [
        {
          materialId: "tanned-hide-square",
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
    wikiLink: "https://wiki.guildwars.com/wiki/Assassin_Vabbian_armor",
  },
  {
    id: "assassin-ancient-armor",
    name: "Ancient Armor",
    professionId: "assassin",
    campaignId: "nightfall",
    craftingLocation: {
      name: "Bone Palace",
      campaignId: "nightfall",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/assassin/nightfall/Assassin_Ancient_armor_m.webp",
      female: "/images/armors/assassin/nightfall/Assassin_Ancient_armor_f.webp",
    },
    cost: {
      gold: 50000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 400,
        },
        {
          materialId: "elonian-leather-square",
          quantity: 40,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Assassin_Ancient_armor",
  },

  {
    id: "assassin-norn-armor",
    name: "Norn Armor",
    professionId: "assassin",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Gunnar's Hold",
      campaignId: "eye-of-the-north",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/assassin/eotn/Assassin_Norn_armor_m.webp",
      female: "/images/armors/assassin/eotn/Assassin_Norn_armor_f.webp",
    },
    cost: {
      gold: 50000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 400,
        },
        {
          materialId: "fur-square",
          quantity: 40,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Assassin_Norn_armor",
  },
  {
    id: "assassin-asuran-armor",
    name: "Asuran Armor",
    professionId: "assassin",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Rata Sum",
      campaignId: "eye-of-the-north",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/assassin/eotn/Assassin_Asuran_armor_m.webp",
      female: "/images/armors/assassin/eotn/Assassin_Asuran_armor_f.webp",
    },
    cost: {
      gold: 50000,
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
    wikiLink: "https://wiki.guildwars.com/wiki/Assassin_Asuran_armor",
  },
  {
    id: "assassin-monument-armor",
    name: "Monument Armor",
    professionId: "assassin",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Eye of the North",
      campaignId: "eye-of-the-north",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/assassin/eotn/Assassin_Monument_armor_m.webp",
      female: "/images/armors/assassin/eotn/Assassin_Monument_armor_f.webp",
    },
    cost: {
      gold: 50000,
      materials: [
        {
          materialId: "scale",
          quantity: 400,
        },
        {
          materialId: "leather-square",
          quantity: 40,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Assassin_Monument_armor",
  },
  {
    id: "assassin-deldrimor-armor",
    name: "Deldrimor Armor",
    professionId: "assassin",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Central Transfer Chamber",
      campaignId: "eye-of-the-north",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/assassin/eotn/Assassin_Deldrimor_armor_m.webp",
      female: "/images/armors/assassin/eotn/Assassin_Deldrimor_armor_f.webp",
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
          quantity: 10,
        },
        {
          materialId: "monstruous-claw",
          quantity: 15,
        },
        {
          materialId: "deldrimor-steel-ingot",
          quantity: 10,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Assassin_Deldrimor_armor",
  },

  {
    id: "assassin-obsidian-armor",
    name: "Obsidian Armor",
    professionId: "assassin",
    campaignId: "core",
    craftingLocation: {
      name: "The Fissure of Woe",
      campaignId: "core",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/assassin/core/Assassin_Obsidian_armor_m.webp",
      female: "/images/armors/assassin/core/Assassin_Obsidian_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 400,
        },
        {
          materialId: "deldrimor-steel-ingot",
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
    wikiLink: "https://wiki.guildwars.com/wiki/Assassin_Obsidian_armor",
  },
];

export default assassinArmors;
