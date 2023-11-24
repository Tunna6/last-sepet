// const row = document.querySelector('.row')
const span = document.querySelector('#span')


let sepet = []

if (localStorage.getItem('sepet')) {
    sepet = JSON.parse(localStorage.getItem('sepet'))
    span.textContent = sepet.length
}


console.log(window.location.href);
if (window.location.href == 'http://127.0.0.1:5500/index.html') {
    const row = document.querySelector('.row')



    urunler.forEach((urun) => {
        urun.quantity = 1


        const col = document.createElement('div')
        col.classList.add('col-lg-3', 'col-sm-6', 'col-12')

        const parentDiv = document.createElement('div')
        parentDiv.style.width = '100%'
        parentDiv.style.height = '200px'
        parentDiv.style.border = '1px solid black'


        const imgDiv = document.createElement('div')
        imgDiv.style.width = '100%'
        imgDiv.style.height = '100%'

        const img = document.createElement('img')
        img.style.width = '100%'
        img.style.height = '100%'
        img.src = urun.fotoğraf

        const cardBody = document.createElement('div')
        cardBody.style.width = '100%'
        cardBody.style.height = '100%'

        const baslik = document.createElement('h5')
        baslik.textContent = urun.isim

        const açıklama = document.createElement('p')
        açıklama.textContent = `${urun.açıklama} - ${urun.fiyat}`

        const btn = document.createElement('button')
        btn.classList.add('btn', 'btn-dark')
        btn.textContent = 'Sepete Ekle'

        btn.addEventListener('click', () => {
            sepet.push(urun)
            localStorage.setItem('sepet', JSON.stringify(sepet))
            span.textContent = sepet.length

        })


        cardBody.append(baslik)
        cardBody.append(açıklama)
        cardBody.append(btn)

        imgDiv.append(img)

        parentDiv.append(imgDiv)
        parentDiv.append(cardBody)

        col.append(parentDiv)

        row.appendChild(col)

    });
} else if (window.location.href == 'http://127.0.0.1:5500/sepet.html') {
    const container = document.querySelector('.container')

    if (sepet.length == 0) {
        const h4 = document.createElement('h4')
        h4.textContent = 'Sepetinizde ürün yok..'
        container.append(h4)

    } else {
        sepet.forEach((urun) => {
            const div = document.createElement('div')
            div.style.width = '100%'
            div.style.height = '200px'
            div.style.border = '1px solid black'
            div.style.margin = '10px'
            div.style.padding = '10px'
            div.classList.add('d-flex', 'align-items-center', 'justify-content-between')


            const imgDiv = document.createElement('div')
            imgDiv.style.width = '25%'
            imgDiv.style.height = '100%'

            const img = document.createElement('img')
            img.style.width = '100%'
            img.style.height = '100%'
            img.src = urun.fotoğraf

            const baslik = document.createElement('h3')
            baslik.textContent = urun.isim

            const price = document.createElement('p')
            price.textContent = urun.fiyat + '$'
            price.style.fontWeight = 'bold'

            const kaçTane = document.createElement('div')
            // kaçTane.style.width = '25%'
            kaçTane.classList.add('d-flex', 'gap-3')


            const sayi = document.createElement('p')
            sayi.textContent = urun.quantity
            sayi.classList.add('mt-3', 'fs-4')

            const azaltBtn = document.createElement('button')
            azaltBtn.classList.add('btn', 'btn-light')
            azaltBtn.textContent = '-'

            const arttırBtn = document.createElement('button')
            arttırBtn.textContent = '+'
            arttırBtn.classList.add('btn', 'btn-light')

            

            azaltBtn.addEventListener('click', function () {
                if (urun.quantity >= 1) {
                    urun.quantity--
                    sayi.textContent = urun.quantity

                    } if (urun.quantity == 0) {
                        // console.log(this.parentElement.parentElemen)
                        this.parentElement.parentElement.remove()

                        let urunIndex = indexOf(urun);
                        sepet.splice(urunIndex, 1)

                        localStorage.setItem('sepet', JSON.stringify(sepet))
                    }
        

                    

                })

arttırBtn.addEventListener('click', () => {
    urun.quantity++
    sayi.textContent = urun.quantity
})

imgDiv.append(img)

kaçTane.append(azaltBtn)
kaçTane.append(sayi)
kaçTane.append(arttırBtn)

div.append(imgDiv)
div.append(baslik)
div.append(price)
div.append(kaçTane)

container.append(div)

})
    }

}
