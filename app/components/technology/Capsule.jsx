import Image from "next/image";

const Capsule = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start gap-10 pt-10 max-w-screen-2xl">
      <div className="flex flex-col gap-y-10 basis-1/2">
        <div className="flex flex-col gap-y-6 ">
          <h3 className="text-xl font-thin tracking-wider uppercase">
            The terminology...
          </h3>
          <h2 className="lg:text-6xl text-3xl font-thin font-serif uppercase tracking-wider">
            Space capsule
          </h2>
        </div>
        <div>
          <p className="text-xl font-sans text-start font-thin ">
            A space capsule is an often-crewed spacecraft that uses a blunt-body
            reentry capsule to reenter the Earth's atmosphere without wings. Our
            capsule is where you'll spend your time during the flight. It
            includes a space gym, cinema, and plenty of other activities to keep
            you entertained.
          </p>
        </div>
      </div>

      <div>
        <Image
          src={"/assets/technology/image-space-capsule-portrait.jpg"}
          width={500}
          height={500}
          alt="launch vehicle"
          priority
          className="lg:max-w-xl md:max-w-md max-w-sm p-10 md:p-5 max-h-full"
        />
      </div>
    </div>
  );
};

export default Capsule;
