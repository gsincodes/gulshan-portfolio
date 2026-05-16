'use client'

import Introduction from "@/components/introduction";
import Me from "@/components/me";
import ThingsIveBuilt from "@/components/thingsivebuilt";
import ProjectDescription1 from "@/components/ProjectDescription1";
import ProjectDescription2 from "@/components/ProjectDescription2";
import SendMeAMessage from "@/components/SendMeAMessage";
import Lenis from 'lenis';
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [])

  return (
    <div>
      <Introduction />
      <Me />
      <ThingsIveBuilt />
      <ProjectDescription1 />
      <ProjectDescription2 />
      <SendMeAMessage />
    </div>
  );
}
