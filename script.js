$(document).ready(function() {
  function createEl(htmlString, attrs, ...children) {
    if (typeof htmlString !== "string") {
      throw Error("Argument 'htmlString' is required and must be a string");
    }
  
    const el = document.createElement(htmlString);
  
    if (typeof attrs === "object") {
      for (let key in attrs) {
        if (key.substring(0, 2) === "on") {
          el.addEventListener(key.substring(2).toLowerCase(), attrs[key]);
        } else {
          el.setAttribute(key, attrs[key]);
        }
      }
    }
  
    children.forEach(function(child) {
      let node;
  
      if (child.constructor.name.includes("Element")) {
        node = child;
      } else {
        node = document.createTextNode(child);
      }
  
      el.appendChild(node);
    });
  
    return el;
  };

  function createFoodFestivalDescription(numWords = 50) {
    const festivalText = "Indulge in a culinary extravaganza at our Food Festival! Join us for a delectable experience featuring a vibrant array of cuisines, live cooking demonstrations, tantalizing tasting sessions, and interactive workshops. Discover the rich tapestry of flavors, from street food delights to gourmet creations. Immerse yourself in a celebration of food, culture, and community. Mark your calendar and savor the flavors with us!";
    
    const result = festivalText.split(/\s+/).slice(0, numWords).join(" ");
    return result;
}


  if (window.location.href.indexOf("schedule") > -1) {

    const date = new Date();
    const d = date.getDate();
    const m = date.getMonth();
    const y = date.getFullYear();

    function onEventClick(calEvent) {

    const start = dateConverter(calEvent.start);
    localStorage.setItem("currentEvent", JSON.stringify({
        title: calEvent.title,
        subtitle: start,
        description: calEvent.description,
        image: calEvent.image
    }))
    
    window.location.href = "events.html"

    }

    const events = [
    {
        title: 'Vegan Day',
        start: new Date(y, m+1, 20),
        description: `Vegans unite! At this event, we'll be celebrating with vegan food from around the globe. With so many delicious vegan cuisine options, it's hard to pick one. What are you hungry for? Let us share with you!
        Veganism is a lifestyle choice—we're passionate about creating healthy and delicious food products without harming the environment, so please spread the word about our festival and about our work!`,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    },
    {
        title: 'Harvest Festival',
        start: new Date(y, m+1, 20),
        description: `Join us for a joyous celebration of nature's bounty at our annual Harvest Festival! As the season shifts and the fields ripen, we come together to honor the abundance that the land has provided. It's a time of gratitude and revelry, embracing the fruits of our labor.
        At this festival, immerse yourself in the vibrant colors and aromas of freshly harvested produce. From the crisp sweetness of apples to the golden richness of pumpkins, experience the essence of fall in every bite. Engage in activities that reconnect us with the earth, from pumpkin carving to hayrides and corn mazes, there's fun for everyone!
        This event is a testament to our connection with nature and the cycle of life. We celebrate not just the harvest but also the farmers whose dedication sustains us. Let's honor their hard work and commitment to nourishing our communities.
        Come, join us in this celebration of abundance and unity. Let's revel in the season's harvest and create unforgettable memories together!`,
        image: "https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    },
    {
        title: 'Bacon Day',
        start: new Date(y, m+1, 20),
        description: `Today's all about bacon! We'll be serving up the best tasting bacon around town! Let's all get excited about bacon together!
        As an appetizer, grab a side of our delicious BBQ pulled pork and pick up a delicious side of our homemade slaw and sauce! There will be bacon everywhere!!`,
        image: "https://images.unsplash.com/photo-1528607929212-2636ec44253e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
    
    },
    {
        title: 'Fry-day',
        description: `You bring it, we fry it. Everything tastes better fried! Whether it's your favorite sponge cake or a refreshing afternoon snack,
        prepare to shock your tastebuds.`,
        start: new Date(y, m+1, 21),
        image: "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
    },
    {
        title: 'Pizza Party!',
        description: `This event is devoted to all those pizza lovers out there. Come enjoy fresh from the oven pizza and learn tips on making pizza at home from the pros!`,
        start: new Date(y, m+1, 22),
        image: "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
    },
    {
        title: 'Pasta Bonanza',
        description: `All things pasta.`,
        start: new Date(y, m+1, 22),
        image: "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
    },
    {
        title: 'Fruity Foods!',
        description: `We will be showcasing dishes where fruits are a primary ingredient. Come learn how you can add more fruits into your diet!`,
        start: new Date(y, m+1, 22),
        image: "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
    },
    {
        title: 'Veggie Mix Up',
        description: `We will be showcasing great dishes that have plenty of veggies and proteins! This is for all those out there who love food, but want to get more vegetables in their diets!`,
        start: new Date(y, m+1, 23),
        image: "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
    },
    {
        title: 'Fry-day',
        description: `You bring it, we fry it....again. This event is always a huge hit, so we hold it twice!!`,
        start: new Date(y, m+1, 23),
        image: "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
    },
    ]

    const pageEl = document.querySelector("#page");

    function createCards(events) {
      const cards = events.map((event) => (
          createEl("div", {class: "card-body clickable", onClick: () => onEventClick(event)}, 
          createEl("h5", {class: "card-title"}, event.title || ""),
          createEl("p", {class: "card-text"}, event.description || createLoremIpsum()),
          createEl("hr")
          )
      ))
      return cards
    }
    
    const containerEl1 = createEl("div", {class: "container mt-5"}, 
    createEl("div", {class: "card mb-5"}, 
        createEl("h5", {class: "card-header"}, "Day 1"),
        ...createCards(events.slice(0,3))
    )
    )

    const containerEl2 = createEl("div", {class: "container"}, 
    createEl("div", {class: "card mb-5"}, 
        createEl("h5", {class: "card-header"}, "Day 2"),
        ...createCards(events.slice(3,6))
    )
    )

    const containerEl3 = createEl("div", {class: "container"}, 
    createEl("div", {class: "card mb-5"}, 
        createEl("h5", {class: "card-header"}, "Day 3"),
        ...createCards(events.slice(6,9))
    )
    )

    pageEl.appendChild(containerEl1);
    pageEl.appendChild(containerEl2);
    pageEl.appendChild(containerEl3);
  }

  if (window.location.href.indexOf("event") > -1) {
    const currentEvent = JSON.parse(localStorage.getItem("currentEvent")) || {
        title: "Title Placeholder",
        subtitle: "",
        description: ""
    };

    const pageEl = document.querySelector("#page");
    
    const containerEl = createEl("div", {class: "container"},
      createEl("div", {class: "card mb-3"}, 
        createEl("img", {class: "card-img-top", style: "width: 5px", src: currentEvent.image || "https://via.placeholder.com/350x150"}),
        createEl("div", {class: "card-body"}, 
          createEl("h1", {class: "card-title"}, currentEvent.title || ""),
          createEl("h2", {class: "text-muted"}, currentEvent.subtitle || ""),
          createEl("p", {class: "card-text mt-3"}, currentEvent.description || createLoremIpsum(100)),
          createEl("a", {class: "btn btn-primary", href: "tickets.html"}, "Buy Tickets")
        )
      ),
      
    )
    pageEl.appendChild(containerEl)
  }

  dateConverter = function(UNIX_timestamp) {
    const a = new Date(UNIX_timestamp);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const result =  month + ' ' + date + ', ' + year 
    return result;
  };

  if (window.location.href.indexOf("tickets") > -1) {

    const purchaseBtn = document.getElementById("purchaseBtn");
    const purchaseEmail = document.getElementById("purchaseEmail");
    const modalEl = document.querySelector(".modal-content");
    const modalBodyEl = document.querySelector(".modal-body");
    const modalFooterEl = document.querySelector(".modal-footer");


    function purchaseTicket () {

      modalEl.removeChild(modalBodyEl)
      modalEl.removeChild(modalFooterEl)

      modalEl.append(createEl("div", {class: "modal-body"},
        createEl("h5", {class: "modal-title"}, 
        `Thanks for requesting a ticket purchase! We will send an email to ${purchaseEmail.value} to complete the order form!`
        ),
      ))
      
    }
    purchaseBtn.addEventListener("click", purchaseTicket);
  }
  // First image is hard coded in index.html
  const carouselSlides = [
    {
      title: "We travel all over the US",
      subtitle: "Check out our schedule!",
      img: "./assets/img/food-table.jpg",
      btnText: "View Schedule",
      btnUrl: "schedule.html"
    },
    {
      title: "Our food is seriously the bomb!",
      subtitle: "What are you waiting for?",
      img: "./assets/img/grill.jpg",
      btnText: "Purchase Tickets",
      btnUrl: "tickets.html"
    },
  ]

  carouselSlides.forEach((slide, i) => {
    $('.carousel-inner').append(`
  <div class="carousel-item fullscreen-carousel" style="background-image: url('${slide.img}')">
    <div class="d-flex h-100 align-items-center justify-content-center carousel-caption">
        <div class="container">
          <div class="row align-items-center justify-content-center">
              <h2 class="display-4 mb-2">${slide.title}</h2>
          </div>
          <div class="row align-items-center justify-content-center"> 
            <h3>${slide.subtitle}</h3>
          </div>
          <div class=" mt-4 row align-items-center justify-content-center"> 
            <a class="btn btn-primary" href="${slide.btnUrl}">
                ${slide.btnText}
            </a>
          </div>
        </div>
    </div>
  </div>`)
  })
});