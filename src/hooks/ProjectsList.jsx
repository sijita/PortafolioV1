import screen from "../images/screen.jpg";
import screen4 from "../images/screen4.jpg";
import screen5 from "../images/screen5.jpg";
import screen6 from "../images/screen6.jpg";
import screen7 from "../images/screen7.jpg";
import screen8 from "../images/screen8.jpg";
import screen9 from "../images/screen9.jpg";
import screen10 from "../images/screen10.jpg";
import fullScreen2 from "../images/fullScreen4.png";
import { useGlobalContext } from "./useGlobalContext";

export default function ProjectsList() {
  const { translated } = useGlobalContext();
  const webProjects = [
    {
      title: translated ? "Football Quiz" : "Fútbol Quiz",
      screen: screen10,
      href: "https://football-quiz-three.vercel.app/",
    },
    {
      title: "eCommerce",
      screen: screen9,
      href: "https://ecommerce-sijita.vercel.app/",
    },
    {
      title: "Notys",
      screen: screen8,
      href: "https://notys.vercel.app/",
    },
    {
      title: translated ? "Ambeyma hotel" : "Hotel Ambeyma",
      screen: screen,
      href: "https://hotelambeyma.com/",
    },
    {
      title: translated ? "Servidrones" : "Servidrones",
      screen: screen6,
      href: "https://servidrones.vercel.app/",
    },
    {
      title: translated ? "Pokedex" : "Pokedex",
      screen: screen7,
      href: "https://pokedex-one-gray.vercel.app/",
    },
    {
      title: translated
        ? "Rick and Morty mobile app"
        : "App móvil de Rick and Morty",
      screen: screen5,
      href: "https://github.com/sijita/RickAndMortyAPI_RNative",
    },
    {
      title: translated ? "School page" : "Página escolar",
      screen: screen4,
      href: fullScreen2,
    },
  ];
  return { webProjects };
}
