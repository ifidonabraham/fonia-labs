# Web Developer Interview Prep — Ifidon Abraham
### Complete Q&A Reference for Live Interviews

---

## YOUR TECH STACK ACROSS ALL PROJECTS

| Project | Frontend | Backend / DB | Other |
|---|---|---|---|
| OmegaEstate | Next.js, React, Tailwind CSS | Supabase (Postgres, Auth, Realtime, Storage) | Leaflet, Playwright, Nodemailer, Zod |
| Fonia Labs | Next.js, TypeScript, CSS Custom Properties | Static / Vercel | Custom design system |
| FonTech Site | Next.js, TypeScript, Tailwind, Framer Motion | Static / Vercel | — |
| Portfolio | Next.js, TypeScript, Three.js, Radix UI, Framer Motion | Static | react-three-fiber, next-themes |
| Seek | React + Vite, TypeScript, Radix UI, Tailwind | Supabase, axios | Recharts, react-hook-form, Zod, Vite |
| StormBridge | Next.js, TypeScript | Supabase | Zod |
| SystemGuardian | — | C# / .NET | ML layer |
| task-a-review-webapp | Vercel frontend | FastAPI, Pydantic, Uvicorn | Python, Jinja2 |
| tbot | — | Python | Telegram bot |
| complyiq | — | Python | — |

**Core stack you always reach for:**
- **Frontend:** Next.js / React, TypeScript, Tailwind CSS
- **Backend-as-a-service:** Supabase (Postgres + Auth + Realtime + Storage)
- **Forms:** react-hook-form + Zod
- **UI:** Radix UI, Lucide icons, Framer Motion / Motion
- **Deployment:** Vercel
- **Testing:** Playwright (E2E)

---

## SECTION 1 — ABOUT YOURSELF (HR ROUND)

1. Tell me about yourself as a developer.
2. How did you get into web development?
3. What are you most proud of in your portfolio?
4. Describe your development workflow from idea to deployment.
5. How do you stay up to date with new technologies?
6. What does a typical development day look like for you?
7. Have you worked in a team before? What was your role?
8. What's the hardest technical problem you've solved?
9. How do you handle it when you're stuck on a bug for hours?
10. What would you say is your biggest weakness as a developer right now?
11. Where do you see yourself in 2–3 years?
12. Why do you want a web development internship specifically?
13. Why do you want to work at this company?
14. What are you looking to learn from this internship?
15. How do you prioritise when you have multiple tasks?
16. Tell me about a project you built from scratch.
17. What's the most complex project you've worked on?
18. Have you ever missed a deadline? How did you handle it?
19. How do you receive feedback and criticism on your code?
20. Are you comfortable working with a team that uses different tools than you're used to?

---

## SECTION 2 — HTML

21. What is semantic HTML? Give examples of semantic tags.
22. What is the difference between `<div>` and `<section>`?
23. What does the `alt` attribute on an image do?
24. What is the difference between `<script>` placed in `<head>` vs end of `<body>`?
25. What is the `defer` attribute on a script tag?
26. What is a `data-*` attribute? When would you use it?
27. What is the difference between `id` and `class`?
28. What is the DOM?
29. What does `<!DOCTYPE html>` do?
30. What are void elements? Give examples.
31. What is the purpose of `<meta charset="UTF-8">`?
32. What is `<meta name="viewport" content="width=device-width, initial-scale=1">`?
33. What is the difference between block and inline elements?
34. What is an `<iframe>` and when would you use one?
35. How do you make a form accessible?
36. What is `aria-label`? When do you need it?
37. What is `tabindex`?
38. What is the difference between `<link>` and `<a>`?
39. What is `srcset` on an image?
40. What is the `<picture>` element?

---

## SECTION 3 — CSS

