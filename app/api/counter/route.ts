import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const method = req.method;

  try {
    switch (method) {
      case "GET":
        if (id) {
          // If ID is provided, find the specific project
          if (typeof id !== "string") {
            return res.status(400).json({ message: "Invalid ID" });
          }

          const project = await prisma.project.findUnique({
            where: { id },
          });

          if (project) {
            return res.status(200).json({ views: project.views });
          } else {
            return res.status(404).json({ message: "Project not found" });
          }
        } else {
          // If no ID is provided, return a list of projects
          const projects = await prisma.project.findMany();
          return res.status(200).json(projects);
        }

      case "POST":
        if (typeof id !== "string") {
          return res.status(400).json({ message: "Invalid ID" });
        }

        const updatedProject = await prisma.project.update({
          where: { id },
          data: {
            views: {
              increment: 1,
            },
          },
        });

        return res.status(200).json(updatedProject);

      default:
        return res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    console.error("Unexpected error:", error); // Log the error for debugging
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
