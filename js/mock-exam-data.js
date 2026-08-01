// 模拟试题数据
const mockExamData = {
  "final1": {
    "title": "数据结构期末试题一",
    "questions": [
      {
        "type": "true_false",
        "question": "每种数据结构都应具备三种基本运算：插入、删除和搜索。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "用一组地址连续的存储单元存放的元素一定构成线性表。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "若让元素1,2,3依次进栈",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "在对双向循环链表做删除一个结点操作时，应先将被删除结点的前驱结点和后继结点链接好再执行删除结点操作。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "递归的算法简单、易懂、容易编写，而且执行效率也高。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "如果两个串中含有相同的字符，则这两个串相等（  ）。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "设与一棵树T所对应的二叉树为BT，则与T中的叶子结点所对应的BT中的结点也一定是叶子结点。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "存储无向图的邻接矩阵是对称的，因此可以只存储邻接矩阵的下",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "对于同一组记录，生成二叉搜索树的形态与插入记录的次序无关。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "在平均情况下，快速排序法最快，堆积排序法最节省空间。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "在非空线性表中除第一个元素外，集合中每个数据元素只有一个_________；除最后一个元素之外，集合中每个数据元素均只有一个__________。",
        "answer": "前驱; 后继",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "已知循环队列的存储空间为数组a[21]，且头指针（指向队头元素）和尾指针（队尾元素的下一位置）分别为8和3，则该队列的当前长度为________。",
        "answer": "16",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "堆排序是____________排序算法算法。",
        "answer": "不稳定的排序",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "________链表从任何一个结点出发，都能访问到所有结点。",
        "answer": "循环",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "假定一棵二叉树的结点个数为32，则它的最小深度为______。",
        "answer": "6",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "假定一棵树的广义表表示为A(B(C, D(E, F,G), H(I, J)))，则结点H的双亲结点为______。",
        "answer": "B",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "对于一个具有n个顶点的图，若采用邻接矩阵表示，则矩阵大小为______。",
        "answer": "n2",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "若要对某二叉排序树进行遍历，保证输出元素的值序列按增序排列，应对该二叉排序树采用____________遍历法。",
        "answer": "中序",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "元素关键字转换为该元素存储位置的函数f称为____________。",
        "answer": "哈希函数",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "计算机识别、存储和加工处理的对象被统称为________。",
        "options": [
          "A. 数据",
          "B. 数据元素",
          "C. 数据结构",
          "D. 数据类型"
        ],
        "answer": "A",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "下面程序段的时间复杂度为________。\nfor(int i=0; i<m; i++)\nfor(int j=0; j<n; j++)\nA[i][j]=i*j;",
        "options": [
          "A. O(m2)",
          "B. O(n2)",
          "C. O(m*n)",
          "D. O(m+n)"
        ],
        "answer": "C",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "一个非空广义表的表头________。",
        "options": [
          "A. 不可能是子表",
          "B. 只能是子表",
          "C. 只能是原子",
          "D. 可以是子表或原子"
        ],
        "answer": "D",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "如下陈述中正确的是________。",
        "options": [
          "A. 串是一种特殊的线性表",
          "B. 串的长度必须大于零",
          "C. 串中元素只能是字母",
          "D. 空串就是空白串"
        ],
        "answer": "A",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "线性表若采用链式存储结构时，要求内存中可用存储单元的地址________。",
        "options": [
          "A. 必须是连续的",
          "B. 部分地址必须是连续的",
          "C. 一定是不连续的",
          "D. 连续，不连续都可以"
        ],
        "answer": "D",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "将一棵有100个结点的完全二叉树从上到下，从左到右依次对结点进行编号，根结点的编号为1，则编号为49的结点的左孩子的编号为______。",
        "options": [
          "A.98",
          "B.99",
          "C.50",
          "D.48"
        ],
        "answer": "A",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "从二叉搜索树中查找一个元素时，其时间复杂度大致为________。",
        "options": [
          "A、 O(n)",
          "B、 O(1)",
          "C、 O(log2n)",
          "D、 O(n2)"
        ],
        "answer": "C",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "堆的形状是一棵_______。",
        "options": [
          "A.二叉排序树",
          "B.满二叉树",
          "C.完全二叉树",
          "D.平衡二叉树"
        ],
        "answer": "C",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "若一组记录的排序码为（46, 79, 56, 38, 40, 84），则利用快速排序的方法，以第一个记录为基准得到的一次划分结果为_______。",
        "options": [
          "A.   38,  40,  46,  56,  79,  84",
          "B.  40, 38,  46 ,  79,  56,  84",
          "C.   40,  38，46,  56,  79,  84",
          "D.  40,  38, 46,  84,  56,  79"
        ],
        "answer": "C",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "算法分析的目的是_________。",
        "options": [
          "A、找出数据结构的合理性",
          "C、分析算法的效率以求改进",
          "B、研究算法中的输入和输出的关系",
          "D、分析算法的易懂性和文档性"
        ],
        "answer": "C",
        "analysis": ""
      }
    ]
  },
  "final2": {
    "title": "数据结构期末试题二",
    "questions": [
      {
        "type": "true_false",
        "question": "程序是用计算机语言表述的算法。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "确定串Ｔ在串Ｓ中首次出现的位置的操作称为串的模式匹配。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "除插入和删除操作外，数组的主要操作还有存取、修改、检索和排序等。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "一个广义表的深度是指该广义表展开后所含括号的层数。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "线性表的逻辑顺序与物理顺序总是一致的。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "在一棵二叉树中，假定每个结点只有左子女，没有右子女，对它分别进行前序遍历和按层遍历，则具有相同的结果。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "若某堆栈的输入序列为1,2,3,4，则4,3,1,2不可能是堆栈的输出序列之一。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "递归方法和递推方法本质上是一回事，例如求n! 时既可用递推的方法，也可用递归的方法。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "在AOE网络中一定只有一条关键路径。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "邻接矩阵存储一个图时，在不考虑压缩存储的情况下，所占用的存储空间大小只与图中的顶点个数有关，而与图的边数无关 .",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "数据结构包括逻辑结构、________和数据的运算三个方面。",
        "answer": "存储结构",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "某带头结点的单链表的头指针head，判定该单链表非空的条件______________。",
        "answer": "head->next!=Null",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "已知循环队列的存储空间为数组a[21]，且头指针（指向队头元素）和尾指针（队尾元素的下一位置）分别为8和3，则该队列的当前长度为________。",
        "answer": "16",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "链队列中入队列的语句为Q.rear->next=s，_________。",
        "answer": "模式匹配",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "设一行优先顺序存储的数组A[5][6]，A[0][0]的地址为1100，且每个元素占2个存储单元，则A[2][3]的地址为_____________。",
        "answer": "1130",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "非空广义表的除第一个元素外其他元素组成的表称为广义表的________。",
        "answer": "表尾",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "假定一棵二叉树的结点个数为32，则它的最小深度为______。",
        "answer": "6",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "如果从一个顶点出发又回到该顶点，则此路径叫做___________。",
        "answer": "回路",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "若要对某二叉排序树进行遍历，保证输出元素的值序列按增序排列，应对该二叉排序树采用____________遍历法。",
        "answer": "中序",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "每一趟排序时从排好序的元素中挑出一个值最小的元素与这些未排小序的元素的第一个元素交换位置，这种排序方法成为_____________排序法。",
        "answer": "选择",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "计算机识别、存储和加工处理的对象被统称为________。",
        "options": [
          "A. 数据",
          "B. 数据元素",
          "C. 数据结构",
          "D. 数据类型"
        ],
        "answer": "A",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "执行下面程序段时，执行S语句的次数为____________。\n        for(int i=1; i<=n; i++)\n            for(int j=1; j<=i; j++)\n                S;",
        "options": [
          "A、 n2",
          "B、 n2/2",
          "C、 n(n+1)",
          "D、 n(n+1)/2"
        ],
        "answer": "D",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "在一个长度为n的顺序存储线性表中，向第i个元素(1≤i≤n+1)之前插入一个新元素时，需要从后向前依次后移        个元素。",
        "options": [
          "A、n-i",
          "B、n-i+1",
          "C、n-i-1",
          "D、i"
        ],
        "answer": "B",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "如下陈述中正确的是________。",
        "options": [
          "A. 串是一种特殊的线性表",
          "B. 串的长度必须大于零",
          "C. 串中元素只能是字母",
          "D. 空串就是空白串"
        ],
        "answer": "A",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "线性表若采用链式存储结构时，要求内存中可用存储单元的地址________。",
        "options": [
          "A. 必须是连续的",
          "B. 部分地址必须是连续的",
          "C. 一定是不连续的",
          "D. 连续，不连续都可以"
        ],
        "answer": "D",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "将一棵有100个结点的完全二叉树从上到下，从左到右依次对结点进行编号，根结点的编号为1，则编号为49的结点的左孩子的编号为______。",
        "options": [
          "A.98",
          "B.99",
          "C.50",
          "D.48"
        ],
        "answer": "A",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "在含有n个项点有e条边的无向图的邻接矩阵中，零元素的个数为________。",
        "options": [
          "A.e",
          "B.2e",
          "C.n2-e",
          "D.n2-2e"
        ],
        "answer": "D",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "堆的形状是一棵_______。",
        "options": [
          "A.二叉排序树",
          "B.满二叉树",
          "C.完全二叉树",
          "D.平衡二叉树"
        ],
        "answer": "C",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "若一组记录的排序码为（46, 79, 56, 38, 40, 84），则利用快速排序的方法，以第一个记录为基准得到的一次划分结果为_______。",
        "options": [
          "A.   38,  40,  46,  56,  79,  84",
          "B.  40, 38,  46 ,  79,  56,  84",
          "C.   40,  38，46,  56,  79,  84",
          "D.  40,  38, 46,  84,  56,  79"
        ],
        "answer": "C",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "算法分析的目的是_________。",
        "options": [
          "A、找出数据结构的合理性",
          "C、分析算法的效率以求改进",
          "B、研究算法中的输入和输出的关系",
          "D、分析算法的易懂性和文档性"
        ],
        "answer": "C",
        "analysis": ""
      }
    ]
  },
  "final3": {
    "title": "数据结构期末试题三",
    "questions": [
      {
        "type": "true_false",
        "question": "顺序存储的线性表可以随机存取",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "由树转换成二叉树，其根结点的右子树总是空的",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "稀疏矩阵压缩存储后，必会失去随机存取功能。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "在n个结点的无向图中,若边数>n-1,则该图必是连通图.",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "如果两个串中含有相同的字符，则这两个串相等",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "散列法存储的基本思想是由关键字的值决定数据的存储地址",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "对n个元素的表用堆排序法进行排序，时间复杂度是O",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "单链表中指针p所指向结点存在后继结点的条件是p!=NULL.",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "任何一棵二叉树都有n0=n2+1的关系式。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "广义表的表头和表尾既可以是单元素,也可以是广义表。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "队列和栈都是___________结构。",
        "answer": "线性",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "线性表的链接存储只能通过___________________顺序访问。",
        "answer": "链接指针",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "对于顺序存储的队列，存储空间大小为n，头指针为F，尾指针为R。若在逻辑上看一个环，则队列中元素的个数为___________。",
        "answer": "(r-f)%n或（r-f+n）%n",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "在快速排序、冒泡排序、归并排序和直接插入排序中，__________是不稳定的排序方法。",
        "answer": "快速排序",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "设数组a[1…60, 1…70]的基地址为2048，每个元素占2个存储单元，若以列序为主序顺序存储，则元素a[32,58]的存储地址为            。",
        "answer": "8950",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "一棵具有257个结点的完全二叉树，它的深度为______________。",
        "answer": "9",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "在无向图中，如果两点之间有路径，则称这两点是___________。",
        "answer": "连通的或连通",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "折半搜索只适合用于___________________。",
        "answer": "有序表",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "若要对某二叉排序树进行遍历，保证输出元素的值序列按增序排列，应对该二叉排序树采用____________遍历法。",
        "answer": "中序",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "每一趟排序时都从第一个结点出发和其他的结点比较，一趟结束后总会找到这趟排序中最大值的关键字，这种排序方法成为_____________排序法。",
        "answer": "冒泡",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "若长度为n的线性表采用顺序存储结构，在其第i个位置插入一个新元素的算法的时间复杂度为(    ) (1≤i≤n+1)",
        "options": [
          "A    O(0)",
          "B  O(1)",
          "C  O(n)",
          "D  O(n2)"
        ],
        "answer": "C",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "某堆栈的输入序列为1，2，3，4，下面的四个序列中不可能的输出序列是(     )",
        "options": [
          "A  4，3，1，2",
          "B  3，4，2，1",
          "C  1，3，2，4",
          "D  2，3，4，1"
        ],
        "answer": "A",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "现按前(先)序法遍历二叉树的结果为ABC，问有(    )种不同二叉树可以得到这一结果。",
        "options": [
          "A   3",
          "B  4",
          "C  5",
          "D  6"
        ],
        "answer": "C",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "有100个结点的完全二叉树由根开始从上到下从左到右对结点进行编号，根结点的编号为1，编号为43的结点的左孩子的编号为（    ）",
        "options": [
          "A  50",
          "B  48",
          "C  98",
          "D  86"
        ],
        "answer": "D",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "若堆栈采用链式存储结构，栈顶指针为top，向堆栈插入一个数据信息为item的新元素的过程是依次执行：生成一个新的结点p，将item放入p的数据域中，然后，（    ），top=p。",
        "options": [
          "A  p=top",
          "B  top->next=p",
          "C  p->next=top",
          "D  top=p"
        ],
        "answer": "C",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "在一个单链表中，已知q所指向的结点是p所指向结点的前驱结点，若在q和p 之间插入s所指向的结点，则执行（    ）",
        "options": [
          "A  s->next=p->next;p->next=s;",
          "B  p->next=s->next;s->next=p;",
          "C  p->next=s;s->next=q;",
          "D  q->next=s;s->next=p;"
        ],
        "answer": "D",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "把一棵树转换为二叉树后，这棵二叉树的形态是（    ）。",
        "options": [
          "A唯一的",
          "B有多种",
          "C有多种，但根结点都没有左孩子",
          "D有多种，但根结点都没有右孩子"
        ],
        "answer": "A",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "堆的形状是一棵（    ）。",
        "options": [
          "A.二叉排序树",
          "B.满二叉树",
          "C.完全二叉树",
          "D.平衡二叉树"
        ],
        "answer": "C",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "若给定关键字的集合为{20,15,14,18,21,36,40,10},一趟快速排序结束时，关键字的排序为（    ）。",
        "options": [
          "A.10,15,14,18,20,36,40,21",
          "B.10,15,14,18,20,40,21",
          "C.10,15,14,20,18,40,36,21",
          "D.15,10,14,18,20,36,40,21"
        ],
        "answer": "A",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "一个n×n阶的对称矩阵采用压缩存储时需要的存储单元数为（    ）。",
        "options": [
          "A  n2",
          "B  2n",
          "C  n*(n+1)/2",
          "D  n*(n+1)"
        ],
        "answer": "C",
        "analysis": ""
      }
    ]
  },
  "final4": {
    "title": "数据结构期末试题四",
    "questions": [
      {
        "type": "true_false",
        "question": "程序越短，程序运行的时间就越少。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "由树转换成二叉树，其根结点的右子树总是空的",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "除插入和删除操作外，数组的主要操作还有存取、修改、检索和排序等。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "非空线性表中任意一个数据元素都有且仅有一个直接后继元素。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "如果两个串中含有相同的字符，则这两个串相等",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "强连通分量是有向图中的极大强连通子图。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "对n个元素的表用堆排序法进行排序，时间复杂度是O",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "希尔排序在效率上较直接接入排序有较大的改进。但是不稳定的。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "深度为h的非空二叉树的第i层最多有2i-1 个结点。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "广义表的表头和表尾既可以是单元素,也可以是广义表。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "一个算法一该具有有穷性，_________，可行性，输入和输出这五种特性。",
        "answer": "确定性",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "单链表中逻辑上相邻的结点而在物理位置上_______相邻。",
        "answer": "不一定",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "栈是一种限定在表的一端进行插入和删除的线性表，又被称为___________表。",
        "answer": "先进后出（后进先出）",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "设目标T=”abccdcdccbaa”，模式P=“cdcc”，则第         次匹配成功。",
        "answer": "6",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "设二维数组A[m][n]按列优先存储，每个元素占1个存储单元，元素A00的存储地址loc(A00)，则Aij的存储地址loc(Aij)=____________________。",
        "answer": "loc（a00）+(j*m+i)*1",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "设有10个值，构成哈夫曼树，则该哈夫曼树共有______个结点。",
        "answer": "19",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "假定一棵树的广义表表示为A(B(C,D(E,F,G),H(I,J)))，则该树的高度为________，假定树根结点的高度为0。",
        "answer": "3",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "一般来说,深度优先生成树的高度比广度优先生成树的高度要________。",
        "answer": "高",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "有一个n个顶点的有向完全图的弧数_____________。",
        "answer": "n(n-1)",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "根据一组记录(56,42,50,64,48)依次插入结点生成一棵AVL树时，当插入到值为_______的结点时需要进行旋转调整。",
        "answer": "50",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "非线性结构是数据元素之间存在一种：（    ）。",
        "options": [
          "A）一对多关系",
          "B）多对多关系",
          "C）多对一关系",
          "D）一对一关系"
        ],
        "answer": "B",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "串是（     ）。",
        "options": [
          "A  一些符号构成的序列",
          "B  一些字母构成的序列",
          "C  一个以上的字符构成的序列",
          "D  任意有限个字符构成的序列现"
        ],
        "answer": "D",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "已知完全二叉树有80个结点，则整个二叉树有（    ）个度为1的结点。",
        "options": [
          "A  0",
          "B  1",
          "C  2",
          "D  不确定"
        ],
        "answer": "B",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "设W为一个二维数组，其每个数据元素Wij占用6 个字节，行下标i 从0到8，列下标从2 到5 ，则二维数组W的数据元素共占用（     ）个字节。",
        "options": [
          "A  480",
          "B 192",
          "C  216",
          "D 144"
        ],
        "answer": "C",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "下列答案（     ）是二叉排序树。",
        "options": [
          "A  二叉树中的每个结点的两棵子树的高度差的绝对值不大于1",
          "B  二叉树中的每个结点的两棵子树的高度差等于1",
          "C  二叉树中的每个结点的两棵子树是有序的",
          "D  二叉树中的每个结点的值大于其左子树上（如果存在）所有结点的值，且小于其右子树（如果存在）上所有结点的值。"
        ],
        "answer": "D",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "在一个单链表中，已知q所指向的结点是p所指向结点的前驱结点，若在q和p 之间插入s所指向的结点，则执行（    ）",
        "options": [
          "A  s->next=p->next;p->next=s;",
          "B  p->next=s->next;s->next=p;",
          "C  p->next=s;s->next=q;",
          "D  q->next=s;s->next=p;"
        ],
        "answer": "D",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "在一个二叉排序树中，按（    ）遍历是一个有序序列。",
        "options": [
          "A  先序遍历",
          "B  中序遍历",
          "C 后序遍历",
          "D  按层次遍历"
        ],
        "answer": "B",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "若已知一个栈的入栈序列是1，2，3，…，n，其输出序列为p1，p2，p3，…，pn，若p1=n，则pi为（      ）。",
        "options": [
          "A．i",
          "B．n=i",
          "C．n-i+1",
          "D．不确定"
        ],
        "answer": "C",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "用邻接表表示图进行深度优先遍历时，通常是采用(      )来实现算法的。",
        "options": [
          "A．栈",
          "B. 队列",
          "C.  树",
          "D.  图"
        ],
        "answer": "A",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "下述几种排序方法中，要求存储空间最大的是(     )。",
        "options": [
          "A. 插入排序",
          "B.快速排序",
          "C. 归并排序",
          "D. 选择排序"
        ],
        "answer": "C",
        "analysis": ""
      }
    ]
  },
  "final5": {
    "title": "数据结构期末试题五",
    "questions": [
      {
        "type": "true_false",
        "question": "算法和程序原则上没有区别，在讨论数据结构时二者是通用的。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "一个任意串是其自身的子串。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "使用三元组表示稀疏矩阵中的非零元素能节省存储空间。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "线性表的链式存储结构是通过指针来间接反映数据元素之间逻辑关系的。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "二叉树是一棵无序树。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "链式栈与顺序栈相比, 一个明显的优点是通常不会出现栈满的情况。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "递归方法和递推方法本质上是一回事，例如求n! 时既可用递推的方法，也可用递归的方法。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "邻接矩阵适用于稠密图",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "对于同一组记录，生成二叉搜索树的形态与插入记录的次序无关。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "true_false",
        "question": "堆排序是一种稳定的排序算法。",
        "answer": "",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "算法的一个特性是________，即算法必须执行有限步就结束。",
        "answer": "有穷性",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "若频繁地对线性表进行插入与删除操作，该线性表应采用____________存储结构。",
        "answer": "链表",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "对于单链表形式的队列，其空队列的F指针和R指针都等于__________________。",
        "answer": "头结点指针",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "已知广义表L为空，其深度为___________。",
        "answer": "1",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "已知一顺序存储的线性表，每个结点占用k个单元，若第一个结点的地址为DA1，则第i个结点的地址为______________。",
        "answer": "DA1+(i-1)*k",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "广义表A ( (a, b, c), (d, e, f ) ) 的表尾为________。",
        "answer": "( (d, e, f ) )",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "在序列(2,5,8,11,15,16,22,24,27,35,50)中采用折半查找(二分查找)方法查找元素24，需要进行______________次元素之间的比较。",
        "answer": "4",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "若采用邻接表的存储结构，则图的广度优先搜索类似于二叉树的____________遍历。",
        "answer": "层次",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "在一棵高度为h的理想平衡二叉树中，最少含有________个结点。假定树根结点的高度为0。",
        "answer": "2h",
        "analysis": ""
      },
      {
        "type": "fill_blank",
        "question": "在一个最小堆中，堆顶结点的值是所有结点中的________。",
        "answer": "最小值",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "链接存储的存储结构所占存储空间",
        "options": [
          "A.分两部分，一部分存放结点值，另一部分存放表示结点间关系的指针",
          "B.只有一部分，存放结点值",
          "C.只有一部分，存储表示结点间关系的指针",
          "D.分两部分，一部分存放结点值，另一部分存放结点所占单元数"
        ],
        "answer": "A",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "栈中元素的进出原则是",
        "options": [
          "A．先进先出",
          "B．后进先出",
          "C．栈空则进",
          "D．栈满则出"
        ],
        "answer": "B",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "判定一个栈ST（最多元素为m0）为空的条件是",
        "options": [
          "A.ST->top<>0",
          "B.ST->top=0",
          "C.ST->top<>m0",
          "D.ST->top=m0"
        ],
        "answer": "B",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "设有两个串p和q，求q在p中首次出现的位置的运算称作",
        "options": [
          "A．连接",
          "B．模式匹配",
          "C．求子串",
          "D．求串长"
        ],
        "answer": "B",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "假设有60行70列的二维数组a[1…60, 1…70]以列序为主序顺序存储，其基地址为10000，每个元素占2个存储单元，那么第32行第58列的元素a[32,58]的存储地址为      。（无第0行第0列元素）",
        "options": [
          "A．16902",
          "B．16904",
          "C．14454",
          "D．答案A, B, C均不对"
        ],
        "answer": "A",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "不含任何结点的空树         。",
        "options": [
          "A.是一棵树;",
          "B.是一棵二叉树;",
          "C.是一棵树也是一棵二叉树;",
          "D.既不是树也不是二叉树"
        ],
        "answer": "C",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "把一棵树转换为二叉树后，这棵二叉树的形态是           。",
        "options": [
          "A.唯一的",
          "B.有多种",
          "C.有多种，但根结点都没有左孩子",
          "D.有多种，但根结点都没有右孩子"
        ],
        "answer": "A",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "在一个有向图中，所有顶点的入度之和等于所有顶点的出度之和的     倍。",
        "options": [
          "A．1/2",
          "B.  1",
          "C.  2",
          "D.  4"
        ],
        "answer": "B",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "对22个记录的有序表作折半查找，当查找失败时，至少需要比较        次关键字。",
        "options": [
          "A．3",
          "B．4",
          "C．5",
          "D． 6"
        ],
        "answer": "C",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "排序方法中，从未排序序列中依次取出元素与已排序序列（初始时为空）中的元素进行比较，将其放入已排序序列的正确位置上的方法，称为___________",
        "options": [
          "A. 希尔排序",
          "B. 冒泡排序",
          "C. 插入排序",
          "D. 选择排序"
        ],
        "answer": "C",
        "analysis": ""
      }
    ]
  },
  "mock2": {
    "title": "数据结构模拟试题（二）",
    "questions": [
      {
        "type": "choice",
        "question": "1. 算法指的是（     ）",
        "options": [
          "计算机程序",
          "解决问题的计算方法",
          "排序算法",
          "解决问题的有限运算序列"
        ],
        "answer": "D",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "2. 线性表采用链式存储时，结点的存储地址（   ）",
        "options": [
          "必须是不连续的",
          "连续与否均可",
          "必须是连续的",
          "和头结点的存储地址相连续"
        ],
        "answer": "B",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "3. 将长度为n的单链表链接在长度为m的单链表之后的算法的时间复杂度为（  ）",
        "options": [
          "O（1）",
          "O（n）",
          "O（m）",
          "O（m+n）"
        ],
        "answer": "C",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "4. 由两个栈共享一个向量空间的好处是：（   ）",
        "options": [
          "减少存取时间,降低下溢发生的机率",
          "节省存储空间,降低上溢发生的机率",
          "减少存取时间,降低上溢发生的机率",
          "节省存储空间,降低下溢发生的机率"
        ],
        "answer": "B",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "5. 设数组data[m]作为循环队列SQ的存储空间，front为队头指针，rear为队尾指针，则执行出队操作后其头指针front值为（   ）",
        "options": [
          "front=front+1",
          "front=(front+1)%(m-1)",
          "front=(front-1)%m",
          "front=(front+1)%m"
        ],
        "answer": "D",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "6. 如下陈述中正确的是（    ）",
        "options": [
          "串是一种特殊的线性表",
          "串的长度必须大于零",
          "串中元素只能是字母",
          "空串就是空白串"
        ],
        "answer": "A",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "7. 若目标串的长度为n，模式串的长度为[n/3]，则执行模式匹配算法时，在最坏情况下的时间复杂度是（    ）",
        "options": [
          "O（）",
          "O（n）",
          "O（n2）",
          "O（n3）"
        ],
        "answer": "C",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "8. 一个非空广义表的表头（    ）",
        "options": [
          "不可能是子表",
          "只能是子表",
          "只能是原子",
          "可以是子表或原子"
        ],
        "answer": "D",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "9. 设栈S和队列Q的初始状态为空，元素E1、E2、E3、E4、E5和E6依次通过栈S，一个元素出栈后即进入队列Q，若6个元素出列的顺序为E2、E4、E3、E6、E5和E1，则栈S的容量至少应该是（  ）。",
        "options": [
          "6",
          "4",
          "3",
          "2"
        ],
        "answer": "C",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "10. 在一棵度为3的树中,度为3的结点个数为2,度为2 的结点个数为1,则度为0的结点个数为(    )",
        "options": [
          "4",
          "6",
          "7"
        ],
        "answer": "C",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "11. 在含n个顶点和e条边的无向图的邻接矩阵中,零元素的个数为(    )",
        "options": [
          "e",
          "2e",
          "n2－e",
          "n2－2e"
        ],
        "answer": "D",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "12. 假设一个有n个顶点和e条弧的有向图用邻接表表示,则删除与某个顶点vi相关的所有弧的时间复杂度是(    )",
        "options": [
          "O(n)",
          "O(e)",
          "O(n+e)",
          "O(n*e)"
        ],
        "answer": "C",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "13. 则所采用的排序方法是（   ）",
        "options": [
          "选择排序",
          "希尔排序",
          "归并排序",
          "快速排序"
        ],
        "answer": "D",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "14. 适于对动态查找表进行高效率查找的组织结构是（   ）",
        "options": [
          "有序表",
          "分块有序表",
          "三叉排序树",
          "线性链表"
        ],
        "answer": "C",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "15. 不定长文件是指（   ）",
        "options": [
          "文件的长度不固定",
          "记录的长度不固定",
          "字段的长度不固定",
          "关键字项的长度不固定"
        ],
        "answer": "B",
        "analysis": ""
      }
    ]
  },
  "mock3": {
    "title": "数据结构模拟试题（三）",
    "questions": [
      {
        "type": "choice",
        "question": "1. 下面关于线性表的叙述错误的是（   ）。",
        "options": [
          "线性表采用顺序存储必须占用一片连续的存储空间",
          "线性表采用链式存储不必占用一片连续的存储空间",
          "线性表采用链式存储便于插入和删除操作的实现",
          "线性表采用顺序存储便于插入和删除操作的实现"
        ],
        "answer": "D",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "2. 设哈夫曼树中的叶子结点总数为m，若用二叉链表作为存储结构，则该哈夫曼树中总共有（  ）个空指针域。",
        "options": [
          "-1",
          "+1"
        ],
        "answer": "B",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "3. 设顺序循环队列Q[0：M-1]的头指针和尾指针分别为F和R，头指针F总是指向队头元素的前一位置，尾指针R总是指向队尾元素的当前位置，则该循环队列中的元素个数为（  ）。",
        "options": [
          "R-F",
          "F-R",
          "(R-F+M)％M",
          "(F-R+M)％M"
        ],
        "answer": "C",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "4. 设某棵二叉树的中序遍历序列为ABCD，前序遍历序列为CABD，则后序遍历该二叉树得到序列为（   ）。",
        "options": [
          "BAD",
          "BCD",
          "CDA",
          "CBDA"
        ],
        "answer": "A",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "5. 设某完全无向图中有n个顶点，则该完全无向图中有（  ）条边。",
        "options": [
          "n(n-1)/2",
          "n(n-1)",
          "n2",
          "n2-1"
        ],
        "answer": "A",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "6. 设某棵二叉树中有2000个结点，则该二叉树的最小高度为（  ）。",
        "options": [
          "9",
          "10",
          "11",
          "12"
        ],
        "answer": "C",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "7. 设某有向图中有n个顶点，则该有向图对应的邻接表中有（  ）个表头结点。",
        "options": [
          "n-1",
          "n",
          "n+1",
          "2n-1"
        ],
        "answer": "B",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "8. 设一组初始记录关键字序列(5，2，6，3，8)，以第一个记录关键字5为基准进行一趟快速排序的结果为（  ）。",
        "options": [
          "2,3,5,8,6",
          "3,2,5,8,6",
          "3,2,5,6,8",
          "2,3,6,5,8"
        ],
        "answer": "C",
        "analysis": ""
      }
    ]
  },
  "mock4": {
    "title": "数据结构模拟试题（四）",
    "questions": [
      {
        "type": "choice",
        "question": "1. 栈和队列的共同特点是(    )。",
        "options": [
          "只允许在端点处插入和删除元素",
          "都是先进后出",
          "都是先进先出",
          "没有共同点"
        ],
        "answer": "",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "2. 用链接方式存储的队列，在进行插入运算时(   ).",
        "options": [
          "仅修改头指针",
          "头、尾指针都要修改",
          "仅修改尾指针",
          "头、尾指针可能都要修改"
        ],
        "answer": "",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "3. 以下数据结构中哪一个是非线性结构？(   )",
        "options": [
          "队列",
          "栈",
          "线性表",
          "二叉树"
        ],
        "answer": "",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "4. 设有一个二维数组A[m][n]，假设A[0][0]存放位置在644(10)，A[2][2]存放位置在676(10)，每个元素占一个空间，问A[3][3](10)存放在什么位置？脚注(10)表示用10进制表示。",
        "options": [
          "688",
          "692",
          "696"
        ],
        "answer": "",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "5. 树最适合用来表示(      )。",
        "options": [
          "有序数据元素",
          "无序数据元素",
          "元素之间具有分支层次关系的数据",
          "元素之间无联系的数据"
        ],
        "answer": "",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "6. 二叉树的第k层的结点数最多为(  ).",
        "options": [
          "2k-1",
          "2K+.2K-1",
          "2k-1"
        ],
        "answer": "",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "7. 若有18个元素的有序表存放在一维数组A[19]中，第一个元素放A[1]中，现进行二分查找，则查找A［3］的比较序列的下标依次为(      )",
        "options": [
          "1,2,3",
          "9,5,2,3",
          "9,5,3",
          "9,4,2,3"
        ],
        "answer": "",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "8. 对n个记录的文件进行快速排序，所需要的辅助存储空间大致为",
        "options": [
          "O（1）",
          "O（n）",
          "O（1og2n）",
          "O（n2）"
        ],
        "answer": "",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "9. 对于线性表（7，34，55，25，64，46，20，10）进行散列存储时，若选用H（K）=K %9作为散列函数，则散列地址为1的元素有（   ）个，",
        "options": [
          "1",
          "3",
          "4"
        ],
        "answer": "",
        "analysis": ""
      },
      {
        "type": "choice",
        "question": "10. 设有6个结点的无向图，该图至少应有(      )条边才能确保是一个连通图。",
        "options": [
          "5",
          "7",
          "8"
        ],
        "answer": "",
        "analysis": ""
      }
    ]
  }
};
