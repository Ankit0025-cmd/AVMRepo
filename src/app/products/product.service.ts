import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { IProduct } from "./products";
import { catchError, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService{

    constructor(private http: HttpClient){}

    private _url:string = "./assets/data.json";

    getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._url)
                    .pipe(catchError(this.errorHandler));
    }
    errorHandler(error: HttpErrorResponse)
    {
        return throwError(error.message || "Server Error");
    }
}