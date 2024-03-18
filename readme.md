# First Installation

Run this command to install the dependencies, it will install the dependencies for both the documentation and the library and it's required to use PNPM as the package manager.

```bash
pnpm install
```

If you don't have pnpm installed, you can install it using npm:

```bash
npm install -g pnpm
```

# Running Apps

Once you have installed the dependencies, you can run the apps using the following command:
  
```bash
pnpm start
```

This command will run the documentation and the library at the same time.

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
|   |   +-- package.json
|   +-- libs
|   |   +-- node_modules
|   |   +-- package.json
+-- .gitignore
+-- lerna.json
+-- package.json
```

In this repo we have two different project, one for documentation and the other one is used to library for component.

We separate two purposes, here's some goals to action and points to note:

## Docs:

- Primary this our main documentation's web, 
the web will served and everyone can read the documentation.

## Libs :
Where components lies in.

- Component's styling using TailwindCSS.
- Component's behaviour that's require Javascript to act, such as we could hide or show content inside accordion.
- Publish to NPM or uploaded to CDN.
