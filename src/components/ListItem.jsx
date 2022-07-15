import { motion } from "framer-motion";

export default function ListItem({ name, icon, item }) {
  return (
    <motion.li variants={item} className="p-3 flex items-center justify-center">
      <p className="flex items-center gap-2 text-gray-400 text-xl">
        {name}
        {icon}
      </p>
    </motion.li>
  );
}
