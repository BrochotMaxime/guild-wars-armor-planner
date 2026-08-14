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
      id: "warrior-factions-sample",
      name: "Factions Armor",
      professionId: "warrior",
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
