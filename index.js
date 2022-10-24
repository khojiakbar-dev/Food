let iphones = {
    green:"https://www.bite.lv/sites/default/files/styles/recommended_small/public/products/2022-03/apple_iphone_13_pro_green.png?itok=5gAMw5TI",
    silver:"https://iphoriya.ru/wp-content/uploads/iphone-13-pro-max-silver.jpg",
    gold:"https://go.imgsmail.ru/imgpreview?key=3c6a01b7a2d3738c&mb=imgdb_preview_exp",
    midnight:"https://www.technopolis.bg/medias/sys_master/hda/hee/16423550320670.jpg",
    sierrablue:"https://ilounge.ua/files/products/apple-iphone-13-pro-02_3.1000x1000.jpg"
}

let btns = document.querySelectorAll('button')
let img = document.querySelector('.img-screen')
btns.forEach((btn)   => {
    btn.onclick = () => {
        let color = btn.innerText

        img.src = iphones[color] 
    }
})