import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeroSection from "@/components/final/HeroSection";
import CodeHighlight from "@/components/CodeHighlight";

const HeroSectionCode = `import React from "react";
import Link from "next/link";
import Navbar from "@/components/final/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";

const HeroSection = () => {
  return (
    <section className="min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background/60 opacity-5 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <Navbar />
      <main className="px-5 py-16 pb-30 sm:flex sm:flex-col items-center">
        <Badge>🎉 Something special is waiting!</Badge>
        <h1 className="text-5xl mt-2 sm:text-6xl sm:w-2/3 sm:text-center">
          Build before its too late,{" "}
          <span className="text-primary ">effectively</span> and
          <span className="text-primary "> effortlessly</span>
        </h1>
        <p className="text-[22px] sm:text-[18px] opacity-75 font-extralight mb-6 mt-5 md:max-w-[600px] md:text-center">
          Meet IndieToolkit, the project-juggling tool for all indie hackers.
          Focus on building, not managing and tracking what is left. Free for
          individuals.
        </p>
        <Link href={""}>
          <Button
            className="w-[350px] font-semibold h-[50px] mt-10 text-lg"
            variant={"default"}
          >
            Start Here {"->"}
          </Button>
        </Link>
      </main>
    </section>
  );
};

export default HeroSection;
`;

const page = () => {
  return (
    <div className="">
      <Tabs defaultValue="preview" className="p-0  m-0">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent
          className="scale-75 border border-black md:-ml-40 md:-mt-10 "
          value="preview"
        >
          <HeroSection />
        </TabsContent>
        <TabsContent value="code" className="w-96 md:w-[800px] rounded-sm">
          <CodeHighlight code={HeroSectionCode} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
