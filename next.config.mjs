/** @type {import('next').NextConfig} */
const nextConfig = {
  // Indique à Vercel d'ignorer les erreurs ESLint pendant le build pour éviter les blocages inutiles
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Configuration des images pour un environnement statique ou Vercel
  images: {
    unoptimized: true,
  },

  // Ajoute un slash à la fin des URLs (ex: /bts/) pour une meilleure compatibilité SEO
  trailingSlash: true,

  // React Strict Mode pour aider à identifier les problèmes potentiels (recommandé)
  reactStrictMode: true,
};

export default nextConfig;