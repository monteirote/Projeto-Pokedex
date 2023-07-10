package com.vinicius.pokedex.model;

public class ListObject {

    private String name;

    private String urlSprite;

    private int pkdxNumber;

    private PokemonTypes[] types;

    public String getName() {
        return name;
    }

    public String getUrl() {
        return urlSprite;
    }

    public void setUrl(String url) {
        this.urlSprite = url;
    }

    public void setPkdxNumber(int pkdxNumber) {
        this.pkdxNumber = pkdxNumber;
    }

    public int getPkdxNumber() {
        return pkdxNumber;
    }

    public PokemonTypes[] getTypes() {
        return types;
    }

    public void setTypes(PokemonTypes[] types) {
        this.types = types;
    }
    
}
