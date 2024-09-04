# Minimal reproduction of loss of client state when `router.refresh()` is called

To reproduce the error:

```sh
# Install dependencies
npm ci

# Run the server
npm run dev

# Open http://localhost:8080 and follow the instructions
```

## What is the bug?

If you have a `loading.jsx`, the first time the page calls `router.refresh()`, all client state is lost. Subsequent calls to `router.refresh()` does not clear the client state.

If you downgrade `next` to `14.2.0-canary.23` or earlier, the bug is not present. The bug is still present in the most recent Release Candidate for `next` 15 at the time of writing.
