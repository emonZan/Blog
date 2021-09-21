module.exports = {
    title: 'EmonWorld',
    description: 'EmonWorld',
    themeConfig: {
        nav: [
            buildNav('CSS', '/css/'),
            buildNav('JS', '/js/')
        ],
        sidebar: {
            '/css/': [
                buildSidebar('CSS', [
                    'CSS实现垂直居中的8种方式',
                    'px,em,rem的区别和使用场景'
                ])
            ],
            '/js/': [
                buildSidebar('JS', [
                    'JS节流函数和防抖函数',
                    'JS中的类型转换'
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
