# Matrue Studio – From Vision to MVP, Powered by AI

Matrue 是一个由前大厂工程师和连续创业者组成的 AI 技术工作室，专注于在 **4–8 周内为 AI 初创团队交付生产级 MVP**。

本仓库是 Matrue 官网的源码，采用工业极简主义视觉风格，参考了 linear.app / vercel.com 的设计语言。

## 技术栈

- **Framework**: Next.js 16 (App Router) + TypeScript  
- **Styling**: Tailwind CSS v4（自定义设计系统 + 工业极简暗色主题）  
- **Animation**: Framer Motion（滚动驱动的渐隐 / 上移动效 + 背景光晕动效）  
- **Icons**: Lucide React（局部仍可按需使用）  
- **Components**: 自建轻量组件 + Shadcn UI 可后续接入  
- **Deployment**: 预期部署在 Vercel

## 页面结构

单页落地页，核心区块：

1. **Hero** – 品牌主标语与核心价值承诺  
2. **Founder Profiles** – 创始人介绍（Chambers & Aix，使用真实头像）  
3. **The Matrue Path** – 需求解构 → 架构打样 → 敏捷开发 → 压力测试 → 部署进化 的 5 步流程  
4. **Key Projects**
   - OminiGen – 为 500+ 跨境卖家服务的 AI 智能营销平台  
   - Ego – 深度 AI 健康管理 iOS App  
5. **CTA & Contact** – Get in Touch 弹窗展示电话 / 微信 / 邮箱

## 运行与开发

```bash
# 安装依赖
npm install

# 开发环境
npm run dev

# 构建生产包
npm run build

# 运行生产包
npm run start
```

> 提示：本地首次构建会尝试拉取 Inter 字体，如在受限网络环境下构建失败，可临时注释掉 `app/layout.tsx` 中的 `Inter` 字体配置或手动改为系统字体。

## 主要目录结构

```bash
app/
  layout.tsx        # 根布局，字体与全局背景
  page.tsx          # 首页入口

components/
  navbar.tsx        # 顶部导航（Glassmorphism 毛玻璃）
  hero.tsx          # Hero 区域
  founders.tsx      # 创始人介绍（含头像）
  process.tsx       # The Matrue Path 流程组件
  projects.tsx      # 项目案例展示
  cta.tsx           # CTA + 联系弹窗 + Footer
  background-orbit.tsx # 全局背景光晕动效

lib/
  utils.ts          # 工具函数（cn 等）

public/
  chambers.png      # Chambers 头像
  aix.png           # Aix 头像
```

## 设计与动效说明

- **配色**
  - 背景：`#0A0A0A`
  - 主色：`#B2EBF2` 冰蓝（按钮、强调元素）
  - 边框：`rgba(255,255,255,0.1)` 细描边
- **排版**
  - Inter / 系统无衬线字体，大字重、宽字距
- **动效**
  - Framer Motion 实现的滚动进入时 `fade-in + slide-up`
  - 全局背景使用缓慢运动的渐变光团（方案一）
  - 卡片 hover 微光 + 轻微阴影扩散

## 部署到 Vercel（简要）

1. 在 GitHub 创建仓库（例如：`Matrue`）并推送本项目代码  
2. 登录 Vercel 并 Import GitHub 仓库  
3. Framework 选择 **Next.js**，保持默认构建命令  
4. 部署完成后，绑定自定义域名（可选）

---

欢迎对落地页提出改进建议，或在 Issue 中记录你希望我们在官网中补充的内容（案例细节、博客、技术分享等）。
