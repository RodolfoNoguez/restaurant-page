import pizzaImage from './images/pizzaJoint.jpg';  

//home page load function
function pageload(){
    const headline = document.createElement('h2');
    headline.innerHTML = 'Welcome to Rodolfo pizzeria, Home of the greatest pizza in texas';
    
    const restaurantDescription = document.createElement('div');
    restaurantDescription.innerHTML = ` 
        <div>
            We are a respected pizza spot for over 20 years serving our community for as long as we have been open.
            we have been a restaurant that has been rated 5 stars on platforms such as yelp. we have a very welcoming enviroment we everyone can come and 
            enjoy the gift of food and have great time with friends. come for special occasions or for a casual date with friends. 
            dine in, take out, or enjoy the meals from the confort of your home.
        </div>
    `;
    
    const restaurantImage = document.createElement('img');
    restaurantImage.src = pizzaImage;
    restaurantImage.alt = 'pizza image';
    
    const content = document.getElementById('content');
    content.appendChild(headline);
    content.appendChild(restaurantDescription);
    content.appendChild(restaurantImage);
}

//menu page load function
function menuPageLoad(){
    const menuHeadLine = document.createElement('h2');
    menuHeadLine.innerHTML = 'Menu';

    const menuItems =  document.createElement('div');
    menuItems.innerHTML = `
        <div>pepperoni pizza -- $10</div>
        <div>hawaian pizza -- $15</div>
        <div>vegetarian pizza -- $20</div>
        <div>sausage pizza -- $20</div>
        <div>cheese pizza -- $10</div>
        <div>specialty pizza -- $20</div>
    `;
    const content = document.getElementById('content');
    content.appendChild(menuHeadLine);
    content.appendChild(menuItems);    
}

//about page load function

function aboutPageLoad(){
    const aboutHeadLine = document.createElement('h2');
    aboutHeadLine.innerHTML = 'Contact Us';
    const aboutItems =  document.createElement('div');
    aboutItems.innerHTML = `
        <div>Address: 1234 pizza street, pizza city, TX</div>
        <div>Phone: 123-456-7890</div>
        <div>Email: email@email.com </div>
        <div>Open mon-sun 10am-10pm</div>
        <div>We are located in the heart of pizza city, come and visit us for the best pizza in town</div>
    `
    const content = document.getElementById('content');
    content.appendChild(aboutHeadLine);
    content.appendChild(aboutItems);
}
export { pageload, menuPageLoad, aboutPageLoad };
