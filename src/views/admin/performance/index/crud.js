// import StringUtils from 'd2-crud-plus/src/lib/utils/util.string'
export const crudOptions = {
    pageOptions: {
        export: {
            local: true, // 本地导出，false为服务端导出
            title: '数据导出', // 导出的文件名
            type: 'excel', // 导出文件类型，可选： [ csv | excel ]
            formatter(row, context) {
                // 数据格式化
                // row.xxx = parseInt(row.xxx)
            },
            columnBuilder(col, context) {
                // 列设置
                col.width = 10 // 设置列宽
            }
        },
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
    columns: [{
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
        title: '商品ID',
        key: 'goods_id',
        align: 'center',
        width: '100',
        // sortable: true,
        // disabled: true,
        search: {
            name: 'goods_id',
            disabled: false,
            title: '商品ID'
        },
        form: {
            // addDisabled: true,
            editDisabled: true,
            rules: [{ required: true, message: '请输入商品ID' }]
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
        // sortable: true,
        // disabled: true,
        search: {
            name: 'work_num',
            // disabled: true,
            title: '工号'
        },
        form: {
            addDisabled: true,
            editDisabled: true,
            rules: [{ required: true, message: '请输入工号' }]
        },
        component: {
            // name: 'values-format'
        }
    }, {
        title: '姓名',
        key: 'real_name',
        align: 'center',
        width: '100',
        // sortable: true,
        // disabled: true,
        search: {
            name: '姓名',
            disabled: true,
            title: 'real_name'
        },
        form: {
            addDisabled: true,
            editDisabled: true,
            rules: [{ required: true, message: '请输入姓名' }]
        },
        component: {
            // name: 'values-format'
        }
    },
    // TODO:优化审核操作
    {
        title: '审核状态',
        key: 'audit_status',
        sortable: true,
        align: 'center',
        width: '50',
        search: {
            name: 'audit_status',
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
                { value: 2, label: '审核通过', color: 'success' },
                { value: 3, label: '未通过', color: 'danger' }
            ]
        }
    },
    {
        title: '审核人员',
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
        // {
        //     title: '审核',
        //     key: 'audit_status',
        //     sortable: true,
        //     search: {},
        //     type: 'switch',
        //     width: '150px',
        //     form: {
        //         valueChange(key, value) {
        //             console.log('-----你选择了', value)
        //         }
        //     }
        //     // valueBuilder(row, key) {
        //     //     if (row.audit_status === 1 || row.audit_status === 3) {
        //     //         row.audit_status = '未通过'
        //     //         console.log(row.audit_status)
        //     //     } else {
        //     //         row.audit_status = '通过'
        //     //     }
        //     //     // if (!StringUtils.hasEmpty(row.exact_date)) {
        //     //     //     row.audit_status = new Date(row.audit_status * 1000)
        //     //     // }
        //     // }
        // }
        // {
        //     title: '审核',
        //     key: 'audit_status',
        //     sortable: true,
        //     search: { disabled: false },
        //     valueBuilder(row, key) {
        //         if (row.audit_status === 1 || row.audit_status === 3) {
        //             row.audit_status = false
        //             console.log(row.audit_status)
        //         } else {
        //             row.audit_status = true
        //         }
        //         // if (!StringUtils.hasEmpty(row.exact_date)) {
        //         //     row.audit_status = new Date(row.audit_status * 1000)
        //         // }
        //     },
        //     type: 'dict-switch',
        //     dict: { data: [{ value: true, label: '通过' }, { value: false, label: '未通过' }] },
        //     form: {
        //         component: {
        //             span: 24,
        //             events: {
        //                 blur: () => {
        //                     console.log('on blur')
        //                 }
        //             }
        //         },
        //         valueChange(key, value, form) {
        //             console.log('您选中了：', value)
        //         }
        //     },
        //     minWidth: 200

        //     // valueResolve(row, key) {
        //     //     if (row.exact_date != null && !StringUtils.hasEmpty(row.exact_date)) {
        //     //         row.exact_date = row.exact_date.getTime() / 1000
        //     //     } else {
        //     //         row.exact_date = (new Date()).getTime() / 1000
        //     //     }
        //     // }
        // }
    ]
}
