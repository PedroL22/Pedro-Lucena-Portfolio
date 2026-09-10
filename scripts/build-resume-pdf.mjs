import { chromium } from 'playwright'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

/**
 * Renders the resume HTML files to PDF using headless Chromium.
 * This mirrors what "Print to PDF" (CTRL + P) does in the browser:
 * the @page rules inside the HTML define the paper size and margins.
 */

const RESUMES = [
  { html: 'public/resume/resume-en.html', pdf: 'public/resume-en.pdf' },
  { html: 'public/resume/resume-pt-br.html', pdf: 'public/resume-pt-br.pdf' },
]

const build = async () => {
  const browser = await chromium.launch()

  try {
    for (const { html, pdf } of RESUMES) {
      const page = await browser.newPage()

      await page.goto(pathToFileURL(resolve(html)).href, { waitUntil: 'networkidle' })
      // The Tailwind CDN compiles styles at runtime, so wait for fonts + JIT output.
      await page.evaluate(() => document.fonts.ready)
      await page.emulateMedia({ media: 'print' })

      await page.pdf({
        path: resolve(pdf),
        preferCSSPageSize: true,
        printBackground: true,
      })

      await page.close()

      console.log(`✓ ${html} → ${pdf}`)
    }
  } finally {
    await browser.close()
  }
}

await build()
