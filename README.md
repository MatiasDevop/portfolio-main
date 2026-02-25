# Refactoring

-[x] Update all dependencies to the latest versions.
  - Codemods for Nextjs / Tailwind / React / etc. //Look in Next docs to upgrade v16
  - tailwind 3 -> 4 // looks for codemods 
-[x] Clean up unsed dependencies and code.
  - `Knip` for finding unused code paths
-[x] Move to Biome for formatting and linting.
  - Delete eslint

- [x] Move to pnpm for package management.
  - Delete package-lock.json and node_modules
  - Add pnpm-lock.yaml
  - Update all scripts to use pnpm instead of npm

## Code Organization
- Move all components to a `components` directory.
- Move out the data code from components to a `data` directory.


## Style

- Move all inline styles to tailwind classes.
- Put the export lines on the component itselgf, not at the bottom of the file.