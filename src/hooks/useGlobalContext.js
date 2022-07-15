import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  return context;
};
