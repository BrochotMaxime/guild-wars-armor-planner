const monkArmors = [
  {
    id: "monk-ascalon-armor",
    name: "Ascalon Armor",
    professionId: "monk",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Kaineng Center",
      campaignId: "factions",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/monk/prophecies/Monk_Ascalon_armor_m.webp",
      female: "/images/armors/monk/prophecies/Monk_Ascalon_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 175,
        },
        {
          materialId: "bolt-of-linen",
          quantity: 28,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Ascalon_armor",
  },
  {
    id: "monk-krytan-armor",
    name: "Krytan Armor",
    professionId: "monk",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Bukdek Byway",
      campaignId: "factions",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/monk/prophecies/Monk_Krytan_armor_m.webp",
      female: "/images/armors/monk/prophecies/Monk_Krytan_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 175,
        },
        {
          materialId: "bolt-of-linen",
          quantity: 28,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Krytan_armor",
  },
  {
    id: "monk-tyrian-armor",
    name: "Tyrian Armor",
    professionId: "monk",
    campaignId: "prophecies",
    craftingLocation: [
      {
        name: "Droknar's Forge",
        campaignId: "prophecies",
      },
      {
        name: "Kaineng Center",
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
      male: "/images/armors/monk/prophecies/Monk_Tyrian_armor_m.webp",
      female: "/images/armors/monk/prophecies/Monk_Tyrian_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 175,
        },
        {
          materialId: "bolt-of-damask",
          quantity: 7,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Tyrian_armor",
  },
  {
    id: "monk-woven-armor",
    name: "Woven Armor",
    professionId: "monk",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Droknar's Forge",
      campaignId: "prophecies",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/monk/prophecies/Monk_Woven_armor_m.webp",
      female: "/images/armors/monk/prophecies/Monk_Woven_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 175,
        },
        {
          materialId: "tanned-hide-square",
          quantity: 28,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Woven_armor",
  },
  {
    id: "monk-censor-armor",
    name: "Censor Armor",
    professionId: "monk",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Droknar's Forge",
      campaignId: "prophecies",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/monk/prophecies/Monk_Censor_armor_m.webp",
      female: "/images/armors/monk/prophecies/Monk_Censor_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 175,
        },
        {
          materialId: "steel-ingot",
          quantity: 28,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Censor_armor",
  },
  {
    id: "monk-sacred-armor",
    name: "Sacred Armor",
    professionId: "monk",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Droknar's Forge",
      campaignId: "prophecies",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/monk/prophecies/Monk_Sacred_armor_m.webp",
      female: "/images/armors/monk/prophecies/Monk_Sacred_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 175,
        },
        {
          materialId: "bolt-of-linen",
          quantity: 28,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Sacred_armor",
  },
  {
    id: "monk-dragon-armor",
    name: "Dragon Armor",
    professionId: "monk",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Droknar's Forge",
      campaignId: "prophecies",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/monk/prophecies/Monk_Dragon_armor_m.webp",
      female: "/images/armors/monk/prophecies/Monk_Dragon_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "roll-of-parchment",
          quantity: 200,
        },
        {
          materialId: "feather",
          quantity: 32,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Dragon_armor",
  },
  {
    id: "monk-star-armor",
    name: "Star Armor",
    professionId: "monk",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Droknar's Forge",
      campaignId: "prophecies",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/monk/prophecies/Monk_Star_armor_m.webp",
      female: "/images/armors/monk/prophecies/Monk_Star_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "roll-of-parchment",
          quantity: 200,
        },
        {
          materialId: "feather",
          quantity: 32,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Star_armor",
  },
  {
    id: "monk-elite-woven-armor",
    name: "Elite Woven Armor",
    professionId: "monk",
    campaignId: "prophecies",
    craftingLocation: {
      name: "The Granite Citadel",
      campaignId: "prophecies",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/monk/prophecies/Monk_Elite_Woven_armor_m.webp",
      female: "/images/armors/monk/prophecies/Monk_Elite_Woven_armor_f.webp",
    },
    cost: {
      gold: 60000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 350,
        },
        {
          materialId: "tanned-hide-square",
          quantity: 35,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Elite_Woven_armor",
  },
  {
    id: "monk-elite-judge-armor",
    name: "Elite Judge Armor",
    professionId: "monk",
    campaignId: "prophecies",
    craftingLocation: {
      name: "The Granite Citadel",
      campaignId: "prophecies",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/monk/prophecies/Monk_Elite_Judge_armor_m.webp",
      female: "/images/armors/monk/prophecies/Monk_Elite_Judge_armor_f.webp",
    },
    cost: {
      gold: 60000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 350,
        },
        {
          materialId: "deldrimor-steel-ingot",
          quantity: 35,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Elite_Judge_armor",
  },
  {
    id: "monk-elite-saintly-armor",
    name: "Elite Saintly Armor",
    professionId: "monk",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Marhan's Grotto",
      campaignId: "prophecies",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/monk/prophecies/Monk_Elite_Saintly_armor_m.webp",
      female: "/images/armors/monk/prophecies/Monk_Elite_Saintly_armor_f.webp",
    },
    cost: {
      gold: 60000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 350,
        },
        {
          materialId: "bolt-of-damask",
          quantity: 35,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Elite_Saintly_armor",
  },
  {
    id: "monk-flowing-armor",
    name: "Flowing Armor",
    professionId: "monk",
    campaignId: "prophecies",
    craftingLocation: {
      name: "The Granite Citadel",
      campaignId: "prophecies",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/monk/prophecies/Monk_Flowing_armor_m.webp",
      female: "/images/armors/monk/prophecies/Monk_Flowing_armor_f.webp",
    },
    cost: {
      gold: 32000,
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
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Flowing_armor",
  },
  {
    id: "monk-Labyrinthine-armor",
    name: "Labyrinthine Armor",
    professionId: "monk",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Marhan's Grotto",
      campaignId: "prophecies",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/monk/prophecies/Monk_Labyrinthine_armor_m.webp",
      female: "/images/armors/monk/prophecies/Monk_Labyrinthine_armor_f.webp",
    },
    cost: {
      gold: 40000,
      materials: [
        {
          materialId: "roll-of-vellum",
          quantity: 400,
        },
        {
          materialId: "feather",
          quantity: 40,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Labyrinthine_armor",
  },

  {
    id: "monk-shing-jea-armor",
    name: "Shing Jea Armor",
    professionId: "monk",
    campaignId: "factions",
    craftingLocation: {
      name: "Kaineng Center",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/monk/factions/Monk_Shing_Jea_armor_m.webp",
      female: "/images/armors/monk/factions/Monk_Shing_Jea_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "bolt-of-cloth",
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
          quantity: 4,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Shing_Jea_armor",
  },
  {
    id: "monk-canthan-armor",
    name: "Canthan Armor",
    professionId: "monk",
    campaignId: "factions",
    craftingLocation: {
      name: "Kaineng Center",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/monk/factions/Monk_Canthan_armor_m.webp",
      female: "/images/armors/monk/factions/Monk_Canthan_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 175,
        },
        {
          materialId: "bolt-of-damask",
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
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Canthan_armor",
  },
  {
    id: "monk-kurzick-armor",
    name: "Kurzick Armor",
    professionId: "monk",
    campaignId: "factions",
    craftingLocation: {
      name: "House zu Heltzer",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/monk/factions/Monk_Kurzick_armor_m.webp",
      female: "/images/armors/monk/factions/Monk_Kurzick_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 175,
        },
        {
          materialId: "bolt-of-damask",
          quantity: 14,
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
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Kurzick_armor",
  },
  {
    id: "monk-luxon-armor",
    name: "Luxon Armor",
    professionId: "monk",
    campaignId: "factions",
    craftingLocation: {
      name: "Cavalon",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/monk/factions/Monk_Luxon_armor_m.webp",
      female: "/images/armors/monk/factions/Monk_Luxon_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 175,
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
          quantity: 32,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Luxon_armor",
  },
  {
    id: "monk-elite-canthan-armor",
    name: "Elite Canthan Armor",
    professionId: "monk",
    campaignId: "factions",
    craftingLocation: {
      name: "Divine Path",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/monk/factions/Monk_Elite_Canthan_armor_m.webp",
      female: "/images/armors/monk/factions/Monk_Elite_Canthan_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 350,
        },
        {
          materialId: "bolt-of-damask",
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
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Elite_Canthan_armor",
  },
  {
    id: "monk-elite-kurzick-armor",
    name: "Elite Kurzick Armor",
    professionId: "monk",
    campaignId: "factions",
    craftingLocation: {
      name: "Vasburg Armory",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/monk/factions/Monk_Elite_Kurzick_armor_m.webp",
      female: "/images/armors/monk/factions/Monk_Elite_Kurzick_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 350,
        },
        {
          materialId: "bolt-of-damask",
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
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Elite_Kurzick_armor",
  },
  {
    id: "monk-elite-luxon-armor",
    name: "Elite Luxon Armor",
    professionId: "monk",
    campaignId: "factions",
    craftingLocation: {
      name: "Leviathan Pits",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/monk/factions/Monk_Elite_Luxon_armor_m.webp",
      female: "/images/armors/monk/factions/Monk_Elite_Luxon_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 350,
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
          quantity: 40,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Elite_Luxon_armor",
  },

  {
    id: "monk-istani-armor",
    name: "Istani Armor",
    professionId: "monk",
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
      male: "/images/armors/monk/nightfall/Monk_Istani_armor_m.webp",
      female: "/images/armors/monk/nightfall/Monk_Istani_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "bolt-of-cloth",
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
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Istani_armor",
  },
  {
    id: "monk-sunspear-armor",
    name: "Sunspear Armor",
    professionId: "monk",
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
      male: "/images/armors/monk/nightfall/Monk_Sunspear_armor_m.webp",
      female: "/images/armors/monk/nightfall/Monk_Sunspear_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 175,
        },
        {
          materialId: "leather-square",
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
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Sunspear_armor",
  },
  {
    id: "monk-elite-sunspear-armor",
    name: "Elite Sunspear Armor",
    professionId: "monk",
    campaignId: "nightfall",
    craftingLocation: {
      name: "Command Post",
      campaignId: "nightfall",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/monk/nightfall/Monk_Elite_Sunspear_armor_m.webp",
      female: "/images/armors/monk/nightfall/Monk_Elite_Sunspear_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 350,
        },
        {
          materialId: "bolt-of-damask",
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
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Elite_Sunspear_armor",
  },
  {
    id: "monk-vabbian-armor",
    name: "Vabbian Armor",
    professionId: "monk",
    campaignId: "nightfall",
    craftingLocation: {
      name: "The Kodash Bazaar",
      campaignId: "nightfall",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/monk/nightfall/Monk_Vabbian_armor_m.webp",
      female: "/images/armors/monk/nightfall/Monk_Vabbian_armor_f.webp",
    },
    cost: {
      gold: 25000,
      materials: [
        {
          materialId: "bolt-of-cloth",
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
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Vabbian_armor",
  },
  {
    id: "monk-ancient-armor",
    name: "Ancient Armor",
    professionId: "monk",
    campaignId: "nightfall",
    craftingLocation: {
      name: "Bone Palace",
      campaignId: "nightfall",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/monk/nightfall/Monk_Ancient_armor_m.webp",
      female: "/images/armors/monk/nightfall/Monk_Ancient_armor_f.webp",
    },
    cost: {
      gold: 50000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 350,
        },
        {
          materialId: "bolt-of-damask",
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
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Ancient_armor",
  },
  {
    id: "monk-primeval-armor",
    name: "Primeval Armor",
    professionId: "monk",
    campaignId: "nightfall",
    craftingLocation: {
      name: "Throne of Secrets",
      campaignId: "nightfall",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/monk/nightfall/Monk_Primeval_armor_m.webp",
      female: "/images/armors/monk/nightfall/Monk_Primeval_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 350,
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
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Primeval_armor",
  },

  {
    id: "monk-norn-armor",
    name: "Norn Armor",
    professionId: "monk",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Gunnar's Hold",
      campaignId: "eye-of-the-north",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/monk/eotn/Monk_Norn_armor_m.webp",
      female: "/images/armors/monk/eotn/Monk_Norn_armor_f.webp",
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
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Norn_armor",
  },
  {
    id: "monk-asuran-armor",
    name: "Asuran Armor",
    professionId: "monk",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Rata Sum",
      campaignId: "eye-of-the-north",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/monk/eotn/Monk_Asuran_armor_m.webp",
      female: "/images/armors/monk/eotn/Monk_Asuran_armor_f.webp",
    },
    cost: {
      gold: 50000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 350,
        },
        {
          materialId: "leather-square",
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
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Asuran_armor",
  },
  {
    id: "monk-monument-armor",
    name: "Monument Armor",
    professionId: "monk",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Eye of the North",
      campaignId: "eye-of-the-north",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/monk/eotn/Monk_Monument_armor_m.webp",
      female: "/images/armors/monk/eotn/Monk_Monument_armor_f.webp",
    },
    cost: {
      gold: 50000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 350,
        },
        {
          materialId: "bolt-of-damask",
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
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Monument_armor",
  },
  {
    id: "monk-deldrimor-armor",
    name: "Deldrimor Armor",
    professionId: "monk",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Central Transfer Chamber",
      campaignId: "eye-of-the-north",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/monk/eotn/Monk_Deldrimor_armor_m.webp",
      female: "/images/armors/monk/eotn/Monk_Deldrimor_armor_f.webp",
    },
    cost: {
      gold: 40000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 350,
        },
        {
          materialId: "bolt-of-damask",
          quantity: 35,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Deldrimor_armor",
  },

  {
    id: "monk-obsidian-armor",
    name: "Obsidian Armor",
    professionId: "monk",
    campaignId: "core",
    craftingLocation: {
      name: "Fissure of Woe",
      campaignId: "core",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/monk/core/Monk_Obsidian_armor_m.webp",
      female: "/images/armors/monk/core/Monk_Obsidian_armor_f.webp",
    },
    cost: {
      gold: 60000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 350,
        },
        {
          materialId: "tanned-hide-square",
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
    wikiLink: "https://wiki.guildwars.com/wiki/Monk_Obsidian_armor",
  },
];

export default monkArmors;
