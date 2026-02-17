import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotatingCubes } from "../app/components/RotatingCubes";
import svgPaths from "./svg-a9bgsdw16j";
import imgImageEvChassis from "../assets/ab54db09bc6df0e4d5160b30a09bef15b8290978.png";
import imgImage from "../assets/37fc0d2254dba6933d75460b5735ecd33603d555.png";
import imgImage1 from "../assets/17e8a87c993403cd7360a98f2d2b1386ef66540c.png";
import imgImage2 from "../assets/a3dbbbd73da540d4cd3fd70066c81097b9c00af1.png";
import imgImage3 from "../assets/ed305a4c7e26604bf6b3194ea3dd4232ad4bb8d1.png";
import imgHttpsLottiefilesComAnimationsCubeAnimatorOs7C3VVsqo from "../assets/0ea0327d93ceb10a15541a091aaef796a22302cf.png";

function Container() {
  return (
    <div className="h-[31.978px] mix-blend-exclusion relative shrink-0 w-[73.718px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[32px] left-0 text-[24px] text-white top-[-0.1px] tracking-[-1.2px]">JOULENE</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[13.984px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9844 13.9844">
        <g id="Icon">
          <path d="M2.33074 2.91341H11.6537" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16537" />
          <path d="M2.33074 6.9922H11.6537" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16537" />
          <path d="M2.33074 11.071H11.6537" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16537" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="flex-[1_0_0] h-[28.084px] min-h-px min-w-px relative rounded-[35289400px] cursor-pointer"
      data-name="Button"
    >
      <div aria-hidden="true" className="absolute border-[1.052px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[35289400px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[17.041px] pr-[1.052px] py-[1.052px] relative size-full">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[28.084px] relative shrink-0 w-[48.066px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Button />
      </div>
    </div>
  );
}

function JouleneHome() {
  return (
    <div className="absolute content-stretch flex h-[63.957px] items-center justify-between left-0 px-[23.992px] top-0 w-full z-50 pointer-events-none" data-name="JouleneHome">
      <Container />
      <div className="pointer-events-auto"><Container1 /></div>
    </div>
  );
}

function Marquee1() {
  return (
    <div className="h-[127.996px] relative shrink-0 w-[437.871px]" data-name="Marquee">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[128px] left-0 text-[128px] text-[rgba(0,0,0,0)] top-[-0.55px] uppercase">JOULENE</p>
      </div>
    </div>
  );
}

function Marquee2() {
  return (
    <div className="h-[127.996px] relative shrink-0 w-[437.871px]" data-name="Marquee">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[128px] left-0 text-[128px] text-[rgba(0,0,0,0)] top-[-0.55px] uppercase">JOULENE</p>
      </div>
    </div>
  );
}

function Marquee3() {
  return (
    <div className="h-[127.996px] relative shrink-0 w-[437.871px]" data-name="Marquee">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[128px] left-0 text-[128px] text-[rgba(0,0,0,0)] top-[-0.55px] uppercase">JOULENE</p>
      </div>
    </div>
  );
}

function Marquee4() {
  return (
    <div className="h-[127.996px] relative shrink-0 w-[437.871px]" data-name="Marquee">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[128px] left-0 text-[128px] text-[rgba(0,0,0,0)] top-[-0.55px] uppercase">JOULENE</p>
      </div>
    </div>
  );
}

function Marquee5() {
  return (
    <div className="h-[127.996px] relative shrink-0 w-[437.871px]" data-name="Marquee">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[128px] left-0 text-[128px] text-[rgba(0,0,0,0)] top-[-0.55px] uppercase">JOULENE</p>
      </div>
    </div>
  );
}

function Marquee6() {
  return (
    <div className="h-[127.996px] relative shrink-0 w-[437.871px]" data-name="Marquee">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[128px] left-0 text-[128px] text-[rgba(0,0,0,0)] top-[-0.55px] uppercase">JOULENE</p>
      </div>
    </div>
  );
}

function Marquee7() {
  return (
    <div className="h-[127.996px] relative shrink-0 w-[437.871px]" data-name="Marquee">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[128px] left-0 text-[128px] text-[rgba(0,0,0,0)] top-[-0.55px] uppercase">JOULENE</p>
      </div>
    </div>
  );
}

function Marquee8() {
  return (
    <div className="h-[127.996px] relative shrink-0 w-[437.871px]" data-name="Marquee">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[128px] left-0 text-[128px] text-[rgba(0,0,0,0)] top-[-0.55px] uppercase">JOULENE</p>
      </div>
    </div>
  );
}

function Marquee9() {
  return (
    <div className="h-[127.996px] relative shrink-0 w-[437.871px]" data-name="Marquee">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[128px] left-0 text-[128px] text-[rgba(0,0,0,0)] top-[-0.55px] uppercase">JOULENE</p>
      </div>
    </div>
  );
}

function Marquee10() {
  return (
    <div className="flex-[1_0_0] h-[127.996px] min-h-px min-w-px relative" data-name="Marquee">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[128px] left-0 text-[128px] text-[rgba(0,0,0,0)] top-[-0.55px] uppercase">JOULENE</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[127.996px] relative shrink-0 w-[4666.662px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[31.995px] items-start relative size-full">
        <Marquee1 />
        <Marquee2 />
        <Marquee3 />
        <Marquee4 />
        <Marquee5 />
        <Marquee6 />
        <Marquee7 />
        <Marquee8 />
        <Marquee9 />
        <Marquee10 />
      </div>
    </div>
  );
}

function Marquee() {
  return (
    <div className="absolute content-stretch flex h-[127.996px] items-start left-0 opacity-20 overflow-clip pl-[-892.966px] top-[128px] w-[377.562px]" data-name="Marquee">
      <Container2 />
    </div>
  );
}

function Container5() {
  return <div className="absolute bg-[#0f1517] h-[3.993px] left-0 top-0 w-[47.984px]" data-name="Container" />;
}

function Paragraph() {
  return (
    <div className="absolute h-[109.969px] left-0 top-[35.99px] w-[329.578px]" data-name="Paragraph">
      <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[27.5px] left-0 text-[#0f1517] text-[20px] top-[-0.05px] w-[310px] whitespace-pre-wrap">Existing lithium-ion batteries are hitting their technology limits, and the production process harms the environment.</p>
    </div>
  );
}

function Container7() {
  return <div className="absolute bg-[#99a1af] h-[0.986px] left-0 top-[7.49px] w-[15.989px]" data-name="Container" />;
}

function Container6() {
  return (
    <div className="absolute h-[15.989px] left-0 top-[177.95px] w-[329.578px]" data-name="Container">
      <Container7 />
      <p className="absolute font-['Consolas:Regular',sans-serif] leading-[16px] left-[23.98px] not-italic text-[#6a7282] text-[12px] top-[0.05px] tracking-[1.2px] uppercase">Problem Statement</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[193.941px] left-[23.99px] top-[80px] w-[329.578px]" data-name="Container">
      <Container5 />
      <Paragraph />
      <Container6 />
    </div>
  );
}

function ImageEvChassis() {
  return (
    <div className="absolute h-[247.184px] left-[23.99px] rounded-[3.6px] top-[321.92px] w-[329.578px]" data-name="Image (EV Chassis)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[3.6px] size-full" src={imgImageEvChassis} />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#ebebe6] h-[649.099px] left-0 top-[837.73px] w-[377.562px]" data-name="Container">
      <Container4 />
      <ImageEvChassis />
    </div>
  );
}

function Container10() {
  return <div className="absolute bg-[#c4f240] left-0 rounded-[35289400px] size-[7.986px] top-[3.5px]" data-name="Container" />;
}

function SectionLabel() {
  return (
    <div className="h-[15.003px] relative shrink-0 w-full" data-name="SectionLabel">
      <Container10 />
      <p className="absolute font-['Consolas:Regular',sans-serif] leading-[15px] left-[15.97px] not-italic text-[#c4f240] text-[10px] top-[-0.95px] tracking-[1px] uppercase">Building the future of battery technology</p>
    </div>
  );
}

const QUOTES = [
  { l1: "Current battery", l2: "technology is", l3: "unsustainable." },
  { l1: "Global energy", l2: "demand is", l3: "accelerating." },
  { l1: "Traditional storage", l2: "solutions are", l3: "outdated." }
];

function Heading() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % QUOTES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[118.81px] relative shrink-0 w-full overflow-hidden" data-name="Heading 1">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[39.6px] left-0 text-[#f0f0f0] text-[36px] top-[-0.36px] tracking-[-0.9px]">{QUOTES[index].l1}</p>
          <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[39.6px] left-0 text-[#f0f0f0] text-[36px] top-[39.24px] tracking-[-0.9px]">{QUOTES[index].l2}</p>
          <div className="absolute content-stretch flex h-[53.637px] items-start left-0 top-[71.84px] w-full">
            <p className="font-['Oswald:Medium',sans-serif] font-medium leading-[39.6px] relative shrink-0 text-[#6a7282] text-[36px] tracking-[-0.9px]">{QUOTES[index].l3}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Container12() {
  return <div className="bg-[#c4f240] shrink-0 size-[3.993px]" data-name="Container" />;
}

function Container13() {
  return <div className="bg-[#364153] shrink-0 size-[3.993px]" data-name="Container" />;
}

function Container14() {
  return <div className="bg-[#364153] shrink-0 size-[3.993px]" data-name="Container" />;
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[7.986px] h-[3.993px] items-start relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.989px] h-[233.774px] items-start left-[23.99px] top-[347.98px] w-[329.578px]" data-name="Container">
      <SectionLabel />
      <Heading />
      <Container11 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[581.757px] left-0 top-[175.98px] w-[377.562px]" data-name="Container">
      <Container9 />
    </div>
  );
}

function Header() {
  return (
    <div className="h-[1486.832px] overflow-clip relative shrink-0 w-full" data-name="Header">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Marquee />
      </motion.div>
      <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
        <Container3 />
      </motion.div>
      <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
        <Container8 />
      </motion.div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[72.009px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[36px] left-0 text-[#c4f240] text-[30px] top-[-0.21px] w-[301px] whitespace-pre-wrap">Leading the way to a sustainable battery future</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[63.957px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[32px] left-0 text-[#0f1517] text-[24px] top-[-0.1px] w-[267px] whitespace-pre-wrap">Experts in solid state battery technology</p>
    </div>
  );
}

function Superscript() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[136.84px] p-[1.052px] rounded-[35289400px] size-[15.989px] top-0" data-name="Superscript">
      <div aria-hidden="true" className="absolute border-[1.052px] border-black border-solid inset-0 pointer-events-none rounded-[35289400px]" />
      <p className="font-['Oswald:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#0f1517] text-[12px]">1</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[27.985px] left-0 top-0 w-[279.491px]" data-name="Heading 4">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#0f1517] text-[18px] top-0">Solid electrolytes</p>
      <Superscript />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[39.998px] left-0 top-[35.97px] w-[279.491px]" data-name="Paragraph">
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-0.05px] w-[278px] whitespace-pre-wrap">Non-flammable, non-volatile, high thermal stability and safety.</p>
    </div>
  );
}

function Link() {
  return (
    <div
      onClick={() => document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' })}
      className="absolute h-[15.989px] left-0 top-[83.96px] w-[100.454px] cursor-pointer"
      data-name="Link"
    >
      <p className="absolute decoration-solid font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#0f1517] text-[12px] top-[-0.05px] underline">Read the whitepaper</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[102.706px] relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Paragraph1 />
      <Link />
    </div>
  );
}

function Superscript1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[114.98px] p-[1.052px] rounded-[35289400px] size-[15.989px] top-0" data-name="Superscript">
      <div aria-hidden="true" className="absolute border-[1.052px] border-black border-solid inset-0 pointer-events-none rounded-[35289400px]" />
      <p className="font-['Oswald:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#0f1517] text-[12px]">2</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[27.985px] left-0 top-0 w-[279.491px]" data-name="Heading 4">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#0f1517] text-[18px] top-0">Metallic anode</p>
      <Superscript1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[39.998px] left-0 top-[35.97px] w-[279.491px]" data-name="Paragraph">
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-0.05px] w-[243px] whitespace-pre-wrap">Enables ultra-high energy density for long-range applications.</p>
    </div>
  );
}

