describe('Array', function (){
    it("Should declare array", function(){
        const names : string[] = ["Bima", "Natawijaya", "Dwi"];
        const value : number[] = [1, 2, 3, 4, 5];

        console.info(names);
        console.info(value);
    });

    it('should support readonly array', function(){
        // fungsi dari readonly array adalah array yang tidak bisa diubah, baik itu menambah, menghapus, maupun mengubah data di dalamnya
        const hobbies : ReadonlyArray<string> = ["Membaca", "Menulis"]; 
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]?.toUpperCase());
    })

    it('should support tuple', function(){ 
        // fungsi dari tuple adalah array yang memiliki tipe data yang berbeda-beda, dan jumlah data yang tetap (readonly)
        const person : readonly [string, string, number] = ["Bima", "Natawijaya", 100];
        console.info(person);
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);   

        // person[0] = "Dwi";  //error karena tuple bersifat readonly
    });
});