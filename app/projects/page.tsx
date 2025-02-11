import { Card } from "@/components/Card";
import { Navigation } from "@/components/Nav";
import { Article } from "./article";
import Link from "next/link";
import { Eye } from "lucide-react";
import { Project } from "../models/project";

export default async function Projects() {
  const response = await fetch(`/api/counter`);
  const data: Project[] = await response.json();

  const top1 = data.find((x) => x.title === "portfolio")!;
  const top2 = data.find((x) => x.title === "EClinic")!;
  const projects = data
    .filter((x) => x.published)
    .filter((x) => x.title !== top1.title && x.title !== top2.title)
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from my team work and some are on my own
            time.
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/projects/${top1.id}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {top1.date ? (
                      <time dateTime={new Date(top1.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(top1.date))}
                      </time>
                    ) : (
                      <span>COMING SOON</span>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      top1.views ?? 0
                    )}
                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {top1.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {top1.description}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[top2].map((project) => (
              <Card key={project.id}>
                <Article project={project} views={project.views ?? 0} />
              </Card>
            ))}
          </div>
        </div>

        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="space-y-4">
            {projects
              .filter((_, i) => i % 3 === 0)
              .map((project, idx) => (
                <Card key={project.id}>
                  <Article
                    key={idx}
                    project={project}
                    views={project.views ?? 0}
                  />
                </Card>
              ))}
          </div>
          <div className="space-y-4">
            {projects
              .filter((_, i) => i % 3 === 1)
              .map((project, idx) => (
                <Card key={project.id}>
                  <Article
                    key={idx}
                    project={project}
                    views={project.views ?? 0}
                  />
                </Card>
              ))}
          </div>
          <div className="space-y-4">
            {projects
              .filter((_, i) => i % 3 === 2)
              .map((project, idx) => (
                <Card key={project.id}>
                  <Article
                    key={idx}
                    project={project}
                    views={project.views ?? 0}
                  />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
