package com.example.dbms.project.query;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;


@Service
public class QueryService {
    
    @Autowired
    private JdbcTemplate jdbcTem;

    // public List<Players> getPlayers(){
    //     String sql = "SELECT name FROM Players WHERE rownum<20";
    //     return jdbcTem.query(sql, new BeanPropertyRowMapper(Players.class, false));
    // }

}
