import { CustomerType, type Customer } from "../src/enum";


describe("Enum", function () {
    it("Should declare enum", function () {
        const customer : Customer = {
            id : 1,
            name : "Bima",
            type : CustomerType.REGULAR // implementasi enum CustomerType pada property type, sehingga property type hanya bisa menggunakan nilai dari enum CustomerType
        }
        
        console.info(customer);
    })
});