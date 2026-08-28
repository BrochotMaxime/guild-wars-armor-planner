const ritualistArmors = [
  {
    id: "ritualist-shing-jea-armor",
    name: "Shing Jea Armor",
    professionId: "ritualist",
    campaignId: "factions",
    craftingLocation: {
      name: "Kaineng Center",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/ritualist/factions/Ritualist_Shing_Jea_armor_m.webp",
      female:
        "/images/armors/ritualist/factions/Ritualist_Shing_Jea_armor_f.webp",
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
    wikiLink: "https://wiki.guildwars.com/wiki/Ritualist_Shing_Jea_armor",
  },
  {
    id: "ritualist-canthan-armor",
    name: "Canthan Armor",
    professionId: "ritualist",
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
      male: "/images/armors/ritualist/factions/Ritualist_Canthan_armor_m.webp",
      female:
        "/images/armors/ritualist/factions/Ritualist_Canthan_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 200,
        },
        {
          materialId: "steel-ingot",
          quantity: 32,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Ritualist_Canthan_armor",
  },
  {
    id: "ritualist-seitung-armor",
    name: "Seitung Armor",
    professionId: "ritualist",
    campaignId: "factions",
    craftingLocation: {
      name: "Kaineng Center",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/ritualist/factions/Ritualist_Seitung_armor_m.webp",
      female:
        "/images/armors/ritualist/factions/Ritualist_Seitung_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 200,
        },
        {
          materialId: "monstruous-claw",
          quantity: 32,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Ritualist_Seitung_armor",
  },
  {
    id: "ritualist-exotic-armor",
    name: "Exotic Armor",
    professionId: "ritualist",
    campaignId: "factions",
    craftingLocation: {
      name: "Wajjun Bazaar",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/ritualist/factions/Ritualist_Exotic_armor_m.webp",
      female: "/images/armors/ritualist/factions/Ritualist_Exotic_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 200,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 32,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Ritualist_Exotic_armor",
  },
  {
    id: "ritualist-imperial-armor",
    name: "Imperial Armor",
    professionId: "ritualist",
    campaignId: "factions",
    craftingLocation: {
      name: "Bukdek Byway",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/ritualist/factions/Ritualist_Imperial_armor_m.webp",
      female:
        "/images/armors/ritualist/factions/Ritualist_Imperial_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 200,
        },
        {
          materialId: "bone",
          quantity: 200,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Ritualist_Imperial_armor",
  },
  {
    id: "ritualist-kurzick-armor",
    name: "Kurzick Armor",
    professionId: "ritualist",
    campaignId: "factions",
    craftingLocation: {
      name: "House zu Heltzer",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/ritualist/factions/Ritualist_Kurzick_armor_m.webp",
      female:
        "/images/armors/ritualist/factions/Ritualist_Kurzick_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 200,
        },
        {
          materialId: "vial-of-ink",
          quantity: 32,
        },
        {
          materialId: "amber-chunk",
          quantity: 24,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Ritualist_Kurzick_armor",
  },
  {
    id: "ritualist-luxon-armor",
    name: "Luxon Armor",
    professionId: "ritualist",
    campaignId: "factions",
    craftingLocation: {
      name: "Cavalon",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/ritualist/factions/Ritualist_Luxon_armor_m.webp",
      female: "/images/armors/ritualist/factions/Ritualist_Luxon_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 200,
        },
        {
          materialId: "vial-of-ink",
          quantity: 32,
        },
        {
          materialId: "jadeite-shard",
          quantity: 24,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Ritualist_Luxon_armor",
  },
  {
    id: "ritualist-elite-canthan-armor",
    name: "Elite Canthan Armor",
    professionId: "ritualist",
    campaignId: "factions",
    craftingLocation: {
      name: "Divine Path",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/ritualist/factions/Ritualist_Elite_Canthan_armor_m.webp",
      female:
        "/images/armors/ritualist/factions/Ritualist_Elite_Canthan_armor_f.webp",
    },
    cost: {
      gold: 75000,
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
    wikiLink: "https://wiki.guildwars.com/wiki/Ritualist_Elite_Canthan_armor",
  },
  {
    id: "ritualist-elite-exotic-armor",
    name: "Elite Exotic Armor",
    professionId: "ritualist",
    campaignId: "factions",
    craftingLocation: {
      name: "Divine Path",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/ritualist/factions/Ritualist_Elite_Exotic_armor_m.webp",
      female:
        "/images/armors/ritualist/factions/Ritualist_Elite_Exotic_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 400,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 40,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Ritualist_Elite_Exotic_armor",
  },
  {
    id: "ritualist-elite-imperial-armor",
    name: "Elite Imperial Armor",
    professionId: "ritualist",
    campaignId: "factions",
    craftingLocation: {
      name: "Divine Path",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/ritualist/factions/Ritualist_Elite_Imperial_armor_m.webp",
      female:
        "/images/armors/ritualist/factions/Ritualist_Elite_Imperial_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 400,
        },
        {
          materialId: "bone",
          quantity: 400,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Ritualist_Elite_Imperial_armor",
  },
  {
    id: "ritualist-elite-kurzick-armor",
    name: "Elite Kurzick Armor",
    professionId: "ritualist",
    campaignId: "factions",
    craftingLocation: {
      name: "Vasburg Armory",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/ritualist/factions/Ritualist_Elite_Kurzick_armor_m.webp",
      female:
        "/images/armors/ritualist/factions/Ritualist_Elite_Kurzick_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 400,
        },
        {
          materialId: "vial-of-ink",
          quantity: 40,
        },
        {
          materialId: "amber-chunk",
          quantity: 80,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Ritualist_Elite_Kurzick_armor",
  },
  {
    id: "ritualist-elite-luxon-armor",
    name: "Elite Luxon Armor",
    professionId: "ritualist",
    campaignId: "factions",
    craftingLocation: {
      name: "Leviathan Pits",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/ritualist/factions/Ritualist_Elite_Luxon_armor_m.webp",
      female:
        "/images/armors/ritualist/factions/Ritualist_Elite_Luxon_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 400,
        },
        {
          materialId: "vial-of-ink",
          quantity: 40,
        },
        {
          materialId: "jadeite-shard",
          quantity: 80,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Ritualist_Elite_Luxon_armor",
  },

  {
    id: "ritualist-vabbian-armor",
    name: "Vabbian Armor",
    professionId: "ritualist",
    campaignId: "nightfall",
    craftingLocation: {
      name: "The Kodash Bazaar",
      campaignId: "nightfall",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/ritualist/nightfall/Ritualist_Vabbian_armor_m.webp",
      female:
        "/images/armors/ritualist/nightfall/Ritualist_Vabbian_armor_f.webp",
    },
    cost: {
      gold: 25000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 200,
        },
        {
          materialId: "bolt-of-silk",
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
    wikiLink: "https://wiki.guildwars.com/wiki/Ritualist_Vabbian_armor",
  },
  {
    id: "ritualist-ancient-armor",
    name: "Ancient Armor",
    professionId: "ritualist",
    campaignId: "nightfall",
    craftingLocation: {
      name: "The Kodash Bazaar",
      campaignId: "nightfall",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/ritualist/nightfall/Ritualist_Ancient_armor_m.webp",
      female:
        "/images/armors/ritualist/nightfall/Ritualist_Ancient_armor_f.webp",
    },
    cost: {
      gold: 50000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 400,
        },
        {
          materialId: "bolt-of-linen",
          quantity: 40,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Ritualist_Ancient_armor",
  },

  {
    id: "ritualist-norn-armor",
    name: "Norn Armor",
    professionId: "ritualist",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Gunnar's Hold",
      campaignId: "eye-of-the-north",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/ritualist/eotn/Ritualist_Norn_armor_m.webp",
      female: "/images/armors/ritualist/eotn/Ritualist_Norn_armor_f.webp",
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
    wikiLink: "https://wiki.guildwars.com/wiki/Ritualist_Norn_armor",
  },
  {
    id: "ritualist-asuran-armor",
    name: "Asuran Norn Armor",
    professionId: "ritualist",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Rata Sum",
      campaignId: "eye-of-the-north",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/ritualist/eotn/Ritualist_Asuran_armor_m.webp",
      female: "/images/armors/ritualist/eotn/Ritualist_Asuran_armor_f.webp",
    },
    cost: {
      gold: 50000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 400,
        },
        {
          materialId: "vial-of-ink",
          quantity: 40,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Ritualist_Asuran_armor",
  },
  {
    id: "ritualist-monument-armor",
    name: "Monument Armor",
    professionId: "ritualist",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Gunnar's Hold",
      campaignId: "eye-of-the-north",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/ritualist/eotn/Ritualist_Monument_armor_m.webp",
      female: "/images/armors/ritualist/eotn/Ritualist_Monument_armor_f.webp",
    },
    cost: {
      gold: 50000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 400,
        },
        {
          materialId: "vial-of-ink",
          quantity: 40,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Ritualist_Monument_armor",
  },
  {
    id: "ritualist-deldrimor-armor",
    name: "Deldrimor Armor",
    professionId: "ritualist",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Central Transfer Chamber",
      campaignId: "eye-of-the-north",
    },
    pieces: ["chest", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/ritualist/eotn/Ritualist_Deldrimor_armor_m.webp",
      female: "/images/armors/ritualist/eotn/Ritualist_Deldrimor_armor_f.webp",
    },
    cost: {
      gold: 30000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 150,
        },
        {
          materialId: "scale",
          quantity: 100,
        },
        {
          materialId: "tanned-hide-square",
          quantity: 50,
        },
        {
          materialId: "deldrimor-steel-ingot",
          quantity: 15,
        },
        {
          materialId: "fur-square",
          quantity: 10,
        },
        {
          materialId: "leather-square",
          quantity: 5,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Ritualist_Deldrimor_armor",
  },

  {
    id: "ritualist-obsidian-armor",
    name: "Obsidian Armor",
    professionId: "ritualist",
    campaignId: "core",
    craftingLocation: {
      name: "Central Transfer Chamber",
      campaignId: "core",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/ritualist/core/Ritualist_Obsidian_armor_m.webp",
      female: "/images/armors/ritualist/core/Ritualist_Obsidian_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 400,
        },
        {
          materialId: "vial-of-ink",
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
    wikiLink: "https://wiki.guildwars.com/wiki/Ritualist_Obsidian_armor",
  },
];

export default ritualistArmors;
