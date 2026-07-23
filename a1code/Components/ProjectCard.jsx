"use client";

import { useMemo, useState } from "react";
import projects from "../app/data/projectData";
import Image from "next/image";
import Link from "next/link";
import { assets } from "../Assets/assests";
import { Calendar1Icon, User2Icon } from "lucide-react";

const categories = ["All", "Ecommerce", "SaaS", "Management", "Mobile", "Web"];

const handlePage = (id) => {
  alert("test" + id);
};

const sortedProjects = [...projects].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

const recentPosts = sortedProjects.slice(0, 5).map((post) => ({
  ...post,
  image: assets.i1,
}));

const ProjectSidebar = ({ activeCategory, changeCategory, isLatest }) => (
  <div className="space-y-6">
    {!isLatest && (
      <div className="bg-white p-4 shadow-sm">
        <div className="mb-4 border-l-4 border-l-blue-600">
          <h2 className="ml-2 text-xl font-semibold">CATEGORIES</h2>
        </div>
        <div className="grid gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => changeCategory(category)}
              className={`w-full rounded-md border px-4 py-2 text-left text-sm font-semibold transition ${
                activeCategory === category
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    )}

    <div className="bg-white p-4 shadow-sm">
      <div className="mb-4 border-l-4 border-l-blue-600">
        <h2 className="ml-2 text-xl font-semibold">SEARCH</h2>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row lg:flex-col xl:flex-row">
        <input
          type="text"
          placeholder="Search..."
          className="min-w-0 flex-1 rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
        />
        <button
          type="button"
          className="rounded-md bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
        >
          Search
        </button>
      </div>
    </div>

    <div className="bg-white p-4 shadow-sm">
      <div className="mb-4 border-l-4 border-l-blue-600">
        <h2 className="ml-2 text-xl font-semibold">RECENT POSTS</h2>
      </div>
      <div className="space-y-3">
        {recentPosts.map((post) => (
          <div key={`${post.name}-${post.date}`} className="flex gap-3">
            <Image
              src={post.image}
              alt={`${post.name} thumbnail`}
              className="h-20 w-24 shrink-0 object-cover"
            />
            <div>
              <h3 className="font-medium leading-5 text-blue-500 hover:underline">
                {post.name}
              </h3>
              <p className="text-sm text-blue-500">{post.seller}</p>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ProjectCard = ({ variant = "paginated", limit = 6 }) => {
  const isLatest = variant === "latest";
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const projectsPerPage = 6;

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return sortedProjects;
    return sortedProjects.filter(
      (project) => project.category === activeCategory,
    );
  }, [activeCategory]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProjects.length / projectsPerPage),
  );
  const firstProjectIndex = (currentPage - 1) * projectsPerPage;
  const visibleProjects = isLatest
    ? sortedProjects.slice(0, limit)
    : filteredProjects.slice(
        firstProjectIndex,
        firstProjectIndex + projectsPerPage,
      );

  const changeCategory = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
    setIsSidebarOpen(false);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-6">
      {!isLatest && (
        <div className="mb-4 flex items-center justify-between gap-3 lg:hidden">
          <p className="text-sm font-semibold text-slate-600">
            Showing {activeCategory} projects
          </p>
          <button
            type="button"
            onClick={() => setIsSidebarOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-blue-600 text-white shadow-sm"
            aria-label="Open sidebar"
          >
            <span className="flex w-5 flex-col gap-1" aria-hidden="true">
              <span className="h-0.5 rounded bg-white" />
              <span className="h-0.5 rounded bg-white" />
              <span className="h-0.5 rounded bg-white" />
            </span>
          </button>
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-8">
          {visibleProjects.map((project) => (
            <article
              key={`${project.name}-${project.date}`}
              className="flex w-full flex-col gap-4 bg-white p-4 shadow-sm sm:flex-row"
            >
              <div className="relative h-48 w-full shrink-0 overflow-hidden bg-slate-100 sm:h-36 sm:w-48">
                <Image
                  src={project.image}
                  fill
                  sizes="(max-width: 640px) 100vw, 192px"
                  className="object-cover"
                  alt={`${project.name} preview`}
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col">
                <p className="mb-1 text-sm font-bold uppercase text-blue-500">
                  {project.category}
                </p>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <Link href={`/projects/${project.id}`}
                    className="text-xl font-bold leading-7 text-blue-600 sm:text-2xl cursor-pointer"
                    onClick={() => handlePage(project.id)}
                  >
                    {project.name}
                  </Link>
                  <p className="shrink-0 font-bold text-blue-600">
                    {project.price}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700 sm:text-base">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm">
                  <User2Icon size={18} className="text-blue-500" />
                  <p className="font-medium text-blue-500">{project.seller}</p>
                  <Calendar1Icon size={18} className="text-blue-500" />
                  <p className="text-slate-500">{project.date}</p>
                </div>
                <button className="mt-4 w-full rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600 sm:ml-auto sm:w-auto">
                  Read More
                </button>
              </div>
            </article>
          ))}

          {!isLatest && (
            <div className="flex flex-col items-center justify-between gap-4 bg-white p-4 shadow-sm sm:flex-row">
              <p className="text-sm font-medium text-slate-600">
                Page {currentPage} of {totalPages} - Showing{" "}
                {visibleProjects.length} projects
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() =>
                    setCurrentPage((page) => Math.max(1, page - 1))
                  }
                  className="rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Previous
                </button>
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1,
                ).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={`h-10 w-10 rounded-md text-sm font-bold transition ${
                      currentPage === page
                        ? "bg-blue-600 text-white"
                        : "border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-700"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() =>
                    setCurrentPage((page) => Math.min(totalPages, page + 1))
                  }
                  className="rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {isLatest && (
            <div className="flex justify-center pt-4">
              <Link
                href="/projects"
                className="rounded-md bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
              >
                View all projects
              </Link>
            </div>
          )}
        </div>

        <aside className="hidden lg:col-span-4 lg:block">
          <ProjectSidebar
            activeCategory={activeCategory}
            changeCategory={changeCategory}
            isLatest={isLatest}
          />
        </aside>
      </div>

      {!isLatest && isSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/50"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close sidebar overlay"
          />
          <aside className="absolute right-0 top-0 h-full w-[min(88vw,360px)] overflow-y-auto bg-slate-50 p-4 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">Filters</h2>
              <button
                type="button"
                onClick={() => setIsSidebarOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-slate-900 text-2xl leading-none text-white"
                aria-label="Close sidebar"
              >
                <span aria-hidden="true">x</span>
              </button>
            </div>
            <ProjectSidebar
              activeCategory={activeCategory}
              changeCategory={changeCategory}
              isLatest={isLatest}
            />
          </aside>
        </div>
      )}
    </section>
  );
};

export default ProjectCard;
