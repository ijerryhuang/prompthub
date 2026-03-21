// 提示词数据库
const promptsDB = [
  {
    id: 1,
    title: "小红书爆款标题生成器",
    category: "内容创作",
    tags: ["小红书", "标题", "社交媒体"],
    description: "输入主题，生成10个小红书风格的爆款标题",
    prompt: `你是一个小红书内容专家。请根据用户输入的主题，生成10个吸引眼球的小红书标题。

要求：
1. 使用数字、emoji、疑问句等增加点击率
2. 标题长度控制在20字以内
3. 突出痛点或利益点
4. 语气亲切、真实

主题：{主题}

请输出10个标题：`,
    example: {
      input: "主题：分享我的效率工具",
      output: `1. 💡我用了3个工具，工作效率翻倍！
2. 被同事追着问的效率神器🔥
3. 从加班到准点下班，我只用了这1招
4. 为什么没人早点告诉我这些工具？
5. ✅亲测有效！效率提升200%
6. 打工人必备｜5个让你早下班的神器
7. 老板以为我加班，其实我在...
8. 💻这些工具让我每天多睡2小时
9. 别再无效工作了！试试这几个工具
10. 效率翻倍｜我的私藏工具大公开`
    },
    author: "猪七",
    likes: 128,
    usage: 3420,
    isHot: true,
    isRecommend: true
  },
  {
    id: 2,
    title: "周报生成助手",
    category: "职场效率",
    tags: ["周报", "工作总结", "职场"],
    description: "根据工作要点一键生成专业周报",
    prompt: `请帮我写本周工作周报：

本周工作：
- {工作要点1}
- {工作要点2}
- {工作要点3}

要求：
1. 用数据说话，量化成果
2. 体现工作价值和业务贡献
3. 语言专业、简洁
4. 分段：本周完成、下周计划、遇到的问题
5. 总字数300-500字

风格：专业职场范，老板爱看的那种`,
    example: {
      input: "本周工作：\n- 完成了用户增长分析报告\n- 优化了登录流程，减少了跳出率\n- 组织了团队周会",
      output: `【本周工作周报】

一、本周完成情况

1. 数据分析与报告
   完成了用户增长分析报告，通过对近3个月用户数据的深度挖掘，识别出3个关键增长点。报告已提交给产品团队，为Q3策略制定提供数据支撑。

2. 产品优化
   针对用户反馈的登录流程繁琐问题，协同技术团队进行优化。优化后登录跳出率降低15%，日活跃用户提升8%。

3. 团队管理
   组织并主持本周团队周会，同步项目进展，协调跨部门资源，确保项目按计划推进。

二、下周工作计划

- 跟进用户增长策略落地情况
- 启动新版本功能测试
- 筹备下月团队培训

三、遇到的问题

跨部门沟通效率有待提升，建议建立固定的沟通机制。`
    },
    author: "猪七",
    likes: 256,
    usage: 8900,
    isHot: true,
    isRecommend: true
  },
  {
    id: 3,
    title: "代码解释助手",
    category: "编程开发",
    tags: ["代码", "编程", "学习"],
    description: "解释任意代码的功能和逻辑",
    prompt: `请解释以下代码的功能和逻辑：

\`\`\`
{代码}
\`\`\`

请按以下格式回答：
1. 整体功能概述
2. 逐行/逐段解释
3. 关键知识点说明
4. 可能的优化建议`,
    example: {
      input: "代码：\nfunction debounce(fn, delay) {\n  let timer = null;\n  return function() {\n    if (timer) clearTimeout(timer);\n    timer = setTimeout(() => {\n      fn.apply(this, arguments);\n    }, delay);\n  }\n}",
      output: `1. 整体功能概述
这是一个防抖函数（debounce），用于限制某个函数在短时间内被频繁调用。常用于搜索框输入、窗口调整等场景。

2. 逐行解释
- 第1行：定义debounce函数，接收两个参数：要执行的函数fn和延迟时间delay
- 第2行：声明timer变量，用于存储定时器ID
- 第3行：返回一个新函数，这个新函数会替换原始函数
- 第4行：如果timer存在，清除之前的定时器
- 第5-7行：设置新的定时器，延迟执行传入的函数fn

3. 关键知识点
- 闭包：内部函数访问外部函数的timer变量
- apply：确保函数执行时this和参数正确传递
- setTimeout/clearTimeout：JavaScript定时器API

4. 优化建议
- 可以添加立即执行选项（leading参数）
- 支持取消功能（返回cancel方法）
- 使用TypeScript添加类型定义`
    },
    author: "CodeMaster",
    likes: 89,
    usage: 2100,
    isHot: false,
    isRecommend: true
  },
  {
    id: 4,
    title: "邮件回复生成器",
    category: "职场效率",
    tags: ["邮件", "沟通", "职场"],
    description: "根据场景生成得体的邮件回复",
    prompt: `请帮我写一封邮件回复：

场景：{场景描述}
对方身份：{对方身份}
我的立场：{我的立场}
语气要求：{正式/友好/委婉/直接}

要求：
1. 开头得体，结尾礼貌
2. 内容清晰，逻辑通顺
3. 符合商务邮件规范
4. 字数适中，不啰嗦`,
    example: {
      input: "场景：客户对交付时间有异议\n对方身份：重要客户\n我的立场：需要解释延期原因并安抚\n语气：友好委婉",
      output: `主题：关于项目交付时间的说明

尊敬的王总：

您好！

感谢您一直以来对我们项目的支持与信任。关于您关心的交付时间问题，我想向您做一个详细说明。

由于近期需求变更较多，为了确保最终交付质量，我们决定在原定计划基础上延长3个工作日。这个决定是经过团队仔细评估后做出的，目的是给您一个更完善、更稳定的产品。

为表诚意，我们将：
1. 免费提供额外的功能优化服务
2. 安排专人每日同步项目进展
3. 确保新版本在质量上超出您的预期

再次为延期给您带来的不便深表歉意，也恳请您理解我们对品质的追求。如有任何疑问，欢迎随时联系我。

祝商祺！

张三
项目经理
电话：138-xxxx-xxxx`
    },
    author: "猪七",
    likes: 167,
    usage: 4560,
    isHot: true,
    isRecommend: false
  },
  {
    id: 5,
    title: "数据分析报告",
    category: "数据分析",
    tags: ["数据分析", "报告", "Excel"],
    description: "根据数据生成分析报告",
    prompt: `请根据以下数据生成分析报告：

数据：
{数据内容}

分析维度：{维度}

要求：
1. 总结关键发现
2. 提供数据洞察
3. 给出 actionable 建议
4. 格式清晰，适合汇报`,
    example: {
      input: "数据：\n- 1月销售额：100万\n- 2月销售额：120万\n- 3月销售额：95万\n- 4月销售额：140万\n\n维度：月度销售趋势分析",
      output: `【销售数据分析报告】

一、关键发现

1. 整体趋势
   Q1-Q2销售额呈现波动上升趋势，4月创季度新高（140万），较1月增长40%。

2. 异常点识别
   3月销售额出现明显下滑（环比下降20.8%），需要重点关注。

3. 增长亮点
   4月表现突出，环比增长47.4%，说明新策略开始见效。

二、数据洞察

1. 季节性因素
   3月下滑可能与春节后市场恢复期有关，属正常波动范围。

2. 策略有效性
   4月推出的促销活动效果显著，ROI达到预期目标。

三、Actionable建议

1. 短期（本月）
   - 复制4月成功模式，在其他区域推广
   - 储备5月促销资源，保持增长势头

2. 中期（本季度）
   - 建立月度波动预警机制
   - 优化库存管理，应对销售高峰

3. 长期（本年度）
   - 制定全年促销活动日历
   - 加强客户关系管理，提升复购率`
    },
    author: "DataPro",
    likes: 134,
    usage: 1890,
    isHot: false,
    isRecommend: true
  },
  {
    id: 6,
    title: "朋友圈文案生成",
    category: "内容创作",
    tags: ["朋友圈", "社交", "文案"],
    description: "生成适合发朋友圈的文案",
    prompt: `请帮我写一条朋友圈文案：

主题：{主题}
风格：{文艺/搞笑/励志/日常}
配图：{有/无}

要求：
1. 简短精炼，适合手机阅读
2. 有感染力或共鸣点
3. 适当使用 emoji
4. 可以带话题标签`,
    example: {
      input: "主题：周末加班\n风格：搞笑\n配图：有",
      output: `文案1（吐槽型）：
周末加班，我的床在等我，我在等下班😭
#打工人 #周末加班 #什么时候能财富自由

文案2（励志型）：
周末也在努力的人，运气不会太差💪
（其实是Deadline逼得😅）
#工作使我快乐 #假装很充实

文案3（文艺型）：
窗外的阳光正好
我在格子间里写诗
诗的名字叫《加班》
#周末 #打工日记

文案4（搞笑型）：
别人周末：吃吃喝喝玩玩
我的周末：Ctrl+C Ctrl+V
我和成功人士的距离，就差一个周末😂
#加班日常 #人间真实`
    },
    author: "文案小助手",
    likes: 223,
    usage: 6780,
    isHot: true,
    isRecommend: true
  },
  {
    id: 7,
    title: "面试自我介绍",
    category: "求职面试",
    tags: ["面试", "自我介绍", "求职"],
    description: "生成个性化的面试自我介绍",
    prompt: `请帮我写一段面试自我介绍：

岗位：{目标岗位}
经验：{工作年限}
亮点：{核心优势}
公司：{目标公司}

要求：
1. 时长控制在1-2分钟
2. 突出与岗位的匹配度
3. 体现个人特色和价值
4. 结构：开场→经历→优势→结尾`,
    example: {
      input: "岗位：产品经理\n经验：3年\n亮点：数据驱动、跨部门协作能力强\n公司：字节跳动",
      output: `面试官您好，很高兴能参加今天的面试。我是张三，应聘贵公司的产品经理岗位。

我毕业于XX大学计算机专业，毕业后一直在互联网领域工作，至今已有3年产品经验。在上一家公司，我负责的核心项目从0到1搭建了用户增长体系，通过数据驱动的方法，半年内将DAU从10万提升到50万。

我认为自己有三个核心优势特别适合这个岗位：

第一，数据驱动的产品思维。我习惯用数据说话，在过去的工作中，我建立了完整的数据监控体系，每个产品决策都有数据支撑。

第二，强大的跨部门协作能力。产品经理是枢纽角色，我非常擅长协调设计、开发、运营等多个团队，确保项目高效推进。

第三，快速学习能力。面对新领域，我能快速上手并产出结果。比如之前负责陌生业务线，仅用2周就完成了行业调研和产品规划。

我一直很欣赏字节跳动"追求极致"的产品理念，希望能加入贵公司，用我的经验为团队创造价值。

谢谢！`
    },
    author: "HR小姐姐",
    likes: 312,
    usage: 9200,
    isHot: true,
    isRecommend: true
  },
  {
    id: 8,
    title: "错误排查助手",
    category: "编程开发",
    tags: ["debug", "错误", "编程"],
    description: "分析错误信息并给出解决方案",
    prompt: `我遇到了一个错误，请帮我分析：

错误信息：
\`\`\`
{错误信息}
\`\`\`

上下文：
{相关代码/操作}

请按以下格式回答：
1. 错误原因分析
2. 可能的解决方案（多种）
3. 预防建议
4. 相关知识点补充`,
    example: {
      input: "错误：TypeError: Cannot read property 'name' of undefined\n上下文：React组件中获取user.name",
      output: `1. 错误原因分析

这个错误表示你试图访问一个undefined值的name属性。常见原因：
- user对象还未初始化（异步数据未返回）
- API返回的数据结构不符合预期
- 条件渲染时未做空值判断

2. 可能的解决方案

方案A：可选链操作符（推荐）
\`\`\`javascript
user?.name || '默认名称'
\`\`\`

方案B：条件渲染
\`\`\`javascript
{user && <div>{user.name}</div>}
\`\`\`

方案C：默认值设置
\`\`\`javascript
const { name = '默认名称' } = user || {};
\`\`\`

3. 预防建议

- 异步数据获取时显示loading状态
- 使用TypeScript添加类型检查
- API返回添加数据校验
- 关键路径添加错误边界（Error Boundary）

4. 相关知识点

- 可选链操作符(?.)：ES2020新特性
- 短路求值：&&和||的妙用
- 空值合并运算符(??)：处理0和false的特殊情况`
    },
    author: "BugHunter",
    likes: 178,
    usage: 3450,
    isHot: false,
    isRecommend: false
  },
  {
    id: 9,
    title: "SQL查询生成器",
    category: "数据分析",
    tags: ["SQL", "数据库", "查询"],
    description: "用自然语言描述需求，生成SQL查询语句",
    prompt: `请根据以下需求生成SQL查询语句：

需求描述：{需求}
表结构：{表结构}

要求：
1. 使用标准SQL语法
2. 添加必要的注释说明
3. 考虑性能优化
4. 处理边界情况（如空值）`,
    example: {
      input: "需求：查询最近30天内注册的用户，按注册日期倒序排列\n表结构：users(id, username, email, created_at, status)",
      output: `-- 查询最近30天注册的用户
SELECT 
    id,
    username,
    email,
    created_at,
    status
FROM users
WHERE created_at >= DATE_SUB(CURRENT_DATE, INTERVAL 30 DAY)
  AND status = 'active'  -- 只查活跃用户
ORDER BY created_at DESC;

-- 如果需要统计每天注册数量
SELECT 
    DATE(created_at) as register_date,
    COUNT(*) as user_count
FROM users
WHERE created_at >= DATE_SUB(CURRENT_DATE, INTERVAL 30 DAY)
GROUP BY DATE(created_at)
ORDER BY register_date DESC;`
    },
    author: "DBA老张",
    likes: 156,
    usage: 2780,
    isHot: true,
    isRecommend: true
  },
  {
    id: 10,
    title: "Python脚本生成",
    category: "编程开发",
    tags: ["Python", "自动化", "脚本"],
    description: "描述需求，生成Python自动化脚本",
    prompt: `请帮我写一个Python脚本：

需求：{需求描述}
输入：{输入数据格式}
输出：{期望输出}

要求：
1. 代码简洁高效
2. 添加必要的注释
3. 包含错误处理
4. 提供使用示例`,
    example: {
      input: "需求：批量重命名文件夹里的图片，按序号命名\n输入：文件夹路径\n输出： renamed_001.jpg, renamed_002.jpg...",
      output: `import os
import re

def batch_rename(folder_path, prefix='renamed'):
    """
    批量重命名文件夹中的图片文件
    
    Args:
        folder_path: 文件夹路径
        prefix: 文件名前缀
    """
    # 支持的图片格式
    image_extensions = ('.jpg', '.jpeg', '.png', '.gif', '.bmp')
    
    # 获取所有图片文件
    files = [f for f in os.listdir(folder_path) 
             if f.lower().endswith(image_extensions)]
    files.sort()  # 按文件名排序
    
    # 重命名
    for index, filename in enumerate(files, start=1):
        old_path = os.path.join(folder_path, filename)
        
        # 获取文件扩展名
        _, ext = os.path.splitext(filename)
        
        # 生成新文件名：prefix_001.jpg
        new_filename = f"{prefix}_{index:03d}{ext.lower()}"
        new_path = os.path.join(folder_path, new_filename)
        
        # 重命名
        os.rename(old_path, new_path)
        print(f"重命名: {filename} -> {new_filename}")
    
    print(f"\\n完成！共重命名 {len(files)} 个文件")

# 使用示例
if __name__ == '__main__':
    folder = input("请输入文件夹路径: ")
    if os.path.exists(folder):
        batch_rename(folder)
    else:
        print("文件夹不存在！")`
    },
    author: "PyMaster",
    likes: 245,
    usage: 5670,
    isHot: true,
    isRecommend: true
  },
  {
    id: 11,
    title: "会议纪要整理",
    category: "职场效率",
    tags: ["会议", "纪要", "整理"],
    description: "将会议录音/速记整理成专业纪要",
    prompt: `请将以下会议内容整理成专业会议纪要：

会议内容：
{会议原始内容}

要求：
1. 提取关键决策和结论
2. 列出明确的待办事项（含负责人和时间）
3. 标注需要跟进的问题
4. 格式规范，便于转发`,
    example: {
      input: "会议内容：今天讨论了Q3产品规划，张三说要做用户增长功能，李四说技术有难度可能需要两周，王五说可以先做MVP版本测试市场反应。最后决定先做MVP，张三负责产品设计，李四负责开发，下周三出原型。",
      output: `【会议纪要】
时间：202X年X月X日
主题：Q3产品规划讨论

一、会议决议

1. 产品方向：确定Q3重点为用户增长功能
2. 实施方案：采用MVP模式，快速验证市场
3. 时间规划：下周三完成原型

二、待办事项

| 事项 | 负责人 | 截止时间 | 状态 |
|------|--------|----------|------|
| 产品设计 | 张三 | 下周三 | 🟡 进行中 |
| 技术开发 | 李四 | 下周三 | ⚪ 待开始 |
| 原型测试 | 王五 | 下周五 | ⚪ 待开始 |

三、需要跟进的问题

1. 【技术评估】李四需在周三前确认技术实现可行性
2. 【资源协调】需确认设计资源是否充足
3. 【市场调研】MVP测试需准备用户反馈收集方案

四、下次会议

时间：下周三下午2点
议题：原型评审
准备：张三准备产品原型和PRD文档

---
记录人：XXX
发送时间：202X年X月X日`
    },
    author: "效率达人",
    likes: 189,
    usage: 4230,
    isHot: false,
    isRecommend: true
  },
  {
    id: 12,
    title: "短视频脚本生成",
    category: "内容创作",
    tags: ["短视频", "脚本", "抖音"],
    description: "生成短视频拍摄脚本，包含分镜和台词",
    prompt: `请帮我写一个短视频脚本：

主题：{视频主题}
时长：{时长，如30秒/1分钟}
风格：{搞笑/励志/知识/日常}
平台：{抖音/小红书/B站}

要求：
1. 包含分镜描述
2. 写出具体台词
3. 标注拍摄建议
4. 设计互动点（引导点赞/评论）`,
    example: {
      input: "主题：展示AI工具如何提升工作效率\n时长：30秒\n风格：知识分享\n平台：抖音",
      output: `【短视频脚本】AI工具提升效率

时长：30秒
风格：知识分享型

---

【分镜1】0-5秒
画面：对着电脑苦恼的表情
台词："做数据分析要3小时？"
拍摄：近景，表情夸张一点

【分镜2】5-15秒  
画面：展示使用AI工具的过程，屏幕录制+手部特写
台词："试试这个Prompt，直接把需求告诉AI，10秒出结果！"
拍摄：屏幕录制要清晰，手部动作慢一点

【分镜3】15-25秒
画面：展示AI生成的结果，对比之前的手动操作
台词："看看这个报告，数据、图表、结论全都有了！"
拍摄：分屏对比效果

【分镜4】25-30秒
画面：对着镜头微笑，拿出一张纸（写着Prompt）
台词："Prompt放评论区了，自取！"
拍摄：特写Prompt内容

【互动设计】
- 结尾说"Prompt在评论区"
- 置顶评论放完整Prompt
- 引导用户关注获取更多工具

【标签建议】
#AI工具 #效率提升 #办公技巧 #职场干货`
    },
    author: "短视频编导",
    likes: 334,
    usage: 7890,
    isHot: true,
    isRecommend: true
  },
  {
    id: 13,
    title: "简历优化助手",
    category: "求职面试",
    tags: ["简历", "求职", "优化"],
    description: "优化简历内容，突出亮点和成就",
    prompt: `请帮我优化以下简历内容：

原始内容：
{简历内容}

目标岗位：{目标岗位}

要求：
1. 使用STAR法则描述经历
2. 量化成果，用数据说话
3. 突出与目标岗位匹配的技能
4. 语言简洁专业`,
    example: {
      input: "原始：负责公司公众号运营，写文章，管理粉丝群\n目标岗位：新媒体运营",
      output: `优化后：

【新媒体运营 | XX公司 | 2022.06-2024.03】

• 独立运营公司官方公众号，从0到1搭建内容体系，6个月内粉丝从500增长至5万（增长率100倍）

• 撰写原创文章80+篇，多篇10w+爆款，平均阅读量提升300%

• 建立并管理3个粉丝社群（共2000+人），用户活跃度从15%提升至45%

• 策划执行5场线上活动，累计引流新用户1万+，转化率12%

【核心技能】
内容策划 | 数据分析 | 用户运营 | 社群管理 | 活动策划

优化要点：
1. 添加具体数据（粉丝增长100倍、10w+爆款等）
2. 使用STAR法则（情境-任务-行动-结果）
3. 突出与新媒体运营相关的核心技能
4. 删除模糊描述，全部量化呈现`
    },
    author: "求职顾问",
    likes: 267,
    usage: 6540,
    isHot: true,
    isRecommend: true
  },
  {
    id: 14,
    title: "PPT大纲生成",
    category: "职场效率",
    tags: ["PPT", "汇报", "大纲"],
    description: "根据主题生成PPT结构和内容大纲",
    prompt: `请帮我生成一份PPT大纲：

主题：{PPT主题}
受众：{听众身份}
时长：{演讲时长}
目的：{希望达到的目标}

要求：
1. 设计清晰的逻辑结构
2. 每页标注关键内容点
3. 提供演讲备注建议
4. 设计互动环节`,
    example: {
      input: "主题：Q3季度工作总结汇报\n受众：公司高管\n时长：15分钟\n目的：展示成果，争取资源",
      output: `【PPT大纲】Q3季度工作总结

【封面页】
标题：Q3业绩突破 战略升级
副标题：XX部门季度总结汇报
演讲备注：自信开场，用数据吸引注意

【第1页：目录】
1. 业绩回顾
2. 重点项目
3. 数据洞察
4. Q4规划
5. 资源需求

【第2页：业绩回顾-整体概览】
• Q3营收：1200万（目标1000万，达成率120%）
• 同比增长：35%
• 环比增长：20%
• 关键指标：全部达成
演讲备注：重点强调超额完成目标

【第3页：重点项目-成果展示】
• 项目A：新功能上线，用户活跃度提升40%
• 项目B：流程优化，效率提升60%
• 项目C：客户拓展，新增大客户5家
演讲备注：每个项目配具体数据和案例

【第4页：数据洞察-关键发现】
• 用户行为变化：移动端占比提升至70%
• 市场趋势：XX品类需求增长迅速
• 竞争格局：我们的优势在XX方面
演讲备注：展示对业务的深度理解

【第5页：Q4规划-战略方向】
• 目标：营收1500万，增长25%
• 策略：聚焦XX领域，深化客户价值
• 重点项目：列出3个核心项目
演讲备注：体现前瞻性和可落地性

【第6页：资源需求】
• 人员：增加2名运营专员
• 预算：申请XX万市场推广费用
• 支持：需要技术部门配合XX项目
演讲备注：需求要具体、合理、可衡量

【第7页：总结与展望】
• Q3：超额完成，团队战斗力强
• Q4：目标明确，信心十足
• 期待：与公司共同成长
演讲备注：鼓舞人心，传递信心

【互动设计】
• 第2页后："大家对Q3业绩有什么看法？"
• 最后：开放提问环节，准备3个可能被问到的问题`
    },
    author: "PPT达人",
    likes: 198,
    usage: 4320,
    isHot: false,
    isRecommend: true
  },
  {
    id: 15,
    title: "英文邮件润色",
    category: "职场效率",
    tags: ["英文", "邮件", "商务"],
    description: "将中式英语润色成地道商务英语",
    prompt: `请将以下英文邮件润色：

原始邮件：
{英文内容}

场景：{商务场景}
关系：{与对方关系}

要求：
1. 使用地道商务表达
2. 语气恰当（正式/友好）
3. 逻辑清晰，结构完整
4. 提供修改说明`,
    example: {
      input: "原始：I want to tell you that the project is done. Please check it. If you have question, tell me.\n场景：向客户交付项目\n关系：客户关系",
      output: `润色后：

Subject: Project Delivery - [Project Name] Completed

Dear [Client Name],

I hope this email finds you well.

I am pleased to inform you that the [Project Name] has been successfully completed and is now ready for your review.

Please find the deliverables attached. We have thoroughly tested all features to ensure they meet your requirements and expectations.

Could you please review the project at your earliest convenience? We would greatly appreciate your feedback. Should you have any questions or require any modifications, please do not hesitate to reach out.

Thank you for your continued trust in our team. We look forward to your feedback.

Best regards,
[Your Name]
[Title]
[Company]

---

【修改说明】

1. 开头
   ❌ I want to tell you → ✅ I am pleased to inform you
   更正式、更礼貌

2. 项目完成
   ❌ the project is done → ✅ has been successfully completed
   使用完成时态，更专业

3. 请求检查
   ❌ Please check it → ✅ Please find the deliverables attached
   更商务、更具体

4. 提供帮助
   ❌ If you have question, tell me → ✅ Should you have any questions...please do not hesitate to reach out
   使用虚拟语气，更礼貌正式

5. 结尾
   添加了完整的商务邮件结尾格式`
    },
    author: "商务英语专家",
    likes: 289,
    usage: 7230,
    isHot: true,
    isRecommend: true
  }
];

