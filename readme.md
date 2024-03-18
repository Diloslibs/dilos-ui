# First Installation

To achieve the best performance, we recommend using pnpm.

```bash
pnpm install
```

If you don't have pnpm installed, you can install it using npm:

```bash
npm install -g pnpm
```

# Running Docs

Once you have installed the dependencies, you can run the documentation using the following command:
  
```bash
pnpm serve
```

# Tech
- Lerna - Monorepo management
- Docusaurus - Documentation
- TailwindCSS - Styling
- TypeScript - Language

# Folder Structure
```
+-- node_modules
+-- packages
|   +-- docs
|   |   +-- node_modules
|   |   +-- docusaurus.config.js
|   |   +-- package.json
|   |   +-- tailwind.config.json
|   +-- libs
|   |   +-- node_modules
|   |   +-- tsconfig.json
|   |   +-- package.json
+-- .gitignore
+-- lerna.json
+-- package.json
```

In this repo we have two different project, one for documentation and the other one is used to library for dynamic component (require JS).

We separate two purposes, here's some goals to action and points to note:

Docs:

- Primary this our main documentation's web, 
the web will served and everyone can read the documentation.
Libs:

Where components lies in.

- Component's styling using TailwindCSS.
- Component's behaviour that's require Javascript to act, such as we could hide or show content inside accordion.
- Published to NPM
