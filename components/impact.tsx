"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Zap, Shield, Users } from "lucide-react";

const items = [
  {
    icon: TrendingUp,
    title: "先找 ROI，再谈转型",
    en: "ROI First",
    description:
      "我们不切最显眼的问题，切回报最快的问题。接单、文本处理、数据录入——人多、工资低、可替代性高，这才是第一刀。",
    stat: "< 10 个月回本",
    statNote: "典型案例：接单员 4人 → 1人",
  },
  {
    icon: Zap,
    title: "AI 特工队，先跑原型",
    en: "Pilot Team",
    description:
      "不改造原有团队，另起炉灶。用 AI 跑通核心业务流程，3 个月内有可量化结果，再逐步移植回主体架构。",
    stat: "3 个月",
    statNote: "某自媒体公司单月净利 200 万",
  },
  {
    icon: Users,
    title: "复合型人才，不是 AI 专家",
    en: "Right People",
    description:
      "有五年销售经验、同时会用 Claude Code 搭工作流的人，价值远超空谈 AI 的「专家」。行业经验 × AI 能力才是真正的杠杆。",
    stat: "40–60%",
    statNote: "律所 / 顾问有效产能提升",
  },
  {
    icon: Shield,
    title: "安全与合规，不是事后补课",
    en: "Security First",
    description:
      "提示词注入、API 中间商风险、AI 生成代码漏洞——这些问题在设计阶段解决的成本，是上线后补救的十分之一。",
    stat: "Day 0",
    statNote: "安全审计必须从设计起",
  },
];

export function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="py-32 px-6 bg-[#0a0a0a]" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">
            Enterprise AI
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            帮企业做 AI 转型，
            <br />
            <span className="text-muted-foreground">我们只说做出来的事。</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            降本是可以算的，增效是一个感受。我们帮你把感受变成数字，把数字变成决策，把决策变成落地的系统。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glow-card p-8"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold tracking-wide">{item.title}</h3>
                    <p className="text-xs text-primary/60 font-medium tracking-widest uppercase mt-0.5">
                      {item.en}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="border-t border-border pt-4 flex items-end justify-between">
                  <span className="text-2xl font-bold tracking-tight text-white">
                    {item.stat}
                  </span>
                  <span className="text-xs text-muted-foreground text-right max-w-[160px]">
                    {item.statNote}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm">
            "工具是枪，你还需要会开枪的人，和一个知道往哪里打的人。"
          </p>
          <p className="text-xs text-primary/50 mt-2 tracking-widest uppercase">
            — 2026 企业 AI 转型实战指南
          </p>
        </motion.div>
      </div>
    </section>
  );
}
