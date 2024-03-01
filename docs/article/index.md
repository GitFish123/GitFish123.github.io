<!--
 * @Author: Mecora i_akio@126.com
 * @Date: 2024-03-01 12:14:30
 * @LastEditors: Mecora i_akio@126.com
 * @LastEditTime: 2024-03-01 13:07:14
 * @FilePath: /GitFish123.github.io/docs/.vuepress/article/index.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

## 1、自定义Antd Pagination 的每页条数
目前[Antd Pagination](https://ant-design.antgroup.com/components/pagination-cn)中分页/条支持对`pageSizeOptions`属性进行自定义配置, 默认是`[10, 20, 50, 100]`，但只有属性中先定义了的值才能使用。如果想要在表格中进行输入自定义输入任意想要的每页条数，则目前默认的配置是不能实现的，因此基于以上情况的考虑，对`Antd Pagination`组件进行了简单的扩展，支持自定义的输入每页条数.此外还可以对输入的内容进行合法性校验。

#### 定义自定义组件
```javascript
  import { Input, message, Select } from 'antd';
  import React, { useState, Fragment } from 'react';

  const CustomPagination = (props: any) => {
    const { onChange, children, ...restProps } = props;
    const [inputValue, setInputValue] = useState<string | number>('');

    const handleInputChange = (e: any) => {
      const value = e.target.value;
      if (!value) {
        setInputValue(value);
        return;
      }
      if (/^[1-9]\d*$/.test(value as any)) {
        if (value > 2000) {
          message.warning('自定义条数最大不能超过2000, 请重新输入！');
        } else {
          setInputValue(Number(value));
        }
      }
    }

    const handleDropdownRender = (menu: any) => {
      return (
        <div style={{ width: '100%' }}>
          {menu}
          <Input
            value={inputValue}
            placeholder="自定义每页条数"
            onChange={handleInputChange}
            onPressEnter={(e: any) => {
              onChange(e.target.value || 100)
              setInputValue('')
            }}
            style={{ width: '98%', marginTop: '4px' }}
          />
        </div>
      )
    }

    const onChange = (value: any) => {
      onChange(value)
    }

    return (
      <div>
        <Select 
          onChange={onChange} 
          dropdownRender={handleDropdownRender}
          {...restProps} 
        >
          {children?.map((option: any) => (
            <Fragment key={option.props.value}>
              {React.createElement(option.type || 'li', option.props, option.props.children)}
            </Fragment>
          ))}
        </Select>
      </div>
    )
  }

  CustomPagination.Option = Select.Option
  export default CustomPagination
```

#### 基于Table 进行封装
```javascript
  import React from 'react';
  import CustomPagination from '@/components/CustomPagination'

  const CustomTable: React.FC = (props) => (
    const {
      current, 
      total, 
      per_page,  
      ...resetProps
    } = props;

    let innerPagination = {
      pageSizeOptions: [1, 5, 10, 20, 50, 100, 500],
      showQuickJumper: true,
      showSizeChanger: true,
      current: current ?? 1,
      total: total ?? 0,
      showTotal: (total: number) => `共 ${total} 条数据`,
      pageSize: per_page,
      selectComponentClass: CustomPagination,
      ...resetProps,
    }

   return (
     <Table
      columns={columns}
      dataSource={data}
      pagination={innerPagination}
      />
    )
  );

  export default CustomTable;
```

#### 使用
```javascript
  import React from 'react';

  const CustomTable: React.FC = () => (
    <Table
      columns={columns}
      dataSource={data}
      pagination={innerPagination}
    />
  );
```

#### 最终实效的效果，如下：
<br />
<img src="/image/custom_pagination.jpg" alt="自定义输入分页条数" height='200'>