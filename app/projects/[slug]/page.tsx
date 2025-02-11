import { notFound } from "next/navigation";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Project } from "@/app/models/project";

export const revalidate = 60;

type Props = {
  params: {
    id: string;
  };
};

export default async function PostPage({ params }: Props) {
  const id = params?.id;

  const response = await fetch(`/api/counter/${id}`);
  const project: Project = await response.json();

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} views={project.views} />
      <ReportView id={project.id} />

      <article
        className="article"
        dangerouslySetInnerHTML={{ __html: project.intro }}
      ></article>
    </div>
  );
}
