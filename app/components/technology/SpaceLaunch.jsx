import Image from "next/image";

const SpaceLaunch = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start gap-10 pt-10 max-w-screen-2xl">
      <div className="flex flex-col gap-y-10 basis-1/2">
        <div className="flex flex-col gap-y-6 ">
          <h3 className="text-xl font-thin tracking-wider uppercase">
            The terminology...
          </h3>
          <h2 className="text-3xl lg:text-6xl font-thin font-serif uppercase tracking-wider">
            Launch vehicle
          </h2>
        </div>
        <div>
          <p className="text-xl font-sans text-start font-thin ">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </div>
      </div>

      <div>
        <Image
          src={"/assets/technology/image-launch-vehicle-portrait.jpg"}
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

export default SpaceLaunch;
