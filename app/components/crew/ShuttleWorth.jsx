import Image from "next/image";

const ShuttleWorth = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-10 max-w-screen-2xl mx-auto overflow-hidden">
      <div className="basis-1/2 grid gap-20">
        <div className="flex flex-col gap-y-10">
          <h2 className="text-4xl uppercase font-light font-serif text-gray-500 tracking-normal">
            Mission Specialist
          </h2>
          <h2 className="lg:text-6xl text-4xl font-thin font-serif uppercase tracking-wider">
            Mark Shuttleworth
          </h2>
        </div>
        <div>
          <p className="text-xl font-sans text-start font-thin ">
            Mark Richard Shuttleworth is the founder and CEO of Canonical, the
            company behind the Linux-based Ubuntu operating system. Shuttleworth
            became the first South African to travel to space as a space
            tourist.
          </p>
        </div>
      </div>

      <div>
        <Image
          width={500}
          height={500}
          src="/assets/crew/image-mark-shuttleworth.png"
          alt="ansari"
          priority
          className="lg:max-w-xl md:max-w-md max-w-sm p-10 md:p-5 max-h-full"
        />
      </div>
    </div>
  );
};

export default ShuttleWorth;
