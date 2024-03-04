[← Back to root README](?path=/&version=GBmain&anchor=learn-more)

---

## API usage

We use [Axios](https://axios-http.com/) AND [TanStack Query](https://tanstack.com/query/v3/) (formerly react-query) for making API calls.

### Axios usage

Create an axios instance to set headers, base URL, timeouts, etc. correctly for the project.

**You can use axios without react-query, however, it is recommended to use react-query for client-side API calls.**

```tsx
export const messagesApi = {
  /**
   *  - Get all messages
   */
  getMessagesList: async ({ sort }: { sort: 'asc' | 'desc' }) =>
    axiosInstances.get<IMessage[]>(`${API_ROUTES.MESSAGES}/?sort=${sort}`),
}
```

### TanStack Query + Axios usage

React query makes API calls simple, handles error and success states, loading and uses caching to minimize API calls. It reduces the need for Redux for data fetching.

Define Query Keys in `src/api/queryKeys.ts` and use them in the API calls.

Either use react-query in-place (recommended for small projects) or create a custom hook for each API call (recommended for medium-to-large projects).

```tsx
const { data: messagesData } = useQuery(
  [QueryKeys.Messages],
  () => messagesApi.getMessagesList({ sort: 'asc' }),
  {
    onError: (error) => console.error(error),
  },
)

// or

const { isError, isLoading, data, error } = useQuery(
  [QueryKeys.Messages], // query key
  messagesApi.getMessagesList, // axios api call
)
```
