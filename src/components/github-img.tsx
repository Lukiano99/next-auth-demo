import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface GithubImgProps {
  src: string;
  userName: string;
  email: string;
}
export const GithubImg = ({ src, userName, email }: GithubImgProps) => {
  return (
    <div className="relative hover:cursor-pointer">
      <TooltipProvider>
        <Tooltip delayDuration={100}>
          <TooltipTrigger>
            <Image
              src={src}
              width={40}
              height={40}
              alt="profile-image"
              className=""
            />
            <div className="absolute size-3 border-background border-2 bg-green-500 rounded-full bottom-0 right-0"></div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs text-accent-foreground/50 pb-2">
              Logged In as
            </p>
            <p className="text-md font-medium">{userName}</p>
            <p className="text-xs font-medium text-accent-foreground/50">
              {email}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
