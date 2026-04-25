"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldAlert, Bug, Database, Stethoscope } from "lucide-react";

const risks = [
  {
    icon: Database,
    title: "数据获取的法律边界",
    en: "Compliance",
    body:
      "招聘、招标、竞品价格——市面上很多 AI 陪跑产品的底层是爬虫。爬虫工具出了问题，受罚的是数据使用方，不是工具提供方。",
    rule: "在设计阶段就要清楚自己在哪条线的哪一边。",
  },
  {
    icon: ShieldAlert,
    title: "提示词注入 / Token 中间商",
    en: "Prompt Injection",
    body:
      "系统提示词必须做边界约束；用户输入要做过滤。涉及业务敏感数据，直接用官方 API，不经第三方中间商——便宜的背后有隐含成本。",
    rule: "关键操作不依赖 AI 判断，走人工审核。",
  },
  {
    icon: Bug,
    title: "AI 生成代码的安全漏洞",
    en: "AI Code Audit",
    body:
      "AI 写出来的代码能跑，不代表安全。SQL 注入、输入未校验、权限缺检查、依赖含已知漏洞——AI 不会主动告诉你。",
    rule: "处理用户数据 / 支付 / 权限的代码，必须人工审计。",
  },
  {
    icon: Stethoscope,
    title: "高风险行业必须人工复核",
    en: "Human-in-the-loop",
    body:
      "财务、会计、法律、医疗——AI 一个小错误就是几十万的差额。AI 负责初稿和速度，人负责准确性和最终签字。",
    rule: "这不是不信任 AI，是岗位职责的清晰划分。",
  },
];

export function Risk() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="risk" className="py-32 px-6 bg-[#0a0a0a]" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">
            Risk Boundaries
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            安全不是上线后的事，
            <br />
            <span className="text-muted-foreground">是设计阶段的事。</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            安全问题不会缓慢地让你亏损，它会一次性摧毁你。在设计阶段解决的成本，是上线后补救的十分之一。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {risks.map((risk, index) => {
            const Icon = risk.icon;
            return (
              <motion.div
                key={risk.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative rounded-2xl border border-red-400/20 bg-red-400/[0.03] p-7 hover:border-red-400/40 transition-colors duration-300"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-red-400/10 border border-red-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={20} className="text-red-300/90" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold tracking-wide">
                      {risk.title}
                    </h3>
                    <p className="text-xs text-red-300/60 font-medium tracking-widest uppercase mt-0.5">
                      {risk.en}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {risk.body}
                </p>

                <div className="border-t border-red-400/10 pt-4">
                  <p className="text-xs text-red-300/80 leading-relaxed">
                    → {risk.rule}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
