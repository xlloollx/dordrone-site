# DORDRONE – Déploiement Netlify (TS)

Ce projet est une version prête à déployer du site **DORDRONE** avec Vite, React et Tailwind CSS, entièrement typé en TypeScript. Il inclut une configuration pour Netlify et un formulaire de contact fonctionnel.

## Installation locale

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Tests

```bash
npm run test
```

## Déploiement Netlify

1. Connectez votre dépôt GitHub à Netlify.
2. Dans les paramètres de Netlify, définissez la commande de build sur `npm run build` et le dossier de publication sur `dist`.
3. Le formulaire React fonctionne grâce au **formulaire caché** dans `index.html` et aux attributs `data-netlify` du composant `<form>` dans `App.tsx`.

## Données de contact

- **Email** : dordrone2446@gmail.com  
- **Tel/WhatsApp** : +33 6 88 60 82 22