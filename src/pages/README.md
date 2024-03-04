[← Back to root README](?path=/&version=GBmain&anchor=learn-more)

---

## Next.js /pages filename based router

Full documentation can be found in Next.js docs - [Routing](https://nextjs.org/docs/pages/building-your-application/routing).

### Routing basics

Next.js 13 introduced an app router that we can't use yet:

- https://github.com/emotion-js/emotion/issues/2978
- https://github.com/emotion-js/emotion/issues/2928

This means this architecture currently does not provide support to the `src/app/` routing, server side React components. Routing is instead done by filenames within the `src/pages` folder.

Examples:

```
// Usage examples
src/pages/index.tsx => /
src/pages/about.tsx => /about
src/pages/dashboard/user-profile.tsx => /dashboard/user-profile
src/pages/blog/[blogId].tsx => /blog/:blogId
```

### Important note

**Keep the contents of route files minimal and prefer moving the logic to `src/views`. This kind of decoupling makes debugging and maintaining easier and will allow for easier migration to a different framework in the future.**
