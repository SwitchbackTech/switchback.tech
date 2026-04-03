"use client";
import Typewriter from "typewriter-effect";

import LinkItem from "next/link";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";

import { useState, useEffect } from "react";

const linkRowClass =
  "group flex items-center space-x-2 text-warm-700 transition-colors duration-200 hover:text-red-900";

const linkLabelClass = "font-bold transition-[font-weight] duration-200 group-hover:font-extrabold";

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-warm-900">
      <div className="max-w-2xl mx-auto p-8 space-y-8 animate-fade-in h-56">
        <h1 className="text-4xl font-bold mb-4 text-warm-800">
          {mounted && (
            <Typewriter
              options={{
                strings: [
                  "Hey, I'm Tyler Dane.",
                  "Switchback is the LLC I use as a contract Software Engineer.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          )}
        </h1>
      </div>
      <div className="space-y-4">
        <p className="text-xl mb-4 text-warm-600">
          Learn more about me and my work
        </p>
        <div className="space-y-4 flex flex-col justify-center">
          <LinkItem
            href="https://www.youtube.com/@tylerdane-com"
            target="_blank"
            className={linkRowClass}
          >
            <FaYoutube size="1.4em" />
            <span className={linkLabelClass}>@tylerdane-com • </span>
            <span>Casual tech videos</span>
          </LinkItem>
          <LinkItem
            href="https://www.youtube.com/@fullstack-zip"
            target="_blank"
            className={linkRowClass}
          >
            <FaYoutube size="1.4em" />
            <span className={linkLabelClass}>@fullstack-zip • </span>
            <span>Hardcore tech videos</span>
          </LinkItem>
          <LinkItem
            href="https://github.com/SwitchbackTech/compass"
            target="_blank"
            className={linkRowClass}
          >
            <FaGithub size="1.4em" />
            <span className={linkLabelClass}>Compass • </span>
            <span>My calendar app</span>
          </LinkItem>

          <LinkItem
            href="https://newsletter.fullstack.zip/"
            target="_blank"
            className={linkRowClass}
          >
            <SiSubstack size="1.4em" />
            <span className={linkLabelClass}>Blog • </span>
            <span>Sane system design</span>
          </LinkItem>
          <LinkItem
            href="https://www.linkedin.com/in/tyler-dane/"
            target="_blank"
            className={linkRowClass}
          >
            <FaLinkedin size="1.55em" />
            <span className={linkLabelClass}>LinkedIn • </span>
            <span>Humble brags</span>
          </LinkItem>
        </div>
      </div>
    </div>
  );
}
