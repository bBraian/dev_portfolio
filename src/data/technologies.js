import html from "../assets/devicon/html.svg";
import css from "../assets/devicon/css.svg";
import javascript from "../assets/devicon/js.svg";
import typescript from "../assets/devicon/ts.svg";
import react from "../assets/devicon/react.svg";
import next from "../assets/devicon/next.svg";
import vue from "../assets/devicon/vuejs.svg";
import vite from "../assets/devicon/vite.svg";
import expo from "../assets/devicon/expo.svg";
import tailwind from "../assets/devicon/tailwind.svg";
import bootstrap from "../assets/devicon/bootstrap.svg";
import reactRouter from "../assets/devicon/react-router-dom.svg";
import styledComponents from "../assets/devicon/styled-components.svg";
import stitches from "../assets/devicon/stitches.svg";
import radix from "../assets/devicon/radix.svg";
import redux from "../assets/devicon/redux.svg";
import zod from "../assets/devicon/zod.svg";
import axios from "../assets/devicon/axios.png";
import stripe from "../assets/devicon/stripe.svg";
import node from "../assets/devicon/nodejs.svg";
import nestjs from "../assets/devicon/nestjs.svg";
import php from "../assets/devicon/php.svg";
import laravel from "../assets/devicon/laravel.svg";
import mysql from "../assets/devicon/mysql.svg";
import postgresql from "../assets/devicon/postgresql.svg";
import git from "../assets/devicon/git.svg";
import figma from "../assets/devicon/figma.svg";
import linux from "../assets/devicon/linux.svg";
import macos from "../assets/devicon/apple.svg";
import windows from "../assets/devicon/windows.svg";
import threejs from "../assets/devicon/threejs.svg";

// `darkFix` rescues logos that disappear on the dark background (black or very dark marks).
// `icon` is optional: techs without a light-weight logo render as a text-only chip.
export const technologies = {
  html: { name: "HTML", icon: html },
  css: { name: "CSS", icon: css },
  javascript: { name: "JavaScript", icon: javascript },
  typescript: { name: "TypeScript", icon: typescript },
  react: { name: "React", icon: react },
  next: { name: "Next.js", icon: next, darkFix: "dark:invert" },
  vue: { name: "Vue.js", icon: vue },
  vite: { name: "Vite", icon: vite },
  expo: { name: "Expo", icon: expo, darkFix: "dark:invert" },
  tailwind: { name: "Tailwind", icon: tailwind },
  bootstrap: { name: "Bootstrap", icon: bootstrap },
  reactRouter: { name: "React Router", icon: reactRouter },
  styledComponents: { name: "styled-components", icon: styledComponents },
  stitches: { name: "Stitches", icon: stitches },
  radix: { name: "Radix", icon: radix },
  mui: { name: "Material UI" },
  redux: { name: "Redux", icon: redux },
  zustand: { name: "Zustand" },
  threejs: { name: "Three.js", icon: threejs, darkFix: "dark:invert" },
  zod: { name: "Zod", icon: zod },
  axios: { name: "Axios", icon: axios },
  stripe: { name: "Stripe", icon: stripe, darkFix: "dark:invert" },
  node: { name: "Node.js", icon: node },
  nestjs: { name: "NestJS", icon: nestjs },
  php: { name: "PHP", icon: php },
  laravel: { name: "Laravel", icon: laravel },
  mysql: { name: "MySQL", icon: mysql, darkFix: "dark:brightness-200" },
  postgresql: { name: "PostgreSQL", icon: postgresql },
  git: { name: "Git", icon: git },
  figma: { name: "Figma", icon: figma },
  linux: { name: "Linux", icon: linux, darkFix: "dark:invert" },
  macos: { name: "macOS", icon: macos, darkFix: "dark:invert" },
  windows: { name: "Windows", icon: windows },
};

// Tech stack section, grouped so visitors can scan it by area.
export const skillGroups = [
  { key: "frontend", items: ["javascript", "typescript", "react", "vue", "next", "tailwind"] },
  { key: "backend", items: ["node", "nestjs", "php", "laravel"] },
  { key: "data", items: ["postgresql", "mysql"] },
  { key: "tools", items: ["git", "figma", "linux", "macos", "windows"] },
];
