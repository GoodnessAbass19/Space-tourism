import Image from "next/image";

const Glover = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-10 max-w-screen-2xl mx-auto overflow-hidden">
      <div className="basis-1/2 grid gap-20">
        <div className="flex flex-col gap-y-10">
          <h2 className="text-4xl uppercase font-light font-serif text-gray-500 tracking-normal">
            Pilot
          </h2>
          <h2 className="lg:text-6xl text-4xl font-thin font-serif uppercase tracking-wider">
            Victor Glover
          </h2>
        </div>
        <div>
          <p className="text-xl font-sans text-start font-thin ">
            Pilot on the first operational flight of the SpaceX Crew Dragon to
            the International Space Station. Glover is a commander in the U.S.
            Navy where he pilots an F/A-18.He was a crew member of Expedition
            64, and served as a station systems flight engineer.
          </p>
        </div>
      </div>

      <div>
        <Image
          width={500}
          height={500}
          src="/assets/crew/image-victor-glover.png"
          alt="ansari"
          priority
          className="lg:max-w-xl md:max-w-md max-w-sm p-10 md:p-5 max-h-full"
        />
      </div>
    </div>
  );
};

export default Glover;
