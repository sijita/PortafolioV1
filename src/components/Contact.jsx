import { useGlobalContext } from "../hooks/useGlobalContext";
import Form from "./Form";

export default function Contact() {
  const { translated } = useGlobalContext();
  return (
    <div className="container lg:p-20 p-10 mx-auto w-11/12">
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-white text-4xl font-semibold text-center">
          {translated ? "Send me an email" : "Enviame un correo"}
        </h1>
        <Form />
      </div>
    </div>
  );
}
