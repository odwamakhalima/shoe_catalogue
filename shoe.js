var brand = document.querySelector(".brand");
var color = document.querySelector(".color");
var size = document.querySelector(".size");
var addBtn = document.querySelector('.addBtn')
var filBtn = document.querySelector('.filBtn')
var baskBtn = document.querySelector('.baskBtn')
var checkBtn = document.querySelector('.checkBtn')
var errorMs = document.querySelector('.error')
var user = document.querySelector('.userData')
var disShoes = document.querySelector('.shoes')
var addBrand = document.querySelector('.addBrand')
var addColor = document.querySelector('.addColor')
var addSize = document.querySelector('.addSize')
var addPrice = document.querySelector('.addPrice')
var addStock = document.querySelector('.addStock')

var userDataElem = document.querySelector(".userData");
var templateSource = document.querySelector(".userTemplate").innerHTML;

var userTemplate = Handlebars.compile(templateSource);

var factoryShoes = myShoes()

function clearError() {
	setTimeout(function () {
		errorMs.innerHTML = "";
	}, 2000);
}

function shoeCat() {

	factoryShoes.add(addBrand.value, addColor.value, addSize.value, addPrice.value, addStock.value)
	errorMs.innerHTML = factoryShoes.error()
	clearError()
	check();
console.log(addBrand.value)
}

function myBask(){
	factoryShoes.bask(brand.value, color.value, size.value)
	disShoes.innerHTML ='The Total For The Shoes Is '+ 'R' + factoryShoes.tot()

	errorMs.innerHTML = factoryShoes.error()
	clearError()
	check();

}

function check() {
	var myBrand = brand.value
	var myColor = color.value
	var mySize = size.value
	var filterShoes = []

	if (myBrand === '') {
		filterShoes = factoryShoes.get()
	}
	else {
		const para = {
			brand: myBrand,
			color: myColor,
			size: mySize
		};

		filterShoes = factoryShoes.fil(para);
		
	}
		var userDataHTML = userTemplate({filterShoes});
		 		
		userDataElem.innerHTML = userDataHTML;
	
}

function checkout(){
	factoryShoes.reset()
	disShoes.innerHTML ='The Total For The Shoes Is '+ 'R' + factoryShoes.tot()
	
	errorMs.innerHTML = factoryShoes.error()
	clearError()
	check();

}

checkBtn.addEventListener('click',checkout)
filBtn.addEventListener('click', check)
addBtn.addEventListener('click', shoeCat)
baskBtn.addEventListener('click',myBask)
