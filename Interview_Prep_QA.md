# Web Developer Interview — Full Q&A with Answers
### Ifidon Abraham — Tailored to Your Actual Projects & Stack

---

## SECTION 1 — ABOUT YOURSELF

**Q1. Tell me about yourself as a developer.**
> I'm a full-stack web developer building real-world products across my company ecosystem, Fonia Labs. My core stack is Next.js, React, TypeScript, Tailwind CSS, and Supabase. I've shipped multiple live products including OmegaEstate — a full real estate platform with multi-role auth, real-time messaging, maps, and an admin dashboard — as well as FonTech, Seek, StormBridge, and the Fonia Labs company site itself.

**Q2. How did you get into web development?**
> I started with plain HTML and JavaScript, then moved into React when I needed component-based structure for more complex interfaces. I picked up Next.js for its SSR and routing benefits, and Supabase when I needed a backend without setting up a full server. Every project taught me something new — OmegaEstate pushed me into database design, RLS policies, realtime subscriptions, and geospatial queries.

**Q3. What are you most proud of in your portfolio?**
> OmegaEstate. It's a production app with multi-role authentication, Row Level Security in Postgres, real-time messaging, property listings with maps and video, an admin verification queue, and a ghost account feature for support. It's the most architecturally complex thing I've built and it's live.

**Q4. Describe your development workflow from idea to deployment.**
> I start by writing a brief scope — what the user needs, what pages exist, what data flows. Then I scaffold the project with Next.js, set up Supabase with migrations, design the database schema, and build page by page. I use Vercel for deployment with preview branches. I write E2E tests with Playwright to cover critical flows before considering something done.

**Q5. How do you stay up to date with new technologies?**
> I build things. The best way I learn is by building a real project with a new tool. I also follow the official changelogs for Next.js, React, and Supabase, and read documentation thoroughly before starting any new feature. I use the tools enough that I notice when something changes.

**Q6. What does a typical development day look like for you?**
> I usually start by reviewing what I left off — either an open issue or a feature in progress. I work in focused sessions, build the feature or fix the bug, test it manually, write a smoke test if it's a critical flow, then commit with a descriptive message. I keep my commits small and scoped.

**Q7. Have you worked in a team before?**
> OmegaEstate is under the Fonialabs-devs GitHub organisation, so it's set up for team collaboration. I've structured it with proper migrations, RLS policies, and documentation so other developers can onboard. In practice I've been the lead developer and architect across all Fonia Labs projects.

**Q8. What's the hardest technical problem you've solved?**
> In OmegaEstate, I hit infinite recursion in Supabase RLS policies — a policy querying a table triggered another policy that queried back, causing a stack overflow. I had to restructure the policies using security definer functions and carefully audit which tables referenced which. It took multiple migration files to fully resolve.

**Q9. How do you handle being stuck on a bug for hours?**
> I step back and rubber duck it — explain the problem out loud. If that doesn't help, I reduce it to the smallest reproducible case, check the logs carefully, and search the official docs or GitHub issues for the specific library. I also take a break — the solution often comes when I stop staring at it.

**Q10. What's your biggest weakness as a developer?**
> Testing. I have Playwright E2E tests on my projects but I want to improve at writing tests before building features rather than after. I'm also working on improving TypeScript coverage — some of my earlier projects use JSX without full type safety.

**Q11. Where do you see yourself in 2–3 years?**
> Building and leading technical products. I want to grow into a role where I'm making architectural decisions, mentoring other developers, and shipping products that actually reach real users at scale.

**Q12. Why do you want a web development internship?**
> I want to work inside a professional team, understand how production systems are built at scale, and improve the parts of my craft I can't develop alone — code reviews, collaborative architecture decisions, and exposure to larger codebases.

**Q13. Why do you want to work at this company?**
> [Tailor this to the company — research what they build and say something specific about their product or tech stack.]

**Q14. What are you looking to learn from this internship?**
> Professional team workflow — how features go from requirement to code review to production. I want to see how senior engineers structure code, how decisions are made under real product pressure, and how quality is maintained at scale.

**Q15. How do you prioritise when you have multiple tasks?**
> I start with whatever is blocking other work or breaking users, then move to features with the most impact. I keep a list and update it daily. If I'm unsure about priority, I ask.

---

## SECTION 2 — HTML

**Q16. What is semantic HTML?**
> Using HTML elements that carry meaning — `<nav>`, `<main>`, `<article>`, `<section>`, `<header>`, `<footer>` — instead of wrapping everything in `<div>`. It helps screen readers, search engines, and other developers understand the structure of the page.

**Q17. What is the difference between `<div>` and `<section>`?**
> `<div>` is a generic container with no semantic meaning. `<section>` represents a distinct thematic grouping of content. Use `<section>` when the content could have its own heading.

**Q18. What does the `alt` attribute do on an image?**
> It provides a text description of the image. Screen readers read it aloud for visually impaired users. If the image fails to load, the alt text is shown instead. An empty `alt=""` tells screen readers to skip it (for decorative images).

**Q19. What is the difference between `<script>` in `<head>` vs end of `<body>`?**
> A script in `<head>` blocks HTML parsing until the script loads and runs. At the end of `<body>`, the HTML is already parsed so the page renders first. The `defer` attribute on a `<head>` script achieves the same effect as end-of-body while keeping the script declaration at the top.

**Q20. What is the `defer` attribute?**
> It tells the browser to download the script in the background while HTML parses, then execute it after the document is fully parsed but before `DOMContentLoaded`. Multiple deferred scripts run in order.

**Q21. What is a `data-*` attribute?**
> A custom attribute you define to store extra data on HTML elements. Example: `data-company="fontech"`. You access it in JavaScript via `element.dataset.company`. I use it in the Fonia Labs badge embed script — `data-position`, `data-theme` — so developers can configure the badge without writing JavaScript.

**Q22. What is the difference between `id` and `class`?**
> `id` is unique — only one element per page should have a given id. `class` can be reused on multiple elements. Use `id` for anchor links or specific JS targeting; use `class` for styling groups of elements.

**Q23. What is the DOM?**
> The Document Object Model — the browser's in-memory representation of the HTML document as a tree of objects. JavaScript can read and manipulate it via APIs like `document.querySelector`. React builds its own virtual DOM on top of this.

**Q24. What does `<!DOCTYPE html>` do?**
> It tells the browser to render the page in standards mode rather than quirks mode. Always include it as the first line of an HTML document.

