package com.vinicius.pokedex.services;

import java.util.Collections;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.vinicius.pokedex.model.ListObject;
import com.vinicius.pokedex.model.PokemonList;
import com.vinicius.pokedex.model.PokemonModel;

@Service
public class PokedexService {

  String apiUrl = "https://pokeapi.co/api/v2/pokemon/";

  public PokemonModel getPokemonDetailsByName(String pokemonName) {
    RestTemplate restTemplate = new RestTemplate();
    return restTemplate.getForObject(apiUrl + pokemonName, PokemonModel.class);
  }

  public PokemonModel getPokemonDetailsById(int number) {
     RestTemplate restTemplate = new RestTemplate();
    return restTemplate.getForObject(apiUrl + number, PokemonModel.class);
  }

  public List<ListObject> getAllPokemons() {
    RestTemplate restTemplate = new RestTemplate();
    ResponseEntity<PokemonList> response = restTemplate.getForEntity(apiUrl + "?limit=1010", PokemonList.class);
    if (response.getStatusCode().is2xxSuccessful()) {
      PokemonList pokemonList = response.getBody();
      if (pokemonList != null) {
        return pokemonList.getResults();
      }
    }
    return Collections.emptyList();
  }
}
