"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const founders = [
  {
    name: "Chambers",
    role: "Product & Vision",
    avatar: "/chambers.png",
    tags: ["Serial Entrepreneur", "E-commerce AI", "Health AI"],
    description:
      "前外企产品负责人、AI工程师，连续创业者。深耕AI电商与健康领域，擅长将复杂需求转化为精准的产品方案。",
  },
  {
    name: "Aix",
    role: "Infra & Algorithm",
    avatar: "/aix.png",
    tags: ["Ex-ByteDance", "Volcano Engine", "High Concurrency"],
    description:
      "前字节跳动 API 负责人，火山引擎架构师。DAG 编排与高并发系统专家，构建经过亿级流量验证的基础设施。",
  },
];

export function Founders() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="founders" className="py-32 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">
            The Team
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Built by Engineers,
            <br />
            <span className="text-muted-foreground">Led by Vision.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {founders.map((founder, index) => {
            return (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glow-card p-8 sm:p-10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-border">
                    <Image
                      src={founder.avatar}
                      alt={`${founder.name} avatar`}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-wide">
                      {founder.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {founder.role}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {founder.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {founder.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground"
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
