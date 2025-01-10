import { FadeText } from "@/components/ui/fade-text";
import BlurFade from "./blur-fade";
import { useEffect,useState } from "react";

export function FadeTextDemo() {
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setAnimationKey((prevKey) => prevKey + 1);
        }, 12000); // Adjust the interval duration to match the total animation time
        return () => clearInterval(interval);
      }, []);
  return (
    <BlurFade key={animationKey} delay={0.15 * 6} inView>
        <div className="flex-col space-y-8 text-center">
            <div className="flex flex-col md:flex-row gap-5">
                <FadeText
                    className="text-5xl font-bold text-red-400 dark:text-white"
                    direction="up"
                    framerProps={{
                    show: { transition: { delay: 1.8 } },
                    }}
                    text="HTML"
                />
                <FadeText
                    className="text-4xl font-bold text-blue-500 dark:text-white"
                    direction="right"
                    framerProps={{
                    show: { transition: { delay: 2.2 } },
                    }}
                    text="CSS3"
                />
                <FadeText
                    className="text-5xl font-bold text-blue-400 dark:text-white"
                    direction="down"
                    framerProps={{
                    show: { transition: { delay: 2.6 } },
                    }}
                    text="TailwindCSS"
                />
                <FadeText
                    className="text-4xl font-bold text-yellow-500 dark:text-white"
                    direction="left"
                    framerProps={{
                    show: { transition: { delay: 3.0 } },
                    }}
                    text="Javascript"
                />
            </div>
        </div>
        <div className="mt-5 flex flex-col text-center">
            <div className="flex flex-col md:flex-row gap-5">
                <FadeText
                    className="text-5xl font-bold text-blue-700 dark:text-white"
                    direction="up"
                    framerProps={{
                    show: { transition: { delay: 3.4 } },
                    }}
                    text="ReactJS"
                />
                <FadeText
                    className="text-4xl font-bold text-white dark:text-white"
                    direction="right"
                    framerProps={{
                    show: { transition: { delay: 3.8 } },
                    }}
                    text="GitHub"
                />
                <FadeText
                    className="text-5xl font-bold text-yellow-300 dark:text-white"
                    direction="down"
                    framerProps={{
                    show: { transition: { delay: 4.2 } },
                    }}
                    text="Python"
                />
                <FadeText
                    className="text-4xl font-bold text-orange-500 dark:text-white"
                    direction="left"
                    framerProps={{
                    show: { transition: { delay: 4.6 } },
                    }}
                    text="MySQL"
                />
            </div>
            <div className="flex gap-5">
                
            </div>
        </div>
    </BlurFade>
  );
}
