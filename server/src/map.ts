export interface Map {
  id: number;
  day: number;
  coordonnées: {
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
        coordonnées: { lat: -8.572721097803555, lng: 115.2594549752106 },
        lieu: "Welcome to the Valley of Kings",
        description:
          "Arrival in Bali and private transfer to the lush highlands of Ubud.\n\nCheck-in at Sthala, a Tribute Portfolio Hotel. Take time to admire the spectacular view of the Wos River from the open-air lobby.\n\nSuggestion : Dinner at the Naga Rooftop Bar for your first taste of local gastronomy and a sunset over the jungle.",
      },
      {
        id: 2,
        day: 2,
        coordonnées: { lat: -8.572721097803555, lng: 115.2594549752106 },
        lieu: "The Spiritual Heart of Ubud",
        description:
          "Morning: Take the hotel's complimentary shuttle to the town center. Must-visit stops include the Monkey Forest and the Ubud Palace.\n\nAfternoon: Head north to walk through the world-famous Tegalalang Rice Terraces.\n\nEvening: Return to the serenity of Sthala for a night swim under the stars.",
      },
      {
        id: 3,
        day: 3,
        coordonnées: { lat: -8.572721097803555, lng: 115.2594549752106 },
        lieu: "Temples and Traditions",
        description:
          "Morning: Visit the Tirta Empul temple (famous for its holy purification springs) or the royal tombs of Gunung Kawi.\n\nAfternoon: Return to the hotel to enjoy included activities (Yoga on the river deck or a Balinese offering-making workshop).\n\nDinner: Explore Ubud's renowned organic and farm-to-table dining scene.",
      },
      {
        id: 4,
        day: 4,
        coordonnées: { lat: -8.358083398978287, lng: 116.0408204563964 },
        lieu: "Setting Sail for the Gilis",
        description:
          "Morning: Transfer to Padang Bai harbor and crossing by Fast Boat to Gili Trawangan.\n\nArrival: Traditional transfer by Cidomo (horse-drawn cart) to the iconic Hotel Vila Ombak.\n\nLate Afternoon: Enjoy a cocktail with your toes in the sand, watching the island's legendary sunset with views of Mount Agung in the distance.",
      },
      {
        id: 5,
        day: 5,
        coordonnées: { lat: -8.358083398978287, lng: 116.0408204563964 },
        lieu: "Turtles and Bicycles",
        description:
          "Morning: Boat trip (private or shared) for a snorkeling adventure. Swim with giant sea turtles and discover the underwater statues of Gili Meno.\n\nAfternoon: Rent a bicycle (there are no motorized vehicles on the island!) and cycle around the island (approx. 1.5 hours at a leisurely pace) to discover wild, untouched beaches.\n\nEvening: Fresh seafood dinner right by the water.",
      },
      {
        id: 6,
        day: 6,
        coordonnées: { lat: -8.358083398978287, lng: 116.0408204563964 },
        lieu: "Tropical Dolce Vita",
        description:
          "Free day to enjoy the facilities at Vila Ombak. Relax on the private beach or by the massive two-tiered swimming pool.\n\nSuggestion: In the evening, visit the Gili T Night Market to taste local Street Food (Satay, Nasi Campur) in a lively, authentic atmosphere.",
      },
      {
        id: 7,
        day: 7,
        coordonnées: { lat: -8.769776050449927, lng: 115.22240895191784 },
        lieu: "Return to the South",
        description:
          "Morning: Return boat crossing to Bali.\n\nTransfer to the Tanjung Benoa peninsula and check-in at Sadara Resort.\n\nAfternoon: Enjoy the tranquility of this boutique hotel. Unlike the massive resorts, the service here is highly personalized. Enjoy a complimentary Afternoon Tea facing the ocean.",
      },
      {
        id: 8,
        day: 8,
        coordonnées: { lat: -8.769776050449927, lng: 115.22240895191784 },
        lieu: "Thrills and Culture",
        description:
          "Morning: Tanjung Benoa is the capital of water sports. On the agenda (optional): Parasailing, Jet Skiing, or simply swimming in the calm lagoon waters.\n\nAfternoon: Excursion to the majestic Uluwatu Temple, perched high on a cliff.\n\nEvening: Watch the traditional Kecak Dance performance at sunset facing the Indian Ocean. A truly magical moment.",
      },
      {
        id: 9,
        day: 9,
        coordonnées: { lat: -8.769776050449927, lng: 115.22240895191784 },
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
        coordonnées: { lat: 27.2579, lng: 33.8116 },
        lieu: "Hurghada",
        description:
          "Located on the Red Sea coast, Hurghada is an Egyptian resort town renowned for its golden sandy beaches and turquoise waters. It's a paradise for diving and snorkeling enthusiasts, thanks to its spectacular coral reefs and colorful marine life. The town combines relaxation, water sports, and a vibrant nightlife, while offering a glimpse of oriental charm through its souks and traditional cafes.",
      },
      {
        id: 2,
        day: 2,
        coordonnées: { lat: 27.2579, lng: 33.8116 },
        lieu: "Eden Island Hurghada",
        description:
          "Eden Island is a small, idyllic island off the coast of Hurghada, an exclusive place where luxury meets nature. Its private beaches, crystal-clear waters, and peaceful atmosphere make it a perfect retreat for rejuvenation. Here, you can enjoy diving, kayaking, or simply relaxing in an idyllic setting away from the hustle and bustle of the mainland.",
      },
      {
        id: 3,
        day: 3,
        coordonnées: { lat: 25.6872, lng: 32.6396 },
        lieu: "Louxor",
        description:
          "Luxor is an open-air museum, located on the banks of the Nile. The former capital of Pharaonic Egypt, it is home to exceptional archaeological treasures: the Karnak Temple, the Valley of the Kings, and the Temple of Hatshepsut. Luxor fascinates with the grandeur of its monuments and the magic of the Nile, offering a journey back in time to the heart of Egyptian civilization.",
      },
      {
        id: 4,
        day: 4,
        coordonnées: { lat: 30.0444, lng: 31.2357 },
        lieu: "Le Caire",
        description:
          "Cairo, the vibrant capital of Egypt, is a bustling metropolis where millennia of history intertwine with modern life. Here, one can discover the famous pyramids of Giza, the Sphinx, and the Egyptian Museum, which houses treasures from antiquity. Between the hustle and bustle of its streets, the minarets of its mosques, and the banks of the Nile, Cairo captivates with its unique energy and oriental charm.",
      },
      {
        id: 5,
        day: 5,
        coordonnées: { lat: 31.2001, lng: 29.9187 },
        lieu: "Alexandrie",
        description:
          "Founded by Alexander the Great, Alexandria is the pearl of the Egyptian Mediterranean. This port city blends Greek, Roman, and Arab influences, with iconic sites such as the Bibliotheca Alexandrina, the Citadel of Qaitbay, and the ruins of the ancient city. Its gentle ambiance and waterfront lined with cafes create an atmosphere that is both cultural and romantic.",
      },
      {
        id: 6,
        day: 6,
        coordonnées: { lat: 27.8167, lng: 34.2667 },
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
        coordonnées: { lat: 3.2185018101937164, lng: 73.31247270135447 },
        lieu: "Arrival in a World of Blue",
        description:
          "Your adventure begins as your seaplane glides over endless shades of turquoise, revealing islands scattered like emeralds across the ocean.\nUpon arrival, you are welcomed with cool towels, fresh coconut water, and the soft sound of waves.\nSettle into your villa—whether perched above the water or nestled on the shore—and spend the afternoon barefoot on warm sand.\nAs evening falls, dine under the open sky while the horizon melts into gold and lavender.",
      },
      {
        id: 2,
        day: 2,
        coordonnées: { lat: 3.2185018101937164, lng: 73.31247270135447 },
        lieu: "Exploring Coral Gardens",
        description:
          "Begin your morning with snorkeling or a guided diving session among vibrant coral reefs.\nTurtles drift gracefully, schools of tropical fish flash like living rainbows, and manta rays dance in slow, elegant circles.\nLater, relax by the infinity pool or enjoy a beachside lunch with your feet in the sand.\nEnd the day with a sunset cruise, where dolphins often appear, playful and curious beside the boat.",
      },
      {
        id: 3,
        day: 3,
        coordonnées: { lat: 3.2185018101937164, lng: 73.31247270135447 },
        lieu: "Water Adventures and Island Life",
        description:
          "Today is for thrill-seekers and nature lovers.\nTry jet skiing through calm lagoons, paddleboarding over crystal-clear shallows, or kayaking around the island's hidden coves.\nIn the afternoon, wander through the island's palm-lined interior, discovering quiet trails, tropical gardens, and local wildlife.\nAt night, enjoy a beach barbecue beneath a dome of stars so bright it feels like they're within reach.",
      },
      {
        id: 4,
        day: 4,
        coordonnées: { lat: 3.2185018101937164, lng: 73.31247270135447 },
        lieu: "Wellness, Peace, and Ocean Breeze",
        description:
          "Reserve this day for pure relaxation.\nBegin with sunrise yoga on the beach, followed by a spa session in an overwater pavilion where the floor's glass panels reveal fish floating beneath you.\nSpend the afternoon reading in a hammock, napping to the rhythm of the waves, or drifting in the sea's warm embrace.\nA candlelit dinner on a private sandbank completes this day of serenity.",
      },
      {
        id: 5,
        day: 5,
        coordonnées: { lat: 3.2185018101937164, lng: 73.31247270135447 },
        lieu: "Culture and Local Island Discovery",
        description:
          "Set off on a short boat trip to a nearby inhabited island.\nStroll through colorful streets, visit small craft shops, and learn about Maldivian traditions—boat-making, weaving, and local cuisine.\nEnjoy a traditional Maldivian lunch prepared with coconut, fresh fish, and spices.\nReturn to your resort for an evening of music, dance, and storytelling under palm trees glowing with lantern light.",
      },
      {
        id: 6,
        day: 6,
        coordonnées: { lat: 3.2185018101937164, lng: 73.31247270135447 },
        lieu: "Ocean Excursions and Hidden Wonders",
        description:
          "Embark on a full-day excursion:\nSnorkel with reef sharks, search for manta rays, or visit a deserted island where you can enjoy a picnic in total solitude.\nSwim, sunbathe, and explore the untouched beauty of remote sandbanks that vanish and reappear with the tide.\nBack at the resort, end the day with a starlit bath on your villa's terrace or a midnight swim in the warm, moonlit lagoon.",
      },
      {
        id: 7,
        day: 7,
        coordonnées: { lat: 3.2185018101937164, lng: 73.31247270135447 },
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
        coordonnées: { lat: 11.1956, lng: 119.4175 },
        lieu: "El Nido (Palawan)",
        description:
          "Often revered as the gateway to paradise, El Nido is located at the northern tip of mainland Palawan. It is world-famous for the Bacuit Archipelago, a stunning labyrinth of limestone karst cliffs rising vertically from crystalline turquoise waters. It is the premier destination for luxury island-hopping, offering access to hidden wonders such as the Big and Small Lagoons, secret white-sand beaches, and vibrant coral reefs.",
      },
      {
        id: 2,
        day: 2, //3-6jours
        coordonnées: { lat: 18.196, lng: 120.5927 },
        lieu: "Ilocos Norte (Luzon)",
        description:
          "Situated in the northwestern corner of Luzon, Ilocos Norte offers a unique blend of colonial history and dramatic landscapes. It is renowned for the Paoay Sand Dunes (offering 4x4 adventures), the Paoay Church (a UNESCO World Heritage site famous for its earthquake-baroque architecture), and the iconic Bangui Windmills lining the coast. Further north, Pagudpud offers pristine beaches often compared to Boracay, but with a far more serene atmosphere.",
      },
      {
        id: 3,
        day: 3, //6-9jours
        coordonnées: { lat: 9.8349, lng: 118.7384 },
        lieu: "Palawan (Province)",
        description:
          "Frequently voted the Best Island in the World, Palawan is the Philippines Last Ecological Frontier. This archipelagic province stretches from Mindoro down to Borneo. Beyond El Nido, it houses the Puerto Princesa Underground River (one of the New 7 Wonders of Nature) and the Tubbataha Reefs, a world-class diving site. It is a sanctuary of lush jungles, diverse wildlife, and untouched coastlines.",
      },
      {
        id: 4,
        day: 4, //9-12Jours
        coordonnées: { lat: 13.1789, lng: 123.6716 },
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
        coordonnées: { lat: -4.6668, lng: 55.5185 },
        lieu: "Aéroport de Victoria-Seychelles",
        description:
          "This is the main international airport of the Seychelles, located on Mahé island, close to the capital city, Victoria. It serves as your main point of arrival and departure for exploring the archipelago.",
      },
      {
        id: 2,
        day: 2,
        coordonnées: { lat: -4.7861, lng: 55.5273 },
        lieu: "Anse Capucins Trail",
        description:
          "A hiking trail often considered difficult, located on Mahé island. It leads to a spectacular viewpoint and sometimes to a small, secluded beach, offering breathtaking views of the coastline.",
      },
      {
        id: 3,
        day: 3,
        coordonnées: { lat: -4.7193, lng: 55.4801 },
        lieu: "Anse Louis",
        description:
          "A picturesque and often less crowded beach, situated on the southwest coast of Mahé island. It is known for its fine white sand, turquoise waters, and tranquility.",
      },
      {
        id: 4,
        day: 4,
        coordonnées: { lat: -4.6774, lng: 55.4484 },
        lieu: "Grand Anse Beach",
        description:
          "A beach named Grand Anse exists on several islands, but the most famous is usually the one on Mahé (the longest beach on the island, ideal for long walks) or the one on La Digue (famous for its wild beauty, but often with stronger currents).",
      },
      {
        id: 5,
        day: 5,
        coordonnées: { lat: -4.4787, lng: 55.2371 },
        lieu: "La Digue",
        description:
          "This is one of the three main islands of the Seychelles. It is famous for its laid-back atmosphere, the primary use of bicycles for transportation, and of course, its iconic beach Anse Source d'Argent.",
      },
      {
        id: 6,
        day: 6,
        coordonnées: { lat: -4.6026, lng: 55.4323 },
        lieu: "Big Blue Divers",
        description:
          "This is a scuba diving center based on Praslin island. They organize excursions to explore the rich seabed, coral reefs, and aquatic wildlife of the Seychelles.",
      },
      {
        id: 7,
        day: 7,
        coordonnées: { lat: -4.6004, lng: 55.5161 },
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
        coordonnées: { lat: 64.1355, lng: -21.8954 },
        lieu: "Reykjavik",
        description:
          "Start your adventure in Reykjavik, Iceland's vibrant capital. Explore the charming streets, visit the iconic Hallgrímskirkja church, and enjoy the local art scene, bustling cafes, and unique boutiques. Reykjavik offers a perfect blend of modernity and traditional Icelandic culture.",
      },
      {
        id: 2,
        day: 2,
        coordonnées: { lat: 64.2559, lng: -21.13 },
        lieu: "Thingvellir National Park",
        description:
          "Discover Thingvellir National Park, a UNESCO World Heritage site, where you can witness the dramatic rift between the Eurasian and North American tectonic plates. Explore the stunning landscapes, ancient ruins, and the site of Iceland's first parliament, founded in 930 AD.",
      },
      {
        id: 3,
        day: 3,
        coordonnées: { lat: 64.3136, lng: -20.3024 },
        lieu: "Strokkur Geyser",
        description:
          "Marvel at the spectacular Strokkur Geyser in the Geysir geothermal area. Watch as the geyser erupts every few minutes, shooting water high into the air. It's an awe-inspiring natural phenomenon in the heart of Iceland's famous Golden Circle.",
      },
      {
        id: 4,
        day: 4,
        coordonnées: { lat: 63.8804, lng: -22.4495 },
        lieu: "Blue Lagoon",
        description:
          "Relax in the warm, milky-blue waters of the Blue Lagoon, Iceland's world-renowned geothermal spa. Surrounded by a stunning lava landscape, the mineral-rich waters are perfect for rejuvenating your skin and soaking in the natural beauty of the area.",
      },
      {
        id: 5,
        day: 5,
        coordonnées: { lat: 63.404, lng: -19.071 },
        lieu: "Reynisfjara Beach",
        description:
          "Explore the striking black sand beaches of Reynisfjara, where dramatic basalt sea stacks rise from the ocean. This picturesque beach, with its powerful waves and mysterious atmosphere, is one of Iceland's most iconic natural wonders.",
      },
      {
        id: 6,
        day: 6,
        coordonnées: { lat: 64.0485, lng: -16.1794 },
        lieu: "Jökulsárlón Glacier Lagoon",
        description:
          "Visit the ethereal Jökulsárlón Glacier Lagoon, where you'll be mesmerized by floating icebergs and the calm blue waters of this glacial lake. A boat tour offers close-up views of the sparkling ice and nearby Diamond Beach, where ice chunks wash up on the shore.",
      },
      {
        id: 7,
        day: 7,
        coordonnées: { lat: 64.1355, lng: -21.8954 },
        lieu: "Reykjavik",
        description:
          "End your trip with a final day in Reykjavik. Take the time to visit any spots you missed earlier, enjoy the local cuisine, or unwind at one of the city's many hot springs before you head home with unforgettable memories of Iceland's wild beauty.",
      },
    ],
  },
];
