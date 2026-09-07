# Style Guide — 产品拆解报告设计系统

本设计系统为产品拆解报告提供统一的视觉语言，确保跨产品的专业性和一致性。

## 核心设计原则

### 1. 信息层级
- **主标题**：Georgia 衬线，2.5rem，`#1e293b`
- **节标题**：Georgia 衬线，1.75rem，`#1e293b`
- **副标题**：Georgia 衬线，1.25rem，`#475569`
- **正文**：system-ui，1rem，`#334155`，行高 1.8
- **辅助文字**：system-ui，0.875rem，`#64748b`

### 2. 配色方案

#### 默认学术风格
```css
--accent: #2563eb;        /* 主色：蓝 */
--accent-hover: #1d4ed8;  /* 悬停态 */
--accent-bg: #eff6ff;     /* 背景色 */
--border: #e2e8f0;        /* 边框 */
--bg: #ffffff;            /* 页面背景 */
--text: #334155;          /* 正文 */
--heading: #1e293b;       /* 标题 */
--muted: #64748b;         /* 辅助文字 */
--success: #059669;       /* 正面指标 */
--warning: #d97706;       /* 中性指标 */
--danger: #dc2626;        /* 负面指标 */
```

### 3. 图表配色（12 色板）
```css
--chart-1: #2563eb;  /* 蓝 */
--chart-2: #059669;  /* 绿 */
--chart-3: #d97706;  /* 橙 */
--chart-4: #dc2626;  /* 红 */
--chart-5: #7c3aed;  /* 紫 */
--chart-5: #0891b2;  /* 青 */
--chart-6: #ca8a04;  /* 黄 */
--chart-7: #e11d48;  /* 玫红 */
--chart-8: #4f46e5;  /* 靛蓝 */
--chart-9: #065f46;  /* 深绿 */
--chart-10: #9333ea; /* 深紫 */
--chart-11: #ea580c; /* 深橙 */
```

### 4. 排版系统

#### 中文
- 标题：思源宋体 (Noto Serif SC) 或系统衬线
- 正文：思源黑体 (Noto Sans SC) 或系统无衬线
- 代码：JetBrains Mono 或系统等宽

#### 英文
- 标题：Georgia, Cambria
- 正文：-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto
- 代码：SFMono-Regular, Consolas, "Liberation Mono", Menlo

### 5. 间距系统
```css
--space-xs: 0.25rem;   /* 4px */
--space-sm: 0.5rem;    /* 8px */
--space-md: 1rem;      /* 16px */
--space-lg: 1.5rem;    /* 24px */
--space-xl: 2rem;      /* 32px */
--space-2xl: 3rem;     /* 48px */
--space-3xl: 4rem;     /* 64px */
```

### 6. 阴影系统
```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1);
--shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.1);
```

## 图表设计规范

### 柱状图
- 圆角：`rx="4"`
- 最小宽度：40px
- 最大宽度：80px
- 间距：`gap={32}`
- 数值标签：居中顶部，加粗

### 环形图
- 内半径：60
- 外半径：90
- 标签：`label` + `sublabel`（百分比 + 描述）
- 过渡动画：`animationBegin={200}`

### 卡片
- 边框：`1px solid var(--border)`
- 圆角：`12px`
- 内边距：`24px`
- 阴影：`var(--shadow-sm)`
- 悬停：`var(--shadow-md)`

## 组件规范

### 章节标题
```html
<h2 style="font-size: 1.75rem; font-family: 'Georgia', serif; color: #1e293b; margin: 3rem 0 1.5rem; padding-bottom: 0.5rem; border-bottom: 2px solid var(--accent);">
  <span style="color: var(--accent);">§</span> 节标题
</h2>
```

### 数据网格
```html
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
  <div style="padding: 1.5rem; border: 1px solid var(--border); border-radius: 12px; text-align: center;">
    <div style="font-size: 2rem; font-weight: 700; color: var(--accent); font-family: 'Georgia', serif;">数据</div>
    <div style="font-size: 0.875rem; color: var(--muted); margin-top: 0.25rem;">标签</div>
  </div>
</div>
```

### 章节分隔符
```html
<div style="text-align: center; margin: 3rem 0; color: var(--border); font-size: 0.875rem;">✦ ✦ ✦</div>
```

## 响应式断点
- 桌面：> 768px，max-width 800px
- 平板：768px，grid 降为 2 列
- 手机：480px，grid 降为 1 列，字号缩小

## 无障碍
- 所有颜色对比度 ≥ 4.5:1（WCAG AA）
- 图表提供 aria-label
- 所有交互元素可键盘访问
