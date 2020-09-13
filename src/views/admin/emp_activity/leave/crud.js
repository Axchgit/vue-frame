
import StringUtils from 'd2-crud-plus/src/lib/utils/util.string'
export const crudOptions = {
    pageOptions: {
        compact: true // 是否紧凑型页面
    },
    options: {
        height: '100%' // 表格高度100%, 使用toolbar必须设置
    },
    formOptions: {
        labelWidth: '100px',
        defaultSpan: 12, // 默认的表单 span
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
                editDisabled: true
                // rules: [{ required: true, message: '请输入UUID' }]
            },
            component: {
                // name: 'values-format'
            }
        },
        {
            title: '申请人工号',
            key: 'work_num',
            align: 'center',
            width: '100',
            // sortable: true,
            // disabled: true,
            search: {
                name: '申请人工号',
                disabled: true,
                title: 'work_num'
            },
            form: {
                // addDisabled: true,
                editDisabled: true,
                rules: [{ required: true, message: '请输入工号' }]
            },
            component: {
                name: 'values-format'
            }
        },
        {
            title: '申请人姓名',
            key: 'real_name',
            align: 'center',
            width: '100',
            // sortable: true,
            // disabled: true,
            search: {
                name: '申请人姓名',
                disabled: true,
                title: 'real_name'
            },
            form: {
                addDisabled: true,
                editDisabled: true
                // rules: [{ required: true, message: '请输入UUID' }]
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
                // addDisabled: true,
                editDisabled: true,
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
                    { value: 2, label: '病假', color: 'danger' },
                    { value: 3, label: '产假', color: 'success' },
                    { value: 4, label: '婚假', color: 'success' },
                    { value: 5, label: '丧假', color: 'info' },
                    { value: 6, label: '年假' }

                ]
            }
        },
        {
            title: '具体事由',
            key: 'reason',
            align: 'center',
            type: 'text-area',
            width: '100',
            showOverflowTooltip: true,
            // sortable: true,
            search: {
                name: 'reason',
                disabled: true,
                title: '具体事由'
            },
            form: {
                // addDisabled: true,
                editDisabled: true,
                rules: [{ required: true, message: '请输入具体事由' }]
            },
            component: {
                // name: 'values-format'
            }
        },

        {
            title: '日期',
            key: 'datetimerange',
            // sortable: true,
            align: 'center',
            // disabled: true,
            type: 'datetimerange',
            width: '300',
            search: {
                disabled: true
            },
            form: {
                component: {
                    // element ui 配置项,改为驼峰命名
                    props: {
                        'time-arrow-control': false
                        // 'value-format': 'yyyy-M-d-H'
                    }
                },
                // addDisabled: true,
                editDisabled: true,
                // valueFormat: 'yyyy-M-d-H',
                rules: [{ required: true, message: '请输入开始时间' }]
            },
            component: {
                // name: 'values-format'
            },
            test(row, key) {
                console.log(row)
                console.log(12321321)
            },
            valueBuilder(row, key) {
                if (!StringUtils.hasEmpty(row.start_time, row.end_time)) {
                    row.datetimerange = [new Date(row.start_time * 1000), new Date(row.end_time * 1000)]
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
                // addDisabled: true,
                editDisabled: true,
                component: { span: 10 },
                rules: [{ required: true, message: '请输入代理人工号' }],
                helper: '代班人员工号'
            },
            component: {
                // name: 'values-format'
            }
        },
        // {
        //     title: '开始时间',
        //     key: 'start_time',
        //     sortable: true,
        //     align: 'center',
        //     disabled: true,

        //     search: {
        //         disabled: true
        //     },
        //     type: 'datetime',
        //     width: '150',
        //     form: {
        //         addDisabled: true,
        //         editDisabled: true
        //         // rules: [{ required: true, message: '请输入时间' }]
        //     }
        // },
        // {
        //     title: '结束时间',
        //     key: 'end_time',
        //     sortable: true,
        //     align: 'center',
        //     disabled: true,

        //     search: {
        //         disabled: true
        //     },
        //     type: 'datetime',
        //     width: '150',
        //     form: {
        //         addDisabled: true,
        //         editDisabled: true
        //         // rules: [{ required: true, message: '请输入结束时间' }]
        //     }
        // },
        {
            title: '持续时间',
            key: 'duration',
            sortable: true,
            align: 'center',
            disabled: false,

            search: {
                disabled: true
            },
            // type: 'datetime',
            width: '150',
            form: {
                addDisabled: true,
                editDisabled: true
                // rules: [{ required: true, message: '请输入结束时间' }]
            },
            component: {
                name: 'values-format'
            },
            // CRUD处理表单值
            valueBuilder(row, key) {
                var days = parseInt(row.duration / (60 * 60 * 24))
                var hours = parseInt((row.duration % (60 * 60 * 24)) / (60 * 60))
                // var minutes = parseInt((row.duration % (60 * 60)) / (60))
                // var seconds = (row.duration % (60)) / 1000
                row.duration = days + ' 天 ' + hours + ' 小时 '
                if (days === 0) {
                    row.duration = hours + ' 小时 '
                } else if (hours === 0) {
                    row.duration = days + ' 天 '
                }
                // row.duration = row.duration / (60 * 60 * 24)
                // row.duration = 321312432434324
                // if (!StringUtils.hasEmpty(row.start_time, row.end_time)) {
                //     row.datetimerange = [new Date(row.start_time), new Date(row.end_time)]
                // }
            }
        },

        {
            title: '审核状态',
            key: 'review_status',
            sortable: true,
            align: 'center',
            width: '150',
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
                // editDisabled: true,
                rules: [{ required: true, message: '请输入审核状态' }]
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
