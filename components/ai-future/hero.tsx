"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FutureHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-20 px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[680px] h-[680px] bg-primary/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            2026 企业 AI 转型实战指南
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.15]"
        >
          AI 时代，
          <br />
          <span className="gradient-text">我们能为企业做到什么。</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          降本是可以算的，增效是一个感受。
          <br className="hidden sm:block" />
          我们帮你把感受变成数字，把数字变成决策，把决策变成落地的系统。
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 mx-auto max-w-2xl border-l-2 border-primary/40 pl-6 text-left"
        >
          <p className="text-lg text-white/90 leading-relaxed">
            "如果你明天不用 AI，你的竞争对手用了——三个月后会发生什么？"
          </p>
          <p className="mt-3 text-xs text-primary/60 tracking-widest uppercase">
            First Principles
          </p>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#universal"
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full font-medium text-sm hover:bg-primary/90 transition-all duration-200 shadow-[0_0_20px_rgba(178,235,242,0.3)] hover:shadow-[0_0_30px_rgba(178,235,242,0.5)]"
          >
            从今天能落地的能力开始
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 border border-border text-muted-foreground px-7 py-3 rounded-full font-medium text-sm hover:text-white hover:border-white/30 transition-all duration-200"
          >
            预约 30 分钟诊断
          </a>
        </motion.div>
      </div>
    </section>
  );
}
