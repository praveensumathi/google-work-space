import Image from "next/image";

function About() {
  return (
    <div className="grid grid-rows-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5 place-items-center">
      <Image
        src="/google-workspace.png"
        alt="google-workspace"
        width={800}
        height={800}
        className="object-cover"
      />
      <div className="font-semibold text-sm md:text-lg md:pl-10 leading-loose text-gray-500">
        <p>
          Looking for a Google Workspace Premier partner or reseller in India?
          <br />
          Look no further than Capzim!{" "}
          <b className="bg-title-gradient bg-clip-text text-transparent text-xl">
            Call us now on{" "}
            <a
              href="tel:7339119231"
              className="underline decoration-primary decoration-2 leading-3"
            >
              +91 7339119231
            </a>
          </b>{" "}
          to get started. We are a certified Google Workspace Premier partner
          and have been providing services in India with the tools they need to
          succeed.
        </p>
        <p className="mt-5">
          <b>
            Capzim Tech Solution is an authorized Google Workspace and Google
            for Education partner or reseller in India.
          </b>
        </p>
      </div>
    </div>
  );
}

export default About;
