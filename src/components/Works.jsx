import { motion } from "framer-motion";
import { BiChevronRight } from "react-icons/bi";
import { useGlobalContext } from "../hooks/useGlobalContext";

export default function Works({ engText, espText }) {
  const { translated } = useGlobalContext();

  const item = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.li variants={item} className="flex items-center gap-5">
      <BiChevronRight className="text-3xl min-w-max fill-[#8cf72b]" />
      {translated ? engText : espText}
    </motion.li>
  );
}
