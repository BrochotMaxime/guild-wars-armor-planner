import { useState } from "react";

import ArmorDetails from "./components/ArmorDetails/ArmorDetails";
import ArmorList from "./components/ArmorList/ArmorList";
import CampaignSelector from "./components/CampaignSelector/CampaignSelector";
import ProfessionSelector from "./components/ProfessionSelector/ProfessionSelector";
import armors from "./data/armors";
import campaigns from "./data/campaigns";
import professions from "./data/professions";

function App() {
  const [selectedProfession, setSelectedProfession] = useState(null);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [selectedArmor, setSelectedArmor] = useState(null);

  function handleProfessionSelect(profession) {
    setSelectedProfession(profession);
    setSelectedCampaign(null);
    setSelectedArmor(null);
  }

  function handleCampaignSelect(campaign) {
    setSelectedCampaign(campaign);
    setSelectedArmor(null);
  }

  const filteredArmors = armors.filter(
    (armor) =>
      armor.professionId === selectedProfession?.id &&
      armor.campaignId === selectedCampaign?.id,
  );

  return (
    <main>
      <h1>Guild Wars Armor Planner</h1>

      <ProfessionSelector
        professions={professions}
        selectedProfession={selectedProfession}
        onSelectProfession={handleProfessionSelect}
      />

      {selectedProfession && (
        <CampaignSelector
          campaigns={campaigns}
          selectedCampaign={selectedCampaign}
          onSelectCampaign={handleCampaignSelect}
        />
      )}

      {selectedCampaign && !selectedArmor && (
        <ArmorList armors={filteredArmors} onSelectArmor={setSelectedArmor} />
      )}

      {selectedArmor && <ArmorDetails armor={selectedArmor} />}
    </main>
  );
}

export default App;
