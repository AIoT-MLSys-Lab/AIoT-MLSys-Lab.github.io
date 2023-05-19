import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
const items = [
  {
    label: 'Home',
    key: '/',
  },
  {
    label: 'Research',
    key: 'Research',
  },
  {
    label: 'Members',
    key: 'Members',
  },
  {
    label: 'News',
    key: 'News',
  },
  {
    label: 'Publications',
    key: 'Publications',
  },
  {
    label: 'Courses',
    key: 'Courses',
    children: [
      {
        type: 'group',
        label: 'OSU',
        children: [
          {
            label: 'CSE 5469: Artificial Intelligence of Things',
            key: 'setting:1',
          },
          {
            label: 'CSE 3461: Computer Networking and Internet Technologies',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Other',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ]
  },
  {
    label: 'Talk',
    key: 'Talk',
  },
  {
    label: 'Join the Lab',
    key: 'Join',
  },
  {
    label: 'OSU AIoT Seminar',
    key: 'Seminar',
  },
];
const NavBar = () => {
  const [current, setCurrent] = useState('/');
  const navigate = useNavigate();
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    if (e.key === 'Seminar') {
      window.location.href = 'https://sites.google.com/view/osu-aiot-seminar';
    } else {
      navigate(`${e.key}`);
    }
  };
  return <Menu className='flex-center' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default NavBar;