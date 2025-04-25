"use client";

import { useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import Particles from "./particles";
import Illustration from "@/public/images/glow-top-dd-reverse.svg";
import FeatureImg01 from "@/public/images/dd-feature.png";

export default function Features() {
  const [tab, setTab] = useState<number>(1);

  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 border-t border-b [border-image:linear-gradient(to_right,transparent,var(--color-slate-800),transparent)1]">
        <div className="pt-12 md:pt-20">
          <div>
            <div className="relative py-24 -mt-12">
              <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
                <div>
                  <div className="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-blue-200 pb-3">
                    Centralize. Analyze. Protect.
                  </div>
                </div>
                <h2 className="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
                  How It Works
                </h2>
                <p className="text-lg text-slate-400 mb-8">
                  The classifier receives alerts from the vendors, processes and
                  analyzes them and displays (in real-time) its status on our
                  SaaS.
                </p>
                {/* Responsive Image Container */}
                <div className="w-full py-8 flex justify-center">
                  <Image
                    className="w-full"
                    src={FeatureImg01}
                    alt="Feature 01"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
