module.exports = {
    title: 'GeekTry',
    description: 'GeekTry文档',
    themeConfig: {
        nav: [
            buildNav('Java', [
                buildNav('JVM', '/Java/JVM/'),
            ]),
            buildNav('SkyWalking', [
                buildNav('源码', '/SkyWalking/source-code/'),
                buildNav('性能', '/SkyWalking/performance/'),
            ]),
            buildNav('LeetCode', [
                buildNav('每日一题', '/LeetCode/daily/'),
            ]),
            buildNav('MachineLearning', [
                buildNav('吴恩达', '/MachineLearning/AndrewNg/'),
            ]),
            buildNav('关于我', '/AboutMe/'),
        ],
        sidebar: {
            '/Java/JVM/': [
                buildSidebar('JVM', [
                    '1.运行时数据区',
                    '2.对象探秘',
                    '3.对象存活',
                    '4.垃圾收集算法',
                    '5.垃圾收集实现',
                    '6.经典垃圾收集器',
                    '7.类文件结构',
                ])
            ],
            '/SkyWalking/source-code/': [
                buildSidebar('源码', [
                    '1.Probes的加载机制',
                ])
            ],
            '/SkyWalking/performance/': [
                buildSidebar('性能', [
                    '1.吞吐量调优',
                ])
            ],
            '/LeetCode/daily/': [
                buildSidebar('每日一题', [
                    '每日一题（1）：罗马数字转整数',
                    '每日一题（2）：最长公共前缀',
                    '每日一题（3）：两数相加',
                    '每日一题（4）：无重复字符的最长子串',
                    '每日一题（5）：最长回文子串',
                    '每日一题（6）：Z字形变换',
                    '每日一题（7）：字符串转换整数(atoi)',
                    '每日一题（8）：盛最多水的容器',
                    '每日一题（9）：三数之和',
                    '每日一题（10）：最接近的三数之和',
                    '每日一题（11）：寻找两个正序数组的中位数',
                ])
            ],
            '/MachineLearning/AndrewNg/': [
                buildSidebar('每日一题', [
                    '1. 绪论：初识机器学习',
                    '2. 单变量线性回归',
                    '3. 线性代数回顾',
                    '5. 多变量线性回归',
                    '7. Logistics回归',
                ])
            ],
            '/AboutMe/': [
                buildSidebar('关于我', [
                    '',
                ])
            ],
        },
        lastUpdated: 'Last Updated',
        smoothScroll: true
    }
}

function buildNav(text, x) {
    const o = {
        text: text
    }
    if (x instanceof Array) {
        o.items = x;
        return o;
    }
    o.link = x;
    return o;
}

function buildSidebar(title, children) {
    return {
        title: title,
        collapsable: false,
        sidebarDepth: 1,
        children: children
    };
}
