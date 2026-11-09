describe('Object', function (){
    it("Should declare object", function(){
        // tipe data object adalah tipe data yang bisa menampung banyak tipe data, baik itu string, number, boolean, array, function, dll
        // lebih disarankan pakay type alias untuk mendeklarasikan tipe data object, karena lebih mudah dibaca dan dipahami
        // kecuali hanya untuk object yang sederhana, maka bisa langsung mendeklarasikan tipe data object tanpa menggunakan type alias

        const person : {id : number, name : string, hobbies? : string[]} = {
            id : 1, 
            name : "Bima Natawijaya"
        }

        console.info(person);
        person.id = 2;
        person.name = "Dwi Natawijaya";
        person.hobbies = ["reading", "swimming"]; // property hobbies bersifat optional, sehingga tidak wajib diisi

        console.info(person);
    });
});