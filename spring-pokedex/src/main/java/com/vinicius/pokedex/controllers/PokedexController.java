package com.vinicius.pokedex.controllers;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vinicius.pokedex.model.ListObject;
import com.vinicius.pokedex.model.OnlyTypesPokemon;
import com.vinicius.pokedex.model.PokemonModel;
import com.vinicius.pokedex.services.PokedexService;

@RestController
@RequestMapping("/api/pokemon")
public class PokedexController {
    
    int pdxNumber = 1;

    String templateUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

    @Autowired
    private PokedexService pokedexService;

    @GetMapping("/{name}")
    public PokemonModel getPokemonDetailsByName(@PathVariable String name) {
        PokemonModel pkm = pokedexService.getPokemonDetailsByName(name);
        pkm.setUrlSprite(templateUrl + pkm.getPokedexNumber() + ".png");
        return pkm;
    }

    @GetMapping("/id/{number}")
    public PokemonModel getPokemonDetailsById(@PathVariable int number) {
        PokemonModel pkm = pokedexService.getPokemonDetailsById(number);
        pkm.setUrlSprite(templateUrl + pkm.getPokedexNumber() + ".png");
        return pkm;
    }

    @GetMapping("/page/{page}")
    public ListObject[] getAllPokemons(@PathVariable int page) {
        List<ListObject> listaExibida = new ArrayList<>();
        pdxNumber += 20 * (page - 1);
            pokedexService.getAllPokemons(page).forEach(data -> {
                data.setPkdxNumber(pdxNumber);
                data.setUrl(templateUrl + pdxNumber + ".png");
                data.setTypes(getTypesById(pdxNumber).getTypes());
                listaExibida.add(data);
                pdxNumber++;
            });
        
        pdxNumber = 1;
        return listaExibida.toArray(new ListObject[0]);
    }

    @GetMapping("/types/{id}")
    public OnlyTypesPokemon getTypesById(@PathVariable int id) {
        return pokedexService.getTypesByName(id);
    }



}

    

