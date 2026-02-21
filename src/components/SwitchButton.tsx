import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
interface SwitchButtonProps {
  onSwitch: boolean;
  setOnSwitch: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SwitchButton = ({ onSwitch, setOnSwitch }: SwitchButtonProps) => {
  return (
    <button onClick={() => setOnSwitch(!onSwitch)}>
      {onSwitch ? (
        <div className="flex items-center gap-2 uppercase">
          crêpes sucrées <FontAwesomeIcon icon={faRightLong} />
        </div>
      ) : (
        <div className="flex items-center gap-2 uppercase">
          <FontAwesomeIcon icon={faLeftLong} /> crêpes salées
        </div>
      )}
    </button>
  );
};
