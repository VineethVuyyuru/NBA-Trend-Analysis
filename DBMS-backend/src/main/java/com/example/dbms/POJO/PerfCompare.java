package com.example.dbms.POJO;

import org.springframework.stereotype.Repository;

import java.math.BigDecimal;

@Repository
public class PerfCompare {

    private float points;
    private float avgOfTop;
    private Integer season;

    public PerfCompare() {
    }

    public PerfCompare(float points, float avgOfTop, Integer season) {
        this.points = points;
        this.avgOfTop = avgOfTop;
        this.season = season;
    }


    public float getPoints() {
        return points;
    }

    public void setPoints(float points) {
        this.points = points;
    }

    public float getAvgOfTop() {
        return avgOfTop;
    }

    public void setAvgOfTop(float avgOfTop) {
        this.avgOfTop = avgOfTop;
    }

    public Integer getSeason() {
        return season;
    }

    public void setSeason(Integer season) {
        this.season = season;
    }
}
