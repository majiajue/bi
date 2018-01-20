/**
 * Created by Joker on 18/1/11.
 */

import React from 'react'
import { Button, Input, Select, Card, Table, message } from 'antd'
import AddSource from './addsource'
import axios from 'axios'
import { getDBSourceTable, getDBSourceTable_s } from '../../datas/datasourceColumn'

const Search = Input.Search
const Option = Select.Option



// debugger
const column_s = `${getDBSourceTable_s("http://localhost:8088/api/getSourceConfig")}`
const cols = column_s === "undefined" || column_s === null ? "" : JSON.parse(column_s)



const columns = [{
    title: '数据源名称',
    dataIndex: 'sourceName',
},
    {
    title: '数据源类型',
    dataIndex: 'sourceType',
}, {
    title: '数据源描述',
    dataIndex: 'sourceDescribe',
},];



// const rowSelection = {
//     onChange: (selectedRowKeys, selectedRows) => {
//         console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//     },
//     getCheckboxProps: record => ({
//         disabled: record.sourceName === 'mysql_线上', // Column configuration not to be checked
//     }),
// };

export default class Configuration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            selectedRowKeys: [],
        }
    }


    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }


    search_data_source = (value) => {
        console.log(value)
    }

    handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    handleBlur = () => {
        console.log('blur');
    }

    handleFocus = () => {
        console.log('focus');
    }

    start = () => {
        this.setState({
            loading: true,
        })
        const url = "http://localhost:8088/api/delSourceConfig"
        let data = {
            "configIds": this.state.selectedRowKeys
        }
        console.log("daadadsadadadada", data)
        axios({
            url: url,
            method: 'post',
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
            message.success(res.data.data)
        }).catch((error) => {
            this.setState({
                loading: false,
            });
            message.error(error.response.data.message)
        })
    }

    onSelectChange = (selectedRowKeys) => {
        this.setState({ selectedRowKeys });
    }

    render() {

        const { loading, selectedRowKeys } = this.state;

        const hasSelected = this.state.selectedRowKeys.length > 0;

        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        }

        return (
            <div>
                <Card title="搜索域" style={{ "margin-bottom": "10px" }}>
                    <div>
                        <div>
                            <div>
                                <Select
                                    showSearch
                                    style={{ width: 200, "margin-bottom": "20px" }}
                                    placeholder="选择数据源类型"
                                    optionFilterProp="children"
                                    onChange={this.handleChange}
                                    onFocus={this.handleFocus}
                                    onBlur={this.handleBlur}
                                    filterOption={
                                        (input, option) =>
                                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="mysq">mysq</Option>
                                    <Option value="oracle">oracle</Option>
                                    <Option value="hive">hive</Option>
                                </Select>
                            </div>
                            <div style={{ float: "right" }}>
                                {/*<Button type="primary" onClick={this.addSource}>新增数据源</Button>*/}
                                <AddSource/>
                            </div>
                        </div>

                        <div>
                            <Search
                                style={{ width: 200 }}
                                placeholder="请输入数据源名称"
                                onSearch={this.search_data_source} />
                        </div>
                    </div>
                </Card>



                <Card title="数据源展示域">
                    <div style={{ marginBottom: 16 }}>
                        <Button
                            type="primary"
                            onClick={this.start}
                            disabled={!hasSelected}
                            loading={loading}
                        >
                            删除
                        </Button>
                        <span style={{ marginLeft: 8 }}>
                            {hasSelected ? `选中 ${selectedRowKeys.length} 条数据` : ''}
                        </span>
                    </div>
                    <Table size="small" rowSelection={rowSelection} columns={columns} dataSource={cols} />
                </Card>
            </div>
        )
    }
}