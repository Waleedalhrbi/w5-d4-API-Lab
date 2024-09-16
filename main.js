fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((date) => {

        console.log(date);
        
        let cont = document.getElementById("continer");

        date.map(elm => {

            let card = document.createElement("div");
            card.classList.add("product-card");


            let imgAPI = document.createElement("img");
            imgAPI.src = elm.image;
            imgAPI.classList.add("product-img");
            

            
            let text = document.createElement("h4");
            text.textContent = elm.title;
            text.classList.add("product-title");
          
            let price = document.createElement("h4");
            price.textContent = elm.price;
            price.classList.add("product-title");

            card.appendChild(imgAPI);
            card.appendChild(text);
            card.appendChild(price);
            cont.appendChild(card);
        })
    })