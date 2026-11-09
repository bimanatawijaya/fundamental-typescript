export type ID  = string | number; // type alias dengan union type, bisa menggunakan string atau number

export type Category = {
    id : ID; // implementasi type alias ID pada property id, sehingga property id bisa menggunakan string atau number
    name : string;
    description? : string; // property description bersifat optional, sehingga tidak wajib diisi
}

export type Product = {
    id : ID; // implementasi type alias ID pada property id, sehingga property id bisa menggunakan string atau number
    name : string;
    price : number;
    category : Category;
    description? : string; // property description bersifat optional, sehingga tidak wajib diisi
}
