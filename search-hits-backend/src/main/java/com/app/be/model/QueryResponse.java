package com.app.be.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class QueryResponse {
    private String input;
    private List<HitModel> hits;
}
