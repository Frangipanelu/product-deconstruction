# Product Deconstruction Skill v3

对互联网/AI产品进行系统性拆解分析，输出完整HTML图文报告。

![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-3.0-green)

## ✦ 这是什么

一个 Claude Code / OpenCode 的 Skill，当你提到"帮我分析XX产品"时自动触发。它会联网搜索产品信息，从6个维度（定位→体验→设计→数据→运营→商业）进行深度分析，输出一份可直接在浏览器打开的HTML报告。

**不是功能清单**，而是回答三个核心问题：
- 这个产品为什么存在？（JTBD）
- 它为什么能活下来/活不下去？（商业模式+竞争）
- 如果我是PM，下一步该做什么？（改进建议）

## ✦ 5种视觉风格

报告会根据产品类型自动选择对应的视觉风格，避免所有报告看起来一模一样：

| 风格 | 适用产品 | 预览 |
|------|---------|------|
| **学术数据** | SaaS / 增长工具 / B2B | ![Academic](skill-showcase/style-academic-hero.png) |
| **暗色科技** | AI / 开发者工具 / 加密 | ![Dark](skill-showcase/style-dark-hero.png) |
| **企业信任** | 金融 / 企业级 / 合规 | ![Enterprise](skill-showcase/style-enterprise-hero.png) |
| **温暖编辑** | 消费 / 生活方式 / D2C | ![Editorial](skill-showcase/style-editorial-hero.png) |
| **开发者极简** | 开源 / CLI / API | ![Minimal](skill-showcase/style-minimal-hero.png) |

## ✦ 功能特性

### 智能分级
- **S级**：用户过亿/年营收过亿 → 六层全做，深度分析
- **A级**：用户百万级/有明确商业模式 → 标准分析
- **B级**：小团队/工具型产品 → 轻量分析
- **C级**：已关停/衰退 → 死亡原因分析+教训

### 六层分析框架
| Layer | 维度 | 核心问题 |
|-------|------|---------|
| 0 | 产品层 | 是什么？给谁用？ |
| 1 | 体验层 | 怎么用？爽不爽？ |
| 2 | 设计层 | 长什么样？风格判断 |
| 3 | 功能层 | 核心流程+设计巧思 |
| 4 | 数据层 | 指标体系假设 |
| 5 | 运营层 | AARRR增长策略 |
| 6 | 商业层 | 怎么赚钱？壁垒在哪？ |

### 信息收集规则
- 10+个信息来源渠道（官方、第三方评测、社媒、应用商店）
- 信息缺失自动判断规则（X平台 vs 公众号）
- 搜索渠道矩阵（技术向 vs 泛用户渠道）

### 图表可视化
- 12种数据形状 → 推荐图型映射
- CSS条形图、统计网格、SWOT矩阵、对比面板
- 灰阶/单色相明度梯，不使用多色相
- 自包含SVG，无外部依赖

## ✦ 安装

### 方式一：全局安装（推荐）

```bash
# 克隆到 Claude Code skills 目录
git clone https://github.com/Frangipanelu/product-deconstruction.git ~/.claude/skills/product-deconstruction
```

### 方式二：项目级安装

```bash
# 克隆到项目目录
git clone https://github.com/Frangipanelu/product-deconstruction.git .claude/skills/product-deconstruction
```

### 方式三：手动下载

1. 下载 ZIP 文件
2. 解压到 `~/.claude/skills/product-deconstruction/`

## ✦ 使用方法

安装后，在 Claude Code / OpenCode 中直接说：

```
帮我分析一下 Notion
```

```
产品拆解：Figma
```

```
你觉得 GrowthOS 这个产品怎么样？
```

```
对比分析 Cursor vs Windsurf
```

Skill 会自动：
1. 判断产品复杂度（S/A/B/C级）
2. 选择对应视觉风格
3. 联网搜索产品信息
4. 执行六层分析
5. 输出HTML报告到当前目录

## ✦ 文件结构

```
product-deconstruction/
├── SKILL.md                          # 主文件：执行流程+分析框架
├── README.md                         # 本文档
├── references/
│   ├── search-channels.md            # 搜索渠道矩阵+信息缺失规则
│   ├── chart-catalog.md              # 图型映射+选型流程+视觉语法
│   └── reference-sites.md            # 参考风格网站
└── templates/
    ├── report-template.html          # 通用骨架参考
    ├── style-academic.html           # 学术数据风格（绿色+衬线）
    ├── style-dark.html               # 暗色科技风格（紫色+深黑）
    ├── style-enterprise.html         # 企业信任风格（蓝色+冷白）
    ├── style-editorial.html          # 温暖编辑风格（橙色+暖米）
    └── style-minimal.html            # 开发者极简风格（灰色+纯白）
```

## ✦ 自定义风格

### 修改配色

编辑 `templates/style-*.html` 中的 CSS 变量：

```css
:root {
  --bg: #fafaf7;           /* 背景色 */
  --fg: #0f1311;           /* 正文色 */
  --accent: #1a5f4a;       /* 主色 */
  --accent-2: #6ac6a3;     /* 辅色 */
}
```

### 添加新风格

1. 复制任意现有风格模板
2. 修改 CSS 变量和组件样式
3. 在 `SKILL.md` 的 Step 0.5 风格决策表中添加映射规则

## ✦ 示例报告

| 产品 | 评级 | 风格 | 文件 |
|------|------|------|------|
| X Money | A- | 学术数据 | `product-deconstruction-x-money.html` |
| GrowthOS | B+ | 学术数据 | `product-deconstruction-growthos.html` |

## ✦ 更新日志

### v3.0 (2026-09-07)
- 新增5种视觉风格模板（学术/暗色/企业/编辑/极简）
- 风格自动选择：根据产品类型匹配视觉方案
- 搜索渠道矩阵：10+信息来源+缺失数据处理规则
- 信息缺失自动判断（X平台 vs 公众号）
- 参考网站列表：4类风格参考+用途说明

### v2.0
- 六层分析框架
- 产品分级系统（S/A/B/C）
- CSS条形图+SWOT矩阵
- 自包含HTML输出

### v1.0
- 基础产品分析模板

## ✦ License

MIT

## ✦ 作者

[@Frangipanelu](https://github.com/Frangipanelu)
