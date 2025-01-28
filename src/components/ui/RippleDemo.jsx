import Ripple from "@/components/ui/ripple";
import logo from "../../assets/Logo.jpg"


export function RippleDemo() {
  return (
    <div className="relative flex h-[300px] w-[300px] mb-10 sm:mb-0' rounded-full sm:h-[700px] sm:w-[700px] sm:rounded-none flex-col sm:flex-row items-center justify-center overflow-hidden">
      <p className="z-50 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
        <img src={logo} className="h-64 w-64 md:h-96 md:w-96 object-cover object-top rounded-full" alt="" />
      </p>
      <Ripple />
    </div>
  );
}
