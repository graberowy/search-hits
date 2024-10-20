package com.app.be.service.impl;

import com.app.be.model.HitModel;
import com.app.be.model.QueryRequest;
import com.app.be.model.QueryResponse;
import com.app.be.service.SearchService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class SearchServiceImpl implements SearchService {
    @Override
    public QueryResponse getQueryResult(QueryRequest request) {

        List<HitModel> hits = new ArrayList<>();
        String[] queryArray = request.getQuery().split("\\W+");
        ;

        Arrays.stream(queryArray).forEach(query -> {
            if (request.getInput().contains(query)) {
                HitModel hit = new HitModel();
                hit.setMatch(query);
                hits.add(hit);
            }
        });

        QueryResponse queryResponse = new QueryResponse();
        queryResponse.setInput(request.getInput());
        queryResponse.setHits(hits);
        return queryResponse;
    }
}
