import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const InteractiveHoverButton = React.forwardRef(({ text = "Send", className, ...props }, ref) => {
  return (
    (<button
      ref={ref}
      className={cn(
        "font-heroName group relative w-32 cursor-pointer overflow-hidden rounded-xl border-2 bg-background p-3 text-center font-semibold",
        className
      )}
      {...props}>
      <span
        className="inline-block translate-x-1 transition-all duration-500 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <div
        className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-700 group-hover:-translate-x-1 group-hover:opacity-100">
        <span className="text-white">{text}</span>
        <ArrowRight className="text-white"/>
      </div>
      <div
        className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-yellow-500 transition-all duration-700 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-yellow-400"></div>
    </button>)
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export default InteractiveHoverButton;
