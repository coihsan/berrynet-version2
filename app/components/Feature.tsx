import { feature } from "@/app/constants/data";
import { spacegrotesk } from "./UI/fonts";
import Link from "next/link";
import Section from "./Section";
import { ChevronRight } from "lucide-react";
export default function Feature() {
  return (
    <Section id={feature}>
      <div className="container">
        <h1 className={`${spacegrotesk.className} text-center h2 font-bold`}>
          Empower Your Internet Experience with AI
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-12">
          {feature.map((item) => (
            <div
              className="p-9 bg-n-12 rounded-2xl border border-n-9"
              key={item.id}
            >
              <div className="flex flex-col min-h-[14rem]">
                <h3
                  className={`${spacegrotesk.className} font-bold text-xl mb-5`}
                >
                  {item.title}
                </h3>
                <span className="text-n-3 mb-4 tracking-wide">
                  {item.description}
                </span>
              </div>
              <div className="flex items-center justify-between gap-5 border-t-[1px] border-n-9 pt-5">
                <div className={`${item.color} mt-auto p-2 rounded-md w-max`}>
                  {item.icon}
                </div>
                <Link href={"#"} className="flex items-center gap-4">
                  <span className="tracking-wide uppercase font-code text-xs font-bold text-n-1 hover:text-yellow-500">
                    Explore More
                  </span>
                  <ChevronRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
