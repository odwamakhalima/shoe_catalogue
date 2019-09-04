describe('shoeFact', function () {

    it('it should return shoes', function () {
        var factoryShoes = myShoes()


        assert.deepEqual(factoryShoes.get().length, 20);

        const shoeOne = factoryShoes.get()[0]
        assert.deepEqual(shoeOne.brand, 'Nike');
        assert.deepEqual(shoeOne.color, 'Black');
        assert.deepEqual(shoeOne.size, 3);
        assert.deepEqual(shoeOne.price, 850);
        assert.deepEqual(shoeOne.stock, 5);

    })


    it('it should return the filtered shoes', function () {
        var factoryShoes = myShoes();
        const filterShoes = factoryShoes.fil({
            brand: 'Nike',


        });
        console.log(filterShoes);
        assert.equal(6, filterShoes.length);

        assert.deepEqual([
            {
                brand: "Nike",
                color: 'Black',
                size: 3,
                price: 850,
                stock: 5
            },
            {
                brand: "Nike",
                color: 'Red',
                size: 2,
                price: 850,
                stock: 6
            },
            {
                brand: "Nike",
                color: 'Blue',
                size: 7,
                price: 750,
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
                brand: "Nike",
                color: 'Pink',
                size: 1,
                price: 600,
                stock: 5
            },
            {
                brand: "Nike",
                color: 'Lemon',
                size: 5,
                price: 800,
                stock: 5
            }
        ],
            filterShoes);


    })
})



