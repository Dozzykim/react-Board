package com.dohee.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dohee.server.dto.Board;
import com.dohee.server.service.BoardService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/boards")
public class BoardController {

    @Autowired
    BoardService boardService;
    
    
    /**
     * 전체 게시글 조회
     * @return
     */
    @GetMapping()
    public ResponseEntity<?> getAllBoard() {
        try {
            log.info("::::::::: 전체 게시글 요청 :::::::::");
            List<Board> boardList = boardService.list();
            return new ResponseEntity<>(boardList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    /**
     * 게시글 상세 조회
     * @param postNo
     * @return
     */
    @GetMapping("/{postNo}")
    public ResponseEntity<?> getOneBoard(@PathVariable("postNo") Integer postNo) {
        try {
            log.info("::::::::: {}번 게시글 요청 :::::::::", postNo);
            Board board = boardService.select(postNo);
            return new ResponseEntity<>(board, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    /**
     * 게시글 등록 처리
     * @param board
     * @return
     */
    @PostMapping()
    public ResponseEntity<?> createBoard(@RequestBody Board board) {
        try {
            int result = boardService.insert(board);
            
            if (result == 0) {
                return new ResponseEntity<>("FAIL", HttpStatus.INTERNAL_SERVER_ERROR);
            }

            return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    /**
     * 게시글 수정 처리
     * @param board
     * @return
     */
    @PutMapping()
    public ResponseEntity<?> updateBoard(@RequestBody Board board) {
        try {
            int result = boardService.update(board);
            
            if (result == 0) {
                return new ResponseEntity<>("FAIL", HttpStatus.INTERNAL_SERVER_ERROR);
            }

            return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
            
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    /**
     * 게시글 삭제 처리
     * @param postNo
     * @return
     */
    @DeleteMapping("/{postNo}")
    public ResponseEntity<?> destroyBoard(@PathVariable("postNo") Integer postNo) {
        try {
            int result = boardService.delete(postNo);
            if (result == 0) {
                return new ResponseEntity<>("FAIL", HttpStatus.INTERNAL_SERVER_ERROR);
            }
            return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
