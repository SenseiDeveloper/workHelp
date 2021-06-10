import React, {useEffect} from 'react';
import {Book} from '../book';
import { BookOutlined } from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import {loadBooksData} from '../../redux/action/booksAction';

export const Library = () => {
    const dispatch = useDispatch();
    const booksData = useSelector(state => state.books.books);
    const data = [
        {
            id: 0,
            name: 'Джейн Ейр (Мара)',
            author: 'Олексій Щербак',
            date: '10/06/21'
        },
        {
            id: 1,
            name: 'Суджені. The One',
            author: 'Джон Маррс',
            date: '04/04/21'
        },
        {
            id: 2,
            name: 'Художниця тіла',
            author: 'Дон Делілло',
            date: '12/02/21'
        }
    ];
    useEffect(() => {
        const checkBooksDate = localStorage.getItem('books');
        if(!checkBooksDate){
            dispatch(loadBooksData(data));
            localStorage.setItem('books', JSON.stringify(data));
        }
    },[]);

    return (
        <div className="container">
            <div className="title">
                <h1><BookOutlined /> Develop a book library</h1>
            </div>
            <div className="content">
                <ul>
                    {
                        booksData?.map(book => <Book key={book.id} book={book}/>)
                    }
                </ul>
            </div>
        </div>
    )
};
