import coffeeDelivery from "../assets/projects/coffee-delivery.webp";
import icook from "../assets/projects/icook.webp";
import unisinosGroups from "../assets/projects/unisinos-groups.webp";
import igniteShop from "../assets/projects/ignite-shop.webp";
import bestPrice from "../assets/projects/best-price.webp";
import imcCalculator from "../assets/projects/imc-calculator.webp";
import digitalMenu from "../assets/projects/digital-menu.webp";
import savepass from "../assets/projects/savepass.webp";
import reduxPlayer from "../assets/projects/redux-player.webp";

// Ordered by relevance: the first ones are shown before "show all".
// `platform` drives the Web / Mobile filter.
export const projects = [
  {
    id: "icook",
    name: "iCook",
    image: icook,
    platform: "web",
    description: {
      en: "My college capstone project: a recipe platform where people share, search and save cooking recipes.",
      pt: "Meu TCC da faculdade: uma plataforma de receitas onde as pessoas compartilham, buscam e salvam receitas culinárias.",
    },
    tech: ["typescript", "react", "vite", "reactRouter", "styledComponents", "axios"],
    previewLink: "https://icook-five.vercel.app/",
    repositoryLink: "https://github.com/bBraian/iCook",
  },
  {
    id: "digital-menu",
    name: "Digital Menu",
    image: digitalMenu,
    platform: "web",
    description: {
      en: "A digital menu where business owners create and update their products, and customers browse and order via WhatsApp.",
      pt: "Cardápio digital onde o lojista cria e atualiza seus produtos, e o cliente navega pelo cardápio e faz o pedido pelo WhatsApp.",
    },
    tech: ["javascript", "react", "vite", "axios"],
    previewLink: "https://digital-menu-seven.vercel.app/",
    repositoryLink: "https://github.com/bBraian/digital-menu",
  },
  {
    id: "savepass",
    name: "SavePass",
    image: savepass,
    platform: "mobile",
    description: {
      en: "Password manager app published on Google Play. Unlock with your fingerprint (when available) or a master password.",
      pt: "App gerenciador de senhas publicado na Google Play. Desbloqueio por digital (quando disponível) ou por uma senha mestra.",
    },
    tech: ["javascript", "react", "expo"],
    previewLink: "https://play.google.com/store/apps/details?id=com.bbraaian.savepass",
    repositoryLink: "https://github.com/bBraian/savepass-app",
  },
  {
    id: "ignite-shop",
    name: "Ignite Shop",
    image: igniteShop,
    platform: "web",
    description: {
      en: "E-commerce built with Next.js using SSR/SSG and Stripe checkout.",
      pt: "E-commerce feito com Next.js usando SSR/SSG e checkout com Stripe.",
    },
    tech: ["typescript", "next", "react", "stitches", "stripe", "axios"],
    previewLink: "https://ignite-shop-hazel.vercel.app/",
    repositoryLink: "https://github.com/bBraian/ignite_shop",
  },
  {
    id: "coffee-delivery",
    name: "Coffee Delivery",
    image: coffeeDelivery,
    platform: "web",
    description: {
      en: "Coffee shop storefront with a shopping cart and delivery checkout flow.",
      pt: "Loja de cafés com carrinho de compras e fluxo de checkout para entrega.",
    },
    tech: ["javascript", "react", "vite", "reactRouter"],
    previewLink: "https://coffee-delivery-bbraian.vercel.app/",
    repositoryLink: "https://github.com/bBraian/coffee-delivery",
  },
  {
    id: "redux-player",
    name: "Redux Player",
    image: reduxPlayer,
    platform: "web",
    description: {
      en: "Course player that explores global state management with Redux and Zustand.",
      pt: "Player de cursos que explora gerenciamento de estado global com Redux e Zustand.",
    },
    tech: ["react", "redux", "vite", "tailwind", "axios"],
    previewLink: "https://redux-video-player-ecru.vercel.app/",
    repositoryLink: "https://github.com/bBraian/redux-video-player",
  },
  {
    id: "best-price",
    name: "Best Price",
    image: bestPrice,
    platform: "mobile",
    description: {
      en: "Mobile app that compares products by size and price to show which one is the best deal.",
      pt: "App mobile que compara produtos por tamanho e preço para mostrar qual tem o melhor custo-benefício.",
    },
    tech: ["javascript", "react", "expo"],
    repositoryLink: "https://github.com/bBraian/best-worth",
  },
  {
    id: "imc-calculator",
    name: "BMI Calculator",
    image: imcCalculator,
    platform: "mobile",
    description: {
      en: "My first mobile app, published on Google Play: a body mass index (BMI) calculator.",
      pt: "Meu primeiro app mobile, publicado na Google Play: uma calculadora de IMC.",
    },
    tech: ["javascript", "react", "expo"],
    previewLink: "https://play.google.com/store/apps/details?id=com.calculadora.IMC",
    repositoryLink: "https://github.com/bBraian/IMC_app",
  },
  {
    id: "unisinos-groups",
    name: "Unisinos Groups",
    image: unisinosGroups,
    platform: "web",
    description: {
      en: "A hub that gathers the WhatsApp groups of every class at my college, so students find them in one place.",
      pt: "Um hub que reúne os grupos de WhatsApp de cada cadeira da faculdade, para os alunos encontrarem tudo em um só lugar.",
    },
    tech: ["javascript", "react"],
    previewLink: "https://unisinos-groups.vercel.app/",
    repositoryLink: "https://github.com/bBraian/unisinos-groups",
  },
];
