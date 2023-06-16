// app/page.tsx
"use client";
import { Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <div
      // style={{ backgroundImage: `url(/assets/home/bg-desktop.jpg)` }}
      className="min-h-[100vh] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center bg-home-mobile md:bg-home-tablet lg:bg-home-desktop"
    >
      <div className="flex justify-around items-center lg:items-end mx-auto flex-col lg:flex-row space-y-20 pb-10">
        <div className="pt-40 text-start basis-1/3">
          <Heading
            fontSize={"2xl"}
            textTransform={"uppercase"}
            fontWeight={"thin"}
            color={"white"}
            className="lg:text-start text-center tracking-[0.3em]"
          >
            so, you want to travel to
            <Text
              fontSize={{ md: "9xl", base: "7xl" }}
              fontWeight={"normal"}
              color={"white"}
              className="font-[swald] "
            >
              space
            </Text>
            <Text className="md:text-2xl text-xl capitalize tracking-normal text-center lg:text-start px-20 lg:px-0">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </Text>
          </Heading>
        </div>

        <div className="bg-white flex items-center justify-center w-32 h-32 p-36 text-black rounded-full">
          <h2 className="text-4xl tracking-[0.2em] font-serif font-light uppercase text-center">
            Explore
          </h2>
        </div>
      </div>
    </div>
  );
}
