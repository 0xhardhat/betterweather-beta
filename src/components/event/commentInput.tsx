import {
  // Search,
  MessageCircleIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";

export function CommentInput() {
  return (
    <div className="relative flex-grow sm:w-full max-w-[608px]">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <MessageCircleIcon className="h-5 w-5 text-gray-400" />
      </div>
      <Input
        type="search"
        className="pl-10 pr-4 py-2 w-[100%] h-12 rounded-lg border border-[#515670] focus:ring-2 focus:ring-blue-500 bg-transparent"
        placeholder="Add a comment"
      />
    </div>
  );
}
