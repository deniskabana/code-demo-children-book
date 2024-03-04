[← Back to root README](../../README.md)

---

## Languages (i18n translations)

We use `i18n` and `react-1i8n` to provide multi-language support. The `src/languages/translations` folder contains all the translations for the project.

> **TODO:** Upgrade to `next-i18next` for better SSR support.

There is a provided helper called `tKeys` that you can use to access nested translations.

```tsx
import { tKeys } from '@/languages'

export const MyComponent = () => {
  const { t } = useTranslation()
  return <h1>{t(tKeys.homepage.title)}</h1>
}
```
