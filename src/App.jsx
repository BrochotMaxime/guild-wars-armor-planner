import { useState } from "react";

import ProfessionSelector from "./components/ProfessionSelector/ProfessionSelector";
import professions from "./data/professions";

function App() {
  const [selectedProfession, setSelectedProfession] = useState(null);

  return (
    <main>
      <h1>Guild Wars Armor Planner</h1>

      <ProfessionSelector
        professions={professions}
        selectedProfession={selectedProfession}
        onSelectProfession={setSelectedProfession}
      />

      {selectedProfession && (
        <p>Selected profession: {selectedProfession.name}</p>
      )}
    </main>
  );
}

export default App;
