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
        // width: 200,

        // view: {
        //   thin: true
        //   // text: null
        // },
        edit: {
            disabled: true,
            show: false // 是否显示按钮

            // thin: true,
            // type: 'primary'
            // circle: true,
            // text: null
        },
        remove: {
            thin: true,
            text: '撤回'
        }
    },
    columns: [

        {

            title: 'Id',
            key: 'id',
            width: '150',
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
            title: '商品ID',
            key: 'goods_id',
            align: 'center',
            width: '200',
            sortable: true,
            search: {
                name: 'goods_id',
                disabled: true,
                title: '商品ID'
            },
            form: {
                rules: [{ required: true, message: '请输入商品ID' }]
            },
            component: {
                name: 'values-format'
            }
        },
        // {
        //   title: '商品名称',
        //   key: 'goods_name',
        //   sortable: true,
        //   search: {
        //     name: 'goods_name',
        //     title: '商品名称',
        //     disabled: true
        //   },
        //   form: {
        //     addDisabled: true,
        //     editDisabled: true,
        //     rules: [{ required: true, message: '请输入商品名称' }]
        //   },
        //   component: {
        //     name: 'values-format'
        //   }
        // },

        {
            title: '审核状态',
            key: 'audit_status',
            sortable: true,
            align: 'center',
            width: '250',
            search: {
                name: 'stataudit_statusus',
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

            title: '添加时间',
            key: 'create_time',
            sortable: true,
            align: 'center',
            search: {
                disabled: true
            },
            type: 'datetime',
            width: '250',
            form: {
                addDisabled: true,
                editDisabled: true,
                rules: [{ required: true, message: '请输入添加时间' }]
            }
        }

        // {
        //   title: '房间类型',
        //   key: 'roomType',
        //   sortable: true,
        //   align: 'center',
        //   width: '150',
        //   search: {
        //     name: 'room_type',
        //     disabled: false,
        //     component: {
        //       props: {
        //         clearable: true
        //       }
        //     }
        //   },
        //   type: 'select',
        //   form: {
        //     rules: [{ required: true, message: '请输入房间类型' }]
        //   },
        //   dict: { url: '/hotel/roomtype/options' }
        // },
        // {
        //   title: '备注',
        //   key: 'remark',
        //   columnName: 'remark',
        //   sortable: true,
        //   search: {
        //     name: 'remark',
        //     disabled: true
        //   },
        //   form: {
        //     rules: [{ required: false, message: '请输入备注' }]
        //   }

    // }
    ]
}
