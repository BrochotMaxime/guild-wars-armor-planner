import ArmorRequirements from "../ArmorRequirements/ArmorRequirements";

function ArmorDetails({ armor, materials }) {
  return (
    <section>
      <h2>{armor.name}</h2>

      <div>
        <div>
          <h3>Male</h3>
          {armor.images.male ? (
            <img src={armor.images.male} alt={`${armor.name} male armor`} />
          ) : (
            <p>Image not available yet.</p>
          )}
        </div>

        <div>
          <h3>Female</h3>
          {armor.images.female ? (
            <img src={armor.images.female} alt={`${armor.name} female armor`} />
          ) : (
            <p>Image not available yet.</p>
          )}
        </div>
      </div>

      <p>Location: {armor.location}</p>

      <ArmorRequirements armor={armor} materials={materials} />
    </section>
  );
}

export default ArmorDetails;
