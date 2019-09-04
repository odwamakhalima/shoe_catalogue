function myShoes() {
    var basket = []
    var total = 0
    var checking = false
    var errorM = ''
    var regex = /[a-zA-Z]/g
    var theShoes = [

        {
            brand: "Nike",
            color: 'Black',
            size: 3,
            price: 850,
            stock: 5
        },
        {
            brand: "Adidas",
            color: 'Green',
            size: 6,
            price: 800,
            stock: 3
        },
        {
            brand: "Puma",
            color: 'blue',
            size: 7,
            price: 750,
            stock: 5
        },
        {
            brand: "Reebok",
            color: 'Black',
            size: 5,
            price: 700,
            stock: 3
        },
        {
            brand: "Nike",
            color: 'Red',
            size: 2,
            price: 850,
            stock: 6
        },
        {
            brand: "Adidas",
            color: 'Pink',
            size: 1,
            price: 300,
            stock: 5
        },
        {
            brand: "Puma",
            color: 'Green',
            size: 10,
            price: 750,
            stock: 7
        },
        {
            brand: "Reebok",
            color: 'Lemon',
            size: 5,
            price: 700,
            stock: 5
        },
        {
            brand: "Adidas",
            color: 'Black',
            size: 3,
            price: 850,
            stock: 5
        },
        {
            brand: "Reebok",
            color: 'Green',
            size: 6,
            price: 800,
            stock: 3
        },
        {
            brand: "Nike",
            color: 'Blue',
            size: 7,
            price: 750,
            stock: 5
        },
        {
            brand: "Puma",
            color: 'Black',
            size: 5,
            price: 700,
            stock: 3
        },
        {
            brand: "Reebok",
            color: 'Red',
            size: 2,
            price: 850,
            stock: 6
        },
        {
            brand: "Puma",
            color: 'Pink',
            size: 1,
            price: 300,
            stock: 5
        },
        {
            brand: "Nike",
            color: 'Green',
            size: 10,
            price: 850,
            stock: 7
        },
        {
            brand: "Adidas",
            color: 'Lemon',
            size: 5,
            price: 700,
            stock: 5
        },
        {
            brand: "Puma",
            color: 'Red',
            size: 2,
            price: 850,
            stock: 6
        },
        {
            brand: "Nike",
            color: 'Pink',
            size: 1,
            price: 600,
            stock: 5
        },
        {
            brand: "Reebok",
            color: 'Green',
            size: 10,
            price: 450,
            stock: 7
        },
        {
            brand: "Nike",
            color: 'Lemon',
            size: 5,
            price: 800,
            stock: 5
        },
    ];

    function myError() {
        return errorM
    }

    function addShoe(brand, color, size, price, stock) {
        var test = regex.test(brand)

        if (test == true) {
            const allShoes = {
                brand,
                color,
                size: Number(size),
                price: Number(price),
                stock: Number(stock)
            };

            for (var i = 0; i < theShoes.length; i++) {
                if (theShoes[i].brand === allShoes.brand && theShoes[i].color === allShoes.color) {
                    (theShoes[i].stock) += (allShoes.stock)

                }  
            }


            if (brand.length > 0 && color.length > 0 && size.length > 0) {
                theShoes.push(allShoes)
            }
            else {
                errorM = 'Please Enter A Brand,Color,Size,Price and Stock'
            }
        }
        else {
            errorM = 'Not A Valid Brand'
        }
    }

    function getShoes() {
        return theShoes;
    }

    function filter(para) {
        const filterBrand = para.brand;

        const filterShoes = [];

        if (filterBrand !== undefined) {
            for (var i = 0; i < theShoes.length; i++) {
                const currentShoe = theShoes[i];

                if (currentShoe.brand === filterBrand
                ) {
                    filterShoes.push(currentShoe);
                }
            }
        }



        return filterShoes
    }

    function myBask(brand, color, size, price, stock) {
        checking = false
        for (var j = 0; j < theShoes.length; j++) {
            if (brand === theShoes[j].brand && color === theShoes[j].color) {
                total += theShoes[j].price
                theShoes[j].stock--
                if (theShoes[j].stock <= 0) {
                    theShoes.splice(j, 1)
                }
                for (var z = 0; z < basket.length; z++) {
                    if (basket[z].brand === brand && basket[z].color === color && basket[z].size === Number(size)) {
                        basket[z].quantity++;
                        checking = true
                    }
                    else {
                        errorM = 'Shoe Added To The Basket'
                    }
                }
            }


            if (!checking) {
                var finalShoes = {
                    brand,
                    color,
                    size: Number(size),
                    quantity: 0
                };
            }
            basket.push(finalShoes)
        }

    }

    function checkOut() {
        for (var d = 0; d < basket.length; d++) {
            var checkShoe = basket[d]

                if (checkShoe.brand === basket[d].brand && checkShoe.color === basket[d].color) {
                    
                    basket[d].stock = basket[d].stock + checkShoe.quantity
                    
                }

               
        }
        
        errorM = 'You Bought The Shoe'
        total = 0
        basket = []
    }

    function theTotal() {
        return total
    }

    return {
        add: addShoe,
        get: getShoes,
        fil: filter,
        bask: myBask,
        tot: theTotal,
        error: myError,
        reset: checkOut
    }
}