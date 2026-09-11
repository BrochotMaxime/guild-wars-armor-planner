import { useState } from "react";

const armorPreviews = [
  {
    gender: "male",
    label: "Male",
  },
  {
    gender: "female",
    label: "Female",
  },
];

function ArmorPreviewGallery({ armor }) {
  const [selectedGender, setSelectedGender] = useState("male");

  return (
    <div className="armor-preview-gallery">
      <div
        className="armor-preview-gallery__controls"
        aria-label="Choose armor preview"
      >
        {armorPreviews.map(({ gender, label }) => {
          const isSelected = selectedGender === gender;

          return (
            <button
              key={gender}
              type="button"
              className={`armor-preview-gallery__control ${
                isSelected ? "armor-preview-gallery__control--selected" : ""
              }`}
              aria-pressed={isSelected}
              onClick={() => setSelectedGender(gender)}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="armor-previews">
        {armorPreviews.map(({ gender, label }) => {
          const image = armor.images[gender];
          const isSelected = selectedGender === gender;

          return (
            <figure
              key={gender}
              className={`armor-preview ${
                isSelected ? "armor-preview--selected" : ""
              }`}
            >
              <div className="armor-preview__image">
                {image ? (
                  <img
                    src={image}
                    alt={`${armor.name} ${gender} armor`}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <p>Image not available yet.</p>
                )}
              </div>

              <figcaption>{label}</figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}

export default ArmorPreviewGallery;
