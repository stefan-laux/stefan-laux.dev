"use client";

import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Card {
  type: "project" | "fact";
  title?: string;
  image?: string;
  link?: string;
  text?: string;
  color?: string;
}

const cards: Card[] = [
  {
    type: "fact",
    text: "",
    color: "#262626",
  },
  {
    type: "project",
    title: "michelleschaerer",
    image: "/lander/michelle.webp",
    link: "https://michelle.stefan-laux.dev",
  },
  {
    type: "project",
    text: "GitHub",
    color: "#1a1a1a",
    link: "https://github.com/stefan-laux",
  },
  {
    type: "fact",
    text: "",
    color: "#1f1f1f",
  },
  {
    type: "project",
    title: "money-planner",
    image: "/lander/moneyplanner.png",
    link: "https://moneyplanner.stefan-laux.dev",
  },
  {
    type: "project",
    text: "Stefan Laux",
    color: "#2a2a2a",
    link: "https://www.linkedin.com/in/stefanlaux-/",
  },
  {
    type: "project",
    title: "voiceassistant",
    image: "/lander/voiceassistant.png",
    link: "https://voiceassistant.stefan-laux.dev",
  },
  {
    type: "project",
    title: "CV",
    text: "CV",
    color: "#2d2d2d",
    link: "/lander/CV-English.pdf",
  },
  {
    type: "fact",
    text: "",
    color: "#171717",
  },
  {
    type: "project",
    title: "six-webcomponents",
    image: "/lander/six-webcomponents.png",
    link: "https://six-group.github.io/six-webcomponents/v5/",
  },
  {
    type: "project",
    title: "outfit.build",
    image: "/lander/outftibuilder.png",
    link: "https://outfit.build",
  },
  {
    type: "fact",
    text: "",
    color: "#242424",
  },
  {
    type: "fact",
    text: "",
    color: "#1c1c1c",
  },
];

const App = () => {
  const [imageUrls, setImageUrls] = useState<
    { image: string; link?: string }[]
  >([]);
  const [showIntro, setShowIntro] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const generateImageUrls = async () => {
      const items = await Promise.all(
        cards.map(async (card) => {
          if (card.type === "project" && card.image) {
            return {
              image: card.image || "",
              link: card.link,
            };
          } else {
            const imageUrl = await new Promise<string>((resolve) => {
              const canvas = document.createElement("canvas");
              canvas.width = 970;
              canvas.height = 700;
              const context = canvas.getContext("2d");

              if (context && card.color) {
                context.fillStyle = card.color;
                context.fillRect(0, 0, canvas.width, canvas.height);

                if (card.text) {
                  const displayText =
                    card.text === "Stefan Laux" || card.text === "CV"
                      ? card.text.toUpperCase()
                      : card.text;

                  context.fillStyle = "white";
                  const fontSize =
                    card.text === "GitHub" ||
                    card.text === "Stefan Laux" ||
                    card.text === "CV"
                      ? 90
                      : 72;
                  context.font = `bold ${fontSize}px system-ui, -apple-system, sans-serif`;
                  context.textAlign = "center";
                  context.textBaseline = "middle";

                  const textY = canvas.height / 2 - 80;
                  context.fillText(displayText, canvas.width / 2, textY);

                  context.fillStyle = "white";
                  const iconY = textY + 120;
                  const iconSize = 100;
                  const centerX = canvas.width / 2;

                  if (card.text === "GitHub") {
                    context.save();
                    context.translate(
                      centerX - iconSize / 2,
                      iconY - iconSize / 2,
                    );
                    context.scale(iconSize / 24, iconSize / 24);
                    context.beginPath();
                    const p = new Path2D(
                      "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                    );
                    context.fill(p);
                    context.restore();
                  } else if (card.text === "Stefan Laux") {
                    context.save();
                    context.translate(
                      centerX - iconSize / 2,
                      iconY - iconSize / 2,
                    );
                    context.scale(iconSize / 24, iconSize / 24);
                    context.beginPath();
                    const p = new Path2D(
                      "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                    );
                    context.fill(p);
                    context.restore();
                  } else if (card.text === "CV") {
                    context.save();
                    context.translate(
                      centerX - iconSize / 2,
                      iconY - iconSize / 2,
                    );
                    context.scale(iconSize / 24, iconSize / 24);
                    context.beginPath();
                    const p = new Path2D(
                      "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zM8 18v-1h8v1H8zm0-4v-1h8v1H8zm0-4v-1h5v1H8z",
                    );
                    context.fill(p);
                    context.restore();
                  }
                }
              }

              resolve(canvas.toDataURL());
            });

            return {
              image: imageUrl,
              link: card.link,
            };
          }
        }),
      );

      setImageUrls(items);
    };

    generateImageUrls();
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setShowIntro(false);
      return;
    }

    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, [isMobile]);

  return (
    <div className="w-screen h-screen overflow-hidden bg-white dark:bg-neutral-950 flex items-center justify-center relative">
      <AnimatePresence mode="wait">
        {showIntro && !isMobile && (
          <motion.div
            key="intro"
            className="absolute inset-0 z-50 flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              exit={{ clipPath: "inset(0 0 0 100%)" }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                delay: 1.0,
                exit: {
                  duration: 1.0,
                  ease: "easeInOut",
                  delay: 0,
                },
              }}
              className="bg-white w-[700px] h-[120px] flex items-center justify-center"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 2.0,
                }}
                className="text-black text-6xl font-bold tracking-wide"
              >
                PROJECT PORTFOLIO
              </motion.h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {imageUrls.length > 0 && <ThreeDMarquee images={imageUrls} />}
    </div>
  );
};

export default App;
