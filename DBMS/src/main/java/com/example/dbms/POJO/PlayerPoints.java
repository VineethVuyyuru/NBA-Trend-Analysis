package com.example.dbms.POJO;

public class PlayerPoints {
    private String name;
    private Integer season;
    private Integer FieldGoalsMade;
    private Integer FreeThrowsMade;
    private Integer ThreePointsThrowsMade;

    public PlayerPoints() {
    }

    public PlayerPoints(String name, Integer season, Integer fieldGoalsMade, Integer freeThrowsMade, Integer threePointsThrowsMade) {
        this.name = name;
        this.season = season;
        FieldGoalsMade = fieldGoalsMade;
        FreeThrowsMade = freeThrowsMade;
        ThreePointsThrowsMade = threePointsThrowsMade;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getSeason() {
        return season;
    }

    public void setSeason(Integer season) {
        this.season = season;
    }

    public Integer getFieldGoalsMade() {
        return FieldGoalsMade;
    }

    public void setFieldGoalsMade(Integer fieldGoalsMade) {
        FieldGoalsMade = fieldGoalsMade;
    }

    public Integer getFreeThrowsMade() {
        return FreeThrowsMade;
    }

    public void setFreeThrowsMade(Integer freeThrowsMade) {
        FreeThrowsMade = freeThrowsMade;
    }

    public Integer getThreePointsThrowsMade() {
        return ThreePointsThrowsMade;
    }

    public void setThreePointsThrowsMade(Integer threePointsThrowsMade) {
        ThreePointsThrowsMade = threePointsThrowsMade;
    }
}
