describe("If Statement", function(){
    it("Should support if statement", function(){
        function checkValidation(value : number) : boolean{
            if(value > 50){
                return true;
            }else{
                return false;
            }
        }

        function testValidation(value: number) : void{
            if(value > 80){
                console.info("Good");
            }else if(value > 60){
                console.info("Not Bad");
            }else{
                console.info("Try Again");
            }
        }

        testValidation(50);
        expect(checkValidation(90)).toBe(true);
    });

    it("Should support ternary operator", function(){
        // ternary operator
        const value = 80;
        const say = value >= 75 ? "Congratulation" : "Try Again";

        console.info(say);
    });

    it("Should support switch statement", function(){
        function sayHello(name: string): string{
            switch(name){
                case "Eko":
                    return "Hi, Eko";
                case "Budi":
                    return "Hi, Budi";
                case "Joko": 
                    return "Hi, Joko";
                default:
                    return "Hi";                
            }
        }

        console.info(sayHello("Eko"));
        console.info(sayHello("Budi"));
        console.info(sayHello("Joko"));
        console.info(sayHello("Bima"));
    })
});