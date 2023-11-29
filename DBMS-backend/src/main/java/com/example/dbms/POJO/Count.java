package com.example.dbms.POJO;

public class Count {
    private Integer total_count;

    public Count() {
    }

    public Count(Integer counter) {
        this.total_count = counter;
    }

    public Integer getTotal_count() {
        return total_count;
    }

    public void setTotal_count(Integer total_count) {
        this.total_count = total_count;
    }
}
