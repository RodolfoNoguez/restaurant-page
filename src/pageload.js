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
        <div>
        
        </div>
        `
}

export { pageload };