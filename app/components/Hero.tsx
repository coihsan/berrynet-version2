import ButtonLink from "./UI/Button";
import { spacegrotesk } from "@/app/components/UI/fonts";
export default function Hero() {
  return (
    <>
      <section>
        <h1 className={`${spacegrotesk.className}`}>
          Optimize Your Internet Connection with AI-powered Solutions
        </h1>
        <p>
          Experience the difference with AI-powered internet optimization. Take
          control and enjoy a faster, smoother, and more reliable online
          experience today!
        </p>
        <ButtonLink className={""} href={"/"} text="Get Started!" />
      </section>
    </>
  );
}
