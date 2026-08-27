const elementalistArmors = [
  {
    id: "elementalist-ascalon-armor",
    name: "Ascalon Armor",
    professionId: "elementalist",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Kaineng Center",
      campaignId: "factions",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/elementalist/prophecies/Elementalist_Ascalon_armor_m.webp",
      female:
        "/images/armors/elementalist/prophecies/Elementalist_Ascalon_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 175,
        },
        {
          materialId: "leather-square",
          quantity: 28,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Elementalist_Ascalon_armor",
  },
  {
    id: "elementalist-krytan-armor",
    name: "Krytan Armor",
    professionId: "elementalist",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Bukdek Byway",
      campaignId: "factions",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/elementalist/prophecies/Elementalist_Krytan_armor_m.webp",
      female:
        "/images/armors/elementalist/prophecies/Elementalist_Krytan_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 175,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 28,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Elementalist_Krytan_armor",
  },
  {
    id: "elementalist-tyrian-armor",
    name: "Tyrian Armor",
    professionId: "elementalist",
    campaignId: "prophecies",
    craftingLocation: [
      {
        name: "Droknar's Forge 	",
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
      male: "/images/armors/elementalist/prophecies/Elementalist_Tyrian_armor_m.webp",
      female:
        "/images/armors/elementalist/prophecies/Elementalist_Tyrian_armor_f.webp",
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
    wikiLink: "https://wiki.guildwars.com/wiki/Elementalist_Tyrian_armor",
  },
  {
    id: "elementalist-flameforged-armor",
    name: "Flameforged Armor",
    professionId: "elementalist",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Droknar's Forge",
      campaignId: "prophecies",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/elementalist/prophecies/Elementalist_Flameforged_armor_m.webp",
      female:
        "/images/armors/elementalist/prophecies/Elementalist_Flameforged_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 175,
        },
        {
          materialId: "scale",
          quantity: 28,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Elementalist_Flameforged_armor",
  },
  {
    id: "elementalist-iceforged-armor",
    name: "Iceforged Armor",
    professionId: "elementalist",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Droknar's Forge",
      campaignId: "prophecies",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/elementalist/prophecies/Elementalist_Iceforged_armor_m.webp",
      female:
        "/images/armors/elementalist/prophecies/Elementalist_Iceforged_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 175,
        },
        {
          materialId: "chitin-fragment",
          quantity: 28,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Elementalist_Iceforged_armor",
  },
  {
    id: "elementalist-stoneforged-armor",
    name: "Stoneforged Armor",
    professionId: "elementalist",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Droknar's Forge",
      campaignId: "prophecies",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/elementalist/prophecies/Elementalist_Stoneforged_armor_m.webp",
      female:
        "/images/armors/elementalist/prophecies/Elementalist_Stoneforged_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 175,
        },
        {
          materialId: "granite-slab",
          quantity: 28,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Elementalist_Stoneforged_armor",
  },
  {
    id: "elementalist-stormforged-armor",
    name: "Stormforged Armor",
    professionId: "elementalist",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Droknar's Forge",
      campaignId: "prophecies",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/elementalist/prophecies/Elementalist_Stormforged_armor_m.webp",
      female:
        "/images/armors/elementalist/prophecies/Elementalist_Stormforged_armor_f.webp",
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
    wikiLink: "https://wiki.guildwars.com/wiki/Elementalist_Stormforged_armor",
  },
  {
    id: "elementalist-elite-flameforged-armor",
    name: "Elite Flameforged Armor",
    professionId: "elementalist",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Granite Citadel",
      campaignId: "prophecies",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/elementalist/prophecies/Elementalist_Elite_Flameforged_armor_m.webp",
      female:
        "/images/armors/elementalist/prophecies/Elementalist_Elite_Flameforged_armor_f.webp",
    },
    cost: {
      gold: 60000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 350,
        },
        {
          materialId: "scale",
          quantity: 35,
        },
      ],
    },
    wikiLink:
      "https://wiki.guildwars.com/wiki/Elementalist_Elite_Flameforged_armor",
  },
  {
    id: "elementalist-elite-iceforged-armor",
    name: "Elite Iceforged Armor",
    professionId: "elementalist",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Granite Citadel",
      campaignId: "prophecies",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/elementalist/prophecies/Elementalist_Elite_Iceforged_armor_m.webp",
      female:
        "/images/armors/elementalist/prophecies/Elementalist_Elite_Iceforged_armor_f.webp",
    },
    cost: {
      gold: 60000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 350,
        },
        {
          materialId: "chitin-fragment",
          quantity: 35,
        },
      ],
    },
    wikiLink:
      "https://wiki.guildwars.com/wiki/Elementalist_Elite_Iceforged_armor",
  },
  {
    id: "elementalist-elite-stoneforged-armor",
    name: "Elite Stoneforged Armor",
    professionId: "elementalist",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Marhan's Grotto",
      campaignId: "prophecies",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/elementalist/prophecies/Elementalist_Elite_Stoneforged_armor_m.webp",
      female:
        "/images/armors/elementalist/prophecies/Elementalist_Elite_Stoneforged_armor_f.webp",
    },
    cost: {
      gold: 60000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 350,
        },
        {
          materialId: "granite-slab",
          quantity: 35,
        },
      ],
    },
    wikiLink:
      "https://wiki.guildwars.com/wiki/Elementalist_Elite_Stoneforged_armor",
  },
  {
    id: "elementalist-elite-stormforged-armor",
    name: "Elite Stormforged Armor",
    professionId: "elementalist",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Marhan's Grotto",
      campaignId: "prophecies",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/elementalist/prophecies/Elementalist_Elite_Stormforged_armor_m.webp",
      female:
        "/images/armors/elementalist/prophecies/Elementalist_Elite_Stormforged_armor_f.webp",
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
    wikiLink:
      "https://wiki.guildwars.com/wiki/Elementalist_Elite_Stormforged_armor",
  },

  {
    id: "elementalist-shing-jea-armor",
    name: "Shing Jea Armor",
    professionId: "elementalist",
    campaignId: "factions",
    craftingLocation: {
      name: "Kaineng Center",
      campaignId: "factions",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/elementalist/factions/Elementalist_Shing_Jea_armor_m.webp",
      female:
        "/images/armors/elementalist/factions/Elementalist_Shing_Jea_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 175,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 28,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Elementalist_Shing_Jea_armor",
  },
  {
    id: "elementalist-canthan-armor",
    name: "Canthan Armor",
    professionId: "elementalist",
    campaignId: "factions",
    craftingLocation: {
      name: "Kaineng Center",
      campaignId: "factions",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/elementalist/factions/Elementalist_Canthan_armor_m.webp",
      female:
        "/images/armors/elementalist/factions/Elementalist_Canthan_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 175,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 28,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Elementalist_Canthan_armor",
  },
  {
    id: "elementalist-kurzick-armor",
    name: "Kurzick Armor",
    professionId: "elementalist",
    campaignId: "factions",
    craftingLocation: {
      name: "House zu Heltzer",
      campaignId: "factions",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/elementalist/factions/Elementalist_Kurzick_armor_m.webp",
      female:
        "/images/armors/elementalist/factions/Elementalist_Kurzick_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 175,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 28,
        },
        {
          materialId: "amber-chunk",
          quantity: 21,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Elementalist_Kurzick_armor",
  },
  {
    id: "elementalist-luxon-armor",
    name: "Luxon Armor",
    professionId: "elementalist",
    campaignId: "factions",
    craftingLocation: {
      name: "Cavalon",
      campaignId: "factions",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/elementalist/factions/Elementalist_Luxon_armor_m.webp",
      female:
        "/images/armors/elementalist/factions/Elementalist_Luxon_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 175,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 28,
        },
        {
          materialId: "jadeite-shard",
          quantity: 21,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Elementalist_Luxon_armor",
  },
  {
    id: "elementalist-elite-canthan-armor",
    name: "Elite Canthan Armor",
    professionId: "elementalist",
    campaignId: "factions",
    craftingLocation: {
      name: "Divine Path",
      campaignId: "factions",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/elementalist/factions/Elementalist_Elite_Canthan_armor_m.webp",
      female:
        "/images/armors/elementalist/factions/Elementalist_Elite_Canthan_armor_f.webp",
    },
    cost: {
      gold: 60000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 350,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 35,
        },
      ],
    },
    wikiLink:
      "https://wiki.guildwars.com/wiki/Elementalist_Elite_Canthan_armor",
  },
  {
    id: "elementalist-elite-kurzick-armor",
    name: "Elite Kurzick Armor",
    professionId: "elementalist",
    campaignId: "factions",
    craftingLocation: {
      name: "Vasburg Armory",
      campaignId: "factions",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/elementalist/factions/Elementalist_Elite_Kurzick_armor_m.webp",
      female:
        "/images/armors/elementalist/factions/Elementalist_Elite_Kurzick_armor_f.webp",
    },
    cost: {
      gold: 60000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 350,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 35,
        },
        {
          materialId: "amber-chunk",
          quantity: 70,
        },
      ],
    },
    wikiLink:
      "https://wiki.guildwars.com/wiki/Elementalist_Elite_Kurzick_armor",
  },
  {
    id: "elementalist-elite-luxon-armor",
    name: "Elite Luxon Armor",
    professionId: "elementalist",
    campaignId: "factions",
    craftingLocation: {
      name: "Leviathan Pits",
      campaignId: "factions",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/elementalist/factions/Elementalist_Elite_Luxon_armor_m.webp",
      female:
        "/images/armors/elementalist/factions/Elementalist_Elite_Luxon_armor_f.webp",
    },
    cost: {
      gold: 60000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 350,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 35,
        },
        {
          materialId: "jadeite-shard",
          quantity: 70,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Elementalist_Elite_Luxon_armor",
  },

  {
    id: "elementalist-istani-armor",
    name: "Istani Armor",
    professionId: "elementalist",
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
      male: "/images/armors/elementalist/nightfall/Elementalist_Istani_armor_m.webp",
      female:
        "/images/armors/elementalist/nightfall/Elementalist_Istani_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 175,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 28,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Elementalist_Istani_armor",
  },
  {
    id: "elementalist-sunspear-armor",
    name: "Sunspear Armor",
    professionId: "elementalist",
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
      male: "/images/armors/elementalist/nightfall/Elementalist_Sunspear_armor_m.webp",
      female:
        "/images/armors/elementalist/nightfall/Elementalist_Sunspear_armor_f.webp",
    },
    cost: {
      gold: 4000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 175,
        },
        {
          materialId: "leather-square",
          quantity: 28,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Elementalist_Sunspear_armor",
  },
  {
    id: "elementalist-elite-sunspear-armor",
    name: "Elite Sunspear Armor",
    professionId: "elementalist",
    campaignId: "nightfall",
    craftingLocation: {
      name: "Command Post",
      campaignId: "nightfall",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/elementalist/nightfall/Elementalist_Elite_Sunspear_armor_m.webp",
      female:
        "/images/armors/elementalist/nightfall/Elementalist_Elite_Sunspear_armor_f.webp",
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
    wikiLink:
      "https://wiki.guildwars.com/wiki/Elementalist_Elite_Sunspear_armor",
  },
  {
    id: "elementalist-vabbian-armor",
    name: "Vabbian Armor",
    professionId: "elementalist",
    campaignId: "nightfall",
    craftingLocation: {
      name: "The Kodash Bazaar",
      campaignId: "nightfall",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/elementalist/nightfall/Elementalist_Vabbian_armor_m.webp",
      female:
        "/images/armors/elementalist/nightfall/Elementalist_Vabbian_armor_f.webp",
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
    wikiLink: "https://wiki.guildwars.com/wiki/Elementalist_Vabbian_armor",
  },
  {
    id: "elementalist-ancient-armor",
    name: "Ancient Armor",
    professionId: "elementalist",
    campaignId: "nightfall",
    craftingLocation: {
      name: "Bone Palace",
      campaignId: "nightfall",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/elementalist/nightfall/Elementalist_Ancient_armor_m.webp",
      female:
        "/images/armors/elementalist/nightfall/Elementalist_Ancient_armor_f.webp",
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
    wikiLink: "https://wiki.guildwars.com/wiki/Elementalist_Ancient_armor",
  },
  {
    id: "elementalist-primeval-armor",
    name: "Primeval Armor",
    professionId: "elementalist",
    campaignId: "nightfall",
    craftingLocation: {
      name: "Throne of Secrets",
      campaignId: "nightfall",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/elementalist/nightfall/Elementalist_Primeval_armor_m.webp",
      female:
        "/images/armors/elementalist/nightfall/Elementalist_Primeval_armor_f.webp",
    },
    cost: {
      gold: 60000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 350,
        },
        {
          materialId: "wood-plank",
          quantity: 175,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Elementalist_Primeval_armor",
  },

  {
    id: "elementalist-norn-armor",
    name: "Norn Armor",
    professionId: "elementalist",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Gunnar's Hold",
      campaignId: "eye-of-the-north",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/elementalist/eotn/Elementalist_Norn_armor_m.webp",
      female: "/images/armors/elementalist/eotn/Elementalist_Norn_armor_f.webp",
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
    wikiLink: "https://wiki.guildwars.com/wiki/Elementalist_Norn_armor",
  },
  {
    id: "elementalist-asuran-armor",
    name: "Asuran Armor",
    professionId: "elementalist",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Rata Sum",
      campaignId: "eye-of-the-north",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/elementalist/eotn/Elementalist_Asuran_armor_m.webp",
      female:
        "/images/armors/elementalist/eotn/Elementalist_Asuran_armor_f.webp",
    },
    cost: {
      gold: 40000,
      materials: [
        {
          materialId: "tanned-hide-square",
          quantity: 350,
        },
        {
          materialId: "steel-ingot",
          quantity: 35,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Elementalist_Asuran_armor",
  },
  {
    id: "elementalist-monument-armor",
    name: "Monument Armor",
    professionId: "elementalist",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Eye of the North",
      campaignId: "eye-of-the-north",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/elementalist/eotn/Elementalist_Monument_armor_m.webp",
      female:
        "/images/armors/elementalist/eotn/Elementalist_Monument_armor_f.webp",
    },
    cost: {
      gold: 40000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 350,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 35,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Elementalist_Monument_armor",
  },
  {
    id: "elementalist-deldrimor-armor",
    name: "Deldrimor Armor",
    professionId: "elementalist",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Central Transfer Chamber",
      campaignId: "eye-of-the-north",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/elementalist/eotn/Elementalist_Deldrimor_armor_m.webp",
      female:
        "/images/armors/elementalist/eotn/Elementalist_Deldrimor_armor_f.webp",
    },
    cost: {
      gold: 40000,
      materials: [
        {
          materialId: "bolt-of-cloth",
          quantity: 350,
        },
        {
          materialId: "bolt-of-silk",
          quantity: 35,
        },
      ],
    },
    wikiLink: "https://wiki.guildwars.com/wiki/Elementalist_Deldrimor_armor",
  },

  {
    id: "elementalist-obsidian-armor",
    name: "Obsidian Armor",
    professionId: "elementalist",
    campaignId: "core",
    craftingLocation: {
      name: "Fissure of Woe",
      campaignId: "core",
    },
    pieces: ["chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/elementalist/core/Elementalist_Obsidian_armor_m.webp",
      female:
        "/images/armors/elementalist/core/Elementalist_Obsidian_armor_f.webp",
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
    wikiLink: "https://wiki.guildwars.com/wiki/Elementalist_Obsidian_armor",
  },
];

export default elementalistArmors;
