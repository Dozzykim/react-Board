package com.dohee.server.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.dohee.server.dto.Board;

@Mapper
public interface BoardMapper {
    
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
