import Switch from "react-switch";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { BsTranslate } from "react-icons/bs";

export default function SwitchToggle() {
  const { handleTranslate, translated } = useGlobalContext();
  return (
    <Switch
      onChange={handleTranslate}
      checked={translated}
      onColor="#40ea2f"
      className="react-switch"
      handleDiameter={0}
      offColor="#f6fafd"
      offHandleColor="#40ea2f"
      height={40}
      width={85}
      checkedHandleIcon={
        <div className="flex justify-center items-center h-full text-black rounded-none">
          <BsTranslate />
        </div>
      }
      uncheckedHandleIcon={
        <div className="flex justify-center items-center h-full text-white rounded-none">
          <BsTranslate />
        </div>
      }
      uncheckedIcon={
        <div className="flex justify-center items-center h-full text-black font-bold rounded-none">
          ES
        </div>
      }
      checkedIcon={
        <div className="flex justify-center items-center h-full text-black font-bold rounded-none">
          EN
        </div>
      }
      borderRadius={0}
    />
  );
}
