-- CreateTable
CREATE TABLE "project" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ref" TEXT,
    "repository" TEXT,
    "label" TEXT,
    "url" TEXT,
    "date" TIMESTAMP(3),
    "published" BOOLEAN NOT NULL,
    "isPublic" BOOLEAN NOT NULL,
    "intro" TEXT NOT NULL,
    "views" INTEGER NOT NULL,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);
