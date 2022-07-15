import { motion } from "framer-motion";

export default function Card({ title, logo, description, item }) {
  return (
    <motion.div
      variants={item}
      className="card bg-gradient-to-tr from-[#BAFF29] to-[#3fea2f] rounded-none flex-1"
    >
      <div className="card-body items-center justify-between gap-10">
        <div>
          <h2 className="card-title text-[#0a0a0a] text-2xl text-center">
            {title}
          </h2>
        </div>
        <div>{logo}</div>
        <div>
          <p className="text-[#0a0a0a] text-lg text-center">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
