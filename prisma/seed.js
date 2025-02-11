import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.project.create({
    data: {
      id: "ef8f1e4a-21cf-4f6d-9871-8b2f2306e5b9",
      title: "EClinic",
      description:
        "This is a project about online polyclinic management application",
      ref: "https://github.com/",
      repository: "lenhatquynh/EClinic",
      label: "GitHub",
      url: "",
      date: null,
      published: false,
      isPublic: false,
      intro:
        "This is a project about online polyclinic management application that allows users to easily book an appointment with a doctor or make an online health consultation via live chat or video call. The system also provides a variety of different healthcare packages to serve users. Besides, It also have health forums and blogs to share information and answer questions about health issues for free between patients and doctors.",
      views: 0,
    },
  });
  await prisma.project.create({
    data: {
      id: "b5d5fc3e-7b83-4c92-b4e7-4578c5e5ff08",
      title: "portfolio",
      description: "My personal website that logs my travel",
      ref: "https://github.com/",
      repository: "lenhatquynh/portfolio",
      label: "GitHub",
      url: "https://quynhle.id.vn",
      date: new Date('2024-03-10'),
      published: true,
      isPublic: false,
      intro:
        "Like others, here is my public project gallery where I show up works/projects. But I am not good at design so this site based on chronark.com. You guys can checkout his repo at https://github.com/chronark/chronark.com",
      views: 0,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
