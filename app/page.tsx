import Image from "next/image";
import SearchBox from "./components/SearchBox";
import Stack from "./components/Stack";
import Card from "./components/Card";

export default function Home() {
  return (
   <div className="flex flex-col">
    <SearchBox/>
    <Stack/>
    <Card title="Night-time metro from Saturday-Sunday" text="From November 16thto December 28th, you can take the metro, night to sunday on lines 2 and 3." img="" btnText="More information"/>
   </div>
  );
}
