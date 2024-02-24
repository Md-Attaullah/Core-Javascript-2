/*
7.Tasks
-Create an object named calculator with methods add, subtract, and multiply
-Implement the calculate method in the calculator object, which takes an operation ('add', 'subtract', or
'multiply') and two numbers#
-Use call to perform an addition operation using the calculate method#
-Use apply to perform a multilication operation using the calculate method with arguments as an array#
-Create another object named discountCalculator with a discount percentage property and a method
applyDiscount#
-Use bind to create a new function calculateDiscount that is bound to the discountCalculator object and
can be reused.
*/

const calculator = {
    add:function(a,b){
        return a+b;
    },
    subtract:function(a,b){
        return a-b;
    },
    multiply:function(a,b){
        return a*b;
    },
    calculate:function(operation,a,b){
            if(operation === 'add'){
                return this.add(a,b);
            }else if(operation === 'subtract'){
                return this.subtract(a,b);
            }else(operation === 'multiply')
                return this.subtract(a,b);
            
        },
    };

    const additionResult = calculator.calculate.call(calculator,'add',5,4);
        console.log(`Addition Result : ${additionResult}`);

    const multiplyResult = calculator.calculate.apply(calculator,['multiply',8,4]);
        console.log(`Multiply Result : ${multiplyResult}`);

    const discountorCalculator = {
        discountorPercentage : 10,
        applyDiscount : function(amount){
            return amount-(amount*this.discountorPercentage)/100;
        },
    };

    const calculateDiscount =
    discountorCalculator.applyDiscount.bind(discountorCalculator);
    const discountedAmount = calculateDiscount(100);
    console.log(`Discounted Result : ${discountedAmount}`);

