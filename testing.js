document.addEventListener("DOMContentLoaded", function () {
  const countryInfo = document.getElementById("country-info");
  const countries = document.querySelectorAll(".country");
  let intervalId;

  countries.forEach((country) => {
    country.addEventListener("click", function () {
      const selectedCountry = this.getAttribute("data-country");

      showCountryInfo(selectedCountry);
      clearInterval(intervalId); // Clear the previous interval
      // Update time every second
      intervalId = setInterval(() => {
        updateCountryTime(selectedCountry);
      }, 1000);
    });
  });

  function updateCountryTime(country) {
    const countryData = {
      India: { timezone: "Asia/Kolkata" },
      Pakistan: { timezone: "Asia/Karachi" },
      Bangladesh: { timezone: "Asia/Dhaka" },
      Nepal: { timezone: "Asia/Kathmandu" },
      "Sri Lanka": { timezone: "Asia/Colombo" },
      Bhutan: { timezone: "Asia/Thimphu" },
      Maldives: { timezone: "Indian/Maldives" },
      Afghanistan: { timezone: "Asia/Kabul" },
    };

    const info = countryData[country];
    const timeElement = document.getElementById("country-time");
    timeElement.textContent = getTimeByCountry(info.timezone);
  }

  function getTimeByCountry(timezone) {
    const now = new Date().toLocaleString("en-US", { timeZone: timezone });
    return now;
  }

  function showCountryInfo(country) {
    const countryData = {
      India: {
        capital: "New Delhi",
        population: "1.3 billion",
        area: "3.287 million sq km",
        description:
          "India, situated in South Asia, is a diverse and vibrant nation known for its rich history, cultural heritage, and stunning landscapes. With a population of over 1.3 billion people, it's the world's largest democracy. India boasts a mix of bustling cities, serene countryside, and picturesque beaches. Its ancient civilization dates back thousands of years, with significant contributions to art, science, and philosophy. Indian cuisine, renowned for its spices and flavors, is celebrated worldwide. The country is home to iconic landmarks such as the Taj Mahal, a UNESCO World Heritage Site, and vibrant festivals like Diwali and Holi. India's economy is one of the fastest-growing globally, fueled by a dynamic IT sector, manufacturing industries, and a burgeoning startup ecosystem. However, it also faces challenges like poverty, inequality, and environmental issues. Despite its complexities, India continues to inspire with its resilience, cultural diversity, and spirit of innovation.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/India_flag_300.png/800px-India_flag_300.png",
        timezone: "Asia/Kolkata",
        images: [
          "https://www.india.gov.in/sites/upload_files/npi/files/india-glance2.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClx3FbaezrCXR1HkELNrgnrbSRAblW6BRLQ&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfrOwRcdAL6zyDV8P0cKCZOg7k1Pe5_ZSOjA&usqp=CAU",
          "https://media.geeksforgeeks.org/wp-content/uploads/20230817140416/India-State-and-Capital-Union-Territories.png",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9aRidSU2NMFUOPNDLRGXdK15FGKSHLXZuA&usqp=CAU",
          "https://etimg.etb2bimg.com/photo/102637572.cms",
        ],
        events: [
          "Diwali Festival (October/November)",
          "Holi Festival (March)",
          "Independence Day (August 15)",
        ],
      },
      Pakistan: {
        capital: "Islamabad",
        population: "220 million",
        area: "881,913 sq km",
        description:
          "Pakistan, located in South Asia, is a country characterized by its rich history, diverse cultures, and breathtaking landscapes. With a population of over 220 million people, it's a vibrant tapestry of ethnicities, languages, and traditions. Pakistan's ancient Indus Valley Civilization is among the world's oldest, contributing to the region's archaeological significance. Its cities blend modernity with history, offering bustling markets, historical landmarks, and architectural marvels like Lahore's Badshahi Mosque and Karachi's Quaid-e-Azam Mausoleum. The country's cuisine is renowned for its aromatic spices and flavors, reflecting influences from South Asian, Middle Eastern, and Central Asian cuisines. Pakistan's natural beauty encompasses majestic mountain ranges, lush valleys, and pristine beaches, making it a haven for outdoor enthusiasts and adventure seekers. Despite facing challenges like political instability and economic disparities, Pakistan continues to make strides in various fields, including technology, agriculture, and arts. With a resilient spirit and cultural richness, Pakistan embodies a unique blend of tradition and progress.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/2560px-Flag_of_Pakistan.svg.png",
        timezone: "Asia/Karachi",
        images: [
          "https://images.unsplash.com/photo-1470756544705-1848092fbe5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFraXN0YW58ZW58MHx8MHx8fDA%3D",
          "https://images.unsplash.com/photo-1550586678-f7225f03c44b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFraXN0YW58ZW58MHx8MHx8fDA%3D",
          "https://images.unsplash.com/photo-1595361316014-d4e3f86aa26d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFraXN0YW58ZW58MHx8MHx8fDA%3D",
          "https://images.unsplash.com/photo-1600434890250-44df6e4c0d05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFraXN0YW58ZW58MHx8MHx8fDA%3D",
          "https://plus.unsplash.com/premium_photo-1713364681410-1af2bea528bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFraXN0YW4lMjBwb2xpdGljYWwlMjBtYXB8ZW58MHx8MHx8fDA%3D",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtSbFm9uDdCaWO5yQLkA0XGFynyUWAYncdnw&usqp=CAU",
        ],
        events: [
          "Pakistan Day",
          "Eid al-Fitr (Based on the Islamic lunar calendar, typically in May or June)",
          "Independence Day (August 14th)",
        ],
      },
      Bangladesh: {
        capital: "Dhaka",
        population: "165 million",
        area: "147,570 sq km",
        description:
          " Situated in South Asia, Bangladesh is a land of lush greenery, vibrant culture, and a resilient spirit. With a population exceeding 160 million, it's one of the world's most densely populated countries. Bangladesh is renowned for its fertile plains, the world's largest river delta, and the Sundarbans, home to the Bengal tiger. The country's cultural heritage is evident in its traditional music, dance, and festivals like Pohela Boishakh and Durga Puja. Despite facing challenges such as poverty and natural disasters, Bangladesh has made significant strides in economic development, particularly in the textile and garment industries.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/2560px-Flag_of_Bangladesh.svg.png",
        timezone: "Asia/Dhaka",
        images: [
          "https://images.unsplash.com/photo-1577624060070-ca1afe89ddad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuZ2xhZGVzaHxlbnwwfHwwfHx8MA%3D%3D",
          "https://images.unsplash.com/photo-1585123388867-3bfe6dd4bdbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFuZ2xhZGVzaHxlbnwwfHwwfHx8MA%3D%3D",
          "https://images.unsplash.com/photo-1564034503-e7c9edcb420c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJhbmdsYWRlc2h8ZW58MHx8MHx8fDA%3D",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmujpPbwJV2q2ta8YK7TqcXlQQ3pZhRTIZGA&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ99jNEw6R4ZFuWM7QXuSwUVrvsbT4k1LUGCQ&usqp=CAU",
          "https://images.unsplash.com/photo-1607710577593-5c806a0dc7b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJhbmdsYWRlc2h8ZW58MHx8MHx8fDA%3D",
        ],
        events: [
          "Pohela Boishakh (Bengali New Year)",
          "Victory Day",
          "International Mother Language Day",
        ],
      },
      Nepal: {
        capital: "Kathmandu",
        population: "30 million",
        area: "147,516 sq km",
        description:
          "Nestled in the Himalayas, Nepal is a land of majestic mountains, ancient temples, and rich cultural heritage. With Mount Everest, the world's highest peak, as its crown jewel, Nepal attracts adventurers and spiritual seekers alike. The country's diverse landscapes range from snow-capped peaks to subtropical forests, offering breathtaking scenery at every turn. Nepal's cultural tapestry is woven with Hindu and Buddhist traditions, reflected in its temples, stupas, and vibrant festivals like Dashain and Tihar. Despite facing challenges such as political instability and natural disasters, Nepal's warm hospitality and natural beauty continue to captivate visitors from around the globe.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/2560px-Flag_of_Nepal.svg.png",
        timezone: "Asia/Kathmandu",
        images: [
          "https://images.unsplash.com/photo-1554710869-95f3df6a3197?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmVwYWx8ZW58MHx8MHx8fDA%3D",
          "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmVwYWx8ZW58MHx8MHx8fDA%3D",
          "https://images.unsplash.com/photo-1602102488252-c4c3daadf1c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5lcGFsfGVufDB8fDB8fHww",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTy_5be85FyF9MRZERhPfgr0tNLXId1nqrXg&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUC64MxlnvHQmjVIiXc94xE_OMFLuMXL5RBw&usqp=CAU",
          "https://images.unsplash.com/photo-1529733905113-027ed85d7e33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmVwYWx8ZW58MHx8MHx8fDA%3D",
        ],
        events: ["Buddha Jayanti", "Dashain", "Tihar"],
      },
      "Sri Lanka": {
        capital: "Colombo",
        population: "22 million",
        area: "65,610 sq km",
        description:
          "Situated off the southern tip of India, Sri Lanka is an island nation blessed with tropical beaches, ancient ruins, and diverse wildlife. Known as the Pearl of the Indian Ocean, Sri Lanka's cultural heritage is steeped in history, with UNESCO World Heritage sites like the ancient city of Anuradhapura and the rock fortress of Sigiriya. The country's lush landscapes feature tea plantations, misty mountains, and national parks teeming with elephants, leopards, and colorful birds. Sri Lanka's cuisine is a fusion of flavors influenced by Indian, Dutch, Portuguese, and British culinary traditions. Despite enduring a civil war and natural disasters, Sri Lanka's resilience and beauty continue to enchant travelers seeking adventure and serenity alike.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/2560px-Flag_of_Sri_Lanka.svg.png",
        timezone: "Asia/Colombo",
        images: [
          "https://plus.unsplash.com/premium_photo-1690527101950-5bc2b81ca773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNyaSUyMGxhbmthfGVufDB8fDB8fHww",
          "https://images.unsplash.com/photo-1613526949297-1aba25022d0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3JpJTIwbGFua2F8ZW58MHx8MHx8fDA%3D",
          "https://plus.unsplash.com/premium_photo-1687773505806-468b916d0962?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3JpJTIwbGFua2F8ZW58MHx8MHx8fDA%3D",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_A2V8vCSuV-pSCHC98vs_yJLNfhlYBXQ21w&usqp=CAU",
          "https://static.toiimg.com/thumb/msid-93001654,width-1280,height-720,resizemode-4/93001654.jpg",
          "https://images.unsplash.com/photo-1605771233539-97cf9e108694?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNyaSUyMGxhbmthfGVufDB8fDB8fHww",
        ],
        events: [
          "Sinhala and Tamil New Year (April)",
          "Vesak (Buddha Day) (May)",
          "Kandy Esala Perahera (July or August)",
        ],
      },
      Bhutan: {
        capital: "Thimphu",
        population: "0.8 million",
        area: "38,394 sq km",
        description:
          "Known as the Land of the Thunder Dragon, Bhutan is a small Himalayan kingdom famed for its pristine landscapes, ancient monasteries, and Gross National Happiness philosophy. With its commitment to environmental conservation and cultural preservation, Bhutan is a haven for ecotourism and spiritual retreats. The country's stunning scenery encompasses soaring mountains, lush valleys, and colorful prayer flags fluttering in the breeze. Bhutan's unique culture, rooted in Buddhism, is evident in its traditional architecture, elaborate festivals like Tshechu, and reverence for nature. Despite its small size and remote location, Bhutan's emphasis on holistic well-being and sustainable development sets it apart as a beacon of happiness and harmony.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/2560px-Flag_of_Bhutan.svg.png",
        timezone: "Asia/Thimphu",
        images: [
          "https://images.unsplash.com/photo-1578556881786-851d4b79cb73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymh1dGFufGVufDB8fDB8fHww",
          "https://images.unsplash.com/photo-1580649851649-992b28f56e98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymh1dGFufGVufDB8fDB8fHww",
          "https://images.unsplash.com/photo-1617469165786-8007eda3caa7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ymh1dGFufGVufDB8fDB8fHww",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZ37yb70dVM9toFjzqa3Kd-XZBn5IHe3k4g&usqp=CAU",
          "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201812/Lotay_Tshering.jpeg",
          "https://plus.unsplash.com/premium_photo-1691763914838-027436a3cdc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ymh1dGFufGVufDB8fDB8fHww",
        ],
        events: [
          "Paro Tshechu",
          "Thimphu Tshechu",
          "Coronation Day (June 2nd)",
        ],
      },
      Maldives: {
        capital: "Malé",
        population: "0.5 million",
        area: "300 sq km",
        description:
          "The Maldives is a tropical paradise composed of 26 atolls in the Indian Ocean, southwest of Sri Lanka. Famous for its pristine white-sand beaches, crystal-clear turquoise waters, and vibrant coral reefs, the Maldives is a dream destination for honeymooners, divers, and sun-seekers alike. Its overwater bungalows and luxurious resorts offer unparalleled relaxation and romance, with stunning views of the ocean and marine life just steps away. Beyond its natural beauty, the Maldives boasts a rich cultural heritage influenced by South Asian, Arab, and African traditions. Despite challenges posed by climate change and rising sea levels, the Maldives continues to enchant visitors with its natural splendor, warm hospitality, and commitment to sustainable tourism.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Maldives.svg/2560px-Flag_of_Maldives.svg.png",
        timezone: "Indian/Maldives",
        images: [
          "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D",
          "https://pyt-blogs.imgix.net/2020/04/Hulhumale-island.jpg?auto=format&fit=crop&h=400&ixlib=php-3.3.0&w=1500&wpsize=gridlove-cover",
          "https://images.unsplash.com/photo-1620053755372-ae1d13d5c960?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://plus.unsplash.com/premium_photo-1666285704351-4a69efb3783e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGRpdmVzfGVufDB8fDB8fHww",
          "https://www.mapscd.com/wp-content/uploads/2015/07/maldives-presentation-map-324x324.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6G-ef6AHTHQ7gq7syAmXfwv9jCHMohzZEA&usqp=CAU",
        ],
        events: [
          "National Day (July 26th)",
          "Eid al-Adha (Based on the Islamic lunar calendar, typically in July or August)",
          "Victory Day (November 3rd)",
        ],
      },
      Afghanistan: {
        capital: "Kabul",
        population: "38 million",
        area: "652,864 sq km",
        description:
          "Afghanistan, nestled in the heart of South Asia, is a nation characterized by its dramatic landscapes, vibrant culture, and complex history. With a population of around 38 million, Afghanistan spans an area of 652,864 square kilometers, boasting diverse terrain that ranges from rugged mountains to expansive deserts.At its capital, Kabul, lies the pulse of the nation, where bustling markets and ancient landmarks stand testament to Afghanistan's rich heritage. Throughout its history, Afghanistan has been a crossroads of civilizations, influenced by Persian, Greek, Buddhist, and Islamic cultures.Despite enduring decades of conflict and political instability, Afghanistan's resilient people continue to celebrate their traditions and uphold their customs. From the breathtaking beauty of the Panjshir Valley to the historic significance of the ancient city of Herat, Afghanistan's landscape is dotted with reminders of its storied past.Today, as Afghanistan strives towards peace and stability, it remains a land of contrasts, where ancient traditions intersect with modern aspirations. Though challenges persist, the spirit of the Afghan people endures, embodying resilience, courage, and hope for a brighter future.",
        image:
          "https://plus.unsplash.com/premium_photo-1675865393053-b077c9616420?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWZnaGFuaXN0YW58ZW58MHx8MHx8fDA%3D",
        timezone: "Asia/Kabul",
        images: [
          "https://plus.unsplash.com/premium_photo-1697730062475-fe5216d4b11e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWZnaGFuaXN0YW58ZW58MHx8MHx8fDA%3D",
          "https://images.unsplash.com/photo-1638575319006-bfe92b7fbfba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFmZ2hhbmlzdGFufGVufDB8fDB8fHww",
          "https://images.unsplash.com/photo-1637034132563-d0a62d999d15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFmZ2hhbmlzdGFufGVufDB8fDB8fHww",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWKwAEcvEz_6Kzh7lcLAf14j7AOAFNIVEmJMN8EVRD0w&s",
          "https://ichef.bbci.co.uk/news/480/cpsprodpb/1C61/production/_119956270_haibatullah'slargerpic.jpg.webp",
          "https://images.unsplash.com/photo-1624121078682-6700c771134a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGFmZ2hhbmlzdGFufGVufDB8fDB8fHww",
        ],
        events: [
          "Afghan Independence Day (August 19th)",
          "Eid al-Fitr (Based on the Islamic lunar calendar, typically in May or June)",
          "Nowruz (Persian New Year) (March 21st)",
        ],
      },
    };

    const info = countryData[country];
    const events = info ? info.events : [];
    // Construct HTML to display country information including image
    const html = `
              <h2>${country}</h2>
              <img src="${info.image}" alt="${country}" class="country-image">
              <p><strong>Capital:</strong> ${info.capital}</p>
              <p><strong>Population:</strong> ${info.population}</p>
              <p><strong>Area:</strong> ${info.area}</p>
              <p><strong>Description:</strong> ${info.description}</p>
              <p><strong> Date and Time:</strong> <span id="country-time">${getTimeByCountry(
                info.timezone
              )}</span></p>
              <div class="gallery">
              ${info.images
                .map(
                  (image) =>
                    `<img src="${image}" alt="${country}" class="gallery-item-lp ">`
                )
                .join("")}
            </div>
              <div id="event-calendar">
              <p style="margin-bottom:20px;"><strong>Upcoming Events</strong></p>
        <ul id="event-list">
          ${
            events.length > 0
              ? events.map((event) => `<li>${event}</li>`).join("")
              : "<p>No upcoming events found.</p>"
          }
        </ul>
      </div>
      
        `;
    countryInfo.innerHTML = html;
  }
});
