import { useEffect, useRef } from "react";

import MaterialCraftingRecipe from "./MaterialCraftingRecipe";

function MaterialDetails({
  material,
  materials,
  acquisitionMethods,
  craftingRecipes,
  onClose,
}) {
  const dialogRef = useRef(null);

  const craftingRecipe = craftingRecipes.find(
    (recipe) => recipe.outputMaterialId === material.id,
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;

    if (dialog && !dialog.open) {
      dialog.showModal();
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [material]);

  function getAcquisitionMethodById(methodId) {
    return acquisitionMethods.find((method) => method.id === methodId);
  }

  function handleClose() {
    if (dialogRef.current?.open) {
      dialogRef.current.close();
    }

    onClose();
  }

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  }

  function handleCancel(event) {
    event.preventDefault();
    handleClose();
  }

  const titleId = `material-details-${material.id}-title`;

  return (
    <dialog
      ref={dialogRef}
      className="material-details-modal"
      aria-labelledby={titleId}
      onClick={handleBackdropClick}
      onCancel={handleCancel}
    >
      <div className="material-details">
        <header className="material-details__header">
          <div className="material-details__identity">
            <img src={material.icon} alt="" />

            <div>
              <h3 id={titleId}>{material.name}</h3>

              <p className="material-details__type">
                {material.type === "rare" ? "Rare material" : "Common material"}
              </p>
            </div>
          </div>

          <button
            type="button"
            className="material-details__close"
            aria-label="Close material details"
            onClick={handleClose}
            autoFocus
          >
            ×
          </button>
        </header>

        <div className="material-details__acquisition">
          <h4>Acquisition</h4>

          <ul>
            {material.acquisitionMethodIds.map((methodId) => {
              const method = getAcquisitionMethodById(methodId);

              if (!method) {
                return null;
              }

              return (
                <li key={methodId}>
                  <span>{method.name}</span>

                  {!method.availableInMelandrusAccord && (
                    <span className="material-details__warning">
                      Not available in Melandru&apos;s Accord
                    </span>
                  )}

                  {methodId === "artisan" && craftingRecipe && (
                    <MaterialCraftingRecipe
                      recipe={craftingRecipe}
                      materials={materials}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <a
          className="material-details__wiki-link"
          href={material.wikiUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Guild Wars Wiki
        </a>
      </div>
    </dialog>
  );
}

export default MaterialDetails;
