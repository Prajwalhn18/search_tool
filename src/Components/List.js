import React from 'react';

const List = (props) => {
    const bookList = props.list.map((item) => {
        return <li key={item.isbn}>{item.title}</li>;
    });
    return <div>{bookList}</div>;
};

export default List;
