package com.example.dbms.Repository;

import com.example.dbms.POJO.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.BadSqlGrammarException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class queryRepository {

    @Autowired
    private JdbcTemplate connection;
    public String sql;

    public List<Players> getPlayers(){
        sql = "SELECT name FROM \"NAGAAKHIL.BELIDE\".Players WHERE rownum<20";
        return connection.query(sql, new BeanPropertyRowMapper(Players.class, false));
    }

    public List<Team> getTeams(){
        sql="SELECT name , fullName  FROM \"NAGAAKHIL.BELIDE\".Teams";
        List<Team> temp = connection.query(sql, new BeanPropertyRowMapper(Team.class));
        return temp;
    }

    public List<Count> getTupleCount(){
        try {
            sql="SELECT SUM(NUMTUPLES) AS total_count from (\n" +
                    "select count(1) AS NUMTUPLES from \"NAGAAKHIL.BELIDE\".Players \n" +
                    "    union all select count(1) from \"NAGAAKHIL.BELIDE\".teams \n" +
                    "    union all select count(1) from \"NAGAAKHIL.BELIDE\".salaries \n" +
                    "    union all select count(1) from \"NAGAAKHIL.BELIDE\".games\n" +
                    "    union all select count(1) from \"NAGAAKHIL.BELIDE\".games_details\n" +
                    "    union all select count(1) from \"NAGAAKHIL.BELIDE\".playsFor)";
            return connection.query(sql, new BeanPropertyRowMapper(Count.class, false));
        } catch (BadSqlGrammarException e) {
            System.out.println(e.getSQLException().getMessage());
        }
        return null;
    }

    public List<Players> getPlayersOnSearch(String name){
        String nameWithWildcards = "%" + name + "%";
        sql = "SELECT name FROM \"NAGAAKHIL.BELIDE\".Players WHERE UPPER(name) LIKE UPPER(?) AND rownum<10";
        Object[] params = new Object[] { nameWithWildcards.toUpperCase() };
        return connection.query(sql, params, new BeanPropertyRowMapper<>(Players.class, false));
    }

    public List<PlayerSal> query1(String name){
        sql="SELECT A.year, B.points, A.salary\n" +
                "FROM \n" +
                "    (SELECT p.name, s.salary , year\n" +
                "    FROM \"NAGAAKHIL.BELIDE\".Players p\n" +
                "    INNER JOIN \"NAGAAKHIL.BELIDE\".Salaries s ON s.playerID=p.playerID\n" +
                "    WHERE p.name = ? ) A\n" +
                "INNER JOIN \n" +
                "    (select  SUM(total_points) AS Points, season, p.name\n" +
                "    FROM \"NAGAAKHIL.BELIDE\".Players p\n" +
                "    INNER JOIN \"NAGAAKHIL.BELIDE\".games_details gd ON gd.playerID=p.playerID\n" +
                "    INNER JOIN \"NAGAAKHIL.BELIDE\".Games g ON g.gameID=gd.gameID\n" +
                "    WHERE p.name = ? \n" +
                "    GROUP BY season, p.name) B\n" +
                "ON A.name=B.name AND A.year=B.season";
        Object[] params = new Object[] { name, name };
        return connection.query(sql, params, new BeanPropertyRowMapper(PlayerSal.class, false));
    }

    public List<PerfCompare> query2(String name, String type){
        sql="WITH t1 AS (\n" +
                "SELECT playerid, ROUND(AVG(" + type + "), 4) AS pseasonavg, season FROM (\n" +
                "SELECT playerid, gd.gameid, " + type + ", season FROM \"NAGAAKHIL.BELIDE\".games_details gd\n" +
                "INNER JOIN \"NAGAAKHIL.BELIDE\".games g ON gd.gameid = g.gameid\n" +
                "WHERE " + type + " IS NOT NULL)\n" +
                "GROUP BY playerid, season)\n" +
                "\n" +
                "SELECT savg AS points, topavg AS avgOfTop, psavg.season AS season FROM (\n" +
                "SELECT p1.playerid, name, AVG(gd1."+type+") AS savg, season FROM \"NAGAAKHIL.BELIDE\".players p1\n" +
                "INNER JOIN \"NAGAAKHIL.BELIDE\".games_details gd1 ON p1.playerid = gd1.playerid\n" +
                "INNER JOIN \"NAGAAKHIL.BELIDE\".games g1 ON g1.gameid = gd1.gameid\n" +
                "WHERE p1.name = ? AND " + type + " IS NOT NULL\n" +
                "GROUP BY season, p1.playerid, name) psavg\n" +
                "INNER JOIN (\n" +
                "SELECT AVG(pseasonavg) AS topavg, season FROM\n" +
                "(SELECT playerid, pseasonavg, season, RANK() OVER (PARTITION BY season ORDER BY pseasonavg DESC) rank\n" +
                "FROM t1)\n" +
                "WHERE rank <= 5\n" +
                "GROUP BY season) t5avg\n" +
                "ON psavg.season = t5avg.season\n" +
                "ORDER BY psavg.season";
        Object[] params = new Object[] { name };
        return connection.query(sql, params, new BeanPropertyRowMapper(PerfCompare.class, false));
    }

    public List<PlayerPoints> query3(String name){
        sql = "SELECT p.name, season, SUM(FieldGoalsMade) AS FieldGoalsMade,\n" + //
                "SUM(FreeThrowsMade) AS FreeThrowsMade, SUM(ThreePointsThrowsMade) AS ThreePointsThrowsMade\n" + //
                "FROM \"NAGAAKHIL.BELIDE\".Players p\n" + //
                "INNER JOIN \"NAGAAKHIL.BELIDE\".games_details gd ON gd.playerID=p.playerID\n" + //
                "INNER JOIN \"NAGAAKHIL.BELIDE\".games g ON g.gameID=gd.gameID AND gd.teamID<>g.awayTeamID\n" + //
                "WHERE p.name = ? \n" + //
                "GROUP BY p.name, season\n" + //
                "ORDER BY 2";
        Object[] params = new Object[] { name };
        return connection.query(sql, params, new BeanPropertyRowMapper(PlayerPoints.class, false));
    }

    public List<PointsAgainst> query4(String name){
        sql="SELECT season, opponent AS team, avgpoints AS points, high_rank, low_rank \n" +
                "FROM(\n" +
                "    SELECT name, season, opponent, avgpoints,\n" +
                "    ROW_NUMBER() OVER (PARTITION BY season ORDER BY avgpoints DESC) AS high_rank,\n" +
                "    ROW_NUMBER() OVER (PARTITION BY season ORDER BY avgpoints ASC) AS low_rank\n" +
                "    FROM\n" +
                "        (SELECT p.name, g.season,t.name AS opponent, AVG(total_points) AS avgpoints\n" +
                "        FROM \"NAGAAKHIL.BELIDE\".Players p\n" +
                "        INNER JOIN \"NAGAAKHIL.BELIDE\".games_details gd ON gd.playerID=p.playerID\n" +
                "        INNER JOIN \"NAGAAKHIL.BELIDE\".Games g ON g.gameID=gd.gameID\n" +
                "        INNER JOIN \"NAGAAKHIL.BELIDE\".Teams t ON t.teamID=g.awayteamID\n" +
                "        WHERE p.name = ? AND gd.teamID<>g.awayteamID\n" +
                "        GROUP BY p.name, g.season, t.name)\n" +
                "    )\n" +
                "WHERE high_rank=1 or low_rank=1";
        Object[] params = new Object[] { name };
        List<PointsAgainst> temp = connection.query(sql, params, new BeanPropertyRowMapper(PointsAgainst.class, false));
        return temp;
    }

    public List<eFGMetric> query5(String team1, String team2){
        sql="WITH team_points AS (\n" +
                "SELECT gameid, teamid, ((FGM + 0.5 * TPM)/FGA) AS efg\n" +
                "FROM (\n" +
                "        SELECT gameid, teamid, SUM(fieldgoalsmade) AS FGM, SUM(threepointsthrowsmade) AS TPM, sum(fieldgoalsattempted) AS FGA \n" +
                "        FROM \"NAGAAKHIL.BELIDE\".games_details\n" +
                "        GROUP BY gameid, teamid\n" +
                "        HAVING SUM(fieldgoalsattempted) <> 0)),\n" +
                "        \n" +
                "tm1 AS (        \n" +
                "            SELECT t1.name AS team1, AVG(tp1.efg) AS team1_efg, g1.season AS season FROM team_points tp1\n" +
                "            INNER JOIN \"NAGAAKHIL.BELIDE\".games g1\n" +
                "            ON tp1.gameid = g1.gameid\n" +
                "            INNER JOIN \"NAGAAKHIL.BELIDE\".teams t1\n" +
                "            ON tp1.teamid = t1.teamid\n" +
                "            WHERE t1.name = ? \n" +
                "            GROUP BY g1.season, t1.name\n" +
                "),\n" +
                "tm2 AS (\n" +
                "            SELECT t2.name AS team2, AVG(tp2.efg) AS team2_efg, g2.season AS season FROM team_points tp2\n" +
                "            INNER JOIN \"NAGAAKHIL.BELIDE\".games g2\n" +
                "            ON tp2.gameid = g2.gameid\n" +
                "            INNER JOIN \"NAGAAKHIL.BELIDE\".teams t2\n" +
                "            ON tp2.teamid = t2.teamid\n" +
                "            WHERE t2.name = ? \n" +
                "            GROUP BY g2.season, t2.name\n" +
                ")\n" +
                "select tm1.season, team1, team1_efg, team2, team2_efg AS team2_score from tm1\n" +
                "inner join tm2\n" +
                "ON tm1.season = tm2.season\n"+
                "ORDER BY 1";
        Object[] params = new Object[] { team1, team2 };
        List<eFGMetric> temp = connection.query(sql, params, new BeanPropertyRowMapper(eFGMetric.class, false));
        return temp;
    }

    public List<HeightDiv> query6(){
        sql="WITH PlayerHeightSets AS (\n" +
                "  SELECT\n" +
                "    p.playerID,\n" +
                "    AVG(height) AS avg_height,\n" +
                "    NTILE(5) OVER (ORDER BY AVG(height)) AS height_set\n" +
                "  FROM \"NAGAAKHIL.BELIDE\".Players p\n" +
                "  WHERE height IS NOT NULL\n" +
                "  GROUP BY p.playerID\n" +
                "),\n" +
                "PlayerPerformance AS (\n" +
                "  SELECT\n" +
                "    phs.playerID,\n" +
                "    phs.height_set,\n" +
                "    g.season,\n" +
                "    AVG(COALESCE(gd.reb, 0)) AS avg_rebounds,\n" +
                "    AVG(COALESCE(gd.stl, 0)) AS avg_steals,\n" +
                "    AVG(COALESCE(gd.blk, 0)) AS avg_blocked_shots,\n" +
                "    AVG(COALESCE(gd.FGM, 0)) AS avg_field_goals_made,\n" +
                "    AVG(COALESCE(gd.PTS, 0)) AS avg_total_points\n" +
                "  FROM \"NAGAAKHIL.BELIDE\".PlayerHeightSets phs\n" +
                "  JOIN \"NAGAAKHIL.BELIDE\".Players p ON phs.playerID = p.playerID\n" +
                "  JOIN \"NAGAAKHIL.BELIDE\".game_details gd ON p.playerID = gd.player_ID\n" +
                "  JOIN \"NAGAAKHIL.BELIDE\".games g ON g.gameID = gd.game_ID\n" +
                "  GROUP BY phs.playerID, phs.height_set, g.season\n" +
                "),\n" +
                "HeightSetRanges AS (\n" +
                "  SELECT\n" +
                "    height_set,\n" +
                "    MIN(avg_height) AS min_height,\n" +
                "    MAX(avg_height) AS max_height\n" +
                "  FROM PlayerHeightSets\n" +
                "  GROUP BY height_set\n" +
                ")\n" +
                "SELECT\n" +
                "  pp.height_set,\n" +
                "  pp.season,\n" +
                "  ROUND(AVG(pp.avg_rebounds), 5) AS avg_rebounds,\n" +
                "  ROUND(AVG(pp.avg_steals), 5) AS avg_steals,\n" +
                "  ROUND(AVG(pp.avg_blocked_shots), 5) AS avg_blocked_shots,\n" +
                "  ROUND(AVG(pp.avg_field_goals_made), 5) AS avg_field_goals_made,\n" +
                "  ROUND(AVG(pp.avg_total_points), 5) AS avg_total_points,\n" +
                "  hr.min_height,\n" +
                "  hr.max_height\n" +
                "FROM PlayerPerformance pp\n" +
                "JOIN HeightSetRanges hr ON pp.height_set = hr.height_set\n" +
                "GROUP BY pp.height_set, pp.season, hr.min_height, hr.max_height\n" +
                "ORDER BY pp.season, pp.height_set";
        List<HeightDiv> temp = connection.query(sql, new BeanPropertyRowMapper(HeightDiv.class, false));
        return temp;
    }
}
