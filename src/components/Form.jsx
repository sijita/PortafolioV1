import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "use-web3forms";
import { useGlobalContext } from "../hooks/useGlobalContext";

export default function Form() {
  const { translated } = useGlobalContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  const apiKey = "1c25ad89-19c2-4dfb-a2f3-e6bd8a269075";

  const { submit: onSubmit } = useWeb3Forms({
    apikey: apiKey,
    from_name: "Portafolio",
    subject: "New Contact Message from your Website",
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full lg:w-2/3 xl:w-1/3"
      >
        <input
          type="checkbox"
          id=""
          className="hidden"
          style={{ display: "none" }}
          {...register("botcheck")}
        ></input>
        <div className="mb-5">
          <input
            type="text"
            placeholder={translated ? "Full name" : "Nombre completo"}
            autoComplete="false"
            className={`w-full input input-lg bg-zinc-900 rounded-none  ${
              errors.name
                ? "border border-red-600"
                : "valid:focus:outline-[#BAFF29]"
            }`}
            {...register("name", {
              required: translated
                ? "Full name is required"
                : "Nombre completo requerido",
              maxLength: 80,
            })}
          />
          {errors.name && (
            <div className="mt-1 text-red-600">
              <small>{errors.name.message}</small>
            </div>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email_address" className="sr-only">
            Email Address
          </label>
          <input
            id="email_address"
            type="email"
            placeholder={translated ? "Email address" : "Correo electrónico"}
            name="email"
            autoComplete="false"
            className={`w-full input input-lg bg-zinc-900 rounded-none ${
              errors.email
                ? "border border-red-600"
                : "valid:focus:outline-[#BAFF29]"
            }`}
            {...register("email", {
              required: translated ? "Enter your email" : "Correo requerido",
              pattern: {
                value: /^\S+@\S+$/i,
                message: translated
                  ? "Please enter a valid email"
                  : "Por favor ingresa un correo valido",
              },
            })}
          />
          {errors.email && (
            <div className="mt-1 text-red-600">
              <small>{errors.email.message}</small>
            </div>
          )}
        </div>

        <div className="mb-3">
          <textarea
            name="message"
            placeholder={translated ? "Message" : "Mensaje"}
            className={`w-full textarea text-lg bg-zinc-900 rounded-none ${
              errors.message
                ? "border border-red-600"
                : "valid:focus:outline-[#BAFF29]"
            }`}
            {...register("message", {
              required: translated
                ? "Enter your message"
                : "Ingresa un mensaje",
            })}
          />
          {errors.message && (
            <div className="mt-1 text-red-600">
              <small>{errors.message.message}</small>
            </div>
          )}
        </div>
        <button
          type="submit"
          className="btn w-full font-bold bg-gradient-to-r rounded-none from-[#BAFF29] to-[#3fea2f] border-none text-black"
        >
          {isSubmitting ? (
            <svg
              className="w-5 h-5 mx-auto text-black animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : translated ? (
            "Send"
          ) : (
            "Enviar"
          )}
        </button>
      </form>

      {isSubmitSuccessful && isSuccess && (
        <div className="mt-3 text-sm text-center text-green-500">
          {translated
            ? "Message sent successfully"
            : "Mensaje enviado satisfactoriamente"}
        </div>
      )}
      {isSubmitSuccessful && !isSuccess && (
        <div className="mt-3 text-sm text-center text-red-500">
          {translated
            ? "Something went wrong. Please try later"
            : "Algo salio mal, por favor vuelve a intentarlo"}
        </div>
      )}
    </>
  );
}
