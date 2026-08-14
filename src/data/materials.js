const materials = {
  common: [
    {
      id: "iron-ingot",
      name: "Iron Ingot",
      type: "common",
      icon: "/images/materials/common/Iron_Ingot.png",
      wikiUrl: "https://wiki.guildwars.com/wiki/Iron_Ingot",
      acquisitionMethodIds: ["salvage", "material-trader"],
    },
    {
      id: "glittering-dust",
      name: "Pile of Glittering Dust",
      type: "common",
      icon: "/images/materials/common/Pile_of_Glittering_Dust.png",
      wikiUrl: "https://wiki.guildwars.com/wiki/Crafting_material",
      acquisitionMethodIds: ["salvage", "material-trader"],
    },
    {
      id: "wood-plank",
      name: "Wood Plank",
      type: "common",
      icon: "/images/materials/common/Wood_Plank.png",
      wikiUrl: "https://wiki.guildwars.com/wiki/Wood_Plank",
      acquisitionMethodIds: ["salvage", "material-trader"],
    },
  ],

  rare: [
    {
      id: "lump-of-charcoal",
      name: "Lump of Charcoal",
      type: "rare",
      icon: "/images/materials/rare/Lump_of_Charcoal.png",
      wikiUrl: "https://wiki.guildwars.com/wiki/Lump_of_Charcoal",
      acquisitionMethodIds: ["salvage", "material-trader", "artisan"],
    },
    {
      id: "steel-ingot",
      name: "Steel Ingot",
      type: "rare",
      icon: "/images/materials/rare/Steel_Ingot.png",
      wikiUrl: "https://wiki.guildwars.com/wiki/Steel_Ingot",
      acquisitionMethodIds: ["salvage", "material-trader", "artisan"],
    },
  ],
};

export default materials;
