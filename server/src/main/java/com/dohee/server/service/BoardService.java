package com.dohee.server.service;

import java.util.List;

import com.dohee.server.dto.Board;

public interface BoardService {
    
    // 전체 게시글 조회
    public List<Board> list() throws Exception;

    // 게시글 조회
    public Board select(int no) throws Exception;

    // 게시글 작성
    public int insert(Board board) throws Exception;

    // 게시글 수정
    public int update(Board board) throws Exception;

    // 게시글 삭제
    public int delete(int no) throws Exception;
}
