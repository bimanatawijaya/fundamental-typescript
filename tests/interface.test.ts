import type { Employee, Manager, Person } from "../src/employee";
import type { Seller, SellerWithReadonly, StringDictionary } from "../src/seller";

describe("Interface", function () {
    it("Should declare interface", function () {
        const seller : Seller = {
            id : 1,
            name : "Bima",
            email : "bima@example.com"
        }

        console.info(seller);
    });

    it("Should implement interface with readonly properties", function () {
        const seller : SellerWithReadonly = {
            id : 1,
            name : "Bima",
            email : "bima@example.com",
            nib : "1234567890",
            npwp : "0987654321"
        };

        seller.name = "Bima Natawijaya"; // property name bisa diubah nilainya karena tidak bersifat readonly
        /* seller.nib = "1111111111";  error karena property nib bersifat readonly, sehingga tidak bisa diubah nilainya setelah diinisialisasi */

        console.info(seller);
    });

    it("Should support function interface", function(){

        // function interface adalah interface yang digunakan untuk mendeklarasikan tipe data function, sehingga function yang dideklarasikan harus sesuai dengan tipe data yang telah ditentukan pada interface tersebut
        interface AddFunction {
            (value1: number, value2:number): number;
        }
        
        // function add harus sesuai dengan tipe data yang telah ditentukan pada interface AddFunction, sehingga function add harus memiliki 2 parameter dengan tipe data number dan mengembalikan nilai dengan tipe data number
        const add : AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        };

        expect(add(5, 3)).toBe(8);
        console.info(add(5, 3));
    });

    it("Should support indexable interface", function(){
        const dictionary : StringDictionary = {
            "name" : "Bima Natawijaya",
            "email" : "bima@example.com",
            "address" : "Indonesia"
        };

        expect(dictionary["name"]).toBe("Bima Natawijaya");
        expect(dictionary["email"]).toBe("bima@example.com");
        expect(dictionary["address"]).toBe("Indonesia");
        console.info(dictionary);
    });

    it("Should support extend interface", function(){
        // interface Manager extends Employee, sehingga interface Manager memiliki semua property yang ada pada interface Employee, ditambah dengan property numberOfEmployees yang hanya ada pada interface Manager
        const employee : Employee = {
            id : "E001",
            name : "Bima Natawijaya",
            email : "bima@example.com"
        };

        // property numberOfEmployees tidak bisa diakses pada interface Employee, sehingga tidak bisa diisi
        // karena extend interface hanya bisa menambahkan property baru pada interface yang telah ada, sehingga tidak bisa menghapus property yang telah ada pada interface yang telah ada
        const manager : Manager = {
            id : "M001",
            name : "Dwi Natawijaya",
            email : "dwi@example.com",
            numberOfEmployees : 10
        };

        console.info(employee);
        console.info(manager);       
    });

    it("Should support function in interface", function(){
        const person : Person = {
            name : "Bima Natawijaya",
            sayHello(name: string) : string {
                return `Hello ${name}, my name is ${this.name}`;
            }
        };

        console.info(person.sayHello("Dwi Natawijaya"));
    });

    it("should support intersection type with interface", function(){
        // intersection type adalah tipe data yang menggabungkan beberapa tipe data menjadi satu tipe data baru, sehingga tipe data baru tersebut memiliki semua property dari tipe data yang digabungkan
        interface HasName {
            name : string;
        };

        interface HasId {
            id : number;
        }

        type Domain = HasName & HasId;
        
        const domain : Domain = {
            name : "Bima Natawijaya",
            id : 1
        };

        console.info(domain);
    });
});