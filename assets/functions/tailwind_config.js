  tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            fontFamily: {
              display: ["Syne", "sans-serif"],
              body: ["DM Sans", "sans-serif"],
              bangla: ["Hind Siliguri", "sans-serif"],
            },
            colors: {
              accent: { DEFAULT: "#F59E0B", light: "#FBBF24", dark: "#D97706" },
              cyan: { brand: "#06B6D4" },
              emerald: { brand: "#10B981" },
              dark: {
                deep: "#060A14",
                mid: "#0D1526",
                card: "#111D33",
                card2: "#0F1A2E",
              },
            },
            animation: {
              "pulse-glow": "pulseGlow 6s ease-in-out infinite",
              blink: "blink 1.5s ease-in-out infinite",
              "wa-ring": "waRing 2.6s ease-out infinite",
              "wa-ring-del": "waRing 2.6s ease-out 0.9s infinite",
              "dot-pop": "dotPop 0.4s cubic-bezier(.34,1.56,.64,1) 1.2s both",
              "fade-up-1": "fadeUp 0.8s ease both",
              "fade-up-2": "fadeUp 0.8s ease 0.15s both",
              "fade-up-3": "fadeUp 0.8s ease 0.25s both",
              "fade-up-4": "fadeUp 0.8s ease 0.35s both",
              "fade-up-5": "fadeUp 0.8s ease 0.45s both",
              "fade-up-6": "fadeUp 0.8s ease 0.6s both",
            },
            keyframes: {
              pulseGlow: {
                "0%,100%": {
                  opacity: "0.7",
                  transform: "translateX(-50%) scale(1)",
                },
                "50%": {
                  opacity: "1",
                  transform: "translateX(-50%) scale(1.08)",
                },
              },
              blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.3" } },
              waRing: {
                "0%": { transform: "scale(1)", opacity: "0.7" },
                "100%": { transform: "scale(1.9)", opacity: "0" },
              },
              dotPop: {
                from: { transform: "scale(0)" },
                to: { transform: "scale(1)" },
              },
              fadeUp: {
                from: { opacity: "0", transform: "translateY(28px)" },
                to: { opacity: "1", transform: "translateY(0)" },
              },
            },
            backgroundImage: {
              "grid-dark":
                "linear-gradient(rgba(245,158,11,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(245,158,11,0.04) 1px,transparent 1px)",
              "grid-light":
                "linear-gradient(rgba(245,158,11,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(245,158,11,0.08) 1px,transparent 1px)",
            },
          },
        },
      };