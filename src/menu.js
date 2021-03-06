/**
 * Created by Joker on 18/1/7.
 */

const menus = [
    {
        key: 'dataimport',
        name: '数据导入',
        icon: 'database',
        child: [
            {
                key: 'csv_import',
                name: 'csv导入'
            },

            {
                key: 'execl_import',
                name: 'Execl导入'
            },

            {
                key: 'database_import',
                name: '数据库导入'
            },
            {
                key: 'config_meta',
                name: '配置信息'
            },
            {
                key: 'sql_shell',
                name: 'SQL脚本'
            },
            {
                key: 'task_manage',
                name: '任务管理'
            },
        ]
    },

    {
        key: 'data_view',
        name: '数据视图',
        icon: 'line-chart',
        child: [

            {
                key: 'data_model_create',
                name: '数据模型创建'
            },

            {
                key: 'exist_data_model',
                name: '已存在的数据模型'
            },

            {
                key: 'muilt_dimension_analysis',
                name: '多维分析'
            }
        ]
    },

    {
        key: 'user',
        name: '关于鱼策',
        icon: 'user',
    },

];

export default menus;