41. What is the CSS box model?
42. What is the difference between `margin` and `padding`?
43. What is `box-sizing: border-box`?
44. What is the difference between `position: relative`, `absolute`, `fixed`, and `sticky`?
45. What is `z-index` and when does it not work?
46. What is Flexbox? Explain the main properties.
47. What is CSS Grid? How is it different from Flexbox?
48. When would you use Grid over Flexbox?
49. What is `display: none` vs `visibility: hidden` vs `opacity: 0`?
50. What is a CSS pseudo-class? Give examples.
51. What is a CSS pseudo-element? Give examples.
52. What is CSS specificity? How is it calculated?
53. What does `!important` do? Why should you avoid it?
54. What are CSS custom properties (variables)?
55. How do media queries work?
56. What is `clamp()` in CSS?
57. What is `min()` and `max()` in CSS?
58. What is `backdrop-filter`?
59. What is the difference between `em`, `rem`, `px`, `%`, `vh`, `vw`?
60. How does `overflow: hidden` work?
61. What is a CSS transition? How does it differ from animation?
62. What is `transform: translateY(-3px)`?
63. What is `will-change` in CSS?
64. What is `aspect-ratio`?
65. What is `object-fit`?
66. How do you centre a div horizontally and vertically?
67. What is `gap` in Flexbox/Grid?
68. What is `grid-template-columns: repeat(3, 1fr)`?
69. What is `min-width` vs `max-width`?
70. How do you make a responsive design without a framework?
71. What is `@keyframes`?
72. What is `prefers-reduced-motion`?
73. What is `prefers-color-scheme`?
74. What is Tailwind CSS? How does it work?
75. What are Tailwind utility classes? Give 5 examples you use often.
76. What is `tailwind-merge` and why is it needed?
77. What is `clsx`?
78. What is a CSS reset? Why use one?
79. What is `letter-spacing`?
80. What is `line-height`?

---

## SECTION 4 — JAVASCRIPT

81. What is the difference between `var`, `let`, and `const`?
82. What is hoisting?
83. What is a closure?
84. What is the difference between `==` and `===`?
85. What is `typeof null`? Why?
86. What is `undefined` vs `null`?
87. What is an arrow function? How does it differ from a regular function?
88. What is the spread operator (`...`)?
89. What is destructuring?
90. What is a Promise?
91. What is `async/await`?
92. What is the difference between `.then()` and `async/await`?
93. What does `Promise.all()` do?
94. What is the event loop?
95. What is the call stack?
96. What is a callback function?
97. What is event delegation?
98. What is `event.preventDefault()`?
99. What is `event.stopPropagation()`?
100. What is the difference between `addEventListener` and inline `onclick`?
101. What is `localStorage` vs `sessionStorage` vs cookies?
102. What is `JSON.stringify()` and `JSON.parse()`?
103. What is the difference between `map()`, `filter()`, and `reduce()`?
104. What does `forEach()` return?
105. What is `find()` vs `findIndex()`?
106. What is `some()` vs `every()`?
107. What is a higher-order function?
108. What is immutability? Why does it matter in React?
109. What is the difference between `slice()` and `splice()`?
110. What is optional chaining (`?.`)?
111. What is nullish coalescing (`??`)?
112. What is a `Set` in JavaScript?
113. What is a `Map` in JavaScript?
114. What is the difference between deep copy and shallow copy?
115. How do you deep clone an object?
116. What is `Object.keys()`, `Object.values()`, `Object.entries()`?
117. What is a template literal?
118. What is a module? What is `import` and `export`?
119. What is the difference between default and named exports?
120. What is `try/catch/finally`?
121. What is `fetch()`? How do you handle errors?
122. What is CORS?
123. What is `setTimeout` vs `setInterval`?
124. What is debouncing? What is throttling?
125. What is event bubbling?
126. What is `this` in JavaScript?
127. What is `bind()`, `call()`, `apply()`?
128. What is a generator function?
129. What is a Symbol?
130. What is `WeakMap`?

---

## SECTION 5 — TYPESCRIPT

131. What is TypeScript? Why use it over JavaScript?
132. What is type inference?
133. What is the difference between `interface` and `type`?
134. What is a union type? Give an example.
135. What is an intersection type?
136. What is `any`? Why is it dangerous?
137. What is `unknown`? How is it safer than `any`?
138. What is `never`?
139. What is `void`?
140. What is a generic? Give an example.
141. What is `Record<K, V>`?
142. What is `Partial<T>`?
143. What is `Required<T>`?
144. What is `Pick<T, K>`?
145. What is `Omit<T, K>`?
146. What is a readonly property?
147. What is an enum? When would you use one?
148. What is type narrowing?
149. What is a type guard?
150. What is `as` (type assertion)? When should you avoid it?
151. What are declaration files (`.d.ts`)?
152. What is `tsconfig.json`?
153. What is `strict` mode in TypeScript?
154. How do you type a React component's props?
155. How do you type an async function return value?
156. What is `ReturnType<T>`?
157. What is a discriminated union?
158. How do you type an API response?
159. What is a mapped type?
160. What is a conditional type?

---

## SECTION 6 — REACT

