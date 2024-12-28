import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SearchBar() {
  return (
    <div className="relative w-full max-w-sm">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <Input
        type="search"
        className="pl-10 pr-4 py-2 w-full h-12 rounded-lg border border-[#515670] focus:ring-2 focus:ring-blue-500"
        placeholder="Search market"
      />
    </div>
  );
}
