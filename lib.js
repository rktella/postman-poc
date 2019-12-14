postman.setEnvironmentVariable("utils", () => {
    var myFunction1 = () => {
        console.log("func1");
    }
    var myFunction2 = () => {

        console.log("func2");
    }
    return {
        myPackage: {
            myFunction1,
            myFunction2
        }
    };
})