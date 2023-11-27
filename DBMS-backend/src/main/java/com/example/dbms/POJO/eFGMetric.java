package com.example.dbms.POJO;

import org.springframework.stereotype.Repository;

@Repository
public class eFGMetric {
    private String team1;
    private Integer team1_score;

    private String team2;
    private Integer team2_score;
    private Integer season;

    public eFGMetric() {
    }

    public eFGMetric(String team1, Integer team1_score, String team2, Integer team2_score, Integer season) {
        this.team1 = team1;
        this.team1_score = team1_score;
        this.team2 = team2;
        this.team2_score = team2_score;
        this.season = season;
    }

    public String getTeam1() {
        return team1;
    }

    public void setTeam1(String team1) {
        this.team1 = team1;
    }

    public Integer getTeam1_score() {
        return team1_score;
    }

    public void setTeam1_score(Integer team1_score) {
        this.team1_score = team1_score;
    }

    public String getTeam2() {
        return team2;
    }

    public void setTeam2(String team2) {
        this.team2 = team2;
    }

    public Integer getTeam2_score() {
        return team2_score;
    }

    public void setTeam2_score(Integer team2_score) {
        this.team2_score = team2_score;
    }

    public Integer getSeason() {
        return season;
    }

    public void setSeason(Integer season) {
        this.season = season;
    }
}
