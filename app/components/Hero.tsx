import ButtonLink from "./UI/Button";
import Section from "@/app/components/Section";
import { useRef } from "react";
import { spacegrotesk, sora } from "@/app/components/UI/fonts";
import { LocateFixed, Sparkles } from "lucide-react";
import Image from "next/image";
export default function Hero() {
  return (
    <>
      <Section
        className="mt-[1.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
        <div className="container relative lg:pt-[12rem] pt-[7rem]">
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <h1 className={`${sora.className} h1 mb-6`}>
              AI-powered Internet for Unprecedented Speed and Stability
            </h1>
            <p
              className={`${sora.className} body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8`}
            >
              Experience the difference with AI-powered internet optimization.
              Take control and enjoy a faster, smoother, and more reliable
              online experience today!
            </p>
            <div className="flex items-center gap-2 w-max mx-auto">
              <ButtonLink
                className={"gradient text-white w-max mx-auto mt-6"}
                href={"/"}
                icon={<Sparkles />}
                text="Our Promo"
              />
              <ButtonLink
                className={"bg-n-6 text-n-2 w-max mx-auto mt-6 hover:text-n-1"}
                href={"/"}
                icon={<LocateFixed />}
                text="Check Your Area"
              />
            </div>
          </div>
          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
              <div className="relative bg-n-8 rounded-[1rem]">
                <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
                <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] bg-center">
                  <img
                    className="rounded-xl w-full"
                    src={"/robot.jpg"}
                    width={900}
                    height={535}
                    alt="robot"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
