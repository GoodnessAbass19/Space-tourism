import Image from "next/image";

const Ansari = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-10 max-w-screen-2xl mx-auto overflow-hidden">
      <div className="basis-1/2 grid gap-20">
        <div className="flex flex-col gap-y-10">
          <h2 className="text-4xl uppercase font-light font-serif text-gray-500 tracking-normal">
            Flight Engineer
          </h2>
          <h2 className="lg:text-6xl text-4xl font-thin font-serif uppercase tracking-wider">
            Anousheh Ansari
          </h2>
        </div>
        <div>
          <p className="text-xl font-sans text-start font-thin ">
            Anousheh Ansari is an Iranian American engineer and co-founder of
            Prodea Systems. Ansari was the fourth self-funded space tourist, the
            first self-funded woman to fly to the ISS, and the first Iranian in
            space.
          </p>
        </div>
      </div>

      <div>
        <Image
          width={500}
          height={500}
          src="/assets/crew/image-anousheh-ansari.png"
          alt="ansari"
          priority
          className="lg:max-w-xl md:max-w-md max-w-sm p-10 md:p-5 max-h-full"
        />
      </div>
    </div>
  );
};

export default Ansari;
