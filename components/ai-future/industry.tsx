"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Factory,
  ShoppingBag,
  Music2,
  Stethoscope,
  Scale,
  Briefcase,
} from "lucide-react";

const items = [
  {
    icon: Factory,
    title: "工厂质检",
    en: "Visual QC",
    description:
      "用视觉模型识别产品缺陷，质检员工作量减少 70%。但模型必须用你工厂的真实缺陷图训练——这就是壁垒。",
    badge: "−70% 质检人力",
  },
  {
    icon: ShoppingBag,
    title: "电商图像生成",
    en: "Catalog at Scale",
    description:
      "商品主图、广告素材、模特换装、场景合成。基于 Stable Diffusion 微调品牌风格，单日产出 500 张主图——比的不是质量，是成本结构。",
    badge: "500 张 / 日",
  },
  {
    icon: Scale,
    title: "法律 / 金融",
    en: "RegTech",
    description:
      "合同风险识别、法条检索、财务异常检测。结构化数据 × 强监管，AI 在里面能做的事很深，但需要专门的解决方案。",
    badge: "Compliance-first",
  },
  {
    icon: Briefcase,
    title: "律所 / 咨询",
    en: "Knowledge Work",
    description:
      "文书、尽调报告、行业研究——重复性极高的脑力劳动。AI 处理初稿，人负责判断与修改。",
    badge: "+40–60% 有效产能",
  },
  {
    icon: Stethoscope,
    title: "医疗影像",
    en: "Medical Imaging",
    description:
      "X 光片 AI 辅助诊断已在二三线城市医院落地。不是替代医生，是让医生重点看有问题的片子。",
    badge: "Triage AI",
  },
  {
    icon: Music2,
    title: "音乐 / 创意",
    en: "Creative Studio",
    description:
      "Suno 出 demo，成本压到几乎为零。词曲 AI 起稿 + 人工精修。用了的工作室，已经把节奏彻底拉开。",
    badge: "Demo Cost ≈ 0",
  },
];

export function Industry() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industry" className="py-32 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">
            Industry Custom
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            行业定制，
            <br />
            <span className="text-muted-foreground">才是真正的护城河。</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            通用需求是地板，定制需求才是天花板。前提是：你的行业里有通用 AI 搞不定的东西。
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
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-primary" />
                </div>

                <h3 className="text-lg font-bold tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs text-primary/60 font-medium tracking-widest uppercase mt-0.5 mb-4">
                  {item.en}
                </p>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {item.description}
                </p>

                <span className="inline-block text-xs px-3 py-1 rounded-full border border-primary/20 text-primary/80 bg-primary/5">
                  {item.badge}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