**Q25. What are void elements?**
> Elements that don't have a closing tag because they can't have children: `<img>`, `<input>`, `<br>`, `<hr>`, `<meta>`, `<link>`. In JSX they must be self-closing: `<img />`.

**Q26. What is `<meta charset="UTF-8">`?**
> It tells the browser which character encoding to use. UTF-8 covers all Unicode characters including emoji and non-Latin scripts. Without it, special characters may render incorrectly.

**Q27. What is the viewport meta tag?**
> `<meta name="viewport" content="width=device-width, initial-scale=1">` — it tells the browser to set the viewport width to the device's actual width, preventing mobile browsers from zooming out to show a desktop-sized layout.

**Q28. What is the difference between block and inline elements?**
> Block elements take the full width available and start on a new line (`<div>`, `<p>`, `<h1>`). Inline elements take only as much space as their content and flow within text (`<span>`, `<a>`, `<strong>`).

**Q29. How do you make a form accessible?**
> Use `<label>` elements linked to inputs via `for`/`id`. Use `<fieldset>` and `<legend>` for groups. Provide helpful error messages with `aria-describedby`. Make sure the form is fully keyboard navigable. Use `required`, `type`, and `autocomplete` attributes correctly.

**Q30. What is `aria-label`? When do you need it?**
> It provides an accessible name for an element that has no visible text label — like an icon button. Example: `<button aria-label="Close menu">✕</button>`. Screen readers announce the aria-label instead of the icon character.

---

## SECTION 3 — CSS

**Q31. What is the CSS box model?**
> Every element is a box made of four layers: content (the actual text/image), padding (space inside the border), border, and margin (space outside the border). Understanding this is essential for layout.

**Q32. What is the difference between `margin` and `padding`?**
> Padding is inside the element — it increases the clickable area and the background extends through it. Margin is outside the element — it creates space between elements. Margins can collapse (two adjacent vertical margins merge into one).

**Q33. What is `box-sizing: border-box`?**
> By default, `width` only includes the content. With `border-box`, `width` includes padding and border too. So a `width: 300px` element stays 300px wide regardless of padding. I set this globally with `* { box-sizing: border-box }` in all my projects.

**Q34. What is the difference between `position: relative`, `absolute`, `fixed`, and `sticky`?**
> - `relative`: positioned relative to its normal flow position; doesn't remove it from flow.
> - `absolute`: positioned relative to its nearest positioned ancestor; removed from flow.
> - `fixed`: positioned relative to the viewport; stays in place on scroll. I use this for the navbar.
> - `sticky`: behaves like `relative` until it hits a scroll threshold, then acts like `fixed`. I use `sticky top-0` for the nav in my projects.

**Q35. What is `z-index` and when does it not work?**
> It controls the stacking order of positioned elements. Higher values appear on top. It only works on elements with a `position` other than `static`. It also won't work if the element is inside a stacking context with a lower `z-index`.

**Q36. What is Flexbox?**
> A one-dimensional layout system for distributing items in a row or column. Key properties: `display: flex`, `flex-direction`, `justify-content` (main axis alignment), `align-items` (cross axis), `gap`, `flex-wrap`. I use it constantly for navbars, card rows, and button groups.

**Q37. What is CSS Grid? How does it differ from Flexbox?**
> Grid is two-dimensional — you define both rows and columns. Flexbox is one-dimensional (either row or column). Grid is better for overall page layout; Flexbox is better for distributing items along a single axis. I use `grid-template-columns: repeat(3, 1fr)` for card grids across all my company pages.

**Q38. What are CSS custom properties (variables)?**
> Variables you define in CSS and reuse throughout: `--bg: #0b1120`. Used via `var(--bg)`. I use them extensively in the Fonia Labs design system for the entire colour palette, border radius, and spacing — changing one variable updates the whole site.

**Q39. What is `clamp()` in CSS?**
> A function that sets a value between a minimum and maximum with a preferred value: `font-size: clamp(16px, 2.5vw, 24px)`. The font grows with the viewport but never goes below 16px or above 24px. I use this for all headings and section padding.

**Q40. What is the difference between `em`, `rem`, `px`, `%`, `vh`, `vw`?**
> - `px`: fixed pixels.
> - `em`: relative to the parent element's font size.
> - `rem`: relative to the root (`html`) font size — more predictable than `em`.
> - `%`: relative to the parent.
> - `vh`/`vw`: percentage of the viewport height/width.

**Q41. How do you centre a div horizontally and vertically?**
> With Flexbox: `display: flex; justify-content: center; align-items: center` on the parent. With Grid: `display: grid; place-items: center`. I use `place-items: center` for card and orbit elements throughout my projects.

**Q42. What is Tailwind CSS?**
> A utility-first CSS framework where you apply pre-built classes directly in HTML/JSX — `flex`, `gap-4`, `text-sm`, `rounded-lg`, `bg-blue-600`. No context switching to a CSS file. It generates only the CSS classes you actually use, so the final bundle is tiny.

**Q43. What is a CSS transition?**
> Smoothly animates a CSS property change. `transition: transform 0.2s ease, border-color 0.18s ease`. I use transitions on all card hover states, button hover states, and navbar dropdown reveals.

**Q44. What is `backdrop-filter`?**
> Applies a filter (like blur) to the content behind an element. I use `backdrop-filter: blur(20px)` on the Fonia Labs navbar to create a frosted glass effect over the page content.

**Q45. What is `object-fit`?**
> Controls how an image or video fills its container. `object-fit: cover` fills the container while maintaining aspect ratio, cropping if needed. I use it on all property images and screenshot grids so they fill their slots cleanly.

---

## SECTION 4 — JAVASCRIPT

**Q46. What is the difference between `var`, `let`, and `const`?**
> `var` is function-scoped and hoisted — its declaration is moved to the top of the function. `let` and `const` are block-scoped and not hoisted (technically in a temporal dead zone). `const` can't be reassigned. I use `const` by default and `let` when I need to reassign. I never use `var`.

**Q47. What is hoisting?**
> JavaScript moves declarations to the top of their scope before execution. `var` declarations are hoisted (and initialised as `undefined`). `function` declarations are fully hoisted. `let`/`const` are hoisted but not initialised — accessing them before declaration throws a ReferenceError.

**Q48. What is a closure?**
> A function that retains access to variables from its outer scope even after the outer function has returned. Example: a counter function that returns an increment function — the inner function closes over the `count` variable. Hooks like `useState` use closures.

