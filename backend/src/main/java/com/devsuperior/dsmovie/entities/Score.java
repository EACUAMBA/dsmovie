package com.devsuperior.dsmovie.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tb_score")
public class Score {

    @EmbeddedId
    private ScorePK scorePK = new ScorePK();
    private Double value;


    public Score() {
    }

    public Score(ScorePK scorePK, Double value) {
        this.scorePK = scorePK;
        this.value = value;
    }

    public ScorePK getScorePK() {
        return scorePK;
    }

    public void setScorePK(ScorePK scorePK) {
        this.scorePK = scorePK;
    }

    public User getUser(){
        return this.scorePK.getUser();
    }

    public void setMovie(Movie movie){
        this.scorePK.setMovie(movie);
    }

    public Movie getMovie(){
        return this.scorePK.getMovie();
    }

    public void setUser(User user){
        this.scorePK.setUser(user);
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }
}
