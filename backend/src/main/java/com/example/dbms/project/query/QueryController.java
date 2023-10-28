package com.example.dbms.project.query;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class QueryController {
    
    @Autowired
    private QueryService queryService;

    // @RequestMapping("/pla")
    // public List<Players> getPlayers(){
    //     return queryService.getPlayers();
    // }
}
