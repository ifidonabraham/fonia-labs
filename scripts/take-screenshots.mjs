import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "screenshots");

const sites = [
  { slug: "fontech",         url: "https://fontech-site.vercel.app",         shots: 7 },
  { slug: "omegaestate",     url: "https://omegaestate.homes",               shots: 6 },
  { slug: "smaid",           url: "https://smaid.vercel.app",                shots: 6 },
  { slug: "dokito",          url: "https://dokito.vercel.app",               shots: 7 },
  { slug: "seek",            url: "https://seek-beryl.vercel.app",           shots: 7 },
  { slug: "contractfeed",    url: "https://contractfeed.vercel.app",         shots: 6 },
  { slug: "stormbridge",     url: "https://stormbrigde.vercel.app",          shots: 7 },
  { slug: "complyiq",        url: "https://complyiq-gilt.vercel.app",        shots: 7 },
  { slug: "unilagfoodspots", url: "https://unilagfoodspots.vercel.app",      shots: 5 },
  { slug: "deadline-dungeon",url: "https://deadline-dungeon-phi.vercel.app", shots: 5 },
  { slug: "portfolio",       url: "https://portfolio2007.vercel.app",        shots: 3 },
];

const VIEWPORT = { width: 1280, height: 800 };
const MOBILE   = { width: 390,  height: 844 };

async function captureScrollshots(page, dir, count) {
  await page.waitForLoadState("networkidle").catch(() => {});
  await page.waitForTimeout(1500);

  const pageH = await page.evaluate(() => document.body.scrollHeight);
  const step = Math.max(Math.floor(pageH / count), VIEWPORT.height);

  for (let i = 0; i < count; i++) {
    const scrollY = Math.min(i * step, pageH - VIEWPORT.height);
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), scrollY);
    await page.waitForTimeout(400);
    await page.screenshot({ path: join(dir, `shot-${i + 1}.png`), clip: { x: 0, y: 0, width: VIEWPORT.width, height: VIEWPORT.height } });
  }
}

(async () => {
  const browser = await chromium.launch();

  for (const site of sites) {
    const dir = join(OUT, site.slug);
    mkdirSync(dir, { recursive: true });
    console.log(`\n📸  ${site.slug} → ${site.url}`);

    try {
      // Desktop shots
      const ctx = await browser.newContext({ viewport: VIEWPORT });
      const page = await ctx.newPage();
      await page.goto(site.url, { waitUntil: "domcontentloaded", timeout: 30000 });
      await page.waitForLoadState("networkidle").catch(() => {});
      await page.waitForTimeout(2000);

      // main hero shot (scroll=0)
      await page.screenshot({ path: join(dir, "main.png"), clip: { x: 0, y: 0, width: VIEWPORT.width, height: VIEWPORT.height } });
      console.log(`  ✓ main.png`);

      // scroll shots
      const desktopCount = site.shots - 1; // last slot reserved for mobile
      await captureScrollshots(page, dir, desktopCount);
      console.log(`  ✓ shot-1 through shot-${desktopCount}`);
      await ctx.close();

      // Mobile shot (last slot)
      const mCtx = await browser.newContext({ viewport: MOBILE, isMobile: true });
      const mPage = await mCtx.newPage();
      await mPage.goto(site.url, { waitUntil: "domcontentloaded", timeout: 30000 });
      await mPage.waitForLoadState("networkidle").catch(() => {});
      await mPage.waitForTimeout(1500);
      await mPage.screenshot({ path: join(dir, `shot-${site.shots}.png`), clip: { x: 0, y: 0, width: MOBILE.width, height: MOBILE.height } });
      console.log(`  ✓ shot-${site.shots}.png (mobile)`);
      await mCtx.close();

    } catch (err) {
      console.error(`  ✗ ${site.slug}: ${err.message}`);
    }
  }

  await browser.close();
  console.log("\n✅  All screenshots done → public/screenshots/");
})();
