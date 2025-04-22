
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface PlanDropdownProps {
  label: string;
  googlePlayUrl: string;
  appStoreUrl: string;
  className?: string;
}

export function PlanDropdown({ label, googlePlayUrl, appStoreUrl, className }: PlanDropdownProps) {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          className={`w-full py-3 rounded-lg text-lg font-semibold bg-[#2A98D2] hover:bg-[#2A98D2]/90 text-white transition-colors duration-200 ${className || ""}`}
        >
          {label}
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" sideOffset={8} className="w-60 z-50 bg-white">
        <DropdownMenuItem asChild>
          <a
            href={googlePlayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 w-full"
            aria-label="Baixar para Android (Google Play)"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_PT_BR.svg"
              alt="Google Play"
              className="h-7"
              style={{ background: "transparent" }}
            />
            <span className="ml-2">Baixar para Android</span>
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 w-full"
            aria-label="Baixar para iOS (App Store)"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-7"
              style={{ background: "transparent" }}
            />
            <span className="ml-2">Baixar para iOS</span>
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

