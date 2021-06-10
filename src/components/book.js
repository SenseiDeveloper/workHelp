import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

export const Book = ({book}) => {
    return(
        <li>
            <div className="block block--mod">
                <h2>{book.name}</h2>
                <p>{book.author}</p>
                <p>{book.date}</p>
            </div>
            <div className="block">
                <Button type="primary">
                    <EditOutlined /> Редагувати
                </Button>
                <Button type="primary" danger>
                    <DeleteOutlined /> Видалити
                </Button>
            </div>
        </li>
    );
};
