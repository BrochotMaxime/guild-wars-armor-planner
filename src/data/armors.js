const armors = {
  warrior: [
    {
      id: "warrior-tyrian-armor",
      name: "Tyrian Armor",
      professionId: "warrior",
      campaignId: "prophecies",
      location: "Droknar's Forge",
      images: {
        male: "/images/armors/warrior/Warrior_Tyrian_armor_m.jpg",
        female: "/images/armors/warrior/Warrior_Tyrian_armor_f.jpg",
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
      location: "Droknar's Forge",
      images: {
        male: "/images/armors/warrior/Warrior_Charr_Hide_armor_m.jpg",
        female: "/images/armors/warrior/Warrior_Charr_Hide_armor_f.jpg",
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
      location: "Droknar's Forge",
      images: {
        male: "/images/armors/warrior/Warrior_Gladiator_armor_m.jpg",
        female: "/images/armors/warrior/Warrior_Gladiator_armor_f.jpg",
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
      location: "Droknar's Forge",
      images: {
        male: "/images/armors/warrior/Warrior_Wyvern_armor_m.jpg",
        female: "/images/armors/warrior/Warrior_Wyvern_armor_f.jpg",
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
      location: "Droknar's Forge",
      images: {
        male: "/images/armors/warrior/Warrior_Platemail_armor_m.jpg",
        female: "/images/armors/warrior/Warrior_Platemail_armor_f.jpg",
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
      location: "Droknar's Forge",
      images: {
        male: "/images/armors/warrior/Warrior_Templar_armor_m.jpg",
        female: "/images/armors/warrior/Warrior_Templar_armor_f.jpg",
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
      location: "Marhan's Grotto",
      images: {
        male: "/images/armors/warrior/Warrior_Elite_Charr_Hide_armor_m.jpg",
        female: "/images/armors/warrior/Warrior_Elite_Charr_Hide_armor_f.jpg",
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
      location: "Marhan's Grotto",
      images: {
        male: "/images/armors/warrior/Warrior_Elite_Gladiator_armor_m.jpg",
        female: "/images/armors/warrior/Warrior_Elite_Gladiator_armor_f.jpg",
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
      location: "The Granite Citadel",
      images: {
        male: "/images/armors/warrior/Warrior_Elite_Dragon_armor_m.jpg",
        female: "/images/armors/warrior/Warrior_Elite_Dragon_armor_f.jpg",
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
      location: "The Granite Citadel",
      images: {
        male: "/images/armors/warrior/Warrior_Elite_Platemail_armor_m.jpg",
        female: "/images/armors/warrior/Warrior_Elite_Platemail_armor_f.jpg",
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
      location: "Marhan's Grotto",
      images: {
        male: "/images/armors/warrior/Warrior_Elite_Templar_armor_m.jpg",
        female: "/images/armors/warrior/Warrior_Elite_Templar_armor_f.jpg",
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
  ],

  ranger: [
    {
      id: "ranger-factions-sample",
      name: "Factions Armor",
      professionId: "ranger",
      campaignId: "factions",
      location: "To be defined",
      images: {
        male: null,
        female: null,
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
  ],
};

export default armors;