161. What is React?
162. What is JSX?
163. What is a component?
164. What is the difference between a functional and class component?
165. What is `useState`? Give an example.
166. What is `useEffect`? What is the dependency array?
167. What happens if you pass an empty dependency array to `useEffect`?
168. What happens if you pass no dependency array?
169. How do you clean up a `useEffect`?
170. What is `useRef`?
171. What is `useContext`?
172. What is `useReducer`? When would you use it over `useState`?
173. What is `useMemo`? When do you use it?
174. What is `useCallback`? When do you use it?
175. What is `useId`?
176. What is a custom hook? Give an example.
177. What is prop drilling? How do you solve it?
178. What is the React Context API?
179. What is lifting state up?
180. What is controlled vs uncontrolled input?
181. What is reconciliation in React?
182. What is the virtual DOM?
183. Why does React need a `key` prop in lists?
184. What happens when you use index as a key?
185. What is a React portal?
186. What is an error boundary?
187. What is `React.memo`?
188. What is `React.lazy` and `Suspense`?
189. What is `forwardRef`?
190. What is a render prop?
191. What is a higher-order component (HOC)?
192. What is the difference between `useEffect` and `useLayoutEffect`?
193. How does React handle events differently from the DOM?
194. What is React's StrictMode?
195. What is `useTransition`?
196. What is `useDeferredValue`?
197. How do you prevent re-renders?
198. What is the problem with stale closures in hooks?
199. What is a ref callback?
200. What is `React.Fragment`?

---

## SECTION 7 — NEXT.JS

201. What is Next.js?
202. What is the difference between the Pages Router and the App Router?
203. What is a Server Component?
204. What is a Client Component? When do you add `'use client'`?
205. When can you NOT use a Server Component?
206. What is `getServerSideProps`? (Pages Router)
207. What is `getStaticProps`? (Pages Router)
208. What is Incremental Static Regeneration (ISR)?
209. What is `generateStaticParams`?
210. What is `generateMetadata`?
211. What is `layout.tsx`?
212. What is `loading.tsx`?
213. What is `error.tsx`?
214. What is `not-found.tsx`?
215. What is Next.js middleware?
216. How do API routes work in Next.js App Router?
217. What is a Route Handler?
218. What is Next.js Image (`<Image>`)?
219. Why is Next.js `<Image>` better than a plain `<img>` tag?
220. What is the `Link` component in Next.js?
221. What is `useRouter` in Next.js?
222. What is `usePathname`?
223. What is `useSearchParams`?
224. How do you pass data between a Server Component and Client Component?
225. What is `cookies()` in Next.js?
226. What is `headers()` in Next.js?
227. How does Next.js handle environment variables?
228. What is the difference between `NEXT_PUBLIC_` and non-public env vars?
229. What is `next.config.js`?
230. How do you deploy a Next.js app?
231. What is Turbopack?
232. What is `useFormState` and `useFormStatus`?
233. What is a Server Action?
234. What is `redirect()` in the App Router?
235. What is `revalidatePath()`?
236. What is `revalidateTag()`?
237. How does caching work in the Next.js App Router?
238. What is `fetch` with `cache: 'no-store'` vs `next: { revalidate: 60 }`?
239. What is `dynamic = 'force-dynamic'`?
240. What is the `opengraph-image` convention?

---

## SECTION 8 — SUPABASE & DATABASES

241. What is Supabase?
242. What database does Supabase use?
243. What is Supabase Auth?
244. What is the difference between `supabase.auth.getSession()` and `supabase.auth.getUser()`?
245. Why should you use `getUser()` in server-side code?
246. What is a JWT? What's inside one?
247. What is Supabase SSR? What package do you use?
248. What is Row Level Security (RLS)?
249. What is a Supabase policy?
250. What does `auth.uid()` do inside a policy?
251. What is the difference between SELECT and INSERT policies?
252. What is Supabase Realtime?
253. What are Postgres changes in Supabase Realtime?
254. How do you subscribe to a Supabase channel?
255. What is Supabase Storage?
256. What is a Supabase bucket?
257. What is a Supabase Edge Function?
258. What runtime do Edge Functions use?
259. What is `@supabase/ssr`?
260. What is `createServerClient` vs `createBrowserClient`?
261. What is a Supabase migration?
262. What is `supabase db push`?
263. What is PostgreSQL?
264. What is a primary key?
265. What is a foreign key?
266. What is an index in a database?
267. What is a JOIN? Types of joins?
268. What is a SELECT query?
269. What is WHERE vs HAVING?
270. What is GROUP BY?
271. What is ORDER BY?
272. What is LIMIT and OFFSET?
273. What is a transaction in SQL?
274. What is ACID?
275. What is a stored procedure vs a function in Postgres?
276. What is an RPC in Supabase?
277. What is `uuid_generate_v4()`?
278. What is a trigger in Postgres?
279. What is a view in SQL?
280. What is normalization?
281. What is denormalization and when is it appropriate?
282. What is the difference between SQL and NoSQL?
283. What is PLpgSQL?
284. What is `ON CONFLICT DO NOTHING`?
285. What is `UPSERT`?

