package com.example.dbms.Controller;
import java.util.List;

import com.example.dbms.POJO.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.dbms.Service.queryService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class queryController {

    @Autowired
    private queryService queryservice;

    @RequestMapping("/getCount")
    public List<Count> getTupleCount(){
        return queryservice.getTupleCount();
    }
    @RequestMapping("/home")
    public String homePage(){
        return queryservice.homePage();
    }

    @RequestMapping("/getPlayers/{name}")
    public List<Players> getPlayers(@PathVariable String name){
        return queryservice.getPlayers(name);
    }

    @RequestMapping("/teams")
    public List<Team> getTeams(){
        return queryservice.getTeams();
    }
    @RequestMapping("/query1/{name}")
    public List<PlayerSal> query1(@PathVariable String name){
        return queryservice.query1(name);
    }

    @RequestMapping("/query2/{name}")
    public List<PerfCompare> query2(@PathVariable String name){
        return queryservice.query2(name);
    }

    @RequestMapping("/query3/{name}")
    public List<PlayerPoints> query3(@PathVariable String name){
        return queryservice.query3(name);
    }

    @RequestMapping("/query4/{name}")
    public List<PointsAgainst> query4(@PathVariable String name){
        return queryservice.query4(name);
    }

    @RequestMapping("/query5/{team1}/{team2}")
    public List<eFGMetric> query5(@PathVariable String team1, @PathVariable String team2){
        return queryservice.query5(team1, team2);
    }
}
