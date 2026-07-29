'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';
import FitHeading from './FitHeading';
import { useLanguage } from '@/contexts/LanguageContext';

interface Project {
  number: string;
  category: 'client' | 'personal';
  name: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  liveUrl?: string;
}

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'client',
    name: 'DYNERS',
    col1Image1: '/projects/dyners-small2.png',
    col1Image2: '/projects/nextlevel-3.png',
    col2Image: '/projects/nextlevel-2.png',
    liveUrl: 'https://dyners-rho.vercel.app/',
  },
  {
    number: '02',
    category: 'personal',
    name: 'Senior developer website',
    col1Image1: '/projects/senior-dev-3b.png',
    col1Image2: '/projects/senior-dev-2.png',
    col2Image: '/projects/senior-dev-1.png',
  },
];

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: Project;
  index: number;
  totalCards: number;
}) {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 h-[85vh]"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        style={{
          scale,
          borderColor: 'var(--border-main)',
          background: 'var(--bg-main)',
        }}
        className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 p-4 sm:p-6 md:p-8 flex flex-col gap-6 origin-top"
      >
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="hero-heading font-black"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span
                className="uppercase tracking-widest text-xs sm:text-sm opacity-60"
                style={{ color: 'var(--text-main)' }}
              >
                {t.projects.category[project.category]}
              </span>
              <h3
                className="font-medium uppercase text-lg sm:text-2xl md:text-3xl"
                style={{ color: 'var(--text-main)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton href={project.liveUrl} />
        </div>

        <div className="flex gap-3 flex-1 min-h-0">
          <div className="flex flex-col gap-3 w-[40%]">
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden relative"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <Image
                src={project.col1Image1}
                alt={`${project.name} preview 1`}
                fill
                className="object-cover"
              />
            </div>
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden relative flex-1"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <Image
                src={project.col1Image2}
                alt={`${project.name} preview 2`}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-[60%] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden relative">
            <Image
              src={project.col2Image}
              alt={`${project.name} preview 3`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="relative rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-40 sm:pt-48 md:pt-56 pb-20 sm:pb-24 md:pb-32"
      style={{ background: 'var(--bg-main)' }}
    >
      <FadeIn delay={0} y={40} className="w-full block">
        <FitHeading
          as="h2"
          text={t.projects.heading}
          trFillK={57}
          enFillK={90}
          arFillK={81}
          capVw={18}
          minPx={48}
          maxPx={450}
          containerClassName="mb-16 sm:mb-20 md:mb-28"
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
        />
      </FadeIn>

      <div className="flex flex-col gap-10">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            totalCards={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
}
