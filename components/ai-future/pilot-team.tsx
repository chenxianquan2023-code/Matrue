"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Users, Target, LineChart } from "lucide-react";

const phases = [
  {
    icon: Users,
    week: "Week 0",
    title: "组队",
    description:
      "一个懂技术的老人 + 一群有冲劲的年轻人。没有固定职位，缺什么 AI 补什么。",
  },
  {
    icon: Rocket,
    week: "Month 1–3",
    title: "跑通原型",
    description:
      "另起炉灶，不动主体。用 AI 模拟核心业务流程，找问题，找边界，找替代点。",
  },
  {
    icon: Target,
    week: "Month 3–6",
    title: "可量化结果",
    description:
      "把跑通的流程移植回主体架构。这时候你已经有了真实数字，而不是 PPT 上的预期。",
  },
  {
    icon: LineChart,
    week: "Month 6+",
    title: "规模化",
    description:
      "用第一刀切下来的成本，去打第二、第三个场景。复利从这里开始。",
  },
];

export function PilotTeam() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pilot" className="py-32 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">
            AI Pilot Team
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            AI 特工队，
            <br />
            <span className="text-muted-foreground">先做原型，再替代主体。</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            老组织有惰性。新小队没有包袱——他们从零开始，用 AI 做事是默认，不是改革。
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-[58px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={phase.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="relative z-10 w-[116px] h-[116px] rounded-2xl bg-card border border-border flex flex-col items-center justify-center mb-6 group-hover:border-primary/40 transition-colors duration-300">
                    <Icon
                      size={26}
                      className="text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-2"
                    />
                    <span className="text-[11px] text-muted-foreground font-mono tracking-wide">
                      {phase.week}
                    </span>
                  </div>

                  <h3 className="text-base font-bold mb-2 tracking-wide">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px]">
                    {phase.description}
                  </p>

                  {index < phases.length - 1 && (
                    <div className="md:hidden w-px h-8 bg-border mt-6" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-3xl mx-auto glow-card p-8 sm:p-10"
        >
          <p className="text-xs text-primary/70 font-medium tracking-widest uppercase mb-3">
            Case · 自媒体公司 AI 部门
          </p>
          <p className="text-lg leading-relaxed text-white/90">
            一个资深程序员，带一群有冲劲的年轻人，做源码重构项目——AI 分析架构、重写、优化、再卖出去。
            人工成本被 AI 压到极低，三个月后这个新部门
            <span className="gradient-text font-bold">单月净利 200 万</span>。
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            老板原来做的是自媒体——和技术看起来挺远。但他懂用人，找到对的人，找到对的方向。
            AI 特工队的价值，是帮公司打开以前打不开的门。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
