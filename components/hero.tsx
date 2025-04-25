import Image from "next/image";
import Particles from "./particles";
import Illustration from "@/public/images/glow-bottom-dd.svg";
import SimpleLogo from "./ui/simple-logo";
import Logo from "./ui/logo";
import TextLogo from "./ui/text-logo";

export default function Hero() {
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Particles animation */}
        <Particles className="absolute inset-0 -z-10" />

        {/* Illustration */}
        <div
          className="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
            <Image
              src={Illustration}
              className="max-w-none"
              width={2146}
              priority
              alt="Hero Illustration"
            />
          </div>
        </div>

        <div className="pt-32 pb-16 md:pt-52 md:pb-32">
          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="h1 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4"
              data-aos="fade-down"
            >
              One feed. Zero trust. Automated investigation.
            </h1>
            <p
              className="text-lg text-slate-300 mb-8"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Ingest the chaos, deliver clarity: AI-powered cybersecurity alerts
              triage that centralizes visibility, unpacks complexity, and
              provides precise incident investigation in real-time
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <div>
                <a
                  className="btn text-slate-200 hover:text-white bg-slate-900/25 hover:bg-slate-900/30 w-full transition duration-150 ease-in-out"
                  href="#feature"
                >
                  <span>Read more</span>
                  <span className="tracking-normal text-white-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
