import { CountryList } from "@/components/CountryList";
import { SearchBar } from "@/components/SearchBar";
import { Pagination } from "@/components/Pagination";

export default function Home() {
  return (
    <div className=" p-4 flex justify-center text-black">
      <div className="flex flex-col">
        <SearchBar />
        <CountryList />
        <div className="flex justify-center">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
