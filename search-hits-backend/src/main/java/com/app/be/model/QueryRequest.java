package com.app.be.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class QueryRequest {
    private String input;
    private String query;
}
