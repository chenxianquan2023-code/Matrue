"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Globe2, Sparkle } from "lucide-react";

const cases = [
  {
    name: "Maor Shlomo",
    product: "Base44",
    metric: "$80M",
    metricNote: "6 个月做到 25 万用户后被 Wix 收购",
    flag: "🇮🇱",
  },
  {
    name: "Danny Postma",
    product: "HeadshotPro",
    metric: "$3.6M / yr",
    metricNote: "AI 头像生成工具，一人公司年收入",
    flag: "🇳🇱",
  },
  {
    name: "Anthropic 预言",
    product: "Dario Amodei, 2025",
    metric: "2026",
    metricNote: "首家单员工十亿美元公司出现，置信度 70–80%",
    flag: "🤖",
  },
];

export function ThinShell() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="thin-shell" className="py-32 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">
            Thin-Shell Era
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            薄壳公司，
            <br />
            <span className="text-muted-foreground">已经在国外发生。</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            人类层极薄，AI 基础设施密实——10 个人借助 AI Agent 与自动化，撑起传统几百人才能跑的业务体量。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {cases.map((c, index) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glow-card p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{c.flag}</span>
                <div>
                  <h3 className="text-base font-bold tracking-wide">
                    {c.name}
                  </h3>
                  <p className="text-xs text-muted-foreground tracking-wide">
                    {c.product}
                  </p>
                </div>
              </div>
              <p className="text-3xl font-bold tracking-tight gradient-text mb-3">
                {c.metric}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {c.metricNote}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Globe2,
              title: "竞争对手已是薄壳",
              body: "5 个人 + AI 加持的公司，能在某些领域打过 50 人传统团队。报价更低，交付更快，利润率更高。",
            },
            {
              icon: Layers,
              title: "新业务先用薄壳跑",
              body: "不是整个公司变薄壳，是新方向用薄壳方式跑。轻、快、低成本——找到了再扩大，失败了损失也小。",
            },
            {
              icon: Sparkle,
              title: "招人逻辑要变",
              body: "以前招能完成某类工作的人。现在招能指挥 AI 完成某类工作的人。核心从执行变成判断和调度。",
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + idx * 0.08 }}
                className="border border-border rounded-2xl p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="text-base font-bold tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
