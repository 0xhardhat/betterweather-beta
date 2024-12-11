import { Github } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 py-12 md:h-32 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            {/* Built by{" "}
                        <Link
                            href="https://twitter.com/yourusername"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            your-name
                        </Link>
                        . The source code is available on{" "}
                        <Link
                            href="https://github.com/yourusername/your-repo"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            GitHub
                        </Link>
                        . */}
            Welcome to <span className="font-bold">Better Weather</span>, the
            leading weather prediction market where users can forecast weather
            events and trade predictions. Here, you can participate in a dynamic
            marketplace that harnesses the collective intelligence of our
            community to provide accurate weather forecasts.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/egolessengineer/PredictionMarket-beta"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
