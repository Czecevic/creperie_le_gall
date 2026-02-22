import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";

interface SwitchButtonProps {
  onSwitch: boolean;
  setOnSwitch: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SwitchButton = ({ onSwitch, setOnSwitch }: SwitchButtonProps) => {
  return (
    <button
      type="button"
      onClick={() => setOnSwitch(!onSwitch)}
      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-surface border-2 border-primary/50 text-primary font-semibold uppercase tracking-wide hover:bg-primary/10 hover:border-primary hover:scale-105 active:scale-100 transition-all duration-200"
    >
      {onSwitch ? (
        <>
          Crêpes sucrées
          <FontAwesomeIcon icon={faRightLong} className="text-sm" />
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={faLeftLong} className="text-sm" />
          Crêpes salées
        </>
      )}
    </button>
  );
};
