import React from "react";
import Image from "next/image";
import Header from "./components/header/page";
import OverlayHero from "./components/overlay-hero/page";
import Specialists from "./components/specialist/page";
import KeyService from "./components/key-service/page";
import Featured from "./components/featured/page";
import Catalogues from "./components/catalogues/page";
import CTA from "./components/cta/page";
import Webinar from "./components/webinar/page";
import News from "./components/news/page";
import Review from "./components/review/page";
import  GlobalFooter  from "./components/footer/page";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-cente mainPage">
      <Header />
      <OverlayHero />
      <Specialists />
      <KeyService />
      <Featured />
      <Catalogues />
      <CTA />
      <Webinar />
      <News />
      <Review />
      <GlobalFooter />
      {/* <Image
        src="/images/hero-bg.png"
        height={1000}
        width={1000}
        className="w-full overflow-hidden z-20 absolute"
      /> */}
    </main>
  );
}
