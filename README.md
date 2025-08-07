# Competitive-Pokedex

The competitive pokedex helps you discover new pokemons and inform your team building decision through useful stats.

## About  
'
The Competitive-Pokedex provides  
1)An index system for accessing pokemon information  
2)A team builder that shows you the relative weakness and resistance of your team  
3)Ranking of pokemons in terms of their base stats(hp, attack, defense, special)  
4)Individual comparison option between pokemons  

Competitive-Pokedex gathers its information on pokemons through api calls to https://pokeapi.co/

## Feature screenshots
Pokedex list
![pokedx](./my_app/public/assets/pages/pokedex.gif)

## How to use(user)
site: [competitivePokedex](https://competitive-pokedex-nu.vercel.app/)

## How to use(developer)
switch to my_app directory   
```bash
cd my_app/
```  
run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

```



## plan
-pokedex page
:white_check_mark: individual pokemon display(names, sprite, base_stat, index change button)  
⬜ pokemon search bar  
⬜ sidebar displaying an user's team composition  
  
-team builder page  
⬜ sidebar displaying an user's team composition  
⬜ option to show team defense and weakness coverage  
  
-backend  
⬜ user database(team composition, profile picture, name)  
⬜ user login and authentication  



## issues
:white_check_mark: sometimes pokemon description is in a language other than English   
⬜ redering many pokemons causes long loading time  
