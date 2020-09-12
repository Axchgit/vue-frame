
import StringUtils from 'd2-crud-plus/src/lib/utils/util.string'
export const crudOptions = {
    pageOptions: {
        compact: true // 是否紧凑型页面
    },
    options: {
        height: '100%' // 表格高度100%, 使用toolbar必须设置
    },
    formOptions: {
        // defaultSpan: 12, // 默认的表单 span
        width: '60%'
    },
    searchOptions: {
        form: {
            daterange: [] // 表单重置bug
        }
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
            title: '请假类别',
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
                    { value: 1, label: '事假' },
                    { value: 2, label: '病假' },
                    { value: 3, label: '产假' },
                    { value: 4, label: '婚假' },
                    { value: 5, label: '丧假', color: 'info' },
                    { value: 6, label: '年假' }

                ]
            }
        },
        {
            title: '具体事由',
            key: 'reason',
            align: 'center',
            width: '100',
            sortable: true,
            search: {
                name: 'reason',
                disabled: true,
                title: '具体事由'
            },
            form: {
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

            sortable: true,
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
        // {
        //     title: '日期时间范围',
        //     key: 'datetimerange',
        //     sortable: true,
        //     type: 'datetimerange',
        //     width: 300,
        //     form: {
        //         component: {
        //             props: {
        //                 size: 'mini',
        //                 width: '50px',
        //                 'time-arrow-control': true,
        //                 'default-time': ['12:00:00', '12:00:00']
        //                 // 'picker-options': { shortcuts: shortcuts }
        //             }
        //         }
        //     },
        //     valueBuilder(row, key) {
        //         if (!StringUtils.hasEmpty(row.datetimerangeStart, row.datetimerangeEnd)) {
        //             row.datetimerange = [new Date(row.datetimerangeStart), new Date(row.datetimerangeEnd)]
        //         }
        //     },
        //     valueResolve(row, key) {
        //         if (row.datetimerange != null && !StringUtils.hasEmpty(row.datetimerange)) {
        //             row.datetimerangeStart = row.datetimerange[0].getTime()
        //             row.datetimerangeEnd = row.datetimerange[1].getTime()
        //         } else {
        //             row.datetimerangeStart = null
        //             row.datetimerangeEnd = null
        //         }
        //     }
        // },
        // {
        //     title: '日期时间范围',
        //     key: 'datetimerange',
        //     sortable: true,
        //     type: 'datetimerange',
        //     width: 300,
        //     form: {
        //         component: {
        //             props: {
        //                 size: 'mini',
        //                 width: '50px',
        //                 'time-arrow-control': true,
        //                 'default-time': ['12:00:00', '12:00:00']
        //                 // 'picker-options': { shortcuts: shortcuts }
        //             }
        //         }
        //     },
        //     valueBuilder(row, key) {
        //         if (!StringUtils.hasEmpty(row.datetimerangeStart, row.datetimerangeEnd)) {
        //             row.datetimerange = [new Date(row.datetimerangeStart), new Date(row.datetimerangeEnd)]
        //         }
        //     },
        //     valueResolve(row, key) {
        //         if (row.datetimerange != null && !StringUtils.hasEmpty(row.datetimerange)) {
        //             row.datetimerangeStart = row.datetimerange[0].getTime()
        //             row.datetimerangeEnd = row.datetimerange[1].getTime()
        //         } else {
        //             row.datetimerangeStart = null
        //             row.datetimerangeEnd = null
        //         }
        //     }
        // },
        {
            title: '选择日期',
            key: 'datetimerange',
            sortable: true,
            // align: 'center',
            disabled: true,
            type: 'datetimerange',
            search: {
                disabled: true
            },
            // type: 'datetime',
            width: '50',
            form: {
                component: {
                    width: '50',

                    // 知识点:element ui 配置项,改为驼峰命名
                    props: {
                        'time-arrow-control': false
                        // 'value-format': 'timestamp'
                    }
                },
                width: '50',

                // valueFormat: 'timestamp',
                rules: [{ required: true, message: '请输入开始时间' }]
            },
            component: {
                // name: 'values-format'
            },
            valueBuilder(row, key) {
                if (!StringUtils.hasEmpty(row.start_time, row.end_time)) {
                    row.datetimerange = [new Date(row.start_time), new Date(row.end_time)]
                }
            },
            valueResolve(row, key) {
                if (row.datetimerange != null && !StringUtils.hasEmpty(row.datetimerange)) {
                    row.start_time = row.datetimerange[0].getTime() / 1000
                    row.end_time = row.datetimerange[1].getTime() / 1000
                    row.duration = row.end_time - row.start_time
                } else {
                    row.start_time = null
                    row.end_time = null
                }
            }
        },
        {
            title: '开始时间',
            key: 'start_time',
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
                editDisabled: true
                // rules: [{ required: true, message: '请输入时间' }]
            }
        },
        {
            title: '结束时间',
            key: 'end_time',
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
                editDisabled: true
                // rules: [{ required: true, message: '请输入结束时间' }]
            }
        },
        {
            title: '持续时间',
            key: 'duration',
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
                editDisabled: true
                // rules: [{ required: true, message: '请输入结束时间' }]
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
                editDisabled: true,
                rules: [{ required: true, message: '请输入审核状态' }]
            },
            dict: {
                data: [
                    { value: 1, label: '正在审核', color: 'info' },
                    { value: 2, label: '通过', color: 'success' },
                    { value: 3, label: '未通过', color: 'danger' }
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
