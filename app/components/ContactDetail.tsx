import PhoneIcons from "./icons/PhoneIcons";
import MailIcon from "./icons/MailICon";
import HourIcon from "./icons/HourIcon";
import LocationIcon from "./icons/LocationIcon";

const contactItems = [
  {
    id: 1,
    title: "Phone Number",
    value: "+91 7339119231",
    icon: <PhoneIcons />,
    href: "tel:7339119231",
  },
  {
    id: 2,
    title: "E-Mail",
    value: "info@capzim.com",
    icon: <MailIcon />,
    href: "mailto:info@capzim.com",
  },
  {
    id: 3,
    title: "Address",
    value: "3422 Beech Street, \n Oakland, \n California, \n 94607",
    icon: <LocationIcon />,
  },
  {
    id: 4,
    title: "Work hours",
    value: "Monday To Saturday \n 09:00 AM To 06:00 PM",
    icon: <HourIcon />,
  },
];

function ContactDetail() {
  return (
    <div className="w-full p-10 border rounded-xl">
      <div className="w-full text-2xl font-semibold text-center md:mb-6 mb-4 text-primary">
        Get In Touch With Us
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 md:grid-rows-2 sm:grid-rows-1 place-items-center md:gap-6 sm:gap-20 relative">
        {contactItems.map((item, index) => (
          <a
            key={item.id + "contact"}
            href={item.href}
            className={`flex items-center text-center flex-col p-6 md:p-7 flex-grow my-2 md:my-4 relative w-full hover:border-2 rounded-md`}
          >
            <div className="p-4">{item.icon}</div>
            <div className="text-lg font-bold ">{item.title}</div>
            <div className="mt-4 hover:text-primary hover:decoration-primary decoration-2 hover:underline">
              {item.value}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ContactDetail;
