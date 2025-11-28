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
  // 1. Indonesia
  {
    id: 1,
    name: "voyage indonesia",
    country: "indonesia",
    duration: 9,
    locations: Array.from({ length: 9 }, (_, i) => ({
      id: i + 1,
      day: i + 1,
      coord: {
        lat: -8.572721097803555 + i * 0.1,
        lng: 115.2594549752106 + i * 0.1,
      },
      lieu: `trips.indonesia.day${i + 1}.title`,
      description: `trips.indonesia.day${i + 1}.description`,
    })),
  },

  // 2. Egypt
  {
    id: 2,
    name: "voyage egypt",
    country: "egypt",
    duration: 6,
    locations: Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      day: i + 1,
      coord: { lat: 27.2579 - i * 0.5, lng: 33.8116 + i * 0.2 },
      lieu: `trips.egypt.day${i + 1}.title`,
      description: `trips.egypt.day${i + 1}.description`,
    })),
  },

  // 3. Maldives
  {
    id: 3,
    name: "voyage maldives",
    country: "maldives",
    duration: 7,
    locations: Array.from({ length: 7 }, (_, i) => ({
      id: i + 1,
      day: i + 1,
      coord: { lat: 3.2185 + i * 0.01, lng: 73.3125 + i * 0.01 },
      lieu: `trips.maldives.day${i + 1}.title`,
      description: `trips.maldives.day${i + 1}.description`,
    })),
  },

  // 4. Philippines
  {
    id: 4,
    name: "voyage philippines",
    country: "philippines",
    duration: 7,
    locations: Array.from({ length: 7 }, (_, i) => ({
      id: i + 1,
      day: i + 1,
      coord: { lat: 11.1957 + i * 0.5, lng: 119.4175 + i * 0.5 },
      lieu: `trips.philippines.day${i + 1}.title`,
      description: `trips.philippines.day${i + 1}.description`,
    })),
  },

  // 5. Seychelles
  {
    id: 5,
    name: "voyage seychelles",
    country: "seychelles",
    duration: 7,
    locations: Array.from({ length: 7 }, (_, i) => ({
      id: i + 1,
      day: i + 1,
      coord: { lat: -4.6796 + i * 0.05, lng: 55.492 + i * 0.05 },
      lieu: `trips.seychelles.day${i + 1}.title`,
      description: `trips.seychelles.day${i + 1}.description`,
    })),
  },

  // 6. Iceland
  {
    id: 6,
    name: "voyage iceland",
    country: "iceland",
    duration: 7,
    locations: Array.from({ length: 7 }, (_, i) => ({
      id: i + 1,
      day: i + 1,
      coord: { lat: 64.9631 - i * 0.1, lng: -19.0208 + i * 0.1 },
      lieu: `trips.iceland.day${i + 1}.title`,
      description: `trips.iceland.day${i + 1}.description`,
    })),
  },

  // 7. Japan
  {
    id: 7,
    name: "voyage japan",
    country: "japan",
    duration: 10,
    locations: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      day: i + 1,
      coord: { lat: 35.6895 + i * 0.1, lng: 139.6917 + i * 0.1 },
      lieu: `trips.japan.day${i + 1}.title`,
      description: `trips.japan.day${i + 1}.description`,
    })),
  },

  // 8. Italy
  {
    id: 8,
    name: "voyage italy",
    country: "italy",
    duration: 8,
    locations: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      day: i + 1,
      coord: { lat: 41.9028 + i * 0.1, lng: 12.4964 + i * 0.1 },
      lieu: `trips.italy.day${i + 1}.title`,
      description: `trips.italy.day${i + 1}.description`,
    })),
  },

  // 9. Costa Rica
  {
    id: 9,
    name: "voyage costa rica",
    country: "costa_rica",
    duration: 7,
    locations: Array.from({ length: 7 }, (_, i) => ({
      id: i + 1,
      day: i + 1,
      coord: { lat: 9.7489 + i * 0.1, lng: -83.7534 + i * 0.1 },
      lieu: `trips.costa_rica.day${i + 1}.title`,
      description: `trips.costa_rica.day${i + 1}.description`,
    })),
  },

  // 10. Greece
  {
    id: 10,
    name: "voyage greece",
    country: "greece",
    duration: 7,
    locations: Array.from({ length: 7 }, (_, i) => ({
      id: i + 1,
      day: i + 1,
      coord: { lat: 39.0742 + i * 0.05, lng: 21.8243 + i * 0.05 },
      lieu: `trips.greece.day${i + 1}.title`,
      description: `trips.greece.day${i + 1}.description`,
    })),
  },

  // 11. Peru
  {
    id: 11,
    name: "voyage peru",
    country: "peru",
    duration: 8,
    locations: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      day: i + 1,
      coord: { lat: -9.19 + i * 0.1, lng: -75.0152 + i * 0.1 },
      lieu: `trips.peru.day${i + 1}.title`,
      description: `trips.peru.day${i + 1}.description`,
    })),
  },

  // 12. Morocco
  {
    id: 12,
    name: "voyage morocco",
    country: "morocco",
    duration: 7,
    locations: Array.from({ length: 7 }, (_, i) => ({
      id: i + 1,
      day: i + 1,
      coord: { lat: 31.7917 + i * 0.05, lng: -7.0926 + i * 0.05 },
      lieu: `trips.morocco.day${i + 1}.title`,
      description: `trips.morocco.day${i + 1}.description`,
    })),
  },

  // 13. Australia
  {
    id: 13,
    name: "voyage australia",
    country: "australia",
    duration: 10,
    locations: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      day: i + 1,
      coord: { lat: -25.2744 + i * 0.2, lng: 133.7751 + i * 0.2 },
      lieu: `trips.australia.day${i + 1}.title`,
      description: `trips.australia.day${i + 1}.description`,
    })),
  },

  // 14. Canada
  {
    id: 14,
    name: "voyage canada",
    country: "canada",
    duration: 9,
    locations: Array.from({ length: 9 }, (_, i) => ({
      id: i + 1,
      day: i + 1,
      coord: { lat: 56.1304 + i * 0.1, lng: -106.3468 + i * 0.1 },
      lieu: `trips.canada.day${i + 1}.title`,
      description: `trips.canada.day${i + 1}.description`,
    })),
  },

  // 15. Thailand
  {
    id: 15,
    name: "voyage thailand",
    country: "thailand",
    duration: 8,
    locations: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      day: i + 1,
      coord: { lat: 15.87 + i * 0.1, lng: 100.9925 + i * 0.1 },
      lieu: `trips.thailand.day${i + 1}.title`,
      description: `trips.thailand.day${i + 1}.description`,
    })),
  },

  // 16. New Zealand
  {
    id: 16,
    name: "voyage new zealand",
    country: "new_zealand",
    duration: 9,
    locations: Array.from({ length: 9 }, (_, i) => ({
      id: i + 1,
      day: i + 1,
      coord: { lat: -40.9006 + i * 0.1, lng: 174.886 + i * 0.1 },
      lieu: `trips.new_zealand.day${i + 1}.title`,
      description: `trips.new_zealand.day${i + 1}.description`,
    })),
  },
];
