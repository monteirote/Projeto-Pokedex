package com.vinicius.pokedex.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PokemonModel {
    
    private String name;

    @JsonProperty("id")
    private String pokedexNumber;

    private String urlSprite;

    private double weight;

    private PokemonTypes[] types;

    public void setUrlSprite(String urlSprite) {
        this.urlSprite = urlSprite;
    }

    public String getUrlSprite() {
        return urlSprite;
    }

    public String getName() {
        return name;
    }

    public String getPokedexNumber() {
        return pokedexNumber;
    }

    public double getWeight() {
        return weight;
    }

    public PokemonTypes[] getTypes() {
        return types;
    }

    public void setTypes(PokemonTypes[] types) {
        this.types = types;
    }




}
