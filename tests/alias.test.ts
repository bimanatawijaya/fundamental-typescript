import type { Category, Product, ID } from "../src/type-alias";

describe("Type Alias", function(){
    it("Should declare type alias", function(){
        const category : Category = {
            id : "1",
            name : "Food",
            description : "Food is a type of food that is consumed by humans" // property description bersifat optional, sehingga tidak wajib diisi
        }

        const product : Product = {
            id : "1",
            name : "Nasi Goreng",
            price : 15000,
            category : category
            // tidak mengisi property description, karena property description bersifat optional, sehingga tidak wajib diisi
        }

        // tidak bisa menambahkan property baru pada object yang sudah dideklarasikan dengan type alias, karena type alias hanya mendefinisikan tipe data dari object tersebut
        // type yang sudah di deklarasikan ada di fle src/type-alias.ts, sehingga tidak bisa menambahkan property baru pada object yang sudah dideklarasikan dengan type alias

        // product.tax = "Nasi Goreng is a traditional Indonesian fried rice";

        console.info(category);
        console.info(product);
    });
})