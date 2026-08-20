export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Only apply `hover:` styles on devices that truly support hovering
    // (mouse/trackpad), so tap targets on touchscreens don't get stuck
    // showing their hover state after a tap.
    function ({ addVariant }) {
      addVariant("hover", "@media (hover: hover) and (pointer: fine) { &:hover }");
      addVariant("group-hover", "@media (hover: hover) and (pointer: fine) { :merge(.group):hover & }");
    },
  ],
}
