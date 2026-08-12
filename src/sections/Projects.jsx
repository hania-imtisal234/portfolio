import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';
import { featuredProjects, sideProjects } from '../constants/index';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const domainOf = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

const Projects = () => {
  return (
    <section id="projects" className="w-full py-14 px-6 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6"
        >
          Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-5 rounded-2xl border border-gray-200 hover:border-gray-400 hover:shadow-sm transition-all flex flex-col"
            >
              <h3 className="text-base font-semibold text-gray-900">{project.title}</h3>
              <p className="text-xs text-gray-400">{project.category}</p>
              <p className="mt-2.5 text-sm text-gray-600 leading-relaxed flex-grow">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-xs text-gray-600 bg-gray-50 border border-gray-200 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:gap-2.5 transition-all w-fit"
              >
                {domainOf(project.url)}
                <FaArrowUpRightFromSquare size={11} className="text-gray-400 group-hover:text-gray-700 transition-colors" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-8 pt-8 border-t border-gray-100"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">Other projects</h3>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
            {sideProjects.map((project) => (
              <a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2 py-1"
              >
                <FaGithub className="mt-0.5 text-gray-400 group-hover:text-gray-700 transition-colors shrink-0" size={14} />
                <span className="text-sm">
                  <span className="text-gray-900 font-medium group-hover:underline">{project.title}</span>
                  <span className="text-gray-500"> — {project.description}</span>
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
