package com.example.dbms.POJO;

import org.springframework.stereotype.Repository;

@Repository
public class Team {
    private String name;
    private String fullName;

    public Team() {
    }

    public Team(String teamName, String fullName) {
        this.name = teamName;
        this.fullName = fullName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }
}
