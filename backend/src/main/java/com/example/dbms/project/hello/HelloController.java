package com.example.dbms.project.hello;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    
    @Autowired
    private HelloService helloService; 

    // @RequestMapping("/hello/{name}")
    // public String hello(@PathVariable String name){
    //     return helloService.greeting(name);
    // }

    @RequestMapping("/players")
    public List<Players> getPlayers(){
        return helloService.getPlayer();
    }

    @RequestMapping("/data")
    public List<WCountry> getData(){
        return helloService.getCountries();
    }
}
