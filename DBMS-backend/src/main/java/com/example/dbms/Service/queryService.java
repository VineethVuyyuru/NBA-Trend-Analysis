package com.example.dbms.Service;
import java.util.List;

import com.example.dbms.POJO.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.dbms.Repository.queryRepository;

@Service
public class queryService {

    @Autowired
    private queryRepository repo;

    public String homePage(){
        String page = "Hello! User";
        return page;
    }

    public List<Players> getPlayers(String name){
        return repo.getPlayersOnSearch(name);
    }

    public List<Count> getTupleCount(){
        return repo.getTupleCount();
    }
    public List<Team> getTeams(){
        return repo.getTeams();
    }
    public List<PlayerSal> query1(String name){
        return repo.query1(name);
    }

    public List<PerfCompare> query2(String name){
        return repo.query2(name);
    }
    public List<PlayerPoints> query3(String name){
        return repo.query3(name);
    }

    public List<PointsAgainst> query4(String name){
        return repo.query4(name);
    }

    public List<eFGMetric> query5(String team1, String team2){
        return repo.query5(team1, team2);
    }

}
