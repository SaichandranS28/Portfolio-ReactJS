import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "javascript",
  "react",
  "html5",
  "css3",
  "firebase",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "bootstrap",
  "python",
  "c",
  "java",
  "anaconda",
  "mysql",
  "oracle",
  "mongodb",
  "mongoose",
  "adobe",
  "android",
  "amazonaws",
  "postgresql",
  "gitlab",
  "androidstudio",
  "typescript",
  "express",
  "nodedotjs",
  "nextdotjs",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex size-full rounded-full max-w-lg items-center justify-center overflow-hidden bg-white px-10 pb-5 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
