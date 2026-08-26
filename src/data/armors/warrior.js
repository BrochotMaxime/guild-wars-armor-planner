const warriorArmors = [
  {
    id: "warrior-ascalon-armor",
    name: "Ascalon Armor",
    professionId: "warrior",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Kaineng Center",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/warrior/prophecies/Warrior_Ascalon_armor_m.webp",
      female: "/images/armors/warrior/prophecies/Warrior_Ascalon_armor_f.webp",
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
  },
  {
    id: "warrior-krytan-armor",
    name: "Krytan Armor",
    professionId: "warrior",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Bukdek Byway",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/warrior/prophecies/Warrior_Krytan_armor_m.webp",
      female: "/images/armors/warrior/prophecies/Warrior_Krytan_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 200,
        },
        {
          materialId: "steel-ingot",
          quantity: 32,
        },
      ],
    },
  },
  {
    id: "warrior-tyrian-armor",
    name: "Tyrian Armor",
    professionId: "warrior",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Droknar's Forge",
      campaignId: "prophecies",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/warrior/prophecies/Warrior_Tyrian_armor_m.webp",
      female: "/images/armors/warrior/prophecies/Warrior_Tyrian_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 200,
        },
        {
          materialId: "steel-ingot",
          quantity: 32,
        },
      ],
    },
  },
  {
    id: "warrior-charr-hide-armor",
    name: "Charr Hide Armor",
    professionId: "warrior",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Droknar's Forge",
      campaignId: "prophecies",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/warrior/prophecies/Warrior_Charr_Hide_armor_m.webp",
      female:
        "/images/armors/warrior/prophecies/Warrior_Charr_Hide_armor_f.webp",
    },
    cost: {
      gold: 25000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 200,
        },
        {
          materialId: "fur-square",
          quantity: 32,
        },
      ],
    },
  },
  {
    id: "warrior-gladiator-armor",
    name: "Gladiator Armor",
    professionId: "warrior",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Droknar's Forge",
      campaignId: "prophecies",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/warrior/prophecies/Warrior_Gladiator_armor_m.webp",
      female:
        "/images/armors/warrior/prophecies/Warrior_Gladiator_armor_f.webp",
    },
    cost: {
      gold: 25000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 200,
        },
        {
          materialId: "tanned-hide-square",
          quantity: 128,
        },
      ],
    },
  },
  {
    id: "warrior-wyvern-armor",
    name: "Wyvern Armor",
    professionId: "warrior",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Droknar's Forge",
      campaignId: "prophecies",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/warrior/prophecies/Warrior_Wyvern_armor_m.webp",
      female: "/images/armors/warrior/prophecies/Warrior_Wyvern_armor_f.webp",
    },
    cost: {
      gold: 25000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 200,
        },
        {
          materialId: "scale",
          quantity: 32,
        },
      ],
    },
  },
  {
    id: "warrior-platemail-armor",
    name: "Platemail Armor",
    professionId: "warrior",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Droknar's Forge",
      campaignId: "prophecies",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/warrior/prophecies/Warrior_Platemail_armor_m.webp",
      female:
        "/images/armors/warrior/prophecies/Warrior_Platemail_armor_f.webp",
    },
    cost: {
      gold: 25000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 200,
        },
        {
          materialId: "steel-ingot",
          quantity: 32,
        },
      ],
    },
  },
  {
    id: "warrior-templar-armor",
    name: "Templar Armor",
    professionId: "warrior",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Droknar's Forge",
      campaignId: "prophecies",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/warrior/prophecies/Warrior_Templar_armor_m.webp",
      female: "/images/armors/warrior/prophecies/Warrior_Templar_armor_f.webp",
    },
    cost: {
      gold: 25000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 200,
        },
        {
          materialId: "leather-square",
          quantity: 28,
        },
        {
          materialId: "steel-ingot",
          quantity: 4,
        },
      ],
    },
  },
  {
    id: "warrior-elite-charr-hide-armor",
    name: "Elite Charr Hide Armor",
    professionId: "warrior",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Marhan's Grotto",
      campaignId: "prophecies",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/warrior/prophecies/Warrior_Elite_Charr_Hide_armor_m.webp",
      female:
        "/images/armors/warrior/prophecies/Warrior_Elite_Charr_Hide_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 400,
        },
        {
          materialId: "fur-square",
          quantity: 40,
        },
      ],
    },
  },
  {
    id: "warrior-elite-gladiator-armor",
    name: "Elite Gladiator Armor",
    professionId: "warrior",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Marhan's Grotto",
      campaignId: "prophecies",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/warrior/prophecies/Warrior_Elite_Gladiator_armor_m.webp",
      female:
        "/images/armors/warrior/prophecies/Warrior_Elite_Gladiator_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 400,
        },
        {
          materialId: "tanned-hide-square",
          quantity: 128,
        },
      ],
    },
  },
  {
    id: "warrior-elite-dragon-armor",
    name: "Elite Dragon Armor",
    professionId: "warrior",
    campaignId: "prophecies",
    craftingLocation: {
      name: "The Granite Citadel",
      campaignId: "prophecies",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/warrior/prophecies/Warrior_Elite_Dragon_armor_m.webp",
      female:
        "/images/armors/warrior/prophecies/Warrior_Elite_Dragon_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 400,
        },
        {
          materialId: "scale",
          quantity: 40,
        },
      ],
    },
  },
  {
    id: "warrior-elite-platemail-armor",
    name: "Elite Platemail Armor",
    professionId: "warrior",
    campaignId: "prophecies",
    craftingLocation: {
      name: "The Granite Citadel",
      campaignId: "prophecies",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/warrior/prophecies/Warrior_Elite_Platemail_armor_m.webp",
      female:
        "/images/armors/warrior/prophecies/Warrior_Elite_Platemail_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 400,
        },
        {
          materialId: "steel-ingot",
          quantity: 40,
        },
      ],
    },
  },
  {
    id: "warrior-elite-templar-armor",
    name: "Elite Templar Armor",
    professionId: "warrior",
    campaignId: "prophecies",
    craftingLocation: {
      name: "Marhan's Grotto",
      campaignId: "prophecies",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/warrior/prophecies/Warrior_Elite_Templar_armor_m.webp",
      female:
        "/images/armors/warrior/prophecies/Warrior_Elite_Templar_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 400,
        },
        {
          materialId: "deldrimor-steel-ingot",
          quantity: 5,
        },
        {
          materialId: "elonian-leather-square",
          quantity: 35,
        },
      ],
    },
  },

  {
    id: "warrior-shing-jea-armor",
    name: "Shing Jea Armor",
    professionId: "warrior",
    campaignId: "factions",
    craftingLocation: {
      name: "Kaineng Center",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/warrior/factions/Warrior_Shing_Jea_armor_m.webp",
      female: "/images/armors/warrior/factions/Warrior_Shing_Jea_armor_f.webp",
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
  },
  {
    id: "warrior-canthan-armor",
    name: "Canthan Armor",
    professionId: "warrior",
    campaignId: "factions",
    craftingLocation: {
      name: "Kaineng Center",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/warrior/factions/Warrior_Canthan_armor_m.webp",
      female: "/images/armors/warrior/factions/Warrior_Canthan_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 200,
        },
        {
          materialId: "steel-ingot",
          quantity: 32,
        },
      ],
    },
  },
  {
    id: "warrior-kurzick-armor",
    name: "Kurzick Armor",
    professionId: "warrior",
    campaignId: "factions",
    craftingLocation: {
      name: "Kaineng Center",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/warrior/factions/Warrior_Kurzick_armor_m.webp",
      female: "/images/armors/warrior/factions/Warrior_Kurzick_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "iron-ingot",
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
  },
  {
    id: "warrior-luxon-armor",
    name: "Luxon Armor",
    professionId: "warrior",
    campaignId: "factions",
    craftingLocation: {
      name: "Kaineng Center",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: false,
    images: {
      male: "/images/armors/warrior/factions/Warrior_Luxon_armor_m.webp",
      female: "/images/armors/warrior/factions/Warrior_Luxon_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 200,
        },
        {
          materialId: "chitin-fragment",
          quantity: 200,
        },
        {
          materialId: "jadeite-chard",
          quantity: 24,
        },
      ],
    },
  },
  {
    id: "warrior-elite-canthan-armor",
    name: "Elite Canthan Armor",
    professionId: "warrior",
    campaignId: "factions",
    craftingLocation: {
      name: "Divine Path",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/warrior/factions/Warrior_Elite_Canthan_armor_m.webp",
      female:
        "/images/armors/warrior/factions/Warrior_Elite_Canthan_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 400,
        },
        {
          materialId: "steel-ingot",
          quantity: 40,
        },
      ],
    },
  },
  {
    id: "warrior-elite-kurzick-armor",
    name: "Elite Kurzick Armor",
    professionId: "warrior",
    campaignId: "factions",
    craftingLocation: {
      name: "Vasburg Armory",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/warrior/factions/Warrior_Elite_Kurzick_armor_m.webp",
      female:
        "/images/armors/warrior/factions/Warrior_Elite_Kurzick_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "iron-ingot",
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
  },
  {
    id: "warrior-elite-luxon-armor",
    name: "Elite Luxon Armor",
    professionId: "warrior",
    campaignId: "factions",
    craftingLocation: {
      name: "Leviathan Pits",
      campaignId: "factions",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/warrior/factions/Warrior_Elite_Luxon_armor_m.webp",
      female:
        "/images/armors/warrior/factions/Warrior_Elite_Luxon_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "scale",
          quantity: 400,
        },
        {
          materialId: "chitin-fragment",
          quantity: 400,
        },
        {
          materialId: "jadeite-chard",
          quantity: 80,
        },
      ],
    },
  },

  {
    id: "warrior-istani-armor",
    name: "Istani Armor",
    professionId: "warrior",
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
      male: "/images/armors/warrior/nightfall/Warrior_Istani_armor_m.webp",
      female: "/images/armors/warrior/nightfall/Warrior_Istani_armor_f.webp",
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
  },
  {
    id: "warrior-sunspear-armor",
    name: "Sunspear Armor",
    professionId: "warrior",
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
      male: "/images/armors/warrior/nightfall/Warrior_Sunspear_armor_m.webp",
      female: "/images/armors/warrior/nightfall/Warrior_Sunspear_armor_f.webp",
    },
    cost: {
      gold: 5000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 200,
        },
        {
          materialId: "steel-ingot",
          quantity: 32,
        },
      ],
    },
  },
  {
    id: "warrior-elite-sunspear-armor",
    name: "Elite Sunspear Armor",
    professionId: "warrior",
    campaignId: "nightfall",
    craftingLocation: {
      name: "Command Post",
      campaignId: "nightfall",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/warrior/nightfall/Warrior_Elite_Sunspear_armor_m.webp",
      female:
        "/images/armors/warrior/nightfall/Warrior_Elite_Sunspear_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 400,
        },
        {
          materialId: "steel-ingot",
          quantity: 40,
        },
      ],
    },
  },
  {
    id: "warrior-vabbian-armor",
    name: "Vabbian Armor",
    professionId: "warrior",
    campaignId: "nightfall",
    craftingLocation: {
      name: "The Kodash Bazaar",
      campaignId: "nightfall",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/warrior/nightfall/Warrior_Vabbian_armor_m.webp",
      female: "/images/armors/warrior/nightfall/Warrior_Vabbian_armor_f.webp",
    },
    cost: {
      gold: 25000,
      materials: [
        {
          materialId: "iron ingot",
          quantity: 200,
        },
        {
          materialId: "bolt-of-linen",
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
  },
  {
    id: "warrior-ancient-armor",
    name: "Ancient Armor",
    professionId: "warrior",
    campaignId: "nightfall",
    craftingLocation: {
      name: "Bone Palace",
      campaignId: "nightfall",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/warrior/nightfall/Warrior_Ancient_armor_m.webp",
      female: "/images/armors/warrior/nightfall/Warrior_Ancient_armor_f.webp",
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
  },
  {
    id: "warrior-primeval-armor",
    name: "Primeval Armor",
    professionId: "warrior",
    campaignId: "nightfall",
    craftingLocation: {
      name: "Throne of Secrets",
      campaignId: "nightfall",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/warrior/nightfall/Warrior_Primeval_armor_m.webp",
      female: "/images/armors/warrior/nightfall/Warrior_Primeval_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "bone",
          quantity: 400,
        },
        {
          materialId: "steel-ingot",
          quantity: 40,
        },
      ],
    },
  },

  {
    id: "warrior-norn-armor",
    name: "Norn Armor",
    professionId: "warrior",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Gunnar's Hold",
      campaignId: "eye-of-the-north",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/warrior/eotn/Warrior_Norn_armor_m.webp",
      female: "/images/armors/warrior/eotn/Warrior_Norn_armor_f.webp",
    },
    cost: {
      gold: 50000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 400,
        },
        {
          materialId: "monstruous-fang",
          quantity: 24,
        },
        {
          materialId: "monstruous-claw",
          quantity: 16,
        },
      ],
    },
  },
  {
    id: "warrior-monument-armor",
    name: "Monument Armor",
    professionId: "warrior",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Eye of the North",
      campaignId: "eye-of-the-north",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/warrior/eotn/Warrior_Monument_armor_m.webp",
      female: "/images/armors/warrior/eotn/Warrior_Monument_armor_f.webp",
    },
    cost: {
      gold: 50000,
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
  },
  {
    id: "warrior-asuran-armor",
    name: "Asuran Armor",
    professionId: "warrior",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Rata Sum",
      campaignId: "eye-of-the-north",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/warrior/eotn/Warrior_Asuran_armor_m.webp",
      female: "/images/armors/warrior/eotn/Warrior_Asuran_armor_f.webp",
    },
    cost: {
      gold: 50000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 400,
        },
        {
          materialId: "steel-ingot",
          quantity: 40,
        },
      ],
    },
  },
  {
    id: "warrior-silver-eagle-armor",
    name: "Silver Eagle Armor",
    professionId: "warrior",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Central Transfer Chamber",
      campaignId: "eye-of-the-north",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/warrior/eotn/Warrior_Silver_Eagle_armor_m.webp",
      female: "/images/armors/warrior/eotn/Warrior_Silver_Eagle_armor_f.webp",
    },
    cost: {
      gold: 50000,
      materials: [
        {
          materialId: "feather",
          quantity: 400,
        },
        {
          materialId: "deldrimor-steel-ingot",
          quantity: 40,
        },
      ],
    },
  },
  {
    id: "warrior-deldrimor-armor",
    name: "Deldrimor Armor",
    professionId: "warrior",
    campaignId: "eye-of-the-north",
    craftingLocation: {
      name: "Central Transfer Chamber",
      campaignId: "eye-of-the-north",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/warrior/eotn/Warrior_Deldrimor_armor_m.webp",
      female: "/images/armors/warrior/eotn/Warrior_Deldrimor_armor_f.webp",
    },
    cost: {
      gold: 40000,
      materials: [
        {
          materialId: "iron-ingot",
          quantity: 350,
        },
        {
          materialId: "deldrimor-steel-ingot",
          quantity: 35,
        },
      ],
    },
  },

  {
    id: "warrior-obsidian-armor",
    name: "Obsidian Armor",
    professionId: "warrior",
    campaignId: "core",
    craftingLocation: {
      name: "Fissure of Woe",
      campaignId: "core",
    },
    pieces: ["head", "chest", "hands", "legs", "feet"],
    prestige: true,
    images: {
      male: "/images/armors/warrior/core/Warrior_Obsidian_armor_m.webp",
      female: "/images/armors/warrior/core/Warrior_Obsidian_armor_f.webp",
    },
    cost: {
      gold: 75000,
      materials: [
        {
          materialId: "iron-ingot",
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
  },
];

export default warriorArmors;
