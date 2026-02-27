"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Mail } from "lucide-react";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="contact" className="py-32 px-6" ref={ref}>
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative glow-card p-12 sm:p-16 text-center overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 mb-8">
                <Mail size={24} className="text-primary" />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Ready to Build
                <br />
                <span className="gradient-text">Something Great?</span>
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto mb-10">
                无论你的 AI 产品处于哪个阶段，我们都能帮你从 0 到 1 交付生产级
                MVP。让我们聊聊你的想法。
              </p>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all duration-200 shadow-[0_0_20px_rgba(178,235,242,0.3)] hover:shadow-[0_0_40px_rgba(178,235,242,0.5)]"
              >
                Get in Touch
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="glow-card max-w-md w-full mx-4 p-8 bg-[#111111]/95"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-wide">
                      Contact Mature
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      选择你方便的联络方式
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-xs text-muted-foreground hover:text-white transition-colors"
                >
                  Close
                </button>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between border border-border rounded-xl px-4 py-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="font-medium mt-1">+86 19106762959</p>
                  </div>
                </div>
                <div className="flex items-center justify-between border border-border rounded-xl px-4 py-3">
                  <div>
                    <p className="text-xs text-muted-foreground">WeChat</p>
                    <p className="font-medium mt-1">yuzhao923</p>
                  </div>
                </div>
                <div className="flex items-center justify-between border border-border rounded-xl px-4 py-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-medium mt-1 break-all">
                      yuzhao923@163.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-xs text-muted-foreground text-right">
                或直接发送需求到邮箱，我们会在 24 小时内回复。
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-wider">Matrue</span>
            <span className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            From Vision to MVP, Powered by AI.
          </p>
        </div>
      </footer>
    </>
  );
}
