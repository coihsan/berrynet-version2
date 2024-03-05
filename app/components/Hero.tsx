import ButtonLink from "./UI/Button";
import { spacegrotesk, sora } from "@/app/components/UI/fonts";
import { LocateFixed } from "lucide-react";
import Image from "next/image";
export default function Hero() {
  return (
    <>
      <section>
        <div className="mx-auto pt-24 lg:max-w-[60rem] mb-6 px-6">
          <h1
            className={`${sora.className} font-bold lg:text-[3.5rem] max-md:text-[2.5rem] leading-none text-center mb-6`}
          >
            Optimize Your Internet Connection with AI-powered Solutions
          </h1>
          <p
            className={`${sora.className} text-center lg:text-[1.2rem] text-sm text-muted`}
          >
            Experience the difference with AI-powered internet optimization.
            Take control and enjoy a faster, smoother, and more reliable online
            experience today!
          </p>
          <ButtonLink
            className={"bg-yellow-600 text-white w-max mx-auto mt-6"}
            href={"/"}
            icon={<LocateFixed />}
            text="Check Your Area!"
          />
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-teal-500 p-1 w-max mx-auto rounded-xl">
          <Image
            className="rounded-xl w-max"
            src={"/robot.jpg"}
            width={999}
            height={535}
            alt="robot"
          />
        </div>
      </section>
    </>
  );
}
