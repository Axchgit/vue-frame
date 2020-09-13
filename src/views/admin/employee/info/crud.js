export const crudOptions = {
    pageOptions: {
        compact: true // 是否紧凑型页面
    },
    options: {
        height: '100%' // 表格高度100%, 使用toolbar必须设置
    },
    formOptions: {
        defaultSpan: 12 // 默认的表单 span
    },
    // 知识点:CRUD:控制操作列
    rowHandle: {
    // 知识点:控制固定列
    // fixed: 'right',
        align: 'center',
        width: 200,

        view: {
            thin: false,
            text: '查看'
            // type: 'primary'

        },
        edit: {
            // disabled: true,
            thin: true,
            type: 'primary',
            // circle: true,
            text: '编辑'
            // show: false // 是否显示按钮

        },
        remove: {
            // disabled: true,
            thin: true,
            type: 'danger',
            text: '删除'
            // show: false // 是否显示按钮
        }
    },
    columns: [

        {

            title: 'ID',
            key: 'id',
            width: '90',
            sortable: true,
            // disabled: false, // 知识点:CRUD控制是否显示该列
            search: {
                name: 'id',
                disabled: true // 知识点:CRUD控制是否显示该字段搜索
            },
            align: 'center',
            form: {
                addDisabled: true,
                editDisabled: true,
                rules: [{ required: true, message: '请输入id' }]
            }
        },
        {
            title: 'UUID',
            key: 'uuid',
            align: 'center',
            width: '100',
            sortable: true,
            disabled: true,
            search: {
                name: 'uuid',
                disabled: true,
                title: 'UUID'
            },
            form: {
                addDisabled: true,
                editDisabled: true,
                rules: [{ required: true, message: '请输入UUID' }]
            },
            component: {
                name: 'values-format'
            }
        },
        {
            title: '工号',
            key: 'work_num',
            align: 'center',
            width: '100',
            sortable: true,
            search: {
                name: 'work_num',
                disabled: false,
                title: '工号'
            },
            form: {
                rules: [{ required: true, message: '请输入工号' }]
            },
            component: {
                // name: 'values-format'
            }
        },
        {
            title: '姓名',
            key: 'real_name',
            align: 'center',
            width: '100',
            sortable: true,
            search: {
                name: 'real_name',
                disabled: false,
                title: '姓名'
            },
            form: {
                rules: [{ required: true, message: '请输入名字' }]
            },
            component: {
                // name: 'values-format'
            }
        },
        {
            title: '邮箱',
            key: 'email',
            align: 'center',
            width: '100',
            sortable: true,
            disabled: true,
            search: {
                name: 'email',
                disabled: true,
                title: '邮箱'
            },
            form: {
                rules: [{ required: true, message: '请输入邮箱' }]
            },
            component: {
                name: 'values-format'
            }
        },
        {
            title: '身份证号',
            key: 'id_card',
            align: 'center',
            width: '100',
            sortable: true,
            disabled: true,
            search: {
                name: 'id_card',
                disabled: true,
                title: '身份证号'
            },
            form: {
                rules: [{ required: true, message: '请输入身份证号' }]
            },
            component: {
                name: 'values-format'
            }
        },
        {
            title: '银行卡',
            key: 'bank_card',
            align: 'center',
            width: '100',
            sortable: true,
            disabled: true,

            search: {
                name: 'bank_card',
                disabled: true,
                title: '银行卡'
            },
            form: {
                addDisabled: true,
                editDisabled: true
                // rules: [{ required: true, message: '请输入商品UUID' }]
            },
            component: {
                // name: 'values-format'
            }
        },
        {
            title: '生日',
            key: 'uuid',
            align: 'center',
            width: '100',
            sortable: true,
            type: 'datetime',
            disabled: true,

            search: {
                name: 'uuid',
                disabled: true,
                title: 'UUID'
            },
            form: {
                addDisabled: true,
                editDisabled: true,
                rules: [{ required: true, message: '请输入商品UUID' }]
            },
            component: {
                // name: 'values-format'
            }
        },
        {
            title: '性别',
            key: 'sex',
            align: 'center',
            width: '100',
            sortable: false,
            search: {
                name: 'sex',
                disabled: true,
                title: '性别'
            },
            form: {
                addDisabled: true,
                editDisabled: false
                // rules: [{ required: true, message: '请输入商品UUID' }]
            },
            component: {
                props: {
                    clearable: true
                },
                name: 'values-format'
            },
            dict: {
                data: [
                    { value: 1, label: '男' },
                    { value: 2, label: '女', color: 'danger' }
                ]
            }
        },
        {
            title: '权限',
            key: 'role',
            align: 'center',
            width: '100',
            sortable: true,
            search: {
                name: 'role',
                disabled: false,
                title: '权限'
            },
            form: {
                // addDisabled: true,
                // editDisabled: true,
                // rules: [{ required: true, message: '请输入商品UUID' }]
            },
            component: {
                props: {
                    clearable: true
                },
                name: 'values-format'
            },
            dict: {
                data: [
                    { value: 0, label: '超级管理员', color: 'danger' },
                    { value: 1, label: '管理员', color: 'success' },
                    { value: 2, label: '普通员工' },
                    { value: 3, label: '普通员工' },
                    { value: 4, label: '普通员工' },
                    { value: 5, label: '普通员工' }
                ]
            }
        },
        {
            title: '激活状态',
            key: 'review_status',
            align: 'center',
            // showOverflowTooltip: true,
            width: '80',
            sortable: true,
            search: {
                name: 'review_status',
                title: '激活状态',
                disabled: true
            },
            // form: {
            //   addDisabled: true,
            //   editDisabled: true,
            //   rules: [{ required: true, message: '请输入商品名称' }]
            // },
            component: {
                props: {
                    clearable: true
                },

                name: 'values-format'
            },
            dict: {
                data: [
                    { value: '0', label: '未激活', color: 'info' },
                    { value: '1', label: '已激活', color: 'success' }
                    // { value: 0, label: '未激活' },

                    // { value: [2, 3, 4, 5], label: '普通员工' }
                ]
            }
        },
        {

            title: '创建时间',
            key: 'create_time',
            sortable: true,
            align: 'center',
            disabled: true,

            search: {
                disabled: true
            },
            type: 'datetime',
            width: '150',
            form: {
                addDisabled: true,
                editDisabled: true,
                rules: [{ required: true, message: '请输入添加时间' }]
            }
        }
    ]
}
