"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Spotlight as SpotlightNew } from "./spotlight-new";

interface MarqueeItem {
  image: string;
  link?: string;
}

export const ThreeDMarquee = ({
  images,
  className,
}: {
  images: MarqueeItem[];
  className?: string;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    const filteredImages = images.filter((item) => {
      if (item.link) {
        return true;
      }
      if (!item.image.startsWith("data:image")) {
        return true;
      }
      return false;
    });

    const mobileOrder = [
      "github.com/stefan-laux",
      "michelle.stefan-laux.dev",
      "six-group.github.io",
      "linkedin.com/in/stefanlaux",
      "/lander/CV-English.pdf",
      "voiceassistant.stefan-laux.dev",
      "outfit.build",
      "moneyplanner.stefan-laux.dev",
    ];

    const sortedImages = filteredImages.sort((a, b) => {
      const indexA = mobileOrder.findIndex((pattern) =>
        a.link?.includes(pattern),
      );
      const indexB = mobileOrder.findIndex((pattern) =>
        b.link?.includes(pattern),
      );
      return indexA - indexB;
    });

    return (
      <div
        className={cn(
          "w-full h-full overflow-y-auto overflow-x-hidden p-4",
          className,
        )}
      >
        <div className="text-center mb-6 mt-2">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
            Press a card to see the project
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto pb-8">
          {sortedImages.map((item, index) => {
            const ImageComponent = (
              <motion.img
                whileTap={{ scale: 0.95 }}
                key={index + item.image}
                src={item.image}
                alt={`Image ${index + 1}`}
                className="aspect-[970/700] rounded-lg object-cover shadow-lg w-full"
              />
            );

            return (
              <div className="relative" key={index + item.image}>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {ImageComponent}
                  </a>
                ) : (
                  ImageComponent
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const chunkSize = Math.ceil(images.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });

  return (
    <div
      className={cn("mx-auto block h-full w-full overflow-hidden", className)}
    >
      <div className="flex size-full items-center justify-center">
        <div className="size-[1720px] shrink-0 scale-75 sm:scale-100 lg:scale-125">
          <div
            style={{
              transform:
                "rotateX(55deg) rotateY(0deg) rotateZ(-45deg) translateY(10%) translateX(10%)",
            }}
            className="grid size-full origin-center grid-cols-4 gap-8 transform-3d"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={{ y: colIndex % 2 === 0 ? 100 : -100 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 10 : 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                key={colIndex + "marquee"}
                className="flex flex-col items-start gap-8"
                style={{ willChange: "transform" }}
              >
                <GridLineVertical className="-left-4" offset="80px" />
                {subarray.map((item, imageIndex) => {
                  const isGitHub = item.link?.includes("github.com");
                  const isCV = item.link?.includes("CV-English.pdf");
                  const isStefanLaux = item.link?.includes("linkedin.com");

                  return (
                    <div
                      className="relative group"
                      key={imageIndex + item.image}
                    >
                      <GridLineHorizontal className="-top-4" offset="20px" />
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <motion.div
                            whileHover={{
                              y: -10,
                            }}
                            transition={{
                              duration: 0.3,
                              ease: "easeInOut",
                            }}
                            className="relative overflow-hidden rounded-lg"
                          >
                            {isGitHub && (
                              <SpotlightNew
                                translateY={-250}
                                width={600}
                                height={1000}
                                smallWidth={300}
                                duration={5}
                                xOffset={200}
                              />
                            )}
                            {isCV && (
                              <SpotlightNew
                                translateY={-250}
                                width={600}
                                height={1000}
                                smallWidth={300}
                                duration={6}
                                xOffset={200}
                              />
                            )}
                            {isStefanLaux && (
                              <SpotlightNew
                                gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 0%, 95%, .15) 0, hsla(0, 0%, 85%, .08) 50%, hsla(0, 0%, 75%, 0) 80%)"
                                gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 95%, .12) 0, hsla(0, 0%, 85%, .06) 80%, transparent 100%)"
                                gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 95%, .08) 0, hsla(0, 0%, 75%, .04) 80%, transparent 100%)"
                                translateY={-250}
                                width={600}
                                height={1000}
                                smallWidth={300}
                                duration={7}
                                xOffset={200}
                              />
                            )}
                            <img
                              key={imageIndex + item.image}
                              src={item.image}
                              alt={`Image ${imageIndex + 1}`}
                              className="aspect-[970/700] rounded-lg object-cover ring ring-gray-950/5 hover:shadow-2xl cursor-pointer"
                              width={970}
                              height={700}
                            />
                            <div className="absolute inset-0 flex items-end justify-center pb-8 pointer-events-none">
                              <div className="bg-white/95 dark:bg-black/95 backdrop-blur-sm px-8 py-4 rounded-full shadow-xl transform translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                                <span className="text-black dark:text-white font-bold text-2xl whitespace-nowrap">
                                  Visit →
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        </a>
                      ) : (
                        <motion.img
                          whileHover={{
                            y: -10,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                          }}
                          key={imageIndex + item.image}
                          src={item.image}
                          alt={`Image ${imageIndex + 1}`}
                          className="aspect-[970/700] rounded-lg object-cover ring ring-gray-950/5 hover:shadow-2xl"
                          width={970}
                          height={700}
                        />
                      )}
                    </div>
                  );
                })}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px",
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    ></div>
  );
};

const GridLineVertical = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset || "150px",
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    ></div>
  );
};
