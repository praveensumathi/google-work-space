import { PricePlans } from "../types/types";

export const businessPlans: PricePlans[] = [
  {
    heading: "Business Starter",
    options: [
      "<b>Custom</b> and secure business email",
      "<b>100-participant</b> video meetings",
      "<b>30GB</b> storage per user",
      "<b>Security</b> and management controls",
      "<b>Standard</b> support",
    ],
  },
  {
    heading: "Business Standard",
    options: [
      "<b>Custom</b> and secure business email",
      "<b>150-participant</b> video meetings + recording",
      "<b>2TB</b> storage per user**",
      "<b>Security</b> and management controls",
      "<b>Standard</b> support (paid upgrade to enhanced support)",
    ],
  },
  {
    heading: "Business Plus",
    options: [
      "<b>Custom</b> and secure business email + ediscovery, retention",
      "<b>500 participant</b> video meetings + recording, attendance tracking",
      "<b>5TB</b> storage per user**",
      "<b>Enhanced security</b> and management controls, including Vault and advanced endpoint management",
      "<b>Standard</b> support (paid upgrade to enhanced support)",
    ],
  },
  {
    heading: "Enterprise",
    options: [
      "<b>Custom</b> and secure business email + eDiscovery, retention, S/MIME encryption",
      "<b>500 participant</b> video meetings + recording, attendance tracking, <b> noise cancellation, in-domain live streaming</b>",
      "<b>As much storage</b> storage per user**",
      "Advanced security, management and compliance controls, including Vault,<b>DLP, data regions and enterprise endpoint management</b>",
      "<b>Enhanced security</b> and management controls, including Vault and advanced endpoint management",
      "<b>Enhanced support</b> (paid upgrade to Premium Support)",
    ],
  },
];
