import React, { useEffect, useState } from 'react'
import * as boards from '../apis/boards';
import {Link} from 'react-router-dom';



const List = () => {

    const [boardList, setBoardList] = useState([]);

    const getBoardList = async() => {
        const response = await boards.list();
        setBoardList(response.data);
        console.log(response.data);
    }

    useEffect(() => {
        getBoardList();
    }, [])

    return (
        <>
            <h1>전체 게시글</h1>

            <table border={1}>
                <thead>
                    <tr>
                        <td>번호</td>
                        <td>제목</td>
                        <td>작성자</td>
                        <td>작성일자</td>
                    </tr>
                </thead>
                <tbody>
                    {boardList.length == 0 ?
                    <>
                        <tr>
                            <td colSpan="4">
                                <h5>조회된 게시글이 없습니다.</h5>
                            </td>
                        </tr>
                    </>
                    :
                    <>
                        {boardList.map((board) => (
                            <tr key={board.no}>
                                <td>{board.no}</td>
                                <td><Link to={`/boards/${board.no}`}>{board.title}</Link></td>
                                <td>{board.writer}</td>
                                <td>{board.regDate}</td>
                            </tr>
                        ))}
                    </>
                    }
                </tbody>
            </table>
        </>
    )
}

export default List