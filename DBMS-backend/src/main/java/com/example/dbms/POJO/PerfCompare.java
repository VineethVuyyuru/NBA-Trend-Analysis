package com.example.dbms.POJO;

import org.springframework.stereotype.Repository;

@Repository
public class PerfCompare {
    private String name;
    private Integer points;
    private Integer avgOfTop;
    private Integer season;

    public PerfCompare() {
    }

    public PerfCompare(String name, Integer points, Integer avgOfTop, Integer season) {
        this.name = name;
        this.points = points;
        this.avgOfTop = avgOfTop;
        this.season = season;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }

    public Integer getAvgOfTop() {
        return avgOfTop;
    }

    public void setAvgOfTop(Integer avgOfTop) {
        this.avgOfTop = avgOfTop;
    }

    public Integer getSeason() {
        return season;
    }

    public void setSeason(Integer season) {
        this.season = season;
    }
}
