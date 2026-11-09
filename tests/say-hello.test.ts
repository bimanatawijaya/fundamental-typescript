import { sayHello } from "../src/say-hello";

describe('sayHello', function (){
    it("Should say hello Bima", function(){
        expect(sayHello("Bima")).toBe("Hello Bima");
    }) 
})