// 分类列表（增加统计数量）
const categories = ["全部", "内容创作", "职场效率", "编程开发", "数据分析", "求职面试"];

// 分类统计
function getCategoryCount(category) {
  if (category === "全部") return promptsDB.length;
  return promptsDB.filter(p => p.category === category).length;
}

// DOM 元素
let currentFilter = "全部";
let searchQuery = "";
let currentSort = "recommend"; // recommend, hot, newest

// 初始化
function init() {
  renderCategories();
  renderPrompts();
  setupEventListeners();
  renderHotTags();
}

// 渲染热门标签
function renderHotTags() {
  // 从所有标签中找出出现频率最高的
  const tagCount = {};
  promptsDB.forEach(p => {
    p.tags.forEach(tag => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });
  
  const hotTags = Object.entries(tagCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([tag]) => tag);
  
  // 更新快速标签
  const quickTagsContainer = document.querySelector('.quick-tags');
  if (quickTagsContainer) {
    quickTagsContainer.innerHTML = `
      <span class="quick-label">热门搜索：</span>
      ${hotTags.map(tag => `
        <span class="quick-tag" onclick="document.getElementById('searchInput').value='${tag}';handleSearch('${tag}')">${tag}</span>
      `).join('')}
    `;
  }
}

// 渲染分类
function renderCategories() {
  const container = document.getElementById('categoryList');
  container.innerHTML = categories.map(cat => {
    const count = getCategoryCount(cat);
    return `
      <button class="category-btn ${cat === currentFilter ? 'active' : ''}" 
              onclick="filterByCategory('${cat}')">
        ${cat}
        ${cat !== "全部" ? `<span class="category-count">${count}</span>` : ''}
      </button>
    `;
  }).join('');
}

// 排序提示词
function sortPrompts(prompts) {
  switch(currentSort) {
    case 'hot':
      return [...prompts].sort((a, b) => b.usage - a.usage);
    case 'newest':
      return [...prompts].sort((a, b) => b.id - a.id);
    case 'recommend':
    default:
      return [...prompts].sort((a, b) => {
        if (a.isRecommend && !b.isRecommend) return -1;
        if (!a.isRecommend && b.isRecommend) return 1;
        return b.likes - a.likes;
      });
  }
}

// 渲染提示词卡片
function renderPrompts() {
  const container = document.getElementById('promptsGrid');
  
  let filtered = promptsDB;
  
  // 分类筛选
  if (currentFilter !== "全部") {
    filtered = filtered.filter(p => p.category === currentFilter);
  }
  
  // 搜索筛选
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }
  
  // 排序
  filtered = sortPrompts(filtered);
  
  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <div class="empty-text">没有找到相关提示词</div>
        <div class="empty-subtext">试试其他关键词或分类</div>
      </div>
    `;
    return;
  }
  
  container.innerHTML = filtered.map(prompt => `
    <div class="prompt-card ${prompt.isHot ? 'hot' : ''} ${prompt.isRecommend ? 'recommend' : ''}" onclick="showPromptDetail(${prompt.id})">
      <div class="card-badges">
        ${prompt.isHot ? '<span class="badge hot-badge">🔥 热门</span>' : ''}
        ${prompt.isRecommend ? '<span class="badge recommend-badge">⭐ 推荐</span>' : ''}
      </div>
      <div class="card-header">
        <span class="category-badge">${prompt.category}</span>
        <div class="card-stats">
          <span class="stat">❤️ ${prompt.likes}</span>
          <span class="stat">👁️ ${formatNumber(prompt.usage)}</span>
        </div>
      </div>
      <h3 class="card-title">${prompt.title}</h3>
      <p class="card-desc">${prompt.description}</p>
      <div class="card-tags">
        ${prompt.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <div class="card-example-preview">
        <span class="example-label">💡 查看示例</span>
      </div>
      <div class="card-footer">
        <span class="author">👤 ${prompt.author}</span>
        <button class="use-btn" onclick="event.stopPropagation(); showPromptDetail(${prompt.id})">
          使用提示词
        </button>
      </div>
    </div>
  `).join('');
}

// 格式化数字
function formatNumber(num) {
  if (num >= 10000) return (num / 10000).toFixed(1) + 'w';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
  return num.toString();
}

// 分类筛选
function filterByCategory(category) {
  currentFilter = category;
  renderCategories();
  renderPrompts();
}

// 排序切换
function setSort(sortType) {
  currentSort = sortType;
  
  // 更新按钮状态
  document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-sort="${sortType}"]`).classList.add('active');
  
  renderPrompts();
}

