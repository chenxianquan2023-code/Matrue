"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingDown, TrendingUp } from "lucide-react";

const bossA = {
  label: "Boss A",
  title: "瞄准最显眼的位置",
  cost: "30 万",
  costNote: "改造成本",
  rows: [
    { k: "节省人力 / 年", v: "10 万" },
    { k: "回本周期", v: "3 年" },
    { k: "第 1 年实际收益", v: "−20 万" },
  ],
  outcome: "亏 20 万",
  outcomeNote: "用大锤子敲一颗钉子",
  tone: "loss" as const,
};

const bossB = {
  label: "Boss B",
  title: "瞄准回报最快的位置",
  cost: "10 万",
  costNote: "改造成本",
  rows: [
    { k: "改造前人力 / 年", v: "16.8 万 (4 人)" },
    { k: "改造后人力 / 年", v: "4.2 万 (1 人)" },
    { k: "回本周期", v: "< 10 个月" },
  ],
  outcome: "+27.8 万",
  outcomeNote: "3 年累计净省，ROI 近 3×",
  tone: "win" as const,
};

export function Roi() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="roi" className="py-32 px-6 bg-[#0a0a0a]" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">
            ROI First
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            两个老板，
            <br />
            <span className="text-muted-foreground">两笔账。</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            同样是 AI 优化，思路差一寸，回报差三倍。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[bossA, bossB].map((boss, idx) => {
            const Icon = boss.tone === "win" ? TrendingUp : TrendingDown;
            const accent =
              boss.tone === "win"
                ? "text-primary border-primary/30 bg-primary/5"
                : "text-red-300/80 border-red-400/20 bg-red-400/5";
            return (
              <motion.div
                key={boss.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glow-card p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground">
                      {boss.label}
                    </p>
                    <h3 className="text-xl font-bold tracking-wide mt-1">
                      {boss.title}
                    </h3>
                  </div>
                  <div
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center ${accent}`}
                  >
                    <Icon size={22} />
                  </div>
                </div>

                <div className="border-t border-border pt-5 mb-5">
                  <p className="text-xs text-muted-foreground tracking-widest uppercase">
                    {boss.costNote}
                  </p>
                  <p className="text-3xl font-bold mt-1">{boss.cost}</p>
                </div>

                <ul className="space-y-3 text-sm border-t border-border pt-5">
                  {boss.rows.map((row) => (
                    <li
                      key={row.k}
                      className="flex items-center justify-between"
                    >
                      <span className="text-muted-foreground">{row.k}</span>
                      <span className="font-medium text-white">{row.v}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-border pt-5">
                  <p
                    className={`text-2xl font-bold tracking-tight ${
                      boss.tone === "win" ? "gradient-text" : "text-red-300/90"
                    }`}
                  >
                    {boss.outcome}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {boss.outcomeNote}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg text-white/90 leading-relaxed">
            "AI 转型的起点，不是找最显眼的问题，是找回报最快的问题。"
          </p>
          <p className="mt-3 text-xs text-primary/60 tracking-widest uppercase">
            接单 / 文本 / 数据录入 / 标准化客服 — 第一刀切这里
          </p>
        </motion.div>
      </div>
    </section>
  );
}
