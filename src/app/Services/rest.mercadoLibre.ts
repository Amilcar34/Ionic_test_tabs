import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { Categorie  } from '../Model/Categorie';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'

const website = 'https://api.mercadolibre.com/';

@Injectable({
    providedIn: 'root'
})

export class MercadoLibreApi{

    constructor(private httpClient : HttpClient){}
    
    public getAllCategories() : Observable<Categorie[]> {
        return this.httpClient.get<Categorie[]>(website + 'sites/MLA/categories');    
    }

    public getCategories(idCategorie:string):Observable<Categorie>{
        return this.httpClient.get<Categorie>(website + 'categories/' + idCategorie);
    }

    public getSuggestedCategories(searchText : string) : Observable<Categorie>{
        return this.httpClient.get<Categorie>(website + 'sites/MLA/category_predictor/predict?title=' + searchText)
    }
}