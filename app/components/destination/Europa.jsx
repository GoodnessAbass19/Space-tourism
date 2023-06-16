import Image from "next/image";

const Europa = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center max-w-screen-lg items-start gap-32 mx-auto overflow-hidden">
      <div className="">
        <Image
          src={"/assets/destination/image-europa.png"}
          alt="moon"
          width={400}
          height={400}
          priority
          className="md:max-w-lg max-w-md p-16 sm:p-0 max-h-full"
        />
      </div>

      <div className="basis-1/2 grid justify-center divide-y-2 gap-y-16">
        <div className="grid gap-y-10">
          <h2 className="md:text-8xl text-4xl font-medium text-start font-serif uppercase tracking-[0.1em]">
            europa
          </h2>

          <div>
            <p className="text-start text-lg font-normal capitalize tracking-widest">
              The smallest of the four Galilean moons orbiting Jupiter, Europa
              is a winter lover’s dream. With an icy surface, it’s perfect for a
              bit of ice skating, curling, hockey, or simple relaxation in your
              snug wintery cabin.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 gap-10">
          <div className="basis-1/2 text-start">
            <h2 className="text-xl font-normal tracking-widest uppercase  flex flex-col gap-4">
              avg. distance{" "}
              <span className="text-4xl antialiased not-italic font-semibold">
                628 mil. km
              </span>
            </h2>
          </div>
          <div className="basis-1/2">
            <h2 className="text-xl font-normal tracking-widest uppercase flex flex-col gap-4">
              Est. travel time{" "}
              <span className="text-4xl antialiased not-italic font-semibold">
                3 year
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Europa;
