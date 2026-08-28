const necromancerArmors = [
  {
    id: "necromancer-ascalon-armor",
    name: "Ascalon Armor",
    professionId: "necromancer",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Kaineng Center",
      campaignId: "factions",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/necromancer/prophecies/Necromancer_Ascalon_armor_m.webp",
      female:
        "/images/armors/necromancer/prophecies/Necromancer_Ascalon_armor_f.webp",
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
    wikiLink: "https://wiki.guildwars.com/wiki/Necromancer_Ascalon_armor",
  },
  {
    id: "necromancer-krytan-armor",
    name: "Krytan Armor",
    professionId: "necromancer",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Bukdek Byway",
      campaignId: "factions",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/necromancer/prophecies/Necromancer_Krytan_armor_m.webp",
      female:
        "/images/armors/necromancer/prophecies/Necromancer_Krytan_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "chitin-fragment",
          quantity: 175,
        },
        {
          materialId: "leather-square",
          quantity: 28,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Necromancer_Krytan_armor",
  },
  {
    id: "necromancer-tyrian-armor",
    name: "Tyrian Armor",
    professionId: "necromancer",
    campaignId: "prophecies",
    craftingLocation: [
      {
        name: "Droknar's Forge",
        campaignId: "prophecies",
      },
      {
        name: "Wajjun Bazaar",
        campaignId: "factions",
      },
      {
        name: "Boreal Station",
        campaignId: "eye-of-the-north",
      },
    ],
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/necromancer/prophecies/Necromancer_Tyrian_armor_m.webp",
      female:
        "/images/armors/necromancer/prophecies/Necromancer_Tyrian_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 175,
        },
        {
          materialId: "leather-square",
          quantity: 28,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Necromancer_Tyrian_armor",
  },
  {
    id: "necromancer-cabal-armor",
    name: "Cabal Armor",
    professionId: "necromancer",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Droknar's Forge",
      campaignId: "prophecies",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/necromancer/prophecies/Necromancer_Cabal_armor_m.webp",
      female:
        "/images/armors/necromancer/prophecies/Necromancer_Cabal_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 175,
        },
        {
          materialId: "bone",
          quantity: 175,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Necromancer_Cabal_armor",
  },
  {
    id: "necromancer-fanatic-armor",
    name: "Fanatic Armor",
    professionId: "necromancer",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Droknar's Forge",
      campaignId: "prophecies",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/necromancer/prophecies/Necromancer_Fanatic_armor_m.webp",
      female:
        "/images/armors/necromancer/prophecies/Necromancer_Fanatic_armor_f.webp",
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
    wikiLink: "https://wiki.guildwars.com/wiki/Necromancer_Fanatic_armor",
  },
  {
    id: "necromancer-necrotic-armor",
    name: "Necrotic Armor",
    professionId: "necromancer",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Droknar's Forge",
      campaignId: "prophecies",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/necromancer/prophecies/Necromancer_Necrotic_armor_m.webp",
      female:
        "/images/armors/necromancer/prophecies/Necromancer_Necrotic_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 175,
        },
        {
          materialId: "chitin-fragment",
          quantity: 175,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Necromancer_Necrotic_armor",
  },
  {
    id: "necromancer-scar-pattern-armor",
    name: "Scar Pattern Armor",
    professionId: "necromancer",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Droknar's Forge",
      campaignId: "prophecies",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/necromancer/prophecies/Necromancer_Scar_Pattern_armor_m.webp",
      female:
        "/images/armors/necromancer/prophecies/Necromancer_Scar_Pattern_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "roll-of-parchment",
          quantity: 175,
        },
        {
          materialId: "feather",
          quantity: 28,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Necromancer_Scar_Pattern_armor",
  },
  {
    id: "necromancer-profane-armor",
    name: "Profane Armor",
    professionId: "necromancer",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Droknar's Forge",
      campaignId: "prophecies",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/necromancer/prophecies/Necromancer_Profane_armor_m.webp",
      female:
        "/images/armors/necromancer/prophecies/Necromancer_Profane_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 175,
        },
        {
          materialId: "steel-ingot",
          quantity: 28,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Necromancer_Profane_armor",
  },
  {
    id: "necromancer-elite-cabal-armor",
    name: "Elite Cabal Armor",
    professionId: "necromancer",
    campaignId: "prophecies",
    craftingLocation: {
      name: "The Granite Citadel",
      campaignId: "prophecies",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/necromancer/prophecies/Necromancer_Elite_Cabal_armor_m.webp",
      female:
        "/images/armors/necromancer/prophecies/Necromancer_Elite_Cabal_armor_f.webp",
    },
    cost: {
      gold: 60000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 350,
        },
        {
          materialId: "bone",
          quantity: 350,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Necromancer_Elite_Cabal_armor",
  },
  {
    id: "necromancer-elite-cultist-armor",
    name: "Elite Cultist Armor",
    professionId: "necromancer",
    campaignId: "prophecies",
    craftingLocation: {
      name: "The Granite Citadel",
      campaignId: "prophecies",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/necromancer/prophecies/Necromancer_Elite_Cultist_armor_m.webp",
      female:
        "/images/armors/necromancer/prophecies/Necromancer_Elite_Cultist_armor_f.webp",
    },
    cost: {
      gold: 60000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 350,
        },
        {
          materialId: "elonian-leather-square",
          quantity: 35,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Necromancer_Elite_Cultist_armor",
  },
  {
    id: "necromancer-elite-necrotic-armor",
    name: "Elite Necrotic Armor",
    professionId: "necromancer",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Marhan's Grotto",
      campaignId: "prophecies",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/necromancer/prophecies/Necromancer_Elite_Necrotic_armor_m.webp",
      female:
        "/images/armors/necromancer/prophecies/Necromancer_Elite_Necrotic_armor_f.webp",
    },
    cost: {
      gold: 60000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 350,
        },
        {
          materialId: "chitin-fragment",
          quantity: 35,
        },
      ],
    },
    wikiLink:
      "https://wiki.guildwars.com/wiki/Necromancer_Elite_Necrotic_armor",
  },
  {
    id: "necromancer-elite-scar-pattern-armor",
    name: "Elite Scar Pattern Armor",
    professionId: "necromancer",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Marhan's Grotto",
      campaignId: "prophecies",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/necromancer/prophecies/Necromancer_Elite_Scar_Pattern_armor_m.webp",
      female:
        "/images/armors/necromancer/prophecies/Necromancer_Elite_Scar_Pattern_armor_f.webp",
    },
    cost: {
      gold: 60000,
      materials: [
        {
          materialId: "roll-of-vellum",
          quantity: 350,
        },
        {
          materialId: "feather",
          quantity: 35,
        },
      ],
    },
    wikiLink:
      "https://wiki.guildwars.com/wiki/Necromancer_Elite_Scar_Pattern_armor",
  },
  {
    id: "necromancer-elite-profane-armor",
    name: "Elite Profane Armor",
    professionId: "necromancer",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Marhan's Grotto",
      campaignId: "prophecies",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/necromancer/prophecies/Necromancer_Elite_Profane_armor_m.webp",
      female:
        "/images/armors/necromancer/prophecies/Necromancer_Elite_Profane_armor_f.webp",
    },
    cost: {
      gold: 60000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 350,
        },
        {
          materialId: "deldrimor-steel-ingot",
          quantity: 35,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Necromancer_Elite_Profane_armor",
  },

  {
    id: "necromancer-shing-jea-armor",
    name: "Shing Jea Armor",
    professionId: "necromancer",
    campaignId: "factions",
    craftingLocation: {
      name: "Kaineng Center",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/necromancer/factions/Necromancer_Shing_Jea_armor_m.webp",
      female:
        "/images/armors/necromancer/factions/Necromancer_Shing_Jea_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 175,
        },
        {
          materialId: "bone",
          quantity: 175,
        },
        {
          materialId: "roll-of-parchment",
          quantity: 5,
        },
        {
          materialId: "vial-of-ink",
          quantity: 4,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Necromancer_Shing_Jea_armor",
  },
  {
    id: "necromancer-canthan-armor",
    name: "Canthan Armor",
    professionId: "necromancer",
    campaignId: "factions",
    craftingLocation: {
      name: "Kaineng Center",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/necromancer/factions/Necromancer_Canthan_armor_m.webp",
      female:
        "/images/armors/necromancer/factions/Necromancer_Canthan_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "bone",
          quantity: 175,
        },
        {
          materialId: "monstruous-eye",
          quantity: 7,
        },
        {
          materialId: "monstruous-claw",
          quantity: 7,
        },
        {
          materialId: "monstruous-fang",
          quantity: 7,
        },
        {
          materialId: "roll-of-parchment",
          quantity: 5,
        },
        {
          materialId: "vial-of-ink",
          quantity: 4,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Necromancer_Canthan_armor",
  },
  {
    id: "necromancer-kurzick-armor",
    name: "Kurzick Armor",
    professionId: "necromancer",
    campaignId: "factions",
    craftingLocation: {
      name: "House zu Heltzer",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/necromancer/factions/Necromancer_Kurzick_armor_m.webp",
      female:
        "/images/armors/necromancer/factions/Necromancer_Kurzick_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 175,
        },
        {
          materialId: "steel-ingot",
          quantity: 28,
        },
        {
          materialId: "amber-chunk",
          quantity: 21,
        },
        {
          materialId: "roll-of-parchment",
          quantity: 5,
        },
        {
          materialId: "vial-of-ink",
          quantity: 4,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Necromancer_Kurzick_armor",
  },
  {
    id: "necromancer-luxon-armor",
    name: "Luxon Armor",
    professionId: "necromancer",
    campaignId: "factions",
    craftingLocation: {
      name: "Cavalon",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/necromancer/factions/Necromancer_Luxon_armor_m.webp",
      female:
        "/images/armors/necromancer/factions/Necromancer_Luxon_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "scale",
          quantity: 175,
        },
        {
          materialId: "monstruous-fang",
          quantity: 28,
        },
        {
          materialId: "jadeite-shard",
          quantity: 21,
        },
        {
          materialId: "roll-of-parchment",
          quantity: 5,
        },
        {
          materialId: "vial-of-ink",
          quantity: 4,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Necromancer_Luxon_armor",
  },
  {
    id: "necromancer-elite-canthan-armor",
    name: "Elite Canthan Armor",
    professionId: "necromancer",
    campaignId: "factions",
    craftingLocation: {
      name: "Divine Path",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/necromancer/factions/Necromancer_Elite_Canthan_armor_m.webp",
      female:
        "/images/armors/necromancer/factions/Necromancer_Elite_Canthan_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "bone",
          quantity: 350,
        },
        {
          materialId: "monstruous-eye",
          quantity: 7,
        },
        {
          materialId: "monstruous-claw",
          quantity: 7,
        },
        {
          materialId: "monstruous-fang",
          quantity: 7,
        },
        {
          materialId: "roll-of-parchment",
          quantity: 10,
        },
        {
          materialId: "vial-of-ink",
          quantity: 5,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Necromancer_Elite_Canthan_armor",
  },
  {
    id: "necromancer-elite-kurzick-armor",
    name: "Elite Kurzick Armor",
    professionId: "necromancer",
    campaignId: "factions",
    craftingLocation: {
      name: "Vasburg Armory",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/necromancer/factions/Necromancer_Elite_Kurzick_armor_m.webp",
      female:
        "/images/armors/necromancer/factions/Necromancer_Elite_Kurzick_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 350,
        },
        {
          materialId: "steel-ingot",
          quantity: 35,
        },
        {
          materialId: "amber-chunk",
          quantity: 80,
        },
        {
          materialId: "roll-of-parchment",
          quantity: 10,
        },
        {
          materialId: "vial-of-ink",
          quantity: 5,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Necromancer_Elite_Kurzick_armor",
  },
  {
    id: "necromancer-elite-luxon-armor",
    name: "Elite Luxon Armor",
    professionId: "necromancer",
    campaignId: "factions",
    craftingLocation: {
      name: "Cavalon",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/necromancer/factions/Necromancer_Elite_Luxon_armor_m.webp",
      female:
        "/images/armors/necromancer/factions/Necromancer_Elite_Luxon_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "scale",
          quantity: 350,
        },
        {
          materialId: "monstruous-fang",
          quantity: 35,
        },
        {
          materialId: "jadeite-shard",
          quantity: 80,
        },
        {
          materialId: "roll-of-parchment",
          quantity: 10,
        },
        {
          materialId: "vial-of-ink",
          quantity: 5,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Necromancer_Elite_Luxon_armor",
  },

  {
    id: "necromancer-istani-armor",
    name: "Istani Armor",
    professionId: "necromancer",
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
      male: "/images/armors/necromancer/nightfall/Necromancer_Istani_armor_m.webp",
      female:
        "/images/armors/necromancer/nightfall/Necromancer_Istani_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 175,
        },
        {
          materialId: "scale",
          quantity: 175,
        },
        {
          materialId: "roll-of-parchment",
          quantity: 5,
        },
        {
          materialId: "vial-of-ink",
          quantity: 3,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Necromancer_Istani_armor",
  },
  {
    id: "necromancer-sunspear-armor",
    name: "Sunspear Armor",
    professionId: "necromancer",
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
      male: "/images/armors/necromancer/nightfall/Necromancer_Sunspear_armor_m.webp",
      female:
        "/images/armors/necromancer/nightfall/Necromancer_Sunspear_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 175,
        },
        {
          materialId: "feather",
          quantity: 175,
        },
        {
          materialId: "roll-of-parchment",
          quantity: 5,
        },
        {
          materialId: "vial-of-ink",
          quantity: 3,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Necromancer_Sunspear_armor",
  },
  {
    id: "necromancer-elite-sunspear-armor",
    name: "Elite Sunspear Armor",
    professionId: "necromancer",
    campaignId: "nightfall",
    craftingLocation: {
      name: "Command Post",
      campaignId: "nightfall",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/necromancer/nightfall/Necromancer_Elite_Sunspear_armor_m.webp",
      female:
        "/images/armors/necromancer/nightfall/Necromancer_Elite_Sunspear_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 350,
        },
        {
          materialId: "elonian-leather-square",
          quantity: 35,
        },
        {
          materialId: "roll-of-parchment",
          quantity: 10,
        },
        {
          materialId: "vial-of-ink",
          quantity: 5,
        },
      ],
    },
    wikiLink:
      "https://wiki.guildwars.com/wiki/Necromancer_Elite_Sunspear_armor",
  },
  {
    id: "necromancer-vabbian-armor",
    name: "Vabbian Armor",
    professionId: "necromancer",
    campaignId: "nightfall",
    craftingLocation: {
      name: "The Kodash Bazaar",
      campaignId: "nightfall",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/necromancer/nightfall/Necromancer_Vabbian_armor_m.webp",
      female:
        "/images/armors/necromancer/nightfall/Necromancer_Vabbian_armor_f.webp",
    },
    cost: {
      gold: 25000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 175,
        },
        {
          materialId: "bolt-of-linen",
          quantity: 28,
        },
        {
          materialId: "roll-of-parchment",
          quantity: 5,
        },
        {
          materialId: "vial-of-ink",
          quantity: 3,
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
    wikiLink: "https://wiki.guildwars.com/wiki/Necromancer_Vabbian_armor",
  },
  {
    id: "necromancer-ancient-armor",
    name: "Ancient Armor",
    professionId: "necromancer",
    campaignId: "nightfall",
    craftingLocation: {
      name: "Bone Palace",
      campaignId: "nightfall",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/necromancer/nightfall/Necromancer_Ancient_armor_m.webp",
      female:
        "/images/armors/necromancer/nightfall/Necromancer_Ancient_armor_f.webp",
    },
    cost: {
      gold: 50000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 175,
        },
        {
          materialId: "monstruous-claw",
          quantity: 14,
        },
        {
          materialId: "monstruous-fang",
          quantity: 14,
        },
        {
          materialId: "roll-of-parchment",
          quantity: 10,
        },
        {
          materialId: "vial-of-ink",
          quantity: 5,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Necromancer_Ancient_armor",
  },
  {
    id: "necromancer-primeval-armor",
    name: "Primeval Armor",
    professionId: "necromancer",
    campaignId: "nightfall",
    craftingLocation: {
      name: "Throne of Secrets",
      campaignId: "nightfall",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/necromancer/nightfall/Necromancer_Primeval_armor_m.webp",
      female:
        "/images/armors/necromancer/nightfall/Necromancer_Primeval_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "scale",
          quantity: 350,
        },
        {
          materialId: "chitin-fragment",
          quantity: 175,
        },
        {
          materialId: "roll-of-parchment",
          quantity: 10,
        },
        {
          materialId: "vial-of-ink",
          quantity: 5,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Necromancer_Primeval_armor",
  },

  {
    id: "necromancer-norn-armor",
    name: "Norn Armor",
    professionId: "necromancer",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Gunnar's Hold",
      campaignId: "eye-of-the-north",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/necromancer/eotn/Necromancer_Norn_armor_m.webp",
      female: "/images/armors/necromancer/eotn/Necromancer_Norn_armor_f.webp",
    },
    cost: {
      gold: 50000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 350,
        },
        {
          materialId: "fur-square",
          quantity: 21,
        },
        {
          materialId: "monstruous-fang",
          quantity: 14,
        },
        {
          materialId: "roll-of-parchment",
          quantity: 10,
        },
        {
          materialId: "vial-of-ink",
          quantity: 5,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Necromancer_Norn_armor",
  },
  {
    id: "necromancer-asuran-armor",
    name: "Asuran Armor",
    professionId: "necromancer",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Rata Sum",
      campaignId: "eye-of-the-north",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/necromancer/eotn/Necromancer_Asuran_armor_m.webp",
      female: "/images/armors/necromancer/eotn/Necromancer_Asuran_armor_f.webp",
    },
    cost: {
      gold: 50000,
      materials: [
        {
          materialId: "scale",
          quantity: 350,
        },
        {
          materialId: "monstruous-fang",
          quantity: 21,
        },
        {
          materialId: "monstruous-claw",
          quantity: 14,
        },
        {
          materialId: "roll-of-parchment",
          quantity: 10,
        },
        {
          materialId: "vial-of-ink",
          quantity: 5,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Necromancer_Asuran_armor",
  },
  {
    id: "necromancer-monument-armor",
    name: "Monument Armor",
    professionId: "necromancer",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Eye of the North",
      campaignId: "eye-of-the-north",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/necromancer/eotn/Necromancer_Monument_armor_m.webp",
      female:
        "/images/armors/necromancer/eotn/Necromancer_Monument_armor_f.webp",
    },
    cost: {
      gold: 50000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 350,
        },
        {
          materialId: "steel-ingot",
          quantity: 35,
        },
        {
          materialId: "roll-of-parchment",
          quantity: 10,
        },
        {
          materialId: "vial-of-ink",
          quantity: 5,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Necromancer_Monument_armor",
  },
  {
    id: "necromancer-deldrimor-armor",
    name: "Norn Armor",
    professionId: "necromancer",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Central Transfer Chamber",
      campaignId: "eye-of-the-north",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/necromancer/eotn/Necromancer_Deldrimor_armor_m.webp",
      female:
        "/images/armors/necromancer/eotn/Necromancer_Deldrimor_armor_f.webp",
    },
    cost: {
      gold: 40000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 300,
        },
        {
          materialId: "bone",
          quantity: 50,
        },
        {
          materialId: "leather-square",
          quantity: 25,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 10,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Necromancer_Deldrimor_armor",
  },

  {
    id: "necromancer-obsidian-armor",
    name: "Obsidian Armor",
    professionId: "necromancer",
    campaignId: "core",
    craftingLocation: {
      name: "Fissure of Woe",
      campaignId: "core",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/necromancer/core/Necromancer_Obsidian_armor_m.webp",
      female:
        "/images/armors/necromancer/core/Necromancer_Obsidian_armor_f.webp",
    },
    cost: {
      gold: 60000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 350,
        },
        {
          materialId: "elonian-leather-square",
          quantity: 35,
        },
        {
          materialId: "glob-of-ectoplasm",
          quantity: 105,
        },
        {
          materialId: "obsidian-shard",
          quantity: 105,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Necromancer_Obsidian_armor",
  },
];

export default necromancerArmors;
