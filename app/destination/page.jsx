"use client";

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Moon from "../components/destination/Moon";
import Mars from "../components/destination/Mars";
import Europa from "../components/destination/Europa";
import Titan from "../components/destination/Titan";

const Page = () => {
  return (
    <>
      <Tabs
        className="min-h-screen bg-no-repeat bg-cover bg-center pt-40 md:pt-64 text-white bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop"
        p="20px"
        colorScheme="purple"
        variant="enclosed"
        align={{ base: "center", lg: "end" }} // Use responsive align property
      >
        <div className="flex justify-center lg:pl-20 pl-5 items-start flex-col">
          <h2 className="md:text-3xl text-2xl  md:tracking-[0.15em] tracking-wider font-light text-start text-white uppercase">
            <span className="text-gray-500 font-medium md:px-2.5 px-1.5">
              01
            </span>{" "}
            pick your destination
          </h2>
        </div>
        <TabList
          border="none"
          bg="transparent"
          p={{ md: "10", base: "2" }}
          className="lg:pr-80"
          display="flex"
          flexWrap="wrap"
          justifyContent={{ base: "center", lg: "flex-end" }} // Use responsive justifyContent property
        >
          <Tab
            _selected={{ borderBottom: "4px solid white" }}
            className="text-lg uppercase tracking-wider md:tracking-[0.3em]"
          >
            MOON
          </Tab>
          <Tab
            _selected={{ borderBottom: "4px solid white" }}
            className="text-lg uppercase tracking-[0.3em]"
          >
            MARS
          </Tab>
          <Tab
            _selected={{ borderBottom: "4px solid white" }}
            className="text-lg uppercase tracking-[0.3em]"
          >
            EUROPA
          </Tab>
          <Tab
            _selected={{ borderBottom: "4px solid white" }}
            className="text-lg uppercase tracking-[0.3em]"
          >
            TITAN
          </Tab>
        </TabList>

        <TabPanels className="pb-10">
          <TabPanel>
            <Moon />
          </TabPanel>
          <TabPanel>
            <Mars />
          </TabPanel>
          <TabPanel>
            <Europa />
          </TabPanel>
          <TabPanel>
            <Titan />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Page;
