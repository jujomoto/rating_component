const ratingContainer = document.querySelector('.rating');
let currentValue = 0;
const limit = 5;

const html = Array.from(Array(limit)).map( (item, index) => {
	return `
		<div class="item item-${index}" data-pos="${index}">${index}</div>
	`;
});

ratingContainer.innerHTML = html.join("");

document.querySelectorAll('.item').forEach( item => {
	item.addEventListener('mouseover', e => {
		
		//get pos current element with mouseover event
		let  pos = item.getAttribute("data-pos");
		
		//first delete the class to all elements
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


	});
});


