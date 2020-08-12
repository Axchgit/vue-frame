export default {
    path: '/dom/test',
    title: '测试',
    icon: 'flask',
    children: (pre => [
        { path: `${pre}index`, title: '示例', icon: 'home' },
        {
            title: '表格',
            icon: 'table',
            children: [
                { path: `${pre}table/1`, title: '表格 1' }
            ]
        },
        {
            title: 'ISSUES',
            icon: 'github',
            children: [
                { path: `${pre}issues/142`, title: '#142' }
            ]
        }
    ])('/dom/test/')
}

// {
//     title: '页面',
//     icon: 'folder-o',
//     children: [
//         { path: '/page1', title: '页面 1' },
//         { path: '/page2', title: '页面 2' },
//         { path: '/page3', title: '页面 3' },
//         { path: '/dom', title: '新建示例' },
//         { path: '/test', title: 'test' }


//     ]
// },