function Link1() {
  return (
    <div
      onClick={() => document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })}
      className="absolute h-[15.989px] left-0 top-[83.96px] w-[72.666px] cursor-pointer"
      data-name="Link"
    >
      <p className="absolute decoration-solid font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#0f1517] text-[12px] top-[-0.05px] underline">See tech specs</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[102.706px] relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Paragraph2 />
      <Link1 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[31.995px] h-[237.406px] items-start relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[31.995px] h-[333.358px] items-start left-0 top-0 w-[279.491px]" data-name="Container">
      <Heading2 />
      <Container18 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-[#1e2939] content-stretch flex h-[95.146px] items-center left-[3.96px] p-[0.983px] rounded-[3.738px] top-[101.79px] w-[190.293px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#4a5565] border-[0.983px] border-solid inset-0 pointer-events-none rounded-[3.738px] shadow-[0px_18.69px_23.362px_0px_rgba(0,0,0,0.1),0px_7.476px_9.345px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex h-[31px] items-center justify-center relative shrink-0 w-[15px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <p className="font-['Consolas:Regular',sans-serif] leading-[14.952px] not-italic relative text-[8px] text-white">Cathode</p>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-[#c4f240] content-stretch flex h-[95.146px] items-center left-[35.39px] opacity-90 p-[0.983px] rounded-[3.738px] top-[101.79px] w-[190.293px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ad0] border-[0.983px] border-solid inset-0 pointer-events-none rounded-[3.738px] shadow-[0px_18.69px_23.362px_0px_rgba(0,0,0,0.1),0px_7.476px_9.345px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex h-[75px] items-center justify-center relative shrink-0 w-[12px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <p className="font-['Consolas:Bold',sans-serif] leading-[11.963px] not-italic relative text-[#1e2939] text-[8px]">Solid Electrolyte</p>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-[#d1d5dc] content-stretch flex h-[95.146px] items-center justify-center left-[85.51px] p-[0.983px] rounded-[3.738px] top-[101.79px] w-[190.293px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#99a1af] border-[0.983px] border-solid inset-0 pointer-events-none rounded-[3.738px] shadow-[0px_18.69px_23.362px_0px_rgba(0,0,0,0.1),0px_7.476px_9.345px_0px_rgba(0,0,0,0.1)]" />
      <p className="font-['Consolas:Regular',sans-serif] leading-[14.952px] not-italic relative shrink-0 text-[11.214px] text-black">Metallic Anode</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[3.96px] top-[101.79px]">
      <Container22 />
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[299.999px] left-0 overflow-clip top-[381.34px] w-[279.491px]" data-name="Container">
      <Group />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[681.341px] relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container21 />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#e2e2dd] h-[731.428px] relative rounded-[16.4px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[1.052px] pt-[25.044px] px-[25.044px] relative size-full">
          <Container16 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.052px] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#ebebe6] h-[931.416px] relative shrink-0 w-full" data-name="Section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="content-stretch flex flex-col gap-[47.984px] items-start px-[23.992px] relative size-full"
      >
        <Heading1 />
        <Container15 />
      </motion.div>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[53.637px] items-start left-[199.59px] top-[-7.36px] w-[111.678px]" data-name="Text">
      <p className="font-['Oswald:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#c4f240] text-[36px] tracking-[-0.9px]">JOULENE</p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[79.995px] relative shrink-0 w-[329.578px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[40px] left-0 text-[#f0f0f0] text-[36px] top-[-0.36px] tracking-[-0.9px]">experience the</p>
        <Text1 />
        <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[40px] left-0 text-[#f0f0f0] text-[36px] top-[39.64px] tracking-[-0.9px]">difference</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col h-[79.995px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading5 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[31.995px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[8.35%] right-[8.26%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.3461 15.9984">
            <path d={svgPaths.p25023800} id="Vector" stroke="var(--stroke-0, #C4F240)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66624" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[29.17%] left-[8.33%] right-[8.33%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-20.01%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.3287 9.32928">
            <path d={svgPaths.p168ff680} id="Vector" stroke="var(--stroke-0, #C4F240)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66624" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_8.33%_8.34%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-20.01%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.3287 9.32928">
            <path d={svgPaths.p168ff680} id="Vector" stroke="var(--stroke-0, #C4F240)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66624" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[31.995px] relative shrink-0 w-[265.588px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[233.594px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[31.978px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[32px] left-0 text-[#f0f0f0] text-[24px] top-[-0.1px]">Bipolar architecture design</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[39.998px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#99a1af] text-[14px] top-[-0.05px] w-[256px] whitespace-pre-wrap">Smaller battery packs, less components, ultra-high efficiency production, enhanced energy density.</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[87.965px] relative shrink-0 w-[265.588px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.989px] items-start relative size-full">
        <Heading6 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container31() {
  return <div className="bg-[#364153] h-[0.986px] shrink-0 w-[265.588px]" data-name="Container" />;
}

function Container28() {
  return (
    <div className="absolute bg-[#1a2426] content-stretch flex flex-col h-[299.999px] items-start justify-between left-0 pl-[31.995px] pt-[31.995px] rounded-[16.4px] top-0 w-[329.578px]" data-name="Container">
      <Container29 />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[169.59px] size-[127.996px] top-[140.01px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127.996 127.996">
        <g id="Icon">
          <path d={svgPaths.pb0528c0} id="Vector" stroke="var(--stroke-0, #0F1517)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" strokeWidth="10.6663" />
          <path d={svgPaths.p6012d80} id="Vector_2" stroke="var(--stroke-0, #0F1517)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" strokeWidth="10.6663" />
          <path d="M63.9979 117.329V63.9979" id="Vector_3" stroke="var(--stroke-0, #0F1517)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" strokeWidth="10.6663" />
        </g>
      </svg>
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[75px] left-0 top-0 w-[265.588px]" data-name="Heading 3">
      <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[37.5px] left-0 text-[#0f1517] text-[30px] top-[-0.21px] w-[222px] whitespace-pre-wrap">Intelligent modular and composable</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[59.996px] left-0 top-[90.99px] w-[199.988px]" data-name="Paragraph">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[20px] left-0 text-[14px] text-[rgba(15,21,23,0.7)] top-[-0.05px] w-[194px] whitespace-pre-wrap">Our unique modular design allows for infinite configurations to fit any need.</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[150.985px] left-[31.99px] top-[31.99px] w-[265.588px]" data-name="Container">
      <Heading7 />
      <Paragraph4 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-[#c4f240] h-[299.999px] left-0 overflow-clip rounded-[16.4px] top-[315.99px] w-[329.578px]" data-name="Container">
      <Icon2 />
      <Container33 />
    </div>
  );
}

function Image() {
  return (
    <div className="absolute h-[299.999px] left-0 top-0 w-[329.578px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[63.957px] relative shrink-0 w-[265.588px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[32px] left-0 text-[24px] text-white top-[-0.1px] w-[259px] whitespace-pre-wrap">Specification-driven flexible design</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[15.989px] relative shrink-0 w-[265.588px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#d1d5dc] text-[12px] top-[-0.05px]">Custom solutions for unique problems.</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-[rgba(0,0,0,0.8)] gap-[7.986px] h-[299.999px] items-start justify-end left-0 pl-[31.995px] pt-[180.072px] to-[rgba(0,0,0,0)] top-0 w-[329.578px]" data-name="Container">
      <Heading8 />
      <Paragraph5 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute bg-white h-[299.999px] left-0 overflow-clip rounded-[16.4px] top-[631.98px] w-[329.578px]" data-name="Container">
      <Image />
      <Container35 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[931.975px] relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container32 />
      <Container34 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[1059.954px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[47.984px] items-start px-[23.992px] relative size-full">
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[#0f1517] content-stretch flex flex-col h-[1220.997px] items-start pt-[81.047px] relative shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t-[1.052px] inset-0 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-full"
      >
        <Container25 />
      </motion.div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute h-[72.009px] left-0 top-0 w-[265.588px]" data-name="Heading 2">
      <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[36px] left-0 text-[#f0f0f0] text-[30px] top-[-0.21px] w-[237px] whitespace-pre-wrap">Ideal for mission-critical applications.</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[15.989px] relative shrink-0 w-[237.521px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.05px] uppercase">Energy density vs range requirements</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[15.989px] relative shrink-0 w-[87.456px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute decoration-solid font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#f0f0f0] text-[12px] top-[-0.05px] underline">Read case studies</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex h-[33.03px] items-end justify-between left-0 pb-[17.041px] top-[104px] w-[329.578px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-b-[1.052px] border-solid inset-0 pointer-events-none" />
      <Paragraph6 />
      <Link2 />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[137.034px] relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <Container37 />
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute h-[191.985px] left-0 opacity-80 top-0 w-[329.578px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] h-[23.976px] left-[15.99px] rounded-[4px] top-[15.99px] w-[52.996px]" data-name="Container">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-[7.99px] text-[#0f1517] text-[12px] top-[3.94px] tracking-[1.2px] uppercase">Space</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[191.985px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Image1 />
      <Container41 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[36.004px] relative shrink-0 w-[88.08px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[36px] left-0 text-[#0f1517] text-[30px] top-[-0.21px] w-[89px] whitespace-pre-wrap">$ 6.87B</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex h-[36.004px] items-end relative shrink-0 w-full" data-name="Container">
      <Text2 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[15.989px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Consolas:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.05px] uppercase w-[192px] whitespace-pre-wrap">By 2032 projected market size</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[62.527px] relative shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-solid border-t-[1.052px] inset-0 pointer-events-none" />
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#4a5565] text-[14px] top-[16.04px] w-[268px] whitespace-pre-wrap">High performance systems for extreme environments where failure is not an option.</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[194.483px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[7.987px] items-start pt-[23.992px] px-[23.992px] relative size-full">
        <Container43 />
        <Container44 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute bg-[#ebebe6] content-stretch flex flex-col h-[386.469px] items-start left-0 overflow-clip rounded-[16.4px] top-0 w-[329.578px]" data-name="Container">
      <Container40 />
      <Container42 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[36.004px] relative shrink-0 w-[83.545px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[36px] left-0 text-[#0f1517] text-[30px] top-[-0.21px] w-[84px] whitespace-pre-wrap">$ 1.61B</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex h-[36.004px] items-end relative shrink-0 w-full" data-name="Container">
      <Text3 />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[15.989px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Consolas:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.05px] uppercase w-[192px] whitespace-pre-wrap">By 2034 projected market size</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[62.527px] relative shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-solid border-t-[1.052px] inset-0 pointer-events-none" />
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#4a5565] text-[14px] top-[16.04px] w-[268px] whitespace-pre-wrap">High performance systems for extreme environments where failure is not an option.</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.986px] h-[194.483px] items-start left-0 pt-[23.992px] px-[23.992px] top-[191.99px] w-[329.578px]" data-name="Container">
      <Container47 />
      <Container48 />
      <Paragraph8 />
    </div>
  );
}

function Image2() {
  return (
    <div className="absolute h-[191.985px] left-0 opacity-80 top-0 w-[329.578px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] h-[23.976px] left-[15.99px] rounded-[4px] top-[15.99px] w-[70.497px]" data-name="Container">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-[7.99px] text-[#0f1517] text-[12px] top-[3.94px] tracking-[1.2px] uppercase">Aviation</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[191.985px] left-0 overflow-clip top-0 w-[329.578px]" data-name="Container">
      <Image2 />
      <Container50 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute bg-[#ebebe6] h-[386.469px] left-0 overflow-clip rounded-[16.4px] top-[410.46px] w-[329.578px]" data-name="Container">
      <Container46 />
      <Container49 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[36.004px] relative shrink-0 w-[87.16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[36px] left-0 text-[#0f1517] text-[30px] top-[-0.21px] w-[88px] whitespace-pre-wrap">$ 2.91B</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex h-[36.004px] items-end relative shrink-0 w-full" data-name="Container">
      <Text4 />
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[15.989px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Consolas:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.05px] uppercase w-[192px] whitespace-pre-wrap">By 2032 projected market size</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[62.527px] relative shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-solid border-t-[1.052px] inset-0 pointer-events-none" />
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#4a5565] text-[14px] top-[16.04px] w-[268px] whitespace-pre-wrap">High performance systems for extreme environments where failure is not an option.</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.986px] h-[194.483px] items-start left-0 pt-[23.992px] px-[23.992px] top-[191.99px] w-[329.578px]" data-name="Container">
      <Container53 />
      <Container54 />
      <Paragraph9 />
    </div>
  );
}

function Image3() {
  return (
    <div className="absolute h-[191.985px] left-0 opacity-80 top-0 w-[329.578px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] h-[23.976px] left-[15.99px] rounded-[4px] top-[15.99px] w-[61.147px]" data-name="Container">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-[7.99px] text-[#0f1517] text-[12px] top-[3.94px] tracking-[1.2px] uppercase">Marine</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[191.985px] left-0 overflow-clip top-0 w-[329.578px]" data-name="Container">
      <Image3 />
      <Container56 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute bg-[#ebebe6] h-[386.469px] left-0 overflow-clip rounded-[16.4px] top-[820.92px] w-[329.578px]" data-name="Container">
      <Container52 />
      <Container55 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[1207.39px] relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Container45 />
      <Container51 />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#0f1517] h-[1552.399px] relative shrink-0 w-full" data-name="Section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="content-stretch flex flex-col gap-[47.984px] items-start pt-[79.995px] px-[23.992px] relative size-full"
      >
        <Container36 />
        <Container38 />
      </motion.div>
    </div>
  );
}

function Container58() {
  return <div className="absolute h-[395.145px] left-[1.05px] opacity-10 top-[1.05px] w-[327.475px]" data-name="Container" />;
}

function Icon3() {
  return (
    <div className="absolute left-[119.22px] size-[13.984px] top-[5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9844 13.9844">
        <g id="Icon">
          <path d="M2.91342 6.9922H11.071" id="Vector" stroke="var(--stroke-0, #0F1517)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16537" />
          <path d={svgPaths.p3ec61d00} id="Vector_2" stroke="var(--stroke-0, #0F1517)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16537" />
        </g>
      </svg>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute bg-[#c4f240] h-[23.976px] left-0 rounded-[3.6px] top-[1.27px] w-[145.201px]" data-name="Container">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-[12px] text-[#0f1517] text-[12px] top-[3.94px] uppercase">Become an Insider</p>
      <Icon3 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute h-[159.892px] left-0 top-[49.23px] w-[279.491px]" data-name="Heading 2">
      <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[32px] left-0 text-[#f0f0f0] text-[24px] top-[-0.1px] w-[278px] whitespace-pre-wrap">Follow our progress, receive updates and news on the energy industry, and stay on top of the latest developments in climate tech.</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] w-[279.491px]" data-name="Email Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip px-[24px] py-[12px] relative rounded-[inherit] size-full">
        <p className="font-['Consolas:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4a5565] text-[14px] uppercase">EMAIL ADDRESS</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#364153] border-[1.052px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Button1() {
  return (
    <div
      onClick={() => alert("Thanks for subscribing! We'll be in touch.")}
      className="bg-[#ebebe6] h-[43.991px] relative rounded-[10px] shrink-0 w-[279.491px] cursor-pointer"
      data-name="Button"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Oswald:Bold',sans-serif] font-bold leading-[20px] left-[140.16px] text-[#0f1517] text-[14px] text-center top-[11.94px] uppercase">Join</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.989px] h-[106.041px] items-start left-0 top-[241.12px] w-[279.491px]" data-name="Container">
      <EmailInput />
      <Button1 />
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute h-[347.161px] left-[25.04px] top-[25.04px] w-[279.491px]" data-name="Container">
      <Container60 />
      <Heading10 />
      <Container61 />
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[#0f1517] h-[397.249px] relative rounded-[16.4px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container58 />
        <Container59 />
      </div>
      <div aria-hidden="true" className="absolute border-[#c4f240] border-[1.052px] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-[#0f1517] h-[557.239px] relative shrink-0 w-full" data-name="Section">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="content-stretch flex flex-col items-start pt-[79.996px] px-[23.992px] relative size-full"
      >
        <Container57 />
      </motion.div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[72.009px] relative shrink-0 w-[219.478px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid font-['Oswald:Medium',sans-serif] font-medium leading-[36px] relative size-full text-[#f0f0f0] text-[30px]">
        <p className="absolute left-0 top-[-0.21px]">Helping solve the</p>
        <p className="absolute left-0 top-[35.8px]">climate emergency</p>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[31.978px] relative shrink-0 w-[319.998px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.05px] w-[291px] whitespace-pre-wrap">We create measurable impact through next-gen sustainable battery technology.</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col h-[119.977px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading11 />
      <Paragraph10 />
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[15.989px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#c4f240] text-[12px] top-[-0.05px] uppercase">Increased Energy Density</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[48px] left-0 text-[#f0f0f0] text-[48px] top-[-0.57px] tracking-[-2.4px]">+60%</p>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[12.505px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[12.5px] left-0 text-[#4a5565] text-[10px] top-[-1.1px]">Compared to current industry standard lithium-ion technology.</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#1a2426] gap-[47.984px] h-[206.561px] items-start left-0 pb-[1.052px] pt-[15px] px-[33.047px] rounded-[16.4px] to-[#0f1517] top-0 w-[329.578px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.052px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
      <Container66 />
      <Container67 />
      <Container68 />
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[15.989px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#c4f240] text-[12px] top-[-0.05px] uppercase">Unmatched Reliability</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[48px] left-0 text-[#f0f0f0] text-[48px] top-[-0.57px] tracking-[-2.4px]">~10x</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[12.505px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[12.5px] left-0 text-[#4a5565] text-[10px] top-[-1.1px]">Compared to current industry standard lithium-ion technology.</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#1a2426] gap-[47.984px] h-[206.561px] items-start left-0 pb-[1.052px] pt-[15px] px-[33.047px] rounded-[16.4px] to-[#0f1517] top-[222.55px] w-[329.578px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.052px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
      <Container70 />
      <Container71 />
      <Container72 />
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[15.989px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#c4f240] text-[12px] top-[-0.05px] uppercase">Reduced Emissions</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[48px] left-0 text-[#f0f0f0] text-[48px] top-[-0.57px] tracking-[-2.4px]">-60%</p>
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[12.505px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[12.5px] left-0 text-[#4a5565] text-[10px] top-[-1.1px]">Compared to current industry standard lithium-ion technology.</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#1a2426] gap-[47.984px] h-[206.561px] items-start left-0 pb-[1.052px] pt-[15px] px-[33.047px] rounded-[16.4px] to-[#0f1517] top-[445.1px] w-[329.578px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.052px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
      <Container74 />
      <Container75 />
      <Container76 />
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[15.989px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#c4f240] text-[12px] top-[-0.05px] uppercase">Improved Recyclability</p>
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[48px] left-0 text-[#f0f0f0] text-[48px] top-[-0.57px] tracking-[-2.4px]">~100%</p>
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[12.505px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[12.5px] left-0 text-[#4a5565] text-[10px] top-[-1.1px]">Compared to current industry standard lithium-ion technology.</p>
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#1a2426] gap-[47.984px] h-[206.561px] items-start left-0 pb-[1.052px] pt-[15px] px-[33.047px] rounded-[16.4px] to-[#0f1517] top-[667.65px] w-[329.578px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.052px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
      <Container78 />
      <Container79 />
      <Container80 />
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[874.213px] relative shrink-0 w-full" data-name="Container">
      <Container65 />
      <Container69 />
      <Container73 />
      <Container77 />
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[1042.174px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[47.984px] items-start px-[23.992px] relative size-full">
        <Container63 />
        <Container64 />
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="bg-[#0f1517] content-stretch flex flex-col h-[1203.216px] items-start pb-[1.052px] pt-[79.995px] relative shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-b-[1.052px] border-solid inset-0 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-full"
      >
        <Container62 />
      </motion.div>
    </div>
  );
}

function Marquee12() {
  return (
    <div className="relative shrink-0" data-name="Marquee">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[7px] py-[10px] relative">
        <p className="font-['Oswald:Medium','Noto_Sans:Regular',sans-serif] font-medium leading-[0] relative shrink-0 text-[22.456px] text-[rgba(15,21,23,0.1)] tracking-[-1.1228px] uppercase">
          <span className="font-['Siemreap:Regular','Noto_Sans:Regular',sans-serif] leading-[22.456px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>{`Dancer   `}</span>
          <span className="leading-[22.456px]">{`ECOFLOW   `}</span>
          <span className="font-['Poiret_One:Regular','Noto_Sans:Regular',sans-serif] leading-[22.456px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
            AMAZON
          </span>
          <span className="leading-[22.456px]">{`   `}</span>
          <span className="font-['Righteous:Regular','Noto_Sans:Regular',sans-serif] leading-[22.456px] lowercase" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
            amigo
          </span>
        </p>
      </div>
    </div>
  );
}

function Marquee11() {
  return (
    <div className="content-stretch flex h-[31.541px] items-center justify-center overflow-clip relative shrink-0 w-[377.562px]" data-name="Marquee">
      <Marquee12 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[83.956px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Oswald:Medium',sans-serif] font-medium leading-[28px] left-[165.19px] text-[#0f1517] text-[20px] text-center top-[-0.05px] w-[320px] whitespace-pre-wrap">{`We're always on the lookout for strategic partners that can help us build the future of battery technology.`}</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[199.89px] size-[17.994px] top-[15px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.994 17.994">
        <g clipPath="url(#clip0_1_645)" id="Icon">
          <path d={svgPaths.p17b75700} id="Vector" stroke="var(--stroke-0, #C4F240)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4995" />
          <path d="M1.4995 8.99701H16.4945" id="Vector_2" stroke="var(--stroke-0, #C4F240)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4995" />
        </g>
        <defs>
          <clipPath id="clip0_1_645">
            <rect fill="white" height="17.994" width="17.994" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div
      onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
      className="bg-[#0f1517] h-[48px] relative rounded-[35289400px] shrink-0 w-[329.578px] cursor-pointer"
      data-name="Button"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Oswald:Bold',sans-serif] font-bold leading-[24px] left-[152.19px] text-[#c4f240] text-[16px] text-center top-[12px] uppercase">Contact Us</p>
        <Icon4 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div
      onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
      className="h-[50.104px] relative rounded-[35289400px] shrink-0 w-[329.578px] cursor-pointer"
      data-name="Button"
    >
      <div aria-hidden="true" className="absolute border-[#0f1517] border-[1.052px] border-solid inset-0 pointer-events-none rounded-[35289400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Oswald:Bold',sans-serif] font-bold leading-[24px] left-[165.18px] text-[#0f1517] text-[16px] text-center top-[13.05px] uppercase">See Partners</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col gap-[15.989px] h-[114.094px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[230.044px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[31.995px] items-start px-[23.992px] relative size-full">
        <Paragraph11 />
        <Container82 />
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[56.628px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="-translate-x-1/2 absolute font-['Oswald:Medium',sans-serif] font-medium leading-[56.641px] left-[165.66px] text-[#c4f240] text-[70.801px] text-center top-[0.81px] tracking-[-3.54px]">JOULENE</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[15.003px] relative shrink-0 w-[123.378px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#0f1517] text-[10px] top-[-0.95px] tracking-[1px] uppercase">© 2026 Joulene Inc.</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[15.003px] relative shrink-0 w-[45.453px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#0f1517] text-[10px] top-[-0.95px] tracking-[1px] uppercase">Privacy</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[15.003px] relative shrink-0 w-[32.471px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#0f1517] text-[10px] top-[-0.95px] tracking-[1px] uppercase">Terms</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[15.003px] relative shrink-0 w-[51.961px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#0f1517] text-[10px] top-[-0.95px] tracking-[1px] uppercase">LinkedIn</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[15.003px] relative shrink-0 w-[161.864px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[15.989px] items-start relative size-full">
        <Link3 />
        <Link4 />
        <Link5 />
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col h-[45.996px] items-center justify-between opacity-50 relative shrink-0 w-full" data-name="Container">
      <Container85 />
      <Container86 />
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[167.665px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(15,21,23,0.1)] border-solid border-t-[1.052px] inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[31.995px] items-start pt-[33.046px] px-[23.992px] relative size-full">
        <Heading12 />
        <Container84 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#ebebe6] content-stretch flex flex-col gap-[79.995px] h-[793.676px] items-start overflow-clip pt-[79.995px] relative shrink-0 w-full" data-name="Footer">
      <Marquee11 />
      <Container81 />
      <Container83 />
    </div>
  );
}

function JouleneHome1() {
  return (
    <div className="relative bg-[#0f1517] content-stretch flex flex-col min-h-[7745.775px] items-start left-0 overflow-clip top-0 w-full" data-name="JouleneHome">
      <Header />
      <div id="technology" className="w-full"><Section /></div>
      <div id="differentiators" className="w-full"><Section1 /></div>
      <div id="applications" className="w-full"><Section2 /></div>
      <div id="newsletter" className="w-full"><Section3 /></div>
      <div id="impact" className="w-full"><Section4 /></div>
      <div id="footer" className="w-full"><Footer /></div>
    </div>
  );
}

function Container87() {
  return (
    <div className="-translate-x-1/2 absolute h-[252.99px] left-1/2 top-[192px] w-[425px]" data-name="Container">
      <RotatingCubes scale={0.55} />
    </div>
  );
}

export default function Joulene() {
  return (
    <div className="bg-white relative size-full" data-name="Joulene">
      <JouleneHome />
      <JouleneHome1 />
      <Container87 />
    </div>
  );
}