package com.example.dbms.Service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.dbms.Repository.queryRepository;
import com.example.dbms.POJO.Players;
import com.example.dbms.POJO.PlayerPoints;
import com.example.dbms.POJO.eFGMetric;
import com.example.dbms.POJO.PerfCompare;
import com.example.dbms.POJO.PointsAgainst;
import com.example.dbms.POJO.PlayerSal;

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
