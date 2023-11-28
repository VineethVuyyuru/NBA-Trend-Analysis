package com.example.dbms.POJO;

import org.springframework.stereotype.Repository;

@Repository
public class Team {
    private String teamName;

    private String fullName;

    public Team() {
    }

    public Team(String teamName, String fullName) {
        this.teamName = teamName;
        this.fullName = fullName;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }
}
