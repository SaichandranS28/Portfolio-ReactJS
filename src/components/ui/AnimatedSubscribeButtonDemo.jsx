import { ArrowDownToLine,ThumbsUp} from "lucide-react";

import { AnimatedSubscribeButton } from "@/components/ui/animated-subscribe-button";

export function AnimatedSubscribeButtonDemo() {
  return (
    <AnimatedSubscribeButton
      buttonColor="white"
      buttonTextColor="black"
      subscribeStatus={false}
      initialText={
        <span className="group inline-flex items-center text-lg text-blue-500">
          Resume{" "}
          <ArrowDownToLine className=" ml-1 size-5 transition-transform duration-300 group-hover:translate-x-1"/>
        </span>
      }
      changeText={
        <span className="group inline-flex items-center">
          <ThumbsUp color="white" className="mr-2 size-6" strokeWidth={1.75} />
          Downloaded{" "}
        </span>
      }
    />
  );
}
