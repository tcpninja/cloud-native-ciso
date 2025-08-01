
# 🧠 Codex Prompt: Cloud Native CISO

**Project:** `cloud-native-ciso`  
**Context:** You are working inside a GitHub repo with full access to all source files.

---

## @project-tech-stack

- Framework: **Astro** (static site generation)  
- Deployment: **Cloudflare Pages**  
- Styling: Custom CSS using `global.css`  
- No Tailwind config or plugins  
- Theme logic handled with `[data-theme="light"]` and `[data-theme="dark"]`  
- Astro components follow modular, semantic patterns

---

## @design-system (from `global.css`)

### 🎨 Theme Variables
```css
:root {
  --font-base: 'Inter', sans-serif;
  --font-logo: 'Satoshi', sans-serif;
  --font-headline: 'DM Sans', 'Inter', sans-serif;
  --font-mono: 'Fira Code', monospace;

  --color-primary: #6b445f;
  --color-secondary: #d8a646;
  --color-accent: #5f6caf;

  --color-background: #0f0f11;
  --color-background-light: #1a1a1f;
  --color-background-dark: #08080a;

  --color-headline: #ffffff;
  --color-body: #c7c7c7;

  --shadow-elevated: 0px 4px 16px rgba(0, 0, 0, 0.3);
  --hero-overlay-tint: rgba(0, 0, 0, 0.4);
}
```

### 🧭 Style Characteristics
- Semantic HTML, editorial layout, minimal geometric imagery
- `prefers-reduced-motion` aware
- Typography/spacing via CSS variables
- Theme-aware hover/focus/overlay logic

---

## @component-conventions

Component files live in `/src/components/`  
UI components like `Button.astro`, `ThemeToggle.astro` → `/src/components/ui/`  
Layout wrapper: `Layout.astro`  
Pages: `/src/pages/*.astro`  
Menu config: `/src/data/menu.ts`, `/src/data/config.ts`

### Example: Button.astro
```astro
<button class:list={[
  'inline-flex items-center px-4 py-2 rounded-lg font-medium transition-colors',
  variant === 'primary' ? 'bg-[var(--color-primary)] text-white' : '',
  variant === 'ghostLight' ? 'bg-transparent text-[var(--color-headline)] hover:bg-[var(--color-background-light)]' : '',
]}>
  {children}
</button>
```

---

## @constraints

- ❌ No Tailwind config or plugins  
- ❌ No third-party UI libraries  
- ✅ Use only `global.css` utilities  
- ✅ Use `class:list` bindings in `.astro`  
- ✅ Theme overlays via CSS `var()` and `[data-theme]` logic

---

## @visual-branding-guidelines

- Plum, ochre, neutral gray palette  
- Abstract/modern geometric imagery (spheres, grids, signal rings)  
- No cliché hacker motifs  
- Subtle gradients and soft shadows  
- Example image: `/public/images/hero-default.jpg`

---

## @expected-codex-behavior

- ✅ Generate Astro/CSS/JS files  
- ✅ Refactor components using actual repo file structure  
- ✅ Ask for file contents when context is missing  
- ✅ Use accessible, semantic HTML  
- ✅ Respect Cloud Native CISO tone: calm, modern, confident

---

## @task-types Supported

- Generate new hero variants (e.g., BlogHero.astro)  
- Insert metadata and SEO tags  
- Refactor headers/footers  
- Create CTA or index sections  
- Suggest motion-safe UI enhancements

---

## @checklist

- ✅ Valid Astro, CSS, or TypeScript syntax  
- ✅ Scoped imports and real file paths  
- ✅ Supports light/dark themes  
- ✅ No third-party plugins or libraries  
- ✅ Matches brand visual system

---

You are working inside a GitHub repo with access to source. Ask for files if needed. Do not hallucinate variables or structure. Follow CNCISO conventions and visual identity.
