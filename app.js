let users = [];
const fetchData = async () => {
    try {
        const productsFetch = await fetch("https://dummyjson.com/users");
        const data = await productsFetch.json();
        console.log(data);  
        users = data.users;
        displayProducts(users); 
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const displayProducts = (productsToDisplay) => {
    const container = document.getElementById("container");
    
    container.innerHTML = productsToDisplay.map(item => {
        return `
            <div class="card" id="user-${item.id}">
                <img src="${item.image}" alt="${item.image}">
                <h2>${item.firstName} ${item.lastName}</h2> 
                <button class="btn">View more</button>
                <div class="user-details" style="display: none;">
                    <p>Email: ${item.email}</p>
                    <p>Phone: ${item.phone}</p>
                    <p>Age: ${item.age}</p>
                    <p>Address: ${item.address}</p>
                    <p>Company: ${item.company.name}</p>
                </div>
            </div>
        `;
    }).join("");

    
    const Buttons = document.querySelectorAll('.btn');
        Buttons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.card');
            const details = card.querySelector('.user-details');
            const isVisible = details.style.display === 'block';
            
            
            details.style.display = isVisible ? 'none' : 'block';
            button.textContent = isVisible ? 'Show Details' : 'Hide Details';
        });
    });
};


fetchData();

const button = document.getElementById("btn");
if (button) {
    button.addEventListener("click", () => {
        console.log('View more clicked!');
    });
}
