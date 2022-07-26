//interface is nothing but a custom data type that we can define to create an object
export interface IProduct{
    productID: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}