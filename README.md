# Pedro Lucena's Portfolio
https://pedrolucena.vercel.app/

![portfolio demo](https://user-images.githubusercontent.com/40894497/187774626-91b2361b-9174-45af-b9c1-a410bdf85076.jpg)

## Resume

The resume sources live in `public/resume/`:

- `resume-en.html` — English
- `resume-pt-br.html` — Portuguese (pt-BR)

Both are rendered to PDF with headless Chromium, which produces the same output as
printing from the browser (`CTRL + P`). The `@page` rules inside each HTML file define
the paper size and margins.

```sh
bun run resume:pdf
```

This generates `public/resume-en.pdf` and `public/resume-pt-br.pdf`, and runs
automatically on commit (via the `pre-commit` hook) whenever a resume HTML file changes.
The site's `resume` link opens the English PDF in a new tab.