---

## SECTION 9 — FORMS & VALIDATION

286. What is `react-hook-form`?
287. Why is react-hook-form better than controlled inputs for performance?
288. What is `register` in react-hook-form?
289. What is `handleSubmit`?
290. What is `formState.errors`?
291. What is `watch()` in react-hook-form?
292. What is `setValue()` in react-hook-form?
293. What is `reset()` in react-hook-form?
294. What is Zod?
295. What is a Zod schema?
296. What is `z.string().email()`?
297. What is `z.object({})`?
298. What is `z.infer<typeof schema>`?
299. What is `zodResolver`?
300. How do you validate password confirmation with Zod?
301. What is `z.enum()`?
302. What is `z.optional()`?
303. What is `z.refine()`?
304. What is client-side vs server-side validation?
305. Why is client-side validation not enough?

---

## SECTION 10 — APIs & HTTP

306. What is a REST API?
307. What are HTTP methods? (GET, POST, PUT, PATCH, DELETE)
308. When do you use PUT vs PATCH?
309. What are HTTP status codes? (200, 201, 204, 301, 400, 401, 403, 404, 500)
310. What is the difference between 401 and 403?
311. What is a request header?
312. What is `Content-Type: application/json`?
313. What is `Authorization: Bearer <token>`?
314. What is CORS? Why does it exist?
315. How do you fix a CORS error?
316. What is a preflight request?
317. What is `fetch()`?
318. What is `axios`? How does it differ from `fetch`?
319. How do you handle errors in `fetch`?
320. What is an API route in Next.js?
321. What is a Route Handler (`route.js`)?
322. How do you read the request body in a Route Handler?
323. How do you return JSON from a Route Handler?
324. What is `NextResponse.json()`?
325. What is a webhook?
326. What is rate limiting?
327. What is pagination?
328. What is cursor-based pagination vs offset pagination?
329. What is GraphQL? How does it differ from REST?
330. What is `async/await` with fetch?

---

## SECTION 11 — AUTHENTICATION & SECURITY

331. What is authentication vs authorisation?
332. What is a session-based auth?
333. What is token-based auth (JWT)?
334. What is OAuth?
335. What is OpenID Connect?
336. What is a refresh token?
337. What is an access token?
338. What is `httpOnly` cookie?
339. What is CSRF? How do you prevent it?
340. What is XSS? How do you prevent it?
341. What is SQL injection? How do you prevent it?
342. What is input sanitisation?
343. What is password hashing?
344. What is bcrypt?
345. What is salting a password?
346. What is HTTPS?
347. What is an open redirect attack?
348. What is a man-in-the-middle attack?
349. What is Content Security Policy (CSP)?
350. What does "only allow relative paths" in a redirect guard prevent?
351. What is 2FA / MFA?
352. What is an email OTP / 6-digit verification code?
353. How would you implement email verification?
354. What is `SameSite` on a cookie?
355. What is Supabase RLS and why is it a security layer?

---

## SECTION 12 — REACT ECOSYSTEM & TOOLING

356. What is Vite? How does it differ from Webpack?
357. What is HMR (Hot Module Replacement)?
358. What is a bundler?
359. What is tree shaking?
360. What is code splitting?
361. What is lazy loading?
362. What is `dynamic import()`?
363. What is ESLint?
364. What is Prettier?
365. What is Biome?
366. What is `jsconfig.json` / `tsconfig.json`?
367. What are path aliases (`@/components`)?
368. What is `postcss.config.js`?
369. What is `tailwind.config.js`?
370. What is `next.config.js`?
371. What is a monorepo?
372. What is `npm` vs `yarn` vs `pnpm`?
373. What is `package-lock.json`?
374. What is a devDependency vs dependency?
375. What is `node_modules`?
376. What does `.gitignore` do?
377. What is a `.env` file?
378. What is `process.env`?
379. What is a linter?
380. What is `npx`?

---

## SECTION 13 — STATE MANAGEMENT

381. What is state in React?
382. What is global state?
383. What are the options for global state management?
384. What is Context API and when is it enough?
385. What is Zustand?
386. What is Redux?
387. What is Redux Toolkit?
388. What is the difference between local state, server state, and global UI state?
389. What is React Query / TanStack Query?
390. What is `staleTime` in React Query?
391. What is a query key?
392. What is `useMutation`?
393. What is optimistic UI update?
394. Why is putting everything in global state a bad idea?
395. What is derived state?

---

## SECTION 14 — PERFORMANCE

