"use client";
import { useState } from "react";
import { Check, ChevronRight } from "lucide-react";

interface PlanFeature {
  feature: string;
  included: boolean;
}

interface Plan {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: PlanFeature[];
  recommended?: boolean;
  customPrice?: boolean;
}

const plans: Plan[] = [
  {
    name: "Standard",
    description:
      "Perfect for small teams and startups getting started with virtual offices",
    monthlyPrice: 99,
    yearlyPrice: 40,
    features: [
      { feature: "Up to 5 team members", included: true },
      { feature: "Basic virtual office setup", included: true },
      { feature: "24/7 access to workspace", included: true },
      { feature: "Meeting room credits: 10hrs/month", included: true },
      { feature: "Business address service", included: true },
    ],
  },
  {
    name: "Premium",
    description: "Advanced features for growing teams with expanding needs",
    monthlyPrice: 299,
    yearlyPrice: 120,
    features: [
      { feature: "Up to 15 team members", included: true },
      { feature: "Advanced virtual office setup", included: true },
      { feature: "Premium business address", included: true },
      { feature: "Unlimited meeting room access", included: true },
      { feature: "Mail handling & forwarding", included: true },
      { feature: "Dedicated phone line", included: true },
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    description:
      "Custom solutions for large organizations with specific requirements",
    monthlyPrice: 0,
    yearlyPrice: 0,
    customPrice: true,
    features: [
      { feature: "Unlimited team members", included: true },
      { feature: "Custom virtual office setup", included: true },
      { feature: "Global business addresses", included: true },
      { feature: "Executive meeting rooms", included: true },
      { feature: "Full administrative support", included: true },
      { feature: "Dedicated success manager", included: true },
    ],
  },
];

const PricingTabs = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Billing Toggle */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-800 p-1 rounded-full inline-flex">
          <button
            className={`px-6 py-2 rounded-full transition-all ${
              billingCycle === "monthly"
                ? "bg-orange-500 text-white"
                : "text-gray-300 hover:text-white"
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 rounded-full transition-all ${
              billingCycle === "yearly"
                ? "bg-orange-500 text-white"
                : "text-gray-300 hover:text-white"
            }`}
            onClick={() => setBillingCycle("yearly")}
          >
            Yearly <span className="text-sm">(Save 60%)</span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border-2 ${
              plan.recommended ? "border-orange-500" : "border-gray-700"
            }`}
          >
            {plan.recommended && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 px-4 py-1 rounded-full text-sm font-semibold text-white">
                Recommended
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-300 text-sm">{plan.description}</p>
            </div>

            <div className="mb-8 pb-8 border-b border-gray-700">
              {plan.customPrice ? (
                <div className="text-3xl font-bold text-white">Custom Plan</div>
              ) : (
                <div className="flex items-baseline">
                  {billingCycle === "yearly" && (
                    <span className="text-xl line-through text-gray-500 mr-2">
                      ${plan.monthlyPrice}
                    </span>
                  )}
                  <span className="text-4xl font-bold text-white">
                    $
                    {billingCycle === "monthly"
                      ? plan.monthlyPrice
                      : plan.yearlyPrice}
                  </span>
                  <span className="text-gray-400 ml-2">
                    /{billingCycle === "monthly" ? "mo" : "yr"}
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <div key={feature.feature} className="flex items-start">
                  <Check className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{feature.feature}</span>
                </div>
              ))}
            </div>

            <button
              className={`w-full py-3 px-4 rounded-lg font-semibold transition-all flex items-center justify-center
                ${
                  plan.recommended
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "bg-gray-700 hover:bg-gray-600 text-white"
                }`}
            >
              {plan.customPrice ? "Contact Us" : "Choose Plan"}
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTabs;
