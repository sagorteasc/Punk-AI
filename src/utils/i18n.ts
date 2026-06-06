import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,

    fallbackLng: "en",
    supportedLngs: ["en", "fr-CA"],

    resources: {
      en: {
        translation: {
          // Navbar
          nav: {
            useCases: "Use Cases",
            technology: "Technology",
            pricing: "Pricing",
          },
          brandTagline: "Identity resolution powered by AI",
          signUp: "SIGN UP",

          // Sell Prompt section
          sellPrompt: {
            title: "Sell With a Prompt",
            description:
              "Punk is the first multi-agent system built for identity resolution at scale, targeting individuals rather than broad audiences. Describe your ideal customer in natural language, and Punk finds them, runs your ads to them, and tracks results. All from one place.",
          },

          video: {
            title: "Introducing Punk",
            emailPlaceholder: "Enter Email Address",
            cta: "GET EARLY ACCESS",
          },

          // Watch Punk section
          punkWork: {
            title: "Watch Punk Work",
            description:
              "See how Punk deterministically targets individuals across all six Meta campaign objectives.",
          },

          tabs: {
            awareness: "Awareness",
            traffic: "Traffic",
            engagement: "Engagement",
            leads: "Leads",
            appPromotion: "App Promotion",
            sales: "Sales",
          },

          // Stop Guessing section
          stopGuessing: {
            title: "Stop Guessing, Start Knowing",
            description:
              "Punk crawls through the entire digital ecosystem for patterns that lead to your customer description, finds those people, and sends your ads directly to them.",
          },

          // Footer
          footer: {
            metaTitle: "Meta Approved Safe Workflow",
            metaDescription:
              "We use Meta’s official approved Developer App. One-time secure connection. No Ads Manager access ever needed.",

            usaTitle: "USA Privacy Compliant",
            usaDescription:
              "Built to meet CCPA/CPRA and 19+ state privacy laws. Precise location data is handled as sensitive information with full user control.",

            canadaTitle: "Canada Privacy Compliant",
            canadaDescription:
              "Fully compliant with federal PIPEDA and provincial laws. Location data is treated as sensitive and requires your explicit approval.",

            privacyPolicy: "Privacy Policy",
            termsOfService: "Terms of Service",
            faq: "FAQ",
          },

          // Routes
          routes: {
            badge: "Under Development",
            title: "Coming Soon",
            description:
              "We're crafting something special behind the scenes. This experience is currently being built and will be available in a future update.",
            returnHome: "RETURN HOME",
          },

          // Not-Found page
          notFound: {
            description:
              "The page you're looking for doesn't exist, was moved, or never made it into production.",
            returnHome: "RETURN HOME",
          },

          // Loading page
          loading: {
            title: "Loading",
            subtitle: "Preparing Experience",
          },
        },
      },

      "fr-CA": {
        translation: {
          // Navbar
          nav: {
            useCases: "Cas d'utilisation",
            technology: "Technologie",
            pricing: "Tarification",
          },
          brandTagline: "Résolution d'identité propulsée par l'IA",
          signUp: "S'INSCRIRE",

          // Sell Prompt section
          sellPrompt: {
            title: "Vendez avec une invite",
            description:
              "Punk est le premier système multi-agents conçu pour la résolution d'identité à grande échelle, ciblant les individus plutôt que les audiences générales. Décrivez votre client idéal en langage naturel, et Punk le trouve, diffuse vos annonces auprès de lui et suit les résultats. Le tout depuis une seule plateforme.",
          },

          video: {
            title: "Présentation de Punk",
            emailPlaceholder: "Entrez votre adresse courriel",
            cta: "OBTENIR UN ACCÈS ANTICIPÉ",
          },

          // Watch Punk section
          punkWork: {
            title: "Découvrez Punk en action",
            description:
              "Découvrez comment Punk cible de manière déterministe des individus à travers les six objectifs de campagne Meta.",
          },

          tabs: {
            awareness: "Notoriété",
            traffic: "Trafic",
            engagement: "Engagement",
            leads: "Prospects",
            appPromotion: "Promotion d'application",
            sales: "Ventes",
          },

          // Stop Guessing section
          stopGuessing: {
            title: "Arrêtez de deviner, commencez à savoir",
            description:
              "Punk analyse l’ensemble de l’écosystème numérique à la recherche de modèles correspondant à la description de votre client idéal, identifie ces personnes et leur diffuse directement vos publicités.",
          },

          // Footer
          footer: {
            metaTitle: "Processus sécurisé approuvé par Meta",
            metaDescription:
              "Nous utilisons l’application développeur officielle approuvée par Meta. Connexion sécurisée unique. Aucun accès au Gestionnaire de publicités n’est requis.",

            usaTitle: "USA Conforme aux normes de confidentialité",
            usaDescription:
              "Conçu pour respecter la CCPA/CPRA ainsi que plus de 19 lois étatiques sur la confidentialité. Les données de localisation précises sont traitées comme des renseignements sensibles avec un contrôle complet de l’utilisateur.",

            canadaTitle: "Canada Conforme aux normes de confidentialité",
            canadaDescription:
              "Entièrement conforme à la LPRPDE (PIPEDA) ainsi qu’aux lois provinciales applicables. Les données de localisation sont considérées comme sensibles et nécessitent votre consentement explicite.",

            privacyPolicy: "Politique de confidentialité",
            termsOfService: "Conditions d’utilisation",
            faq: "FAQ",
          },

          // Routes
          routes: {
            badge: "En développement",
            title: "Bientôt disponible",
            description:
              "Nous préparons quelque chose de spécial en coulisses. Cette expérience est actuellement en cours de développement et sera offerte dans une prochaine mise à jour.",
            returnHome: "RETOUR À L'ACCUEIL",
          },

          // Not-Found page
          notFound: {
            description:
              "La page que vous recherchez n'existe pas, a été déplacée ou n'a jamais été mise en production.",
            returnHome: "RETOUR À L'ACCUEIL",
          },

          // Loading page
          loading: {
            title: "Chargement",
            subtitle: "Préparation de l'expérience",
          },
        },
      },
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
