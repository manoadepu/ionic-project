import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id:'r1',
      title:'Biryani',
      imageUrl:'https://www.africanbites.com/wp-content/uploads/2018/04/IMG_9881.jpg',
      ingredients: ['Basmat rice', 'chicken', 'spices']
    },
    {
      id:'r2',
      title:'Veg Pulav',
      imageUrl:'https://www.africanbites.com/wp-content/uploads/2018/04/IMG_9881.jpg',
      ingredients: ['Basmat rice', 'Potatoes', 'spices']
    }
  ];
  constructor() { }

  getAllRecipes(){
    return [...this.recipes]
  }

  getRecipe(recipeId: string){
    return {
    ...this.recipes.find(recipe =>{
      return recipe.id ===recipeId;
    })
  }}

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id ===recipeId;
    })
  }
}
