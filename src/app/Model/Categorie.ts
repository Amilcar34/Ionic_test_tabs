export class Categorie{
    public id : string;
    public children_categories : Categorie[];
    public path_from_root : Categorie[];
}