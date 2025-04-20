export interface Hotel {
  id: string;
  name: string;
  city: string;
  pricePerNight: number;
  distanceFromHospital: number;
  amenities: string[];
  image: string;
  rating: number;
  description: string;
  availableDates: string[]; // ISO date strings
}

export const hotels: Hotel[] = [
  {
    id: "the-oberoi-delhi",
    name: "The Oberoi",
    city: "Delhi",
    pricePerNight: 12000,
    distanceFromHospital: 2,
    amenities: ["Free Breakfast", "Airport Shuttle", "Spa", "Wi-Fi", "Room Service"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.8,
    description: "Experience luxury at The Oberoi, just 2 km from major hospitals. Enjoy spacious rooms, gourmet dining, and personalized service during your medical stay in Delhi.",
    availableDates: ["2024-06-01T00:00:00.000Z", "2024-06-02T00:00:00.000Z", "2024-06-03T00:00:00.000Z"]
  },
  {
    id: "taj-palace-delhi",
    name: "Taj Palace",
    city: "Delhi",
    pricePerNight: 10000,
    distanceFromHospital: 3,
    amenities: ["Pool", "Free Wi-Fi", "Restaurant", "Fitness Center", "Concierge"],
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
    rating: 4.7,
    description: "Taj Palace offers a serene retreat for medical tourists, with comfortable accommodations and attentive service just minutes from Delhi's premier medical facilities.",
    availableDates: ["2024-06-02T00:00:00.000Z", "2024-06-03T00:00:00.000Z", "2024-06-04T00:00:00.000Z"]
  },
  {
    id: "trident-mumbai",
    name: "Trident",
    city: "Mumbai",
    pricePerNight: 8500,
    distanceFromHospital: 1.5,
    amenities: ["Gym", "Restaurant", "Airport Pickup", "Business Center", "Laundry"],
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1349&q=80",
    rating: 4.6,
    description: "Trident Mumbai combines convenience and comfort with its prime location just 1.5 km from major hospitals.",
    availableDates: ["2024-06-01T00:00:00.000Z", "2024-06-03T00:00:00.000Z", "2024-06-05T00:00:00.000Z"]
  },
  {
    id: "itc-grand-central-mumbai",
    name: "ITC Grand Central",
    city: "Mumbai",
    pricePerNight: 11000,
    distanceFromHospital: 2.2,
    amenities: ["Pool", "City View", "Spa", "Multiple Restaurants", "24/7 Room Service"],
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.7,
    description: "ITC Grand Central offers luxurious accommodations with world-class amenities.",
    availableDates: ["2024-06-02T00:00:00.000Z", "2024-06-04T00:00:00.000Z", "2024-06-06T00:00:00.000Z"]
  },
    {
    id: "leela-palace-chennai",
    name: "The Leela Palace",
    city: "Chennai",
    pricePerNight: 9500,
    distanceFromHospital: 2.5,
    amenities: ["Beachfront", "Free Parking", "Spa", "Multiple Dining Options", "Pool"],
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.8,
    description: "The Leela Palace Chennai provides a tranquil environment with beautiful sea views, perfect for recovery and relaxation during your medical treatment.",
    availableDates: [
      "2024-06-01T00:00:00.000Z",
      "2024-06-02T00:00:00.000Z",
      "2024-06-05T00:00:00.000Z",
      "2024-06-07T00:00:00.000Z",
      "2024-06-08T00:00:00.000Z",
      "2024-06-10T00:00:00.000Z",
      "2024-06-11T00:00:00.000Z",
    ]
  },
  {
    id: "taj-fishermans-cove-chennai",
    name: "Taj Fisherman's Cove",
    city: "Chennai",
    pricePerNight: 8000,
    distanceFromHospital: 3.5,
    amenities: ["Private Beach", "Bar", "Spa", "Outdoor Activities", "Wi-Fi"],
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.6,
    description: "Taj Fisherman's Cove offers a rejuvenating seaside escape with excellent medical concierge services for patients visiting Chennai's hospitals.",
    availableDates: [
      "2024-06-01T00:00:00.000Z",
      "2024-06-04T00:00:00.000Z",
      "2024-06-05T00:00:00.000Z",
      "2024-06-06T00:00:00.000Z",
      "2024-06-09T00:00:00.000Z",
      "2024-06-10T00:00:00.000Z",
    ]
  },
  {
    id: "ritz-carlton-bangalore",
    name: "The Ritz-Carlton",
    city: "Bangalore",
    pricePerNight: 10500,
    distanceFromHospital: 2,
    amenities: ["Spa", "Live Music", "Fine Dining", "Business Center", "Concierge"],
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    rating: 4.8,
    description: "The Ritz-Carlton Bangalore combines luxury and convenience, offering special amenities for medical tourists and easy access to the city's best hospitals.",
    availableDates: [
      "2024-06-01T00:00:00.000Z",
      "2024-06-02T00:00:00.000Z",
      "2024-06-04T00:00:00.000Z",
      "2024-06-07T00:00:00.000Z",
      "2024-06-08T00:00:00.000Z",
      "2024-06-10T00:00:00.000Z",
      "2024-06-11T00:00:00.000Z",
    ]
  },
  {
    id: "taj-west-end-bangalore",
    name: "Taj West End",
    city: "Bangalore",
    pricePerNight: 9000,
    distanceFromHospital: 2.8,
    amenities: ["Garden View", "Gourmet Dining", "Heritage Property", "Spa", "Pool"],
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    rating: 4.7,
    description: "Set in lush gardens, Taj West End offers a peaceful retreat for medical tourists, with dedicated services for patients and their families visiting Bangalore for treatment.",
    availableDates: [
      "2024-06-02T00:00:00.000Z",
      "2024-06-03T00:00:00.000Z",
      "2024-06-05T00:00:00.000Z",
      "2024-06-06T00:00:00.000Z",
      "2024-06-08T00:00:00.000Z",
      "2024-06-09T00:00:00.000Z",
      "2024-06-11T00:00:00.000Z",
    ]
  }
];
