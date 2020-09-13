
import StringUtils from 'd2-crud-plus/src/lib/utils/util.string'
export const crudOptions = {
    pageOptions: {
        compact: true // 是否紧凑型页面
    },
    options: {
        height: '100%' // 表格高度100%, 使用toolbar必须设置
    },
    formOptions: {
        labelWidth: '150px',
        defaultSpan: 20, // 默认的表单 span
        width: '60%'
    },
    searchOptions: {
        form: {
            daterange: [] // 表单重置bug
        }
    },
    // CRUD:控制操作列
    rowHandle: {
    // 控制固定列
    // fixed: 'right',
        align: 'center',
        width: 200,

        view: {
            thin: false,
            text: '查看',
            type: 'primary'

        },
        edit: {
            // disabled: true,
            thin: true,
            type: 'primary',
            // circle: true,
            text: '编辑',
            show: false // 是否显示按钮

        },
        remove: {
            // disabled: true,
            thin: true,
            type: 'danger',
            text: '撤回'
            // show: false // 是否显示按钮
        }
    },
    columns: [

        {

            title: 'ID',
            key: 'id',
            width: '90',
            sortable: true,
            // disabled: false, // CRUD控制是否显示该列
            search: {
                name: 'id',
                disabled: true // CRUD控制是否显示该字段搜索
            },
            align: 'center',
            form: {
                addDisabled: true,
                editDisabled: true
                // rules: [{ required: true, message: '请输入id' }]
            }
        },
        {
            title: 'UUID',
            key: 'uuid',
            align: 'center',
            width: '100',
            // sortable: true,
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
                // name: 'values-format'
            }
        },
        {
            title: '离职类别',
            key: 'category',
            align: 'center',
            width: '100',
            sortable: true,
            type: 'select',
            search: {
                name: 'category',
                disabled: false,
                title: '请假类别'
            },
            form: {
                component: {
                    props: {
                        // dict: { // 此处配置不影响列展示的效率
                        //     cache: false, // 表单的dict可以禁用缓存
                        //     clone: true, // 获取成功后clone一份，不影响全局缓存
                        //     onReady(data, dict, context) {
                        //         console.log('字典请求ready', data, context)
                        //         data[0].disabled = true // 禁用某个选项， 还可以自己修改选项，如果没有禁用缓存，则可能会影响全局
                        //     }
                        // }
                    }
                },
                rules: [{ required: true, message: '请输入请假类别' }]
            },
            component: {
                props: {
                    clearable: true
                },
                name: 'values-format'
            },
            dict: {
                data: [
                    { value: 1, label: '辞职' },
                    { value: 2, label: '辞退', color: 'danger', disabled: true },
                    { value: 3, label: '其他', color: 'success' }
                ]
            }
        },
        {
            title: '离职理由',
            key: 'reason',
            align: 'center',
            width: '100',
            type: 'text-area',
            //
            showOverflowTooltip: true,
            // sortable: true,
            search: {
                name: 'reason',
                disabled: true,
                title: '具体事由'
            },
            // type: 'textarea',
            form: {
                // type: 'textarea',
                rules: [{ required: true, message: '请输入具体事由' }]
            },
            component: {
                // name: 'values-format'
            }
        },
        {
            title: '代理人工号',
            key: 'agent',
            align: 'center',
            width: '100',
            disabled: false,

            // sortable: true,
            search: {
                // name: 'real_name',
                // disabled: false,
                // title: '姓名'
            },
            form: {
                rules: [{ required: true, message: '请输入代理人工号' }]
            },
            component: {
                // name: 'values-format'
            }
        },
        {
            title: '预计离职时间',
            key: 'estimated_time',
            sortable: true,
            align: 'center',
            disabled: true,

            search: {
                disabled: true
            },
            type: 'datetime',
            width: '150',
            form: {
                rules: [{ required: true, message: '请输入时间' }]
            },
            valueBuilder(row, key) {
                if (!StringUtils.hasEmpty(row.estimated_time)) {
                    row.estimated_time = new Date(row.estimated_time * 1000)
                }
            },
            valueResolve(row, key) {
                if (row.estimated_time != null && !StringUtils.hasEmpty(row.estimated_time)) {
                    row.estimated_time = row.estimated_time.getTime() / 1000
                } else {
                    row.estimated_time = null
                }
            }
        },
        {
            title: '审核状态',
            key: 'review_status',
            sortable: true,
            align: 'center',
            width: '250',
            search: {
                name: 'review_status',
                title: '审核状态',
                disabled: true,
                component: {
                    props: {
                        clearable: true
                    }
                }
            },
            type: 'select',
            form: {
                addDisabled: true,
                editDisabled: true
                // rules: [{ required: true, message: '请输入审核状态' }]
            },
            dict: {
                data: [
                    { value: 1, label: '正在审核', color: 'warning' },
                    { value: 2, label: '通过', color: 'success' },
                    { value: 3, label: '未通过', color: 'danger' }
                ]
            }
        },
        {
            title: '审核人工号',
            key: 'reviewer',
            align: 'center',
            width: '100',
            disabled: false,

            // sortable: true,
            search: {
                // name: 'real_name',
                // disabled: false,
                // title: '姓名'
            },
            form: {

                component: {
                    props: {
                        clearable: true
                    }
                },
                addDisabled: true,
                editDisabled: true
                // rules: [{ required: true, message: '请输入代理人工号' }]
            },
            component: {
                // name: 'values-format'
            },

            valueBuilder(row, key) {
                if (row.reviewer === '') {
                    row.reviewer = '未审核'
                }
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
