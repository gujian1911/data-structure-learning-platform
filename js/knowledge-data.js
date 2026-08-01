// 数据结构知识库数据
const knowledgeData = [
  // ========== 第一章 绪论 ==========
  {
    id: 1, chapter: 1, chapterName: "绪论",
    question: "什么是数据结构？",
    answer: "数据结构是相互之间存在一种或多种特定关系的数据元素的集合。它研究数据的逻辑结构、存储结构以及它们之间的相互关系，并对这种结构定义相应的操作，设计出相应的算法。",
    keywords: "数据结构 定义 数据元素 关系 逻辑结构 存储结构"
  },
  {
    id: 2, chapter: 1, chapterName: "绪论",
    question: "数据、数据元素、数据项有什么区别？",
    answer: "数据是信息的载体，能被计算机识别、存储和加工处理；数据元素是数据的基本单位，可由若干数据项组成；数据项是数据的不可分割的最小单位。",
    keywords: "数据 数据元素 数据项 区别 基本单位 最小单位"
  },
  {
    id: 3, chapter: 1, chapterName: "绪论",
    question: "数据的逻辑结构有哪些类型？",
    answer: "逻辑结构有四种基本类型：集合（元素间无关系）、线性结构（一对一）、树形结构（一对多）、图形结构（多对多）。",
    keywords: "逻辑结构 集合 线性 树形 图形 一对一 一对多 多对多"
  },
  {
    id: 4, chapter: 1, chapterName: "绪论",
    question: "数据的存储结构有哪些类型？",
    answer: "存储结构主要有：顺序存储（连续空间）、链式存储（指针连接）、索引存储（建立索引表）、散列存储（哈希函数计算地址）。",
    keywords: "存储结构 顺序存储 链式存储 索引存储 散列存储 哈希"
  },
  {
    id: 5, chapter: 1, chapterName: "绪论",
    question: "逻辑结构和存储结构有什么关系？",
    answer: "逻辑结构是数据元素之间的逻辑关系，与计算机无关；存储结构是数据在计算机内存中的实际表示。同一逻辑结构可以有多种存储结构。",
    keywords: "逻辑结构 存储结构 关系 区别"
  },
  {
    id: 6, chapter: 1, chapterName: "绪论",
    question: "算法有哪些基本特性？",
    answer: "算法具有五个特性：有穷性（有限步骤内结束）、确定性（每条指令无歧义）、可行性（可执行）、输入（零个或多个）、输出（至少一个）。",
    keywords: "算法 特性 有穷性 确定性 可行性 输入 输出"
  },
  {
    id: 7, chapter: 1, chapterName: "绪论",
    question: "什么是时间复杂度？如何表示？",
    answer: "时间复杂度衡量算法执行时间随问题规模增长的变化趋势，用T(n)=O(f(n))表示，取问题规模的最高数量级。常见有O(1)、O(log n)、O(n)、O(n log n)、O(n²)、O(2ⁿ)等。",
    keywords: "时间复杂度 O(1) O(n) O(n²) 算法分析 数量级"
  },
  {
    id: 8, chapter: 1, chapterName: "绪论",
    question: "什么是空间复杂度？",
    answer: "空间复杂度衡量算法在运行过程中临时占用的存储空间大小，用S(n)=O(f(n))表示。",
    keywords: "空间复杂度 存储空间 算法"
  },
  {
    id: 9, chapter: 1, chapterName: "绪论",
    question: "常见的时间复杂度从小到大排序是怎样的？",
    answer: "O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(n³) < O(2ⁿ)。常数阶最小，指数阶增长最快。",
    keywords: "复杂度排序 O(1) O(log n) O(n) O(n²) O(2ⁿ)"
  },
  {
    id: 10, chapter: 1, chapterName: "绪论",
    question: "数据结构二元组表示法是什么？",
    answer: "数据结构可以用二元组D=(K,R)表示，其中K是数据元素的集合，R是K上元素之间关系的集合。",
    keywords: "二元组 K R 数据元素 关系"
  },

  // ========== 第二章 线性表 ==========
  {
    id: 11, chapter: 2, chapterName: "线性表",
    question: "线性表的顺序存储和链式存储有什么区别？",
    answer: "顺序存储：连续空间，随机存取O(1)，插入删除需移动元素O(n)；链式存储：指针连接，顺序存取，插入删除只需修改指针O(1)。",
    keywords: "顺序存储 链式存储 随机存取 顺序存取 插入删除"
  },
  {
    id: 12, chapter: 2, chapterName: "线性表",
    question: "顺序表中插入和删除元素需要移动多少元素？",
    answer: "在长度为n的顺序表中，插入一个元素平均移动n/2个元素，删除一个元素平均移动(n-1)/2个元素。",
    keywords: "顺序表 插入 删除 移动元素 n/2"
  },
  {
    id: 13, chapter: 2, chapterName: "线性表",
    question: "单链表插入结点的正确操作是什么？",
    answer: "在p结点后插入s结点：s->next = p->next; p->next = s; 注意顺序不能颠倒。",
    keywords: "单链表 插入 结点 p next s"
  },
  {
    id: 14, chapter: 2, chapterName: "线性表",
    question: "单链表中各结点的地址必须连续吗？",
    answer: "不一定。单链表通过指针连接逻辑关系，物理地址可以连续也可以不连续。",
    keywords: "单链表 地址 连续 指针 物理"
  },
  {
    id: 15, chapter: 2, chapterName: "线性表",
    question: "在长度为n的顺序表第i个位置插入元素，需向后移动多少个元素？",
    answer: "需向后移动n-i+1个元素（1≤i≤n+1）。",
    keywords: "顺序表 插入 第i个 n-i+1"
  },
  {
    id: 16, chapter: 2, chapterName: "线性表",
    question: "双向链表和单链表有什么区别？",
    answer: "双向链表每个结点有两个指针域，分别指向前驱和后继结点，可以双向遍历；单链表只有一个指向后继的指针，只能单向遍历。",
    keywords: "双向链表 单链表 前驱 后继 双向遍历"
  },
  {
    id: 17, chapter: 2, chapterName: "线性表",
    question: "循环链表的结束条件是什么？",
    answer: "循环链表中，尾结点的next指向头结点。遍历结束条件是p->next == L（L为头指针）。",
    keywords: "循环链表 结束条件 p->next L 头指针"
  },
  {
    id: 18, chapter: 2, chapterName: "线性表",
    question: "头结点的作用是什么？",
    answer: "头结点可以简化插入和删除操作，使第一个位置的操作与其他位置统一，同时便于处理空表和非空表的一致性。",
    keywords: "头结点 作用 插入删除 空表"
  },

  // ========== 第三章 栈和队列 ==========
  {
    id: 19, chapter: 3, chapterName: "栈和队列",
    question: "栈和队列有什么区别？",
    answer: "栈是后进先出（LIFO），只能在一端（栈顶）进行插入和删除；队列是先进先出（FIFO），在一端入队（队尾），另一端出队（队头）。",
    keywords: "栈 队列 LIFO FIFO 后进先出 先进先出 区别"
  },
  {
    id: 20, chapter: 3, chapterName: "栈和队列",
    question: "栈的基本操作有哪些？",
    answer: "栈的基本操作：Push（入栈/压栈）、Pop（出栈/弹栈）、GetTop（取栈顶元素）、IsEmpty（判空）。",
    keywords: "栈 操作 Push Pop GetTop 入栈 出栈"
  },
  {
    id: 21, chapter: 3, chapterName: "栈和队列",
    question: "什么是循环队列？为什么要用循环队列？",
    answer: "循环队列是将队列的存储区视为环形，解决普通顺序队列的'假溢出'问题（队尾已到数组末尾但前面还有空位）。",
    keywords: "循环队列 假溢出 队尾 队头 环形"
  },
  {
    id: 22, chapter: 3, chapterName: "栈和队列",
    question: "如何判断循环队列的空和满？",
    answer: "常用方法：①牺牲一个单元，队头指针在队尾指针的下一位置时队满；②增设一个计数器记录元素个数；③设标志位区分空/满。",
    keywords: "循环队列 判空 判满 队头 队尾"
  },
  {
    id: 23, chapter: 3, chapterName: "栈和队列",
    question: "栈有哪些典型应用？",
    answer: "栈的典型应用：函数调用/递归、表达式求值（中缀转后缀）、括号匹配、浏览器前进后退、 undo/redo操作等。",
    keywords: "栈 应用 递归 表达式求值 括号匹配"
  },
  {
    id: 24, chapter: 3, chapterName: "栈和队列",
    question: "队列有哪些典型应用？",
    answer: "队列的典型应用：层次遍历（树的BFS）、图的广度优先搜索、缓冲区/缓冲池、打印任务排队、CPU进程调度等。",
    keywords: "队列 应用 层次遍历 BFS 缓冲区"
  },
  {
    id: 25, chapter: 3, chapterName: "栈和队列",
    question: "双端队列是什么？",
    answer: "双端队列（Deque）是允许在两端进行插入和删除操作的线性表，结合了栈和队列的特点。",
    keywords: "双端队列 Deque 两端 插入删除"
  },

  // ========== 第四章 串 ==========
  {
    id: 26, chapter: 4, chapterName: "串、数组和广义表",
    question: "串和线性表有什么区别？",
    answer: "串是特殊的线性表，其数据元素只能是字符。串的基本操作通常以'子串'为单位，如查找、插入、删除子串等。",
    keywords: "串 线性表 字符 子串 区别"
  },
  {
    id: 27, chapter: 4, chapterName: "串、数组和广义表",
    question: "什么是串的模式匹配？",
    answer: "模式匹配是在主串中查找子串（模式串）出现的位置。常用算法有BF算法（暴力匹配）和KMP算法。",
    keywords: "模式匹配 主串 子串 BF KMP"
  },
  {
    id: 28, chapter: 4, chapterName: "串、数组和广义表",
    question: "KMP算法的核心思想是什么？时间复杂度是多少？",
    answer: "KMP算法利用已匹配的信息避免主串指针回溯，通过next数组记录模式串的最长公共前后缀。时间复杂度为O(m+n)。",
    keywords: "KMP next数组 最长公共前后缀 时间复杂度"
  },
  {
    id: 29, chapter: 4, chapterName: "串、数组和广义表",
    question: "串的存储方式有哪些？",
    answer: "串的存储方式：定长顺序存储（字符数组）、堆分配存储（动态分配）、块链存储（链表，每个结点存多个字符）。",
    keywords: "串 存储 定长 堆分配 块链"
  },

  // ========== 第五章 数组和广义表 ==========
  {
    id: 30, chapter: 4, chapterName: "串、数组和广义表",
    question: "数组的顺序存储方式有哪些？",
    answer: "二维数组的顺序存储有行优先（按行存储）和列优先（按列存储）两种方式。C语言采用行优先，Fortran采用列优先。",
    keywords: "数组 顺序存储 行优先 列优先"
  },
  {
    id: 31, chapter: 4, chapterName: "串、数组和广义表",
    question: "如何计算二维数组元素的存储地址？",
    answer: "行优先：Loc(i,j) = Loc(0,0) + (i×n + j)×L；列优先：Loc(i,j) = Loc(0,0) + (j×m + i)×L。其中m、n为行列数，L为元素大小。",
    keywords: "数组 地址计算 行优先 列优先 Loc"
  },
  {
    id: 32, chapter: 4, chapterName: "串、数组和广义表",
    question: "什么是特殊矩阵？如何压缩存储？",
    answer: "特殊矩阵指值相同的元素或零元素分布有规律，如对称矩阵、三角矩阵、对角矩阵。压缩存储只存储非零或不同值元素，减少存储空间。",
    keywords: "特殊矩阵 对称矩阵 三角矩阵 对角矩阵 压缩存储"
  },
  {
    id: 33, chapter: 4, chapterName: "串、数组和广义表",
    question: "什么是稀疏矩阵？如何存储？",
    answer: "稀疏矩阵是非零元素很少（一般少于5%）的矩阵。常用三元组表（i,j,value）或十字链表存储。",
    keywords: "稀疏矩阵 三元组 十字链表 非零元素"
  },
  {
    id: 34, chapter: 4, chapterName: "串、数组和广义表",
    question: "广义表和线性表有什么区别？",
    answer: "线性表元素是原子（不可再分），广义表元素可以是原子也可以是子表。广义表是递归定义的，长度是顶层元素个数，深度是最大嵌套层数。",
    keywords: "广义表 线性表 原子 子表 递归 长度 深度"
  },
  {
    id: 35, chapter: 4, chapterName: "串、数组和广义表",
    question: "广义表的长度和深度如何计算？",
    answer: "长度：最外层元素的个数（原子+子表各算一个）；深度：括号的最大嵌套层数，或各元素深度的最大值+1。",
    keywords: "广义表 长度 深度 嵌套"
  },

  // ========== 第六章 树 ==========
  {
    id: 36, chapter: 5, chapterName: "树",
    question: "树的度、结点的度、叶子结点是什么？",
    answer: "结点的度：该结点拥有的子树个数；树的度：树中所有结点度的最大值；叶子结点（终端结点）：度为0的结点。",
    keywords: "树 度 结点 叶子 终端 子树"
  },
  {
    id: 37, chapter: 5, chapterName: "树",
    question: "二叉树有哪些重要性质？",
    answer: "性质1：第i层最多有2^(i-1)个结点；性质2：深度为k的二叉树最多有2^k-1个结点；性质3：n0=n2+1（叶子结点数=度为2的结点数+1）。",
    keywords: "二叉树 性质 第i层 深度 叶子 度为2"
  },
  {
    id: 38, chapter: 5, chapterName: "树",
    question: "满二叉树和完全二叉树有什么区别？",
    answer: "满二叉树：每层结点数都达到最大值；完全二叉树：除最后一层外都是满的，最后一层结点集中在左侧。满二叉树一定是完全二叉树。",
    keywords: "满二叉树 完全二叉树 区别 最后一层"
  },
  {
    id: 39, chapter: 5, chapterName: "树",
    question: "完全二叉树有多少叶子结点？",
    answer: "n个结点的完全二叉树，叶子结点数为⌈n/2⌉（n为奇数）或n/2（n为偶数），即⌊(n+1)/2⌋。",
    keywords: "完全二叉树 叶子结点 n/2"
  },
  {
    id: 40, chapter: 5, chapterName: "树",
    question: "二叉树的遍历方式有哪些？",
    answer: "先序遍历（根-左-右）、中序遍历（左-根-右）、后序遍历（左-右-根）、层次遍历（用队列，从上到下、从左到右）。",
    keywords: "二叉树 遍历 先序 中序 后序 层次"
  },
  {
    id: 41, chapter: 5, chapterName: "树",
    question: "已知遍历序列能否唯一确定二叉树？",
    answer: "先序+中序可以唯一确定；后序+中序可以唯一确定；先序+后序不能唯一确定（单分支树除外）。必须有中序遍历。",
    keywords: "遍历序列 确定二叉树 先序 中序 后序 唯一"
  },
  {
    id: 42, chapter: 5, chapterName: "树",
    question: "线索二叉树是什么？有什么作用？",
    answer: "线索二叉树利用n+1个空指针域，存放结点在某种遍历序列中的前驱和后继指针。作用是加快查找前驱/后继的速度，无需递归/栈。",
    keywords: "线索二叉树 空指针 前驱 后继 遍历"
  },
  {
    id: 43, chapter: 5, chapterName: "树",
    question: "二叉排序树（BST）的定义是什么？",
    answer: "二叉排序树：左子树所有结点值<根结点值<右子树所有结点值；左右子树也是二叉排序树。中序遍历得到递增有序序列。",
    keywords: "二叉排序树 BST 左子树 右子树 中序 有序"
  },
  {
    id: 44, chapter: 5, chapterName: "树",
    question: "哈夫曼树是什么？如何构造？",
    answer: "哈夫曼树是带权路径长度（WPL）最小的二叉树。构造方法：每次选两个权值最小的结点合并，新结点权值为两者之和，重复直到只剩一棵树。",
    keywords: "哈夫曼树 WPL 带权路径长度 构造 最小"
  },
  {
    id: 45, chapter: 5, chapterName: "树",
    question: "哈夫曼编码有什么特点？",
    answer: "哈夫曼编码是前缀编码（任何编码不是其他编码的前缀），能保证译码唯一性。高频字符用短编码，低频用长编码，实现数据压缩。",
    keywords: "哈夫曼编码 前缀编码 译码 压缩"
  },
  {
    id: 46, chapter: 5, chapterName: "树",
    question: "平衡二叉树（AVL）的定义是什么？",
    answer: "平衡二叉树是任意结点的左右子树高度差（平衡因子）的绝对值不超过1的二叉排序树。查找效率为O(log n)。",
    keywords: "平衡二叉树 AVL 高度差 平衡因子 查找"
  },

  // ========== 第七章 图 ==========
  {
    id: 47, chapter: 6, chapterName: "图",
    question: "图的存储结构有哪些？",
    answer: "邻接矩阵：用二维数组表示，适合稠密图；邻接表：每个顶点维护一个边链表，适合稀疏图；十字链表（有向图）、邻接多重表（无向图）。",
    keywords: "图 存储 邻接矩阵 邻接表 十字链表 稠密 稀疏"
  },
  {
    id: 48, chapter: 6, chapterName: "图",
    question: "无向图和有向图的边数与顶点数有什么关系？",
    answer: "无向图：边数e ≤ n(n-1)/2；有向图：边数e ≤ n(n-1)。完全无向图有n(n-1)/2条边，完全有向图有n(n-1)条边。",
    keywords: "无向图 有向图 边数 顶点数 完全图"
  },
  {
    id: 49, chapter: 6, chapterName: "图",
    question: "什么是图的度？无向图和有向图有什么区别？",
    answer: "无向图：顶点的度=关联边的数量；有向图：入度=指向该顶点的边数，出度=从该顶点出发的边数，度=入度+出度。无向图所有顶点度数之和=2e。",
    keywords: "度 入度 出度 无向图 有向图 边数"
  },
  {
    id: 50, chapter: 6, chapterName: "图",
    question: "DFS和BFS有什么区别？",
    answer: "DFS（深度优先搜索）：用栈/递归，沿着一条路径走到尽头再回溯，适合寻找路径、连通分量；BFS（广度优先搜索）：用队列，逐层扩展，适合最短路径（无权图）。",
    keywords: "DFS BFS 深度优先 广度优先 栈 队列 最短路径"
  },
  {
    id: 51, chapter: 6, chapterName: "图",
    question: "Prim和Kruskal算法有什么区别？",
    answer: "两者都求最小生成树。Prim：从某顶点开始，逐步加入距离已选集合最近的顶点，适合稠密图，时间O(n²)；Kruskal：按边权排序，依次加入不形成环的边，适合稀疏图，时间O(e log e)。",
    keywords: "Prim Kruskal 最小生成树 稠密图 稀疏图"
  },
  {
    id: 52, chapter: 6, chapterName: "图",
    question: "Dijkstra算法和Floyd算法有什么区别？",
    answer: "Dijkstra：求单源最短路径，要求边权非负，时间O(n²)；Floyd：求所有顶点对的最短路径，允许负权（无负权回路），时间O(n³)。",
    keywords: "Dijkstra Floyd 最短路径 单源 所有顶点对"
  },
  {
    id: 53, chapter: 6, chapterName: "图",
    question: "什么是拓扑排序？",
    answer: "拓扑排序是将AOV网（用顶点表示活动，边表示优先关系）的所有顶点排成一个线性序列，使得对任意边<u,v>，u在序列中总位于v之前。",
    keywords: "拓扑排序 AOV网 优先关系 线性序列"
  },
  {
    id: 54, chapter: 6, chapterName: "图",
    question: "如何判断图中是否有环？",
    answer: "有向图：拓扑排序（不能输出所有顶点则有环）、DFS（遇到回边则有环）；无向图：DFS（遇到指向已访问且非父结点的边则有环）、并查集。",
    keywords: "环 拓扑排序 DFS 回边 并查集"
  },
  {
    id: 55, chapter: 6, chapterName: "图",
    question: "什么是关键路径？",
    answer: "关键路径是AOE网中从源点到汇点的最长路径，决定了整个工程的最短完成时间。关键路径上的活动称为关键活动，关键活动的延期将导致整个工程延期。",
    keywords: "关键路径 AOE网 最长路径 关键活动 工程"
  },

  // ========== 第八章 查找 ==========
  {
    id: 56, chapter: 7, chapterName: "查找",
    question: "顺序查找和折半查找的平均查找长度是多少？",
    answer: "顺序查找：ASL=(n+1)/2；折半查找：ASL≈log₂(n+1)-1。折半查找要求数据有序。",
    keywords: "顺序查找 折半查找 ASL 平均查找长度"
  },
  {
    id: 57, chapter: 7, chapterName: "查找",
    question: "折半查找对存储结构有什么要求？",
    answer: "折半查找要求数据必须按关键字有序排列，且必须采用顺序存储结构（随机访问），不能是链式存储。",
    keywords: "折半查找 有序 顺序存储 随机访问"
  },
  {
    id: 58, chapter: 7, chapterName: "查找",
    question: "二叉排序树的查找效率如何？",
    answer: "最好O(log n)（平衡时），最坏O(n)（退化为单支树）。因此引入平衡二叉树（AVL）来保证O(log n)的查找效率。",
    keywords: "二叉排序树 查找效率 O(log n) O(n) 退化为单支树"
  },
  {
    id: 59, chapter: 7, chapterName: "查找",
    question: "哈希查找的基本思想是什么？",
    answer: "哈希查找通过哈希函数H(key)直接计算元素的存储地址，理想情况下时间复杂度为O(1)。需要处理冲突（不同关键字映射到同一地址）。",
    keywords: "哈希查找 哈希函数 H(key) 冲突 地址"
  },
  {
    id: 60, chapter: 7, chapterName: "查找",
    question: "处理哈希冲突的方法有哪些？",
    answer: "开放定址法：线性探测、二次探测、双散列；链地址法（拉链法）：冲突元素链接成链表；再哈希法；建立公共溢出区。",
    keywords: "哈希冲突 开放定址 线性探测 二次探测 链地址法 拉链法"
  },
  {
    id: 61, chapter: 7, chapterName: "查找",
    question: "哈希表的装填因子是什么？",
    answer: "装填因子α=表中记录数n/哈希表长度m。α越大，冲突概率越高。开放定址法要求α<1，链地址法可以α>1。",
    keywords: "装填因子 α 冲突 开放定址 链地址"
  },
  {
    id: 62, chapter: 7, chapterName: "查找",
    question: "B树和B+树有什么区别？",
    answer: "B树：关键字分布在所有结点，搜索可能在非叶子结点结束；B+树：关键字都在叶子结点，非叶子结点只作索引，叶子结点用指针链接，适合范围查询和文件系统。",
    keywords: "B树 B+树 关键字 叶子结点 索引 范围查询"
  },

  // ========== 第九章 排序 ==========
  {
    id: 63, chapter: 8, chapterName: "排序",
    question: "排序算法的稳定性是什么意思？",
    answer: "稳定性指排序后，相等元素的相对顺序是否保持不变。稳定排序：相等元素原来的先后顺序不变；不稳定排序：可能改变。",
    keywords: "排序 稳定性 相等元素 相对顺序 稳定排序"
  },
  {
    id: 64, chapter: 8, chapterName: "排序",
    question: "直接插入排序的原理和时间复杂度？",
    answer: "将待排序元素逐个插入到已排序序列的合适位置。最好O(n)（已有序），平均和最坏O(n²)。是稳定排序。",
    keywords: "直接插入排序 O(n²) 稳定 插入 已排序序列"
  },
  {
    id: 65, chapter: 8, chapterName: "排序",
    question: "折半插入排序和直接插入排序的区别？",
    answer: "折半插入排序用折半查找确定插入位置，减少了比较次数（O(n log n)），但移动次数不变（O(n²)），总时间复杂度仍为O(n²)。",
    keywords: "折半插入排序 直接插入排序 比较次数 移动次数"
  },
  {
    id: 66, chapter: 8, chapterName: "排序",
    question: "希尔排序的原理是什么？",
    answer: "希尔排序是分组插入排序，先按增量分组进行直接插入排序，逐步缩小增量直至为1。时间复杂度约O(n^1.3)，是不稳定排序。",
    keywords: "希尔排序 增量 分组 插入排序 不稳定"
  },
  {
    id: 67, chapter: 8, chapterName: "排序",
    question: "冒泡排序的原理和时间复杂度？",
    answer: "相邻元素两两比较，逆序则交换，每趟将最大元素'冒泡'到末尾。最好O(n)（已有序），平均和最坏O(n²)。是稳定排序。",
    keywords: "冒泡排序 相邻 交换 O(n²) 稳定 冒泡"
  },
  {
    id: 68, chapter: 8, chapterName: "排序",
    question: "快速排序的原理和时间复杂度？",
    answer: "选基准元素，将序列划分为小于基准和大于基准的两部分，递归排序。平均O(n log n)，最坏O(n²)（已有序时）。是不稳定排序。",
    keywords: "快速排序 基准 划分 递归 O(n log n) O(n²) 不稳定"
  },
  {
    id: 69, chapter: 8, chapterName: "排序",
    question: "简单选择排序的原理和时间复杂度？",
    answer: "每趟从剩余元素中选最小元素，放到已排序序列末尾。比较次数固定为n(n-1)/2，最好/平均/最坏都是O(n²)。是不稳定排序。",
    keywords: "简单选择排序 选最小 O(n²) 不稳定 比较次数"
  },
  {
    id: 70, chapter: 8, chapterName: "排序",
    question: "堆排序的原理和时间复杂度？",
    answer: "利用堆的性质（大根堆/小根堆），每次将堆顶元素与末尾交换，然后调整堆。时间复杂度O(n log n)，空间O(1)。是不稳定排序。",
    keywords: "堆排序 大根堆 小根堆 调整 O(n log n) 不稳定"
  },
  {
    id: 71, chapter: 8, chapterName: "排序",
    question: "如何建堆？",
    answer: "从最后一个非叶子结点（第⌊n/2⌋个结点）开始，向前依次对每个结点进行'筛选'（下沉）操作，使其子树成为堆。",
    keywords: "建堆 非叶子结点 筛选 下沉 n/2"
  },
  {
    id: 72, chapter: 8, chapterName: "排序",
    question: "归并排序的原理和时间复杂度？",
    answer: "将序列不断二分至单个元素，然后两两合并成有序序列。时间复杂度稳定为O(n log n)，空间复杂度O(n)。是稳定排序。",
    keywords: "归并排序 二分 合并 O(n log n) O(n) 稳定"
  },
  {
    id: 73, chapter: 8, chapterName: "排序",
    question: "基数排序的原理是什么？",
    answer: "按关键字的各位（个位、十位、百位...）依次进行分配和收集。时间复杂度O(d×(n+r))，d为位数，r为基数。是稳定排序。",
    keywords: "基数排序 各位 分配 收集 稳定 O(d(n+r))"
  },
  {
    id: 74, chapter: 8, chapterName: "排序",
    question: "各种排序算法的稳定性总结",
    answer: "稳定排序：直接插入、冒泡、归并、基数；不稳定排序：希尔、快速、简单选择、堆排序。",
    keywords: "排序 稳定性 稳定 不稳定 总结"
  },
  {
    id: 75, chapter: 8, chapterName: "排序",
    question: "各种排序算法的时间复杂度对比",
    answer: "O(n²)：直接插入、冒泡、简单选择；O(n log n)：快速（平均）、堆、归并；O(n^1.3)：希尔；O(d(n+r))：基数。",
    keywords: "排序 时间复杂度 对比 O(n²) O(n log n)"
  },

  // ========== 额外高频考点 ==========
  {
    id: 76, chapter: 1, chapterName: "绪论",
    question: "算法的时间复杂度与什么有关？",
    answer: "算法的时间复杂度与问题的规模n有关，是问题规模的函数。它衡量的是算法执行时间随问题规模增长的变化趋势，与实际执行时间、机器速度无关。",
    keywords: "时间复杂度 问题规模 n 变化趋势"
  },
  {
    id: 77, chapter: 2, chapterName: "线性表",
    question: "单链表、双链表、循环链表各自的特点是什么？",
    answer: "单链表：只有一个next指针，只能单向遍历，找后继O(1)，找前驱O(n)；双链表：有prior和next指针，可双向遍历；循环链表：尾结点指向头结点，可从任一结点遍历全表。",
    keywords: "单链表 双链表 循环链表 特点 遍历"
  },
  {
    id: 78, chapter: 3, chapterName: "栈和队列",
    question: "如何用两个栈实现一个队列？",
    answer: "设栈A和栈B。入队：元素压入栈A；出队：若栈B非空则弹出，否则将栈A所有元素倒入栈B再弹出。均摊时间复杂度O(1)。",
    keywords: "两个栈 实现队列 入队 出队"
  },
  {
    id: 79, chapter: 5, chapterName: "树",
    question: "二叉树的顺序存储适合什么情况？",
    answer: "二叉树的顺序存储（数组）适合完全二叉树和满二叉树，可以充分利用空间。对于普通二叉树会浪费大量空间。",
    keywords: "二叉树 顺序存储 完全二叉树 满二叉树 浪费空间"
  },
  {
    id: 80, chapter: 5, chapterName: "树",
    question: "二叉树的高度和深度有什么区别？",
    answer: "深度：从根结点到该结点的路径长度（根深度为0或1）；高度：从该结点到叶子结点的最长路径（叶子高度为0或1）。树的高度=根的高度=最大深度。",
    keywords: "二叉树 高度 深度 区别 根 叶子"
  },
  {
    id: 81, chapter: 6, chapterName: "图",
    question: "连通图和强连通图有什么区别？",
    answer: "连通图：无向图中任意两顶点间都有路径；强连通图：有向图中任意两顶点间都有双向路径。弱连通图：有向图忽略方向后连通。",
    keywords: "连通图 强连通图 无向图 有向图 路径"
  },
  {
    id: 82, chapter: 6, chapterName: "图",
    question: "生成树和最小生成树是什么？",
    answer: "生成树：包含图中所有顶点的极小连通子图（n个顶点n-1条边）；最小生成树：权值之和最小的生成树。",
    keywords: "生成树 最小生成树 连通子图 n-1条边 权值"
  },
  {
    id: 83, chapter: 7, chapterName: "查找",
    question: "二分查找的判定树有什么特点？",
    answer: "二分查找的判定树是一棵平衡二叉树，查找成功时比较次数不超过树高⌈log₂(n+1)⌉，查找不成功时比较次数等于树高或树高+1。",
    keywords: "二分查找 判定树 平衡二叉树 树高 log₂"
  },
  {
    id: 84, chapter: 8, chapterName: "排序",
    question: "内排序和外排序有什么区别？",
    answer: "内排序：所有数据在内存中进行排序；外排序：数据量大无法全部装入内存，需要借助外部存储，通常采用归并排序思想。",
    keywords: "内排序 外排序 内存 外部存储 归并"
  },
  {
    id: 85, chapter: 8, chapterName: "排序",
    question: "快速排序最坏情况如何避免？",
    answer: "最坏情况是每次划分极不平衡（如有序序列）。改进方法：①随机选基准；②三者取中（首中尾三个元素取中值）；③小区间用直接插入排序。",
    keywords: "快速排序 最坏情况 随机 三者取中 改进"
  },
  {
    id: 86, chapter: 2, chapterName: "线性表",
    question: "静态链表是什么？",
    answer: "静态链表用数组模拟链表，数组元素包含data和next（数组下标）两个域。next存放后继元素在数组中的下标，利用数组下标代替指针。",
    keywords: "静态链表 数组 下标 next 模拟链表"
  },
  {
    id: 87, chapter: 4, chapterName: "串、数组和广义表",
    question: "矩阵的压缩存储如何计算元素位置？",
    answer: "对称矩阵：只存下三角，k=i(i+1)/2+j（i≥j）；三角矩阵：类似对称矩阵加常数项；对角矩阵：按条带存储，计算偏移量。",
    keywords: "矩阵 压缩存储 对称矩阵 下三角 位置计算"
  },
  {
    id: 88, chapter: 5, chapterName: "树",
    question: "树和二叉树如何相互转换？",
    answer: "树转二叉树：①兄弟间加连线；②保留最左孩子连线，删除其他孩子连线；③以根为轴顺时针旋转。二叉树转树：逆过程。森林也可类似转二叉树。",
    keywords: "树 二叉树 转换 兄弟 最左孩子 森林"
  },
  {
    id: 89, chapter: 5, chapterName: "树",
    question: "哈夫曼树是唯一的吗？",
    answer: "哈夫曼树不唯一。当存在多个相同权值的结点时，选择顺序不同可能得到不同形态的哈夫曼树，但WPL一定相同。",
    keywords: "哈夫曼树 唯一 WPL 相同权值"
  },
  {
    id: 90, chapter: 6, chapterName: "图",
    question: "有向无环图（DAG）有什么应用？",
    answer: "DAG的应用：表达式共享（节省空间）、拓扑排序、最短路径（无环时可用线性时间）、工程计划（AOE网）等。",
    keywords: "DAG 有向无环图 拓扑排序 表达式 工程计划"
  },
  {
    id: 91, chapter: 7, chapterName: "查找",
    question: "ASL是什么意思？如何计算？",
    answer: "ASL（Average Search Length）是平均查找长度，=Σ(Pi×Ci)，Pi为查找第i个元素的概率，Ci为找到该元素需要的比较次数。等概率时ASL=总比较次数/n。",
    keywords: "ASL 平均查找长度 比较次数 概率 计算"
  },
  {
    id: 92, chapter: 7, chapterName: "查找",
    question: "哈希函数的设计原则是什么？",
    answer: "哈希函数设计原则：①计算简单；②地址分布均匀（减少冲突）；③与关键字分布无关。常用方法：直接定址法、除留余数法、平方取中法、折叠法。",
    keywords: "哈希函数 设计 均匀 冲突 除留余数"
  },
  {
    id: 93, chapter: 8, chapterName: "排序",
    question: "排序趟数和什么有关？",
    answer: "排序趟数：冒泡排序最多n-1趟（有标志位可提前结束）；直接插入排序n-1趟；简单选择排序n-1趟；快速排序取决于划分平衡性。",
    keywords: "排序趟数 冒泡 插入 选择 快速"
  },
  {
    id: 94, chapter: 3, chapterName: "栈和队列",
    question: "中缀表达式如何转为后缀表达式？",
    answer: "用栈实现：①操作数直接输出；②'('入栈；③运算符与栈顶比较优先级，高则入栈，低或等于则弹出栈顶运算符输出；④')'则弹出到'('为止。",
    keywords: "中缀 后缀 表达式 栈 优先级"
  },
  {
    id: 95, chapter: 6, chapterName: "图",
    question: "AOV网和AOE网有什么区别？",
    answer: "AOV网（Activity On Vertex）：顶点表示活动，边表示优先关系，用于拓扑排序；AOE网（Activity On Edge）：边表示活动，顶点表示事件，用于关键路径。",
    keywords: "AOV网 AOE网 活动 顶点 边 拓扑排序 关键路径"
  },
  {
    id: 96, chapter: 5, chapterName: "树",
    question: "m叉树的结点数量关系是什么？",
    answer: "m叉树中：n0 = 1 + n2 + 2n3 + ... + (m-1)nm，即叶子结点数=1+Σ(i-1)×ni（i从2到m）。二叉树是m=2的特例：n0=n2+1。",
    keywords: "m叉树 叶子 度为i 结点数量 n0"
  },
  {
    id: 97, chapter: 1, chapterName: "绪论",
    question: "数据结构的三个方面是什么？",
    answer: "数据结构的三个方面：逻辑结构（数据元素间逻辑关系）、存储结构（数据在计算机中的表示）、运算（对数据进行的操作，如增删改查）。",
    keywords: "数据结构 三个方面 逻辑结构 存储结构 运算"
  },
  {
    id: 98, chapter: 2, chapterName: "线性表",
    question: "顺序表的优缺点是什么？",
    answer: "优点：随机访问O(1)，存储密度高，实现简单；缺点：插入删除O(n)，需预先分配空间（可能浪费或不足），不便扩容。",
    keywords: "顺序表 优点 缺点 随机访问 插入删除 扩容"
  },
  {
    id: 99, chapter: 2, chapterName: "线性表",
    question: "链表的优缺点是什么？",
    answer: "优点：插入删除O(1)（已知位置），动态分配空间，扩容方便；缺点：不能随机访问O(n)，需要额外空间存指针，存储密度低。",
    keywords: "链表 优点 缺点 插入删除 随机访问 指针"
  },
  {
    id: 100, chapter: 8, chapterName: "排序",
    question: "如何根据场景选择合适的排序算法？",
    answer: "n较小：直接插入或简单选择；基本有序：冒泡或直接插入；要求稳定：归并、基数；内存限制：堆排序O(1)空间；平均最快：快速排序；链表：归并排序。",
    keywords: "排序算法 选择 场景 稳定 内存 链表"
  },

  // ========== 从模拟试题补充的知识点 ==========
  {
    id: 101, chapter: 3, chapterName: "栈和队列",
    question: "循环队列中如何计算元素个数？",
    answer: "循环队列元素个数 = (rear - front + MAXSIZE) % MAXSIZE。其中rear为队尾指针，front为队头指针，MAXSIZE为队列最大容量。",
    keywords: "循环队列 元素个数 rear front MAXSIZE 计算"
  },
  {
    id: 102, chapter: 5, chapterName: "树",
    question: "n个结点的二叉树有多少个空子树（空指针域）？",
    answer: "n个结点的二叉树有n+1个空子树（空指针域）。因为每个结点有2个指针域，共2n个指针域；除根结点外每个结点被一条边指向，共n-1个非空指针域；所以空指针域=2n-(n-1)=n+1。",
    keywords: "二叉树 空子树 空指针域 n+1 指针域"
  },
  {
    id: 103, chapter: 5, chapterName: "树",
    question: "n个结点的二叉树最大深度是多少？",
    answer: "n个结点的二叉树最大深度为n（退化为单支树时，每个结点只有一个孩子）。最小深度为⌈log₂(n+1)⌉（完全二叉树时）。",
    keywords: "二叉树 最大深度 n 单支树 最小深度"
  },
  {
    id: 104, chapter: 5, chapterName: "树",
    question: "深度为h的完全二叉树最少有多少个结点？",
    answer: "深度为h的完全二叉树最少有2^(h-1)个结点（最后一层只有1个结点），最多有2^h-1个结点（满二叉树）。",
    keywords: "完全二叉树 最少结点数 2^(h-1) 深度 满二叉树"
  },
  {
    id: 105, chapter: 8, chapterName: "排序",
    question: "快速排序每一趟能确定几个元素的最终位置？",
    answer: "快速排序每一趟至少能确定基准元素的最终位置（枢轴归位）。如果划分比较平衡，可能使更多元素接近最终位置。",
    keywords: "快速排序 每一趟 基准元素 最终位置 枢轴"
  },
  {
    id: 106, chapter: 8, chapterName: "排序",
    question: "冒泡排序最多需要进行多少趟？",
    answer: "冒泡排序最多需要进行n-1趟。若某一趟没有发生交换，说明已有序，可提前结束（设置标志位优化）。",
    keywords: "冒泡排序 趟数 n-1 提前结束 标志位"
  },
  {
    id: 107, chapter: 4, chapterName: "串、数组和广义表",
    question: "二维数组按行优先存储时如何计算元素地址？",
    answer: "设A[m][n]，每个元素占L个单元，A[0][0]地址为Loc(0,0)。A[i][j]地址=Loc(0,0)+(i×n+j)×L。例如A[5][6]，每个元素占2单元，A[0][0]=1100，则A[2][3]=1100+(2×6+3)×2=1130。",
    keywords: "二维数组 行优先 地址计算 i×n+j 示例"
  },
  {
    id: 108, chapter: 7, chapterName: "查找",
    question: "用线性探测法构造哈希表的过程是什么？",
    answer: "线性探测法：H(key)=key MOD m。若冲突（地址已被占），则依次探测H(key)+1, H(key)+2,...（模m），直到找到空位。查找时同样按此顺序探测。",
    keywords: "线性探测法 哈希表 冲突 H(key) 探测"
  },
  {
    id: 109, chapter: 5, chapterName: "树",
    question: "树转换为二叉树的步骤是什么？",
    answer: "①加线：兄弟结点之间加一条连线；②去线：对每个结点，只保留与第一个孩子的连线，删除与其他孩子的连线；③旋转：以根为轴，顺时针旋转约45度。",
    keywords: "树转二叉树 加线 去线 旋转 兄弟 第一个孩子"
  },
  {
    id: 110, chapter: 5, chapterName: "树",
    question: "二叉树的顺序存储适合存储什么类型的二叉树？",
    answer: "二叉树的顺序存储（数组）适合存储完全二叉树和满二叉树，可以充分利用空间。对于普通二叉树会浪费大量空间（需按满二叉树分配位置）。",
    keywords: "二叉树 顺序存储 完全二叉树 满二叉树 浪费空间"
  },
  {
    id: 111, chapter: 8, chapterName: "排序",
    question: "堆排序建立初始堆的过程是怎样的？",
    answer: "从最后一个非叶子结点（第⌊n/2⌋个结点）开始，向前依次对每个结点进行'筛选'（下沉）：将该结点与左右孩子比较，若孩子更大（大顶堆）则交换，继续向下调整，直到该结点大于两个孩子或到达叶子。",
    keywords: "堆排序 建堆 筛选 下沉 非叶子结点 n/2"
  },
  {
    id: 112, chapter: 4, chapterName: "串、数组和广义表",
    question: "稀疏矩阵的三元组表示法是什么？",
    answer: "三元组表示法用(i, j, value)三个字段记录每个非零元素的行号、列号和值。通常加上总行数、总列数、非零元素个数作为表头。适合非零元素很少（<5%）的矩阵。",
    keywords: "稀疏矩阵 三元组 i j value 行号 列号"
  },
  {
    id: 113, chapter: 7, chapterName: "查找",
    question: "折半查找的完整算法如何实现？",
    answer: "int BinSearch(SSTable ST, KeyType key){ low=1; high=ST.length; while(low<=high){ mid=(low+high)/2; if(key==ST.elem[mid].key) return mid; else if(key<ST.elem[mid].key) high=mid-1; else low=mid+1; } return 0; }",
    keywords: "折半查找 算法 代码 low high mid"
  },
  {
    id: 114, chapter: 8, chapterName: "排序",
    question: "直接插入排序的完整算法如何实现？",
    answer: "void InsertSort(SqList &L){ for(i=2;i<=L.length;i++) if(L.r[i].key < L.r[i-1].key){ L.r[0]=L.r[i]; //哨兵 L.r[i]=L.r[i-1]; for(j=i-2; L.r[0].key < L.r[j].key; j--) L.r[j+1]=L.r[j]; L.r[j+1]=L.r[0]; } }",
    keywords: "直接插入排序 算法 代码 哨兵 r[0]"
  },
  {
    id: 115, chapter: 5, chapterName: "树",
    question: "如何计算二叉树的深度（高度）？",
    answer: "递归方法：若树为空则深度为0；否则深度=1+max(左子树深度, 右子树深度)。int Depth(BiTree T){ if(!T) return 0; return 1+max(Depth(T->lchild), Depth(T->rchild)); }",
    keywords: "二叉树 深度 高度 递归 算法 代码"
  },
  {
    id: 116, chapter: 2, chapterName: "线性表",
    question: "如何删除顺序表中值在a到b之间的所有元素？",
    answer: "遍历顺序表，统计[a,b]区间内元素个数k，同时将区间后的元素前移k个位置。最后修改表长L.length-=k。时间复杂度O(n)。",
    keywords: "顺序表 删除 区间 a b 前移 统计"
  },
  {
    id: 117, chapter: 8, chapterName: "排序",
    question: "堆排序建初始堆的具体示例是怎样的？",
    answer: "以{46,79,56,38,40,84}建小顶堆为例：从第3个元素56开始调整，然后38、79、46。最终小顶堆为{38,40,56,79,46,84}，根38为最小值。每次将堆顶与末尾交换，再调整剩余元素。",
    keywords: "堆排序 建堆 小顶堆 示例 调整"
  },
  {
    id: 118, chapter: 7, chapterName: "查找",
    question: "平衡二叉排序树的ASL如何计算？",
    answer: "等概率情况下，查找成功的ASL=Σ(每层结点数×层号)/总结点数。例如某平衡二叉排序树高度为3，第1层1个，第2层2个，第3层4个，则ASL=(1×1+2×2+4×3)/7=17/7≈2.43。",
    keywords: "平衡二叉排序树 ASL 计算 层号 等概率"
  },
  {
    id: 119, chapter: 4, chapterName: "串、数组和广义表",
    question: "广义表的表头和表尾如何计算？",
    answer: "表头Head(LS)：取广义表第一个元素（可以是原子或子表）；表尾Tail(LS)：取除第一个元素外剩余元素组成的子表（一定是表）。例如LS=((x,y),(z))，Head=(x,y)，Tail=((z))。",
    keywords: "广义表 表头 表尾 Head Tail 第一个元素"
  },
  {
    id: 120, chapter: 5, chapterName: "树",
    question: "m叉树的结点数量关系是什么？",
    answer: "m叉树中：n₀ = 1 + Σ(i-1)×ni（i从2到m）。即叶子结点数=1+(m-1)个度为m的结点数+(m-2)个度为m-1的结点数+...+1个度为2的结点数。",
    keywords: "m叉树 叶子 度为i 结点数量 n0 公式"
  }
];
