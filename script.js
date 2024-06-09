let products = [
    {
        pName: "Fruit and Vegetables",
        pAmount: 10,
        picture: "images/beverages.jpg",
        PriorityToBuyToday: 0
    },
    {
        pName: "Bread and Pastries",
        pAmount: 2,
        picture: "images/Bread and pastries.jpg",
        PriorityToBuyToday: 0
    },
    {
        pName: "Beverages",
        pAmount: 2,
        picture: "images/beverages.jpg",
        PriorityToBuyToday: 0
    },
    {
        pName: "Chilled Goods",
        pAmount: 2,
        picture: "images/chilled goods.jpg",
        PriorityToBuyToday: 0
    },
    {
        pName: "Keepfreeze",
        pAmount: 4,
        picture: "images/Keepfreeze.jpg",
        PriorityToBuyToday: 0
    },
    {
        pName: "Food",
        pAmount: 7,
        picture: "images/Food.jpg",
        PriorityToBuyToday: 0
    },
    {
        pName: "Sweet and Salty",
        pAmount: 4,
        picture: "images/Sweet and salty.jpg",
        PriorityToBuyToday: 0
    },
    {
        pName: "Care",
        pAmount: 10,
        picture: "images/cream.jpg",
        PriorityToBuyToday: 0
    },
    {
        pName: "Household",
        pAmount: 9,
        picture: "images/Household.jpg",
        PriorityToBuyToday: 0
    },
    {
        pName: "Petshop",
        pAmount: 2,
        picture: "images/petshop.jpg",
        PriorityToBuyToday: 0
    },
];

const container = document.getElementById("result");
const sortButton = document.getElementById("sortButton");

function createProductCard(product, index) {
    const colDiv = document.createElement("div");
    colDiv.className = "col mb-4";

    const cardDiv = document.createElement("div");
    cardDiv.className = "card h-100";
    cardDiv.style.width = "18rem";

    const img = document.createElement("img");
    img.src = product.picture;
    img.className = "card-img-top";
    img.alt = product.pName;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h4");
    cardTitle.className = "card-title";
    cardTitle.textContent = `${product.pName} (${product.pAmount})`;

    const cardText = document.createElement("p");
    cardText.className = `card-text background`;
    cardText.innerHTML = `Please obtain this product in the required quantity from various stores in time by the specified date. <br>
                          PriorityToBuyToday: <span class="number-of-clicks">${product.PriorityToBuyToday}</span>`;
    setPriorityColor(cardText, product.PriorityToBuyToday);

    const button = document.createElement("a");
    button.className = "btn btn-primary clickBtn";
    button.textContent = "Importance";
    button.addEventListener("click", function () {
        if (products[index].PriorityToBuyToday < 5) {
            products[index].PriorityToBuyToday++;
            document.querySelectorAll(".number-of-clicks")[index].innerText = products[index].PriorityToBuyToday;
            setPriorityColor(cardText, products[index].PriorityToBuyToday);
        }
    });

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(button);
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);
    colDiv.appendChild(cardDiv);
    container.appendChild(colDiv);
}

function setPriorityColor(element, priority) {
    element.classList.remove("bg-success", "bg-warning", "bg-danger");
    if (priority <= 2) {
        element.classList.add("bg-success");
    } else if (priority <= 4) {
        element.classList.add("bg-warning");
    } else {
        element.classList.add("bg-danger");
    }
}

function renderProducts() {
    container.innerHTML = "";
    products.forEach((product, index) => {
        createProductCard(product, index);
    });
}

sortButton.addEventListener("click", function () {
    products.sort((a, b) => a.PriorityToBuyToday - b.PriorityToBuyToday);
    renderProducts();
});


renderProducts();












/*
my last work.
let people=[
    {
        fName:"testfName1",
        lName:"testlName1",
        picture:"p1.jpg",
        likes:0
    },
    {
        fName:"testfName2",
        lName:"testlName2",
        picture:"p2.jpg",
        likes:0
    },
    {
        fName:"testfName3",
        lName:"testlName3",
        picture:"p3.jpg",
        likes:0
    },
    {
        fName:"testfName4",
        lName:"testlName4",
        picture:"p4.png",
        likes:0
    },
    {
        fName:"testfName5",
        lName:"testlName5",
        picture:"p5.jpg",
        likes:0
    },
    {
        fName:"testfName6",
        lName:"testlName6",
        picture:"p6.jpg",
        likes:0
    },
    {
        fName:"testfName7",
        lName:"testlName7",
        picture:"p7.webp",
        likes:0
    },
    {
        fName:"testfName8",
        lName:"testlName8",
        picture:"p1.jpg",
        likes:0
    },
    {
        fName:"testfName9",
        lName:"testlName9",
        picture:"p1.jpg",
        likes:0
    },
    {
        fName:"testfName10",
        lName:"testlName10",
        picture:"p1.jpg",
        likes:0
    },
    

];
for(let val of people){
    document.getElementById("result").innerHTML += `
    <div>
      <div        
                  class="card" style="width: 15rem;">
                  <img src="images/${val.picture}" class="card-img-top" alt="..."> 
           <div 
                    class="card-body">
                 <h5 class="card-title">${val.fName} ${val.lName}</h5>

                 <p  
                        class="card-text"> 
                        likes: <span class="number-of-limes"> ${val.likes} </span>
                     
                 </p>

                 <a class="btn btn-primary likeBtn"> like </a>  
           </div>
       </div>
    </div>
    
    ` ;
    
}
    let btns = document.querySelectorAll(".likeBtn");

    btns.forEach((element, index) => {

      element.addEventListener("Click", function(){
        
        if(people[index].likes < 10) {

        people[index].likes ++; 
        
        document.querySelectorAll(".number-of-likes")[index].innerText += people[index].likes;
        }
        else{null}

      } );
    
   });


*/