**Q49. What is the difference between `==` and `===`?**
> `==` performs type coercion — `"5" == 5` is `true`. `===` is strict equality — no coercion, `"5" === 5` is `false`. Always use `===` to avoid unexpected bugs.

**Q50. What is a Promise?**
> An object representing the eventual result of an asynchronous operation. It's in one of three states: pending, fulfilled, or rejected. You handle the result with `.then()` and errors with `.catch()`.

**Q51. What is `async/await`?**
> Syntactic sugar over Promises. `async` makes a function return a Promise. `await` pauses execution inside the function until the Promise resolves. It makes async code read like synchronous code. Example: `const { data } = await supabase.from('properties').select('*')`.

**Q52. What does `Promise.all()` do?**
> Takes an array of Promises and returns a single Promise that resolves when all of them resolve, or rejects immediately if any one rejects. Useful for parallel data fetching.

**Q53. What is the event loop?**
> JavaScript is single-threaded. The event loop allows async operations by offloading them (timers, fetch, etc.) to Web APIs. When they complete, their callbacks go to a queue. The event loop pushes callbacks from the queue to the call stack only when the stack is empty.

**Q54. What is event delegation?**
> Attaching a single event listener to a parent element instead of many listeners on individual children. The event bubbles up from the child to the parent. More memory efficient when you have many similar elements.

**Q55. What is the difference between `map()`, `filter()`, and `reduce()`?**
> - `map()`: transforms each element, returns a new array of the same length.
> - `filter()`: returns a new array with only elements that pass a test.
> - `reduce()`: accumulates elements into a single value (sum, object, etc.).

**Q56. What is optional chaining (`?.`)?**
> Safely accesses nested properties without throwing if an intermediate value is `null` or `undefined`. `user?.profile?.avatar` returns `undefined` instead of throwing. I use it constantly in React when data may not have loaded yet.

**Q57. What is nullish coalescing (`??`)?**
> Returns the right-hand side value only if the left-hand side is `null` or `undefined` (not falsy). `count ?? 0` — if count is `0`, it stays `0`. Unlike `||`, which would replace `0` or `""` with the fallback.

