package com.dohee.server.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dohee.server.dto.Board;
import com.dohee.server.mapper.BoardMapper;

@Service
public class BoardServiceImpl implements BoardService{

    @Autowired
    BoardMapper boardMapper;

    @Override
    public List<Board> list() throws Exception {
        return boardMapper.list();
    }

    @Override
    public Board select(int no) throws Exception {
        return boardMapper.select(no);
    }

    @Override
    public int insert(Board board) throws Exception {
        return boardMapper.insert(board);
    }

    @Override
    public int update(Board board) throws Exception {
        return boardMapper.update(board);
    }

    @Override
    public int delete(int no) throws Exception {
        return boardMapper.delete(no);
    }
    
}
