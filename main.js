const ratingContainer = document.querySelector('.rating');
let currentValue = 0;
const limit = 5;

const html = Array.from(Array(limit)).map( (item, index) => {
	return `
		<div class="item item-${index}" data-pos="${index}"></div>
	`;
});

ratingContainer.innerHTML = html.join("");

document.querySelectorAll('.item').forEach( item => {
	item.addEventListener('mouseover', e => {
		
		//get pos current element with mouseover event
		let  pos = parseInt(item.getAttribute("data-pos"));
		// console.log('pos: '+ pos);
		
		if (currentValue && currentValue === pos) return; 

		//if goes back one position, remove class item-full to pos+1
		if ( (currentValue -1) === pos ) {
			console.log('afsd'+pos);
			document.querySelector(`.item-${pos+1}`).classList.remove('item-full');
			currentValue = pos;
			return;
		}

		//if goes ahead one position, add class item-full to pos
		if ( currentValue + 1 === pos) {
			console.log('pos: ' + pos);
			console.log('currentvalue: ' + currentValue);
			document.querySelector(`.item-${pos}`).classList.add('item-full');
			currentValue = pos;
			return;
		} 
		
		//delete class to .item-full to all elements before next loop
		document.querySelectorAll('.item').forEach(item => {
			if (item.classList.contains('item-full')) {
				item.classList.remove('item-full');
			}
		});
		
		// walk through elements with mouseover, if it doesnt have class .item-full, then add it
		for (let i = 0; i <= pos; i++) {
			let itemMouseOver = document.querySelector(`.item-${i}`);
			if (!itemMouseOver.classList.contains('item-full')) {
				itemMouseOver.classList.add('item-full')
			}
		}
		currentValue = pos;
	});
});


