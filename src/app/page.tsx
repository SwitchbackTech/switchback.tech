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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-black text-white font-mono">
      <div className="max-w-2xl mx-auto p-8 space-y-8 animate-fade-in h-56">
        <h1 className="text-4xl font-bold mb-4">
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
      <div className="space-y-4 ">
        <p className="text-xl mb-4">Learn more about me and my work</p>
        <div className="space-y-4 flex flex-col justify-center">
          <LinkItem
            href="https://www.youtube.com/@tylerdane-com"
            target="_blank"
            className="flex items-center space-x-2"
          >
            <FaYoutube size="1.4em" />
            <u>
              <span>YouTube:</span>
            </u>
            <span>
              <em>Mostly tech videos</em>
            </span>
          </LinkItem>
          <LinkItem
            href="https://www.compasscalendar.com/"
            target="_blank"
            className="flex items-center space-x-2"
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
            href="https://www.tylerdane.com/"
            target="_blank"
            className="flex items-center space-x-2"
          >
            <FaPenNib size="1.4em" />
            <u>
              <span>Blog:</span>
            </u>
            <span>
              <em>Lessons learned</em>
            </span>
          </LinkItem>
          <LinkItem
            href="https://www.linkedin.com/in/tyler-dane/"
            target="_blank"
            className="flex items-center space-x-2"
          >
            <TiSocialLinkedin size="1.4em" />
            <u>
              <span>LinkedIn:</span>
            </u>
            <span>
              <em>Condensed blogs</em>
            </span>
          </LinkItem>
        </div>
      </div>
    </div>
  );
}
