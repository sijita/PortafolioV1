import Works from "../components/Works";
import { useGlobalContext } from "./useGlobalContext";

export default function Experience() {
  const { translated } = useGlobalContext();
  const expJobList = {
    engTitle: "DV. Front-End employee",
    espTitle: "DV. Front-End como empleado",
    works: (
      <>
        <Works
          engText={
            <p>
              Tres Pi Medios{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-t from-[#BAFF29] to-[#3fea2f]">
                (
              </span>
              Agosto 2022 - Enero 2023
              <span className="bg-clip-text text-transparent bg-gradient-to-t from-[#BAFF29] to-[#3fea2f]">
                )
              </span>
            </p>
          }
          espText={
            <p>
              Tres Pi Medios{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-t from-[#BAFF29] to-[#3fea2f]">
                (
              </span>
              Septiembre 2022 - Enero 2023
              <span className="bg-clip-text text-transparent bg-gradient-to-t from-[#BAFF29] to-[#3fea2f]">
                )
              </span>
            </p>
          }
        />
      </>
    ),
  };

  const expFrontList = {
    engTitle: "DV. Freelance Front-End",
    espTitle: "DV. Front-End independiente",
    year: translated ? "2021 - Present" : "2021 - Presente",
    works: (
      <>
        <Works
          engText="Ambeyma Hotel website"
          espText="Página web Hotel Ambeyma"
        />
        <Works engText="Servidrones website" espText="Página web Servidrones" />
        <Works
          engText="
            Personal projects"
          espText="
            Proyectos personales"
        />
      </>
    ),
  };

  return {
    expJobList,
    expFrontList,
  };
}
