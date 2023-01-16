import { useGlobalContext } from "./useGlobalContext";
import {
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineLightningBolt,
  HiOutlineStar,
} from "react-icons/hi";

export default function ServicesList() {
  const { translated } = useGlobalContext();

  const servicesList = [
    {
      title: translated ? "Webpages" : "Páginas web",
      description: translated
        ? "Responsive websites with creative and attractive designs"
        : "Páginas web responsivas con diseños creativos y atractivos",
      logo: <HiOutlineDesktopComputer className="text-4xl text-[#0a0a0a]" />,
    },
    {
      title: translated ? "Mobile apps" : "Aplicaciones móviles",
      description: translated
        ? "Mobile applications made with React Native"
        : "Aplicaciones móviles hechas con React Native",
      logo: <HiOutlineDeviceMobile className="text-4xl text-[#0a0a0a]" />,
    },
    {
      title: translated ? "Performance" : "Rendimiento",
      description: translated
        ? "Optimized websites for a better user experience"
        : "Páginas web optimizadas para una mejor experiencia de usuario",
      logo: <HiOutlineLightningBolt className="text-4xl text-[#0a0a0a]" />,
    },
    {
      title: translated ? "SEO" : "SEO",
      description: translated
        ? "Search engine optimization for better positioning"
        : "Optimización para motores de búsqueda para un mejor posicionamiento",
      logo: <HiOutlineStar className="text-4xl text-[#0a0a0a]" />,
    },
  ];

  return {servicesList}
}
