let stocks = {
    fruits: ['grapes','banana','pineapple','apple'],
    liquids: ['water','ice'],
    holders: ['cup','cone','stick'],
    toppings:['choclate','sprinkles','peanuts','crunch']
}




let production = ()=>{
    setTimeout(()=>{
        console.log('starting production');
        setTimeout(()=>{
            console.log('fruit chopped');
            setTimeout(()=>{
                console.log(`added ${stocks.liquids[0]} and ${stocks.liquids[1]}`);
                setTimeout(()=>{
                    console.log('machine started');
                    setTimeout(()=>{
                        console.log(`placed icecream on the ${stocks.holders[0]}`);
                        setTimeout(()=>{
                            console.log(`${stocks.toppings[1]} is selected as topping`);
                            setTimeout(()=>{
                                console.log('Icecream is served');
                            },2000)
                        },3000)
                    },2000)
                },1000)
            },1000)
        },2000)
    },0)
    
}

let order = (fruit_name,start_production) => {
    setTimeout(()=>{
       
        console.log(`selected ${stocks.fruits[fruit_name]} and order placed. start production`)
        start_production();

       
    },2000)
    
};

order(1,production)
