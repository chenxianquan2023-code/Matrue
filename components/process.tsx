"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "需求解构",
    subtitle: "Requirement Deconstruction",
    icon: Search,
    description: "深入理解业务本质，3 天完成逻辑对齐与需求文档输出。",
  },
  {
    number: "02",
    title: "架构设计",
    subtitle: "Architecture Blueprint",
    icon: PenTool,
    description: "基于场景设计可扩展的AI技术架构，确定核心数据流与LLM选择路径",
  },
  {
    number: "03",
    title: "敏捷开发",
    subtitle: "Agile Development",
    icon: Code2,
    description: "AI 辅助编码，双周迭代交付，持续集成与代码审查。",
  },
  {
    number: "04",
    title: "压力测试",
    subtitle: "Stress Testing",
    icon: ShieldCheck,
    description: "全链路压测与安全审计，确保生产环境可靠性。",
  },
  {
    number: "05",
    title: "部署进化",
    subtitle: "Deploy & Evolve",
    icon: Rocket,
    description: "一键部署上线，提供持续迭代与性能优化支持。",
  },
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-32 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">
            The Matrue Path
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Engineered Process,
            <br />
            <span className="text-muted-foreground">Predictable Results.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Desktop: connecting line */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Step circle */}
                  <div className="relative z-10 w-[120px] h-[120px] rounded-2xl bg-card border border-border flex flex-col items-center justify-center mb-6 group-hover:border-primary/40 transition-colors duration-300">
                    <Icon
                      size={28}
                      className="text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-2"
                    />
                    <span className="text-xs text-muted-foreground font-mono">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-base font-bold mb-1 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-xs text-primary/70 font-medium mb-3 tracking-wide">
                    {step.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>

                  {/* Mobile connector line */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden w-px h-8 bg-border mt-6" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
