/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",      // 👈 关键修改：去掉了 src/
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // 👈 如果你有 components 文件夹也改一下
  ],
  theme: {
    extend: {},
  },
  plugins: [], // 👈 先把插件清空，防止报错
};
