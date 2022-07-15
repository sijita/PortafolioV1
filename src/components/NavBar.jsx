import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenu, BiX } from "react-icons/bi";
import { motion } from "framer-motion";
import { useGlobalContext } from "../hooks/useGlobalContext";

export default function NavBar() {
  const { translated } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <nav className="flex flex-wrap items-center justify-center bg-transparent sticky top-0 bg-[#0a0a0a] z-40">
      <div className="container mx-auto flex flex-wrap items-center justify-center">
        <div className="w-full relative flex justify-center lg:w-auto p-10 lg:hidden">
          <button
            className={`${
              isOpen && "hidden"
            } animate-in fade-in spin-in duration-300 text-white cursor-pointer leading-none lg:hidden outline-none focus:outline-none`}
            type="button"
            onClick={toggle}
          >
            <BiMenu className="text-5xl"></BiMenu>
          </button>
          <button
            className={`${
              !isOpen && "hidden"
            } animate-in fade-in spin-in duration-300 text-white cursor-pointer leading-none lg:hidden outline-none focus:outline-none`}
            type="button"
            onClick={toggle}
          >
            <BiX className="text-5xl"></BiX>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center justify-center p-10" +
            (isOpen ? " flex" : " hidden")
          }
        >
          <ul className="flex lg:gap-20 gap-14 flex-col lg:flex-row list-none items-center">
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            >
              <NavLink
                exact="true"
                onClick={toggle}
                className={({ isActive }) =>
                  isActive
                    ? "text-xl uppercase font-bold bg-clip-text text-transparent bg-gradient-to-t from-[#BAFF29] to-[#3fea2f]"
                    : "text-xl uppercase font-semibold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b from-[#BAFF29] to-[#3fea2f]"
                }
                to="/"
              >
                {translated ? "ABOUT ME" : "SOBRE MI"}
              </NavLink>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            >
              <NavLink
                onClick={toggle}
                exact="true"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl uppercase font-bold bg-clip-text text-transparent bg-gradient-to-t from-[#BAFF29] to-[#3fea2f]"
                    : "text-xl uppercase font-semibold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b from-[#BAFF29] to-[#3fea2f]"
                }
                to="/experience"
              >
                {translated ? "EXPERIENCE" : "EXPERIENCIA"}
              </NavLink>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            >
              <NavLink
                onClick={toggle}
                exact="true"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl uppercase font-bold bg-clip-text text-transparent bg-gradient-to-t from-[#BAFF29] to-[#3fea2f]"
                    : "text-xl uppercase font-semibold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b from-[#BAFF29] to-[#3fea2f]"
                }
                to="/projects"
              >
                {translated ? "PROJECTS" : "PROYECTOS"}
              </NavLink>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            >
              <NavLink
                onClick={toggle}
                exact="true"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl uppercase font-bold bg-clip-text text-transparent bg-gradient-to-t from-[#BAFF29] to-[#3fea2f]"
                    : "text-xl uppercase font-semibold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b from-[#BAFF29] to-[#3fea2f]"
                }
                to="/contact"
              >
                {translated ? "CONTACT ME" : "CONTACTO"}
              </NavLink>
            </motion.li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
