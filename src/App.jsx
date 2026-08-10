import { useState } from "react";

import CampaignSelector from "./components/CampaignSelector/CampaignSelector";
import ProfessionSelector from "./components/ProfessionSelector/ProfessionSelector";
import campaigns from "./data/campaigns";
import professions from "./data/professions";

function App() {
  const [selectedProfession, setSelectedProfession] = useState(null);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  function handleProfessionSelect(profession) {
    setSelectedProfession(profession);
    setSelectedCampaign(null);
  }

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
          onSelectCampaign={setSelectedCampaign}
        />
      )}

      {selectedCampaign && <p>Selected campaign: {selectedCampaign.name}</p>}
    </main>
  );
}

export default App;
