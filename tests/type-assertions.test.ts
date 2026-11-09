import type { Person } from "../src/employee";

describe("Type_Assertions", function(){
    // Type assertions digunakan untuk memberitahu TypeScript bahwa kita yakin dengan tipe data dari suatu variabel, sehingga kita dapat mengakses properti atau metode yang sesuai dengan tipe data tersebut. Namun, perlu diingat bahwa type assertions tidak melakukan pemeriksaan tipe data pada runtime, sehingga kita harus berhati-hati dalam penggunaannya.
    // contoh sederhana dari type assertions adalah ketika kita memiliki sebuah variabel dengan tipe data any, dan kita ingin mengakses properti atau metode yang sesuai dengan tipe data tertentu. Kita dapat menggunakan type assertions untuk memberitahu TypeScript bahwa kita yakin dengan tipe data dari variabel tersebut.
    it("Should declare type assertions", function(){
        const person : any = {
            name : "Bima",
            age : 20
        }

        const person2: Person = person as Person;
        // console.info(person2.age); // error karena property age tidak ada pada interface Person, sehingga TypeScript akan memberikan peringatan bahwa property age tidak ada pada tipe data Person
        console.info(person2.name); // property name ada pada interface Person, sehingga tidak ada error
    });
});