import React from 'react'
import {Link} from 'react-router-dom';

const Read = ({board}) => {
    console.log(board);

    const {no, title, writer, content, regDate, updDate} = board;

    return (
        <>
            <h3>게시글 조회</h3>
            <table border={1}>
                <tbody>
                    <tr>
                        <td>번호: </td>
                        <td>{no}</td>
                    </tr>
                    <tr>
                        <td>제목: </td>
                        <td>{title}</td>
                    </tr>
                    <tr>
                        <td>작성자: </td>
                        <td>{writer}</td>
                    </tr>
                    <tr>
                        <td>작성일자: </td>
                        <td>{regDate}</td>
                    </tr>
                    <tr>
                        <td>수정일자: </td>
                        <td>{updDate}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>내용</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <textarea  name="" id="" cols="40" rows="10" value={content}></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button>
                <Link to={`/boards`}>목록</Link>
            </button>
            <button>
                <Link to={`/boards/update/${no}`}>수정</Link>
            </button>
        </>
    ) 
}

export default Read