import Introduction from "@/components/introduction";
import Me from "@/components/me";
import ThingsIveBuilt from "@/components/thingsivebuilt";
import ProjectDescription1 from "@/components/ProjectDescription1";
import ProjectDescription2 from "@/components/ProjectDescription2";

export default function Home() {
  return (
    <div>
      <Introduction />
      <Me />
      <ThingsIveBuilt />
      <ProjectDescription1 />
      <ProjectDescription2 />
    </div>
  );
}
