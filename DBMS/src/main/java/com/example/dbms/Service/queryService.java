package com.example.dbms.Service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.dbms.Repository.queryRepository;
import com.example.dbms.POJO.Players;
import com.example.dbms.POJO.PlayerPoints;

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

    public List<PlayerPoints> query1(String name){
        return repo.query1(name);
    }

}
