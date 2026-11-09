describe('Function', function (){
    it("Should declare function", function(){
        // function declaration
        function sayHello(name:string) : string{ 
            return `Hello ${name}`;
        }
        
        expect(sayHello("Bima")).toBe("Hello Bima");

        function printHello(name:string) : void{
            console.info(`Hello ${name}`);
        }

        printHello("Bima"); // void function tidak mengembalikan nilai, sehingga tidak bisa menggunakan expect untuk melakukan assertion
    });

    it("Should declare function with default parameter", function(){
        function parameterDefault(name:string = "Bimo") : string{
            return `Hello ${name}`;
        }

        expect(parameterDefault()).toBe("Hello Bimo");
        expect(parameterDefault("Budi")).toBe("Hello Budi");

        console.info(parameterDefault());
    });

    it("Should declare function with rest parameter", function(){
        interface SumFunction {
            (...values: number[]): number;
        }
        
        // rest parameter adalah parameter yang bisa menerima banyak nilai, sehingga nilainya akan dikumpulkan menjadi sebuah array. Rest parameter ditandai dengan tanda titik tiga (...) sebelum nama parameter. Rest parameter hanya bisa diletakkan di akhir parameter list, sehingga jika ada parameter yang bersifat rest maka harus diletakkan di akhir parameter list.
        // function sum(...values: number[]): number{
        const sum: SumFunction = (...values: number[]): number => {
            let total = 0;
            for(const value of values){
                total += value;
            }

            return total;
        };

        expect(sum(1, 2, 3, 4, 5)).toBe(15);
        console.info(sum(1, 2, 3, 4, 5));
    });

    it("Should declare function with optional parameter", function(){
        function sayHello(firstName: string, lastName?:string ): string {
            if(lastName){
                return `Hello ${firstName} ${lastName}`;
            }else{
                return `Hello ${firstName}`;
            }
        }

        expect(sayHello("Bima")).toBe("Hello Bima");
        expect(sayHello("Bima", "Natawijaya")).toBe("Hello Bima Natawijaya");
    });

    it("should support function overloading", function(){
        function callMe(value: number): number;
        function callMe(value: string): string;
        function callMe(value: any): any{
            if(typeof value === "string"){
                return value.toUpperCase();
            }else if(typeof value === "number"){
                return value * 10;
            }
        }

        expect(callMe(10)).toBe(100);
        expect(callMe("Hello")).toBe("HELLO");
    });

    it("should support function as paramter", function(){
        function sayHello(name: string, filter: (name:string) => string) : string{
            return `Hello ${filter(name)}`;
        }

        function toUpper(name:string): string{
            return name.toUpperCase();
        }

        expect(sayHello("Bima", toUpper)).toBe("Hello BIMA");

        expect(sayHello("Bima", function(name: string): string{
            return name.toUpperCase();
        })).toBe("Hello BIMA");

        // dengan arrow function
        expect(sayHello("Dwi", (name: string) : string =>  name.toLowerCase())).toBe("Hello dwi");
    });

});