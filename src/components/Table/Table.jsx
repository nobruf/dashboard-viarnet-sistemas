import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Table, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const columns = [
    {
        title: 'Tecnico',
        dataIndex: 'tecnico',
        filters: [
          {
            text: 'Nycolas Mello',
            value: 'Nycolas Mello',
          },
          {
            text: 'Bruno',
            value: 'Bruno',
          },
        ],
        onFilter: (value, record) => record.tecnico.indexOf(value) === 0,
      },
  {
    title: 'Data',
    dataIndex: 'data',
    sorter: (a, b) => a.data - b.data,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: 'Action',
    key: 'action',
    sorter: true,
    render: () => (
      <Space size="middle">
        <a>Delete</a>
        <a>
          <Space>
            More actions
            <DownOutlined />
          </Space>
        </a>
      </Space>
    ),
  },
];
let data =[]
/* 

for (let i = 1; i <= 50; i++) {
  data.push({
    key: i,
    tecnico: 'Marcos',
    age: Number(`${i}2`),
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
  data.push({
    key: i,
    tecnico: 'Rodrigo',
    age: Number(`${i}2`),
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
} */

const defaultExpandable = {
  expandedRowRender: (record) => <p>{record.description}</p>,
};

const Tabela = (instalacoes) => {
  data=instalacoes.data;
  console.log(data)
  const [bordered, setBordered] = useState(true);
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState('large');
  const [expandable, setExpandable] = useState(defaultExpandable);
  const [showTitle, setShowTitle] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [showfooter, setShowFooter] = useState(false);
  const [rowSelection, setRowSelection] = useState(false);
  const [hasData, setHasData] = useState(true);
  const [tableLayout, setTableLayout] = useState(undefined);
  const [top, setTop] = useState('none');
  const [bottom, setBottom] = useState('bottomCenter');
  const [ellipsis, setEllipsis] = useState(true);
  const [yScroll, setYScroll] = useState(true);
  const [xScroll, setXScroll] = useState(undefined);


 

  const scroll = {};

  if (yScroll) {
    scroll.y = 545;
  }

  if (xScroll) {
    scroll.x = '100vw';
  }

  const tableColumns = columns.map((item) => ({ ...item, ellipsis }));

  if (xScroll === 'fixed') {
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = 'right';
  }

  const tableProps = {
    bordered,
    loading,
    size,
    expandable,
    title: showTitle ? defaultTitle : undefined,
    showHeader,
    footer: showfooter ? defaultFooter : undefined,
    rowSelection,
    scroll,
    tableLayout,
  };
  return (
    <>
      <Table
        {...tableProps}
        pagination={{
          position: [top, bottom],
        }}
        columns={tableColumns}
        dataSource={hasData ? data : []}
        scroll={scroll}
      />
    </>
  );
};

export default Tabela;