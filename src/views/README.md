[← Back to root README](?path=/&version=GBmain&anchor=learn-more)

---

## App views

Previously these were called "screens". The point of a view is to contain any necessary logic (like accessing APIs, redux state, custom hooks, etc.) and should be self-contained.

### Usage

Import your view to `src/app/*.ts` (route file) and render that. This is to help with potential future migration and separation of concerns. The route file should only contain routing logic and the view should contain all other necessary logic.
