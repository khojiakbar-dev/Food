 window.addEventListener('DOMContentLoaded', () => {

	const tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items')

	function hideTabContent() {
		tabsContent.forEach((item) => {
			item.classList.add('hide')
			item.classList.remove('show', 'fade')
		})

		tabs.forEach((item) => {
			item.classList.remove('tabheader__item_active')
		})
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add('show', 'fade')
		tabsContent[i].classList.remove('hide')
		tabs[i].classList.add('tabheader__item_active')
	}

	hideTabContent()
	showTabContent()

	tabsParent.addEventListener('click', (event) => {
		const target = event.target

		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent()
					showTabContent(i)
				}
			})
		}
	})

	

	const modalTrigger = document.querySelectorAll('[data-modal]'),
		modal = document.querySelector('.modal'),
		modalCloseBtn = document.querySelector('[data-close]')

	function showModal() {
		modal.classList.toggle('show')
		document.body.style.overflow = 'hidden'
		clearInterval(modalTimer)
	}

	modalTrigger.forEach((btn) => {
		btn.addEventListener('click', showModal)
	})

	modalCloseBtn.addEventListener('click', hideModal)

	function hideModal() {
		modal.classList.toggle('show')
		document.body.style.overflow = ''
	}

	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			hideModal()
		}
	})

	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && modal.classList.contains('show')) {
			hideModal()
		}
	})

	const modalTimer = setTimeout(showModal, 5000)

	function showModalByscroll() {
		if (
			window.pageYOffset + document.documentElement.clientHeight >=
			document.documentElement.scrollHeight
		) {
			showModal()
			window.removeEventListener('scroll', showModalByscroll)
		}
	}

	window.addEventListener('scroll', showModalByscroll)
})


// let curr = document.querySelector('#current')
// let next = document.querySelector('#next')
// let prev = document.querySelector('#prev')
// let swap = document.querySelector('#swap[data-swap]')
// let count = 3

// let allImg = {
// 	1: 'img/slider/paprika.jpg',
// 	2: 'img/slider/pepper.jpg',
// 	3: 'img/slider/food-12.jpg',
// 	4: 'img/slider/olive-oil.jpg',
// }

// let img = document.querySelector('.imgg')
// swap.forEach((item) => {
// 	item.onclick = () => {
// 		let meth = item.getAttribute('data-swap')
// 		if (meth === '-') {
// 			count--
// 			if (count === 0) {
// 				count = 4
// 				img.setAttribute('src', `img/slider/olive-oil.jpg'`)
// 			}else {
// 				img.setAttribute('src', `${allImg[count]}`)
// 			}
// 			curr.innerHTML = `0${count}`
// 		}
// 		else if(meth === '+'){
// 			count++
// 			if(count === 5){
// 				count = 1
// 				img.setAttribute('src', `img/slider/paprika.jpg`)
// 			}
// 			else{
// 				img.setAttribute('src', `${allImg[count]}`)
// 			}
// 			curr.innerHTML = `0${count}`
// 		}
// 	}
// })


let days = document.querySelector('#days')
let hours = document.querySelector('#hours')
let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')


let timer = setInterval(() => {
	seconds.innerHTML--
	if (seconds.innerHTML == -1) {
		seconds.innerHTML = 59
		minutes.innerHTML--
		if (minutes.innerHTML == -1) {
			minutes.innerHTML = 59
			hours.innerHTML--
			console.log(hours.innerHTML);
			if (hours.innerHTML == -1) {
				hours.innerHTML = 23
				days.innerHTML--
				if (days.innerHTML == -1) {
					clearInterval(timer)
					days.innerHTML = 0
					hours.innerHTML = 0
					minutes.innerHTML = 0
					seconds.innerHTML = 0
				}
			}
		}
	}
}, 1000);



let user ={
    gender:"Woman"
}
let genderBtns = document.querySelectorAll('div#gender .calculating__choose-item')

let height = document.querySelector('#height')
let weight =document.querySelector('#weight')
let age = document.querySelector('#age')
let activeBtns = document.querySelectorAll('[data-active]')
let resultSpan = document.querySelector('#result')



genderBtns.forEach(btn => {
    btn.onclick= () => {
     genderBtns.forEach(a => a.classList.remove('calculating__choose-item_active'))   


     btn.classList.add('calculating__choose-item_active')

     user.gender = btn.getAttribute('data-g')
     
    }
})

height.onkeyup = () => {
    user.height = height.value
}
weight.onkeyup = () => {
    user.weight = weight.value
}
age.onkeyup = () => {
    user.age = age.value
}

activeBtns.forEach(item => {
    item.onclick = () => {
        activeBtns.forEach(a => a.classList.remove('calculating__choose-item_active'))   


        item.classList.add('calculating__choose-item_active')

        user.act = item.getAttribute('data-active')
   
        if(user.gender === 'woman'){
            let result = 447.6 + (9.2 * user.weight) + (3.1 * user.height) - (4.3 * user.age)

            resultSpan.innerHTML = result *  user.act

        }else{
            let result = 88.36 + (13.4 * user.weight) + (4.8 * user.height) - (5.7 * user.age)
            
            resultSpan.innerHTML = result *  user.act
        }
    }
})


