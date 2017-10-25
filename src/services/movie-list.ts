import { Ingredient } from "../models/ingredients";

export class MovieListService{
    private ingredients: Ingredient[] = [];
    
    addMovie(title: string, description: string, image: string, category: string){
        this.ingredients.push(new Ingredient(title, description, image, category));
        console.log(this.ingredients);
    }

    addmovies(items: Ingredient[]){
        this.ingredients.push(...items);
    }

    getMovies(){
        return this.ingredients.slice();
    }



    removeMovie(index: number){
        this.ingredients.splice(index, 1);
    }

    removeMovieFromList(movie: Ingredient){
		const position = this.ingredients.findIndex((movieEl: Ingredient) => {
			return movieEl.title == movie.title;
		});
		this.ingredients.splice(position, 1);
    }

    updateMovie(index: number,
                title: string,
                description: string,
                image: string,
                category: string){
                    this.ingredients[index] = new Ingredient(title, description, image, category);
                }
    

}