import Image from "next/image";

const SpacePort = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start gap-10 pt-10 max-w-screen-2xl">
      <div className="flex flex-col gap-y-10 basis-1/2">
        <div className="flex flex-col gap-y-6 ">
          <h3 className="text-xl font-thin tracking-wider uppercase">
            The terminology...
          </h3>
          <h2 className="md:text-6xl text-3xl font-thin font-serif uppercase tracking-wider">
            Spaceport
          </h2>
        </div>
        <div>
          <p className="text-xl font-sans text-start font-thin ">
            A spaceport or cosmodrome is a site for launching (or receiving)
            spacecraft, by analogy to the seaport for ships or airport for
            aircraft. Based in the famous Cape Canaveral, our spaceport is
            ideally situated to take advantage of the Earth’s rotation for
            launch.
          </p>
        </div>
      </div>

      <div>
        <Image
          src={"/assets/technology/image-spaceport-portrait.jpg"}
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

export default SpacePort;
