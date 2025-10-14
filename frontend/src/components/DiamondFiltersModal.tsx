import { useEffect, useRef, useState } from "react";
import type { FilterState } from "./DiamondFilters";

type Props = {
  show?: boolean;
  onClose: () => void;
};

export default function DiamondFiltersModal(props: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [filters, setFilters] = useState<FilterState>({
    diamondType: "natural",
    colorType: "white",
    colorGrade: [],
    clarity: [],
    caratRange: [0, 500],
    quickship: false,
    sortBy: "Popular",
    viewMode: "grid",
  });

  const updateFilters = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
  };

  useEffect(() => {
    if (!dialogRef.current) {
      return;
    }
    if (dialogRef.current.open == props.show) {
      return;
    }
    if (props.show) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [props.show]);

  return (
    <dialog className="diamond-filters-modal" ref={dialogRef}>
      <style>{`
          .diamond-filters-modal {
            background-color: #ffffff;
            background-image: url('/Radiant.png');
            background-blend-mode: overlay;
            background-size: 80%;
            background-repeat: no-repeat;
            background-position: center;
            border: 2px solid #FBBF24;
            border-radius: 4px;
            text-align: center;
            color: white;
            width: min(500px, 95vw);
            height: 100vh;
            right: 0;
          }
          .diamond-filters-modal::backdrop {
              background: rgba(0, 0, 0, 0.5);
          }
          .modal-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: auto;
          }
          .diamond-filters-modal .close-button {
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: black;
            font-size: 20px;
            line-height: 100%;
            font-weight: bold;
          }
          .diamond-filters-modal .action-button {
            background-color: white;
            color: #3B0D52;
            border: none;
            border-radius: 4px;
            padding: 16px 32px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            width: 25rem;
          }
        `}</style>
      <div className="modal-wrapper">
        <div>
          <div className="close-button" onClick={props.onClose}>
            X
          </div>
        </div>
        <div className="diamond-type-selector">
          <div className="diamond-type-container">
            <button
              className={`diamond-type-btn ${filters.diamondType === "natural" ? "active" : ""}`}
              onClick={() => updateFilters({ diamondType: "natural" })}
            >
              NATURAL DIAMONDS
            </button>
            <button
              className={`diamond-type-btn ${filters.diamondType === "lab" ? "active" : ""}`}
              onClick={() => updateFilters({ diamondType: "lab" })}
            >
              LAB DIAMONDS
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
