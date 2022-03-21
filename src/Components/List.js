import React from 'react';

const List = (props) => {
    const bookList = props.list.map((item) => {
        return (
            <div>
                <li key={item.isbn}>
                    <b>Book Name:</b> {item.title}
                </li>
                <h4>Author: {item.author}</h4>
                <hr />
            </div>
        );
    });
    return <div>{bookList}</div>;
};

export default List;
