<!-- BEGIN CONTEXTOS -->
## ContextOS — read this before opening files

This project is served by ContextOS at **http://senior-developer-cv.localhost:7420**. It answers "where does this
change belong, and what does it break?" from the dependency graph, so you do not
have to read the repository to find out.

**Start every task here, not with a file search:**

```bash
curl -s http://senior-developer-cv.localhost:7420/api/context                      # what this project is, its rules, the workflow
curl -s "http://senior-developer-cv.localhost:7420/api/context/health?view=findings"  # is this graph sound?
curl -s "http://senior-developer-cv.localhost:7420/api/context/intent?q=<what you are about to do>"
curl -s http://senior-developer-cv.localhost:7420/api/context/package/<name>
```

0. **Check the graph is sound** — `/api/context/health?view=findings` lists what is
   structurally wrong with this project. If it reports errors, the counts below are
   derived from bad input; say so rather than quoting them. A few hundred tokens.
1. **Locate** — `/api/context/intent?q=…` returns ranked candidate packages with
   the reason each matched. Use it instead of grepping.
2. **Read the package** — `/api/context/package/<name>` gives its path, public
   entry points, dependencies, dependents and exact blast radius.
3. **Check before importing** — `POST /api/context/policy-check` with
   `{"source":"…","target":"…"}` before writing any new cross-package import.
4. **Reuse what is known** — `/api/context/knowledge` carries this project's
   accumulated rules and skills. Add to it when you learn something durable.

The full endpoint list, the current package and edge counts, and an explicit
`notWired` array naming what this surface does *not* do are all in
`GET /api/context`. Read that rather than guessing.

If the service is not reachable, start it with `contextos` in `jack-3d-creator-portfolio`
and continue; do not silently fall back to reading the whole tree.
<!-- END CONTEXTOS -->
