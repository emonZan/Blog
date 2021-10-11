module.exports = {
    title: 'EmonWorld',
    description: 'EmonWorld',
    themeConfig: {
        nav: [
            buildNav('CSS', '/css/'),
            buildNav('JS', '/js/'),
            buildNav('Framework', '/framework/'),
            buildNav('Others', '/others/')
        ],
        sidebar: {
            '/css/': [
                buildSidebar('CSS', [
                    'CSS实现垂直居中的8种方式',
                    '怎么通过CSS画正三角和倒三角',
                    'px,em,rem的区别和使用场景',
                    'CSS实现三栏布局的3种方式',
                    '介绍CSS中的长度单位fr'
                ])
            ],
            '/js/': [
                buildSidebar('JS', [
                    'JS节流函数和防抖函数',
                    'JS中的类型转换',
                    '理解JS中的call,apply,bind方法',
                    'JS中的BigInt类型',
                    'JS中的深拷贝和浅拷贝',
                    'JS中的内存管理'
                ])
            ],
            '/framework/': [
                buildSidebar('Framework', [
                    'kamra遇到chrome升级的问题',
                    'JS实现Angular的slider组件'
                ])
            ],
            '/others/': [
                buildSidebar('Others', [
                    '开发实用工具'
                ])
            ]
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
