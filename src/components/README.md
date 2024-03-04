[← Back to root README](?path=/&version=GBmain&anchor=learn-more)

---

## Reusable components

This is for any components that are made re-usable throughout the project. For example, a wrapped button component or modal dialog that is used in multiple places.

### Modules vs components

For bigger blocks, composed of multiple components, you should always prefer calling your block a module. For example, a header component with a logo, navigation and search bar should be a [module](./src/modules/README.md), not a component.

A component should be a single, self-contained unit that can be used in multiple places. For example, a button component or a modal dialog.

### Subfolders

If creating a component, this is the structure you should aim for (not all files are required).

```bash
- src/
  - components/
    - Header/
      - Header.tsx
      - styles.ts # optional
      - constants.ts # optional
      - form.ts # optional
```

---

Subfolders however can be split by not just one component, but can host other sub-components as well.

```bash
- src/
  - components/
    - Header/
      - Header.tsx
      - HeaderLogo.tsx # sub-component
      - HeaderNavigation.tsx # sub-component
      - HeaderSearchBar.tsx # sub-component
      - styles.ts # optional
      - constants.ts # optional
      - form.ts # optional
```
