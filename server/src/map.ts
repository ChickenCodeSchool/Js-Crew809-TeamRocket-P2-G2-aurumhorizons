export interface Map {
  id: number;
  day: number;
  coord: {
    lat: number;
    lng: number;
  };
  lieu: string;
  description: string;
}

export interface Trip {
  id: number;
  name: string;
  country: string;
  duration: number;
  locations: Map[];
}

export const map: Trip[] = [
  {
    id: 1,
    name: "voyage indonesia",
    country: "indonesia",
    duration: 9,
    locations: [
      {
        id: 1,
        day: 1,
        coord: { lat: -8.572721097803555, lng: 115.2594549752106 },
        lieu: "Welcome to the Valley of Kings",
        description:
          "Arrival in Bali and private transfer to the lush highlands of Ubud.\n\nCheck-in at Sthala, a Tribute Portfolio Hotel. Take time to admire the spectacular view of the Wos River from the open-air lobby.\n\nSuggestion : Dinner at the Naga Rooftop Bar for your first taste of local gastronomy and a sunset over the jungle.",
      },
      {
        id: 2,
        day: 2,
        coord: { lat: -8.572721097803555, lng: 115.2594549752106 },
        lieu: "The Spiritual Heart of Ubud",
        description:
          "Morning: Take the hotel's complimentary shuttle to the town center. Must-visit stops include the Monkey Forest and the Ubud Palace.\n\nAfternoon: Head north to walk through the world-famous Tegalalang Rice Terraces.\n\nEvening: Return to the serenity of Sthala for a night swim under the stars.",
      },
      {
        id: 3,
        day: 3,
        coord: { lat: -8.572721097803555, lng: 115.2594549752106 },
        lieu: "Temples and Traditions",
        description:
          "Morning: Visit the Tirta Empul temple (famous for its holy purification springs) or the royal tombs of Gunung Kawi.\n\nAfternoon: Return to the hotel to enjoy included activities (Yoga on the river deck or a Balinese offering-making workshop).\n\nDinner: Explore Ubud's renowned organic and farm-to-table dining scene.",
      },
      {
        id: 4,
        day: 4,
        coord: { lat: -8.358083398978287, lng: 116.0408204563964 },
        lieu: "Setting Sail for the Gilis",
        description:
          "Morning: Transfer to Padang Bai harbor and crossing by Fast Boat to Gili Trawangan.\n\nArrival: Traditional transfer by Cidomo (horse-drawn cart) to the iconic Hotel Vila Ombak.\n\nLate Afternoon: Enjoy a cocktail with your toes in the sand, watching the island's legendary sunset with views of Mount Agung in the distance.",
      },
      {
        id: 5,
        day: 5,
        coord: { lat: -8.358083398978287, lng: 116.0408204563964 },
        lieu: "Turtles and Bicycles",
        description:
          "Morning: Boat trip (private or shared) for a snorkeling adventure. Swim with giant sea turtles and discover the underwater statues of Gili Meno.\n\nAfternoon: Rent a bicycle (there are no motorized vehicles on the island!) and cycle around the island (approx. 1.5 hours at a leisurely pace) to discover wild, untouched beaches.\n\nEvening: Fresh seafood dinner right by the water.",
      },
      {
        id: 6,
        day: 6,
        coord: { lat: -8.358083398978287, lng: 116.0408204563964 },
        lieu: "Tropical Dolce Vita",
        description:
          "Free day to enjoy the facilities at Vila Ombak. Relax on the private beach or by the massive two-tiered swimming pool.\n\nSuggestion: In the evening, visit the Gili T Night Market to taste local Street Food (Satay, Nasi Campur) in a lively, authentic atmosphere.",
      },
      {
        id: 7,
        day: 7,
        coord: { lat: -8.769776050449927, lng: 115.22240895191784 },
        lieu: "Return to the South",
        description:
          "Morning: Return boat crossing to Bali.\n\nTransfer to the Tanjung Benoa peninsula and check-in at Sadara Resort.\n\nAfternoon: Enjoy the tranquility of this boutique hotel. Unlike the massive resorts, the service here is highly personalized. Enjoy a complimentary Afternoon Tea facing the ocean.",
      },
      {
        id: 8,
        day: 8,
        coord: { lat: -8.769776050449927, lng: 115.22240895191784 },
        lieu: "Thrills and Culture",
        description:
          "Morning: Tanjung Benoa is the capital of water sports. On the agenda (optional): Parasailing, Jet Skiing, or simply swimming in the calm lagoon waters.\n\nAfternoon: Excursion to the majestic Uluwatu Temple, perched high on a cliff.\n\nEvening: Watch the traditional Kecak Dance performance at sunset facing the Indian Ocean. A truly magical moment.",
      },
      {
        id: 9,
        day: 9,
        coord: { lat: -8.769776050449927, lng: 115.22240895191784 },
        lieu: "Last Balinese Moments",
        description:
          "Morning: One last dip in the Sadara pool or some last-minute shopping at the nearby Bali Collection mall (5 mins away).\n\nCheck-out and transfer to the international airport, leaving with memories to last a lifetime.",
      },
    ],
  },
  {
    id: 2,
    name: "voyage egypt",
    country: "egypt",
    duration: 6,
    locations: [
      {
        id: 1,
        day: 1,
        coord: { lat: 27.2579, lng: 33.8116 },
        lieu: "Hurghada",
        description:
          "Located on the Red Sea coast, Hurghada is an Egyptian resort town renowned for its golden sandy beaches and turquoise waters. It's a paradise for diving and snorkeling enthusiasts, thanks to its spectacular coral reefs and colorful marine life. The town combines relaxation, water sports, and a vibrant nightlife, while offering a glimpse of oriental charm through its souks and traditional cafes.",
      },
      {
        id: 2,
        day: 2,
        coord: { lat: 27.181359276681764, lng: 33.95738206323998 },
        lieu: "Eden Island Hurghada",
        description:
          "Eden Island is a small, idyllic island off the coast of Hurghada, an exclusive place where luxury meets nature. Its private beaches, crystal-clear waters, and peaceful atmosphere make it a perfect retreat for rejuvenation. Here, you can enjoy diving, kayaking, or simply relaxing in an idyllic setting away from the hustle and bustle of the mainland.",
      },
      {
        id: 3,
        day: 3,
        coord: { lat: 25.6872, lng: 32.6396 },
        lieu: "Louxor",
        description:
          "Luxor is an open-air museum, located on the banks of the Nile. The former capital of Pharaonic Egypt, it is home to exceptional archaeological treasures: the Karnak Temple, the Valley of the Kings, and the Temple of Hatshepsut. Luxor fascinates with the grandeur of its monuments and the magic of the Nile, offering a journey back in time to the heart of Egyptian civilization.",
      },
      {
        id: 4,
        day: 4,
        coord: { lat: 30.0444, lng: 31.2357 },
        lieu: "Le Caire",
        description:
          "Cairo, the vibrant capital of Egypt, is a bustling metropolis where millennia of history intertwine with modern life. Here, one can discover the famous pyramids of Giza, the Sphinx, and the Egyptian Museum, which houses treasures from antiquity. Between the hustle and bustle of its streets, the minarets of its mosques, and the banks of the Nile, Cairo captivates with its unique energy and oriental charm.",
      },
      {
        id: 5,
        day: 5,
        coord: { lat: 31.2001, lng: 29.9187 },
        lieu: "Alexandrie",
        description:
          "Founded by Alexander the Great, Alexandria is the pearl of the Egyptian Mediterranean. This port city blends Greek, Roman, and Arab influences, with iconic sites such as the Bibliotheca Alexandrina, the Citadel of Qaitbay, and the ruins of the ancient city. Its gentle ambiance and waterfront lined with cafes create an atmosphere that is both cultural and romantic.",
      },
      {
        id: 6,
        day: 6,
        coord: { lat: 27.8167, lng: 34.2667 },
        lieu: "Ras Mohamed Nature Reserve",
        description:
          "Located in the far south of the Sinai Peninsula, the Ras Mohamed Nature Reserve is a unique ecological gem. Between the arid desert and the sparkling Red Sea this protected park is home to exceptional biodiversity, both terrestrial and marine. Divers discover some of the world's most beautiful coral reefs, while nature lovers can observe birds, mangroves, and fascinating desert landscapes.",
      },
    ],
  },
  {
    id: 3,
    name: "voyage maldives",
    country: "maldives",
    duration: 7,
    locations: [
      {
        id: 1,
        day: 1,
        coord: { lat: 3.2185018101937164, lng: 73.31247270135447 },
        lieu: "Arrival in a World of Blue",
        description:
          "Your adventure begins as your seaplane glides over endless shades of turquoise, revealing islands scattered like emeralds across the ocean.\nUpon arrival, you are welcomed with cool towels, fresh coconut water, and the soft sound of waves.\nSettle into your villa—whether perched above the water or nestled on the shore—and spend the afternoon barefoot on warm sand.\nAs evening falls, dine under the open sky while the horizon melts into gold and lavender.",
      },
      {
        id: 2,
        day: 2,
        coord: { lat: 3.2185018101937164, lng: 73.31247270135447 },
        lieu: "Exploring Coral Gardens",
        description:
          "Begin your morning with snorkeling or a guided diving session among vibrant coral reefs.\nTurtles drift gracefully, schools of tropical fish flash like living rainbows, and manta rays dance in slow, elegant circles.\nLater, relax by the infinity pool or enjoy a beachside lunch with your feet in the sand.\nEnd the day with a sunset cruise, where dolphins often appear, playful and curious beside the boat.",
      },
      {
        id: 3,
        day: 3,
        coord: { lat: 3.2185018101937164, lng: 73.31247270135447 },
        lieu: "Water Adventures and Island Life",
        description:
          "Today is for thrill-seekers and nature lovers.\nTry jet skiing through calm lagoons, paddleboarding over crystal-clear shallows, or kayaking around the island's hidden coves.\nIn the afternoon, wander through the island's palm-lined interior, discovering quiet trails, tropical gardens, and local wildlife.\nAt night, enjoy a beach barbecue beneath a dome of stars so bright it feels like they're within reach.",
      },
      {
        id: 4,
        day: 4,
        coord: { lat: 3.2185018101937164, lng: 73.31247270135447 },
        lieu: "Wellness, Peace, and Ocean Breeze",
        description:
          "Reserve this day for pure relaxation.\nBegin with sunrise yoga on the beach, followed by a spa session in an overwater pavilion where the floor's glass panels reveal fish floating beneath you.\nSpend the afternoon reading in a hammock, napping to the rhythm of the waves, or drifting in the sea's warm embrace.\nA candlelit dinner on a private sandbank completes this day of serenity.",
      },
      {
        id: 5,
        day: 5,
        coord: { lat: 3.2185018101937164, lng: 73.31247270135447 },
        lieu: "Culture and Local Island Discovery",
        description:
          "Set off on a short boat trip to a nearby inhabited island.\nStroll through colorful streets, visit small craft shops, and learn about Maldivian traditions—boat-making, weaving, and local cuisine.\nEnjoy a traditional Maldivian lunch prepared with coconut, fresh fish, and spices.\nReturn to your resort for an evening of music, dance, and storytelling under palm trees glowing with lantern light.",
      },
      {
        id: 6,
        day: 6,
        coord: { lat: 3.2185018101937164, lng: 73.31247270135447 },
        lieu: "Ocean Excursions and Hidden Wonders",
        description:
          "Embark on a full-day excursion:\nSnorkel with reef sharks, search for manta rays, or visit a deserted island where you can enjoy a picnic in total solitude.\nSwim, sunbathe, and explore the untouched beauty of remote sandbanks that vanish and reappear with the tide.\nBack at the resort, end the day with a starlit bath on your villa's terrace or a midnight swim in the warm, moonlit lagoon.",
      },
      {
        id: 7,
        day: 7,
        coord: { lat: 3.2185018101937164, lng: 73.31247270135447 },
        lieu: "Farewell to Paradise",
        description:
          "Spend your final morning savoring every moment—one last walk along the soft shoreline, one last dip in the ocean, one last breath of salty island air.\nEnjoy a leisurely breakfast overlooking the sea before preparing for your departure.\nAs your boat or seaplane carries you away, the Maldives leave you with memories of calm waters, glowing sunsets, and moments of pure wonder.",
      },
    ],
  },
  {
    id: 4,
    name: "voyage philippines",
    country: "philippines",
    duration: 7,
    locations: [
      {
        id: 1,
        day: 1, //1-3jours
        coord: { lat: 11.195715760299452, lng: 119.41749999607785 },
        lieu: "El Nido (Palawan)",
        description:
          "Often revered as the gateway to paradise, El Nido is located at the northern tip of mainland Palawan. It is world-famous for the Bacuit Archipelago, a stunning labyrinth of limestone karst cliffs rising vertically from crystalline turquoise waters. It is the premier destination for luxury island-hopping, offering access to hidden wonders such as the Big and Small Lagoons, secret white-sand beaches, and vibrant coral reefs.",
      },
      {
        id: 2,
        day: 2, //3-6jours
        coord: { lat: 18.196202483875346, lng: 120.59271778127932 },
        lieu: "Ilocos Norte (Luzon)",
        description:
          "Situated in the northwestern corner of Luzon, Ilocos Norte offers a unique blend of colonial history and dramatic landscapes. It is renowned for the Paoay Sand Dunes (offering 4x4 adventures), the Paoay Church (a UNESCO World Heritage site famous for its earthquake-baroque architecture), and the iconic Bangui Windmills lining the coast. Further north, Pagudpud offers pristine beaches often compared to Boracay, but with a far more serene atmosphere.",
      },
      {
        id: 3,
        day: 3, //6-9jours
        coord: { lat: 9.835132555824218, lng: 118.73845364024186 },
        lieu: "Palawan (Province)",
        description:
          "Frequently voted the Best Island in the World, Palawan is the Philippines Last Ecological Frontier. This archipelagic province stretches from Mindoro down to Borneo. Beyond El Nido, it houses the Puerto Princesa Underground River (one of the New 7 Wonders of Nature) and the Tubbataha Reefs, a world-class diving site. It is a sanctuary of lush jungles, diverse wildlife, and untouched coastlines.",
      },
      {
        id: 4,
        day: 4, //9-12Jours
        coord: { lat: 13.179077573684621, lng: 123.67155708075677 },
        lieu: "Sumlang Lake (Albay)",
        description:
          "Located in Camalig, Albay, Sumlang Lake is a picturesque eco-tourism destination. It is celebrated for offering one of the most majestic, unobstructed views of the Mayon Volcano, famous for its perfect cone shape. Visitors can enjoy a peaceful experience on traditional bamboo rafts, dine by the water, and explore local craftsmanship, specifically furniture made from Abaca fiber.",
      },
      {
        id: 5,
        day: 5, //9-12Jours
        coord: { lat: 13.179077573684621, lng: 123.67155708075677 },
        lieu: "Sumlang Lake (Albay)",
        description:
          "Located in Camalig, Albay, Sumlang Lake is a picturesque eco-tourism destination. It is celebrated for offering one of the most majestic, unobstructed views of the Mayon Volcano, famous for its perfect cone shape. Visitors can enjoy a peaceful experience on traditional bamboo rafts, dine by the water, and explore local craftsmanship, specifically furniture made from Abaca fiber.",
      },
      {
        id: 6,
        day: 6, //9-12Jours
        coord: { lat: 13.179077573684621, lng: 123.67155708075677 },
        lieu: "Sumlang Lake (Albay)",
        description:
          "Located in Camalig, Albay, Sumlang Lake is a picturesque eco-tourism destination. It is celebrated for offering one of the most majestic, unobstructed views of the Mayon Volcano, famous for its perfect cone shape. Visitors can enjoy a peaceful experience on traditional bamboo rafts, dine by the water, and explore local craftsmanship, specifically furniture made from Abaca fiber.",
      },
    ],
  },
  {
    id: 5,
    name: "voyage seychelles",
    country: "seychelles",
    duration: 7,
    locations: [
      {
        id: 1,
        day: 1,
        coord: { lat: -4.6668, lng: 55.5185 },
        lieu: "Aéroport de Victoria-Seychelles",
        description:
          "This is the main international airport of the Seychelles, located on Mahé island, close to the capital city, Victoria. It serves as your main point of arrival and departure for exploring the archipelago.",
      },
      {
        id: 2,
        day: 2,
        coord: { lat: -4.7861, lng: 55.5273 },
        lieu: "Anse Capucins Trail",
        description:
          "A hiking trail often considered difficult, located on Mahé island. It leads to a spectacular viewpoint and sometimes to a small, secluded beach, offering breathtaking views of the coastline.",
      },
      {
        id: 3,
        day: 3,
        coord: { lat: -4.7193, lng: 55.4801 },
        lieu: "Anse Louis",
        description:
          "A picturesque and often less crowded beach, situated on the southwest coast of Mahé island. It is known for its fine white sand, turquoise waters, and tranquility.",
      },
      {
        id: 4,
        day: 4,
        coord: { lat: -4.6774, lng: 55.4484 },
        lieu: "Grand Anse Beach",
        description:
          "A beach named Grand Anse exists on several islands, but the most famous is usually the one on Mahé (the longest beach on the island, ideal for long walks) or the one on La Digue (famous for its wild beauty, but often with stronger currents).",
      },
      {
        id: 5,
        day: 5,
        coord: { lat: -4.4787, lng: 55.2371 },
        lieu: "La Digue",
        description:
          "This is one of the three main islands of the Seychelles. It is famous for its laid-back atmosphere, the primary use of bicycles for transportation, and of course, its iconic beach Anse Source d'Argent.",
      },
      {
        id: 6,
        day: 6,
        coord: { lat: -4.6026, lng: 55.4323 },
        lieu: "Big Blue Divers",
        description:
          "This is a scuba diving center based on Praslin island. They organize excursions to explore the rich seabed, coral reefs, and aquatic wildlife of the Seychelles.",
      },
      {
        id: 7,
        day: 7,
        coord: { lat: -4.602792976240844, lng: 55.506182403371696 },
        lieu: "Parc National Marin de Sainte Anne",
        description:
          "The first marine national park in the Indian Ocean, just off the coast of Mahé. It is composed of several small islands (Sainte Anne, Cerf, Moyenne, etc.). It is a beautiful spot for snorkeling, diving, or a boat trip to observe marine life.",
      },
    ],
  },
  {
    id: 6,
    name: "voyage iceland",
    country: "iceland",
    duration: 7,
    locations: [
      {
        id: 1,
        day: 1,
        coord: { lat: 64.1355, lng: -21.8954 },
        lieu: "Reykjavik",
        description:
          "Start your adventure in Reykjavik, Iceland's vibrant capital. Explore the charming streets, visit the iconic Hallgrímskirkja church, and enjoy the local art scene, bustling cafes, and unique boutiques. Reykjavik offers a perfect blend of modernity and traditional Icelandic culture.",
      },
      {
        id: 2,
        day: 2,
        coord: { lat: 64.2559, lng: -21.13 },
        lieu: "Thingvellir National Park",
        description:
          "Discover Thingvellir National Park, a UNESCO World Heritage site, where you can witness the dramatic rift between the Eurasian and North American tectonic plates. Explore the stunning landscapes, ancient ruins, and the site of Iceland's first parliament, founded in 930 AD.",
      },
      {
        id: 3,
        day: 3,
        coord: { lat: 64.3136, lng: -20.3024 },
        lieu: "Strokkur Geyser",
        description:
          "Marvel at the spectacular Strokkur Geyser in the Geysir geothermal area. Watch as the geyser erupts every few minutes, shooting water high into the air. It's an awe-inspiring natural phenomenon in the heart of Iceland's famous Golden Circle.",
      },
      {
        id: 4,
        day: 4,
        coord: { lat: 63.8804, lng: -22.4495 },
        lieu: "Blue Lagoon",
        description:
          "Relax in the warm, milky-blue waters of the Blue Lagoon, Iceland's world-renowned geothermal spa. Surrounded by a stunning lava landscape, the mineral-rich waters are perfect for rejuvenating your skin and soaking in the natural beauty of the area.",
      },
      {
        id: 5,
        day: 5,
        coord: { lat: 63.404, lng: -19.071 },
        lieu: "Reynisfjara Beach",
        description:
          "Explore the striking black sand beaches of Reynisfjara, where dramatic basalt sea stacks rise from the ocean. This picturesque beach, with its powerful waves and mysterious atmosphere, is one of Iceland's most iconic natural wonders.",
      },
      {
        id: 6,
        day: 6,
        coord: { lat: 64.0485, lng: -16.1794 },
        lieu: "Jökulsárlón Glacier Lagoon",
        description:
          "Visit the ethereal Jökulsárlón Glacier Lagoon, where you'll be mesmerized by floating icebergs and the calm blue waters of this glacial lake. A boat tour offers close-up views of the sparkling ice and nearby Diamond Beach, where ice chunks wash up on the shore.",
      },
      {
        id: 7,
        day: 7,
        coord: { lat: 64.1355, lng: -21.8954 },
        lieu: "Reykjavik",
        description:
          "End your trip with a final day in Reykjavik. Take the time to visit any spots you missed earlier, enjoy the local cuisine, or unwind at one of the city's many hot springs before you head home with unforgettable memories of Iceland's wild beauty.",
      },
    ],
  },
  {
    id: 7,
    name: "voyage japan",
    country: "japan",
    duration: 10,
    locations: [
      {
        id: 1,
        day: 1,
        coord: { lat: 35.6762, lng: 139.6503 },
        lieu: "Welcome to Tokyo Neon & Tradition",
        description:
          "Arrival in Tokyo and private transfer to your hotel in Shinjuku.\n\n" +
          "Check-in at the Century Southern Tower, overlooking the city skyline.\n\n" +
          "Suggestion : Dinner in Omoide Yokocho to dive into authentic yakitori and lively alleyway vibes.",
      },
      {
        id: 2,
        day: 2,
        coord: { lat: 35.7101, lng: 139.8107 },
        lieu: "Old Town Asakusa & Skytree Views",
        description:
          "Morning: Explore Senso-ji Temple, Nakamise Street and traditional craft shops.\n\n" +
          "Afternoon: Head to Tokyo Skytree for panoramic city views.\n\n" +
          "Evening: Relax at your hotel or enjoy a night stroll through Shibuya Crossing.",
      },
      {
        id: 3,
        day: 3,
        coord: { lat: 35.0116, lng: 135.7681 },
        lieu: "Kyoto The Cultural Capital",
        description:
          "Morning: Shinkansen to Kyoto. Check-in at a ryokan near Gion.\n\n" +
          "Afternoon: Visit Yasaka Shrine and wander the atmospheric streets where geishas can sometimes be seen.\n\n" +
          "Evening: Traditional kaiseki dinner at your ryokan.",
      },
      {
        id: 4,
        day: 4,
        coord: { lat: 34.9671, lng: 135.7727 },
        lieu: "Kyoto Temples & Bamboo Forest",
        description:
          "Morning: Explore the iconic Fushimi Inari Taisha and its infinite red torii gates.\n\n" +
          "Afternoon: Transfer to Arashiyama for a peaceful walk through the Bamboo Grove and the Tenryu-ji gardens.\n\n" +
          "Evening: Optional tea ceremony experience.",
      },
      {
        id: 5,
        day: 5,
        coord: { lat: 34.6937, lng: 135.5023 },
        lieu: "Osaka Street Food Capital",
        description:
          "Morning: Train to Osaka. Check-in at your hotel near Namba.\n\n" +
          "Afternoon: Visit Osaka Castle and its surrounding park.\n\n" +
          "Evening: Dotonbori food tour — takoyaki, okonomiyaki, neon lights and lively ambiance.",
      },
      {
        id: 6,
        day: 6,
        coord: { lat: 34.3914, lng: 132.4519 },
        lieu: "Miyajima & Hiroshima Islands & Memory",
        description:
          "Morning: Day trip to Hiroshima. Visit the Peace Memorial Park and Museum.\n\n" +
          "Afternoon: Ferry to Miyajima to admire the floating torii of Itsukushima Shrine.\n\n" +
          "Evening: Return to Osaka or stay overnight on the island for a serene experience.",
      },
    ],
  },
  {
    id: 8,
    name: "voyage italy",
    country: "italy",
    duration: 9,
    locations: [
      {
        id: 1,
        day: 1,
        coord: { lat: 41.9028, lng: 12.4964 },
        lieu: "Rome – The Eternal City Awaits",
        description:
          "Arrival in Rome and private transfer to your hotel near Piazza Navona.\n\n" +
          "Check-in and first stroll through the historical center.\n\n" +
          "Suggestion : Dinner in a traditional trattoria to try authentic carbonara under warm Roman lights.",
      },
      {
        id: 2,
        day: 2,
        coord: { lat: 41.8902, lng: 12.4922 },
        lieu: "Colosseum, Forum & Timeless Rome",
        description:
          "Morning: Guided visit of the Colosseum, Roman Forum and Palatine Hill.\n\n" +
          "Afternoon: Explore the Pantheon and enjoy a gelato near Trevi Fountain.\n\n" +
          "Evening: Sunset walk along the Tiber River.",
      },
      {
        id: 3,
        day: 3,
        coord: { lat: 43.7696, lng: 11.2558 },
        lieu: "Florence – Cradle of the Renaissance",
        description:
          "Morning: Train to Florence. Check-in at your boutique hotel near the Duomo.\n\n" +
          "Afternoon: Visit the Uffizi Gallery and admire masterpieces by Botticelli and Michelangelo.\n\n" +
          "Evening: Dinner in the lively San Lorenzo district.",
      },
      {
        id: 4,
        day: 4,
        coord: { lat: 43.7735, lng: 11.2551 },
        lieu: "Florence – Art, Gardens & Tuscan Views",
        description:
          "Morning: Climb to Piazzale Michelangelo for a panoramic view of the entire city.\n\n" +
          "Afternoon: Explore the Pitti Palace and its Boboli Gardens.\n\n" +
          "Evening: Optional wine tasting experience featuring Tuscan reds.",
      },
      {
        id: 5,
        day: 5,
        coord: { lat: 45.4408, lng: 12.3155 },
        lieu: "Venice – The Floating City",
        description:
          "Morning: Train to Venice. Check-in at your hotel in Cannaregio.\n\n" +
          "Afternoon: Gondola ride along quiet canals and visit St. Mark’s Basilica.\n\n" +
          "Evening: Enjoy cicchetti (Venetian tapas) in a charming bacaro.",
      },
      {
        id: 6,
        day: 6,
        coord: { lat: 44.13286659851758, lng: 9.728972228591937 },
        lieu: "Cinque Terre – Coastline of Colors",
        description:
          "Morning: Transfer to the Cinque Terre region. Check-in in Vernazza or Monterosso.\n\n" +
          "Afternoon: Coastal hike between the villages, surrounded by sea views and pastel houses.\n\n" +
          "Evening: Seafood dinner overlooking the Mediterranean.",
      },
    ],
  },
  {
    id: 9,
    name: "voyage costa rica",
    country: "costa rica",
    duration: 9,
    locations: [
      {
        id: 1,
        day: 1,
        coord: { lat: 9.7489, lng: -83.7534 },
        lieu: "San José – Welcome to Pura Vida",
        description:
          "Arrival in San José and private transfer to your boutique hotel near Barrio Amón.\n\n" +
          "Take some time to relax and enjoy your first Costa Rican coffee.\n\n" +
          "Suggestion : Dinner at a local soda to discover traditional casado and fresh tropical juices.",
      },
      {
        id: 2,
        day: 2,
        coord: { lat: 10.471, lng: -84.6452 },
        lieu: "La Fortuna – Arenal Volcano Adventures",
        description:
          "Morning: Transfer through lush countryside to La Fortuna.\n\n" +
          "Afternoon: Visit the famous Arenal Volcano National Park—hiking trails, wildlife and lava fields.\n\n" +
          "Evening: Relax in natural hot springs surrounded by jungle sounds.",
      },
      {
        id: 3,
        day: 3,
        coord: { lat: 10.32, lng: -84.825 },
        lieu: "La Fortuna – Waterfalls & Forest",
        description:
          "Morning: Explore the La Fortuna Waterfall and swim in its crystal-clear pool.\n\n" +
          "Afternoon: Hanging bridges walk above the rainforest canopy.\n\n" +
          "Evening: Dinner in town with a view of Arenal lighting up at sunset.",
      },
      {
        id: 4,
        day: 4,
        coord: { lat: 10.2683, lng: -84.825 },
        lieu: "Monteverde – Cloud Forest Magic",
        description:
          "Morning: Scenic drive to Monteverde through mountains and rural villages.\n\n" +
          "Afternoon: Guided walk in the Monteverde Cloud Forest Reserve—spectacular biodiversity and mysterious mist.\n\n" +
          "Evening: Optional night tour to spot nocturnal animals.",
      },
      {
        id: 5,
        day: 5,
        coord: { lat: 9.6302, lng: -84.112 },
        lieu: "Manuel Antonio – Beaches & Wildlife",
        description:
          "Morning: Transfer to the Pacific Coast and check-in at your eco-lodge near Manuel Antonio.\n\n" +
          "Afternoon: Relax on white-sand beaches or encounter monkeys right at your hotel.\n\n" +
          "Evening: Sunset on the coast—one of the best in Costa Rica.",
      },
      {
        id: 6,
        day: 6,
        coord: { lat: 9.3763, lng: -83.837 },
        lieu: "Osa Peninsula – The Wild Frontier",
        description:
          "Morning: Travel to the Osa Peninsula, home to one of the richest ecosystems on Earth.\n\n" +
          "Afternoon: Explore the region or embark on a guided tour in Corcovado National Park.\n\n" +
          "Evening: Dinner at the lodge accompanied by rainforest sounds.",
      },
    ],
  },
  {
    id: 10,
    name: "voyage greece",
    country: "greece",
    duration: 9,
    locations: [
      {
        id: 1,
        day: 1,
        coord: { lat: 37.9838, lng: 23.7275 },
        lieu: "Athens – Birthplace of Western Civilization",
        description:
          "Arrival in Athens and private transfer to your hotel in Plaka.\n\n" +
          "Stroll through the old town, with its narrow streets and lively tavernas.\n\n" +
          "Suggestion : Dinner with a view of the Acropolis illuminated at night.",
      },
      {
        id: 2,
        day: 2,
        coord: { lat: 37.9715, lng: 23.7257 },
        lieu: "Athens – Acropolis & Ancient Wonders",
        description:
          "Morning: Visit the Acropolis, Parthenon, and the impressive Acropolis Museum.\n\n" +
          "Afternoon: Explore the Agora and Anafiotika, a charming Cycladic-style quarter.\n\n" +
          "Evening: Enjoy Greek mezze and music in a traditional taverna.",
      },
      {
        id: 3,
        day: 3,
        coord: { lat: 37.4453, lng: 25.3287 },
        lieu: "Mykonos – Whitewashed Streets & Windmills",
        description:
          "Morning: Ferry to Mykonos. Check-in at your hotel near Mykonos Town.\n\n" +
          "Afternoon: Wander through its iconic maze of narrow white streets and visit the famous windmills.\n\n" +
          "Evening: Dinner by the sea in Little Venice.",
      },
      {
        id: 4,
        day: 4,
        coord: { lat: 37.4467, lng: 25.3372 },
        lieu: "Mykonos – Beaches & Island Vibes",
        description:
          "Morning: Relax on one of Mykonos' iconic beaches like Psarou or Ornos.\n\n" +
          "Afternoon: Visit the archaeological island of Delos for a dose of history.\n\n" +
          "Evening: Sunset cocktail overlooking the Aegean Sea.",
      },
      {
        id: 5,
        day: 5,
        coord: { lat: 36.3932, lng: 25.4615 },
        lieu: "Santorini – Cliffs & Blue Domes",
        description:
          "Morning: Ferry to Santorini. Check-in at your hotel in Oia or Fira.\n\n" +
          "Afternoon: Explore the caldera paths and iconic blue-domed churches.\n\n" +
          "Evening: Legendary sunset in Oia—one of the most beautiful in the world.",
      },
      {
        id: 6,
        day: 6,
        coord: { lat: 36.3609, lng: 25.4317 },
        lieu: "Santorini – Volcanic Landscapes & Wine",
        description:
          "Morning: Boat tour to the volcanic islands and hot springs.\n\n" +
          "Afternoon: Wine tasting in a local vineyard famous for Assyrtiko wines.\n\n" +
          "Evening: Dinner on a terrace overlooking the illuminated cliffs.",
      },
    ],
  },
  {
    id: 11,
    name: "voyage peru",
    country: "peru",
    duration: 10,
    locations: [
      {
        id: 1,
        day: 1,
        coord: { lat: -12.0464, lng: -77.0428 },
        lieu: "Lima – Gateway to Peru",
        description:
          "Arrival in Lima and private transfer to your hotel in Miraflores.\n\n" +
          "Stroll along the coastal boardwalk and watch surfers riding the Pacific waves.\n\n" +
          "Suggestion : Dinner in a cevichería to enjoy the freshest ceviche in the country.",
      },
      {
        id: 2,
        day: 2,
        coord: { lat: -12.1458, lng: -77.0194 },
        lieu: "Lima – History & Gastronomy",
        description:
          "Morning: Explore Lima’s historic center — Plaza de Armas, cathedral and colorful colonial architecture.\n\n" +
          "Afternoon: Visit the Larco Museum for an introduction to ancient Peruvian cultures.\n\n" +
          "Evening: Optional gourmet dinner — Lima is one of the world’s top food capitals.",
      },
      {
        id: 3,
        day: 3,
        coord: { lat: -13.532, lng: -71.9675 },
        lieu: "Cusco – Ancient Capital of the Inca Empire",
        description:
          "Morning: Flight to Cusco. Transfer to your hotel in the historic center.\n\n" +
          "Afternoon: Slow acclimatization walk through narrow stone streets, San Blas district and local markets.\n\n" +
          "Evening: Enjoy Andean dishes infused with local herbs and spices.",
      },
      {
        id: 4,
        day: 4,
        coord: { lat: -13.3389, lng: -72.0969 },
        lieu: "Sacred Valley – Terraces & Living Culture",
        description:
          "Morning: Excursion to the Sacred Valley — visit Pisac ruins and its colorful artisan market.\n\n" +
          "Afternoon: Explore Ollantaytambo, one of the last living Inca towns with impressive fortresses.\n\n" +
          "Evening: Spend the night in the valley surrounded by mountains and starry skies.",
      },
      {
        id: 5,
        day: 5,
        coord: { lat: -13.1631, lng: -72.5449 },
        lieu: "Machu Picchu – The Lost City of the Incas",
        description:
          "Morning: Scenic train ride to Aguas Calientes, followed by a bus to Machu Picchu.\n\n" +
          "Afternoon: Guided tour of the iconic citadel — terraces, temples and panoramic viewpoints.\n\n" +
          "Evening: Optional second entrance for sunset light or relax in the hot springs of Aguas Calientes.",
      },
      {
        id: 6,
        day: 6,
        coord: { lat: -15.8402, lng: -70.0219 },
        lieu: "Lake Titicaca – Islands Above the Clouds",
        description:
          "Morning: Transfer to Puno along the scenic Altiplano.\n\n" +
          "Afternoon: Boat trip to the Uros floating islands made entirely of totora reeds.\n\n" +
          "Evening: Quiet night by the lake at high altitude — one of the world’s most mystical landscapes.",
      },
    ],
  },
  {
    id: 12,
    name: "voyage morocco",
    country: "morocco",
    duration: 9,
    locations: [
      {
        id: 1,
        day: 1,
        coord: { lat: 31.6295, lng: -7.9811 },
        lieu: "Marrakech – The Red City",
        description:
          "Arrival in Marrakech and private transfer to your riad in the medina.\n\n" +
          "Lose yourself in the vibrant souks and admire the colors, scents and crafts.\n\n" +
          "Suggestion : Dinner on a rooftop overlooking Jemaa el-Fna at sunset.",
      },
      {
        id: 2,
        day: 2,
        coord: { lat: 31.6315, lng: -7.9891 },
        lieu: "Marrakech – Palaces & Gardens",
        description:
          "Morning: Visit Bahia Palace and the Saadian Tombs.\n\n" +
          "Afternoon: Explore the Majorelle Garden and the Yves Saint Laurent Museum.\n\n" +
          "Evening: Relax in a traditional hammam experience in the medina.",
      },
      {
        id: 3,
        day: 3,
        coord: { lat: 31.112, lng: -4.0075 },
        lieu: "Merzouga – Gateway to the Sahara",
        description:
          "Morning: Scenic drive through the High Atlas mountains and Berber villages.\n\n" +
          "Afternoon: Arrive near Merzouga, where your camel caravan awaits.\n\n" +
          "Evening: Sunset over the dunes and night in a desert camp under the stars.",
      },
      {
        id: 4,
        day: 4,
        coord: { lat: 31.3498, lng: -5.7536 },
        lieu: "Dades Valley – Canyons & Kasbahs",
        description:
          "Morning: Sunrise in the Sahara, followed by transfer toward Tinghir.\n\n" +
          "Afternoon: Explore the spectacular Todra Gorge and the palm oasis.\n\n" +
          "Evening: Overnight in a kasbah overlooking the Dades Valley.",
      },
      {
        id: 5,
        day: 5,
        coord: { lat: 34.0331, lng: -4.9998 },
        lieu: "Fès – The Spiritual Heart of Morocco",
        description:
          "Morning: Drive to Fès via cedar forests and Middle Atlas villages.\n\n" +
          "Afternoon: Check-in at your riad and first immersion into the ancient medina.\n\n" +
          "Evening: Traditional Moroccan dinner with live Andalusian music.",
      },
      {
        id: 6,
        day: 6,
        coord: { lat: 34.0433, lng: -4.9997 },
        lieu: "Fès – Medina & Artisanal Heritage",
        description:
          "Morning: Guided tour of Fès el-Bali — tanneries, madrasas, artisan workshops.\n\n" +
          "Afternoon: Visit the Royal Palace and the Mellah district.\n\n" +
          "Evening: Tea on a terrace overlooking the labyrinth of rooftops.",
      },
    ],
  },
  {
    id: 13,
    name: "voyage australia",
    country: "australia",
    duration: 12,
    locations: [
      {
        id: 1,
        day: 1,
        coord: { lat: -33.8688, lng: 151.2093 },
        lieu: "Sydney – Harbour Lights & Coastal Vibes",
        description:
          "Arrival in Sydney and private transfer to your hotel near Circular Quay.\n\n" +
          "Take a stroll along the harbour and admire the Opera House and Harbour Bridge.\n\n" +
          "Suggestion : Dinner in The Rocks for your first taste of Australian fusion cuisine.",
      },
      {
        id: 2,
        day: 2,
        coord: { lat: -33.8908, lng: 151.2743 },
        lieu: "Sydney – Bondi Beach & Coastal Walk",
        description:
          "Morning: Enjoy Bondi Beach and walk the iconic Bondi–Coogee coastal path.\n\n" +
          "Afternoon: Visit the Royal Botanic Gardens and relax overlooking the bay.\n\n" +
          "Evening: Harbour cruise at sunset for incredible skyline views.",
      },
      {
        id: 3,
        day: 3,
        coord: { lat: -37.8136, lng: 144.9631 },
        lieu: "Melbourne – Culture & Coffee Capital",
        description:
          "Morning: Flight to Melbourne and check-in near Federation Square.\n\n" +
          "Afternoon: Discover the famous laneways filled with street art, cafes and boutiques.\n\n" +
          "Evening: Dinner in the lively neighbourhood of Fitzroy.",
      },
      {
        id: 4,
        day: 4,
        coord: { lat: -38.6656, lng: 143.1035 },
        lieu: "Great Ocean Road – Landscapes & Cliffs",
        description:
          "Morning: Day trip along the Great Ocean Road, one of the world’s most scenic drives.\n\n" +
          "Afternoon: Admire the Twelve Apostles, Loch Ard Gorge and dramatic coastal landscapes.\n\n" +
          "Evening: Return to Melbourne and enjoy a relaxed night in the city.",
      },
      {
        id: 5,
        day: 5,
        coord: { lat: -16.9186, lng: 145.7781 },
        lieu: "Cairns – Gateway to the Great Barrier Reef",
        description:
          "Morning: Flight to Cairns and transfer to your tropical resort.\n\n" +
          "Afternoon: Explore the Esplanade or relax by the lagoon.\n\n" +
          "Evening: Dinner featuring fresh seafood and tropical fruits.",
      },
      {
        id: 6,
        day: 6,
        coord: { lat: -16.4495, lng: 145.4623 },
        lieu: "Great Barrier Reef – Coral & Marine Wonders",
        description:
          "Morning: Full-day boat trip to the Great Barrier Reef — snorkeling or diving among vibrant coral gardens.\n\n" +
          "Afternoon: Relax on the deck and enjoy the turquoise waters.\n\n" +
          "Evening: Return to Cairns and enjoy a peaceful tropical night.",
      },
    ],
  },
  {
    id: 14,
    name: "voyage canada",
    country: "canada",
    duration: 10,
    locations: [
      {
        id: 1,
        day: 1,
        coord: { lat: 43.6532, lng: -79.3832 },
        lieu: "Toronto – Urban Energy & Lake Views",
        description:
          "Arrival in Toronto and transfer to your hotel near the Harbourfront.\n\n" +
          "Stroll along Lake Ontario and explore the lively Distillery District.\n\n" +
          "Suggestion : Dinner at a rooftop restaurant overlooking the CN Tower.",
      },
      {
        id: 2,
        day: 2,
        coord: { lat: 43.0896, lng: -79.0849 },
        lieu: "Niagara Falls – Nature's Power",
        description:
          "Morning: Day trip to the spectacular Niagara Falls.\n\n" +
          "Afternoon: Boat cruise to the base of the falls and walk along the scenic viewpoints.\n\n" +
          "Evening: Return to Toronto and enjoy the vibrant nightlife or a quiet waterfront dinner.",
      },
      {
        id: 3,
        day: 3,
        coord: { lat: 45.5019, lng: -73.5674 },
        lieu: "Montréal – Culture, Festivals & Flavours",
        description:
          "Morning: Train or flight to Montréal. Check-in at your hotel in the Old Port.\n\n" +
          "Afternoon: Explore cobblestone streets, Notre-Dame Basilica and trendy Mile End.\n\n" +
          "Evening: Dinner in a classic brasserie — Montréal cuisine is a mix of French and North American influences.",
      },
      {
        id: 4,
        day: 4,
        coord: { lat: 46.8139, lng: -71.208 },
        lieu: "Québec City – History & European Charm",
        description:
          "Morning: Scenic drive or train to Québec City.\n\n" +
          "Afternoon: Visit the fortified Old Québec, Château Frontenac and the Plains of Abraham.\n\n" +
          "Evening: Cozy dinner in a traditional auberge with Québecois specialties.",
      },
      {
        id: 5,
        day: 5,
        coord: { lat: 51.0486, lng: -114.0708 },
        lieu: "Calgary – Gateway to the Rockies",
        description:
          "Morning: Flight to Calgary and transfer to your hotel downtown.\n\n" +
          "Afternoon: Explore Stephen Avenue, Calgary Tower and the riverside parks.\n\n" +
          "Evening: Western-style dinner before your adventure into the mountains.",
      },
      {
        id: 6,
        day: 6,
        coord: { lat: 51.4254, lng: -116.1773 },
        lieu: "Banff National Park – Lakes & Mountains",
        description:
          "Morning: Drive to Banff and discover emerald Lake Louise.\n\n" +
          "Afternoon: Explore Moraine Lake and the Valley of the Ten Peaks.\n\n" +
          "Evening: Relax in the Banff Upper Hot Springs surrounded by alpine scenery.",
      },
    ],
  },
  {
    id: 15,
    name: "voyage thailand",
    country: "thailand",
    duration: 10,
    locations: [
      {
        id: 1,
        day: 1,
        coord: { lat: 13.7563, lng: 100.5018 },
        lieu: "Bangkok – The City of Angels",
        description:
          "Arrival in Bangkok and private transfer to your hotel along the Chao Phraya River.\n\n" +
          "First walk through lively streets filled with temples, markets and street food.\n\n" +
          "Suggestion : Dinner cruise on the river with views of Wat Arun illuminated.",
      },
      {
        id: 2,
        day: 2,
        coord: { lat: 13.7515, lng: 100.4928 },
        lieu: "Bangkok – Temples & Floating Markets",
        description:
          "Morning: Visit the Grand Palace, Wat Pho and the reclining Buddha.\n\n" +
          "Afternoon: Excursion to a floating market to discover traditional Thai life.\n\n" +
          "Evening: Explore Chinatown and taste legendary street dishes.",
      },
      {
        id: 3,
        day: 3,
        coord: { lat: 18.7883, lng: 98.9853 },
        lieu: "Chiang Mai – Northern Peace & Culture",
        description:
          "Morning: Flight to Chiang Mai and check-in at your hotel near the old city.\n\n" +
          "Afternoon: Explore ancient temples such as Wat Chedi Luang.\n\n" +
          "Evening: Enjoy the famous Night Bazaar for handicrafts and local food.",
      },
      {
        id: 4,
        day: 4,
        coord: { lat: 18.8101, lng: 98.9215 },
        lieu: "Chiang Mai – Nature & Local Traditions",
        description:
          "Morning: Visit Doi Suthep, perched on the mountain with panoramic views.\n\n" +
          "Afternoon: Ethical elephant sanctuary experience in the jungle.\n\n" +
          "Evening: Relax with a traditional Thai massage.",
      },
      {
        id: 5,
        day: 5,
        coord: { lat: 7.878, lng: 98.3984 },
        lieu: "Phuket – Tropical Beaches & Island Life",
        description:
          "Morning: Flight to Phuket and check-in at your beachfront resort.\n\n" +
          "Afternoon: Relax on the beach or explore Old Phuket Town.\n\n" +
          "Evening: Sunset dinner overlooking the Andaman Sea.",
      },
      {
        id: 6,
        day: 6,
        coord: { lat: 8.186, lng: 98.759 },
        lieu: "Phi Phi Islands – Crystal Waters & Cliffs",
        description:
          "Morning: Speedboat trip to the Phi Phi Islands — turquoise lagoons and limestone cliffs.\n\n" +
          "Afternoon: Snorkeling in vibrant coral reefs and relaxing on white-sand beaches.\n\n" +
          "Evening: Return to Phuket for a calm tropical night.",
      },
    ],
  },
  {
    id: 16,
    name: "voyage new zealand",
    country: "new zealand",
    duration: 12,
    locations: [
      {
        id: 1,
        day: 1,
        coord: { lat: -36.8485, lng: 174.7633 },
        lieu: "Auckland – City of Sails",
        description:
          "Arrival in Auckland and private transfer to your hotel near the harbour.\n\n" +
          "Explore the waterfront, Viaduct Basin and bustling Queen Street.\n\n" +
          "Suggestion : Dinner in the Wynyard Quarter with views of the marina.",
      },
      {
        id: 2,
        day: 2,
        coord: { lat: -37.8715, lng: 175.6824 },
        lieu: "Hobbiton – The Shire Comes Alive",
        description:
          "Morning: Scenic drive to Matamata.\n\n" +
          "Afternoon: Visit the iconic Hobbiton Movie Set — hobbit holes, the Green Dragon Inn and rolling green hills.\n\n" +
          "Evening: Return to Auckland or continue to Rotorua for the next day.",
      },
      {
        id: 3,
        day: 3,
        coord: { lat: -38.1368, lng: 176.2497 },
        lieu: "Rotorua – Geothermal Wonders & Māori Culture",
        description:
          "Morning: Discover geysers, bubbling mud pools and hot springs in Te Puia.\n\n" +
          "Afternoon: Explore Redwoods Forest or relax in a natural spa.\n\n" +
          "Evening: Traditional Māori cultural performance with hangi dinner.",
      },
      {
        id: 4,
        day: 4,
        coord: { lat: -41.2865, lng: 174.7762 },
        lieu: "Wellington – Windy City & Creative Hub",
        description:
          "Morning: Flight to Wellington.\n\n" +
          "Afternoon: Visit the national museum Te Papa and stroll through Cuba Street’s creative cafes.\n\n" +
          "Evening: Dinner on the waterfront overlooking the bay.",
      },
      {
        id: 5,
        day: 5,
        coord: { lat: -45.0312, lng: 168.6626 },
        lieu: "Queenstown – Adventure Capital",
        description:
          "Morning: Flight to Queenstown and check-in at your lakeside hotel.\n\n" +
          "Afternoon: Enjoy Lake Wakatipu or try an adventure activity (jetboat, gondola, luge).\n\n" +
          "Evening: Dinner with alpine views in the vibrant town centre.",
      },
      {
        id: 6,
        day: 6,
        coord: { lat: -44.6705, lng: 167.9237 },
        lieu: "Milford Sound – Fjords & Waterfalls",
        description:
          "Morning: Scenic drive or flight to Milford Sound.\n\n" +
          "Afternoon: Cruise through the fjord surrounded by towering cliffs, waterfalls and wildlife.\n\n" +
          "Evening: Return to Queenstown for a peaceful night by the lake.",
      },
    ],
  },
];