// 搜索
function handleSearch(query) {
  searchQuery = query;
  renderPrompts();
}

// 显示详情
function showPromptDetail(id) {
  const prompt = promptsDB.find(p => p.id === id);
  if (!prompt) return;
  
  document.getElementById('modalTitle').textContent = prompt.title;
  document.getElementById('modalCategory').textContent = prompt.category;
  document.getElementById('modalDesc').textContent = prompt.description;
  document.getElementById('modalPrompt').textContent = prompt.prompt;
  document.getElementById('modalAuthor').textContent = prompt.author;
  document.getElementById('modalLikes').textContent = prompt.likes;
  document.getElementById('modalUsage').textContent = formatNumber(prompt.usage);
  
  // 显示示例
  if (prompt.example) {
    document.getElementById('exampleSection').style.display = 'block';
    document.getElementById('modalExampleInput').textContent = prompt.example.input;
    document.getElementById('modalExampleOutput').textContent = prompt.example.output;
  } else {
    document.getElementById('exampleSection').style.display = 'none';
  }
  
  document.getElementById('detailModal').style.display = 'flex';
}

// 关闭弹窗
function closeModal() {
  document.getElementById('detailModal').style.display = 'none';
}

// 复制提示词
function copyPrompt() {
  const promptText = document.getElementById('modalPrompt').textContent;
  navigator.clipboard.writeText(promptText).then(() => {
    const btn = document.getElementById('copyBtn');
    const originalText = btn.textContent;
    btn.textContent = '✅ 已复制';
    btn.style.background = '#10b981';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
    }, 2000);
  });
}

// 切换示例标签
function switchExampleTab(tab) {
  const inputTab = document.getElementById('exampleInputTab');
  const outputTab = document.getElementById('exampleOutputTab');
  const inputContent = document.getElementById('modalExampleInput');
  const outputContent = document.getElementById('modalExampleOutput');
  
  if (tab === 'input') {
    inputTab.classList.add('active');
    outputTab.classList.remove('active');
    inputContent.style.display = 'block';
    outputContent.style.display = 'none';
  } else {
    inputTab.classList.remove('active');
    outputTab.classList.add('active');
    inputContent.style.display = 'none';
    outputContent.style.display = 'block';
  }
}

// 事件监听
function setupEventListeners() {
  // 搜索防抖
  let debounceTimer;
  document.getElementById('searchInput').addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => handleSearch(e.target.value), 300);
  });
  
  // 点击弹窗外部关闭
  document.getElementById('detailModal').addEventListener('click', (e) => {
    if (e.target.id === 'detailModal') closeModal();
  });
  
  // ESC 关闭弹窗
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
  
  // 排序按钮
  document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setSort(btn.dataset.sort);
    });
  });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);