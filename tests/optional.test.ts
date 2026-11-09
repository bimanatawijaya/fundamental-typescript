// optional parameter adalah parameter yang tidak wajib diisi, sehingga jika tidak diisi maka nilainya akan undefined.
//  Optional parameter ditandai dengan tanda tanya (?) setelah nama parameter. Optional parameter hanya bisa diletakkan di akhir parameter list, sehingga jika ada parameter yang bersifat optional maka harus diletakkan di akhir parameter list.
describe("Optional Parameter", function() {
    it("Should declare optional parameter", function() {
        // undefined => odata tidak dikirimkan, maka nilai defaultnya adalah undefined
        // null => data dikirimkan, tetapi nilainya null, sehingga harus dihandle secara khusus
        function sayHello(name?: string | null) {
            if(name){
                console.info( `Hello ${name}`);
            }else{
                console.info("Hello");
            }
        };

        sayHello("Bima");
        const name: string | undefined = undefined;
        sayHello(name);
        sayHello(null);
    });
})