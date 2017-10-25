import { Buy } from "../models/buy";


export class BuyListService{
    private buy: Buy[] = [];
    
    addMovie(title: string, type: string){
        this.buy.push(new Buy(title, type));
        console.log(this.buy);
    }

    addmovies(items: Buy[]){
        this.buy.push(...items);
    }

    getMovies(){
        return this.buy.slice();
    }



    removeMovie(index: number){
        this.buy.splice(index, 1);
    }

    removeMovieFromList(movie: Buy){
		const position = this.buy.findIndex((movieEl: Buy) => {
			return movieEl.title == movie.title;
		});
		this.buy.splice(position, 1);
    }
    

}