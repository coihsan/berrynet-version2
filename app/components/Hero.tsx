import ButtonLink from "./UI/Button";
import { spacegrotesk, sora } from "@/app/components/UI/fonts";
import { LocateFixed } from "lucide-react";
export default function Hero() {
  return (
    <>
      <section>
        <div className="mx-auto pt-24 lg:max-w-[60rem] mb-6">
          <h1
            className={`${spacegrotesk.className} font-bold lg:text-[3.5rem] max-md:text-[2.5rem] leading-none text-center mb-6`}
          >
            Optimize Your Internet Connection with AI-powered Solutions
          </h1>
          <p className={`${sora.className} text-center text-[2rem]`}>
            Experience the difference with AI-powered internet optimization.
            Take control and enjoy a faster, smoother, and more reliable online
            experience today!
          </p>
          <ButtonLink
            className={"bg-indigo-500 text-white w-max mx-auto"}
            href={"/"}
            icon={<LocateFixed />}
            text="Check Your Area!"
          />
        </div>
      </section>
    </>
  );
}
