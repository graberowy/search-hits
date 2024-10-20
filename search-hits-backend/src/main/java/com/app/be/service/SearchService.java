package com.app.be.service;

import com.app.be.model.QueryRequest;
import com.app.be.model.QueryResponse;

import java.util.Map;

public interface SearchService {
    QueryResponse getQueryResult(QueryRequest request);
}
