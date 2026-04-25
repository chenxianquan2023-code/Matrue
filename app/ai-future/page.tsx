import { Navbar } from "@/components/navbar";
import { FutureHero } from "@/components/ai-future/hero";
import { Universal } from "@/components/ai-future/universal";
import { Industry } from "@/components/ai-future/industry";
import { Roi } from "@/components/ai-future/roi";
import { PilotTeam } from "@/components/ai-future/pilot-team";
import { Traffic } from "@/components/ai-future/traffic";
import { ThinShell } from "@/components/ai-future/thin-shell";
import { Risk } from "@/components/ai-future/risk";
import { FutureCTA } from "@/components/ai-future/cta";

export const metadata = {
  title: "AI Future · Matrue",
  description:
    "AI 时代，Matrue 能为企业做到什么——通用能力、行业定制、ROI 优先、AI 特工队、流量增效、薄壳公司、安全边界。",
};

export default function AIFuturePage() {
  return (
    <main>
      <Navbar />
      <FutureHero />
      <Universal />
      <Industry />
      <Roi />
      <PilotTeam />
      <Traffic />
      <ThinShell />
      <Risk />
      <FutureCTA />
    </main>
  );
}
