package com.example.dbms.POJO;

import org.springframework.stereotype.Repository;

@Repository
public class HeightDiv {
    private Integer season;
    private float avg_rebounds;

    private float avg_steals;

    private float avg_blocked_shots;

    private float avg_field_goals_made;

    private float avg_total_points;

    private Integer min_height;

    private Integer max_height;

    public HeightDiv() {
    }

    public HeightDiv(Integer season, float avg_rebounds, float avg_steals, float avg_blocked_shots, float avg_field_goals_made, float avg_total_points, Integer min_height, Integer max_height) {
        this.season = season;
        this.avg_rebounds = avg_rebounds;
        this.avg_steals = avg_steals;
        this.avg_blocked_shots = avg_blocked_shots;
        this.avg_field_goals_made = avg_field_goals_made;
        this.avg_total_points = avg_total_points;
        this.min_height = min_height;
        this.max_height = max_height;
    }

    public Integer getSeason() {
        return season;
    }

    public void setSeason(Integer season) {
        this.season = season;
    }

    public float getAvg_rebounds() {
        return avg_rebounds;
    }

    public void setAvg_rebounds(float avg_rebounds) {
        this.avg_rebounds = avg_rebounds;
    }

    public float getAvg_steals() {
        return avg_steals;
    }

    public void setAvg_steals(float avg_steals) {
        this.avg_steals = avg_steals;
    }

    public float getAvg_blocked_shots() {
        return avg_blocked_shots;
    }

    public void setAvg_blocked_shots(float avg_blocked_shots) {
        this.avg_blocked_shots = avg_blocked_shots;
    }

    public float getAvg_field_goals_made() {
        return avg_field_goals_made;
    }

    public void setAvg_field_goals_made(float avg_field_goals_made) {
        this.avg_field_goals_made = avg_field_goals_made;
    }

    public float getAvg_total_points() {
        return avg_total_points;
    }

    public void setAvg_total_points(float avg_total_points) {
        this.avg_total_points = avg_total_points;
    }

    public Integer getMin_height() {
        return min_height;
    }

    public void setMin_height(Integer min_height) {
        this.min_height = min_height;
    }

    public Integer getMax_height() {
        return max_height;
    }

    public void setMax_height(Integer max_height) {
        this.max_height = max_height;
    }
}
