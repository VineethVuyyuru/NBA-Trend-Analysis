package com.example.dbms.project.hello;


public class WCountry {
    private String name;
    private String capital;

    public WCountry(){

    }

    public WCountry(String name, String capital){
        this.name=name;
        this.capital=capital;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return "WCountry [name=" + name + ", capital=" + capital + "]";
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCapital(String capital) {
        this.capital = capital;
    }

    public String getCapital() {
        return capital;
    }

    
}
