import React, { useEffect, useState } from 'react'
import Update from '../components/Update';
import * as boards from '../apis/boards';
import { useNavigate } from 'react-router-dom';


const UpdateContainer = ({no}) => {

    const navigate = useNavigate();

    const [board, setBoard] = useState({})

    const getBoard = async() => {
        const response = await boards.select(no);
        const data = response.data;
        setBoard(data)
    }
    
    const onDelete = async () => {

        // alert(no);
        const doubleCheck = window.confirm("정말로 삭제하시겠습니까?")
        if (!doubleCheck) {
            return;
        }
        const response = await boards.deletePost(no);
        const data= response.data;
        console.log(data);

        // 게시글 목록으로 이동
        navigate(`/boards`);
    }
    
    const onUpdate = async (no, title, writer, content) => {
        const postData = {
            "no" : no,
            "title": title,
            "writer": writer,
            "content" : content
        }
        const headers = {
            "content-type": "application/json"
        }

        const response = await boards.update(postData, headers);
        const data = response.data;
        console.log(data);

        alert("수정이 완료되었습니다.")

        navigate(`/boards/${no}`);
    }

    useEffect(()=>{
        getBoard()
    }, [])

    return (
        <>
            <Update board={board} onDelete={onDelete} onUpdate={onUpdate}/>
        </>
    )
}

export default UpdateContainer