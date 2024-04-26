function updateTime() {
    var now = new Date();
    
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
  
    const greetings =  document.getElementById("greeting");
  
    if(hours < 12){
      greetings.innerHTML = "Good Morning Ogunyo!";
    }else if(hours < 16){
      greetings.innerHTML = "Good Afternoon Ogunyo!";
    }else if(hours > 16){
      greetings.innerHTML = "Good Evening Ogunyo!";
    }
    
    document.querySelector('[data-time="hours"]').textContent = hours;
    document.querySelector('[data-time="minutes"]').textContent = minutes;
    document.querySelector('[data-time="seconds"]').textContent = seconds;
  
  }
  
  
  
  
  // Update time every second
  setInterval(updateTime, 1000);
  
  // Initial call to display time immediately
  updateTime();
  /* change images*/
  var myImage = document.querySelector("#galleryImage");
  
  function changeImage1(params) {
   myImage.src = "/assets/gallery/image1.jpg";
   
  }
  function changeImage2(params) {
   myImage.src = "/assets/gallery/image2.jpg";
   
  }
  function changeImage3(params) {
   myImage.src = "/assets/gallery/image3.jpg";
      
   }
  
  // Select all thumbnails
  const thumbnails = document.querySelectorAll('.thumbnails img');
  
  // Select the main gallery image
  const mainImage = document.getElementById('main-gallery-image');
  
  // Add click event listener to each thumbnail
  thumbnails.forEach(thumbnail => {
     thumbnail.addEventListener('click', function() {
       // Change the source of the main gallery image to match the clicked thumbnail
       mainImage.src = this.src;
     });
  });
  
  
  // Array of product objects
  const products = [
  { title: 'Product 1', price: 50, image: 'assets/products/img1.png', isFree: false },
  { title: 'Product 2', price: 100, image: 'assets/products/img2.png', isFree: false },
  { title: 'Product 3', price: 200, image: 'assets/products/img3.png', isFree: false },
  { title: 'Product 4', price: 300, image: 'assets/products/img4.png', isFree: false },
  { title: 'Product 5', price: 0, image: 'assets/products/img5.png', isFree: true },
  { title: 'Product 6', price: 0, image: 'assets/products/img6.png', isFree: true },
  ];
  
  // Function to generate a single card element
  function generateCard(product) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.style.background = '#3c3c3c';
  card.style.margin= '20px';
  card.style.display = 'inline-block';
  
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  const img = document.createElement('img');
  img.src = product.image;
  imgContainer.appendChild(img);
  card.appendChild(imgContainer);
  
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('info-container');
  
  const title = document.createElement('h3');
  title.textContent = product.title;
  infoContainer.appendChild(title);
  
  const description = document.createElement('p');
  description.textContent = 'This is a sample product description.';
  description.classList.add('border-top');
  infoContainer.appendChild(description);
  
  const price = document.createElement('p');
  price.textContent = '$${product.price}';
  price.classList.add('border-top');
  infoContainer.appendChild(price);
  
  const addToCart = document.createElement('button');
  addToCart.classList.add('cart');
  addToCart.textContent = 'Add to Cart';
  infoContainer.appendChild(addToCart);
  
  card.appendChild(infoContainer);
  return card;
  }
  
  // Function to display all or filtered products in the card container
  function displayItems(filter) {
  const cardContainer = document.getElementById('cardContainer');
  cardContainer.innerHTML = '';
  
  let filteredProducts = products;
  if (filter === 'paid') {
    filteredProducts = products.filter(product => product.price > 0);
  } else if (filter === 'free') {
    filteredProducts = products.filter(product => product.price === 0);
  }
  
  const allQty = filteredProducts.length;
  document.querySelector('.qtyAll').textContent = allQty;
  document.querySelector('.qtyPaid').textContent = filteredProducts.filter(product => product.price > 0).length;
  document.querySelector('.qtyFree').textContent = filteredProducts.filter(product => product.price === 0).length;
  
  filteredProducts.forEach(product => {
    const card = generateCard(product);
    cardContainer.appendChild(card);
  });
  }
  
  // Initialize displaying all products
  displayItems('all');
  //hamburger
  document.addEventListener("DOMContentLoaded", function () {
  const openNavMenuButton = document.getElementById("open-nav-menu");
  const closeNavMenuButton = document.getElementById("close-nav-menu");
  const navMenu = document.querySelector(".wrapper");
  
  openNavMenuButton.addEventListener("click", function () {
    navMenu.classList.add("nav-open");
  });
  
  closeNavMenuButton.addEventListener("click", function () {
    navMenu.classList.remove("nav-open");
    });
  });