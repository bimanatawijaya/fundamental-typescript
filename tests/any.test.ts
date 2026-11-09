describe('Any', function (){

    // fungsi dari any adalah tipe data yang bisa berubah-ubah, baik itu string, number, boolean, object, array, dll
    // tapi penggunaan any sebaiknya dihindari karena bisa menyebabkan error di kemudian hari, karena tidak ada pengecekan tipe data
    it("Should declare any", function(){
        const person : any = {
            id : 1,
            name : "Bima Natawijaya",
            address : "Indonesia"
        }
         
        person.name = 100;
        person.address = true;
        person.id = "1";    

        console.info(person);
    });
})