module.exports = {
    title: 'EmonWorld',
    description: 'EmonWorld',
    themeConfig: {
        nav: [
            buildNav('CSS', [
                buildNav('CSS', '/CSS/'),
            ]),
            buildNav('JS', [
                buildNav('JS', '/JS/')
            ])
        ],
        sidebar: {
            '/CSS/': [
                buildSidebar('CSS', [
                    'CSS实现垂直居中的8种方式'
                ])
            ],
            '/JS/': [
                buildSidebar('JS', [
                    'JS节流函数和防抖函数',
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
