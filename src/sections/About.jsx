import React from 'react';
import { motion } from 'framer-motion';
import { skillGroups, experience, education } from '../constants/index';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <>
      {/* Skills */}
      <section id="about" className="w-full py-16 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-8"
          >
            Skills
          </motion.h2>

          <div className="space-y-6">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.category}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6"
              >
                <span className="text-sm font-medium text-gray-500 sm:w-40 shrink-0">{group.category}</span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="w-full py-16 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-8"
          >
            Experience
          </motion.h2>

          <div className="space-y-10">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                  <h3 className="text-base font-semibold text-gray-900">
                    {job.role} &middot;{' '}
                    {job.companyUrl ? (
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 underline decoration-gray-300 hover:decoration-gray-900"
                      >
                        {job.company}
                      </a>
                    ) : (
                      <span>{job.company}</span>
                    )}
                  </h3>
                  <span className="text-sm text-gray-400 whitespace-nowrap">
                    {job.period}
                    {job.location ? ` · ${job.location}` : ''}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {job.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-sm text-gray-600 leading-relaxed pl-4 relative">
                      <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-gray-300" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-12 pt-10 border-t border-gray-100"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Education</h3>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <p className="text-base font-semibold text-gray-900">{education.degree}</p>
                <p className="text-sm text-gray-600">{education.school}</p>
              </div>
              <span className="text-sm text-gray-400">{education.location}</span>
            </div>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">{education.coursework}</p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
