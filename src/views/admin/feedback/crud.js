
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
            type: 'success',
            // circle: true,
            text: '审核'
            // show: false // 是否显示按钮

        },
        remove: {
            // disabled: true,
            thin: true,
            type: 'danger',
            text: '撤回',
            show: false // 是否显示按钮
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
            title: '问题类别',
            key: 'category',
            align: 'center',
            width: '100',
            sortable: true,
            type: 'select',
            search: {
                name: 'category',
                disabled: false,
                title: '问题类别'
            },
            form: {
                addDisabled: true,
                editDisabled: true,
                component: { span: 10 },
                rules: [{ required: true, message: '请输入问题类别' }]
            },
            component: {
                props: {
                    clearable: true
                },
                name: 'values-format'
            },
            dict: {
                data: [
                    { value: 1, label: '系统' },
                    { value: 2, label: '业务', color: 'danger' },
                    { value: 3, label: '公司', color: 'success' },
                    { value: 4, label: '其他', color: 'info' }

                ]
            }
        },
        {
            title: '具体事项',
            key: 'matter',
            align: 'center',
            width: '200',
            type: 'text-area',
            showOverflowTooltip: true,
            // sortable: true,
            search: {
                name: 'matter',
                disabled: true,
                title: '具体事项'
            },
            form: {
                addDisabled: true,
                editDisabled: true,
                rules: [{ required: true, message: '请输入具体事项' }]
            },
            component: {
                // name: 'values-format'
            }
        },
        {
            title: '问题日期',
            key: 'exact_date',
            sortable: true,
            align: 'center',
            // disabled: true,

            search: {
                disabled: true
            },
            type: 'date',
            width: '150',
            form: {
                addDisabled: true,
                editDisabled: true,
                // rules: [{ required: true, message: '请输入时间' }]
                helper: '默认为今天'
            },
            valueBuilder(row, key) {
                if (!StringUtils.hasEmpty(row.exact_date)) {
                    row.exact_date = new Date(row.exact_date * 1000)
                }
            },
            valueResolve(row, key) {
                if (row.exact_date != null && !StringUtils.hasEmpty(row.exact_date)) {
                    row.exact_date = row.exact_date.getTime() / 1000
                } else {
                    row.exact_date = (new Date()).getTime() / 1000
                }
            }
        },
        {
            title: '处理状态',
            key: 'process_status',
            sortable: true,
            align: 'center',
            width: '50',
            search: {
                name: 'process_status',
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
                // editDisabled: true
                rules: [{ required: true, message: '请输入审核状态' }]
            },
            dict: {
                data: [
                    { value: 1, label: '处理中', color: 'warning' },
                    { value: 2, label: '已处理', color: 'success' },
                    { value: 3, label: '已核查', color: 'info' }
                ]
            }
        },
        {
            title: '处理人工号',
            key: 'handler',
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
                if (row.handler === '') {
                    row.handler = '未审核'
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
