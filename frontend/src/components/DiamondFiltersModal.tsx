import { useEffect, useRef } from "react";

type Props = {
  show?: boolean;
  onClose: () => void;
};

export default function DiamondFiltersModal(props: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

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
            background-color: #3B0D52;
            background-image: url('/Radiant.png');
            background-blend-mode: overlay;
            background-size: 80%;
            background-repeat: no-repeat;
            background-position: center;
            border: 2px solid #FBBF24;
            border-radius: 4px;
            text-align: center;
            color: white;
            width: min(800px, 95vw);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            overflow: visible;
          }
          .diamond-filters-modal::backdrop {
            background: rgba(0, 0, 0, 0.5);
          }
          .modal-wrapper {
            position: relative;
            width: 100%;
            padding: 40px;
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
        <div className="close-button" onClick={props.onClose}>
          X
        </div>
      </div>
    </dialog>
  );
}
