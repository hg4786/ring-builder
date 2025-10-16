import { useEffect, useRef } from "react";

type Props = {
  show?: boolean;
  step: number;
  totalStep: number;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
  onClose: () => void;
};

export default function StepModal(props: Props) {
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
    <dialog className="step-modal" ref={dialogRef}>
      <style>{`
          .step-modal {
            background-color: #3B0D52;
            /* background-image: url('/Radiant.png'); */
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
          .step-modal::backdrop {
            background: rgba(0, 0, 0, 0.5);
          }
          .step-modal .modal-wrapper {
            position: relative;
            width: 100%;
            padding: 40px;
          }
          .step-modal .close-button {
            position: absolute;
            top: -18px;
            right: -18px;
            background: white;
            border: 2px solid #FBBF24;
            border-radius: 50%;
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
          .step-modal .step-box {
            background-color: rgba(255, 255, 255, 0.3);
            border-radius: 4px;
            padding: 8px 16px;
            font-size: 14px;
            display: inline-block;
            margin-bottom: 24px;
          }
          .step-modal .title {
            font-size: 40px;
            margin-bottom: 16px;
          }
          .step-modal .description {
            font-size: 18px;
            max-width: 480px;
            margin: 0 auto 32px;
            line-height: 1.6;
          }
          .step-modal .action-button {
            background-color: white;
            color: #3B0D52;
            border: none;
            border-radius: 4px;
            padding: 16px 32px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            width: min(25rem, 95%);
          }

          @media (max-width: 600px) {
            .step-modal .modal-wrapper {
              padding: 20px;
            }
            .step-modal .action-button {
              width: 100%;
            }
          }
        `}</style>
      <div className="modal-wrapper">
        <div className="close-button" onClick={props.onClose}>
          X
        </div>
        <div className="step-box">
          Step {props.step} of {props.totalStep}
        </div>
        <div className="title font-secondary-500">{props.title}</div>
        <div className="description">{props.description}</div>
        <button className="action-button" onClick={props.onButtonClick}>
          {props.buttonText}
        </button>
      </div>
    </dialog>
  );
}
