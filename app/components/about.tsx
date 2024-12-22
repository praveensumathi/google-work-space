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
      <div className="font-semibold tex-xl text-gray-500 pl-10 leading-loose">
        <p>
          Looking for a Google Workspace Premier partner or reseller in India?
          <br />
          Look no further than Digisoft!{" "}
          <b className="bg-title-gradient bg-clip-text text-transparent">
            Call us now on +91 987654321{" "}
          </b>
          to get started. We are a certified Google Workspace Premier partner
          and have been providing services in India with the tools they need to
          succeed.
        </p>
        <p className="mt-5">
          <b>
            Digisoft is an authorized Google Workspace and Google for Education
            partner or reseller in India.
          </b>
        </p>
      </div>
    </div>
  );
}

export default About;
