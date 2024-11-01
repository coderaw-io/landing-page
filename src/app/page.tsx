import whiteLogo from "@/app/assets/images/white-logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-primary-black min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center space-y-6">
        <Image 
          src={whiteLogo}
          width={600}
          height={300}
          className="w-1/2"
          alt="Logo da Coderaw"
        />

        <h1 className="text-5xl text-primary-white">
          Seja bem vindo
        </h1>
      </div>
    </div>
  );
}
