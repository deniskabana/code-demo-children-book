[← Back to root README](?path=/&version=GBmain&anchor=learn-more)

---

## Composed modules

This directory contains modules that are composed of other components and modules.

### Modules vs components

For bigger blocks, composed of multiple components, you should always prefer calling your block a module. For example, a header component with a logo, navigation and search bar should be a module, not a component.

A [component](./src/components/README.md) should be a single, self-contained unit that can be used in multiple places. For example, a button component or a modal dialog.

### Subfolders

If creating a module, this is the structure you should aim for (not all files are required) is in the following example:

```bash
- src/
  - modules/
    - LoginForm/
      - LoginForm.tsx
      - styles.ts # optional
      - constants.ts # optional
      - form.ts # optional
```
