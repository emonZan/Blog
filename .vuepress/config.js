module.exports = {
    title: 'EmonWorld',
    description: 'EmonWorld',
    themeConfig: {
        nav: [
            buildNav('CSS', '/css/'),
            buildNav('HTML', '/html/'),
            buildNav('JS', '/js/'),
            buildNav('Framework', '/framework/'),
            buildNav('Others', '/others/')
        ],
        sidebar: {
            '/css/': [
                buildSidebar('CSS', [
                    'CSS实现垂直居中的8种方式',
                    'CSS怎么画三角形',
                    'px,em,rem的区别和使用场景',
                    'CSS实现三栏布局的3种方式',
                    '介绍CSS中的长度单位fr'
                ])
            ],
            '/html/': [
                buildSidebar('HTML', [
                    '了解viewport-meta-tag'
                    
                ])
            ],
            '/js/': [
                buildSidebar('JS', [
                    'JS节流函数和防抖函数',
                    '理解JS中的类型',
                    '理解JS中的call,apply,bind方法',
                    'JS中的BigInt类型',
                    'JS中的深拷贝和浅拷贝',
                    'JS中的内存管理'
                ])
            ],
            '/framework/Angular/': [
                buildSidebar('Framework', [
                    'JS实现Angular的slider组件'
                ])
            ],
            '/network/': [
                buildSidebar('Network', [
                    '理解HTTP和HTTPS',
                    '详解域名'
                ])
            ],
            '/others/': [
                buildSidebar('Others', [
                    'kamra遇到chrome升级的问题',
                    '开发实用工具',
                    'git常用命令总结'
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
