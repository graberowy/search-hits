package com.app.be.controller;

import com.app.be.model.QueryRequest;
import com.app.be.model.QueryResponse;
import com.app.be.service.SearchService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/search")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SearchController {

    private final SearchService searchService;

    @PostMapping("/by-query")
    public ResponseEntity<QueryResponse> searchByQuery(@RequestBody QueryRequest request) {
        return ResponseEntity.ok(searchService.getQueryResult(request));
    }
}
