describe('shoeFact', function () {

    it('it should return shoes', function () {
        var factoryShoes = myShoes()

       
        assert.deepEqual(factoryShoes.get().length, 4);

        const shoeOne = factoryShoes.get()[0]
        assert.deepEqual(shoeOne.brand, 'nike');
        assert.deepEqual(shoeOne.color, 'black');
        assert.deepEqual(shoeOne.size, 3);
        assert.deepEqual(shoeOne.price, 850);
        assert.deepEqual(shoeOne.stock, 5);

    })
    

    it('it should return shoes', function () {
        var factoryShoes = myShoes();
        const filterShoes = factoryShoes.fil({
            brand: 'nike',
            color: 'red',
            
        });
        console.log(filterShoes);
        assert.equal(1, filterShoes.length);

        assert.deepEqual([
            { brand : "nike", color : 'red', size:2,price : 850,stock : 6}],
            filterShoes);
            
            
    })
})



