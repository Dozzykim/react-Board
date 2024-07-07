import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Update = ({board, onDelete, onUpdate}) => {

    // const {no, title, writer, content, regDate, updDate} = board;

    const [title, setTitle] = useState('');
    const [writer, setWriter] = useState('');
    const [content, setContent] = useState('');

    const handletitle = (e) => {
        setTitle(e.target.value);
        // console.log(e.target.value);
    }

    const hadleWriter = (e) => {
        setWriter(e.target.value);
        // console.log(e.target.value);
    }

    const hadleContent = (e) => {
        setContent(e.target.value);
        // console.log(e.target.value);
    }

    useEffect(()=>{
        if (board) {
            setTitle(board.title)
            setWriter(board.writer)
            setContent(board.content)
        }
    }, [board])


    return (
        <>
            <div className="post">

                <h3>게시글 수정</h3>
                <table border={1}>
                    <tbody>
                        <tr>
                            <td>번호: </td>
                            <td>{board.no}</td>
                        </tr>
                        <tr>
                            <td>제목: </td>
                            <td><input type="text" value={title} onChange={handletitle}/></td>
                        </tr>
                        <tr>
                            <td>작성자: </td>
                            <td><input type="text" value={writer} onChange={hadleWriter}/></td>
                        </tr>
                        <tr>
                            <td colSpan={2}>내용</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <textarea  name="" id="" cols="52" rows="10" value={content} onChange={hadleContent}></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="btns">
                    <button>
                        <Link to={`/boards/${board.no}`}>취소</Link>
                    </button>
                    <div>
                        <button onClick={()=>onUpdate(board.no, title, writer, content)}>수정</button>
                        <button onClick={()=>onDelete(board.no)}>삭제</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Update