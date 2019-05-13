const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const ctaImg = document.getElementById("cta-img");

ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);


const navUpdates = document.querySelectorAll('.container nav a');

navUpdates[0].textContent = siteContent["nav"]["nav-item-1"];

navUpdates[1].textContent = siteContent["nav"]["nav-item-2"];

navUpdates[2].textContent = siteContent["nav"]["nav-item-3"];

navUpdates[3].textContent = siteContent["nav"]["nav-item-4"];

navUpdates[4].textContent = siteContent["nav"]["nav-item-5"];

navUpdates[5].textContent = siteContent["nav"]["nav-item-6"];

// const ctaBreak = document.createElement('<br>');

const ctaText = document.querySelector('h1');

ctaText.textContent = "DOM\r\n"; 
ctaText.textContent += "Is\r\n";
ctaText.textContent += "Awesome";

const AddButtonText = document.querySelector('button');

AddButtonText.textContent = siteContent["cta"]["button"];

const header4Updates = document.querySelectorAll('h4');

console.log(header4Updates);

header4Updates[0].textContent = siteContent["main-content"]["features-h4"];

header4Updates[1].textContent = siteContent["main-content"]["about-h4"];

header4Updates[2].textContent = siteContent["main-content"]["services-h4"];

header4Updates[3].textContent = siteContent["main-content"]["product-h4"];

header4Updates[4].textContent = siteContent["main-content"]["vision-h4"];

const mainContentParagraphUpdates = document.querySelectorAll('.main-content p');

console.log(mainContentParagraphUpdates);

mainContentParagraphUpdates[0].textContent = siteContent["main-content"]["features-content"];

mainContentParagraphUpdates[1].textContent = siteContent["main-content"]["about-content"];

mainContentParagraphUpdates[2].textContent = siteContent["main-content"]["services-content"];

mainContentParagraphUpdates[3].textContent = siteContent["main-content"]["product-content"];

mainContentParagraphUpdates[4].textContent = siteContent["main-content"]["vision-content"];

const middleImage = document.getElementById("middle-img");

middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const contactUpdatesHeader = document.querySelector('.contact h4');

console.log(contactUpdatesHeader);

contactUpdatesHeader.textContent = siteContent["contact"]["contact-h4"];

const contactInfoUpdates = document.querySelectorAll('.contact p');

console.log(contactInfoUpdates);

contactInfoUpdates[0].textContent = siteContent["contact"]["address"];

contactInfoUpdates[1].textContent = siteContent["contact"]["phone"];

contactInfoUpdates[2].textContent = siteContent["contact"]["email"];

const footerUpdate = document.querySelector("footer p");

console.log(footerUpdate);

footerUpdate.textContent = siteContent["footer"]["copyright"];

// Change navigation text to green

navUpdates[0].style.color = "green";

navUpdates[1].style.color = "green";

navUpdates[2].style.color = "green";

navUpdates[3].style.color = "green";

navUpdates[4].style.color = "green";

navUpdates[5].style.color = "green";

const locateNavParent = document.querySelector('nav');

console.log(locateNavParent);

const newNavElement = document.createElement('a');

const prependNewNavElement = document.createElement('a');

console.log(newNavElement);

locateNavParent.appendChild(newNavElement);

locateNavParent.prepend(prependNewNavElement);

newNavElement.textContent = "New Nav";

prependNewNavElement.textContent = "Prepend Nav";