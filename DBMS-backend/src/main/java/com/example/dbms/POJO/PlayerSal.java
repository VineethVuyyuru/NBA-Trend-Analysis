package com.example.dbms.POJO;

import org.springframework.stereotype.Repository;

@Repository
public class PlayerSal {
    private String name;
    private Integer year;
    private Integer points;
    private Integer salary;

    public PlayerSal() {
    }

    public PlayerSal(String name, Integer year, Integer points, Integer salary) {
        this.name = name;
        this.year = year;
        this.points = points;
        this.salary = salary;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }

    public Integer getSalary() {
        return salary;
    }

    public void setSalary(Integer salary) {
        this.salary = salary;
    }
}
