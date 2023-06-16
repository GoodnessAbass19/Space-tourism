"use client";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import SpaceLaunch from "../components/technology/SpaceLaunch";
import Capsule from "../components/technology/Capsule";
import SpacePort from "../components/technology/SpacePort";

const page = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/assets/technology/background-technology-desktop.jpg)`,
      }}
      className="text-white min-h-screen bg-no-repeat bg-cover bg-center pt-40 md:pt-64 flex gap-10 flex-col"
    >
      <div className="flex justify-center lg:pl-20 pl-5 items-start flex-col">
        <h2 className="text-3xl tracking-[0.15em] font-light lg:text-start text-center text-white uppercase">
          <span className="text-gray-500 font-medium md:px-2.5 px-1.5">03</span>{" "}
          Space launch 101
        </h2>
      </div>
      <Tabs
        colorScheme="purple"
        variant="enclosed"
        display={{ xl: "flex", base: "block" }}
        pt={"10"}
        align="center"
      >
        <TabList
          border="none"
          bg="transparent"
          p="10"
          className="pl-20"
          gap={{ md: "20", base: "10" }}
          flexDirection={{ xl: "column", base: "row" }}
        >
          <Tab
            _selected={{ bg: "white", color: "black" }}
            className="text-5xl font-medium text-center border-2 border-white rounded-full p-8 text-white w-12 h-12"
          >
            1
          </Tab>
          <Tab
            _selected={{ bg: "white", color: "black" }}
            className="text-5xl font-medium text-center border-2 border-white rounded-full p-8 text-white w-12 h-12"
          >
            2
          </Tab>
          <Tab
            _selected={{ bg: "white", color: "black" }}
            className="text-5xl font-medium text-center border-2 border-white rounded-full p-8 text-white w-12 h-12"
          >
            3
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SpaceLaunch />
          </TabPanel>
          <TabPanel>
            <Capsule />
          </TabPanel>

          <TabPanel>
            <SpacePort />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default page;