396. What is Lighthouse?
397. What is Core Web Vitals?
398. What is LCP (Largest Contentful Paint)?
399. What is FID / INP (Interaction to Next Paint)?
400. What is CLS (Cumulative Layout Shift)?
401. What is TTFB (Time To First Byte)?
402. What is SSR and how does it help performance?
403. What is SSG (Static Site Generation)?
404. What is hydration?
405. What is a waterfall in data fetching?
406. How does Next.js `<Image>` optimise images?
407. What is lazy loading images?
408. What is `loading="lazy"` on an `<img>`?
409. What is image compression? What library did you use?
410. What is `WebP`?
411. What is caching?
412. What is a CDN?
413. What is `stale-while-revalidate`?
414. What is the difference between RAM and disk cache?
415. What is memoisation?
416. What is the cost of a re-render?
417. How do you profile a React app?
418. What is `React.memo` and when does it not help?
419. What is virtualisation / windowing?
420. What is a bundle size and why does it matter?

---

## SECTION 15 — TESTING

421. What is unit testing?
422. What is integration testing?
423. What is end-to-end (E2E) testing?
424. What is Playwright?
425. What is Vitest?
426. What is Jest?
427. What is a test runner?
428. What is a test assertion?
429. What is `expect().toBe()`?
430. What is mocking?
431. What is `beforeEach` / `afterEach`?
432. What is a smoke test?
433. What is TDD (Test Driven Development)?
434. What is code coverage?
435. Why is 100% coverage not always the goal?
436. What is a flaky test?
437. How do you test a form submission?
438. How do you test an API route?
439. What is `page.goto()` in Playwright?
440. What is `page.click()` in Playwright?

---

## SECTION 16 — VERSION CONTROL (GIT)

441. What is Git?
442. What is the difference between Git and GitHub?
443. What is a commit?
444. What is a branch?
445. What is `git merge`?
446. What is `git rebase`?
447. What is the difference between merge and rebase?
448. What is a pull request (PR)?
449. What is a code review?
450. What is `git stash`?
451. What is `git reset`?
452. What is the difference between `git reset --soft`, `--mixed`, and `--hard`?
453. What is `git revert`?
454. What is a merge conflict? How do you resolve one?
455. What is `.gitignore`?
456. What is a remote?
457. What is `git fetch` vs `git pull`?
458. What is `git clone`?
459. What is `git cherry-pick`?
460. What is a Git tag?
461. What is a commit message convention? (e.g. Conventional Commits)
462. What is `git log`?
463. What is `git blame`?
464. What is `git diff`?
465. What is `HEAD` in Git?
466. What is a detached HEAD?
467. What is `origin`?
468. What is `upstream`?
469. What is force push? Why is it dangerous?
470. What is a protected branch?

---

## SECTION 17 — DEPLOYMENT & DEVOPS

471. What is Vercel?
472. What is a build step?
473. What is CI/CD?
474. What is a deployment pipeline?
475. What is a preview deployment?
476. What is a production vs staging environment?
477. What is a domain name?
478. What is DNS?
479. What is an A record?
480. What is a CNAME record?
481. What is HTTPS / TLS / SSL?
482. What is a reverse proxy?
483. What is Nginx?
484. What is Docker?
485. What is a container?
486. What is an environment variable and why can't you hardcode secrets?
487. What is serverless?
488. What is an edge function?
489. What is a CDN (Content Delivery Network)?
490. What is `vercel.json`?

---

## SECTION 18 — THREE.JS & 3D (portfolio project)

491. What is Three.js?
492. What is `@react-three/fiber`?
493. What is `@react-three/drei`?
494. What is a scene in Three.js?
495. What is a camera?
496. What is a renderer?
497. What is a mesh?
498. What is a geometry?
499. What is a material?
500. What is a light in Three.js?
501. What is `useFrame`?
502. What is `Canvas` in react-three-fiber?
503. Why would you use 3D on a portfolio website?
504. What is WebGL?
505. What is GLSL?

---

## SECTION 19 — FRAMER MOTION / ANIMATION

506. What is Framer Motion?
507. What is a `motion.div`?
508. What is `initial`, `animate`, `exit` in Framer Motion?
509. What is `AnimatePresence`?
510. What is a spring animation?
511. What is `whileHover`?
512. What is `whileTap`?
513. What is `variants` in Framer Motion?
514. What is staggering in animation?
515. How do you animate a route transition in Next.js?

---

## SECTION 20 — MAPS & GEOSPATIAL (OmegaEstate)

