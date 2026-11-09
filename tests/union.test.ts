describe('Union', function (){
    it("Should declare union", function(){
        let person : string | number = "Bima Natawijaya";
        person = 100;
        // person = true; // error karena tipe data boolean tidak termasuk dalam union type string | number

        console.info(person);        
    });

    it("Should declare union with typeof operator", function(){
        // fungsi dari union dengan typeof operator adalah untuk mengecek tipe data dari sebuah variabel, dan melakukan aksi sesuai dengan tipe data tersebut
        // karena uniion type bisa memiliki banyak tipe data, maka kita bisa menggunakan typeof operator untuk mengecek tipe data dari sebuah variabel, dan melakukan aksi sesuai dengan tipe data tersebut
        function process(value: string | number | boolean){
            if(typeof value === "string"){
                return value.toUpperCase();
            }else if(typeof value === "number"){
                return value + 2;
            }else{
                return !value;
            }
        }

        expect(process("Bima Natawijaya")).toBe('BIMA NATAWIJAYA');
        expect(process(100)).toBe(102);
        expect(process(true)).toBe(false);
    });
});