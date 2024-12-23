const cards = document.getElementById("cards");



const request = new XMLHttpRequest();
request.open("Get","./db.json");
request.send();


request.addEventListener("readystatechange",()=>{
    if(request.readyState ===4){
        console.log(getData(JSON.parse(request.responseText)));
        
        // console.log(JSON.parse(request.responseText));
    }
})


function getData(data){
    data.forEach(element => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `

        
        <img src="${element.image}" />
        <div class="infos">
            <p>${element.name}</p>
            <button class="product_btn">${element.btn}</button>
        </div>
        `
        console.log(element);
        cards.append(card)
        localStorage.setItem(`${element.creationAt}`,`creationAt`)
        localStorage.setItem(`${element.updatedAt}`,`updatedAt`)
    });
    
}





