import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import SwitchToggle from "../components/SwitchToggle";
import { useLocation } from "react-router-dom";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Aside from "../components/Aside";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const { pathname } = useLocation();
  return (
    <div>
      <Header />
      <NavBar />
      <div className="w-full p-10 text-center sm:hidden">
        <SwitchToggle />
      </div>
      {pathname === "/" ? (
        <>
          <AboutMe />
          <Skills />
        </>
      ) : pathname === "/experience" ? (
        <Experience />
      ) : pathname === "/projects" ? (
        <Projects />
      ) : pathname === "/contact" ? (
        <Contact />
      ) : null}
      <Services />
      <Footer />
      <Aside />
      <p className="p-20 m-0 text-center text-muted font-monospace">
        Simón Jiménez Tamayo 💚 2022
      </p>
    </div>
  );
}
