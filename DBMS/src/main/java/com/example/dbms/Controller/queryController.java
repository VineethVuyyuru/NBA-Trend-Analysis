package com.example.dbms.Controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.dbms.Service.queryService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.dbms.POJO.Players;
import com.example.dbms.POJO.PlayerPoints;

@RestController
public class queryController {

    @Autowired
    private queryService queryservice;

    @RequestMapping("/home")
    public String homePage(){
        return queryservice.homePage();
    }

    @RequestMapping("/getPlayers/{name}")
    public List<Players> getPlayers(@PathVariable String name){
        return queryservice.getPlayers(name);
    }

    @RequestMapping("/query1/{name}")
    public List<PlayerPoints> query1(@PathVariable String name){
        return queryservice.query1(name);
    }
}
