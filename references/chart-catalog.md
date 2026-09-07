# 图型目录 · 产品分析常用映射

图表选型遵循**数据形状驱动**原则：先看数据长什么样，再选图型。图型目录改编自 lieflat-charts（[lieflat-charts](https://github.com/larashero3-dotcom/lieflat-charts) 的 64 张图型目录）。

> **来源与许可**：本文档的图型编号与视觉语法参考改编自 **lieflat-charts**（moxt.ai 出品，https://github.com/larashero3-dotcom/lieflat-charts ），其采用 **PolyForm Noncommercial 1.0** 许可（非商业使用合规）。报告中的图形实现均为本 skill 自行手写 SVG，未复制原仓库代码；非商业用途已标注来源，如需商用请自行评估或重写相关表述。

## 产品分析常用图型映射

| 数据形状 | 产品分析场景 | 推荐图型 | 编号 |
|---------|-------------|---------|------|
| 少类目比较（≤8） | 竞品功能对比、评分对比 | Rung Bars / Chunky Bars | F1 / G3 |
| 100% 构成 | 收入来源占比、用户构成 | Dot Waffle / Hundred Field | G4 / L14 |
| 漏斗 / 分阶段递减 | 注册→激活→付费转化 | Hourglass Stream | L13 |
| 两时点对比（今昔） | 本季 vs 上季核心指标 | Dumbbell Queue / Paired Rungs | F12 / F6 |
| 排名比较 | 功能使用率排名、竞品市占 | Dot Cascade / Tick Rows | L2 / F5 |
| 日序列（≤30 天） | DAU 趋势、活跃度变化 | Hairline Line | F2 |
| 日序列（30-90 天） | 留存曲线、长期趋势 | Barcode Lollipop / Hairline Area | L3 / F3 |
| 瀑布 / 增减分解 | 收入拆解、用户增减 | Rung Waterfall | F9 |
| 单值进度 | 目标完成率、KPI 达成 | Tick Gauge | F11 |
| 有正负的分类数值 | NPS 分项、满意度正负 | Diverging Bar | G10 |
| 多选题百分比 | 用户调研多选结果 | Ballot Tally | L15 |
| 层级 + 份额 | 产品线/部门预算分配 | Nested Treemap | F13 |

## 选型流程（每次出图必走）

1. **判数据形状**：看数据是「比较」「构成」「趋势」「分布」「关系」中的哪一种
2. **查上表匹配**：找到对应数据形状的推荐图型
3. **诚实检查**：这个图型能诚实编码这份数据吗？标签装得下吗？读者能在预期时间内读完吗？
4. **如果匹配不上**：用表格或文字描述替代，不硬套图型

## 禁止的图型

- ❌ **断轴柱状图**：柱的契约是长度∝数值，断轴毁契约。极端值用冲天/放大镜/撕柱不撕轴
- ❌ **雷达图**：除非用户明确要求，否则用表格替代（多维对比表格比雷达图更诚实）
- ❌ **3D 图表**：拒绝发光/玻璃拟态/3D
- ❌ **多色相画单序列**：单序列用灰阶或单色相明度梯

## 视觉语法（Mono 风格）

```
颜色:
  默认灰阶：纸灰 #F0EFEB + 炭黑 #1C1C1A，中间7级灰阶
  明度即数据：最重要 = 最黑（暗卡上反转为最亮）
  一律实心：不透明材质、不发光、不渐变、无阴影
  颜色池（仅在需要区分时使用）：#2563eb(蓝) #059669(绿) #d97706(橙) #dc2626(红) #6b7280(灰)

排版:
  标题写结论不写图型名："Revenue by plan" 可以，"柱状图" 不行
  卡片四件套：结论式标题(h2) + 副标题(图例+时间) + 图 + 来源行(全大写)
  SVG 最小字号：半宽 6.5px / 通栏 5.5px

动画:
  入场动画默认开，quarticOut 快进快停
  点阵 stagger 8-15ms/个，条形 80-130ms/根
  必须带 prefers-reduced-motion 降级

数据:
  演示数据用确定性伪随机，禁用 Math.random()
  数值和视觉严格成正比：面积用 Math.sqrt(v) 换算半径
```

## SVG 安全规则

1. 每个 `<svg>` 内 `<defs>` ID 加唯一前缀：`<图表序号>-<名称>`，如 `1-arrow`, `2-marker`
2. SVG 必须用 `viewBox` + `width: 100%` + `style="max-width: Xpx; height: auto"`
3. font-family 只用系统字体
4. SVG 内文字用 `text-anchor` 控制对齐，避免固定坐标溢出
