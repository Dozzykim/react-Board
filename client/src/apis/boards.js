import axios from 'axios';

// 전체 게시글
export const list = () => axios.get("/boards");

// 게시글 조회
export const select = (postNo) => axios.get(`/boards/${postNo}`);

// 게시글 등록
export const insert = (postData, headers) => axios.post(`/boards`, postData, headers);

// 게시글 수정
export const update = (postData, headers) => axios.put(`/boards`, postData, headers);

// 게시글 삭제
export const deletePost = (postNo) => axios.delete(`/boards/${postNo}`);
