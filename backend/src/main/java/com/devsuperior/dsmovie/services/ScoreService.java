package com.devsuperior.dsmovie.services;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.dto.ScoreDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.entities.Score;
import com.devsuperior.dsmovie.entities.User;
import com.devsuperior.dsmovie.repositories.MovieRepository;
import com.devsuperior.dsmovie.repositories.ScoreRepository;
import com.devsuperior.dsmovie.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.Set;

@Service
public class ScoreService {
    private final ScoreRepository scoreRepository;
    private final UserRepository userRepository;
    private final MovieRepository movieRepository;

    @Autowired
    public ScoreService(ScoreRepository scoreRepository, UserRepository userRepository, MovieRepository movieRepository) {
        this.scoreRepository = scoreRepository;
        this.userRepository = userRepository;
        this.movieRepository = movieRepository;
    }

    @Transactional
    public MovieDTO saveScore(ScoreDTO scoreDTO){
        User user = this.userRepository.findByEmail(scoreDTO.getEmail());
        if(user == null){
            user = new User();
            user.setEmail(scoreDTO.getEmail());
            this.userRepository.saveAndFlush(user);
        }

        Optional<Movie> movie = this.movieRepository.findById(scoreDTO.getMovieId());

        Score score = new Score();
        score.setMovie(movie.get());
        score.setUser(user);
        score.setValue(scoreDTO.getScore());

        this.scoreRepository.saveAndFlush(score);

        Set<Score> scores = movie.get().getScoreSet();

        Double sum = 0D;
        for (Score s : scores){
            sum += s.getValue();
        }
        Double average = sum / scores.size();

        movie.get().setScore(average);
        movie.get().setCount(scores.size());

        Movie movie1 = this.movieRepository.save(movie.get());

        return new MovieDTO(movie1);
    }
}