516. What is Leaflet?
517. What is react-leaflet?
518. What is a map tile?
519. What is `TileLayer`?
520. What is a `Marker`?
521. What is a `Popup`?
522. What is geocoding?
523. What is reverse geocoding?
524. What is latitude and longitude?
525. What is PostGIS?
526. What is a geospatial query?
527. What is a bounding box query?
528. What is `ST_DWithin` in PostGIS?

---

## SECTION 21 — REALTIME & WEBSOCKETS

529. What is WebSocket?
530. What is the difference between HTTP and WebSocket?
531. What is Supabase Realtime?
532. What is a Supabase channel?
533. What is `postgres_changes`?
534. What is an event payload in Supabase Realtime?
535. What is `INSERT`, `UPDATE`, `DELETE` event in Realtime?
536. How do you unsubscribe from a Supabase channel?
537. What is a notification in the context of your app?
538. What is `useEffect` cleanup and why is it important for subscriptions?
539. What is socket.io?
540. What is long polling?

---

## SECTION 22 — EMAIL (Nodemailer / SMTP)

541. What is SMTP?
542. What is Nodemailer?
543. What is a transporter in Nodemailer?
544. What is `sendMail()`?
545. What is an email template?
546. What is a 6-digit OTP and how would you generate one?
547. How do you expire an OTP?
548. What is `Math.floor(Math.random() * 900000) + 100000`?
549. What is the difference between transactional and marketing email?
550. What is Resend? What is SendGrid?

---

## SECTION 23 — PYTHON & FASTAPI (task-a-review-webapp, complyiq, tbot)

551. What is Python?
552. What is FastAPI?
553. What is Pydantic?
554. What is a Pydantic model?
555. What is Uvicorn?
556. What is ASGI?
557. What is a decorator in Python? (`@app.get("/")`)
558. What is `async def` in Python?
559. What is `BaseModel` in Pydantic?
560. What is dependency injection in FastAPI?
561. What is `python-dotenv`?
562. What is Jinja2?
563. What is a requirements.txt?
564. What is a virtual environment in Python?
565. What is a Telegram bot?
566. What is the Telegram Bot API?

---

## SECTION 24 — C# & .NET (SystemGuardian)

567. What is C#?
568. What is .NET?
569. What is ASP.NET Core?
570. What is a class in C#?
571. What is an interface in C#?
572. What is dependency injection in .NET?
573. What is Entity Framework?
574. What is LINQ?
575. What is async/await in C#?
576. What is a solution file (`.sln`)?
577. What is a project in a .NET solution?
578. What is the difference between `.NET` and `.NET Framework`?

---

## SECTION 25 — UI COMPONENT LIBRARIES

579. What is Radix UI?
580. What is a headless UI component?
581. Why are headless components better for custom design?
582. What is shadcn/ui?
583. What is `class-variance-authority`?
584. What is `tailwind-merge`?
585. What is Lucide React?
586. What is Sonner?
587. What is a toast notification?
588. What is a modal/dialog?
589. What is an accordion?
590. What is a dropdown menu?
591. What is `vaul` (drawer)?
592. What is `cmdk` (command palette)?
593. What is an accessible component?
594. What is WCAG?
595. What is ARIA?

---

## SECTION 26 — CHARTS & DATA VISUALISATION (Seek project)

596. What is Recharts?
597. What is a `LineChart`?
598. What is a `BarChart`?
599. What is a `PieChart`?
600. What is a `Tooltip` in a chart?
601. What is a `Legend`?
602. What is a `ResponsiveContainer`?
603. How do you format data for Recharts?
604. What is D3.js?
605. When would you use D3 over Recharts?

---

## SECTION 27 — SEO & METADATA

606. What is SEO?
607. What is a `<title>` tag?
608. What is a meta description?
609. What is Open Graph?
610. What is `og:title`, `og:description`, `og:image`?
611. What is Twitter card metadata?
612. What is a `sitemap.xml`?
613. What is `robots.txt`?
614. What is canonical URL?
615. What is structured data / JSON-LD?
616. How does Next.js handle SEO metadata?
617. What is `generateMetadata` in Next.js?
618. What is `metadataBase`?
619. Why is SSR better for SEO than CSR?
620. What is `<meta name="viewport">`?

---

## SECTION 28 — STORAGE & MEDIA

621. What is Supabase Storage?
622. What is a storage bucket?
623. What is RLS on storage?
624. What is image compression?
625. What is `browser-image-compression`?
626. What is a `File` object in JavaScript?
627. What is `FormData`?
628. What is `URL.createObjectURL()`?
629. What is a MIME type?
630. What is the difference between JPEG, PNG, WebP, AVIF?
631. What is a CDN for media delivery?
632. What is video streaming?
633. What is an HLS stream?
634. How do you display a video in a React app?

---

