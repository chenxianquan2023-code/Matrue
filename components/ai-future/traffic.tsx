"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Megaphone, Sparkles, Radar } from "lucide-react";

const lanes = [
  {
    icon: Search,
    code: "SEO",
    title: "搜索引擎优化",
    description:
      "65% 的企业表示 AI 内容改善了 SEO 表现。AI 不是帮你堆关键词，是帮你大量生产真正解答用户问题的高质量内容。",
  },
  {
    icon: Megaphone,
    code: "SEM",
    title: "搜索引擎广告",
    description:
      "智能出价已是默认。手动出价 = 自动档面前比手动换挡。给 AI 正确的目标（CAC、ROI），让它跑。",
  },
  {
    icon: Sparkles,
    code: "GEO",
    title: "生成式引擎优化",
    description:
      "Google 排名前位与 AI 引用内容的重合率已从 70% 降到 < 20%。AI 引荐流量的付费转化率是传统搜索的 4–5 倍。",
  },
];

export function Traffic() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="traffic" className="py-32 px-6 bg-[#0a0a0a]" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">
            Growth Engine
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            流量三件套，
            <br />
            <span className="text-muted-foreground">同时布局，缺一不可。</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AI 投流的真正价值，不是更快地做原来的事——是让决策频率与素材池密度提升一个量级。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {lanes.map((lane, index) => {
            const Icon = lane.icon;
            return (
              <motion.div
                key={lane.code}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glow-card p-7"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <span className="text-2xl font-bold tracking-tight gradient-text">
                    {lane.code}
                  </span>
                </div>
                <h3 className="text-base font-bold tracking-wide mb-3">
                  {lane.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {lane.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
              <Radar size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-xs text-primary/70 font-medium tracking-widest uppercase">
                Demand Creation
              </p>
              <h3 className="text-xl font-bold tracking-tight mt-1">
                从满足需求，到创造需求
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glow-card p-6">
              <p className="text-xs text-primary/70 font-medium tracking-widest uppercase mb-3">
                Case · 装修公司
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI 接到二手房交易公开数据——某人完成过户后立刻被识别为 3–6
                个月内高概率装修需求。在他还没搜任何词时，你的私信已经到了。
              </p>
            </div>
            <div className="glow-card p-6">
              <p className="text-xs text-primary/70 font-medium tracking-widest uppercase mb-3">
                Case · HR SaaS
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI 监控招聘平台——某公司一月内突然新增 20
                个销售岗位，意味着扩张期，也意味着 HR 工具采购需求。在他们立项前，
                BD 的第一封邮件已经发出。
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-10"
        >
          {[
            { v: "+22%", k: "AI 营销 ROI" },
            { v: "+47%", k: "广告点击率" },
            { v: "4.2 个月", k: "投资回本" },
            { v: "4–5×", k: "AI 引荐转化率" },
          ].map((stat) => (
            <div key={stat.k} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold gradient-text">
                {stat.v}
              </p>
              <p className="text-xs text-muted-foreground mt-1 tracking-wide">
                {stat.k}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