**Q58. What is `localStorage` vs `sessionStorage` vs cookies?**
> - `localStorage`: persists across browser sessions, ~5MB, client-only.
> - `sessionStorage`: cleared when the tab closes.
> - Cookies: can be sent to the server with every request, can be `httpOnly` (JS can't read), can have expiry, smaller size limit. Supabase Auth stores sessions in cookies so they're accessible server-side in Next.js middleware.

**Q59. What is debouncing?**
> Delays executing a function until after a specified time has passed since its last invocation. Used for search inputs — instead of firing an API call on every keystroke, you wait until the user stops typing for 300ms.

**Q60. What is throttling?**
> Ensures a function runs at most once in a given time window, regardless of how often it's called. Used for scroll events or resize handlers.

---

## SECTION 5 — TYPESCRIPT

**Q61. What is TypeScript? Why use it?**
> TypeScript is JavaScript with static types. The compiler catches type errors before runtime — a wrong prop type, a missing property, an incorrect function argument. I use it on all my Next.js projects. It makes refactoring safe and makes the code self-documenting.

**Q62. What is the difference between `interface` and `type`?**
> Both describe object shapes. `interface` can be extended with `extends` and merged with declaration merging. `type` can express unions, intersections, and mapped types. For object shapes I use `type` with TypeScript `type Company = { name: string; url: string }`. For React component props either works.

**Q63. What is a union type?**
> A value that can be one of several types: `type Status = "active" | "pending" | "suspended"`. I use union types for categories, roles, and status fields throughout my projects.

**Q64. What is `any`? Why is it dangerous?**
> `any` turns off all type checking for that value — it can be anything. It defeats the purpose of TypeScript. If I don't know the type, I use `unknown` which forces me to narrow it before using it.

**Q65. What is a generic?**
> A type that takes another type as a parameter: `function first<T>(arr: T[]): T`. The function works for any type. Supabase's client uses generics extensively — `supabase.from('companies').select<Company[]>('*')`.

**Q66. What is `Partial<T>`?**
> Makes all properties of T optional. Useful for update payloads where you only send changed fields: `function updateCompany(id: string, data: Partial<Company>)`.

**Q67. What is type narrowing?**
> Refining a broader type to a specific type inside a conditional block. `if (typeof value === 'string')` — inside that block TypeScript knows `value` is a string.

**Q68. What is a discriminated union?**
> A union of types that share a common literal property used to distinguish them:
> ```ts
> type Result = { success: true; data: Company } | { success: false; error: string }
> ```
> You check `result.success` and TypeScript knows exactly which type you're dealing with.

**Q69. How do you type a React component's props?**
> ```tsx
> type Props = { title: string; count?: number; onClick: () => void }
> export function Card({ title, count = 0, onClick }: Props) { ... }
> ```

**Q70. What is `strict` mode in TypeScript?**
> A `tsconfig.json` flag that enables a set of strict checks: `strictNullChecks`, `noImplicitAny`, `strictFunctionTypes`, etc. I always enable it — it catches the most bugs.

---

## SECTION 6 — REACT

**Q71. What is React?**
> A JavaScript library for building user interfaces through composable components. Instead of manually updating the DOM, you describe what the UI should look like for a given state and React handles the updates efficiently.

**Q72. What is JSX?**
> A syntax extension that lets you write HTML-like markup in JavaScript. It compiles to `React.createElement()` calls. `<Button onClick={fn}>Click me</Button>` becomes a function call that creates a React element.

**Q73. What is `useState`?**
> A hook that adds local state to a functional component. Returns an array: the current state value and a setter function. Calling the setter triggers a re-render. `const [active, setActive] = useState("All")` — I use this for filter chips on the Updates page.

**Q74. What is `useEffect`? What is the dependency array?**
> Runs side effects after render — data fetching, subscriptions, DOM mutations. The dependency array controls when it re-runs: empty array (`[]`) means run once on mount; with values, it runs when those values change; no array means run after every render.

**Q75. How do you clean up a `useEffect`?**
> Return a cleanup function. Example: Supabase channel subscription cleanup:
> ```js
> useEffect(() => {
>   const channel = supabase.channel('xyz').subscribe()
>   return () => { supabase.removeChannel(channel) }
> }, [user?.id])
> ```
> This prevents memory leaks and duplicate subscriptions.

**Q76. What is `useRef`?**
> Returns a mutable ref object that persists across renders without causing re-renders. Used for accessing DOM elements directly, storing previous values, or holding a timer ID.

**Q77. What is `useContext`?**
> Reads from a React context without prop drilling. I use it to access `AuthContext` throughout OmegaEstate — any component can call `useContext(AuthContext)` to get the current user and their profile.

**Q78. What is a custom hook?**
> A function starting with `use` that encapsulates reusable hook logic. In OmegaEstate I have `useActiveProfile`, `useFormPersist`, and `useRealtime` — they extract logic that would otherwise be repeated across multiple components.

**Q79. What is prop drilling? How do you solve it?**
> When you pass props through multiple levels of components just to reach a deeply nested child. Solved with Context API (for state that changes rarely) or a state management library like Zustand for more complex cases.

**Q80. What is controlled vs uncontrolled input?**
> Controlled: React state drives the input value. Every keystroke updates state, which flows back to the input. Uncontrolled: the DOM manages its own state and you read it via a ref. `react-hook-form` uses uncontrolled inputs by default for better performance.

**Q81. What is the virtual DOM?**
> An in-memory representation of the real DOM that React maintains. When state changes, React builds a new virtual DOM, diffs it against the previous one, and only applies the minimum necessary changes to the real DOM. This makes updates efficient.

**Q82. Why does React need a `key` prop in lists?**
> Keys help React identify which items changed, were added, or removed. Without keys, React re-renders every item in a list when one changes. Keys must be stable and unique among siblings — not array indexes for dynamic lists.

**Q83. What is `React.memo`?**
> A higher-order component that prevents a component from re-rendering if its props haven't changed. Useful for expensive components that receive the same props frequently. Don't overuse it — the comparison itself has a cost.

**Q84. What is the difference between `useEffect` and `useLayoutEffect`?**
> `useEffect` runs asynchronously after the browser has painted. `useLayoutEffect` runs synchronously after the DOM update but before the browser paints — useful for reading layout measurements without flicker. In Next.js server components you can't use either.

**Q85. What is `React.Fragment`?**
> A wrapper component that groups multiple elements without adding an extra DOM node. `<>...</>` is shorthand. Useful when a component must return multiple elements but adding a wrapping `<div>` would break the layout.

---

## SECTION 7 — NEXT.JS

**Q86. What is Next.js?**
> A React framework that adds server-side rendering, static generation, file-based routing, API routes, image optimisation, and middleware. It removes the need for separate tools for each of these. I use it for every web project.

**Q87. What is a Server Component?**
> A component that renders on the server. It can directly access databases and APIs without exposing credentials to the browser. It sends rendered HTML (not JavaScript) to the client, reducing bundle size. By default all components in the App Router are Server Components.

**Q88. What is a Client Component? When do you add `'use client'`?**
> Add `'use client'` when the component uses browser APIs, React hooks (`useState`, `useEffect`), or event listeners. It runs in the browser. On the Updates page, my `UpdatesList` component is a Client Component because it uses `useState` for filter chip selection.

**Q89. What is Next.js middleware?**
> Code that runs before a request completes, on the Edge runtime. In OmegaEstate I use it to protect `/dashboard/*` routes — it validates the user's session via `supabase.auth.getUser()` and redirects unauthenticated users to login.

**Q90. Why `getUser()` instead of `getSession()` in middleware?**
> `getSession()` reads the cookie without verifying it with Supabase's server — an attacker could forge a cookie. `getUser()` re-validates the token against the server on every request. For server-side auth checks, always use `getUser()`.

**Q91. What is the Next.js `<Image>` component?**
> A wrapper around `<img>` that automatically optimises images: converts to modern formats (WebP/AVIF), resizes to the display size, lazy loads by default, and prevents layout shift with explicit width/height. I use it for all screenshots and property images.

**Q92. How does Next.js handle environment variables?**
> Variables in `.env.local` are loaded automatically. Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Without the prefix they're server-only. Supabase public keys use `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`. The service role key is server-only — never `NEXT_PUBLIC_`.

**Q93. What is `generateMetadata` in Next.js?**
> An async function exported from a page that returns metadata (title, description, Open Graph, Twitter tags). I use it to generate dynamic titles for each company page in Fonia Labs: the title template in the root layout is `"% | Fonia Labs"` and each page fills in its own title.

**Q94. What is a Route Handler?**
> A file named `route.js` inside `app/api/` that exports HTTP method handlers (`GET`, `POST`, etc.). In OmegaEstate I have route handlers for email sending (`/api/send-email`), geocoding (`/api/geocode`), search (`/api/search`), and notifications (`/api/notify`).

**Q95. What is `opengraph-image.tsx`?**
> A Next.js App Router convention — a file at `app/opengraph-image.tsx` that generates a dynamic Open Graph image using the `ImageResponse` API. The Fonia Labs site uses it to create a branded preview image when the URL is shared on social media.

**Q96. What is the difference between SSR, SSG, ISR, and CSR?**
> - **SSR**: HTML generated on the server on every request. Fresh data, good SEO.
> - **SSG**: HTML generated at build time. Fastest, but data is static until next build.
> - **ISR**: Static pages that revalidate in the background after a set interval.
> - **CSR**: JavaScript runs in the browser to fetch data and render. Slower initial load, worse SEO.

---

## SECTION 8 — SUPABASE & DATABASES

**Q97. What is Supabase?**
> An open-source Firebase alternative built on Postgres. It gives you a hosted PostgreSQL database, authentication (email, OAuth, magic link), real-time subscriptions, file storage, and Edge Functions — all with a client library and auto-generated REST/GraphQL APIs.

**Q98. What is Row Level Security (RLS)?**
> A Postgres feature that enforces access control at the row level using policies. Even if a user sends a direct request to the Supabase API, they can only read or write rows that their policy permits. In OmegaEstate, buyers can only read published properties; agents can only modify their own listings.

**Q99. What is a Supabase policy?**
> A SQL expression attached to a table that evaluates to true or false for each row. Example: `USING (auth.uid() = user_id)` — only allows access if the authenticated user's ID matches the row's user_id column.

**Q100. What is Supabase Realtime?**
> A system that listens to Postgres's logical replication and broadcasts changes to subscribed clients via WebSockets. In OmegaEstate's AuthContext, I subscribe to profile changes — so when an admin verifies an agent, a toast notification appears instantly without the user refreshing.

**Q101. What is a Supabase Edge Function?**
> Serverless functions deployed to Deno on Supabase's infrastructure. They run close to the user for low latency. I used them in OmegaEstate for `approve-agent` (triggered when admin verifies an agent) and `create-ghost-account` (admin support impersonation).

**Q102. What is a JOIN in SQL?**
> Combines rows from two or more tables based on a related column. Types:
> - `INNER JOIN`: only rows that match in both tables.
> - `LEFT JOIN`: all rows from the left table, matching rows from the right (nulls if no match).
> - `RIGHT JOIN`: opposite of LEFT.
> - `FULL JOIN`: all rows from both tables.

**Q103. What is a primary key?**
> A column (or combination) that uniquely identifies each row in a table. It must be unique and not null. In Supabase I typically use `uuid` as the primary key, generated with `gen_random_uuid()`.

**Q104. What is a foreign key?**
> A column that references the primary key of another table, enforcing referential integrity. In OmegaEstate, the `properties` table has a `user_id` foreign key referencing `user_profiles.id`.

**Q105. What is a database transaction?**
> A group of SQL operations that execute as a single unit — either all succeed or all fail together. Ensures data consistency. If you're transferring money between accounts, both the debit and credit must succeed or neither should apply.

**Q106. What is an index in a database?**
> A data structure that speeds up queries on a column at the cost of extra storage and slower writes. Without an index, every query scans all rows. In OmegaEstate I indexed `user_id` on the properties table since queries frequently filter by owner.

**Q107. What is a Supabase migration?**
> A SQL file with a timestamp name that tracks database schema changes in version control. Running `supabase db push` applies them in order. OmegaEstate has 40+ migrations tracking every schema change from initial setup to the latest geospatial features.

**Q108. What is `UPSERT`?**
> An operation that inserts a new row or updates an existing row if there's a conflict (e.g. a duplicate primary key). In Supabase: `supabase.from('profiles').upsert({ id: userId, name: 'Ifidon' })`.

**Q109. What is PLpgSQL?**
> PostgreSQL's procedural language for writing functions and triggers inside the database. I use it in OmegaEstate for RLS policy helper functions (to avoid recursion) and automated triggers like incrementing a view count when a property is visited.

**Q110. What is normalisation?**
> Organising a database to reduce data redundancy and improve integrity. You split data into related tables (e.g. a separate `user_profiles` table instead of storing profile data on every related table). The downside is you need JOINs to reassemble data.

---

## SECTION 9 — FORMS & VALIDATION

**Q111. What is `react-hook-form`?**
> A form library that uses uncontrolled inputs — inputs manage their own DOM state and are only read when needed. This avoids re-rendering the entire form on every keystroke. I use it with Zod for all forms in OmegaEstate and Seek.

**Q112. What is Zod?**
> A TypeScript-first schema validation library. You define the shape and rules of your data: `z.string().email().min(1)`, and it validates at runtime and infers the TypeScript type. Combined with `zodResolver` it connects directly to react-hook-form.

**Q113. How do you validate password confirmation with Zod?**
> Use `.refine()` on the object schema:
> ```ts
> z.object({
>   password: z.string().min(8),
>   confirm: z.string()
> }).refine(d => d.password === d.confirm, {
>   message: "Passwords don't match",
>   path: ["confirm"]
> })
> ```

**Q114. What is client-side vs server-side validation?**
> Client-side validation gives immediate feedback to the user (Zod + react-hook-form). Server-side validation happens in the API route or database and is the security layer — a malicious user can bypass client-side validation entirely. You always need both.

---

## SECTION 10 — APIs & HTTP

**Q115. What are HTTP methods?**
> - `GET`: retrieve data. No body. Should be safe and idempotent.
> - `POST`: create a new resource. Has a body.
> - `PUT`: replace a resource entirely.
> - `PATCH`: partially update a resource (only send changed fields).
> - `DELETE`: remove a resource.

**Q116. What are the most important HTTP status codes?**
> - `200 OK`: success.
> - `201 Created`: resource created successfully.
> - `204 No Content`: success, no body (common for DELETE).
> - `400 Bad Request`: invalid input from client.
> - `401 Unauthorized`: not authenticated.
> - `403 Forbidden`: authenticated but not authorised.
> - `404 Not Found`.
> - `500 Internal Server Error`: something broke on the server.

**Q117. What is the difference between 401 and 403?**
> `401` means the request has no valid credentials — the user is not logged in. `403` means the user is logged in but doesn't have permission — like a buyer trying to access the admin dashboard.

**Q118. What is CORS?**
> Cross-Origin Resource Sharing — a browser security mechanism that blocks requests from one domain to another unless the server explicitly allows it. It protects users from malicious sites making requests on their behalf. The server sends `Access-Control-Allow-Origin` headers. My Next.js API routes handle this automatically.

**Q119. What is `fetch()` and how do you handle errors?**
> The browser's built-in API for HTTP requests. `fetch` only rejects on network failure — a 404 or 500 still resolves. You must check `response.ok`:
> ```js
> const res = await fetch('/api/data')
> if (!res.ok) throw new Error('Request failed')
> const data = await res.json()
> ```

**Q120. What is a webhook?**
> A URL on your server that another service calls when something happens. Instead of polling, the service pushes data to you. For example, a payment provider calls your `/api/webhook` when a payment completes.

---

## SECTION 11 — AUTHENTICATION & SECURITY

**Q121. What is authentication vs authorisation?**
> Authentication: proving who you are (login, JWT verification). Authorisation: determining what you're allowed to do (role checks, RLS policies). In OmegaEstate, middleware handles authentication; RLS policies handle authorisation at the database level.

**Q122. What is a JWT?**
> A JSON Web Token — a base64-encoded string with three parts: header (algorithm), payload (claims like user ID, role, expiry), and signature (cryptographic proof). Supabase issues JWTs on login. The signature means you can't tamper with the payload without invalidating it.

**Q123. What is an `httpOnly` cookie?**
> A cookie that cannot be accessed by JavaScript (`document.cookie`). This prevents XSS attacks from stealing the session token. Supabase SSR stores auth cookies as httpOnly when configured correctly.

**Q124. What is XSS?**
> Cross-Site Scripting — injecting malicious JavaScript into a webpage that other users see. It can steal cookies, redirect users, or log keystrokes. Prevented by escaping user-generated content before rendering and using Content Security Policy headers.

**Q125. What is SQL injection?**
> Inserting SQL code into an input field to manipulate database queries. Prevented by using parameterised queries / prepared statements. Supabase's JS client handles this automatically — never concatenate user input into raw SQL strings.

**Q126. What is CSRF?**
> Cross-Site Request Forgery — tricking a user's browser into making a request to your app using their existing session. Prevented with CSRF tokens, `SameSite` cookies, and checking the `Origin` header.

**Q127. What is an open redirect?**
> When a redirect URL comes from user input and is blindly followed — an attacker can redirect users to a malicious site. In OmegaEstate's middleware, I prevent this by only allowing relative paths: `if (redirectTo && redirectTo.startsWith('/'))`.

**Q128. What is a 6-digit OTP / email verification code?**
> A one-time password sent to a user's email to verify they own it. Generated with `Math.floor(Math.random() * 900000) + 100000` to always get a 6-digit number. Stored server-side with an expiry timestamp (e.g. 10 minutes). The user enters it, the server compares and marks the email as verified.

**Q129. What is bcrypt / password hashing?**
> Passwords are never stored in plain text. A hashing algorithm (bcrypt) converts the password to a fixed-length hash that cannot be reversed. A random "salt" is added before hashing so two identical passwords produce different hashes. Supabase Auth handles this automatically.

**Q130. What is Row Level Security as a security layer?**
> Even if an attacker bypasses your application code and calls the Supabase API directly with a valid JWT, RLS policies enforce what data they can access at the database level. It's defence in depth — the database itself enforces access control, not just the application.

---

## SECTION 12 — TOOLING & BUILD

**Q131. What is Vite?**
> A modern frontend build tool that uses native ES modules in development (no bundling — instant server start) and Rollup for production builds. Much faster than Webpack. I use it for the Seek project. Next.js uses Turbopack (based on Rust) for its dev server.

**Q132. What is tree shaking?**
> The bundler removes code that is imported but never called. If you import only `{ Button }` from a component library, the rest of the library is excluded from the bundle. Vite and Next.js both do this automatically.

**Q133. What is code splitting?**
> Breaking the JavaScript bundle into smaller chunks that load on demand. Next.js does this automatically per page — you only load the code for the current page. `dynamic import()` enables code splitting within a page.

**Q134. What is an environment variable and why can't you hardcode secrets?**
> Environment variables store configuration that varies between environments (dev, staging, production) and sensitive values (API keys, database passwords). Hardcoded secrets are committed to Git and visible to anyone with repo access. They also can't be rotated without a code change.

**Q135. What are path aliases?**
> Shortcuts that replace long relative paths. `@/components/Button` instead of `../../../../components/Button`. Configured in `tsconfig.json` under `paths`. I use `@/` in all my Next.js projects.

**Q136. What is `postcss.config.js`?**
> Configuration for PostCSS — a tool that transforms CSS with plugins. Tailwind CSS runs as a PostCSS plugin, which is why you need this config in Tailwind projects.

---

## SECTION 13 — PERFORMANCE

**Q137. What is Core Web Vitals?**
> Google's set of performance metrics that affect search ranking and user experience:
> - **LCP** (Largest Contentful Paint): how fast the main content loads. Target: under 2.5s.
> - **INP** (Interaction to Next Paint): how fast the page responds to user interaction. Target: under 200ms.
> - **CLS** (Cumulative Layout Shift): how much the layout shifts unexpectedly. Target: under 0.1.

**Q138. What is hydration?**
> After the server sends HTML, React runs in the browser and attaches event listeners to the existing DOM — making it interactive. If the server-rendered HTML doesn't match what React expects, you get a hydration error.

**Q139. What is lazy loading images?**
> Images below the fold load only when they're near the viewport, rather than all at once on page load. Next.js `<Image>` does this by default. It reduces initial page load time significantly on image-heavy pages like OmegaEstate's property listings.

**Q140. What is image compression and why did you use it?**
> Reducing image file size before upload. In OmegaEstate, users upload property photos from their phones — these can be 5–10MB each. I use `browser-image-compression` to compress client-side before uploading to Supabase Storage, saving bandwidth and storage costs.

**Q141. What is a CDN?**
> A Content Delivery Network — a distributed network of servers worldwide that serves static assets (images, CSS, JS) from the server closest to the user. Vercel automatically serves Next.js static assets through their CDN.

**Q142. What is memoisation?**
> Caching the result of an expensive computation so it doesn't re-run unless inputs change. In React, `useMemo` memoises a computed value; `useCallback` memoises a function reference. In the database, query result caching does the same.

---

## SECTION 14 — TESTING

**Q143. What is Playwright?**
> An E2E testing framework that controls a real browser (Chromium, Firefox, Safari). It simulates real user interactions — navigating to a URL, clicking a button, filling a form — and makes assertions on what appears. I use it in OmegaEstate and my Portfolio project.

**Q144. What is a smoke test?**
> A quick, high-level test that verifies the most critical paths work — login, registration, viewing a listing. If the smoke test passes, you know the app isn't fundamentally broken. My OmegaEstate smoke test covers all major user flows and saves screenshots at each step.

**Q145. What is the difference between unit, integration, and E2E testing?**
> - **Unit**: tests a single function in isolation — no network, no database.
> - **Integration**: tests multiple units working together — a component with its hooks and child components.
> - **E2E**: tests the full system through a browser — real HTTP requests, real database interactions.

**Q146. What is mocking?**
> Replacing real dependencies (API calls, databases) with fake versions that return controlled data in tests. It makes tests faster and more predictable. For E2E tests I prefer not mocking — I test against a real Supabase test environment.

---

## SECTION 15 — GIT

**Q147. What is the difference between `git merge` and `git rebase`?**
> `merge` creates a merge commit that joins two branches, preserving full history. `rebase` replays your commits on top of the target branch — cleaner linear history but rewrites commit SHAs. Never rebase shared/public branches.

**Q148. What is `git stash`?**
> Temporarily saves uncommitted changes so you can switch branches without losing work. `git stash pop` brings them back.

**Q149. What is `git reset --soft` vs `--hard`?**
> - `--soft`: undoes the commit, keeps changes staged.
> - `--mixed` (default): undoes the commit, unstages changes.
> - `--hard`: undoes the commit and discards all changes permanently. Destructive — be careful.

**Q150. What is `git revert`?**
> Creates a new commit that undoes a previous commit. Safe for shared branches because it doesn't rewrite history — it adds on top.

**Q151. What is a merge conflict?**
> When two branches changed the same line of the same file differently. Git can't auto-merge so it marks the conflict and asks you to resolve it manually, then commit the resolution.

**Q152. What is `HEAD` in Git?**
> A pointer to the currently checked-out commit or branch. `HEAD~1` means one commit behind HEAD.

---

## SECTION 16 — DEPLOYMENT

**Q153. What is Vercel?**
> A cloud platform built for Next.js (they created it). Push to GitHub and it automatically builds and deploys. Preview deployments for every PR. Edge functions, image optimisation, and analytics built in. Every project in my portfolio deploys to Vercel.

**Q154. What is CI/CD?**
> Continuous Integration / Continuous Deployment. CI: automatically run tests when code is pushed. CD: automatically deploy to production when tests pass. GitHub Actions is common for CI; Vercel handles CD automatically on push.

**Q155. What is a preview deployment?**
> An isolated deployment of a branch — every PR gets its own URL like `my-app-git-feature-branch.vercel.app`. You can test changes before merging to main without touching production.

**Q156. What is DNS?**
> Domain Name System — translates human-readable domain names (`omegaestate.homes`) to IP addresses. When someone types the domain, DNS resolves it to Vercel's servers. OmegaEstate has a custom domain at `omegaestate.homes`.

---

## SECTION 17 — MAPS & GEOSPATIAL

**Q157. What is Leaflet / react-leaflet?**
> Leaflet is an open-source JavaScript map library. react-leaflet wraps it in React components. I use it in OmegaEstate to display property locations on a map with markers and popups. It's free unlike Google Maps.

**Q158. What is geocoding?**
> Converting a text address into geographic coordinates (latitude, longitude). In OmegaEstate I have a `/api/geocode` route that takes an address string and returns coordinates for map placement.

**Q159. What is PostGIS?**
> A Postgres extension that adds support for geographic data types and spatial queries. I use it in OmegaEstate for comparable sales — finding properties within a certain distance of a listing using `ST_DWithin`. This powers the "similar properties nearby" feature.

---

## SECTION 18 — REALTIME & WEBSOCKETS

**Q160. What is WebSocket?**
> A persistent, full-duplex communication channel between browser and server — unlike HTTP which is request-response. WebSocket stays open so the server can push data to the client at any time. Supabase Realtime uses WebSocket under the hood.

**Q161. How does your real-time notification system work?**
> In OmegaEstate's AuthContext, after login I open a Supabase channel subscribed to `postgres_changes` on the `user_profiles` table filtered by `id=eq.${user.id}`. When an admin updates the user's `is_verified` status, Supabase pushes the change via WebSocket and I display a toast: "Your account has been verified!"

**Q162. Why is cleanup important for subscriptions?**
> If you don't unsubscribe when a component unmounts, the subscription keeps running after the component is gone. This causes memory leaks and potentially fires state updates on unmounted components (causing errors). I always return a cleanup function from `useEffect`.

---

## SECTION 19 — THREE.JS & ANIMATION

**Q163. What is Three.js and why did you use it in your portfolio?**
> Three.js is a JavaScript library for 3D graphics using WebGL. I used it (`@react-three/fiber` — the React wrapper) in my portfolio to add an interactive 3D element. It makes the portfolio visually distinctive and demonstrates technical range beyond standard 2D interfaces.

**Q164. What is Framer Motion?**
> A React animation library. You replace `<div>` with `<motion.div>` and add `initial`, `animate`, `exit` props. It handles spring physics, keyframes, gestures, and page transitions. I use it in FonTech and the Portfolio for entrance animations and hover effects.

---

## SECTION 20 — PYTHON & FASTAPI

**Q165. What is FastAPI?**
> A modern Python web framework for building APIs. It's fast (uses async), auto-generates OpenAPI docs, and uses Pydantic for request/response validation. I used it in `task-a-review-webapp` as the backend for a review simulator.

**Q166. What is Pydantic?**
> A Python library for data validation using type annotations. You define a class inheriting `BaseModel` with typed fields, and Pydantic validates incoming data and returns clean Python objects. FastAPI uses it for request bodies and response schemas.

**Q167. What is Uvicorn?**
> An ASGI server that runs FastAPI in production. ASGI (Asynchronous Server Gateway Interface) supports async Python, unlike the older WSGI. You run `uvicorn main:app --host 0.0.0.0 --port 8000`.

---

## SECTION 21 — UI LIBRARIES

**Q168. What is Radix UI?**
> A library of unstyled, accessible React components — dialogs, dropdowns, accordions, tooltips, etc. They handle all the keyboard interactions, ARIA attributes, and focus management correctly. You bring your own styles. I use it in Seek and my Portfolio.

**Q169. What is a headless UI component?**
> A component that provides behaviour and accessibility without any visual styling. You style it however you want. This is better than opinionated libraries (like Bootstrap) because it doesn't conflict with your design system.

**Q170. What is Sonner?**
> A toast notification library for React. I use it in OmegaEstate and Fonia Labs for user feedback — success messages, error alerts, real-time update notifications. Clean API: `toast.success('Saved!')`.

**Q171. What is `class-variance-authority` (CVA)?**
> A utility for building variant-based component classes with Tailwind. Instead of conditional string concatenation, you define variants declaratively:
> ```ts
> const button = cva("base-class", {
>   variants: { size: { sm: "text-sm px-2", lg: "text-lg px-6" } }
> })
> ```

---

## SECTION 22 — SEO & OPEN GRAPH

**Q172. What is Open Graph?**
> A protocol (meta tags) that controls how your page looks when shared on social media — the preview card with image, title, and description. I implemented full OG metadata in Fonia Labs including a dynamically generated `opengraph-image` using Next.js `ImageResponse`.

**Q173. What is `metadataBase`?**
> A Next.js metadata option that sets the base URL for resolving relative URLs in metadata (like OG image paths). Without it, Next.js can't generate the full URL for the image. I set it to `https://fonia-labs.vercel.app` in the root layout.

**Q174. Why is SSR better for SEO than CSR?**
> Search engine crawlers receive the HTML and can index the content immediately. With CSR, the crawler gets an empty HTML shell and has to execute JavaScript to see the content — which many crawlers do poorly. Next.js SSR sends complete HTML, making every page fully indexable.

---

## SECTION 23 — COMMON CODING ANSWERS

**Q175. Reverse a string.**
> ```js
> const reverse = str => str.split('').reverse().join('')
> ```

**Q176. Check if a palindrome.**
> ```js
> const isPalindrome = str => {
>   const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '')
>   return clean === clean.split('').reverse().join('')
> }
> ```

**Q177. Remove duplicates from an array.**
> ```js
> const unique = arr => [...new Set(arr)]
> ```

**Q178. Implement debounce.**
> ```js
> function debounce(fn, delay) {
>   let timer
>   return (...args) => {
>     clearTimeout(timer)
>     timer = setTimeout(() => fn(...args), delay)
>   }
> }
> ```

**Q179. What is the output of: `console.log(1); setTimeout(() => console.log(2), 0); console.log(3)`?**
> `1`, `3`, `2`. The `setTimeout` callback goes to the macrotask queue. The call stack runs `1` and `3` synchronously first. Then the event loop picks up the timer callback and runs `2`.

**Q180. What is the output of `0.1 + 0.2 === 0.3`?**
> `false`. Floating-point binary representation can't exactly represent `0.1` or `0.2`, so `0.1 + 0.2` equals `0.30000000000000004`. Use `Math.abs(a - b) < Number.EPSILON` for float comparisons.

**Q181. FizzBuzz.**
> ```js
> for (let i = 1; i <= 100; i++) {
>   if (i % 15 === 0) console.log('FizzBuzz')
>   else if (i % 3 === 0) console.log('Fizz')
>   else if (i % 5 === 0) console.log('Buzz')
>   else console.log(i)
> }
> ```

**Q182. Deep clone an object.**
> ```js
> const clone = structuredClone(obj) // modern, handles dates, sets, maps
> // or: JSON.parse(JSON.stringify(obj)) — loses functions, dates become strings
> ```

**Q183. Implement `Array.prototype.map` from scratch.**
> ```js
> function myMap(arr, fn) {
>   const result = []
>   for (let i = 0; i < arr.length; i++) result.push(fn(arr[i], i, arr))
>   return result
> }
> ```

**Q184. Group an array of objects by a key.**
> ```js
> const groupBy = (arr, key) =>
>   arr.reduce((acc, item) => {
>     const group = item[key]
>     acc[group] = acc[group] ?? []
>     acc[group].push(item)
>     return acc
>   }, {})
> ```

---

## SECTION 24 — ACCESSIBILITY

**Q185. What is WCAG?**
> Web Content Accessibility Guidelines — international standards for making web content accessible to people with disabilities. Level AA is the common target. It covers perceivability (alternatives for non-text content), operability (keyboard access), understandability, and robustness.

**Q186. What is focus trapping?**
> When a modal is open, keyboard focus should stay inside it — pressing Tab should cycle through the modal's focusable elements, not reach elements behind it. Radix UI Dialog handles this automatically, which is one reason I prefer it for modals.

**Q187. What is `aria-live`?**
> An attribute that tells screen readers to announce changes to that element without the user explicitly focusing it. Used for toast notifications, form errors, and real-time updates. `aria-live="polite"` announces when the user is idle; `"assertive"` interrupts immediately.

**Q188. How do you make a custom dropdown accessible?**
> It needs keyboard navigation (arrow keys to move between options, Enter to select, Escape to close), `role="combobox"` or `role="listbox"`, `aria-expanded`, and proper focus management. This is exactly what Radix UI's `DropdownMenu` provides — which is why I use it rather than building from scratch.

---

## SECTION 25 — SOFT SKILLS

**Q189. How do you ask for help without wasting people's time?**
> I spend at least 30 minutes trying to solve it myself first. When I ask, I share exactly what I tried, what I expected, what happened instead, and the specific error message. This usually means the person answering can help in one response rather than a back-and-forth.

**Q190. How do you onboard yourself to a new codebase?**
> Start with the README and package.json to understand the tech stack. Then trace one complete user flow from UI to database — follow a button click through to the API and back. After that, read the folder structure and understand how things are organised. Then look at recent commits to see what's changing.

**Q191. Describe a time you debugged a difficult problem.**
> In OmegaEstate I had infinite recursion in Supabase RLS policies — a policy on `user_profiles` called a function that queried `user_profiles` again, triggering the policy again. The error was cryptic. I used the Supabase SQL editor to test policies in isolation, discovered the recursion chain, and rewrote the policies using a security definer function that bypasses RLS to break the cycle.

**Q192. How do you balance shipping fast vs writing clean code?**
> For a prototype or MVP, I optimise for working and shipped over perfect. For production, I don't cut corners on security or data integrity — RLS policies, input validation, and error handling are non-negotiable. Styling and abstraction can be refactored later; a security hole can't.

**Q193. What do you do when requirements change mid-development?**
> Clarify the impact scope first — does this change the data model, the UI, or just copy? If it touches the database, I write a new migration rather than modifying the old one. Then update the components and types. I commit before and after so I can roll back cleanly.

---

## SECTION 26 — WHAT TO SAY WHEN YOU DON'T KNOW

**If you don't know something, say:**
> "I haven't implemented that specific thing yet, but based on how [related concept] works, I'd approach it by [logical reasoning]."

> "That's something I know exists but would look up in the docs before giving you a specific answer — I'd rather be accurate than guess."

> "I've worked with something similar in [project] — the concept is [explain it] — but this exact case I'd need to look into."

**Never say:**
> "I have no idea." ← Too final.
> "I know that!" then give a wrong answer ← Damages trust.

---

## YOUR KEY NUMBERS (memorise these)

- **Projects live:** 10+ across Fonia Labs ecosystem
- **OmegaEstate migrations:** 40+ (shows database discipline)
- **OmegaEstate roles:** 4 (admin, agent, buyer, seller)
- **Stack:** Next.js 16, React 19, Supabase, Tailwind CSS 4, TypeScript
- **Testing:** Playwright E2E
- **Deployment:** Vercel (every project)
- **Custom domains:** omegaestate.homes, fonia-labs.vercel.app

---

## YOUR ONE-PARAGRAPH PITCH

> "I build full-stack web apps with Next.js and Supabase as my primary stack. My most complex project is OmegaEstate — a live real estate platform with four user roles, Row Level Security in PostgreSQL, real-time messaging, property listings with interactive maps, geospatial comparable sales using PostGIS, a full admin dashboard with agent verification, and Playwright E2E tests. I've shipped over ten other projects across the Fonia Labs ecosystem covering TypeScript, Python (FastAPI), Three.js, C#, and various toolchains. I'm at the stage where I've proven I can ship production software and I want to learn what professional engineering looks like at scale inside a real team."

---

*Read this through twice before the interview. Focus on the sections that match the job description most closely.*
