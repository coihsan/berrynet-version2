import { feature } from "@/app/constants/data";
import { spacegrotesk } from "./UI/fonts";
import Section from "./Section";
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
              className="p-9 bg-n-7 rounded-2xl border border-n-6 min-h-[22rem]"
              key={item.id}
            >
              <h3
                className={`${spacegrotesk.className} font-bold text-xl mb-5`}
              >
                {item.title}
              </h3>
              <span className="text-n-3 mb-4">{item.description}</span>
              <div className={`${item.color} mt-auto p-3 rounded-md w-max`}>
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
