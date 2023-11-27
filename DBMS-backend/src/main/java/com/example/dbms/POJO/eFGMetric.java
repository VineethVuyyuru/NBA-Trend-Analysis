package com.example.dbms.POJO;

import org.springframework.stereotype.Repository;

@Repository
public class eFGMetric {
    private String team1;
    private float team1_efg;
    private String team2;
    private float team2_score;
    private Integer season;

    public eFGMetric() {
    }

    public eFGMetric(String team1, float team1_efg, String team2, float team2_score, Integer season) {
        this.team1 = team1;
        this.team1_efg = team1_efg;
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

    public float getTeam1_efg() {
        return team1_efg;
    }

    public void setTeam1_efg(float team1_efg) {
        this.team1_efg = team1_efg;
    }

    public String getTeam2() {
        return team2;
    }

    public void setTeam2(String team2) {
        this.team2 = team2;
    }

    public float getTeam2_score() {
        return team2_score;
    }

    public void setTeam2_score(float team2_score) {
        this.team2_score = team2_score;
    }

    public Integer getSeason() {
        return season;
    }

    public void setSeason(Integer season) {
        this.season = season;
    }
}
