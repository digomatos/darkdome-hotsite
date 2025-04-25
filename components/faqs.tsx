export default function Faqs() {
  return (
    <section className="relative" id="faq">
      {/* Blurred shape */}
      <div
        className="absolute top-0 -translate-y-1/3 left-1/2 -translate-x-1/2 ml-24 blur-2xl opacity-50 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient
              id="bs3-a"
              x1="19.609%"
              x2="50%"
              y1="14.544%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            fill="url(#bs3-a)"
            fillRule="evenodd"
            d="m410 0 461 369-284 58z"
            transform="matrix(1 0 0 -1 -410 427)"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-b [border-image:linear-gradient(to_right,transparent,var(--color-slate-800),transparent)1]">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div>
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-blue-200 pb-3">
                Centralize. Analyze. Protect.
              </div>
            </div>
            <h2 className="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Everything you need to know
            </h2>
          </div>

          {/* Columns */}
          <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="font-semibold">What is Darkdome?</h4>
                <p className="text-slate-400">
                  Darkdome is an advanced cybersecurity platform that
                  centralizes alerts from multiple security tools, applies both
                  AI-driven Threat Intelligence to pre-classify incidents, and
                  enables automated threat response. It then displays all the
                  collected and analyzed events on a intuitive platform.
                </p>
              </div>

              {/* Item */}
              <div className="space-y-2">
                <h4 className="font-semibold">How do I implement Darkdome?</h4>
                <p className="text-slate-400">
                  It's really straightforward. Simply sign up for an account,
                  and our guided onboarding will walk you through connecting
                  your security tools and vendors to the Darkdome platform.
                </p>
              </div>

              {/* Item */}
              <div className="space-y-2">
                <h4 className="font-semibold">
                  What types of security alerts can Darkdome centralize and
                  analyze?
                </h4>
                <p className="text-slate-400">
                  Darkdome can centralize and analyze a wide range of security
                  alerts. Some common types of security alerts the platform can
                  handle include: Malware, Grayware/Spyware, Web access,
                  Behavior, C&C/C2.
                </p>
              </div>

              {/* Item */}
              <div className="space-y-2">
                <h4 className="font-semibold">
                  How quickly can I get started and deploy Darkdome in my
                  environment?
                </h4>
                <p className="text-slate-400">
                  You can get started with Darkdome in just minutes. Simply sign
                  up for an account, and our guided onboarding will walk you
                  through connecting your security tools and vendors to the
                  Darkdome platform.
                </p>
              </div>
            </div>

            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="font-semibold">
                  How does the AI pre-analyze and classify cybersecurity
                  incidents?
                </h4>
                <p className="text-slate-400">
                  It receives a raw vendor-triggered alert, process it and,
                  based on similar past events and its cybersecurity knowledge,
                  classifies it.
                </p>
              </div>

              {/* Item */}
              <div className="space-y-2">
                <h4 className="font-semibold">
                  Which security vendors and platforms does Darkdome integrate
                  with?
                </h4>
                <p className="text-slate-400">
                  We currently support the most used vendors available in the
                  market (CrowdStrike, Elastic, Fortinet, Palo Alto Networks,
                  Splunk and TrendMicro). Even if you're vendor isn't listed,
                  we're still able to handle your security alerts.
                </p>
              </div>

              {/* Item */}
              <div className="space-y-2">
                <h4 className="font-semibold">
                  Is my organization’s data secure when using Darkdome’s
                  cloud-based platform?
                </h4>
                <p className="text-slate-400">
                  Absolutely! At DarkDome, your organization’s data security is
                  our top priority. We host all data exclusively on Microsoft
                  Azure servers, which offer industry-leading security features,
                  robust encryption, and continuous monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
