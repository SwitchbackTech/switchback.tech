"use client";
import Typewriter from "typewriter-effect";

import LinkItem from "next/link";
import { FaCompass, FaPenNib, FaYoutube } from "react-icons/fa";

import { useState, useEffect } from "react";
import { TiSocialLinkedin } from "react-icons/ti";

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
            className="flex items-center space-x-2 text-warm-700 transition-colors hover:text-warm-900"
          >
            <FaYoutube size="1.4em" />
            <u>
              <span>@tylerdane-com</span>
            </u>
            <span>
              <em>Casual tech videos</em>
            </span>
          </LinkItem>
          <LinkItem
            href="https://www.youtube.com/@fullstack-zip"
            target="_blank"
            className="flex items-center space-x-2 text-warm-700 transition-colors hover:text-warm-900"
          >
            <FaYoutube size="1.4em" />
            <u>
              <span>@fullstack-zip</span>
            </u>
            <span>
              <em>Hardcore tech videos</em>
            </span>
          </LinkItem>
          <LinkItem
            href="https://github.com/SwitchbackTech/compass"
            target="_blank"
            className="flex items-center space-x-2 text-warm-700 transition-colors hover:text-warm-900"
          >
            <FaCompass size="1.4em" />
            <u>
              <span>Compass:</span>
            </u>
            <span>
              <em>My calendar app</em>
            </span>
          </LinkItem>

          <LinkItem
            href="https://newsletter.fullstack.zip/"
            target="_blank"
            className="flex items-center space-x-2 text-warm-700 transition-colors hover:text-warm-900"
          >
            <FaPenNib size="1.4em" />
            <u>
              <span>Blog:</span>
            </u>
            <span>
              <em>Sane system design</em>
            </span>
          </LinkItem>
          <LinkItem
            href="https://www.linkedin.com/in/tyler-dane/"
            target="_blank"
            className="flex items-center space-x-2 text-warm-700 transition-colors hover:text-warm-900"
          >
            <TiSocialLinkedin size="1.4em" />
            <u>
              <span>LinkedIn:</span>
            </u>
            <span>
              <em>Humble brags</em>
            </span>
          </LinkItem>
        </div>
      </div>
    </div>
  );
}
