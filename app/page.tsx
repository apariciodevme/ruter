import Image from "next/image";
import SearchBox from "./components/SearchBox";
import Stack from "./components/Stack";
import Card from "./components/Card";

export default function Home() {
  return (
   <div className="flex flex-col">
    <SearchBox/>
    <Stack/>
    <Card/>
   </div>
  );
}
