import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4.png'
import p5 from '../../assets/p5.png'

const reviews = [
  {
    title: "Movie App",
    description: "A movie app that fetches data from an API and displays it in a beautiful way.",
    img: p1, 
    link: "https://movie-app-henna-nu.vercel.app/",
  },
  {
    title: "Simple Todo App",
    description: "A simple todo app that allows you to add, delete and mark todos as done.",
    img: p2,
    link: "https://simple-todo-list-brown.vercel.app/",
  },
  {
    title: "ChatGPT Frontend",
    description: "Simple frontend for ChatGPT, Cloned a homepage of OpenAI's ChatGPT.",
    img: p3,
    link: "https://chatgpt-clone-sai.vercel.app/",
  },
  {
    title: "NetFlix Clone",
    description: "Netflix sign in page clone using html and css.",
    img: p4,
    link: "https://netflix-clone-sai.vercel.app/",
  },
  {
    title: "Multiple Disease Predictor",
    description: "A ML web app that predicts multiple diseases based on symptoms.",
    img: p5,
    link: "https://multiplediseasepredictor-saichandran.streamlit.app/",
  },
  
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ title,description,img,link }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-full cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <a href={link} target="_blank">
        <div className="flex flex-col items-center gap-2 h-[230px]">
          <div className="1/2">
            <img src={img} className="h-24 w-64 object-cover rounded" alt="" />
          </div>
          <div className="1/2 text-center">
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="text-justify text-sm text-gray-500">{description}</p>
          </div>
        </div>
      </a>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-[700px] w-full flex-row items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
}
