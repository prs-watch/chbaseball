/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: {
        sm: {
          css: {
            '--tw-prose-bullets': '#374151',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
