"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    label: "E-commerce AI",
    title: "OminiGen",
    description:
      "为 500+ 跨境卖家构建的 AI 智能营销平台。AI 驱动的商品分析、广告优化与供应链预测，帮助卖家实现数据驱动的精准运营。",
    metrics: [
      { label: "Active Sellers", value: "500+" },
      { label: "Platform", value: "Web" },
      { label: "AI Models", value: "5+" },
    ],
    tags: ["Next.js", "Python", "LLM", "Data Pipeline"],
  },
  {
    label: "Health AI",
    title: "Ego",
    description:
      "深度 AI 健康管理 iOS 应用。基于用户健康数据的个性化分析与建议，集成可穿戴设备数据，提供智能化的健康追踪与干预方案。",
    metrics: [
      { label: "Platform", value: "iOS" },
      { label: "AI Features", value: "10+" },
      { label: "Data Points", value: "50+" },
    ],
    tags: ["Swift", "Core ML", "HealthKit", "RAG向量"],
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Projects That
            <br />
            <span className="text-muted-foreground">Ship & Scale.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glow-card p-8 sm:p-10 group cursor-pointer"
              >
                <div className="mb-6">
                  <span className="text-xs font-medium text-primary/70 tracking-widest uppercase">
                    {project.label}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-border">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="text-lg font-bold">{metric.value}</p>
                      <p className="text-xs text-muted-foreground">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
