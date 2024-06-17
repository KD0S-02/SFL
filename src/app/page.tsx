'use client'

import VideoIntro from "./components/VideoIntro";
import MainPage from "./components/MainPage";
import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState(<VideoIntro />)

  setTimeout(() => {
    setContent(<MainPage />)
  }, 4000);

  return content;
}