## SECTION 29 — DESIGN SYSTEMS & UI PRINCIPLES

635. What is a design system?
636. What is a component library?
637. What is a design token?
638. What is spacing scale?
639. What is a colour palette?
640. What is contrast ratio?
641. What is `rem`-based spacing?
642. What is responsive design?
643. What is mobile-first design?
644. What is atomic design?
645. What is a style guide?
646. What is Figma?
647. How do you convert a Figma design to code?
648. What is pixel-perfect implementation?
649. What is a breakpoint?
650. What is dark mode? How do you implement it in Next.js?

---

## SECTION 30 — ARCHITECTURE & PATTERNS

651. What is MVC?
652. What is separation of concerns?
653. What is a single responsibility principle?
654. What is DRY (Don't Repeat Yourself)?
655. What is SOLID?
656. What is a service layer?
657. What is a repository pattern?
658. What is a singleton?
659. What is a factory function?
660. What is composition over inheritance?
661. What is the observer pattern?
662. What is the pub/sub pattern?
663. What is a middleware pattern?
664. What is a facade?
665. What is an adapter pattern?
666. What is a feature flag?
667. What is an abstraction layer?
668. What is a monolith vs microservices?
669. What is server-side rendering (SSR)?
670. What is client-side rendering (CSR)?
671. What is the difference between SSR, SSG, ISR, and CSR?
672. What is a BFF (Backend for Frontend)?
673. What is an API gateway?
674. What is caching strategy (cache-aside, write-through)?
675. What is eventual consistency?

---

## SECTION 31 — SOFT SKILLS & SITUATIONAL

676. How do you handle disagreements with a senior developer?
677. How do you ask for help without wasting people's time?
678. What do you do when you don't understand a requirement?
679. Describe a time you debugged a difficult problem.
680. How do you document your code?
681. How do you onboard yourself to a new codebase?
682. What questions do you ask before starting a new feature?
683. How do you estimate how long a task will take?
684. What happens when your estimate is wrong?
685. How do you work with designers?
686. How do you work with a backend developer?
687. Have you ever broken production? What did you do?
688. What is your process for a code review?
689. How do you write a clear commit message?
690. What tools do you use for project management?
691. How do you balance shipping fast vs writing clean code?
692. What is technical debt? How do you manage it?
693. How do you handle working on legacy code?
694. What do you do when the requirements change mid-development?
695. How do you keep yourself motivated during repetitive tasks?

---

## SECTION 32 — COMMON CODING QUESTIONS

696. Reverse a string in JavaScript.
697. Check if a string is a palindrome.
698. Find the largest number in an array.
699. Remove duplicates from an array.
700. Flatten a nested array.
701. Count occurrences of each character in a string.
702. Check if two strings are anagrams.
703. FizzBuzz.
704. Find the sum of all numbers in an array.
705. Find the second largest number in an array.
706. Implement debounce.
707. Implement throttle.
708. Deep clone an object.
709. Flatten an object.
710. Write a function that groups an array of objects by a key.
711. Implement `Array.prototype.map` from scratch.
712. Implement `Array.prototype.filter` from scratch.
713. Implement `Array.prototype.reduce` from scratch.
714. Write a promise that resolves after N milliseconds.
715. What is the output of: `console.log(1); setTimeout(() => console.log(2), 0); console.log(3)`?
716. What is the output of: `console.log(typeof null)`?
717. What is the output of: `[] == false`?
718. What is the output of: `0.1 + 0.2 === 0.3`? Why?
719. Write a function to check if a number is prime.
720. Write a binary search function.

---

## SECTION 33 — QUICK FIRE CONCEPTS

721. What is `null` coalescing?
722. What is short-circuit evaluation?
723. What is `void 0`?
724. What is `NaN`? How do you check for it?
725. What is `isFinite()`?
726. What is the difference between `for...of` and `for...in`?
727. What is a generator?
728. What is an iterator protocol?
729. What is `Symbol.iterator`?
730. What is `structuredClone()`?
731. What is `crypto.randomUUID()`?
732. What is the `Proxy` object?
733. What is `Reflect`?
734. What is `Object.freeze()`?
735. What is `Object.assign()`?
736. What is `Array.from()`?
737. What is `Array.isArray()`?
738. What is `Number.isInteger()`?
739. What is `parseInt()` vs `Number()`?
740. What is the difference between `==` coercion rules?

---

## SECTION 34 — BROWSER & WEB PLATFORM

741. What is the browser's rendering pipeline?
742. What is reflow vs repaint?
743. What is `requestAnimationFrame`?
744. What is `IntersectionObserver`?
745. What is `ResizeObserver`?
746. What is `MutationObserver`?
747. What is the `History API`?
748. What is `pushState`?
749. What is `popstate` event?
750. What is `window.location`?
751. What is `document.querySelector`?
752. What is event propagation?
753. What is the difference between `target` and `currentTarget`?
754. What is `passive: true` on an event listener?
755. What is the `Fetch API`?
756. What is `AbortController`?
757. What is `navigator.clipboard`?
758. What is `Web Storage API`?
759. What is `IndexedDB`?
760. What is a Service Worker?
761. What is a Progressive Web App (PWA)?
762. What is the Cache API?
763. What is `navigator.geolocation`?
764. What is `window.matchMedia`?
765. What is `document.cookie`?

---

## SECTION 35 — ACCESSIBILITY (A11Y)

766. What is web accessibility?
767. What is WCAG?
768. What are WCAG levels A, AA, AAA?
769. What is a screen reader?
770. What is focus management?
771. What is `tabindex="0"` vs `tabindex="-1"`?
772. What is `role` attribute?
773. What is `aria-label`?
774. What is `aria-labelledby`?
775. What is `aria-describedby`?
776. What is `aria-live`?
777. What is `aria-hidden`?
778. What is `aria-expanded`?
779. What is skip navigation?
780. What is colour contrast and why does it matter?
781. How do you make a custom dropdown accessible?
782. How do you make a modal accessible?
783. What is focus trapping?
784. What is a landmark region?
785. What is `prefers-reduced-motion` and how do you use it in CSS?

---

## SECTION 36 — MULTI-ROLE APP SPECIFIC (OmegaEstate)

786. How do you handle multiple user roles in a web app?
787. What is role-based access control (RBAC)?
788. How do you prevent a buyer from accessing agent routes?
789. What is an admin dashboard? What features does yours have?
790. What is a verification queue?
791. What is a ghost account / impersonation feature?
792. How do you moderate listings?
793. What is a messaging system and how does yours work?
794. What is a notification system and how does yours work?
795. How do you implement follow/unfollow?
796. How does your search work? (Supabase RPC + full-text search)
797. What is a booking calendar and how does it work?
798. How do you handle property images uploaded by users?
799. What is a property report feature?
800. How does your agent verification flow work?

---

## SECTION 37 — ADVANCED / SENIOR-LEANING

801. What is React Server Components architecture?
802. What is the island architecture?
803. What is streaming SSR?
804. What is `Suspense` for data fetching?
805. What is React 19's `use()` hook?
806. What is `useOptimistic`?
807. What is a tanstack router?
808. What is `@tanstack/react-query` v5?
809. What is OpenTelemetry?
810. What is an observability stack?
811. What is a feature flag service?
812. What is blue-green deployment?
813. What is canary deployment?
814. What is horizontal vs vertical scaling?
815. What is connection pooling in Postgres?
816. What is PgBouncer?
817. What is database sharding?
818. What is a read replica?
819. What is CAP theorem?
820. What is eventual consistency?

---

## SECTION 38 — THINGS TO SAY WHEN YOU DON'T KNOW

821. "I haven't worked with that specifically, but based on how [similar thing] works, I'd approach it by…"
822. "That's something I'd look up in the docs — I know it exists but I want to give you an accurate answer."
823. "I've seen that come up in [project] but haven't had to implement it yet — can you tell me more about the context?"
824. "I'd start by reading the official documentation and then build a small test to verify my understanding."
825. "I know the concept at a high level — [explain what you know] — but the implementation details I'd confirm."

---

## YOUR PERSONAL ANSWERS (fill these in before the interview)

**Stack in one sentence:**
> "I primarily build full-stack web apps with Next.js and React on the frontend, Supabase (Postgres + Auth + Realtime) on the backend, and Tailwind CSS for styling, deployed on Vercel."

**Biggest project:**
> "OmegaEstate — a real estate platform for the Nigerian market with multi-role authentication (admin, agent, buyer, seller), real-time messaging, property listings with maps and video, a full admin dashboard with verification queues, and Row Level Security at the database level."

**Why Next.js:**
> "It gives me SSR for SEO, file-based routing, API routes, middleware, and image optimisation in one framework. It removes a lot of setup overhead and lets me focus on building."

**Why Supabase:**
> "It gives me a production Postgres database, authentication, real-time subscriptions, and file storage all in one hosted service. For a solo developer or small team, that's a massive productivity gain."

**Weakness (honest, forward-looking):**
> "Testing. I've implemented Playwright E2E tests on my projects, but I want to get much better at writing tests before rather than after building features."

---

*This document covers 800+ questions across 38 categories. Review the sections most relevant to the role's job description first.*
