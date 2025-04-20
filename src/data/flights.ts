
export interface Flight {
  id: string;
  airline: string;
  logo: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  date: string;
  duration: string;
  price: number;
  stops: number;
  stopCity?: string;
  international: boolean;
}

export const indianCities = [
  'Delhi',
  'Mumbai',
  'Chennai',
  'Bangalore'
];

export const internationalCities = [
  'New York',
  'London',
  'Dubai',
  'Singapore',
  'Bangkok'
];

export const flights: Flight[] = [
  {
    id: 'AI101',
    airline: 'Air India',
    logo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80',
    from: 'New York',
    to: 'Delhi',
    departureTime: '09:00 AM',
    arrivalTime: '10:30 PM',
    date: '2024-07-15',
    duration: '14h 30m',
    price: 75000,
    stops: 1,
    stopCity: 'Dubai',
    international: true
  },
  {
    id: 'EK203',
    airline: 'Emirates',
    logo: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    from: 'London',
    to: 'Mumbai',
    departureTime: '03:45 PM',
    arrivalTime: '05:30 AM',
    date: '2024-07-20',
    duration: '9h 45m',
    price: 85000,
    stops: 0,
    international: true
  },
  {
    id: 'IG306',
    airline: 'IndiGo',
    logo: 'https://images.unsplash.com/photo-1533740566848-5f7d3e04e3d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80',
    from: 'Delhi',
    to: 'Mumbai',
    departureTime: '11:30 AM',
    arrivalTime: '01:45 PM',
    date: '2024-07-18',
    duration: '2h 15m',
    price: 5000,
    stops: 0,
    international: false
  },
  {
    id: 'SG755',
    airline: 'SpiceJet',
    logo: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    from: 'Chennai',
    to: 'Bangalore',
    departureTime: '10:15 AM',
    arrivalTime: '11:30 AM',
    date: '2024-07-22',
    duration: '1h 15m',
    price: 3500,
    stops: 0,
    international: false
  },
  {
    id: 'AI518',
    airline: 'Air India',
    logo: 'https://images.unsplash.com/photo-1583133219725-0e8889024be1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80',
    from: 'Mumbai',
    to: 'Chennai',
    departureTime: '02:30 PM',
    arrivalTime: '04:45 PM',
    date: '2024-07-25',
    duration: '2h 15m',
    price: 4500,
    stops: 0,
    international: false
  },
  {
    id: 'UK123',
    airline: 'Vistara',
    logo: 'https://images.unsplash.com/photo-1579430826973-d45b4d4e6b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80',
    from: 'Delhi',
    to: 'Bangalore',
    departureTime: '06:00 AM',
    arrivalTime: '08:45 AM',
    date: '2024-07-19',
    duration: '2h 45m',
    price: 6000,
    stops: 0,
    international: false
  }
];
