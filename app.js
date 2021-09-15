const initial = document.querySelector('#initial');
const quantity = document.querySelector('#quantity');
const current = document.querySelector('#current');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');
const image = document.querySelector('#image');

btn.addEventListener('click', () =>{
    const ip = Number(initial.value);
	const cp = Number(current.value);
	const quant = Number(quantity.value);

    calcStonks(ip,quant,cp);
})

const calcStonks = (initial, quantity, current)  => {
	if(initial>0&&quantity>0&&current>0){
		if (initial > current) {
			let loss = (initial - current) * quantity;
			let lossPercentage = (loss / (initial * quantity)) * 100;
			output.style.color = 'red';
			output.innerHTML = `Whoops!! Your loss is ${loss.toFixed(2)} and loss Percentage is ${lossPercentage.toFixed(2)}% 😥😌`;
			image.src = "/loss.jpg";
			image.style.border = "3px solid red";
		}
		else if (initial < current) {
			let profit = (current - initial) * quantity;
			let profitPercentage = (profit / (initial * quantity)) * 100;
			output.style.color = 'green';
			output.innerHTML = `Yay!! Your Profit is ${profit.toFixed(2)} and profit Percentage is ${profitPercentage.toFixed(2)}% 😁😎`;
			image.src = "/profit.jpg";
			image.style.border = "3px solid green";
		}
		else {
			output.style.color = 'white';
			output.innerHTML = `No pain No gain, and no gain no pain 🙄🙂`;
			image.src = "/even.jpg";
			image.style.border = "3px solid white";
		}
	}else{
		output.innerText = `Enter valid inputs`;
		image.src = "/invalid.jpg";
	}
	
}
