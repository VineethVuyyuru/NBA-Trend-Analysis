package com.example.dbms.POJO;

public class PointsAgainst {
    private Integer season;
    private String team;
    private Integer points;

    private Integer high_rank;

    private Integer low_rank;

    public PointsAgainst() {
    }

    public PointsAgainst(Integer season, String team, Integer points, Integer high_rank, Integer low_rank) {
        this.season = season;
        this.team = team;
        this.points = points;
        this.high_rank = high_rank;
        this.low_rank = low_rank;
    }

    public Integer getSeason() {
        return season;
    }

    public void setSeason(Integer season) {
        this.season = season;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        this.team = team;
    }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }

    public Integer getHigh_rank() {
        return high_rank;
    }

    public void setHigh_rank(Integer high_rank) {
        this.high_rank = high_rank;
    }

    public Integer getLow_rank() {
        return low_rank;
    }

    public void setLow_rank(Integer low_rank) {
        this.low_rank = low_rank;
    }
}
