"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileText,
  BarChart3,
  Headset,
  Sparkles,
  Code2,
} from "lucide-react";

const items = [
  {
    icon: FileText,
    title: "文本处理",
    en: "Text Ops",
    description:
      "合同审阅、会议纪要、客服话术、营销文案、周报月报。一个熟练用 Claude / GPT 的人，月度产出可顶 2–3 个普通员工。",
    metric: "2–3×",
    metricLabel: "人均文字产出",
  },
  {
    icon: BarChart3,
    title: "数据分析",
    en: "Data Analysis",
    description:
      "不需要懂 SQL，不需要写 Python。把 Excel 扔给 AI，要什么分析出什么分析。把「搬运型分析师」压缩一半。",
    metric: "−50%",
    metricLabel: "分析链条工时",
  },
  {
    icon: Headset,
    title: "客服售前",
    en: "AI Support",
    description:
      "标准化产品 80% 问题由 AI 接管，剩下 20% 转人工——那 20% 才是真正需要人的地方。微信端因生态封闭做分流，官网/APP 内全量接入。",
    metric: "80 / 20",
    metricLabel: "AI / 人工分配",
  },
  {
    icon: Sparkles,
    title: "内容生产",
    en: "Content Engine",
    description:
      "小红书、公众号、视频脚本、商品详情页。同样的内容团队，AI 让人均产出翻倍——不是替代人，是让同样的人做更多事。",
    metric: "2×",
    metricLabel: "团队产出翻倍",
  },
  {
    icon: Code2,
    title: "代码辅助",
    en: "Coding Copilot",
    description:
      "Claude Code / Cursor 已经是开发团队的标配。不是替代开发，是让同样的人写更多代码、缩短交付周期。",
    metric: "−40%",
    metricLabel: "交付周期",
  },
];

export function Universal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="universal" className="py-32 px-6 bg-[#0a0a0a]" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">
            Universal Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            5 个通用入口，
            <br />
            <span className="text-muted-foreground">本周就能见效。</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            不需要招专家、不需要训练模型、几乎每家公司都有。这是 AI 转型的地板。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="glow-card p-7"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold tracking-wide">
                      {item.title}
                    </h3>
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
                    {item.metric}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {item.metricLabel}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 text-center text-xs text-muted-foreground max-w-2xl mx-auto"
        >
          注：国内 B2C 客服 90% 发生在微信，但腾讯生态封闭。现实路径是
          <span className="text-primary/80">官网 + APP 接入 AI，微信端只做分流和初筛</span>
          ——这不是最优解，是现实解。
        </motion.p>
      </div>
    </section>
  );
}
