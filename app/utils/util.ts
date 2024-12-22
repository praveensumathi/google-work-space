import {
  ApplicationList,
  NavMenu,
  PricePlans,
  ServiceList,
} from "../types/types";
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

export const applications: ApplicationList[] = [
  {
    imageUrl: "/gmail-icon.png",
    title: "Gmail",
    description: "Secure business email, and so much more.",
  },
  {
    imageUrl: "/google-meet-icon.png",
    title: "Meet",
    description: "Secure video meetings for teams and businesses.",
  },
  {
    imageUrl: "/google-chat-icon.png",
    title: "Chat",
    description: "Simplify 1:1 messaging and group collaboration",
  },
  {
    imageUrl: "/google-calendar-icon.png",
    title: "Calendar",
    description: "Make the most of every day",
  },
  {
    imageUrl: "/google-drive-color-icon.png",
    title: "Drive",
    description: "Store, access, and share your files in one secure place",
  },
  {
    imageUrl: "/google-docs.png",
    title: "Docs",
    description: "Word processing for teams",
  },
  {
    imageUrl: "/google-sheets-icon.png",
    title: "Sheets",
    description:
      "Collaborative, smart, secure spreadsheets for fast-moving organizations",
  },
  {
    imageUrl: "/google-slides-icon.png",
    title: "Slides",
    description: "Beautiful presentations created together",
  },
  {
    imageUrl: "/google-forms-icon.png",
    title: "Google Forms",
    description: "Easy to create surveys and forms for everyone",
  },
  {
    imageUrl: "/sites.png",
    title: "Sites",
    description: "Effortlessly create impactful team sites",
  },
  {
    imageUrl: "/jamboard.png",
    title: "Jamboard",
    description: "Visualize your ideas in a new and collaborative way",
  },
  {
    imageUrl: "/Keep.png",
    title: "Keep",
    description: "Capture what’s important and get more done.",
  },
  {
    imageUrl: "/apps-script.png",
    title: "Google Apps Script",
    description: "Optimize how you work",
  },
  {
    imageUrl: "/cloud-search.png",
    title: "Cloud Search",
    description: "The information you need, right when you need it",
  },
  {
    imageUrl: "/admin.png",
    title: "Admin",
    description: "Manage Google Workspace for your organization",
  },
  {
    imageUrl: "/endpoint.png",
    title: "Endpoint Management",
    description: "Keep things simple—and moving.",
  },
  {
    imageUrl: "/vault.png",
    title: "Vault",
    description: "Data retention and eDiscovery for Google Workspace.",
  },
  {
    imageUrl: "/work-insights.png",
    title: "Work Insights",
    description: "Speed up your Google Workspace rollout",
  },
];

export const services: ServiceList[] = [
  {
    imageUrl: "/settings.png",
    title: "Setup and Configuration",
  },
  {
    imageUrl: "/migration.png",
    title: "Migration Assistance",
  },
  {
    imageUrl: "/learning-support.png",
    title: "Training and Support",
  },
  {
    imageUrl: "/consulting.png",
    title: "Consulting",
  },
];

export const navMenus: NavMenu[] = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "Services",
    link: "#service-sections",
  },
  {
    title: "Plans",
    link: "#price-plans",
  },
  {
    title: "Apps",
    link: "#application-sections",
  },
  {
    title: "Contact",
    link: "#",
  },
];
