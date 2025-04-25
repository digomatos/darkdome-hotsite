import Image from "next/image";
import Particles from "./particles";

import Client01 from "@/public/images/logo-trendmicro.png";
import Client02 from "@/public/images/logo-crowdstrike.webp";
import Client03 from "@/public/images/logo-elastic.png";
import Client04 from "@/public/images/logo-paloalto.png";
import Client05 from "@/public/images/logo-splunk.webp";
import Client06 from "@/public/images/logo-fortinet.png";

const logos = [
  { src: Client01, alt: "Client 01" },
  { src: Client02, alt: "Client 02" },
  { src: Client03, alt: "Client 03" },
  { src: Client04, alt: "Client 04" },
  { src: Client05, alt: "Client 05" },
  { src: Client06, alt: "Client 06" },
];

export default function Clients() {
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Particles animation */}
        <div className="absolute inset-0 max-w-6xl mx-auto px-4 sm:px-6">
          <Particles className="absolute inset-0 -z-10" quantity={5} />
        </div>

        <div className="py-8 md:py-12">
          <div className="overflow-hidden">
            <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
                {logos.map((logo, index) => (
                  <li key={index}>
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={100}
                      height={50}
                    />
                  </li>
                ))}
              </ul>
              <ul
                className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
                aria-hidden="true"
              >
                {logos.map((logo, index) => (
                  <li key={index}>
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={100}
                      height={50}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
