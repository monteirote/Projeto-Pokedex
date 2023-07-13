package com.vinicius.pokedex.services;

import java.util.Collections;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.vinicius.pokedex.model.ListObject;
import com.vinicius.pokedex.model.OnlyTypesPokemon;
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

  public List<ListObject> getAllPokemons(int page) {
    RestTemplate restTemplate = new RestTemplate();
    int offset = (page - 1) * 20;
    int limit = 20;
    if (page == 51) limit = 10;
    ResponseEntity<PokemonList> response = restTemplate.getForEntity(apiUrl + "?offset=" + offset + "&limit=" + limit, PokemonList.class);
    if (response.getStatusCode().is2xxSuccessful()) {
      PokemonList pokemonList = response.getBody();
      if (pokemonList != null) {
        return pokemonList.getResults();
      }
    }
    return Collections.emptyList();
  }

  public OnlyTypesPokemon getTypesByName(int name) {
    RestTemplate restTemplate = new RestTemplate();
    ResponseEntity<OnlyTypesPokemon> response = restTemplate.getForEntity(apiUrl + name, OnlyTypesPokemon.class);    
    return response.getBody();
  }

}
