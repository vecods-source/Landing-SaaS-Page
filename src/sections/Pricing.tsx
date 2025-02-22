import Checkimg from "@/assets/check.svg";
const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <div>
      <div className="section py-24">
        <div className="container">
          <div className="max-w-[540px] mx-auto">
            <h2 className="side-title">Pricing</h2>
            <p className="side-para">
              Free forever. Upgrade for unlimited tasks, better security, and
              exclusive features.
            </p>
          </div>
          <div className="price-cards flex flex-col items-center lg:flex-row lg:gap-8 lg:items-end">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`max-w-[320px] border-[1px] mt-10 border-[#F1F1F1] rounded-3xl p-10 shadow-[0_7px_14px_rgba(0,0,0,0.2)] ${
                  tier.popular ? "text-white bg-black" : ""
                }`}
              >
                <div className="flex justify-between items-center">
                  <span
                    className={`opacity-50 font-bold tracking-tight text-lg`}
                  >
                    {tier.title}
                  </span>
                  {tier.popular ? (
                    <div className="p-2 border border-white/20 rounded-3xl">
                      <span
                        className={`text-sm px-4 bg-[linear-gradient(to_right,#DD7DFF,#E1CD86,#8BCB92,#71C2EF,#3BFFFF,#DD7DFF)] bg-clip-text text-transparent font-medium`}
                      >
                        Most Popular
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mt-6">
                  <span className="font-bold text-[36px] leading-[36px] tracking-tighter">
                    ${tier.monthlyPrice}
                  </span>
                  <span className="font-bold text-base tracking-tight opacity-50 ml-1">
                    /month
                  </span>
                </div>
                <button
                  className={`btn btn-primar w-full mt-6 ${
                    tier.popular ? "bg-white text-black" : ""
                  }`}
                >
                  {tier.buttonText}
                </button>
                <div className="mt-6">
                  <ul className="list-none">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center mt-4">
                        <Checkimg className="w-[24px] mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
