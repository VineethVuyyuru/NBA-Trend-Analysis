package com.example.dbms.POJO;

public class PointsAgainst {
    private Integer season;
    private String team;
    private Integer points;

    public PointsAgainst() {
    }

    public PointsAgainst(String team, Integer season, Integer points) {
        this.team = team;
        this.season = season;
        this.points = points;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        this.team = team;
    }

    public Integer getSeason() {
        return season;
    }

    public void setSeason(Integer season) {
        this.season = season;
    }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }
}
