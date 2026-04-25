"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Compass } from "lucide-react";

export function FutureCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative glow-card p-12 sm:p-16 text-center overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 mb-8">
              <Compass size={24} className="text-primary" />
            </div>

            <blockquote className="mx-auto max-w-2xl">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                "工具是枪，
                <br />
                <span className="gradient-text">
                  你还需要会开枪的人，和一个知道往哪里打的人。"
                </span>
              </p>
            </blockquote>

            <p className="mt-8 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              我们陪你走完一整段：诊断 → 通用能力上线 → 特工队跑原型 → 流量与增效 → 安全审计。
              <br className="hidden sm:block" />
              不卖工具订阅，只对结果负责。
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/#contact"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all duration-200 shadow-[0_0_20px_rgba(178,235,242,0.3)] hover:shadow-[0_0_40px_rgba(178,235,242,0.5)]"
              >
                预约 30 分钟诊断
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </a>
              <a
                href="/"
                className="inline-flex items-center gap-2 border border-border text-muted-foreground px-8 py-4 rounded-full font-medium hover:text-white hover:border-white/30 transition-all duration-200"
              >
                返回首页
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
