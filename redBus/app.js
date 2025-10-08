// ==========================================================
// 🧠 Phase 1: DOM SELECTION - Identifying and Accessing Elements
// ==========================================================

// Using getElementById → most direct way to select elements by their ID
const fromInput = document.getElementById('fromCity');
const toInput = document.getElementById('toCity');
const searchBtn = document.getElementById('searchBtn');
const busResults = document.getElementById('busResults');
const mainheading = document.getElementById('mainheading');
// Booking summary panel elements
const bookingSummary = document.getElementById('bookingSummary');
const busNameSummary = document.getElementById('busNameSummary');
const busTypeSummary = document.getElementById('busTypeSummary');
const travelTimeSummary = document.getElementById('travelTimeSummary');
const selectedSeatsText = document.getElementById('selectedSeats');
const totalFareText = document.getElementById('totalFare');
const confirmBooking = document.getElementById('confirmBooking');
//Radio buttons
const acSeater = document.getElementById('acSeater');
const acSleeper = document.getElementById('acSleeper');
const nonAcSeater = document.getElementById('nonAcSeater');
const nonAcSleeper = document.getElementById('nonAcSleeper');
const priceLvl = document.getElementById('priceLvl');
const sortByRating = document.getElementById('sortByRating');
//Reset Radio
const resetBtn = document.getElementById('resetBtn');


// ==========================================================
// 🚌 Mock Data (Simulating a Real API response like RedBus)
// ==========================================================
const buses = [
    {
        id: "BUS0001",
        operator: "Express Travels",
        route: { source: "Hyderabad", destination: "Bangalore", via: ["Kurnool", "Anantapur"] },
        schedule: { departureTime: "2025-10-10T20:00:00", arrivalTime: "2025-10-11T05:30:00", durationMin: 570 },
        fare: 750, seatsAvailable: 12, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light", "Water Bottle"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-10T20:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-10-11T05:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["2A", "3B", "5D"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 210
    },
    {
        id: "BUS0002",
        operator: "Orange Tours & Travels",
        route: { source: "Hyderabad", destination: "Pune", via: ["Solapur"] },
        schedule: { departureTime: "2025-10-10T19:00:00", arrivalTime: "2025-10-11T07:00:00", durationMin: 720 },
        fare: 950, seatsAvailable: 20, capacity: 44, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-10T19:00:00" }],
        dropPoints: [{ name: "Pune", time: "2025-10-11T07:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["1B", "4C"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 350
    },
    {
        id: "BUS0003",
        operator: "Morning Star Travels",
        route: { source: "Vijayawada", destination: "Hyderabad", via: ["Nalgonda"] },
        schedule: { departureTime: "2025-10-11T06:45:00", arrivalTime: "2025-10-11T10:30:00", durationMin: 225 },
        fare: 550, seatsAvailable: 18, capacity: 36, busType: "Non-AC Seater",
        amenities: ["Charging Port", "Water Bottle", "Reading Light"],
        boardingPoints: [{ name: "Vijayawada", time: "2025-10-11T06:45:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-10-11T10:30:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 98
    },
    {
        id: "BUS0004",
        operator: "VRL Travels",
        route: { source: "Bangalore", destination: "Goa", via: ["Mysore"] },
        schedule: { departureTime: "2025-10-10T21:00:00", arrivalTime: "2025-10-11T06:00:00", durationMin: 540 },
        fare: 1100, seatsAvailable: 9, capacity: 30, busType: " Non-AC Seater",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light"],
        boardingPoints: [{ name: "Bangalore", time: "2025-10-10T21:00:00" }],
        dropPoints: [{ name: "Goa", time: "2025-10-11T06:00:00" }],
        seatLayout: { rows: 8, columns: 4, layoutType: "2+2", bookedSeats: ["4A"], reservedSeats: [] },
        rating: 4.7, reviewsCount: 420
    },
    {
        id: "BUS0005",
        operator: "Kaveri Travels",
        route: { source: "Chennai", destination: "Madurai", via: [] },
        schedule: { departureTime: "2025-10-10T22:45:00", arrivalTime: "2025-10-11T03:00:00", durationMin: 255 },
        fare: 480, seatsAvailable: 15, capacity: 32, busType: "Non-AC Seater",
        amenities: ["Reading Light", "Water Bottle"],
        boardingPoints: [{ name: "Chennai", time: "2025-10-10T22:45:00" }],
        dropPoints: [{ name: "Madurai", time: "2025-10-11T03:00:00" }],
        seatLayout: { rows: 8, columns: 4, layoutType: "2+2", bookedSeats: ["2C"], reservedSeats: [] },
        rating: 4.0, reviewsCount: 70
    },
    {
        id: "BUS0006",
        operator: "GreenLine Travels",
        route: { source: "Chennai", destination: "Bangalore", via: ["Vellore"] },
        schedule: { departureTime: "2025-10-10T23:00:00", arrivalTime: "2025-10-11T03:30:00", durationMin: 270 },
        fare: 650, seatsAvailable: 14, capacity: 24, busType: "Non-AC Sleeper",
        amenities: ["Blanket", "Charging Port", "WiFi"],
        boardingPoints: [{ name: "Chennai", time: "2025-10-10T23:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-10-11T03:30:00" }],
        seatLayout: { rows: 6, columns: 4, layoutType: "2+2", bookedSeats: [], reservedSeats: [] },
        rating: 3.9, reviewsCount: 60
    },
    {
        id: "BUS0007",
        operator: "AbhiBus Express",
        route: { source: "Vijayawada", destination: "Visakhapatnam", via: ["Rajahmundry"] },
        schedule: { departureTime: "2025-10-10T17:30:00", arrivalTime: "2025-10-10T22:30:00", durationMin: 300 },
        fare: 680, seatsAvailable: 22, capacity: 40, busType: "Non-AC Seater",
        amenities: ["Water Bottle", "Reading Light"],
        boardingPoints: [{ name: "Vijayawada", time: "2025-10-10T17:30:00" }],
        dropPoints: [{ name: "Visakhapatnam", time: "2025-10-10T22:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["5B"], reservedSeats: [] },
        rating: 4.1, reviewsCount: 112
    },
    {
        id: "BUS0008",
        operator: "SRS Travels",
        route: { source: "Bangalore", destination: "Hyderabad", via: ["Anantapur", "Kurnool"] },
        schedule: { departureTime: "2025-10-10T20:30:00", arrivalTime: "2025-10-11T06:00:00", durationMin: 570 },
        fare: 890, seatsAvailable: 17, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Water Bottle", "Blanket"],
        boardingPoints: [{ name: "Bangalore", time: "2025-10-10T20:30:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-10-11T06:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["3C", "7D"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 180
    },
    {
        id: "BUS0009",
        operator: "Sri Krishna Travels",
        route: { source: "Hyderabad", destination: "Chennai", via: ["Nellore"] },
        schedule: { departureTime: "2025-10-10T21:00:00", arrivalTime: "2025-10-11T07:00:00", durationMin: 600 },
        fare: 760, seatsAvailable: 19, capacity: 40, busType: "AC Seater",
        amenities: ["Charging Port", "Water Bottle"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-10T21:00:00" }],
        dropPoints: [{ name: "Chennai", time: "2025-10-11T07:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["8B"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 145
    },
    {
        id: "BUS0010",
        operator: "Jabbar Travels",
        route: { source: "Hyderabad", destination: "Mumbai", via: ["Solapur", "Pune"] },
        schedule: { departureTime: "2025-10-10T17:00:00", arrivalTime: "2025-10-11T08:00:00", durationMin: 900 },
        fare: 1200, seatsAvailable: 11, capacity: 45, busType: " Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-10T17:00:00" }],
        dropPoints: [{ name: "Mumbai", time: "2025-10-11T08:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["1A"], reservedSeats: [] },
        rating: 4.6, reviewsCount: 400
    },
    {
        id: "BUS0011",
        operator: "Rajesh Travels",
        route: { source: "Hyderabad", destination: "Tirupati", via: ["Kurnool"] },
        schedule: { departureTime: "2025-10-11T21:00:00", arrivalTime: "2025-10-12T06:00:00", durationMin: 540 },
        fare: 720, seatsAvailable: 20, capacity: 35, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Water Bottle", "Charging Port"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-11T21:00:00" }],
        dropPoints: [{ name: "Tirupati", time: "2025-10-12T06:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: [], reservedSeats: [] },
        rating: 4.1, reviewsCount: 120
    },
    {
        id: "BUS0012",
        operator: "Kesineni Travels",
        route: { source: "Chennai", destination: "Hyderabad", via: ["Nellore", "Ongole"] },
        schedule: { departureTime: "2025-10-11T20:30:00", arrivalTime: "2025-10-12T07:00:00", durationMin: 630 },
        fare: 980, seatsAvailable: 15, capacity: 42, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Chennai", time: "2025-10-11T20:30:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-10-12T07:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: [], reservedSeats: [] },
        rating: 4.4, reviewsCount: 250
    },
    {
        id: "BUS0013",
        operator: "SRM Travels",
        route: { source: "Chennai", destination: "Coimbatore", via: [] },
        schedule: { departureTime: "2025-10-10T23:30:00", arrivalTime: "2025-10-11T05:00:00", durationMin: 330 },
        fare: 590, seatsAvailable: 18, capacity: 34, busType: "AC Seater",
        amenities: ["Charging Port", "Reading Light"],
        boardingPoints: [{ name: "Chennai", time: "2025-10-10T23:30:00" }],
        dropPoints: [{ name: "Coimbatore", time: "2025-10-11T05:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: [], reservedSeats: [] },
        rating: 4.3, reviewsCount: 155
    },
    {
        id: "BUS0014",
        operator: "Eagle Travels",
        route: { source: "Ahmedabad", destination: "Mumbai", via: ["Surat"] },
        schedule: { departureTime: "2025-10-10T21:15:00", arrivalTime: "2025-10-11T06:45:00", durationMin: 570 },
        fare: 800, seatsAvailable: 21, capacity: 38, busType: " Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Ahmedabad", time: "2025-10-10T21:15:00" }],
        dropPoints: [{ name: "Mumbai", time: "2025-10-11T06:45:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: [], reservedSeats: [] },
        rating: 4.5, reviewsCount: 260
    },
    {
        id: "BUS0015",
        operator: "Patel Travels",
        route: { source: "Surat", destination: "Pune", via: ["Nashik"] },
        schedule: { departureTime: "2025-10-11T19:30:00", arrivalTime: "2025-10-12T05:00:00", durationMin: 570 },
        fare: 870, seatsAvailable: 16, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["Charging Port", "WiFi", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Surat", time: "2025-10-11T19:30:00" }],
        dropPoints: [{ name: "Pune", time: "2025-10-12T05:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: [], reservedSeats: [] },
        rating: 4.3, reviewsCount: 190
    },
    {
        id: "BUS0016",
        operator: "Morning Star Deluxe",
        route: { source: "Hyderabad", destination: "Vizianagaram", via: ["Rajahmundry", "Srikakulam"] },
        schedule: { departureTime: "2025-10-11T18:00:00", arrivalTime: "2025-10-12T04:30:00", durationMin: 630 },
        fare: 780, seatsAvailable: 12, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-11T18:00:00" }],
        dropPoints: [{ name: "Vizianagaram", time: "2025-10-12T04:30:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: [], reservedSeats: [] },
        rating: 4.2, reviewsCount: 130
    },
    {
        id: "BUS0017",
        operator: "APSRTC",
        route: { source: "Vijayawada", destination: "Tirupati", via: ["Nellore"] },
        schedule: { departureTime: "2025-10-10T21:00:00", arrivalTime: "2025-10-11T04:00:00", durationMin: 420 },
        fare: 460, seatsAvailable: 25, capacity: 50, busType: "Non-AC Seater",
        amenities: ["Water Bottle"],
        boardingPoints: [{ name: "Vijayawada", time: "2025-10-10T21:00:00" }],
        dropPoints: [{ name: "Tirupati", time: "2025-10-11T04:00:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: [], reservedSeats: [] },
        rating: 3.8, reviewsCount: 95
    },
    {
        id: "BUS0018",
        operator: "Neeta Travels",
        route: { source: "Mumbai", destination: "Goa", via: ["Ratnagiri"] },
        schedule: { departureTime: "2025-10-10T20:30:00", arrivalTime: "2025-10-11T06:30:00", durationMin: 600 },
        fare: 950, seatsAvailable: 10, capacity: 40, busType: " Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light"],
        boardingPoints: [{ name: "Mumbai", time: "2025-10-10T20:30:00" }],
        dropPoints: [{ name: "Goa", time: "2025-10-11T06:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: [], reservedSeats: [] },
        rating: 4.6, reviewsCount: 400
    },
    {
        id: "BUS0019",
        operator: "KPN Travels",
        route: { source: "Bangalore", destination: "Chennai", via: ["Vellore"] },
        schedule: { departureTime: "2025-10-10T23:15:00", arrivalTime: "2025-10-11T05:15:00", durationMin: 360 },
        fare: 630, seatsAvailable: 22, capacity: 40, busType: "AC Seater",
        amenities: ["Charging Port", "Reading Light"],
        boardingPoints: [{ name: "Bangalore", time: "2025-10-10T23:15:00" }],
        dropPoints: [{ name: "Chennai", time: "2025-10-11T05:15:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: [], reservedSeats: [] },
        rating: 4.0, reviewsCount: 150
    },
    {
        id: "BUS0020",
        operator: "TSRTC Deluxe",
        route: { source: "Hyderabad", destination: "Warangal", via: ["Suryapet"] },
        schedule: { departureTime: "2025-10-10T16:00:00", arrivalTime: "2025-10-10T19:00:00", durationMin: 180 },
        fare: 350, seatsAvailable: 28, capacity: 45, busType: "Non-AC Seater",
        amenities: ["Water Bottle"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-10T16:00:00" }],
        dropPoints: [{ name: "Warangal", time: "2025-10-10T19:00:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: [], reservedSeats: [] },
        rating: 3.7, reviewsCount: 80
    },
    {
        id: "BUS0021",
        operator: "Sharma Transports",
        route: { source: "Delhi", destination: "Jaipur", via: ["Gurgaon"] },
        schedule: { departureTime: "2025-10-12T08:00:00", arrivalTime: "2025-10-12T13:00:00", durationMin: 300 },
        fare: 550, seatsAvailable: 25, capacity: 40, busType: "AC Seater",
        amenities: ["Charging Port", "Water Bottle"],
        boardingPoints: [{ name: "Delhi", time: "2025-10-12T08:00:00" }],
        dropPoints: [{ name: "Jaipur", time: "2025-10-12T13:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["3A", "4B"], reservedSeats: [] },
        rating: 4.1, reviewsCount: 180
    },
    {
        id: "BUS0022",
        operator: "Royal Cruiser",
        route: { source: "Kolkata", destination: "Puri", via: ["Bhubaneswar"] },
        schedule: { departureTime: "2025-10-12T22:00:00", arrivalTime: "2025-10-13T06:00:00", durationMin: 480 },
        fare: 800, seatsAvailable: 15, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Blanket", "Charging Port"],
        boardingPoints: [{ name: "Kolkata", time: "2025-10-12T22:00:00" }],
        dropPoints: [{ name: "Puri", time: "2025-10-13T06:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1D", "5C"], reservedSeats: [] },
        rating: 4.6, reviewsCount: 320
    },
    {
        id: "BUS0023",
        operator: "Seabird Tourists",
        route: { source: "Goa", destination: "Mumbai", via: ["Panjim"] },
        schedule: { departureTime: "2025-10-13T19:00:00", arrivalTime: "2025-10-14T07:00:00", durationMin: 720 },
        fare: 1150, seatsAvailable: 8, capacity: 30, busType: " Non-AC Seater",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light", "Water Bottle"],
        boardingPoints: [{ name: "Goa", time: "2025-10-13T19:00:00" }],
        dropPoints: [{ name: "Mumbai", time: "2025-10-14T07:00:00" }],
        seatLayout: { rows: 8, columns: 4, layoutType: "2+2", bookedSeats: ["2B", "6A", "7D"], reservedSeats: [] },
        rating: 4.8, reviewsCount: 450
    },
    {
        id: "BUS0024",
        operator: "National Travels",
        route: { source: "Pune", destination: "Bangalore", via: ["Kolhapur", "Hubli"] },
        schedule: { departureTime: "2025-10-13T18:30:00", arrivalTime: "2025-10-14T08:30:00", durationMin: 840 },
        fare: 1300, seatsAvailable: 18, capacity: 44, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Pune", time: "2025-10-13T18:30:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-10-14T08:30:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["3D", "9C"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 280
    },
    {
        id: "BUS0025",
        operator: "GSRTC",
        route: { source: "Ahmedabad", destination: "Udaipur", via: [] },
        schedule: { departureTime: "2025-10-14T23:00:00", arrivalTime: "2025-10-15T04:00:00", durationMin: 300 },
        fare: 450, seatsAvailable: 30, capacity: 50, busType: "Non-AC Seater",
        amenities: [],
        boardingPoints: [{ name: "Ahmedabad", time: "2025-10-14T23:00:00" }],
        dropPoints: [{ name: "Udaipur", time: "2025-10-15T04:00:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "10C"], reservedSeats: [] },
        rating: 3.7, reviewsCount: 110
    },
    {
        id: "BUS0026",
        operator: "VRL Travels",
        route: { source: "Hyderabad", destination: "Nagpur", via: ["Adilabad"] },
        schedule: { departureTime: "2025-10-14T20:00:00", arrivalTime: "2025-10-15T05:00:00", durationMin: 540 },
        fare: 900, seatsAvailable: 11, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-14T20:00:00" }],
        dropPoints: [{ name: "Nagpur", time: "2025-10-15T05:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["4D", "5A"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 205
    },
    {
        id: "BUS0027",
        operator: "Orange Tours & Travels",
        route: { source: "Bangalore", destination: "Pune", via: ["Hubli", "Kolhapur"] },
        schedule: { departureTime: "2025-10-15T19:00:00", arrivalTime: "2025-10-16T09:00:00", durationMin: 840 },
        fare: 1350, seatsAvailable: 22, capacity: 44, busType: " Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light", "Water Bottle"],
        boardingPoints: [{ name: "Bangalore", time: "2025-10-15T19:00:00" }],
        dropPoints: [{ name: "Pune", time: "2025-10-16T09:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["1C", "2D"], reservedSeats: [] },
        rating: 4.6, reviewsCount: 380
    },
    {
        id: "BUS0028",
        operator: "KSRTC",
        route: { source: "Bangalore", destination: "Mysore", via: [] },
        schedule: { departureTime: "2025-10-15T10:00:00", arrivalTime: "2025-10-15T13:00:00", durationMin: 180 },
        fare: 300, seatsAvailable: 35, capacity: 48, busType: "Non-AC Seater",
        amenities: ["Reading Light"],
        boardingPoints: [{ name: "Bangalore", time: "2025-10-15T10:00:00" }],
        dropPoints: [{ name: "Mysore", time: "2025-10-15T13:00:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["5B", "5C"], reservedSeats: [] },
        rating: 4.0, reviewsCount: 150
    },
    {
        id: "BUS0029",
        operator: "Express Travels",
        route: { source: "Chennai", destination: "Tirupati", via: [] },
        schedule: { departureTime: "2025-10-16T05:30:00", arrivalTime: "2025-10-16T09:00:00", durationMin: 210 },
        fare: 400, seatsAvailable: 19, capacity: 32, busType: "AC Seater",
        amenities: ["Charging Port", "Water Bottle"],
        boardingPoints: [{ name: "Chennai", time: "2025-10-16T05:30:00" }],
        dropPoints: [{ name: "Tirupati", time: "2025-10-16T09:00:00" }],
        seatLayout: { rows: 8, columns: 4, layoutType: "2+2", bookedSeats: ["3A"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 95
    },
    {
        id: "BUS0030",
        operator: "GreenLine Travels",
        route: { source: "Mumbai", destination: "Ahmedabad", via: ["Surat", "Vadodara"] },
        schedule: { departureTime: "2025-10-16T21:30:00", arrivalTime: "2025-10-17T07:00:00", durationMin: 690 },
        fare: 980, seatsAvailable: 14, capacity: 38, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light"],
        boardingPoints: [{ name: "Mumbai", time: "2025-10-16T21:30:00" }],
        dropPoints: [{ name: "Ahmedabad", time: "2025-10-17T07:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["8D"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 215
    },
    {
        id: "BUS0031",
        operator: "Prasanna Purple",
        route: { source: "Pune", destination: "Goa", via: ["Kolhapur"] },
        schedule: { departureTime: "2025-10-17T22:00:00", arrivalTime: "2025-10-18T08:00:00", durationMin: 600 },
        fare: 1050, seatsAvailable: 20, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Pune", time: "2025-10-17T22:00:00" }],
        dropPoints: [{ name: "Goa", time: "2025-10-18T08:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["2A", "3B"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 330
    },
    {
        id: "BUS0032",
        operator: "Zingbus",
        route: { source: "Delhi", destination: "Manali", via: ["Chandigarh"] },
        schedule: { departureTime: "2025-10-18T19:00:00", arrivalTime: "2025-10-19T09:00:00", durationMin: 840 },
        fare: 1400, seatsAvailable: 10, capacity: 34, busType: " Non-AC Seater",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle", "Reading Light"],
        boardingPoints: [{ name: "Delhi", time: "2025-10-18T19:00:00" }],
        dropPoints: [{ name: "Manali", time: "2025-10-19T09:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B"], reservedSeats: [] },
        rating: 4.7, reviewsCount: 510
    },
    {
        id: "BUS0033",
        operator: "SRS Travels",
        route: { source: "Hyderabad", destination: "Goa", via: ["Raichur", "Belgaum"] },
        schedule: { departureTime: "2025-10-18T18:00:00", arrivalTime: "2025-10-19T08:00:00", durationMin: 840 },
        fare: 1250, seatsAvailable: 16, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-18T18:00:00" }],
        dropPoints: [{ name: "Goa", time: "2025-10-19T08:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["5C", "5D"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 240
    },
    {
        id: "BUS0034",
        operator: "Parveen Travels",
        route: { source: "Madurai", destination: "Bangalore", via: ["Salem"] },
        schedule: { departureTime: "2025-10-19T21:45:00", arrivalTime: "2025-10-20T05:00:00", durationMin: 435 },
        fare: 700, seatsAvailable: 21, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Madurai", time: "2025-10-19T21:45:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-10-20T05:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["2B"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 190
    },
    {
        id: "BUS0035",
        operator: "Morning Star Travels",
        route: { source: "Visakhapatnam", destination: "Hyderabad", via: ["Rajahmundry", "Vijayawada"] },
        schedule: { departureTime: "2025-10-19T20:00:00", arrivalTime: "2025-10-20T06:30:00", durationMin: 630 },
        fare: 950, seatsAvailable: 13, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Visakhapatnam", time: "2025-10-19T20:00:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-10-20T06:30:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["7A", "7B"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 295
    },
    {
        id: "BUS0036",
        operator: "IntrCity SmartBus",
        route: { source: "Lucknow", destination: "Delhi", via: ["Agra"] },
        schedule: { departureTime: "2025-10-20T23:00:00", arrivalTime: "2025-10-21T06:00:00", durationMin: 420 },
        fare: 850, seatsAvailable: 25, capacity: 42, busType: "AC Seater",
        amenities: ["Charging Port", "Water Bottle", "Reading Light", "Live Tracking"],
        boardingPoints: [{ name: "Lucknow", time: "2025-10-20T23:00:00" }],
        dropPoints: [{ name: "Delhi", time: "2025-10-21T06:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["10C"], reservedSeats: [] },
        rating: 4.6, reviewsCount: 410
    },
    {
        id: "BUS0037",
        operator: "RedBus Express",
        route: { source: "Jaipur", destination: "Ahmedabad", via: ["Udaipur"] },
        schedule: { departureTime: "2025-10-20T21:00:00", arrivalTime: "2025-10-21T08:00:00", durationMin: 660 },
        fare: 900, seatsAvailable: 17, capacity: 38, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Jaipur", time: "2025-10-20T21:00:00" }],
        dropPoints: [{ name: "Ahmedabad", time: "2025-10-21T08:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["3D", "4A"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 250
    },
    {
        id: "BUS0038",
        operator: " Express",
        route: { source: "Delhi", destination: "Shimla", via: ["Chandigarh"] },
        schedule: { departureTime: "2025-10-21T22:30:00", arrivalTime: "2025-10-22T06:30:00", durationMin: 480 },
        fare: 950, seatsAvailable: 20, capacity: 45, busType: " Non-AC Seater",
        amenities: ["WiFi", "Charging Port", "Water Bottle", "Reading Light"],
        boardingPoints: [{ name: "Delhi", time: "2025-10-21T22:30:00" }],
        dropPoints: [{ name: "Shimla", time: "2025-10-22T06:30:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2A", "3A"], reservedSeats: [] },
        rating: 4.7, reviewsCount: 600
    },
    {
        id: "BUS0039",
        operator: "Kallada Travels",
        route: { source: "Kochi", destination: "Bangalore", via: ["Coimbatore", "Salem"] },
        schedule: { departureTime: "2025-10-21T20:00:00", arrivalTime: "2025-10-22T07:00:00", durationMin: 660 },
        fare: 1100, seatsAvailable: 12, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Kochi", time: "2025-10-21T20:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-10-22T07:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["8C", "8D"], reservedSeats: [] },
        rating: 4.1, reviewsCount: 180
    },
    {
        id: "BUS0040",
        operator: "Saini Travels",
        route: { source: "Jodhpur", destination: "Delhi", via: ["Jaipur"] },
        schedule: { departureTime: "2025-10-22T19:00:00", arrivalTime: "2025-10-23T06:00:00", durationMin: 660 },
        fare: 800, seatsAvailable: 24, capacity: 40, busType: "AC Seater",
        amenities: ["Charging Port", "Reading Light"],
        boardingPoints: [{ name: "Jodhpur", time: "2025-10-22T19:00:00" }],
        dropPoints: [{ name: "Delhi", time: "2025-10-23T06:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["5A"], reservedSeats: [] },
        rating: 4.0, reviewsCount: 130
    },
    {
        id: "BUS0041",
        operator: "Kaveri Travels",
        route: { source: "Mumbai", destination: "Hyderabad", via: ["Pune", "Solapur"] },
        schedule: { departureTime: "2025-10-22T16:00:00", arrivalTime: "2025-10-23T07:00:00", durationMin: 900 },
        fare: 1250, seatsAvailable: 9, capacity: 45, busType: " Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Mumbai", time: "2025-10-22T16:00:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-10-23T07:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["10D"], reservedSeats: [] },
        rating: 4.6, reviewsCount: 420
    },
    {
        id: "BUS0042",
        operator: "APSRTC",
        route: { source: "Tirupati", destination: "Bangalore", via: ["Chittoor"] },
        schedule: { departureTime: "2025-10-23T14:00:00", arrivalTime: "2025-10-23T19:00:00", durationMin: 300 },
        fare: 380, seatsAvailable: 28, capacity: 50, busType: "Non-AC Seater",
        amenities: [],
        boardingPoints: [{ name: "Tirupati", time: "2025-10-23T14:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-10-23T19:00:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["3C", "4D", "5A"], reservedSeats: [] },
        rating: 3.9, reviewsCount: 115
    },
    {
        id: "BUS0043",
        operator: "Jabbar Travels",
        route: { source: "Bangalore", destination: "Mumbai", via: ["Hubli", "Pune"] },
        schedule: { departureTime: "2025-10-23T15:00:00", arrivalTime: "2025-10-24T09:00:00", durationMin: 1080 },
        fare: 1500, seatsAvailable: 15, capacity: 40, busType: " Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light", "Water Bottle", "Live Tracking"],
        boardingPoints: [{ name: "Bangalore", time: "2025-10-23T15:00:00" }],
        dropPoints: [{ name: "Mumbai", time: "2025-10-24T09:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1D"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 380
    },
    {
        id: "BUS0044",
        operator: "Neeta Travels",
        route: { source: "Pune", destination: "Shirdi", via: ["Ahmednagar"] },
        schedule: { departureTime: "2025-10-24T06:00:00", arrivalTime: "2025-10-24T11:00:00", durationMin: 300 },
        fare: 500, seatsAvailable: 22, capacity: 35, busType: "AC Seater",
        amenities: ["Charging Port", "Reading Light"],
        boardingPoints: [{ name: "Pune", time: "2025-10-24T06:00:00" }],
        dropPoints: [{ name: "Shirdi", time: "2025-10-24T11:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["4B"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 210
    },
    {
        id: "BUS0045",
        operator: "TSRTC",
        route: { source: "Hyderabad", destination: "Karimnagar", via: [] },
        schedule: { departureTime: "2025-10-24T12:00:00", arrivalTime: "2025-10-24T15:30:00", durationMin: 210 },
        fare: 250, seatsAvailable: 30, capacity: 45, busType: "Non-AC Seater",
        amenities: [],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-24T12:00:00" }],
        dropPoints: [{ name: "Karimnagar", time: "2025-10-24T15:30:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["8C"], reservedSeats: [] },
        rating: 3.8, reviewsCount: 90
    },
    {
        id: "BUS0046",
        operator: "Rajesh Travels",
        route: { source: "Indore", destination: "Mumbai", via: ["Dhule", "Nashik"] },
        schedule: { departureTime: "2025-10-25T19:00:00", arrivalTime: "2025-10-26T06:00:00", durationMin: 660 },
        fare: 950, seatsAvailable: 14, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Indore", time: "2025-10-25T19:00:00" }],
        dropPoints: [{ name: "Mumbai", time: "2025-10-26T06:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["3A", "3B"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 220
    },
    {
        id: "BUS0047",
        operator: "VRL Travels",
        route: { source: "Bangalore", destination: "Vijayawada", via: ["Tirupati", "Nellore"] },
        schedule: { departureTime: "2025-10-25T20:30:00", arrivalTime: "2025-10-26T08:00:00", durationMin: 690 },
        fare: 1050, seatsAvailable: 19, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Bangalore", time: "2025-10-25T20:30:00" }],
        dropPoints: [{ name: "Vijayawada", time: "2025-10-26T08:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["6D"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 260
    },
    {
        id: "BUS0048",
        operator: "KPN Travels",
        route: { source: "Coimbatore", destination: "Chennai", via: ["Salem"] },
        schedule: { departureTime: "2025-10-26T23:00:00", arrivalTime: "2025-10-27T06:00:00", durationMin: 420 },
        fare: 650, seatsAvailable: 23, capacity: 40, busType: "AC Seater",
        amenities: ["Charging Port", "Reading Light"],
        boardingPoints: [{ name: "Coimbatore", time: "2025-10-26T23:00:00" }],
        dropPoints: [{ name: "Chennai", time: "2025-10-27T06:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: [], reservedSeats: [] },
        rating: 4.1, reviewsCount: 170
    },
    {
        id: "BUS0049",
        operator: "Paulo Travels",
        route: { source: "Goa", destination: "Pune", via: ["Kolhapur"] },
        schedule: { departureTime: "2025-10-26T20:00:00", arrivalTime: "2025-10-27T06:00:00", durationMin: 600 },
        fare: 1000, seatsAvailable: 11, capacity: 34, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Goa", time: "2025-10-26T20:00:00" }],
        dropPoints: [{ name: "Pune", time: "2025-10-27T06:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["7C"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 310
    },
    {
        id: "BUS0050",
        operator: "SRS Travels",
        route: { source: "Mangalore", destination: "Bangalore", via: ["Hassan"] },
        schedule: { departureTime: "2025-10-27T22:00:00", arrivalTime: "2025-10-28T05:00:00", durationMin: 420 },
        fare: 750, seatsAvailable: 18, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Mangalore", time: "2025-10-27T22:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-10-28T05:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["4A", "4B"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 230
    },
    {
        id: "BUS0051",
        operator: "Orange Tours & Travels",
        route: { source: "Hyderabad", destination: "Shirdi", via: ["Aurangabad"] },
        schedule: { departureTime: "2025-10-27T19:30:00", arrivalTime: "2025-10-28T08:30:00", durationMin: 780 },
        fare: 1100, seatsAvailable: 20, capacity: 44, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-27T19:30:00" }],
        dropPoints: [{ name: "Shirdi", time: "2025-10-28T08:30:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "10D"], reservedSeats: [] },
        rating: 4.6, reviewsCount: 390
    },
    {
        id: "BUS0052",
        operator: "VRL Travels",
        route: { source: "Mumbai", destination: "Bangalore", via: ["Pune", "Hubli"] },
        schedule: { departureTime: "2025-10-28T16:00:00", arrivalTime: "2025-10-29T10:00:00", durationMin: 1080 },
        fare: 1550, seatsAvailable: 10, capacity: 36, busType: " Non-AC Seater",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light", "Live Tracking"],
        boardingPoints: [{ name: "Mumbai", time: "2025-10-28T16:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-10-29T10:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["2C", "3D"], reservedSeats: [] },
        rating: 4.7, reviewsCount: 480
    },
    {
        id: "BUS0053",
        operator: "APSRTC",
        route: { source: "Visakhapatnam", destination: "Chennai", via: ["Vijayawada", "Nellore"] },
        schedule: { departureTime: "2025-10-28T18:00:00", arrivalTime: "2025-10-29T08:00:00", durationMin: 840 },
        fare: 950, seatsAvailable: 26, capacity: 50, busType: "Non-AC Seater",
        amenities: ["Water Bottle"],
        boardingPoints: [{ name: "Visakhapatnam", time: "2025-10-28T18:00:00" }],
        dropPoints: [{ name: "Chennai", time: "2025-10-29T08:00:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C"], reservedSeats: [] },
        rating: 3.9, reviewsCount: 130
    },
    {
        id: "BUS0054",
        operator: "Kesineni Travels",
        route: { source: "Bangalore", destination: "Hyderabad", via: ["Anantapur", "Kurnool"] },
        schedule: { departureTime: "2025-10-29T21:00:00", arrivalTime: "2025-10-30T06:30:00", durationMin: 570 },
        fare: 920, seatsAvailable: 18, capacity: 42, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Bangalore", time: "2025-10-29T21:00:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-10-30T06:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["5D"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 265
    },
    {
        id: "BUS0055",
        operator: "Shatabdi Travels",
        route: { source: "Delhi", destination: "Bhopal", via: ["Agra", "Gwalior"] },
        schedule: { departureTime: "2025-10-29T20:00:00", arrivalTime: "2025-10-30T07:00:00", durationMin: 660 },
        fare: 1000, seatsAvailable: 20, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Delhi", time: "2025-10-29T20:00:00" }],
        dropPoints: [{ name: "Bhopal", time: "2025-10-30T07:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1B", "1C"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 195
    },
    {
        id: "BUS0056",
        operator: "YBM Travels",
        route: { source: "Trichy", destination: "Chennai", via: [] },
        schedule: { departureTime: "2025-10-30T14:00:00", arrivalTime: "2025-10-30T20:00:00", durationMin: 360 },
        fare: 500, seatsAvailable: 25, capacity: 40, busType: "AC Seater",
        amenities: ["Charging Port", "Reading Light"],
        boardingPoints: [{ name: "Trichy", time: "2025-10-30T14:00:00" }],
        dropPoints: [{ name: "Chennai", time: "2025-10-30T20:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["8A"], reservedSeats: [] },
        rating: 4.0, reviewsCount: 125
    },
    {
        id: "BUS0057",
        operator: "Sugama Tourists",
        route: { source: "Bangalore", destination: "Udupi", via: ["Hassan", "Mangalore"] },
        schedule: { departureTime: "2025-10-30T22:00:00", arrivalTime: "2025-10-31T06:00:00", durationMin: 480 },
        fare: 800, seatsAvailable: 15, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Bangalore", time: "2025-10-30T22:00:00" }],
        dropPoints: [{ name: "Udupi", time: "2025-10-31T06:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["3D", "4D"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 210
    },
    {
        id: "BUS0058",
        operator: "MSRTC",
        route: { source: "Mumbai", destination: "Pune", via: [] },
        schedule: { departureTime: "2025-10-31T09:30:00", arrivalTime: "2025-10-31T13:00:00", durationMin: 210 },
        fare: 450, seatsAvailable: 30, capacity: 48, busType: "Non-AC Seater",
        amenities: [],
        boardingPoints: [{ name: "Mumbai", time: "2025-10-31T09:30:00" }],
        dropPoints: [{ name: "Pune", time: "2025-10-31T13:00:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2C", "3B"], reservedSeats: [] },
        rating: 3.8, reviewsCount: 140
    },
    {
        id: "BUS0059",
        operator: "Hebron Travels",
        route: { source: "Hyderabad", destination: "Kochi", via: ["Bangalore", "Coimbatore"] },
        schedule: { departureTime: "2025-10-31T15:00:00", arrivalTime: "2025-11-01T12:00:00", durationMin: 1260 },
        fare: 1800, seatsAvailable: 10, capacity: 36, busType: " Non-AC Seater",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light", "Water Bottle", "Live Tracking"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-31T15:00:00" }],
        dropPoints: [{ name: "Kochi", time: "2025-11-01T12:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B"], reservedSeats: [] },
        rating: 4.8, reviewsCount: 550
    },
    {
        id: "BUS0060",
        operator: "SVKDT Travels",
        route: { source: "Hyderabad", destination: "Srisailam", via: [] },
        schedule: { departureTime: "2025-11-01T07:00:00", arrivalTime: "2025-11-01T12:00:00", durationMin: 300 },
        fare: 550, seatsAvailable: 22, capacity: 40, busType: "AC Seater",
        amenities: ["Charging Port", "Water Bottle"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-11-01T07:00:00" }],
        dropPoints: [{ name: "Srisailam", time: "2025-11-01T12:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["4C"], reservedSeats: [] },
        rating: 4.1, reviewsCount: 160
    },
    {
        id: "BUS0061",
        operator: "IntrCity SmartBus",
        route: { source: "Bangalore", destination: "Goa", via: ["Hubli"] },
        schedule: { departureTime: "2025-11-01T21:00:00", arrivalTime: "2025-11-02T07:00:00", durationMin: 600 },
        fare: 1150, seatsAvailable: 18, capacity: 38, busType: " Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light", "Live Tracking"],
        boardingPoints: [{ name: "Bangalore", time: "2025-11-01T21:00:00" }],
        dropPoints: [{ name: "Goa", time: "2025-11-02T07:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["2D", "3C"], reservedSeats: [] },
        rating: 4.7, reviewsCount: 430
    },
    {
        id: "BUS0062",
        operator: "City Express",
        route: { source: "Nagpur", destination: "Pune", via: ["Aurangabad"] },
        schedule: { departureTime: "2025-11-02T20:00:00", arrivalTime: "2025-11-03T07:00:00", durationMin: 660 },
        fare: 950, seatsAvailable: 15, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Nagpur", time: "2025-11-02T20:00:00" }],
        dropPoints: [{ name: "Pune", time: "2025-11-03T07:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["5A", "6B"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 200
    },
    {
        id: "BUS0063",
        operator: "Universal Travels",
        route: { source: "Chennai", destination: "Pondicherry", via: [] },
        schedule: { departureTime: "2025-11-02T11:00:00", arrivalTime: "2025-11-02T14:00:00", durationMin: 180 },
        fare: 350, seatsAvailable: 28, capacity: 40, busType: "AC Seater",
        amenities: ["Charging Port"],
        boardingPoints: [{ name: "Chennai", time: "2025-11-02T11:00:00" }],
        dropPoints: [{ name: "Pondicherry", time: "2025-11-02T14:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A"], reservedSeats: [] },
        rating: 4.0, reviewsCount: 110
    },
    {
        id: "BUS0064",
        operator: "VRL Logistics",
        route: { source: "Ahmedabad", destination: "Jaipur", via: ["Udaipur"] },
        schedule: { departureTime: "2025-11-03T21:30:00", arrivalTime: "2025-11-04T08:00:00", durationMin: 630 },
        fare: 880, seatsAvailable: 20, capacity: 38, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Ahmedabad", time: "2025-11-03T21:30:00" }],
        dropPoints: [{ name: "Jaipur", time: "2025-11-04T08:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["4C", "4D"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 270
    },
    {
        id: "BUS0065",
        operator: "Morning Star Travels",
        route: { source: "Vijayawada", destination: "Bangalore", via: ["Nellore", "Tirupati"] },
        schedule: { departureTime: "2025-11-03T19:00:00", arrivalTime: "2025-11-04T07:00:00", durationMin: 720 },
        fare: 1100, seatsAvailable: 10, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light"],
        boardingPoints: [{ name: "Vijayawada", time: "2025-11-03T19:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-11-04T07:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["8A", "8B"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 300
    },
    {
        id: "BUS0066",
        operator: "Zingbus",
        route: { source: "Agra", destination: "Delhi", via: [] },
        schedule: { departureTime: "2025-11-04T15:00:00", arrivalTime: "2025-11-04T19:00:00", durationMin: 240 },
        fare: 450, seatsAvailable: 30, capacity: 42, busType: "AC Seater",
        amenities: ["Charging Port", "Water Bottle", "Live Tracking"],
        boardingPoints: [{ name: "Agra", time: "2025-11-04T15:00:00" }],
        dropPoints: [{ name: "Delhi", time: "2025-11-04T19:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["3C"], reservedSeats: [] },
        rating: 4.6, reviewsCount: 350
    },
    {
        id: "BUS0067",
        operator: "Kallada Travels",
        route: { source: "Trivandrum", destination: "Bangalore", via: ["Kochi", "Salem"] },
        schedule: { departureTime: "2025-11-04T18:00:00", arrivalTime: "2025-11-05T08:00:00", durationMin: 840 },
        fare: 1400, seatsAvailable: 14, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Trivandrum", time: "2025-11-04T18:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-11-05T08:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["2A", "2B"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 220
    },
    {
        id: "BUS0068",
        operator: "UPSRTC",
        route: { source: "Varanasi", destination: "Lucknow", via: [] },
        schedule: { departureTime: "2025-11-05T09:00:00", arrivalTime: "2025-11-05T15:00:00", durationMin: 360 },
        fare: 500, seatsAvailable: 28, capacity: 50, busType: "Non-AC Seater",
        amenities: ["Reading Light"],
        boardingPoints: [{ name: "Varanasi", time: "2025-11-05T09:00:00" }],
        dropPoints: [{ name: "Lucknow", time: "2025-11-05T15:00:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["7D"], reservedSeats: [] },
        rating: 3.8, reviewsCount: 160
    },
    {
        id: "BUS0069",
        operator: "Sri Krishna Travels",
        route: { source: "Hyderabad", destination: "Shirdi", via: ["Nanded"] },
        schedule: { departureTime: "2025-11-05T19:30:00", arrivalTime: "2025-11-06T09:00:00", durationMin: 810 },
        fare: 1150, seatsAvailable: 19, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-11-05T19:30:00" }],
        dropPoints: [{ name: "Shirdi", time: "2025-11-06T09:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["4A"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 240
    },
    {
        id: "BUS0070",
        operator: "Neeta Travels",
        route: { source: "Mumbai", destination: "Mahabaleshwar", via: [] },
        schedule: { departureTime: "2025-11-06T07:00:00", arrivalTime: "2025-11-06T13:00:00", durationMin: 360 },
        fare: 650, seatsAvailable: 22, capacity: 35, busType: "AC Seater",
        amenities: ["Charging Port", "Water Bottle"],
        boardingPoints: [{ name: "Mumbai", time: "2025-11-06T07:00:00" }],
        dropPoints: [{ name: "Mahabaleshwar", time: "2025-11-06T13:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1C", "2D"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 290
    },
    {
        id: "BUS0071",
        operator: "IntrCity SmartBus",
        route: { source: "Delhi", destination: "Amritsar", via: ["Ludhiana"] },
        schedule: { departureTime: "2025-11-06T22:00:00", arrivalTime: "2025-11-07T05:00:00", durationMin: 420 },
        fare: 900, seatsAvailable: 25, capacity: 42, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Live Tracking"],
        boardingPoints: [{ name: "Delhi", time: "2025-11-06T22:00:00" }],
        dropPoints: [{ name: "Amritsar", time: "2025-11-07T05:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["5B"], reservedSeats: [] },
        rating: 4.7, reviewsCount: 500
    },
    {
        id: "BUS0072",
        operator: "APSRTC",
        route: { source: "Visakhapatnam", destination: "Hyderabad", via: ["Vijayawada"] },
        schedule: { departureTime: "2025-10-10T21:00:00", arrivalTime: "2025-10-11T07:30:00", durationMin: 630 },
        fare: 850, seatsAvailable: 30, capacity: 50, busType: "Non-AC Seater",
        amenities: ["Water Bottle"],
        boardingPoints: [{ name: "Visakhapatnam", time: "2025-10-10T21:00:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-10-11T07:30:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["10A", "10B"], reservedSeats: [] },
        rating: 3.8, reviewsCount: 120
    },
    {
        id: "BUS0073",
        operator: "Patel Travels",
        route: { source: "Indore", destination: "Pune", via: ["Nashik"] },
        schedule: { departureTime: "2025-11-07T20:00:00", arrivalTime: "2025-11-08T08:00:00", durationMin: 720 },
        fare: 1100, seatsAvailable: 18, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Indore", time: "2025-11-07T20:00:00" }],
        dropPoints: [{ name: "Pune", time: "2025-11-08T08:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["3C", "4A"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 240
    },
    {
        id: "BUS0074",
        operator: "GreenLine Travels",
        route: { source: "Bangalore", destination: "Mumbai", via: ["Pune"] },
        schedule: { departureTime: "2025-11-07T18:00:00", arrivalTime: "2025-11-08T11:00:00", durationMin: 1020 },
        fare: 1600, seatsAvailable: 12, capacity: 36, busType: " Non-AC Seater",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light", "Live Tracking"],
        boardingPoints: [{ name: "Bangalore", time: "2025-11-07T18:00:00" }],
        dropPoints: [{ name: "Mumbai", time: "2025-11-08T11:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B"], reservedSeats: [] },
        rating: 4.6, reviewsCount: 450
    },
    {
        id: "BUS0075",
        operator: "VRL Travels",
        route: { source: "Goa", destination: "Hyderabad", via: ["Belgaum"] },
        schedule: { departureTime: "2025-11-08T17:00:00", arrivalTime: "2025-11-09T07:00:00", durationMin: 840 },
        fare: 1300, seatsAvailable: 16, capacity: 38, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Goa", time: "2025-11-08T17:00:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-11-09T07:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["5D", "6C"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 290
    },
    {
        id: "BUS0076",
        operator: "KPN Travels",
        route: { source: "Chennai", destination: "Bangalore", via: ["Vellore"] },
        schedule: { departureTime: "2025-10-11T08:00:00", arrivalTime: "2025-10-11T14:00:00", durationMin: 360 },
        fare: 600, seatsAvailable: 25, capacity: 40, busType: "AC Seater",
        amenities: ["Charging Port", "Reading Light"],
        boardingPoints: [{ name: "Chennai", time: "2025-10-11T08:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-10-11T14:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["9C"], reservedSeats: [] },
        rating: 4.0, reviewsCount: 160
    },
    {
        id: "BUS0077",
        operator: "SRS Travels",
        route: { source: "Pune", destination: "Hyderabad", via: ["Solapur"] },
        schedule: { departureTime: "2025-11-08T20:30:00", arrivalTime: "2025-11-09T06:00:00", durationMin: 570 },
        fare: 980, seatsAvailable: 19, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Pune", time: "2025-11-08T20:30:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-11-09T06:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["2B", "3A"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 280
    },
    {
        id: "BUS0078",
        operator: "Rajdhani Express",
        route: { source: "Delhi", destination: "Kolkata", via: ["Kanpur", "Patna"] },
        schedule: { departureTime: "2025-11-09T17:00:00", arrivalTime: "2025-11-10T10:00:00", durationMin: 1020 },
        fare: 1800, seatsAvailable: 15, capacity: 40, busType: " AC Seater",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light", "Water Bottle", "Live Tracking"],
        boardingPoints: [{ name: "Delhi", time: "2025-11-09T17:00:00" }],
        dropPoints: [{ name: "Kolkata", time: "2025-11-10T10:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2C", "3D"], reservedSeats: [] },
        rating: 4.8, reviewsCount: 650
    },
    {
        id: "BUS0079",
        operator: "MSRTC",
        route: { source: "Pune", destination: "Nagpur", via: ["Aurangabad", "Amravati"] },
        schedule: { departureTime: "2025-11-09T18:00:00", arrivalTime: "2025-11-10T08:00:00", durationMin: 840 },
        fare: 1100, seatsAvailable: 22, capacity: 48, busType: "Non-AC Sleeper",
        amenities: ["Charging Port", "Blanket"],
        boardingPoints: [{ name: "Pune", time: "2025-11-09T18:00:00" }],
        dropPoints: [{ name: "Nagpur", time: "2025-11-10T08:00:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["5A", "6B"], reservedSeats: [] },
        rating: 4.1, reviewsCount: 190
    },
    {
        id: "BUS0080",
        operator: "Morning Star Travels",
        route: { source: "Hyderabad", destination: "Vijayawada", via: ["Nalgonda"] },
        schedule: { departureTime: "2025-10-11T12:00:00", arrivalTime: "2025-10-11T16:00:00", durationMin: 240 },
        fare: 580, seatsAvailable: 20, capacity: 36, busType: "AC Seater",
        amenities: ["Charging Port", "Water Bottle"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-11T12:00:00" }],
        dropPoints: [{ name: "Vijayawada", time: "2025-10-11T16:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["2C"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 110
    },
    {
        id: "BUS0081",
        operator: "Jabbar Travels",
        route: { source: "Mumbai", destination: "Hyderabad", via: ["Pune", "Solapur"] },
        schedule: { departureTime: "2025-10-10T19:00:00", arrivalTime: "2025-10-11T10:00:00", durationMin: 900 },
        fare: 1250, seatsAvailable: 14, capacity: 45, busType: " Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light"],
        boardingPoints: [{ name: "Mumbai", time: "2025-10-10T19:00:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-10-11T10:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["4B"], reservedSeats: [] },
        rating: 4.6, reviewsCount: 410
    },
    {
        id: "BUS0082",
        operator: "Kaveri Travels",
        route: { source: "Bangalore", destination: "Chennai", via: ["Vellore"] },
        schedule: { departureTime: "2025-11-10T07:00:00", arrivalTime: "2025-11-10T13:00:00", durationMin: 360 },
        fare: 620, seatsAvailable: 28, capacity: 40, busType: "AC Seater",
        amenities: ["Charging Port", "Reading Light"],
        boardingPoints: [{ name: "Bangalore", time: "2025-11-10T07:00:00" }],
        dropPoints: [{ name: "Chennai", time: "2025-11-10T13:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["3A", "3B"], reservedSeats: [] },
        rating: 4.1, reviewsCount: 175
    },
    {
        id: "BUS0083",
        operator: "Go Tour",
        route: { source: "Chennai", destination: "Pondicherry", via: [] },
        schedule: { departureTime: "2025-11-10T18:00:00", arrivalTime: "2025-11-10T21:00:00", durationMin: 180 },
        fare: 320, seatsAvailable: 30, capacity: 40, busType: "Non-AC Seater",
        amenities: [],
        boardingPoints: [{ name: "Chennai", time: "2025-11-10T18:00:00" }],
        dropPoints: [{ name: "Pondicherry", time: "2025-11-10T21:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["5D"], reservedSeats: [] },
        rating: 3.9, reviewsCount: 85
    },
    {
        id: "BUS0084",
        operator: "Zingbus",
        route: { source: "Delhi", destination: "Agra", via: ["Mathura"] },
        schedule: { departureTime: "2025-11-11T08:30:00", arrivalTime: "2025-11-11T12:00:00", durationMin: 210 },
        fare: 480, seatsAvailable: 25, capacity: 42, busType: "AC Seater",
        amenities: ["Charging Port", "Water Bottle", "Live Tracking"],
        boardingPoints: [{ name: "Delhi", time: "2025-11-11T08:30:00" }],
        dropPoints: [{ name: "Agra", time: "2025-11-11T12:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["2A"], reservedSeats: [] },
        rating: 4.7, reviewsCount: 450
    },
    {
        id: "BUS0085",
        operator: "VRL Travels",
        route: { source: "Hyderabad", destination: "Mumbai", via: ["Pune"] },
        schedule: { departureTime: "2025-10-10T20:00:00", arrivalTime: "2025-10-11T10:00:00", durationMin: 840 },
        fare: 1300, seatsAvailable: 11, capacity: 36, busType: " Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-10T20:00:00" }],
        dropPoints: [{ name: "Mumbai", time: "2025-10-11T10:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["6A", "6B"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 320
    },
    {
        id: "BUS0086",
        operator: "IntrCity SmartBus",
        route: { source: "Goa", destination: "Bangalore", via: ["Hubli"] },
        schedule: { departureTime: "2025-11-11T19:00:00", arrivalTime: "2025-11-12T05:00:00", durationMin: 600 },
        fare: 1200, seatsAvailable: 15, capacity: 38, busType: " Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light", "Live Tracking"],
        boardingPoints: [{ name: "Goa", time: "2025-11-11T19:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-11-12T05:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["4C", "5D"], reservedSeats: [] },
        rating: 4.8, reviewsCount: 510
    },
    {
        id: "BUS0087",
        operator: "SRS Travels",
        route: { source: "Chennai", destination: "Hyderabad", via: ["Nellore"] },
        schedule: { departureTime: "2025-11-12T19:30:00", arrivalTime: "2025-11-13T06:00:00", durationMin: 630 },
        fare: 1000, seatsAvailable: 17, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Chennai", time: "2025-11-12T19:30:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-11-13T06:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["3B"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 290
    },
    {
        id: "BUS0088",
        operator: "Royal Safari",
        route: { source: "Jaipur", destination: "Jodhpur", via: ["Ajmer"] },
        schedule: { departureTime: "2025-11-12T14:00:00", arrivalTime: "2025-11-12T20:00:00", durationMin: 360 },
        fare: 600, seatsAvailable: 24, capacity: 40, busType: "AC Seater",
        amenities: ["Charging Port", "Reading Light"],
        boardingPoints: [{ name: "Jaipur", time: "2025-11-12T14:00:00" }],
        dropPoints: [{ name: "Jodhpur", time: "2025-11-12T20:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["7A", "7B"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 180
    },
    {
        id: "BUS0089",
        operator: "Parveen Travels",
        route: { source: "Bangalore", destination: "Madurai", via: ["Salem"] },
        schedule: { departureTime: "2025-11-13T22:00:00", arrivalTime: "2025-11-14T05:30:00", durationMin: 450 },
        fare: 750, seatsAvailable: 19, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Bangalore", time: "2025-11-13T22:00:00" }],
        dropPoints: [{ name: "Madurai", time: "2025-11-14T05:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 210
    },
    {
        id: "BUS0090",
        operator: "Neeta Travels",
        route: { source: "Mumbai", destination: "Shirdi", via: ["Nashik"] },
        schedule: { departureTime: "2025-11-13T08:00:00", arrivalTime: "2025-11-13T14:00:00", durationMin: 360 },
        fare: 680, seatsAvailable: 21, capacity: 35, busType: "AC Seater",
        amenities: ["Charging Port", "Water Bottle"],
        boardingPoints: [{ name: "Mumbai", time: "2025-11-13T08:00:00" }],
        dropPoints: [{ name: "Shirdi", time: "2025-11-13T14:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["5C"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 300
    },
    {
        id: "BUS0091",
        operator: "Kallada Travels",
        route: { source: "Bangalore", destination: "Kochi", via: ["Salem", "Coimbatore"] },
        schedule: { departureTime: "2025-11-14T21:00:00", arrivalTime: "2025-11-15T08:00:00", durationMin: 660 },
        fare: 1150, seatsAvailable: 14, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Bangalore", time: "2025-11-14T21:00:00" }],
        dropPoints: [{ name: "Kochi", time: "2025-11-15T08:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["3A", "3B"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 200
    },
    {
        id: "BUS0092",
        operator: "TSRTC",
        route: { source: "Hyderabad", destination: "Bangalore", via: ["Kurnool"] },
        schedule: { departureTime: "2025-10-10T22:00:00", arrivalTime: "2025-10-11T07:30:00", durationMin: 570 },
        fare: 700, seatsAvailable: 25, capacity: 45, busType: "Non-AC Seater",
        amenities: ["Water Bottle"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-10T22:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-10-11T07:30:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "1D"], reservedSeats: [] },
        rating: 3.9, reviewsCount: 150
    },
    {
        id: "BUS0093",
        operator: "Orange Tours & Travels",
        route: { source: "Pune", destination: "Hyderabad", via: ["Solapur"] },
        schedule: { departureTime: "2025-11-15T20:00:00", arrivalTime: "2025-11-16T08:00:00", durationMin: 720 },
        fare: 1000, seatsAvailable: 18, capacity: 44, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Pune", time: "2025-11-15T20:00:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-11-16T08:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["5A", "6D"], reservedSeats: [] },
        rating: 4.6, reviewsCount: 400
    },
    {
        id: "BUS0094",
        operator: "Zingbus",
        route: { source: "Manali", destination: "Delhi", via: ["Chandigarh"] },
        schedule: { departureTime: "2025-11-15T18:00:00", arrivalTime: "2025-11-16T08:00:00", durationMin: 840 },
        fare: 1450, seatsAvailable: 12, capacity: 34, busType: " AC Seater",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle", "Live Tracking"],
        boardingPoints: [{ name: "Manali", time: "2025-11-15T18:00:00" }],
        dropPoints: [{ name: "Delhi", time: "2025-11-16T08:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["2C", "3A"], reservedSeats: [] },
        rating: 4.8, reviewsCount: 550
    },
    {
        id: "BUS0095",
        operator: "VRL Travels",
        route: { source: "Goa", destination: "Pune", via: ["Kolhapur"] },
        schedule: { departureTime: "2025-11-16T21:00:00", arrivalTime: "2025-11-17T07:00:00", durationMin: 600 },
        fare: 1050, seatsAvailable: 16, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Goa", time: "2025-11-16T21:00:00" }],
        dropPoints: [{ name: "Pune", time: "2025-11-17T07:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["7B", "8C"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 300
    },
    {
        id: "BUS0096",
        operator: "Morning Star Travels",
        route: { source: "Hyderabad", destination: "Vijayawada", via: [] },
        schedule: { departureTime: "2025-10-12T05:00:00", arrivalTime: "2025-10-12T09:30:00", durationMin: 270 },
        fare: 560, seatsAvailable: 22, capacity: 36, busType: "AC Seater",
        amenities: ["Charging Port", "Water Bottle"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-12T05:00:00" }],
        dropPoints: [{ name: "Vijayawada", time: "2025-10-12T09:30:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["4A"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 120
    },
    {
        id: "BUS0097",
        operator: "Eagle Travels",
        route: { source: "Mumbai", destination: "Ahmedabad", via: ["Surat"] },
        schedule: { departureTime: "2025-11-17T22:30:00", arrivalTime: "2025-11-18T07:30:00", durationMin: 540 },
        fare: 850, seatsAvailable: 20, capacity: 38, busType: " Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Mumbai", time: "2025-11-17T22:30:00" }],
        dropPoints: [{ name: "Ahmedabad", time: "2025-11-18T07:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["5C", "5D"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 280
    },
    {
        id: "BUS0098",
        operator: "Paulo Travels",
        route: { source: "Pune", destination: "Mumbai", via: [] },
        schedule: { departureTime: "2025-11-18T10:00:00", arrivalTime: "2025-11-18T13:30:00", durationMin: 210 },
        fare: 480, seatsAvailable: 25, capacity: 40, busType: "AC Seater",
        amenities: ["Charging Port"],
        boardingPoints: [{ name: "Pune", time: "2025-11-18T10:00:00" }],
        dropPoints: [{ name: "Mumbai", time: "2025-11-18T13:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["2A"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 190
    },
    {
        id: "BUS0099",
        operator: "National Travels",
        route: { source: "Bangalore", destination: "Kochi", via: ["Coimbatore"] },
        schedule: { departureTime: "2025-11-18T21:00:00", arrivalTime: "2025-11-19T06:00:00", durationMin: 540 },
        fare: 1050, seatsAvailable: 17, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Bangalore", time: "2025-11-18T21:00:00" }],
        dropPoints: [{ name: "Kochi", time: "2025-11-19T06:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["3D", "4A"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 260
    },
    {
        id: "BUS0100",
        operator: "IntrCity SmartBus",
        route: { source: "Hyderabad", destination: "Chennai", via: ["Nellore"] },
        schedule: { departureTime: "2025-11-19T20:30:00", arrivalTime: "2025-11-20T07:00:00", durationMin: 630 },
        fare: 1100, seatsAvailable: 20, capacity: 42, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light", "Live Tracking"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-11-19T20:30:00" }],
        dropPoints: [{ name: "Chennai", time: "2025-11-20T07:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B"], reservedSeats: [] },
        rating: 4.8, reviewsCount: 520
    },
    {
        id: "BUS0101",
        operator: "GreenLine Travels",
        route: { source: "Kolkata", destination: "Siliguri", via: ["Malda"] },
        schedule: { departureTime: "2025-11-20T19:00:00", arrivalTime: "2025-11-21T07:00:00", durationMin: 720 },
        fare: 1200, seatsAvailable: 15, capacity: 38, busType: " Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Kolkata", time: "2025-11-20T19:00:00" }],
        dropPoints: [{ name: "Siliguri", time: "2025-11-21T07:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["2C", "3D"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 340
    },
    {
        id: "BUS0102",
        operator: "SRS Travels",
        route: { source: "Hyderabad", destination: "Bangalore", via: ["Kurnool", "Anantapur"] },
        schedule: { departureTime: "2025-10-10T22:30:00", arrivalTime: "2025-10-11T08:00:00", durationMin: 570 },
        fare: 800, seatsAvailable: 22, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Water Bottle", "Blanket"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-10T22:30:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-10-11T08:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["5A", "5B"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 220
    },
    {
        id: "BUS0103",
        operator: "VRL Travels",
        route: { source: "Pune", destination: "Ahmedabad", via: ["Surat"] },
        schedule: { departureTime: "2025-11-21T18:00:00", arrivalTime: "2025-11-22T06:00:00", durationMin: 720 },
        fare: 1150, seatsAvailable: 18, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Pune", time: "2025-11-21T18:00:00" }],
        dropPoints: [{ name: "Ahmedabad", time: "2025-11-22T06:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "10D"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 260
    },
    {
        id: "BUS0104",
        operator: "City Land Travels",
        route: { source: "Chandigarh", destination: "Delhi", via: ["Ambala"] },
        schedule: { departureTime: "2025-11-22T13:00:00", arrivalTime: "2025-11-22T18:00:00", durationMin: 300 },
        fare: 500, seatsAvailable: 28, capacity: 45, busType: "AC Seater",
        amenities: ["Charging Port", "Reading Light"],
        boardingPoints: [{ name: "Chandigarh", time: "2025-11-22T13:00:00" }],
        dropPoints: [{ name: "Delhi", time: "2025-11-22T18:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["4C"], reservedSeats: [] },
        rating: 4.1, reviewsCount: 190
    },
    {
        id: "BUS0105",
        operator: "KPN Travels",
        route: { source: "Madurai", destination: "Chennai", via: ["Trichy"] },
        schedule: { departureTime: "2025-11-22T23:00:00", arrivalTime: "2025-11-23T06:00:00", durationMin: 420 },
        fare: 680, seatsAvailable: 21, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Madurai", time: "2025-11-22T23:00:00" }],
        dropPoints: [{ name: "Chennai", time: "2025-11-23T06:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["7B", "7C"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 180
    },
    {
        id: "BUS0106",
        operator: "TSRTC Deluxe",
        route: { source: "Warangal", destination: "Hyderabad", via: [] },
        schedule: { departureTime: "2025-10-11T07:00:00", arrivalTime: "2025-10-11T10:30:00", durationMin: 210 },
        fare: 350, seatsAvailable: 30, capacity: 45, busType: "Non-AC Seater",
        amenities: [],
        boardingPoints: [{ name: "Warangal", time: "2025-10-11T07:00:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-10-11T10:30:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2A"], reservedSeats: [] },
        rating: 3.8, reviewsCount: 100
    },
    {
        id: "BUS0107",
        operator: "Zingbus",
        route: { source: "Jaipur", destination: "Delhi", via: [] },
        schedule: { departureTime: "2025-11-23T23:30:00", arrivalTime: "2025-11-24T05:00:00", durationMin: 330 },
        fare: 600, seatsAvailable: 26, capacity: 42, busType: "AC Seater",
        amenities: ["Charging Port", "Water Bottle", "Live Tracking"],
        boardingPoints: [{ name: "Jaipur", time: "2025-11-23T23:30:00" }],
        dropPoints: [{ name: "Delhi", time: "2025-11-24T05:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["8D"], reservedSeats: [] },
        rating: 4.7, reviewsCount: 520
    },
    {
        id: "BUS0108",
        operator: "SRS Travels",
        route: { source: "Mumbai", destination: "Goa", via: ["Ratnagiri"] },
        schedule: { departureTime: "2025-11-24T21:00:00", arrivalTime: "2025-11-25T07:00:00", durationMin: 600 },
        fare: 1050, seatsAvailable: 16, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Mumbai", time: "2025-11-24T21:00:00" }],
        dropPoints: [{ name: "Goa", time: "2025-11-25T07:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["2C"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 310
    },
    {
        id: "BUS0109",
        operator: "Kallada Travels",
        route: { source: "Bangalore", destination: "Trivandrum", via: ["Kochi"] },
        schedule: { departureTime: "2025-11-24T19:00:00", arrivalTime: "2025-11-25T09:00:00", durationMin: 840 },
        fare: 1450, seatsAvailable: 11, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle", "Reading Light"],
        boardingPoints: [{ name: "Bangalore", time: "2025-11-24T19:00:00" }],
        dropPoints: [{ name: "Trivandrum", time: "2025-11-25T09:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["5A", "5B"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 240
    },
    {
        id: "BUS0110",
        operator: "Himalayan Nomad",
        route: { source: "Shimla", destination: "Delhi", via: ["Chandigarh"] },
        schedule: { departureTime: "2025-11-25T21:00:00", arrivalTime: "2025-11-26T05:00:00", durationMin: 480 },
        fare: 980, seatsAvailable: 19, capacity: 45, busType: " AC Seater",
        amenities: ["WiFi", "Charging Port", "Water Bottle"],
        boardingPoints: [{ name: "Shimla", time: "2025-11-25T21:00:00" }],
        dropPoints: [{ name: "Delhi", time: "2025-11-26T05:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["9C", "9D"], reservedSeats: [] },
        rating: 4.6, reviewsCount: 550
    },
    {
        id: "BUS0111",
        operator: "Orange Tours & Travels",
        route: { source: "Hyderabad", destination: "Bangalore", via: ["Kurnool"] },
        schedule: { departureTime: "2025-10-10T23:00:00", arrivalTime: "2025-10-11T08:30:00", durationMin: 570 },
        fare: 850, seatsAvailable: 18, capacity: 44, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-10T23:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-10-11T08:30:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["6A", "7B"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 360
    },
    {
        id: "BUS0112",
        operator: "Neeta Travels",
        route: { source: "Pune", destination: "Mumbai", via: [] },
        schedule: { departureTime: "2025-11-26T15:00:00", arrivalTime: "2025-11-26T18:30:00", durationMin: 210 },
        fare: 500, seatsAvailable: 24, capacity: 35, busType: "AC Seater",
        amenities: ["Charging Port"],
        boardingPoints: [{ name: "Pune", time: "2025-11-26T15:00:00" }],
        dropPoints: [{ name: "Mumbai", time: "2025-11-26T18:30:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["3D"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 250
    },
    {
        id: "BUS0113",
        operator: "VRL Travels",
        route: { source: "Bangalore", destination: "Hyderabad", via: ["Kurnool"] },
        schedule: { departureTime: "2025-11-26T20:00:00", arrivalTime: "2025-11-27T05:30:00", durationMin: 570 },
        fare: 900, seatsAvailable: 20, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Bangalore", time: "2025-11-26T20:00:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-11-27T05:30:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["4B", "5C"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 275
    },
    {
        id: "BUS0114",
        operator: "SRM Travels",
        route: { source: "Coimbatore", destination: "Chennai", via: ["Salem"] },
        schedule: { departureTime: "2025-11-27T10:00:00", arrivalTime: "2025-11-27T17:00:00", durationMin: 420 },
        fare: 620, seatsAvailable: 22, capacity: 34, busType: "AC Seater",
        amenities: ["Charging Port", "Reading Light"],
        boardingPoints: [{ name: "Coimbatore", time: "2025-11-27T10:00:00" }],
        dropPoints: [{ name: "Chennai", time: "2025-11-27T17:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2D"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 165
    },
    {
        id: "BUS0115",
        operator: "APSRTC",
        route: { source: "Tirupati", destination: "Vijayawada", via: ["Nellore"] },
        schedule: { departureTime: "2025-11-27T22:00:00", arrivalTime: "2025-11-28T05:00:00", durationMin: 420 },
        fare: 480, seatsAvailable: 28, capacity: 50, busType: "Non-AC Seater",
        amenities: ["Water Bottle"],
        boardingPoints: [{ name: "Tirupati", time: "2025-11-27T22:00:00" }],
        dropPoints: [{ name: "Vijayawada", time: "2025-11-28T05:00:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["10B", "11C"], reservedSeats: [] },
        rating: 3.9, reviewsCount: 105
    },
    {
        id: "BUS0116",
        operator: "Kesineni Travels",
        route: { source: "Hyderabad", destination: "Chennai", via: ["Ongole", "Nellore"] },
        schedule: { departureTime: "2025-11-28T21:30:00", arrivalTime: "2025-11-29T08:00:00", durationMin: 630 },
        fare: 1020, seatsAvailable: 16, capacity: 42, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-11-28T21:30:00" }],
        dropPoints: [{ name: "Chennai", time: "2025-11-29T08:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["3D", "4C"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 280
    },
    {
        id: "BUS0117",
        operator: "IntrCity SmartBus",
        route: { source: "Amritsar", destination: "Delhi", via: ["Jalandhar"] },
        schedule: { departureTime: "2025-11-28T23:00:00", arrivalTime: "2025-11-29T06:00:00", durationMin: 420 },
        fare: 920, seatsAvailable: 23, capacity: 42, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Live Tracking"],
        boardingPoints: [{ name: "Amritsar", time: "2025-11-28T23:00:00" }],
        dropPoints: [{ name: "Delhi", time: "2025-11-29T06:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["6A"], reservedSeats: [] },
        rating: 4.8, reviewsCount: 530
    },
    {
        id: "BUS0118",
        operator: "Patel Travels",
        route: { source: "Pune", destination: "Surat", via: ["Nashik"] },
        schedule: { departureTime: "2025-11-29T21:00:00", arrivalTime: "2025-11-30T06:30:00", durationMin: 570 },
        fare: 900, seatsAvailable: 19, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["Charging Port", "WiFi", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Pune", time: "2025-11-29T21:00:00" }],
        dropPoints: [{ name: "Surat", time: "2025-11-30T06:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1B", "2B"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 200
    },
    {
        id: "BUS0119",
        operator: "Morning Star Deluxe",
        route: { source: "Vizianagaram", destination: "Hyderabad", via: ["Rajahmundry"] },
        schedule: { departureTime: "2025-11-29T19:00:00", arrivalTime: "2025-11-30T05:30:00", durationMin: 630 },
        fare: 800, seatsAvailable: 15, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Vizianagaram", time: "2025-11-29T19:00:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-11-30T05:30:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["8C", "8D"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 140
    },
    {
        id: "BUS0120",
        operator: "Jabbar Travels",
        route: { source: "Pune", destination: "Mumbai", via: [] },
        schedule: { departureTime: "2025-11-30T11:00:00", arrivalTime: "2025-11-30T14:30:00", durationMin: 210 },
        fare: 520, seatsAvailable: 28, capacity: 45, busType: "AC Seater",
        amenities: ["Charging Port"],
        boardingPoints: [{ name: "Pune", time: "2025-11-30T11:00:00" }],
        dropPoints: [{ name: "Mumbai", time: "2025-11-30T14:30:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["1A"], reservedSeats: [] },
        rating: 4.1, reviewsCount: 150
    },
    {
        id: "BUS0121",
        operator: "Express Travels",
        route: { source: "Bangalore", destination: "Hyderabad", via: ["Anantapur", "Kurnool"] },
        schedule: { departureTime: "2025-12-01T21:00:00", arrivalTime: "2025-12-02T06:30:00", durationMin: 570 },
        fare: 820, seatsAvailable: 14, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Bangalore", time: "2025-12-01T21:00:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-12-02T06:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["3A", "3B"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 230
    },
    {
        id: "BUS0122",
        operator: "Kallada Travels",
        route: { source: "Ernakulam", destination: "Chennai", via: ["Coimbatore", "Salem"] },
        schedule: { departureTime: "2025-12-01T19:00:00", arrivalTime: "2025-12-02T07:00:00", durationMin: 720 },
        fare: 1200, seatsAvailable: 11, capacity: 36, busType: " Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light"],
        boardingPoints: [{ name: "Ernakulam", time: "2025-12-01T19:00:00" }],
        dropPoints: [{ name: "Chennai", time: "2025-12-02T07:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1C", "1D"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 200
    },
    {
        id: "BUS0123",
        operator: "Royal Cruiser",
        route: { source: "Puri", destination: "Kolkata", via: ["Bhubaneswar"] },
        schedule: { departureTime: "2025-12-02T21:30:00", arrivalTime: "2025-12-03T05:30:00", durationMin: 480 },
        fare: 850, seatsAvailable: 18, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Blanket", "Charging Port"],
        boardingPoints: [{ name: "Puri", time: "2025-12-02T21:30:00" }],
        dropPoints: [{ name: "Kolkata", time: "2025-12-03T05:30:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["2A", "2B"], reservedSeats: [] },
        rating: 4.6, reviewsCount: 340
    },
    {
        id: "BUS0124",
        operator: "Sharma Transports",
        route: { source: "Jaipur", destination: "Delhi", via: ["Gurgaon"] },
        schedule: { departureTime: "2025-12-03T09:00:00", arrivalTime: "2025-12-03T14:00:00", durationMin: 300 },
        fare: 580, seatsAvailable: 28, capacity: 40, busType: "AC Seater",
        amenities: ["Charging Port", "Water Bottle"],
        boardingPoints: [{ name: "Jaipur", time: "2025-12-03T09:00:00" }],
        dropPoints: [{ name: "Delhi", time: "2025-12-03T14:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["5C", "6D"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 195
    },
    {
        id: "BUS0125",
        operator: "National Travels",
        route: { source: "Bangalore", destination: "Pune", via: ["Hubli", "Kolhapur"] },
        schedule: { departureTime: "2025-12-03T19:30:00", arrivalTime: "2025-12-04T09:30:00", durationMin: 840 },
        fare: 1350, seatsAvailable: 16, capacity: 44, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Bangalore", time: "2025-12-03T19:30:00" }],
        dropPoints: [{ name: "Pune", time: "2025-12-04T09:30:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["8A", "9B"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 295
    },
    {
        id: "BUS0126",
        operator: "GSRTC",
        route: { source: "Udaipur", destination: "Ahmedabad", via: [] },
        schedule: { departureTime: "2025-12-04T22:00:00", arrivalTime: "2025-12-05T03:00:00", durationMin: 300 },
        fare: 470, seatsAvailable: 32, capacity: 50, busType: "Non-AC Seater",
        amenities: [],
        boardingPoints: [{ name: "Udaipur", time: "2025-12-04T22:00:00" }],
        dropPoints: [{ name: "Ahmedabad", time: "2025-12-05T03:00:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["2A", "3B", "4C"], reservedSeats: [] },
        rating: 3.8, reviewsCount: 125
    },
    {
        id: "BUS0127",
        operator: "VRL Travels",
        route: { source: "Nagpur", destination: "Hyderabad", via: ["Adilabad"] },
        schedule: { departureTime: "2025-12-05T21:00:00", arrivalTime: "2025-12-06T06:00:00", durationMin: 540 },
        fare: 920, seatsAvailable: 13, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Nagpur", time: "2025-12-05T21:00:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-12-06T06:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["7D", "8A"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 215
    },
    {
        id: "BUS0128",
        operator: "IntrCity SmartBus",
        route: { source: "Delhi", destination: "Lucknow", via: ["Agra"] },
        schedule: { departureTime: "2025-12-05T23:30:00", arrivalTime: "2025-12-06T06:30:00", durationMin: 420 },
        fare: 880, seatsAvailable: 24, capacity: 42, busType: "AC Seater",
        amenities: ["Charging Port", "Water Bottle", "Reading Light", "Live Tracking"],
        boardingPoints: [{ name: "Delhi", time: "2025-12-05T23:30:00" }],
        dropPoints: [{ name: "Lucknow", time: "2025-12-06T06:30:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["11A", "11B"], reservedSeats: [] },
        rating: 4.7, reviewsCount: 480
    },
    {
        id: "BUS0129",
        operator: "RedBus Express",
        route: { source: "Ahmedabad", destination: "Jaipur", via: ["Udaipur"] },
        schedule: { departureTime: "2025-12-06T22:00:00", arrivalTime: "2025-12-07T09:00:00", durationMin: 660 },
        fare: 930, seatsAvailable: 18, capacity: 38, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Ahmedabad", time: "2025-12-06T22:00:00" }],
        dropPoints: [{ name: "Jaipur", time: "2025-12-07T09:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["5A", "6B"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 265
    },
    {
        id: "BUS0130",
        operator: " Express",
        route: { source: "Chandigarh", destination: "Manali", via: ["Mandi"] },
        schedule: { departureTime: "2025-12-07T21:00:00", arrivalTime: "2025-12-08T05:00:00", durationMin: 480 },
        fare: 1100, seatsAvailable: 21, capacity: 45, busType: " AC Seater",
        amenities: ["WiFi", "Charging Port", "Water Bottle", "Reading Light"],
        boardingPoints: [{ name: "Chandigarh", time: "2025-12-07T21:00:00" }],
        dropPoints: [{ name: "Manali", time: "2025-12-08T05:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["2B", "3C", "4D"], reservedSeats: [] },
        rating: 4.8, reviewsCount: 620
    },
    {
        id: "BUS0131",
        operator: "Morning Star Travels",
        route: { source: "Hyderabad", destination: "Bangalore", via: ["Kurnool", "Anantapur"] },
        schedule: { departureTime: "2025-12-08T20:30:00", arrivalTime: "2025-12-09T06:00:00", durationMin: 570 },
        fare: 780, seatsAvailable: 16, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-12-08T20:30:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-12-09T06:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["4A", "5B"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 240
    },
    {
        id: "BUS0132",
        operator: "Jabbar Travels",
        route: { source: "Hyderabad", destination: "Pune", via: ["Solapur"] },
        schedule: { departureTime: "2025-12-08T19:30:00", arrivalTime: "2025-12-09T07:30:00", durationMin: 720 },
        fare: 980, seatsAvailable: 19, capacity: 45, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-12-08T19:30:00" }],
        dropPoints: [{ name: "Pune", time: "2025-12-09T07:30:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2D"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 370
    },
    {
        id: "BUS0133",
        operator: "VRL Travels",
        route: { source: "Bangalore", destination: "Goa", via: ["Hubli"] },
        schedule: { departureTime: "2025-12-09T22:00:00", arrivalTime: "2025-12-10T07:00:00", durationMin: 540 },
        fare: 1150, seatsAvailable: 11, capacity: 30, busType: " AC Seater",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light"],
        boardingPoints: [{ name: "Bangalore", time: "2025-12-09T22:00:00" }],
        dropPoints: [{ name: "Goa", time: "2025-12-10T07:00:00" }],
        seatLayout: { rows: 8, columns: 4, layoutType: "2+2", bookedSeats: ["5A"], reservedSeats: [] },
        rating: 4.7, reviewsCount: 440
    },
    {
        id: "BUS0134",
        operator: "GreenLine Travels",
        route: { source: "Chennai", destination: "Bangalore", via: ["Vellore"] },
        schedule: { departureTime: "2025-12-10T23:30:00", arrivalTime: "2025-12-11T04:00:00", durationMin: 270 },
        fare: 680, seatsAvailable: 17, capacity: 24, busType: "Non-AC Sleeper",
        amenities: ["Blanket", "Charging Port", "WiFi"],
        boardingPoints: [{ name: "Chennai", time: "2025-12-10T23:30:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-12-11T04:00:00" }],
        seatLayout: { rows: 6, columns: 4, layoutType: "2+2", bookedSeats: ["3B"], reservedSeats: [] },
        rating: 4.0, reviewsCount: 80
    },
    {
        id: "BUS0135",
        operator: "SRS Travels",
        route: { source: "Bangalore", destination: "Hyderabad", via: ["Anantapur"] },
        schedule: { departureTime: "2025-12-11T21:30:00", arrivalTime: "2025-12-12T07:00:00", durationMin: 570 },
        fare: 910, seatsAvailable: 21, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Water Bottle", "Blanket"],
        boardingPoints: [{ name: "Bangalore", time: "2025-12-11T21:30:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-12-12T07:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["6C", "7A"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 200
    },
    {
        id: "BUS0136",
        operator: "Patel Travels",
        route: { source: "Mumbai", destination: "Goa", via: ["Ratnagiri"] },
        schedule: { departureTime: "2025-12-12T20:00:00", arrivalTime: "2025-12-13T06:00:00", durationMin: 600 },
        fare: 980, seatsAvailable: 13, capacity: 40, busType: " Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Mumbai", time: "2025-12-12T20:00:00" }],
        dropPoints: [{ name: "Goa", time: "2025-12-13T06:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C"], reservedSeats: [] },
        rating: 4.6, reviewsCount: 420
    },
    {
        id: "BUS0137",
        operator: "Neeta Travels",
        route: { source: "Goa", destination: "Mumbai", via: ["Ratnagiri"] },
        schedule: { departureTime: "2025-12-13T19:30:00", arrivalTime: "2025-12-14T05:30:00", durationMin: 600 },
        fare: 990, seatsAvailable: 15, capacity: 40, busType: " Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light"],
        boardingPoints: [{ name: "Goa", time: "2025-12-13T19:30:00" }],
        dropPoints: [{ name: "Mumbai", time: "2025-12-14T05:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["4D", "5A"], reservedSeats: [] },
        rating: 4.7, reviewsCount: 430
    },
    {
        id: "BUS0138",
        operator: "KSRTC",
        route: { source: "Mysore", destination: "Bangalore", via: [] },
        schedule: { departureTime: "2025-12-14T11:00:00", arrivalTime: "2025-12-14T14:00:00", durationMin: 180 },
        fare: 320, seatsAvailable: 38, capacity: 48, busType: "Non-AC Seater",
        amenities: ["Reading Light"],
        boardingPoints: [{ name: "Mysore", time: "2025-12-14T11:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-12-14T14:00:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["8B", "8C"], reservedSeats: [] },
        rating: 4.1, reviewsCount: 160
    },
    {
        id: "BUS0139",
        operator: "APSRTC",
        route: { source: "Hyderabad", destination: "Vijayawada", via: ["Nalgonda"] },
        schedule: { departureTime: "2025-12-14T15:00:00", arrivalTime: "2025-12-14T19:30:00", durationMin: 270 },
        fare: 500, seatsAvailable: 29, capacity: 50, busType: "Non-AC Seater",
        amenities: ["Water Bottle"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-12-14T15:00:00" }],
        dropPoints: [{ name: "Vijayawada", time: "2025-12-14T19:30:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["3A"], reservedSeats: [] },
        rating: 3.9, reviewsCount: 130
    },
    {
        id: "BUS0140",
        operator: "Zingbus",
        route: { source: "Delhi", destination: "Jaipur", via: [] },
        schedule: { departureTime: "2025-12-15T07:00:00", arrivalTime: "2025-12-15T12:00:00", durationMin: 300 },
        fare: 580, seatsAvailable: 27, capacity: 42, busType: "AC Seater",
        amenities: ["Charging Port", "Water Bottle", "Live Tracking"],
        boardingPoints: [{ name: "Delhi", time: "2025-12-15T07:00:00" }],
        dropPoints: [{ name: "Jaipur", time: "2025-12-15T12:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C"], reservedSeats: [] },
        rating: 4.8, reviewsCount: 550
    },
    {
        id: "BUS0141",
        operator: "IntrCity SmartBus",
        route: { source: "Pune", destination: "Hyderabad", via: ["Solapur"] },
        schedule: { departureTime: "2025-12-15T20:00:00", arrivalTime: "2025-12-16T07:00:00", durationMin: 660 },
        fare: 1050, seatsAvailable: 22, capacity: 42, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Live Tracking"],
        boardingPoints: [{ name: "Pune", time: "2025-12-15T20:00:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-12-16T07:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["4A", "5B", "6C"], reservedSeats: [] },
        rating: 4.7, reviewsCount: 490
    },
    {
        id: "BUS0142",
        operator: "VRL Travels",
        route: { source: "Bangalore", destination: "Mumbai", via: ["Pune"] },
        schedule: { departureTime: "2025-12-16T17:00:00", arrivalTime: "2025-12-17T09:00:00", durationMin: 960 },
        fare: 1600, seatsAvailable: 13, capacity: 36, busType: " Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Bangalore", time: "2025-12-16T17:00:00" }],
        dropPoints: [{ name: "Mumbai", time: "2025-12-17T09:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1D", "2C"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 310
    },
    {
        id: "BUS0143",
        operator: "Sri Krishna Travels",
        route: { source: "Chennai", destination: "Hyderabad", via: ["Nellore"] },
        schedule: { departureTime: "2025-12-16T20:00:00", arrivalTime: "2025-12-17T06:30:00", durationMin: 630 },
        fare: 800, seatsAvailable: 23, capacity: 40, busType: "AC Seater",
        amenities: ["Charging Port", "Water Bottle"],
        boardingPoints: [{ name: "Chennai", time: "2025-12-16T20:00:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-12-17T06:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["7D"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 160
    },
    {
        id: "BUS0144",
        operator: "GreenLine Travels",
        route: { source: "Ahmedabad", destination: "Pune", via: ["Surat", "Mumbai"] },
        schedule: { departureTime: "2025-12-17T19:00:00", arrivalTime: "2025-12-18T07:00:00", durationMin: 720 },
        fare: 1100, seatsAvailable: 19, capacity: 38, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Ahmedabad", time: "2025-12-17T19:00:00" }],
        dropPoints: [{ name: "Pune", time: "2025-12-18T07:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["3A"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 240
    },
    {
        id: "BUS0145",
        operator: "Royal Cruiser",
        route: { source: "Kolkata", destination: "Bhubaneswar", via: [] },
        schedule: { departureTime: "2025-12-18T22:30:00", arrivalTime: "2025-12-19T05:30:00", durationMin: 420 },
        fare: 750, seatsAvailable: 21, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Blanket", "Charging Port"],
        boardingPoints: [{ name: "Kolkata", time: "2025-12-18T22:30:00" }],
        dropPoints: [{ name: "Bhubaneswar", time: "2025-12-19T05:30:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["4B", "4C"], reservedSeats: [] },
        rating: 4.6, reviewsCount: 330
    },
    {
        id: "BUS0146",
        operator: "Rajesh Travels",
        route: { source: "Tirupati", destination: "Hyderabad", via: ["Kurnool"] },
        schedule: { departureTime: "2025-12-18T21:30:00", arrivalTime: "2025-12-19T06:30:00", durationMin: 540 },
        fare: 750, seatsAvailable: 23, capacity: 35, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Water Bottle", "Charging Port"],
        boardingPoints: [{ name: "Tirupati", time: "2025-12-18T21:30:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-12-19T06:30:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 130
    },
    {
        id: "BUS0147",
        operator: "Orange Tours & Travels",
        route: { source: "Mumbai", destination: "Hyderabad", via: ["Pune"] },
        schedule: { departureTime: "2025-12-19T18:00:00", arrivalTime: "2025-12-20T08:00:00", durationMin: 840 },
        fare: 1280, seatsAvailable: 17, capacity: 44, busType: " Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light"],
        boardingPoints: [{ name: "Mumbai", time: "2025-12-19T18:00:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-12-20T08:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["9A", "9B"], reservedSeats: [] },
        rating: 4.7, reviewsCount: 450
    },
    {
        id: "BUS0148",
        operator: "KPN Travels",
        route: { source: "Chennai", destination: "Madurai", via: [] },
        schedule: { departureTime: "2025-12-20T22:00:00", arrivalTime: "2025-12-21T04:30:00", durationMin: 390 },
        fare: 600, seatsAvailable: 26, capacity: 40, busType: "AC Seater",
        amenities: ["Charging Port", "Reading Light"],
        boardingPoints: [{ name: "Chennai", time: "2025-12-20T22:00:00" }],
        dropPoints: [{ name: "Madurai", time: "2025-12-21T04:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["3D"], reservedSeats: [] },
        rating: 4.1, reviewsCount: 165
    },
    {
        id: "BUS0149",
        operator: "Saini Travels",
        route: { source: "Delhi", destination: "Jodhpur", via: ["Jaipur"] },
        schedule: { departureTime: "2025-12-20T20:00:00", arrivalTime: "2025-12-21T07:00:00", durationMin: 660 },
        fare: 850, seatsAvailable: 22, capacity: 40, busType: "AC Seater",
        amenities: ["Charging Port", "Reading Light"],
        boardingPoints: [{ name: "Delhi", time: "2025-12-20T20:00:00" }],
        dropPoints: [{ name: "Jodhpur", time: "2025-12-21T07:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["6B"], reservedSeats: [] },
        rating: 4.0, reviewsCount: 140
    },
    {
        id: "BUS0150",
        operator: "Neeta Travels",
        route: { source: "Goa", destination: "Pune", via: ["Kolhapur"] },
        schedule: { departureTime: "2025-12-21T21:00:00", arrivalTime: "2025-12-22T07:00:00", durationMin: 600 },
        fare: 1080, seatsAvailable: 15, capacity: 40, busType: " Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light"],
        boardingPoints: [{ name: "Goa", time: "2025-12-21T21:00:00" }],
        dropPoints: [{ name: "Pune", time: "2025-12-22T07:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["2A", "2B"], reservedSeats: [] },
        rating: 4.6, reviewsCount: 410
    },
    {
        id: "BUS0151",
        operator: "Jabbar Travels",
        route: { source: "Bangalore", destination: "Hyderabad", via: ["Kurnool"] },
        schedule: { departureTime: "2025-12-22T21:30:00", arrivalTime: "2025-12-23T07:00:00", durationMin: 570 },
        fare: 900, seatsAvailable: 23, capacity: 45, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Bangalore", time: "2025-12-22T21:30:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-12-23T07:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "3C"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 300
    },
    {
        id: "BUS0152",
        operator: "SRS Travels",
        route: { source: "Goa", destination: "Bangalore", via: ["Hubli"] },
        schedule: { departureTime: "2025-12-22T20:00:00", arrivalTime: "2025-12-23T06:00:00", durationMin: 600 },
        fare: 1120, seatsAvailable: 17, capacity: 36, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Goa", time: "2025-12-22T20:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-12-23T06:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["5A"], reservedSeats: [] },
        rating: 4.6, reviewsCount: 340
    },
    {
        id: "BUS0153",
        operator: "VRL Travels",
        route: { source: "Hyderabad", destination: "Vijayawada", via: [] },
        schedule: { departureTime: "2025-12-23T09:00:00", arrivalTime: "2025-12-23T14:00:00", durationMin: 300 },
        fare: 600, seatsAvailable: 25, capacity: 40, busType: "AC Seater",
        amenities: ["Charging Port", "Reading Light"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-12-23T09:00:00" }],
        dropPoints: [{ name: "Vijayawada", time: "2025-12-23T14:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["2D", "3A"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 200
    },
    {
        id: "BUS0154",
        operator: "KSRTC",
        route: { source: "Bangalore", destination: "Mangalore", via: ["Hassan"] },
        schedule: { departureTime: "2025-12-23T22:30:00", arrivalTime: "2025-12-24T05:30:00", durationMin: 420 },
        fare: 700, seatsAvailable: 30, capacity: 48, busType: "Non-AC Sleeper",
        amenities: ["Blanket"],
        boardingPoints: [{ name: "Bangalore", time: "2025-12-23T22:30:00" }],
        dropPoints: [{ name: "Mangalore", time: "2025-12-24T05:30:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["9A", "9B"], reservedSeats: [] },
        rating: 4.0, reviewsCount: 180
    },
    {
        id: "BUS0155",
        operator: "GreenLine Travels",
        route: { source: "Pune", destination: "Goa", via: ["Kolhapur"] },
        schedule: { departureTime: "2025-12-24T22:00:00", arrivalTime: "2025-12-25T08:00:00", durationMin: 600 },
        fare: 1080, seatsAvailable: 16, capacity: 38, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Pune", time: "2025-12-24T22:00:00" }],
        dropPoints: [{ name: "Goa", time: "2025-12-25T08:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 280
    },
    {
        id: "BUS0156",
        operator: "Kaveri Travels",
        route: { source: "Hyderabad", destination: "Pune", via: ["Solapur"] },
        schedule: { departureTime: "2025-12-25T20:00:00", arrivalTime: "2025-12-26T08:00:00", durationMin: 720 },
        fare: 980, seatsAvailable: 22, capacity: 40, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-12-25T20:00:00" }],
        dropPoints: [{ name: "Pune", time: "2025-12-26T08:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["5D"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 220
    },
    {
        id: "BUS0157",
        operator: "Parveen Travels",
        route: { source: "Chennai", destination: "Kochi", via: ["Coimbatore"] },
        schedule: { departureTime: "2025-12-25T21:00:00", arrivalTime: "2025-12-26T08:00:00", durationMin: 660 },
        fare: 1150, seatsAvailable: 18, capacity: 36, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Chennai", time: "2025-12-25T21:00:00" }],
        dropPoints: [{ name: "Kochi", time: "2025-12-26T08:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["2A", "2B"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 190
    },
    {
        id: "BUS0158",
        operator: "TSRTC",
        route: { source: "Hyderabad", destination: "Adilabad", via: ["Nirmal"] },
        schedule: { departureTime: "2025-12-26T10:00:00", arrivalTime: "2025-12-26T16:00:00", durationMin: 360 },
        fare: 450, seatsAvailable: 30, capacity: 45, busType: "Non-AC Seater",
        amenities: [],
        boardingPoints: [{ name: "Hyderabad", time: "2025-12-26T10:00:00" }],
        dropPoints: [{ name: "Adilabad", time: "2025-12-26T16:00:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["7A"], reservedSeats: [] },
        rating: 3.8, reviewsCount: 110
    },
    {
        id: "BUS0159",
        operator: "Zingbus",
        route: { source: "Lucknow", destination: "Varanasi", via: ["Prayagraj"] },
        schedule: { departureTime: "2025-12-26T23:00:00", arrivalTime: "2025-12-27T05:00:00", durationMin: 360 },
        fare: 700, seatsAvailable: 25, capacity: 42, busType: "Non-AC Seater",
        amenities: ["Charging Port", "Water Bottle", "Live Tracking"],
        boardingPoints: [{ name: "Lucknow", time: "2025-12-26T23:00:00" }],
        dropPoints: [{ name: "Varanasi", time: "2025-12-27T05:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["3D"], reservedSeats: [] },
        rating: 4.6, reviewsCount: 440
    },
    {
        id: "BUS0160",
        operator: "IntrCity SmartBus",
        route: { source: "Mumbai", destination: "Bangalore", via: ["Pune", "Hubli"] },
        schedule: { departureTime: "2025-12-27T16:30:00", arrivalTime: "2025-12-28T10:30:00", durationMin: 1080 },
        fare: 1650, seatsAvailable: 14, capacity: 38, busType: " AC Seater",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light", "Live Tracking"],
        boardingPoints: [{ name: "Mumbai", time: "2025-12-27T16:30:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-12-28T10:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C"], reservedSeats: [] },
        rating: 4.9, reviewsCount: 600
    },
    {
        id: "BUS0161",
        operator: "Sharma Transports",
        route: { source: "Jaipur", destination: "Udaipur", via: ["Ajmer"] },
        schedule: { departureTime: "2025-12-28T07:00:00", arrivalTime: "2025-12-28T14:00:00", durationMin: 420 },
        fare: 650, seatsAvailable: 28, capacity: 40, busType: "Non-AC Seater",
        amenities: ["Charging Port", "Water Bottle"],
        boardingPoints: [{ name: "Jaipur", time: "2025-12-28T07:00:00" }],
        dropPoints: [{ name: "Udaipur", time: "2025-12-28T14:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["2A", "3C"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 200
    },
    {
        id: "BUS0162",
        operator: "Royal Cruiser",
        route: { source: "Siliguri", destination: "Kolkata", via: ["Malda"] },
        schedule: { departureTime: "2025-12-28T20:00:00", arrivalTime: "2025-12-29T08:00:00", durationMin: 720 },
        fare: 1250, seatsAvailable: 16, capacity: 36, busType: "AC Sleeper",
        amenities: ["WiFi", "Blanket", "Charging Port"],
        boardingPoints: [{ name: "Siliguri", time: "2025-12-28T20:00:00" }],
        dropPoints: [{ name: "Kolkata", time: "2025-12-29T08:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["4D", "5A"], reservedSeats: [] },
        rating: 4.6, reviewsCount: 350
    },
    {
        id: "BUS0163",
        operator: "Seabird Tourists",
        route: { source: "Mumbai", destination: "Goa", via: ["Panjim"] },
        schedule: { departureTime: "2025-12-29T21:00:00", arrivalTime: "2025-12-30T09:00:00", durationMin: 720 },
        fare: 1200, seatsAvailable: 10, capacity: 30, busType: " AC Seater",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light", "Water Bottle"],
        boardingPoints: [{ name: "Mumbai", time: "2025-12-29T21:00:00" }],
        dropPoints: [{ name: "Goa", time: "2025-12-30T09:00:00" }],
        seatLayout: { rows: 8, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B"], reservedSeats: [] },
        rating: 4.8, reviewsCount: 480
    },
    {
        id: "BUS0164",
        operator: "National Travels",
        route: { source: "Bangalore", destination: "Pune", via: ["Kolhapur"] },
        schedule: { departureTime: "2025-12-29T18:00:00", arrivalTime: "2025-12-30T08:00:00", durationMin: 840 },
        fare: 1380, seatsAvailable: 17, capacity: 44, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Bangalore", time: "2025-12-29T18:00:00" }],
        dropPoints: [{ name: "Pune", time: "2025-12-30T08:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["7C", "8D"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 290
    },
    {
        id: "BUS0165",
        operator: "GSRTC",
        route: { source: "Ahmedabad", destination: "Surat", via: [] },
        schedule: { departureTime: "2025-12-30T10:00:00", arrivalTime: "2025-12-30T15:00:00", durationMin: 300 },
        fare: 400, seatsAvailable: 35, capacity: 50, busType: "Non-AC Seater",
        amenities: [],
        boardingPoints: [{ name: "Ahmedabad", time: "2025-12-30T10:00:00" }],
        dropPoints: [{ name: "Surat", time: "2025-12-30T15:00:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["10A", "11B", "12C"], reservedSeats: [] },
        rating: 3.7, reviewsCount: 130
    },
    {
        id: "BUS0166",
        operator: "Orange Tours & Travels",
        route: { source: "Pune", destination: "Bangalore", via: ["Kolhapur", "Hubli"] },
        schedule: { departureTime: "2025-12-30T19:00:00", arrivalTime: "2025-12-31T09:00:00", durationMin: 840 },
        fare: 1400, seatsAvailable: 21, capacity: 44, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light", "Water Bottle"],
        boardingPoints: [{ name: "Pune", time: "2025-12-30T19:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-12-31T09:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["2A", "3B"], reservedSeats: [] },
        rating: 4.7, reviewsCount: 400
    },
    {
        id: "BUS0167",
        operator: "KSRTC",
        route: { source: "Mangalore", destination: "Bangalore", via: [] },
        schedule: { departureTime: "2025-12-31T21:00:00", arrivalTime: "2026-01-01T04:00:00", durationMin: 420 },
        fare: 720, seatsAvailable: 32, capacity: 48, busType: "Non-AC Sleeper",
        amenities: ["Blanket"],
        boardingPoints: [{ name: "Mangalore", time: "2025-12-31T21:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2026-01-01T04:00:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B"], reservedSeats: [] },
        rating: 4.1, reviewsCount: 170
    },
    {
        id: "BUS0168",
        operator: "Express Travels",
        route: { source: "Tirupati", destination: "Chennai", via: [] },
        schedule: { departureTime: "2026-01-01T06:00:00", arrivalTime: "2026-01-01T09:30:00", durationMin: 210 },
        fare: 420, seatsAvailable: 20, capacity: 32, busType: "Non-AC Seater",
        amenities: ["Charging Port", "Water Bottle"],
        boardingPoints: [{ name: "Tirupati", time: "2026-01-01T06:00:00" }],
        dropPoints: [{ name: "Chennai", time: "2026-01-01T09:30:00" }],
        seatLayout: { rows: 8, columns: 4, layoutType: "2+2", bookedSeats: ["4A"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 110
    },
    {
        id: "BUS0169",
        operator: "GreenLine Travels",
        route: { source: "Ahmedabad", destination: "Mumbai", via: ["Surat"] },
        schedule: { departureTime: "2026-01-01T22:00:00", arrivalTime: "2026-01-02T07:00:00", durationMin: 540 },
        fare: 880, seatsAvailable: 16, capacity: 38, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light"],
        boardingPoints: [{ name: "Ahmedabad", time: "2026-01-01T22:00:00" }],
        dropPoints: [{ name: "Mumbai", time: "2026-01-02T07:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["7D"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 290
    },
    {
        id: "BUS0170",
        operator: "Prasanna Purple",
        route: { source: "Goa", destination: "Pune", via: ["Kolhapur"] },
        schedule: { departureTime: "2026-01-02T21:00:00", arrivalTime: "2026-01-03T07:00:00", durationMin: 600 },
        fare: 1100, seatsAvailable: 19, capacity: 40, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Goa", time: "2026-01-02T21:00:00" }],
        dropPoints: [{ name: "Pune", time: "2026-01-03T07:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["3C", "4D"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 350
    },
    {
        id: "BUS0171",
        operator: "Zingbus",
        route: { source: "Manali", destination: "Chandigarh", via: [] },
        schedule: { departureTime: "2026-01-02T20:00:00", arrivalTime: "2026-01-03T04:00:00", durationMin: 480 },
        fare: 950, seatsAvailable: 14, capacity: 34, busType: " AC Seater",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle", "Reading Light"],
        boardingPoints: [{ name: "Manali", time: "2026-01-02T20:00:00" }],
        dropPoints: [{ name: "Chandigarh", time: "2026-01-03T04:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["5A", "5B"], reservedSeats: [] },
        rating: 4.8, reviewsCount: 580
    },
    {
        id: "BUS0172",
        operator: "SRS Travels",
        route: { source: "Goa", destination: "Hyderabad", via: ["Belgaum"] },
        schedule: { departureTime: "2026-01-03T18:30:00", arrivalTime: "2026-01-04T08:30:00", durationMin: 840 },
        fare: 1300, seatsAvailable: 17, capacity: 36, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Goa", time: "2026-01-03T18:30:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2026-01-04T08:30:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["6C", "7D"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 260
    },
    {
        id: "BUS0173",
        operator: "Parveen Travels",
        route: { source: "Bangalore", destination: "Tirunelveli", via: ["Madurai"] },
        schedule: { departureTime: "2026-01-03T21:00:00", arrivalTime: "2026-01-04T06:00:00", durationMin: 540 },
        fare: 900, seatsAvailable: 20, capacity: 40, busType: "AC Sleeper",
        amenities: ["Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Bangalore", time: "2026-01-03T21:00:00" }],
        dropPoints: [{ name: "Tirunelveli", time: "2026-01-04T06:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["2D", "3A"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 200
    },
    {
        id: "BUS0174",
        operator: "Morning Star Travels",
        route: { source: "Hyderabad", destination: "Visakhapatnam", via: ["Vijayawada"] },
        schedule: { departureTime: "2026-01-04T21:00:00", arrivalTime: "2026-01-05T07:30:00", durationMin: 630 },
        fare: 1000, seatsAvailable: 15, capacity: 36, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Hyderabad", time: "2026-01-04T21:00:00" }],
        dropPoints: [{ name: "Visakhapatnam", time: "2026-01-05T07:30:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["8A", "8B"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 310
    },
    {
        id: "BUS0175",
        operator: "IntrCity SmartBus",
        route: { source: "Delhi", destination: "Gorakhpur", via: ["Lucknow"] },
        schedule: { departureTime: "2026-01-04T20:00:00", arrivalTime: "2026-01-05T08:00:00", durationMin: 720 },
        fare: 1200, seatsAvailable: 23, capacity: 42, busType: "AC Sleeper",
        amenities: ["Charging Port", "Water Bottle", "Reading Light", "Live Tracking"],
        boardingPoints: [{ name: "Delhi", time: "2026-01-04T20:00:00" }],
        dropPoints: [{ name: "Gorakhpur", time: "2026-01-05T08:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["10B", "11C"], reservedSeats: [] },
        rating: 4.6, reviewsCount: 460
    },
    {
        id: "BUS0176",
        operator: "RedBus Express",
        route: { source: "Jaipur", destination: "Bikaner", via: [] },
        schedule: { departureTime: "2026-01-05T23:00:00", arrivalTime: "2026-01-06T05:00:00", durationMin: 360 },
        fare: 650, seatsAvailable: 20, capacity: 38, busType: "Non-AC Seater",
        amenities: ["WiFi", "Charging Port"],
        boardingPoints: [{ name: "Jaipur", time: "2026-01-05T23:00:00" }],
        dropPoints: [{ name: "Bikaner", time: "2026-01-06T05:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["4A", "4B"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 270
    },
    {
        id: "BUS0177",
        operator: " Express",
        route: { source: "Manali", destination: "Delhi", via: ["Chandigarh"] },
        schedule: { departureTime: "2026-01-06T19:30:00", arrivalTime: "2026-01-07T09:30:00", durationMin: 840 },
        fare: 1500, seatsAvailable: 18, capacity: 45, busType: " AC Seater",
        amenities: ["WiFi", "Charging Port", "Water Bottle", "Reading Light"],
        boardingPoints: [{ name: "Manali", time: "2026-01-06T19:30:00" }],
        dropPoints: [{ name: "Delhi", time: "2026-01-07T09:30:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D"], reservedSeats: [] },
        rating: 4.9, reviewsCount: 700
    },
    {
        id: "BUS0178",
        operator: "Kallada Travels",
        route: { source: "Bangalore", destination: "Kozhikode", via: ["Mysore"] },
        schedule: { departureTime: "2026-01-06T22:00:00", arrivalTime: "2026-01-07T06:00:00", durationMin: 480 },
        fare: 950, seatsAvailable: 16, capacity: 36, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Bangalore", time: "2026-01-06T22:00:00" }],
        dropPoints: [{ name: "Kozhikode", time: "2026-01-07T06:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["7A", "7B"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 210
    },
    {
        id: "BUS0179",
        operator: "Saini Travels",
        route: { source: "Delhi", destination: "Jaipur", via: [] },
        schedule: { departureTime: "2026-01-07T10:00:00", arrivalTime: "2026-01-07T15:00:00", durationMin: 300 },
        fare: 530, seatsAvailable: 26, capacity: 40, busType: "Non-AC Seater",
        amenities: ["Charging Port", "Reading Light"],
        boardingPoints: [{ name: "Delhi", time: "2026-01-07T10:00:00" }],
        dropPoints: [{ name: "Jaipur", time: "2026-01-07T15:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["8C"], reservedSeats: [] },
        rating: 4.1, reviewsCount: 150
    },
    {
        id: "BUS0180",
        operator: "Kaveri Travels",
        route: { source: "Hyderabad", destination: "Mumbai", via: ["Pune"] },
        schedule: { departureTime: "2026-01-07T18:00:00", arrivalTime: "2026-01-08T08:00:00", durationMin: 840 },
        fare: 1320, seatsAvailable: 14, capacity: 45, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Hyderabad", time: "2026-01-07T18:00:00" }],
        dropPoints: [{ name: "Mumbai", time: "2026-01-08T08:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "10C"], reservedSeats: [] },
        rating: 4.6, reviewsCount: 440
    },
    {
        id: "BUS0181",
        operator: "APSRTC",
        route: { source: "Bangalore", destination: "Tirupati", via: ["Chittoor"] },
        schedule: { departureTime: "2026-01-08T13:00:00", arrivalTime: "2026-01-08T18:00:00", durationMin: 300 },
        fare: 400, seatsAvailable: 31, capacity: 50, busType: "Non-AC Seater",
        amenities: [],
        boardingPoints: [{ name: "Bangalore", time: "2026-01-08T13:00:00" }],
        dropPoints: [{ name: "Tirupati", time: "2026-01-08T18:00:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["4A", "5B", "6C"], reservedSeats: [] },
        rating: 3.9, reviewsCount: 125
    },
    {
        id: "BUS0182",
        operator: "Jabbar Travels",
        route: { source: "Mumbai", destination: "Bangalore", via: ["Pune"] },
        schedule: { departureTime: "2026-01-08T17:30:00", arrivalTime: "2026-01-09T11:30:00", durationMin: 1080 },
        fare: 1550, seatsAvailable: 16, capacity: 40, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light", "Live Tracking"],
        boardingPoints: [{ name: "Mumbai", time: "2026-01-08T17:30:00" }],
        dropPoints: [{ name: "Bangalore", time: "2026-01-09T11:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["2D"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 390
    },
    {
        id: "BUS0183",
        operator: "Neeta Travels",
        route: { source: "Shirdi", destination: "Pune", via: ["Ahmednagar"] },
        schedule: { departureTime: "2026-01-09T12:00:00", arrivalTime: "2026-01-09T17:00:00", durationMin: 300 },
        fare: 520, seatsAvailable: 24, capacity: 35, busType: "Non-AC Seater",
        amenities: ["Charging Port", "Reading Light"],
        boardingPoints: [{ name: "Shirdi", time: "2026-01-09T12:00:00" }],
        dropPoints: [{ name: "Pune", time: "2026-01-09T17:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["5A"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 220
    },
    {
        id: "BUS0184",
        operator: "TSRTC",
        route: { source: "Karimnagar", destination: "Hyderabad", via: [] },
        schedule: { departureTime: "2026-01-09T16:00:00", arrivalTime: "2026-01-09T19:30:00", durationMin: 210 },
        fare: 280, seatsAvailable: 32, capacity: 45, busType: "Non-AC Seater",
        amenities: [],
        boardingPoints: [{ name: "Karimnagar", time: "2026-01-09T16:00:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2026-01-09T19:30:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["9B"], reservedSeats: [] },
        rating: 3.8, reviewsCount: 100
    },
    {
        id: "BUS0185",
        operator: "Rajesh Travels",
        route: { source: "Mumbai", destination: "Indore", via: ["Nashik", "Dhule"] },
        schedule: { departureTime: "2026-01-10T20:00:00", arrivalTime: "2026-01-11T07:00:00", durationMin: 660 },
        fare: 980, seatsAvailable: 17, capacity: 36, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Mumbai", time: "2026-01-10T20:00:00" }],
        dropPoints: [{ name: "Indore", time: "2026-01-11T07:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["4A", "4B"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 240
    },
    {
        id: "BUS0186",
        operator: "VRL Travels",
        route: { source: "Vijayawada", destination: "Bangalore", via: ["Nellore", "Tirupati"] },
        schedule: { departureTime: "2026-01-10T21:00:00", arrivalTime: "2026-01-11T08:30:00", durationMin: 690 },
        fare: 1100, seatsAvailable: 20, capacity: 40, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Vijayawada", time: "2026-01-10T21:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2026-01-11T08:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["7C"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 280
    },
    {
        id: "BUS0187",
        operator: "KPN Travels",
        route: { source: "Chennai", destination: "Coimbatore", via: ["Salem"] },
        schedule: { departureTime: "2026-01-11T22:30:00", arrivalTime: "2026-01-12T05:30:00", durationMin: 420 },
        fare: 680, seatsAvailable: 25, capacity: 40, busType: "Non-AC Seater",
        amenities: ["Charging Port", "Reading Light"],
        boardingPoints: [{ name: "Chennai", time: "2026-01-11T22:30:00" }],
        dropPoints: [{ name: "Coimbatore", time: "2026-01-12T05:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2D"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 180
    },
    {
        id: "BUS0188",
        operator: "Paulo Travels",
        route: { source: "Pune", destination: "Goa", via: ["Kolhapur"] },
        schedule: { departureTime: "2026-01-11T21:30:00", arrivalTime: "2026-01-12T07:30:00", durationMin: 600 },
        fare: 1050, seatsAvailable: 13, capacity: 34, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Pune", time: "2026-01-11T21:30:00" }],
        dropPoints: [{ name: "Goa", time: "2026-01-12T07:30:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["8A"], reservedSeats: [] },
        rating: 4.6, reviewsCount: 330
    },
    {
        id: "BUS0189",
        operator: "SRS Travels",
        route: { source: "Bangalore", destination: "Mangalore", via: ["Hassan"] },
        schedule: { departureTime: "2026-01-12T23:00:00", arrivalTime: "2026-01-13T06:00:00", durationMin: 420 },
        fare: 780, seatsAvailable: 20, capacity: 36, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Bangalore", time: "2026-01-12T23:00:00" }],
        dropPoints: [{ name: "Mangalore", time: "2026-01-13T06:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["5C", "5D"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 250
    },
    {
        id: "BUS0190",
        operator: "Orange Tours & Travels",
        route: { source: "Shirdi", destination: "Hyderabad", via: ["Aurangabad"] },
        schedule: { departureTime: "2026-01-12T20:00:00", arrivalTime: "2026-01-13T09:00:00", durationMin: 780 },
        fare: 1150, seatsAvailable: 22, capacity: 44, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Shirdi", time: "2026-01-12T20:00:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2026-01-13T09:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["2A", "9C"], reservedSeats: [] },
        rating: 4.7, reviewsCount: 410
    },
    {
        id: "BUS0191",
        operator: "VRL Travels",
        route: { source: "Bangalore", destination: "Mumbai", via: ["Hubli", "Pune"] },
        schedule: { departureTime: "2026-01-13T18:00:00", arrivalTime: "2026-01-14T12:00:00", durationMin: 1080 },
        fare: 1600, seatsAvailable: 12, capacity: 36, busType: " Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light", "Live Tracking"],
        boardingPoints: [{ name: "Bangalore", time: "2026-01-13T18:00:00" }],
        dropPoints: [{ name: "Mumbai", time: "2026-01-14T12:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["3A", "4B"], reservedSeats: [] },
        rating: 4.8, reviewsCount: 500
    },
    {
        id: "BUS0192",
        operator: "APSRTC",
        route: { source: "Chennai", destination: "Visakhapatnam", via: ["Nellore", "Vijayawada"] },
        schedule: { departureTime: "2026-01-13T19:00:00", arrivalTime: "2026-01-14T09:00:00", durationMin: 840 },
        fare: 980, seatsAvailable: 28, capacity: 50, busType: "Non-AC Seater",
        amenities: ["Water Bottle"],
        boardingPoints: [{ name: "Chennai", time: "2026-01-13T19:00:00" }],
        dropPoints: [{ name: "Visakhapatnam", time: "2026-01-14T09:00:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["4A", "5B", "6C"], reservedSeats: [] },
        rating: 3.9, reviewsCount: 140
    },
    {
        id: "BUS0193",
        operator: "Kesineni Travels",
        route: { source: "Hyderabad", destination: "Bangalore", via: ["Kurnool"] },
        schedule: { departureTime: "2026-01-14T22:00:00", arrivalTime: "2026-01-15T07:30:00", durationMin: 570 },
        fare: 950, seatsAvailable: 20, capacity: 42, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Hyderabad", time: "2026-01-14T22:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2026-01-15T07:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["6D"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 290
    },
    {
        id: "BUS0194",
        operator: "Shatabdi Travels",
        route: { source: "Bhopal", destination: "Delhi", via: ["Gwalior", "Agra"] },
        schedule: { departureTime: "2026-01-14T21:00:00", arrivalTime: "2026-01-15T08:00:00", durationMin: 660 },
        fare: 1050, seatsAvailable: 22, capacity: 40, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Bhopal", time: "2026-01-14T21:00:00" }],
        dropPoints: [{ name: "Delhi", time: "2026-01-15T08:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["2C", "3D"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 210
    },
    {
        id: "BUS0195",
        operator: "YBM Travels",
        route: { source: "Chennai", destination: "Trichy", via: [] },
        schedule: { departureTime: "2026-01-15T15:00:00", arrivalTime: "2026-01-15T21:00:00", durationMin: 360 },
        fare: 530, seatsAvailable: 27, capacity: 40, busType: "Non-AC Seater",
        amenities: ["Charging Port", "Reading Light"],
        boardingPoints: [{ name: "Chennai", time: "2026-01-15T15:00:00" }],
        dropPoints: [{ name: "Trichy", time: "2026-01-15T21:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["9A"], reservedSeats: [] },
        rating: 4.1, reviewsCount: 140
    },
    {
        id: "BUS0196",
        operator: "Sugama Tourists",
        route: { source: "Udupi", destination: "Bangalore", via: ["Mangalore", "Hassan"] },
        schedule: { departureTime: "2026-01-15T21:30:00", arrivalTime: "2026-01-16T05:30:00", durationMin: 480 },
        fare: 820, seatsAvailable: 17, capacity: 36, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Udupi", time: "2026-01-15T21:30:00" }],
        dropPoints: [{ name: "Bangalore", time: "2026-01-16T05:30:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["5A", "5B"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 230
    },
    {
        id: "BUS0197",
        operator: "MSRTC",
        route: { source: "Pune", destination: "Mumbai", via: [] },
        schedule: { departureTime: "2026-01-16T11:30:00", arrivalTime: "2026-01-16T15:00:00", durationMin: 210 },
        fare: 480, seatsAvailable: 33, capacity: 48, busType: "Non-AC Seater",
        amenities: [],
        boardingPoints: [{ name: "Pune", time: "2026-01-16T11:30:00" }],
        dropPoints: [{ name: "Mumbai", time: "2026-01-16T15:00:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["4A", "5C", "6B"], reservedSeats: [] },
        rating: 3.9, reviewsCount: 150
    },
    {
        id: "BUS0198",
        operator: "Hebron Travels",
        route: { source: "Kochi", destination: "Hyderabad", via: ["Coimbatore", "Bangalore"] },
        schedule: { departureTime: "2026-01-16T16:00:00", arrivalTime: "2026-01-17T13:00:00", durationMin: 1260 },
        fare: 1850, seatsAvailable: 12, capacity: 36, busType: " Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light", "Water Bottle", "Live Tracking"],
        boardingPoints: [{ name: "Kochi", time: "2026-01-16T16:00:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2026-01-17T13:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["2A", "2B"], reservedSeats: [] },
        rating: 4.8, reviewsCount: 570
    },
    {
        id: "BUS0199",
        operator: "SVKDT Travels",
        route: { source: "Srisailam", destination: "Hyderabad", via: [] },
        schedule: { departureTime: "2026-01-17T14:00:00", arrivalTime: "2026-01-17T19:00:00", durationMin: 300 },
        fare: 580, seatsAvailable: 24, capacity: 40, busType: "Non-AC Seater",
        amenities: ["Charging Port", "Water Bottle"],
        boardingPoints: [{ name: "Srisailam", time: "2026-01-17T14:00:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2026-01-17T19:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["5D"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 170
    },
    {
        id: "BUS0200",
        operator: "IntrCity SmartBus",
        route: { source: "Goa", destination: "Bangalore", via: ["Hubli"] },
        schedule: { departureTime: "2026-01-17T20:00:00", arrivalTime: "2026-01-18T06:00:00", durationMin: 600 },
        fare: 1250, seatsAvailable: 20, capacity: 38, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light", "Live Tracking"],
        boardingPoints: [{ name: "Goa", time: "2026-01-17T20:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2026-01-18T06:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["4A", "5B"], reservedSeats: [] },
        rating: 4.9, reviewsCount: 610
    },
    {
        id: "BUS0201",
        operator: "VRL Travels",
        route: { source: "Hyderabad", destination: "Bangalore", via: ["Kurnool", "Anantapur"] },
        schedule: { departureTime: "2025-10-12T21:00:00", arrivalTime: "2025-10-13T06:30:00", durationMin: 570 },
        fare: 820, seatsAvailable: 15, capacity: 40, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-12T21:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-10-13T06:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 310
    },
    {
        id: "BUS0202",
        operator: "SRS Travels",
        route: { source: "Mumbai", destination: "Pune", via: [] },
        schedule: { departureTime: "2025-10-12T08:00:00", arrivalTime: "2025-10-12T11:30:00", durationMin: 210 },
        fare: 480, seatsAvailable: 25, capacity: 45, busType: "Non-AC Seater",
        amenities: ["Charging Port", "Reading Light"],
        boardingPoints: [{ name: "Mumbai", time: "2025-10-12T08:00:00" }],
        dropPoints: [{ name: "Pune", time: "2025-10-12T11:30:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["5D", "6A"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 180
    },
    {
        id: "BUS0203",
        operator: "Orange Tours & Travels",
        route: { source: "Bangalore", destination: "Chennai", via: ["Vellore"] },
        schedule: { departureTime: "2025-10-12T23:00:00", arrivalTime: "2025-10-13T05:00:00", durationMin: 360 },
        fare: 680, seatsAvailable: 18, capacity: 36, busType: "AC Sleeper",
        amenities: ["WiFi", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Bangalore", time: "2025-10-12T23:00:00" }],
        dropPoints: [{ name: "Chennai", time: "2025-10-13T05:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["7C", "8A"], reservedSeats: [] },
        rating: 4.6, reviewsCount: 390
    },
    {
        id: "BUS0204",
        operator: "TSRTC",
        route: { source: "Hyderabad", destination: "Vijayawada", via: ["Suryapet"] },
        schedule: { departureTime: "2025-10-13T06:00:00", arrivalTime: "2025-10-13T10:30:00", durationMin: 270 },
        fare: 450, seatsAvailable: 35, capacity: 50, busType: "Non-AC Seater",
        amenities: [],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-13T06:00:00" }],
        dropPoints: [{ name: "Vijayawada", time: "2025-10-13T10:30:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "2C", "3D"], reservedSeats: [] },
        rating: 3.8, reviewsCount: 115
    },
    {
        id: "BUS0205",
        operator: "GreenLine Travels",
        route: { source: "Pune", destination: "Hyderabad", via: ["Solapur"] },
        schedule: { departureTime: "2025-10-13T20:00:00", arrivalTime: "2025-10-14T07:00:00", durationMin: 660 },
        fare: 950, seatsAvailable: 12, capacity: 38, busType: "Non-AC Sleeper",
        amenities: ["Blanket", "Charging Port"],
        boardingPoints: [{ name: "Pune", time: "2025-10-13T20:00:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-10-14T07:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["9D"], reservedSeats: [] },
        rating: 4.0, reviewsCount: 150
    },
    {
        id: "BUS0206",
        operator: "Zingbus",
        route: { source: "Delhi", destination: "Lucknow", via: ["Agra"] },
        schedule: { departureTime: "2025-10-14T22:00:00", arrivalTime: "2025-10-15T05:00:00", durationMin: 420 },
        fare: 800, seatsAvailable: 28, capacity: 42, busType: "Non-AC Seater",
        amenities: ["WiFi", "Charging Port", "Water Bottle", "Live Tracking"],
        boardingPoints: [{ name: "Delhi", time: "2025-10-14T22:00:00" }],
        dropPoints: [{ name: "Lucknow", time: "2025-10-15T05:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["10A", "10B"], reservedSeats: [] },
        rating: 4.8, reviewsCount: 530
    },
    {
        id: "BUS0207",
        operator: "Neeta Travels",
        route: { source: "Goa", destination: "Pune", via: ["Kolhapur"] },
        schedule: { departureTime: "2025-10-14T19:00:00", arrivalTime: "2025-10-15T06:00:00", durationMin: 660 },
        fare: 1100, seatsAvailable: 14, capacity: 40, busType: "AC Sleeper",
        amenities: ["WiFi", "Blanket", "Reading Light"],
        boardingPoints: [{ name: "Goa", time: "2025-10-14T19:00:00" }],
        dropPoints: [{ name: "Pune", time: "2025-10-15T06:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["3A", "3B", "3C"], reservedSeats: [] },
        rating: 4.6, reviewsCount: 380
    },
    {
        id: "BUS0208",
        operator: "VRL Travels",
        route: { source: "Bangalore", destination: "Hyderabad", via: ["Kurnool"] },
        schedule: { departureTime: "2025-10-15T22:00:00", arrivalTime: "2025-10-16T07:30:00", durationMin: 570 },
        fare: 850, seatsAvailable: 20, capacity: 36, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Bangalore", time: "2025-10-15T22:00:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-10-16T07:30:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["5B", "5C"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 290
    },
    {
        id: "BUS0209",
        operator: "IntrCity SmartBus",
        route: { source: "Hyderabad", destination: "Pune", via: ["Solapur"] },
        schedule: { departureTime: "2025-10-15T19:30:00", arrivalTime: "2025-10-16T06:30:00", durationMin: 660 },
        fare: 1000, seatsAvailable: 22, capacity: 42, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Live Tracking"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-15T19:30:00" }],
        dropPoints: [{ name: "Pune", time: "2025-10-16T06:30:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["1C", "2A", "3B"], reservedSeats: [] },
        rating: 4.7, reviewsCount: 480
    },
    {
        id: "BUS0210",
        operator: "Kallada Travels",
        route: { source: "Chennai", destination: "Bangalore", via: ["Vellore"] },
        schedule: { departureTime: "2025-10-16T06:30:00", arrivalTime: "2025-10-16T12:30:00", durationMin: 360 },
        fare: 630, seatsAvailable: 25, capacity: 40, busType: "Non-AC Seater",
        amenities: ["Charging Port"],
        boardingPoints: [{ name: "Chennai", time: "2025-10-16T06:30:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-10-16T12:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["8A", "8B"], reservedSeats: [] },
        rating: 4.1, reviewsCount: 190
    },
    {
        id: "BUS0211",
        operator: "Sharma Transports",
        route: { source: "Jaipur", destination: "Delhi", via: ["Gurgaon"] },
        schedule: { departureTime: "2025-10-16T15:00:00", arrivalTime: "2025-10-16T20:00:00", durationMin: 300 },
        fare: 560, seatsAvailable: 30, capacity: 40, busType: "Non-AC Seater",
        amenities: ["Charging Port", "Water Bottle"],
        boardingPoints: [{ name: "Jaipur", time: "2025-10-16T15:00:00" }],
        dropPoints: [{ name: "Delhi", time: "2025-10-16T20:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["9C"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 210
    },
    {
        id: "BUS0212",
        operator: "Orange Tours & Travels",
        route: { source: "Hyderabad", destination: "Mumbai", via: ["Pune"] },
        schedule: { departureTime: "2025-10-17T18:30:00", arrivalTime: "2025-10-18T09:00:00", durationMin: 870 },
        fare: 1350, seatsAvailable: 16, capacity: 44, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle", "Reading Light"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-17T18:30:00" }],
        dropPoints: [{ name: "Mumbai", time: "2025-10-18T09:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["4A", "5D"], reservedSeats: [] },
        rating: 4.7, reviewsCount: 420
    },
    {
        id: "BUS0213",
        operator: "VRL Travels",
        route: { source: "Goa", destination: "Bangalore", via: ["Hubli"] },
        schedule: { departureTime: "2025-10-17T20:30:00", arrivalTime: "2025-10-18T06:00:00", durationMin: 570 },
        fare: 1180, seatsAvailable: 10, capacity: 36, busType: " Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Goa", time: "2025-10-17T20:30:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-10-18T06:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B"], reservedSeats: [] },
        rating: 4.8, reviewsCount: 490
    },
    {
        id: "BUS0214",
        operator: "SRS Travels",
        route: { source: "Hyderabad", destination: "Chennai", via: ["Nellore"] },
        schedule: { departureTime: "2025-10-18T21:45:00", arrivalTime: "2025-10-19T07:45:00", durationMin: 600 },
        fare: 980, seatsAvailable: 20, capacity: 40, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-18T21:45:00" }],
        dropPoints: [{ name: "Chennai", time: "2025-10-19T07:45:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["6B"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 260
    },
    {
        id: "BUS0215",
        operator: "Morning Star Travels",
        route: { source: "Bangalore", destination: "Vijayawada", via: ["Tirupati"] },
        schedule: { departureTime: "2025-10-18T19:00:00", arrivalTime: "2025-10-19T06:00:00", durationMin: 660 },
        fare: 1050, seatsAvailable: 11, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Bangalore", time: "2025-10-18T19:00:00" }],
        dropPoints: [{ name: "Vijayawada", time: "2025-10-19T06:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["2A", "2B"], reservedSeats: [] },
        rating: 4.1, reviewsCount: 180
    },
    {
        id: "BUS0216",
        operator: "Jabbar Travels",
        route: { source: "Pune", destination: "Bangalore", via: ["Kolhapur", "Hubli"] },
        schedule: { departureTime: "2025-10-19T18:00:00", arrivalTime: "2025-10-20T08:00:00", durationMin: 840 },
        fare: 1400, seatsAvailable: 18, capacity: 45, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light", "Water Bottle"],
        boardingPoints: [{ name: "Pune", time: "2025-10-19T18:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-10-20T08:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["3D", "4A", "5B"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 360
    },
    {
        id: "BUS0217",
        operator: "Express Travels",
        route: { source: "Hyderabad", destination: "Bangalore", via: ["Kurnool"] },
        schedule: { departureTime: "2025-10-19T22:30:00", arrivalTime: "2025-10-20T08:00:00", durationMin: 570 },
        fare: 780, seatsAvailable: 10, capacity: 40, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-19T22:30:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-10-20T08:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["8C", "8D"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 240
    },
    {
        id: "BUS0218",
        operator: "KSRTC",
        route: { source: "Bangalore", destination: "Goa", via: ["Hubli"] },
        schedule: { departureTime: "2025-10-20T21:00:00", arrivalTime: "2025-10-21T07:00:00", durationMin: 600 },
        fare: 1000, seatsAvailable: 25, capacity: 48, busType: "Non-AC Sleeper",
        amenities: ["Blanket"],
        boardingPoints: [{ name: "Bangalore", time: "2025-10-20T21:00:00" }],
        dropPoints: [{ name: "Goa", time: "2025-10-21T07:00:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D"], reservedSeats: [] },
        rating: 4.0, reviewsCount: 220
    },
    {
        id: "BUS0219",
        operator: "GreenLine Travels",
        route: { source: "Mumbai", destination: "Hyderabad", via: ["Pune"] },
        schedule: { departureTime: "2025-10-20T17:00:00", arrivalTime: "2025-10-21T08:00:00", durationMin: 900 },
        fare: 1250, seatsAvailable: 19, capacity: 38, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Mumbai", time: "2025-10-20T17:00:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-10-21T08:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["5A", "6D"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 280
    },
    {
        id: "BUS0220",
        operator: "Zingbus",
        route: { source: "Jaipur", destination: "Ahmedabad", via: ["Udaipur"] },
        schedule: { departureTime: "2025-10-21T21:30:00", arrivalTime: "2025-10-22T08:30:00", durationMin: 660 },
        fare: 920, seatsAvailable: 20, capacity: 42, busType: "Non-AC Seater",
        amenities: ["WiFi", "Charging Port", "Live Tracking"],
        boardingPoints: [{ name: "Jaipur", time: "2025-10-21T21:30:00" }],
        dropPoints: [{ name: "Ahmedabad", time: "2025-10-22T08:30:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["7B", "8C"], reservedSeats: [] },
        rating: 4.8, reviewsCount: 500
    },
    {
        id: "BUS0221",
        operator: "VRL Travels",
        route: { source: "Hyderabad", destination: "Bangalore", via: ["Kurnool", "Anantapur"] },
        schedule: { departureTime: "2025-10-21T20:45:00", arrivalTime: "2025-10-22T06:15:00", durationMin: 570 },
        fare: 830, seatsAvailable: 11, capacity: 40, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-21T20:45:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-10-22T06:15:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 315
    },
    {
        id: "BUS0222",
        operator: "SRS Travels",
        route: { source: "Mumbai", destination: "Pune", via: [] },
        schedule: { departureTime: "2025-10-22T09:00:00", arrivalTime: "2025-10-22T12:30:00", durationMin: 210 },
        fare: 490, seatsAvailable: 22, capacity: 45, busType: "Non-AC Seater",
        amenities: ["Charging Port", "Reading Light"],
        boardingPoints: [{ name: "Mumbai", time: "2025-10-22T09:00:00" }],
        dropPoints: [{ name: "Pune", time: "2025-10-22T12:30:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["5D", "6A"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 185
    },
    {
        id: "BUS0223",
        operator: "Orange Tours & Travels",
        route: { source: "Bangalore", destination: "Chennai", via: ["Vellore"] },
        schedule: { departureTime: "2025-10-22T23:15:00", arrivalTime: "2025-10-23T05:15:00", durationMin: 360 },
        fare: 690, seatsAvailable: 17, capacity: 36, busType: "AC Sleeper",
        amenities: ["WiFi", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Bangalore", time: "2025-10-22T23:15:00" }],
        dropPoints: [{ name: "Chennai", time: "2025-10-23T05:15:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["7C", "8A"], reservedSeats: [] },
        rating: 4.6, reviewsCount: 395
    },
    {
        id: "BUS0224",
        operator: "TSRTC",
        route: { source: "Hyderabad", destination: "Vijayawada", via: ["Suryapet"] },
        schedule: { departureTime: "2025-10-23T07:00:00", arrivalTime: "2025-10-23T11:30:00", durationMin: 270 },
        fare: 460, seatsAvailable: 33, capacity: 50, busType: "Non-AC Seater",
        amenities: [],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-23T07:00:00" }],
        dropPoints: [{ name: "Vijayawada", time: "2025-10-23T11:30:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B"], reservedSeats: [] },
        rating: 3.8, reviewsCount: 120
    },
    {
        id: "BUS0225",
        operator: "GreenLine Travels",
        route: { source: "Pune", destination: "Hyderabad", via: ["Solapur"] },
        schedule: { departureTime: "2025-10-23T21:00:00", arrivalTime: "2025-10-24T08:00:00", durationMin: 660 },
        fare: 960, seatsAvailable: 15, capacity: 38, busType: "Non-AC Sleeper",
        amenities: ["Blanket", "Charging Port"],
        boardingPoints: [{ name: "Pune", time: "2025-10-23T21:00:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-10-24T08:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["10A"], reservedSeats: [] },
        rating: 4.0, reviewsCount: 155
    },
    {
        id: "BUS00226",
        operator: "Greenline Tours",
        route: { source: "Hyderabad", destination: "Mumbai", via: ["Solapur", "Pune"] },
        schedule: { departureTime: "2025-10-12T21:00:00", arrivalTime: "2025-10-13T09:00:00", durationMin: 720 },
        fare: 1450, seatsAvailable: 5, capacity: 36, busType: "Non-AC Seater",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle", "Live Tracking"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-12T21:00:00" }],
        dropPoints: [{ name: "Mumbai", time: "2025-10-13T09:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A", "9B", "1C", "2D", "3A", "4B", "5C", "6D", "7A", "8B", "9C", "1D", "2A", "3B", "4C"], reservedSeats: ["L1", "L2"] },
        rating: 4.7, reviewsCount: 345
    },
    {
        id: "BUS00227",
        operator: "Sunrise Coaches",
        route: { source: "Hyderabad", destination: "Chennai", via: ["Vijayawada", "Nellore"] },
        schedule: { departureTime: "2025-10-12T19:30:00", arrivalTime: "2025-10-13T06:30:00", durationMin: 660 },
        fare: 1100, seatsAvailable: 22, capacity: 40, busType: "Non-AC Seater",
        amenities: ["Charging Port", "Blanket", "Reading Light", "CCTV"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-12T19:30:00" }],
        dropPoints: [{ name: "Chennai", time: "2025-10-13T06:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["2A", "3B", "5D", "1C", "8A", "9D", "4B", "6C", "7A", "1D", "10B", "10C", "3A", "4D", "5A", "6B", "7D", "8C"], reservedSeats: [] },
        rating: 3.9, reviewsCount: 180
    },
    {
        id: "BUS00228",
        operator: "Deccan Express",
        route: { source: "Bangalore", destination: "Chennai", via: ["Vellore", "Kanchipuram"] },
        schedule: { departureTime: "2025-10-13T22:00:00", arrivalTime: "2025-10-14T05:00:00", durationMin: 420 },
        fare: 600, seatsAvailable: 3, capacity: 44, busType: "Non-AC Seater",
        amenities: ["Charging Port", "Reading Light", "Water Bottle"],
        boardingPoints: [{ name: "Bangalore", time: "2025-10-13T22:00:00" }],
        dropPoints: [{ name: "Chennai", time: "2025-10-14T05:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B", "3C", "3D", "4A", "4B", "4C", "4D", "5A", "5B", "5C", "5D", "6A", "6B", "6C", "6D", "7A", "7B", "7C", "7D", "8A", "8B", "8C", "8D", "9A", "9B", "9C", "9D", "10A", "10B", "10C", "10D", "11A"], reservedSeats: [] },
        rating: 4.1, reviewsCount: 412
    },
    {
        id: "BUS00229",
        operator: "Skyline Transports",
        route: { source: "Mumbai", destination: "Goa", via: ["Pune", "Kolhapur"] },
        schedule: { departureTime: "2025-10-13T20:45:00", arrivalTime: "2025-10-14T08:00:00", durationMin: 675 },
        fare: 1300, seatsAvailable: 15, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Pillow", "Live Tracking"],
        boardingPoints: [{ name: "Mumbai", time: "2025-10-13T20:45:00" }],
        dropPoints: [{ name: "Goa", time: "2025-10-14T08:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A", "9B", "1C", "2D", "3A"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 289
    },
    {
        id: "BUS00230",
        operator: "Southern Star",
        route: { source: "Hyderabad", destination: "Bangalore", via: ["Kurnool", "Anantapur"] },
        schedule: { departureTime: "2025-10-14T21:15:00", arrivalTime: "2025-10-15T06:00:00", durationMin: 525 },
        fare: 800, seatsAvailable: 0, capacity: 40, busType: "Non-AC Seater",
        amenities: ["Charging Port"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-14T21:15:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-10-15T06:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["2A", "3B", "5D", "1C", "8A", "9D", "4B", "6C", "7A", "1D", "10B", "10C", "3A", "4D", "5A", "6B", "7D", "8C", "9A", "2D", "3C", "5B", "8D", "9C", "1A", "10D", "2B", "4A", "2C", "3D", "4C", "5C", "6A", "6D", "7B", "8B", "9B", "10A", "1B", "4A"], reservedSeats: [] },
        rating: 3.2, reviewsCount: 98
    },
    {
        id: "BUS00231",
        operator: "Night Rider",
        route: { source: "Delhi", destination: "Jaipur", via: ["Gurugram"] },
        schedule: { departureTime: "2025-10-14T23:00:00", arrivalTime: "2025-10-15T04:30:00", durationMin: 330 },
        fare: 550, seatsAvailable: 8, capacity: 48, busType: "Non-AC Seater",
        amenities: ["Charging Port", "Reading Light", "Water Bottle"],
        boardingPoints: [{ name: "Delhi", time: "2025-10-14T23:00:00" }],
        dropPoints: [{ name: "Jaipur", time: "2025-10-15T04:30:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "2A", "2B", "2C", "3A", "3B", "3C", "4A", "4B", "4C", "5A", "5B", "5C", "6A", "6B", "6C", "7A", "7B", "7C", "8A", "8B", "8C", "9A", "9B", "9C", "10A", "10B", "10C", "11A", "11B", "11C", "12A", "12B", "12C", "1D", "2D", "3D", "4D"], reservedSeats: [] },
        rating: 4.0, reviewsCount: 510
    },
    {
        id: "BUS00232",
        operator: "Greenline Tours",
        route: { source: "Hyderabad", destination: "Bangalore", via: ["Kurnool", "Anantapur"] },
        schedule: { departureTime: "2025-10-15T22:30:00", arrivalTime: "2025-10-16T07:00:00", durationMin: 510 },
        fare: 1550, seatsAvailable: 10, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle", "Live Tracking", "Snacks"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-15T22:30:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-10-16T07:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A", "9B", "1C", "2D", "3A", "4B", "5C", "6D", "7A", "8B"], reservedSeats: [] },
        rating: 4.8, reviewsCount: 450
    },
    {
        id: "BUS00233",
        operator: "Express Travels",
        route: { source: "Pune", destination: "Bangalore", via: ["Kolhapur", "Hubli"] },
        schedule: { departureTime: "2025-10-15T18:00:00", arrivalTime: "2025-10-16T08:00:00", durationMin: 840 },
        fare: 1600, seatsAvailable: 1, capacity: 30, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light", "Water Bottle", "CCTV"],
        boardingPoints: [{ name: "Pune", time: "2025-10-15T18:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-10-16T08:00:00" }],
        seatLayout: { rows: 10, columns: 3, layoutType: "2+1", bookedSeats: ["1A", "1B", "1C", "2A", "2B", "2C", "3A", "3B", "3C", "4A", "4B", "4C", "5A", "5B", "5C", "6A", "6B", "6C", "7A", "7B", "7C", "8A", "8B", "8C", "9A", "9B", "9C", "10A", "10B"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 320
    },
    {
        id: "BUS00234",
        operator: "Deccan Express",
        route: { source: "Hyderabad", destination: "Pune", via: ["Solapur"] },
        schedule: { departureTime: "2025-10-16T21:45:00", arrivalTime: "2025-10-17T06:15:00", durationMin: 510 },
        fare: 950, seatsAvailable: 18, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["Blanket", "Pillow"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-16T21:45:00" }],
        dropPoints: [{ name: "Pune", time: "2025-10-17T06:15:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A", "9B", "1C", "2D", "3A", "4B"], reservedSeats: [] },
        rating: 3.5, reviewsCount: 150
    },
    {
        id: "BUS00235",
        operator: "Sunrise Coaches",
        route: { source: "Hyderabad", destination: "Bangalore", via: ["Kurnool", "Anantapur"] },
        schedule: { departureTime: "2025-10-16T20:30:00", arrivalTime: "2025-10-17T06:00:00", durationMin: 570 },
        fare: 900, seatsAvailable: 7, capacity: 40, busType: "Non-AC Seater",
        amenities: ["Charging Port", "Reading Light", "Water Bottle", "Live Tracking"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-16T20:30:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-10-17T06:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A", "9B", "1C", "2D", "3A", "4B", "5C", "6D", "7A", "8B", "9C", "1D", "2A", "3B", "4C", "5D", "6A"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 230
    },
    {
        id: "BUS00236",
        operator: "Orange Tours",
        route: { source: "Hyderabad", destination: "Visakhapatnam", via: ["Vijayawada"] },
        schedule: { departureTime: "2025-10-17T19:00:00", arrivalTime: "2025-10-18T07:00:00", durationMin: 720 },
        fare: 1350, seatsAvailable: 11, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-17T19:00:00" }],
        dropPoints: [{ name: "Visakhapatnam", time: "2025-10-18T07:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A", "9B", "1C", "2D", "3A", "4B", "5C", "6D", "7A"], reservedSeats: [] },
        rating: 4.6, reviewsCount: 410
    },
    {
        id: "BUS00237",
        operator: "Kaveri Travels",
        route: { source: "Bangalore", destination: "Hyderabad", via: ["Anantapur", "Kurnool"] },
        schedule: { departureTime: "2025-10-17T21:45:00", arrivalTime: "2025-10-18T06:30:00", durationMin: 525 },
        fare: 1150, seatsAvailable: 2, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["Charging Port", "Blanket", "Pillow", "Live Tracking"],
        boardingPoints: [{ name: "Bangalore", time: "2025-10-17T21:45:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-10-18T06:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B", "3C", "3D", "4A", "4B", "4C", "4D", "5A", "5B", "5C", "5D", "6A", "6B", "6C", "6D", "7A", "7B", "7C", "7D", "8A", "8B", "8C", "8D", "9A", "9B", "9C", "9D", "10A", "10B"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 380
    },
    {
        id: "BUS00238",
        operator: "Express Travels",
        route: { source: "Hyderabad", destination: "Bangalore", via: ["Kurnool", "Anantapur"] },
        schedule: { departureTime: "2025-10-18T22:00:00", arrivalTime: "2025-10-19T07:00:00", durationMin: 540 },
        fare: 1250, seatsAvailable: 9, capacity: 30, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-18T22:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-10-19T07:00:00" }],
        seatLayout: { rows: 10, columns: 3, layoutType: "2+1", bookedSeats: ["1A", "2B", "3C", "4A", "5B", "6C", "7A", "8B", "9C", "10A", "1B", "2C", "3A", "4B", "5C", "6A", "7B", "8C", "9A", "10B", "1C"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 290
    },
    {
        id: "BUS00239",
        operator: "VRL Travels",
        route: { source: "Mumbai", destination: "Bangalore", via: ["Pune", "Hubli"] },
        schedule: { departureTime: "2025-10-18T16:00:00", arrivalTime: "2025-10-19T09:00:00", durationMin: 1020 },
        fare: 2200, seatsAvailable: 4, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle", "Live Tracking", "Snacks"],
        boardingPoints: [{ name: "Mumbai", time: "2025-10-18T16:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-10-19T09:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A", "9B", "1C", "2D", "3A", "4B", "5C", "6D", "7A", "8B", "9C", "1D", "2A", "3B", "4C", "5D"], reservedSeats: [] },
        rating: 4.9, reviewsCount: 550
    },
    {
        id: "BUS00240",
        operator: "CityLink",
        route: { source: "Chennai", destination: "Coimbatore", via: ["Salem", "Erode"] },
        schedule: { departureTime: "2025-10-19T22:30:00", arrivalTime: "2025-10-20T06:00:00", durationMin: 450 },
        fare: 850, seatsAvailable: 25, capacity: 48, busType: "Non-AC Seater",
        amenities: ["Charging Port", "Reading Light", "CCTV"],
        boardingPoints: [{ name: "Chennai", time: "2025-10-19T22:30:00" }],
        dropPoints: [{ name: "Coimbatore", time: "2025-10-20T06:00:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "2A", "2B", "2C", "3A", "3B", "3C", "4A", "4B", "4C", "5A", "5B", "5C", "6A", "6B", "6C", "7A", "7B", "7C", "8A", "8B"], reservedSeats: [] },
        rating: 4.0, reviewsCount: 215
    },
    {
        id: "BUS00241",
        operator: "Royal Cruiser",
        route: { source: "Delhi", destination: "Jaipur", via: ["Gurugram"] },
        schedule: { departureTime: "2025-10-19T07:00:00", arrivalTime: "2025-10-19T12:30:00", durationMin: 330 },
        fare: 650, seatsAvailable: 12, capacity: 44, busType: "Non-AC Seater",
        amenities: ["WiFi", "Charging Port", "Water Bottle"],
        boardingPoints: [{ name: "Delhi", time: "2025-10-19T07:00:00" }],
        dropPoints: [{ name: "Jaipur", time: "2025-10-19T12:30:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B", "3C", "3D", "4A", "4B", "4C", "4D", "5A", "5B", "5C", "5D", "6A", "6B", "6C", "6D", "7A", "7B", "7C", "7D", "8A", "8B", "8C", "8D"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 310
    },
    {
        id: "BUS00242",
        operator: "Comfort Journey",
        route: { source: "Hyderabad", destination: "Mumbai", via: ["Solapur", "Pune"] },
        schedule: { departureTime: "2025-10-20T20:00:00", arrivalTime: "2025-10-21T08:30:00", durationMin: 750 },
        fare: 1200, seatsAvailable: 3, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["Blanket", "Pillow"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-20T20:00:00" }],
        dropPoints: [{ name: "Mumbai", time: "2025-10-21T08:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B", "3C", "3D", "4A", "4B", "4C", "4D", "5A", "5B", "5C", "5D", "6A", "6B", "6C", "6D", "7A", "7B", "7C", "7D", "8A", "8B", "8C", "8D", "9A", "9B", "9C", "9D", "10A"], reservedSeats: [] },
        rating: 3.6, reviewsCount: 85
    },
    {
        id: "BUS00243",
        operator: "Greenline Tours",
        route: { source: "Hyderabad", destination: "Chennai", via: ["Vijayawada", "Nellore"] },
        schedule: { departureTime: "2025-10-20T21:15:00", arrivalTime: "2025-10-21T08:00:00", durationMin: 645 },
        fare: 1500, seatsAvailable: 19, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-20T21:15:00" }],
        dropPoints: [{ name: "Chennai", time: "2025-10-21T08:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A"], reservedSeats: [] },
        rating: 4.7, reviewsCount: 390
    },
    {
        id: "BUS00244",
        operator: "Sunrise Coaches",
        route: { source: "Bangalore", destination: "Chennai", via: ["Vellore", "Kanchipuram"] },
        schedule: { departureTime: "2025-10-21T06:00:00", arrivalTime: "2025-10-21T12:30:00", durationMin: 390 },
        fare: 500, seatsAvailable: 30, capacity: 48, busType: "Non-AC Seater",
        amenities: ["Charging Port"],
        boardingPoints: [{ name: "Bangalore", time: "2025-10-21T06:00:00" }],
        dropPoints: [{ name: "Chennai", time: "2025-10-21T12:30:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "2A", "2B", "2C", "3A", "3B", "3C", "4A", "4B", "4C", "5A", "5B", "5C", "6A", "6B", "6C"], reservedSeats: [] },
        rating: 3.8, reviewsCount: 120
    },
    {
        id: "BUS00245",
        operator: "Skyline Transports",
        route: { source: "Hyderabad", destination: "Pune", via: ["Solapur"] },
        schedule: { departureTime: "2025-10-21T22:45:00", arrivalTime: "2025-10-22T07:30:00", durationMin: 525 },
        fare: 1150, seatsAvailable: 6, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["Charging Port", "Blanket", "Live Tracking"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-21T22:45:00" }],
        dropPoints: [{ name: "Pune", time: "2025-10-22T07:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B", "3C", "3D", "4A", "4B", "4C", "4D", "5A", "5B", "5C", "5D", "6A", "6B", "6C", "6D", "7A", "7B", "7C", "7D", "8A", "8B", "8C", "8D", "9A", "9B"], reservedSeats: [] },
        rating: 4.1, reviewsCount: 190
    },
    {
        id: "BUS00246",
        operator: "Southern Star",
        route: { source: "Mumbai", destination: "Goa", via: ["Pune", "Kolhapur"] },
        schedule: { departureTime: "2025-10-22T21:30:00", arrivalTime: "2025-10-23T09:00:00", durationMin: 690 },
        fare: 950, seatsAvailable: 1, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["Blanket", "Pillow"],
        boardingPoints: [{ name: "Mumbai", time: "2025-10-22T21:30:00" }],
        dropPoints: [{ name: "Goa", time: "2025-10-23T09:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B", "3C", "3D", "4A", "4B", "4C", "4D", "5A", "5B", "5C", "5D", "6A", "6B", "6C", "6D", "7A", "7B", "7C", "7D", "8A", "8B", "8C", "8D", "9A", "9B", "9C", "9D", "10A", "10B", "10C"], reservedSeats: [] },
        rating: 3.4, reviewsCount: 65
    },
    {
        id: "BUS00247",
        operator: "Express Travels",
        route: { source: "Hyderabad", destination: "Bangalore", via: ["Kurnool", "Anantapur"] },
        schedule: { departureTime: "2025-10-22T20:15:00", arrivalTime: "2025-10-23T05:00:00", durationMin: 525 },
        fare: 1200, seatsAvailable: 14, capacity: 30, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-22T20:15:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-10-23T05:00:00" }],
        seatLayout: { rows: 10, columns: 3, layoutType: "2+1", bookedSeats: ["1A", "1B", "2A", "2B", "3A", "3B", "4A", "4B", "5A", "5B", "6A", "6B", "7A", "7B", "8A", "8B"], reservedSeats: [] },
        rating: 4.6, reviewsCount: 310
    },
    {
        id: "BUS00248",
        operator: "Night Rider",
        route: { source: "Pune", destination: "Bangalore", via: ["Kolhapur", "Hubli"] },
        schedule: { departureTime: "2025-10-23T19:00:00", arrivalTime: "2025-10-24T08:30:00", durationMin: 810 },
        fare: 1800, seatsAvailable: 8, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["Charging Port", "Blanket", "Reading Light", "Live Tracking"],
        boardingPoints: [{ name: "Pune", time: "2025-10-23T19:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-10-24T08:30:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A", "9B", "1C", "2D", "3A", "4B", "5C", "6D", "7A", "8B", "9C", "1D"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 240
    },
    {
        id: "BUS00249",
        operator: "Orange Tours",
        route: { source: "Hyderabad", destination: "Bangalore", via: ["Kurnool", "Anantapur"] },
        schedule: { departureTime: "2025-10-23T21:30:00", arrivalTime: "2025-10-24T06:00:00", durationMin: 510 },
        fare: 1600, seatsAvailable: 0, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle", "Live Tracking", "Snacks"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-23T21:30:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-10-24T06:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A", "9B", "1C", "2D", "3A", "4B", "5C", "6D", "7A", "8B", "9C", "1D", "2A", "3B", "4C", "5D", "6A", "7B", "8C", "9D"], reservedSeats: [] },
        rating: 4.9, reviewsCount: 620
    },
    {
        id: "BUS00250",
        operator: "Kaveri Travels",
        route: { source: "Hyderabad", destination: "Visakhapatnam", via: ["Vijayawada"] },
        schedule: { departureTime: "2025-10-24T20:00:00", arrivalTime: "2025-10-25T07:30:00", durationMin: 690 },
        fare: 1250, seatsAvailable: 20, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["Charging Port", "Blanket", "Reading Light", "Live Tracking"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-24T20:00:00" }],
        dropPoints: [{ name: "Visakhapatnam", time: "2025-10-25T07:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A", "9B", "1C", "2D"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 350
    },
    {
        id: "BUS00251",
        operator: "Deccan Express",
        route: { source: "Hyderabad", destination: "Mumbai", via: ["Solapur", "Pune"] },
        schedule: { departureTime: "2025-10-24T19:45:00", arrivalTime: "2025-10-25T08:00:00", durationMin: 735 },
        fare: 1300, seatsAvailable: 9, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-24T19:45:00" }],
        dropPoints: [{ name: "Mumbai", time: "2025-10-25T08:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A", "9B", "1C", "2D", "3A", "4B", "5C", "6D", "7A", "8B", "9C"], reservedSeats: [] },
        rating: 3.9, reviewsCount: 160
    },
    {
        id: "BUS00252",
        operator: "VRL Travels",
        route: { source: "Bangalore", destination: "Mumbai", via: ["Hubli", "Pune"] },
        schedule: { departureTime: "2025-10-25T17:30:00", arrivalTime: "2025-10-26T09:30:00", durationMin: 960 },
        fare: 2100, seatsAvailable: 15, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Pillow", "Live Tracking"],
        boardingPoints: [{ name: "Bangalore", time: "2025-10-25T17:30:00" }],
        dropPoints: [{ name: "Mumbai", time: "2025-10-26T09:30:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A", "9B", "1C", "2D", "3A"], reservedSeats: [] },
        rating: 4.8, reviewsCount: 510
    },
    {
        id: "BUS00253",
        operator: "CityLink",
        route: { source: "Delhi", destination: "Jaipur", via: ["Gurugram"] },
        schedule: { departureTime: "2025-10-25T23:30:00", arrivalTime: "2025-10-26T05:00:00", durationMin: 330 },
        fare: 600, seatsAvailable: 2, capacity: 48, busType: "Non-AC Seater",
        amenities: ["Charging Port", "Reading Light", "Water Bottle"],
        boardingPoints: [{ name: "Delhi", time: "2025-10-25T23:30:00" }],
        dropPoints: [{ name: "Jaipur", time: "2025-10-26T05:00:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B", "3C", "3D", "4A", "4B", "4C", "4D", "5A", "5B", "5C", "5D", "6A", "6B", "6C", "6D", "7A", "7B", "7C", "7D", "8A", "8B", "8C", "8D", "9A", "9B", "9C", "9D", "10A", "10B", "10C", "10D", "11A", "11B", "11C", "11D", "12A", "12B"], reservedSeats: [] },
        rating: 4.1, reviewsCount: 450
    },
    {
        id: "BUS00254",
        operator: "Comfort Journey",
        route: { source: "Hyderabad", destination: "Bangalore", via: ["Kurnool", "Anantapur"] },
        schedule: { departureTime: "2025-10-26T21:00:00", arrivalTime: "2025-10-27T06:00:00", durationMin: 540 },
        fare: 750, seatsAvailable: 35, capacity: 40, busType: "Non-AC Seater",
        amenities: ["Charging Port"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-26T21:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-10-27T06:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A"], reservedSeats: [] },
        rating: 3.1, reviewsCount: 55
    },
    {
        id: "BUS00255",
        operator: "Royal Cruiser",
        route: { source: "Chennai", destination: "Hyderabad", via: ["Nellore", "Vijayawada"] },
        schedule: { departureTime: "2025-10-26T19:00:00", arrivalTime: "2025-10-27T06:30:00", durationMin: 690 },
        fare: 1400, seatsAvailable: 10, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light", "Water Bottle"],
        boardingPoints: [{ name: "Chennai", time: "2025-10-26T19:00:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-10-27T06:30:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A", "9B", "1C", "2D", "3A", "4B", "5C", "6D", "7A", "8B"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 330
    },
    {
        id: "BUS00256",
        operator: "Greenline Tours",
        route: { source: "Hyderabad", destination: "Bangalore", via: ["Kurnool", "Anantapur"] },
        schedule: { departureTime: "2025-10-27T22:00:00", arrivalTime: "2025-10-28T06:45:00", durationMin: 525 },
        fare: 1500, seatsAvailable: 1, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Live Tracking"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-27T22:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-10-28T06:45:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A", "9B", "1C", "2D", "3A", "4B", "5C", "6D", "7A", "8B", "9C", "1D", "2A", "3B", "4C", "5D", "6A", "7B", "8C"], reservedSeats: [] },
        rating: 4.8, reviewsCount: 480
    },
    {
        id: "BUS00257",
        operator: "Southern Star",
        route: { source: "Bangalore", destination: "Hyderabad", via: ["Anantapur", "Kurnool"] },
        schedule: { departureTime: "2025-10-27T21:30:00", arrivalTime: "2025-10-28T06:30:00", durationMin: 540 },
        fare: 850, seatsAvailable: 22, capacity: 40, busType: "Non-AC Seater",
        amenities: ["Charging Port"],
        boardingPoints: [{ name: "Bangalore", time: "2025-10-27T21:30:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-10-28T06:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A", "9B"], reservedSeats: [] },
        rating: 3.3, reviewsCount: 110
    },
    {
        id: "BUS00258",
        operator: "Sunrise Coaches",
        route: { source: "Hyderabad", destination: "Pune", via: ["Solapur"] },
        schedule: { departureTime: "2025-10-28T20:30:00", arrivalTime: "2025-10-29T05:30:00", durationMin: 540 },
        fare: 1000, seatsAvailable: 0, capacity: 40, busType: "Non-AC Seater",
        amenities: ["Charging Port", "Reading Light", "Water Bottle"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-28T20:30:00" }],
        dropPoints: [{ name: "Pune", time: "2025-10-29T05:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B", "3C", "3D", "4A", "4B", "4C", "4D", "5A", "5B", "5C", "5D", "6A", "6B", "6C", "6D", "7A", "7B", "7C", "7D", "8A", "8B", "8C", "8D", "9A", "9B", "9C", "9D", "10A", "10B", "10C", "10D"], reservedSeats: [] },
        rating: 4.0, reviewsCount: 205
    },
    {
        id: "BUS00259",
        operator: "Deccan Express",
        route: { source: "Mumbai", destination: "Goa", via: ["Pune", "Kolhapur"] },
        schedule: { departureTime: "2025-10-28T22:15:00", arrivalTime: "2025-10-29T09:45:00", durationMin: 690 },
        fare: 1100, seatsAvailable: 13, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["Charging Port", "Blanket", "Pillow"],
        boardingPoints: [{ name: "Mumbai", time: "2025-10-28T22:15:00" }],
        dropPoints: [{ name: "Goa", time: "2025-10-29T09:45:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A", "9B", "1C", "2D", "3A", "4B", "5C", "6D", "7A", "8B", "9C"], reservedSeats: [] },
        rating: 3.8, reviewsCount: 145
    },
    {
        id: "BUS00260",
        operator: "Express Travels",
        route: { source: "Pune", destination: "Hyderabad", via: ["Solapur"] },
        schedule: { departureTime: "2025-10-29T21:00:00", arrivalTime: "2025-10-30T06:00:00", durationMin: 540 },
        fare: 1300, seatsAvailable: 4, capacity: 30, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Pune", time: "2025-10-29T21:00:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-10-30T06:00:00" }],
        seatLayout: { rows: 10, columns: 3, layoutType: "2+1", bookedSeats: ["1A", "1B", "1C", "2A", "2B", "2C", "3A", "3B", "3C", "4A", "4B", "4C", "5A", "5B", "5C", "6A", "6B", "6C", "7A", "7B", "7C", "8A", "8B", "8C", "9A", "9B"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 280
    },
    {
        id: "BUS00261",
        operator: "Skyline Transports",
        route: { source: "Bangalore", destination: "Chennai", via: ["Vellore", "Kanchipuram"] },
        schedule: { departureTime: "2025-10-29T23:00:00", arrivalTime: "2025-10-30T05:30:00", durationMin: 390 },
        fare: 700, seatsAvailable: 18, capacity: 44, busType: "Non-AC Seater",
        amenities: ["Charging Port", "Reading Light", "Live Tracking"],
        boardingPoints: [{ name: "Bangalore", time: "2025-10-29T23:00:00" }],
        dropPoints: [{ name: "Chennai", time: "2025-10-30T05:30:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B", "3C", "3D", "4A", "4B", "4C", "4D", "5A", "5B", "5C", "5D", "6A", "6B", "6C", "6D", "7A", "7B"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 225
    },
    {
        id: "BUS00262",
        operator: "Night Rider",
        route: { source: "Hyderabad", destination: "Chennai", via: ["Vijayawada", "Nellore"] },
        schedule: { departureTime: "2025-10-30T20:45:00", arrivalTime: "2025-10-31T07:15:00", durationMin: 630 },
        fare: 1150, seatsAvailable: 3, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["Charging Port", "Blanket", "CCTV"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-30T20:45:00" }],
        dropPoints: [{ name: "Chennai", time: "2025-10-31T07:15:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B", "3C", "3D", "4A", "4B", "4C", "4D", "5A", "5B", "5C", "5D", "6A", "6B", "6C", "6D", "7A", "7B", "7C", "7D", "8A", "8B", "8C", "8D", "9A", "9B", "9C", "9D", "10A"], reservedSeats: [] },
        rating: 3.9, reviewsCount: 175
    },
    {
        id: "BUS00263",
        operator: "Orange Tours",
        route: { source: "Hyderabad", destination: "Mumbai", via: ["Solapur", "Pune"] },
        schedule: { departureTime: "2025-10-30T21:30:00", arrivalTime: "2025-10-31T09:30:00", durationMin: 720 },
        fare: 1700, seatsAvailable: 11, capacity: 36, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle", "Snacks"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-30T21:30:00" }],
        dropPoints: [{ name: "Mumbai", time: "2025-10-31T09:30:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A", "9B", "1C", "2D", "3A", "4B", "5C", "6D", "7A"], reservedSeats: [] },
        rating: 4.8, reviewsCount: 580
    },
    {
        id: "BUS00264",
        operator: "Kaveri Travels",
        route: { source: "Chennai", destination: "Bangalore", via: ["Kanchipuram", "Vellore"] },
        schedule: { departureTime: "2025-10-31T22:00:00", arrivalTime: "2025-11-01T04:30:00", durationMin: 390 },
        fare: 800, seatsAvailable: 25, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["Charging Port", "Blanket", "Pillow", "Live Tracking"],
        boardingPoints: [{ name: "Chennai", time: "2025-10-31T22:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-11-01T04:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 365
    },
    {
        id: "BUS00265",
        operator: "VRL Travels",
        route: { source: "Hyderabad", destination: "Bangalore", via: ["Kurnool", "Anantapur"] },
        schedule: { departureTime: "2025-10-31T22:45:00", arrivalTime: "2025-11-01T07:30:00", durationMin: 525 },
        fare: 1650, seatsAvailable: 6, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle", "Live Tracking"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-10-31T22:45:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-11-01T07:30:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A", "9B", "1C", "2D", "3A", "4B", "5C", "6D", "7A", "8B", "9C", "1D", "2A", "3B"], reservedSeats: [] },
        rating: 4.7, reviewsCount: 490
    },
    {
        id: "BUS00266",
        operator: "Royal Cruiser",
        route: { source: "Delhi", destination: "Jaipur", via: ["Gurugram"] },
        schedule: { departureTime: "2025-11-01T23:00:00", arrivalTime: "2025-11-02T04:45:00", durationMin: 345 },
        fare: 700, seatsAvailable: 1, capacity: 44, busType: "Non-AC Seater",
        amenities: ["WiFi", "Charging Port", "Reading Light"],
        boardingPoints: [{ name: "Delhi", time: "2025-11-01T23:00:00" }],
        dropPoints: [{ name: "Jaipur", time: "2025-11-02T04:45:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B", "3C", "3D", "4A", "4B", "4C", "4D", "5A", "5B", "5C", "5D", "6A", "6B", "6C", "6D", "7A", "7B", "7C", "7D", "8A", "8B", "8C", "8D", "9A", "9B", "9C", "9D", "10A", "10B", "10C", "10D", "11A", "11B", "11C"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 335
    },
    {
        id: "BUS00267",
        operator: "Comfort Journey",
        route: { source: "Pune", destination: "Bangalore", via: ["Kolhapur", "Hubli"] },
        schedule: { departureTime: "2025-11-01T18:30:00", arrivalTime: "2025-11-02T08:00:00", durationMin: 810 },
        fare: 1500, seatsAvailable: 18, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["Blanket", "Pillow"],
        boardingPoints: [{ name: "Pune", time: "2025-11-01T18:30:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-11-02T08:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A", "9B", "1C", "2D", "3A", "4B"], reservedSeats: [] },
        rating: 3.7, reviewsCount: 95
    },
    {
        id: "BUS00268",
        operator: "Greenline Tours",
        route: { source: "Hyderabad", destination: "Visakhapatnam", via: ["Vijayawada"] },
        schedule: { departureTime: "2025-11-02T19:30:00", arrivalTime: "2025-11-03T07:00:00", durationMin: 690 },
        fare: 1550, seatsAvailable: 8, capacity: 36, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-11-02T19:30:00" }],
        dropPoints: [{ name: "Visakhapatnam", time: "2025-11-03T07:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A", "9B", "1C", "2D", "3A", "4B", "5C", "6D", "7A", "8B", "9C", "1D"], reservedSeats: [] },
        rating: 4.6, reviewsCount: 420
    },
    {
        id: "BUS00269",
        operator: "CityLink",
        route: { source: "Chennai", destination: "Coimbatore", via: ["Salem", "Erode"] },
        schedule: { departureTime: "2025-11-02T23:15:00", arrivalTime: "2025-11-03T07:00:00", durationMin: 465 },
        fare: 650, seatsAvailable: 30, capacity: 48, busType: "Non-AC Seater",
        amenities: ["Charging Port"],
        boardingPoints: [{ name: "Chennai", time: "2025-11-02T23:15:00" }],
        dropPoints: [{ name: "Coimbatore", time: "2025-11-03T07:00:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "2A", "2B", "2C", "3A", "3B", "3C", "4A", "4B", "4C", "5A", "5B", "5C", "6A", "6B", "6C"], reservedSeats: [] },
        rating: 3.8, reviewsCount: 185
    },
    {
        id: "BUS00270",
        operator: "Sunrise Coaches",
        route: { source: "Hyderabad", destination: "Bangalore", via: ["Kurnool", "Anantapur"] },
        schedule: { departureTime: "2025-11-03T21:45:00", arrivalTime: "2025-11-04T06:30:00", durationMin: 525 },
        fare: 950, seatsAvailable: 3, capacity: 40, busType: "Non-AC Seater",
        amenities: ["Charging Port", "Reading Light", "Live Tracking"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-11-03T21:45:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-11-04T06:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B", "3C", "3D", "4A", "4B", "4C", "4D", "5A", "5B", "5C", "5D", "6A", "6B", "6C", "6D", "7A", "7B", "7C", "7D", "8A", "8B", "8C", "8D", "9A", "9B", "9C", "9D", "10A"], reservedSeats: [] },
        rating: 4.1, reviewsCount: 215
    },
    {
        id: "BUS00271",
        operator: "Southern Star",
        route: { source: "Hyderabad", destination: "Chennai", via: ["Vijayawada", "Nellore"] },
        schedule: { departureTime: "2025-11-03T20:00:00", arrivalTime: "2025-11-04T07:00:00", durationMin: 660 },
        fare: 1000, seatsAvailable: 15, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["Blanket", "Pillow"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-11-03T20:00:00" }],
        dropPoints: [{ name: "Chennai", time: "2025-11-04T07:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A", "9B", "1C", "2D", "3A", "4B", "5C", "6D", "7A"], reservedSeats: [] },
        rating: 3.5, reviewsCount: 90
    },
    {
        id: "BUS00272",
        operator: "Deccan Express",
        route: { source: "Bangalore", destination: "Pune", via: ["Hubli", "Kolhapur"] },
        schedule: { departureTime: "2025-11-04T19:30:00", arrivalTime: "2025-11-05T09:00:00", durationMin: 810 },
        fare: 1750, seatsAvailable: 7, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["Charging Port", "Blanket", "Water Bottle", "Live Tracking"],
        boardingPoints: [{ name: "Bangalore", time: "2025-11-04T19:30:00" }],
        dropPoints: [{ name: "Pune", time: "2025-11-05T09:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A", "9B", "1C", "2D", "3A", "4B", "5C", "6D", "7A", "8B", "9C", "1D", "2A"], reservedSeats: [] },
        rating: 4.0, reviewsCount: 195
    },
    {
        id: "BUS00273",
        operator: "Skyline Transports",
        route: { source: "Hyderabad", destination: "Mumbai", via: ["Solapur", "Pune"] },
        schedule: { departureTime: "2025-11-04T21:15:00", arrivalTime: "2025-11-05T09:15:00", durationMin: 720 },
        fare: 1400, seatsAvailable: 2, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["Charging Port", "Blanket", "Reading Light", "Live Tracking"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-11-04T21:15:00" }],
        dropPoints: [{ name: "Mumbai", time: "2025-11-05T09:15:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B", "3C", "3D", "4A", "4B", "4C", "4D", "5A", "5B", "5C", "5D", "6A", "6B", "6C", "6D", "7A", "7B", "7C", "7D", "8A", "8B", "8C", "8D", "9A", "9B", "9C", "9D", "10A", "10B"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 245
    },
    {
        id: "BUS00274",
        operator: "Express Travels",
        route: { source: "Hyderabad", destination: "Bangalore", via: ["Kurnool", "Anantapur"] },
        schedule: { departureTime: "2025-11-05T22:30:00", arrivalTime: "2025-11-06T07:15:00", durationMin: 525 },
        fare: 1250, seatsAvailable: 20, capacity: 30, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle", "CCTV"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-11-05T22:30:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-11-06T07:15:00" }],
        seatLayout: { rows: 10, columns: 3, layoutType: "2+1", bookedSeats: ["1A", "1B", "2A", "2B", "3A", "3B", "4A", "4B", "5A", "5B"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 300
    },
    {
        id: "BUS00275",
        operator: "Night Rider",
        route: { source: "Mumbai", destination: "Goa", via: ["Pune", "Kolhapur"] },
        schedule: { departureTime: "2025-11-05T23:00:00", arrivalTime: "2025-11-06T10:00:00", durationMin: 660 },
        fare: 1050, seatsAvailable: 11, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["Blanket", "Pillow"],
        boardingPoints: [{ name: "Mumbai", time: "2025-11-05T23:00:00" }],
        dropPoints: [{ name: "Goa", time: "2025-11-06T10:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B", "3C", "3D", "4A", "4B", "4C", "4D", "5A", "5B", "5C", "5D", "6A", "6B", "6C", "6D", "7A", "7B", "7C", "7D", "8A"], reservedSeats: [] },
        rating: 3.6, reviewsCount: 115
    },
    {
        id: "BUS00276",
        operator: "Kaveri Travels",
        route: { source: "Bangalore", destination: "Hyderabad", via: ["Anantapur", "Kurnool"] },
        schedule: { departureTime: "2025-11-06T22:15:00", arrivalTime: "2025-11-07T07:00:00", durationMin: 525 },
        fare: 1200, seatsAvailable: 5, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["Charging Port", "Blanket", "Live Tracking"],
        boardingPoints: [{ name: "Bangalore", time: "2025-11-06T22:15:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-11-07T07:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B", "3C", "3D", "4A", "4B", "4C", "4D", "5A", "5B", "5C", "5D", "6A", "6B", "6C", "6D", "7A", "7B", "7C", "7D", "8A", "8B", "8C", "8D", "9A", "9B", "9C"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 375
    },
    {
        id: "BUS00277",
        operator: "Orange Tours",
        route: { source: "Hyderabad", destination: "Chennai", via: ["Vijayawada", "Nellore"] },
        schedule: { departureTime: "2025-11-06T20:30:00", arrivalTime: "2025-11-07T07:30:00", durationMin: 660 },
        fare: 1600, seatsAvailable: 16, capacity: 36, busType: "AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Snacks"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-11-06T20:30:00" }],
        dropPoints: [{ name: "Chennai", time: "2025-11-07T07:30:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A", "9B", "1C", "2D"], reservedSeats: [] },
        rating: 4.7, reviewsCount: 520
    },
    {
        id: "BUS00278",
        operator: "VRL Travels",
        route: { source: "Mumbai", destination: "Hyderabad", via: ["Pune", "Solapur"] },
        schedule: { departureTime: "2025-11-07T18:00:00", arrivalTime: "2025-11-08T06:00:00", durationMin: 720 },
        fare: 1800, seatsAvailable: 9, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Live Tracking"],
        boardingPoints: [{ name: "Mumbai", time: "2025-11-07T18:00:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-11-08T06:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A", "9B", "1C", "2D", "3A", "4B", "5C", "6D", "7A", "8B", "9C"], reservedSeats: [] },
        rating: 4.6, reviewsCount: 450
    },
    {
        id: "BUS00279",
        operator: "Royal Cruiser",
        route: { source: "Hyderabad", destination: "Pune", via: ["Solapur"] },
        schedule: { departureTime: "2025-11-07T22:00:00", arrivalTime: "2025-11-08T07:00:00", durationMin: 540 },
        fare: 1350, seatsAvailable: 1, capacity: 30, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-11-07T22:00:00" }],
        dropPoints: [{ name: "Pune", time: "2025-11-08T07:00:00" }],
        seatLayout: { rows: 10, columns: 3, layoutType: "2+1", bookedSeats: ["1A", "1B", "1C", "2A", "2B", "2C", "3A", "3B", "3C", "4A", "4B", "4C", "5A", "5B", "5C", "6A", "6B", "6C", "7A", "7B", "7C", "8A", "8B", "8C", "9A", "9B", "9C", "10A", "10B"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 315
    },
    {
        id: "BUS00280",
        operator: "Comfort Journey",
        route: { source: "Bangalore", destination: "Chennai", via: ["Vellore", "Kanchipuram"] },
        schedule: { departureTime: "2025-11-08T07:30:00", arrivalTime: "2025-11-08T14:00:00", durationMin: 390 },
        fare: 450, seatsAvailable: 40, capacity: 48, busType: "Non-AC Seater",
        amenities: [],
        boardingPoints: [{ name: "Bangalore", time: "2025-11-08T07:30:00" }],
        dropPoints: [{ name: "Chennai", time: "2025-11-08T14:00:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D"], reservedSeats: [] },
        rating: 3.0, reviewsCount: 45
    },
    {
        id: "BUS00281",
        operator: "Greenline Tours",
        route: { source: "Hyderabad", destination: "Bangalore", via: ["Kurnool", "Anantapur"] },
        schedule: { departureTime: "2025-11-08T21:30:00", arrivalTime: "2025-11-09T06:00:00", durationMin: 510 },
        fare: 1550, seatsAvailable: 0, capacity: 36, busType: " Non-AC Seater",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle", "Snacks"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-11-08T21:30:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-11-09T06:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B", "3C", "3D", "4A", "4B", "4C", "4D", "5A", "5B", "5C", "5D", "6A", "6B", "6C", "6D", "7A", "7B", "7C", "7D", "8A", "8B", "8C", "8D", "9A", "9B", "9C", "9D"], reservedSeats: [] },
        rating: 4.9, reviewsCount: 500
    },
    {
        id: "BUS00282",
        operator: "Sunrise Coaches",
        route: { source: "Delhi", destination: "Jaipur", via: ["Gurugram"] },
        schedule: { departureTime: "2025-11-09T23:45:00", arrivalTime: "2025-11-10T05:15:00", durationMin: 330 },
        fare: 550, seatsAvailable: 15, capacity: 48, busType: "Non-AC Seater",
        amenities: ["Charging Port", "Reading Light", "Water Bottle"],
        boardingPoints: [{ name: "Delhi", time: "2025-11-09T23:45:00" }],
        dropPoints: [{ name: "Jaipur", time: "2025-11-10T05:15:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B", "3C", "3D", "4A", "4B", "4C", "4D", "5A", "5B", "5C", "5D", "6A", "6B", "6C", "6D", "7A", "7B", "7C", "7D", "8A", "8B", "8C", "8D", "9A"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 305
    },
    {
        id: "BUS00283",
        operator: "Southern Star",
        route: { source: "Chennai", destination: "Coimbatore", via: ["Salem", "Erode"] },
        schedule: { departureTime: "2025-11-09T22:30:00", arrivalTime: "2025-11-10T06:30:00", durationMin: 480 },
        fare: 600, seatsAvailable: 2, capacity: 44, busType: "Non-AC Seater",
        amenities: ["Charging Port"],
        boardingPoints: [{ name: "Chennai", time: "2025-11-09T22:30:00" }],
        dropPoints: [{ name: "Coimbatore", time: "2025-11-10T06:30:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B", "3C", "3D", "4A", "4B", "4C", "4D", "5A", "5B", "5C", "5D", "6A", "6B", "6C", "6D", "7A", "7B", "7C", "7D", "8A", "8B", "8C", "8D", "9A", "9B", "9C", "9D", "10A", "10B", "10C", "10D", "11A", "11B"], reservedSeats: [] },
        rating: 3.4, reviewsCount: 130
    },
    {
        id: "BUS00284",
        operator: "Deccan Express",
        route: { source: "Hyderabad", destination: "Visakhapatnam", via: ["Vijayawada"] },
        schedule: { departureTime: "2025-11-10T20:00:00", arrivalTime: "2025-11-11T08:00:00", durationMin: 720 },
        fare: 1100, seatsAvailable: 23, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["Charging Port", "Blanket", "Pillow"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-11-10T20:00:00" }],
        dropPoints: [{ name: "Visakhapatnam", time: "2025-11-11T08:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B", "3C", "3D", "4A", "4B", "4C", "4D", "5A"], reservedSeats: [] },
        rating: 3.9, reviewsCount: 170
    },
    {
        id: "BUS00285",
        operator: "Express Travels",
        route: { source: "Mumbai", destination: "Bangalore", via: ["Pune", "Hubli"] },
        schedule: { departureTime: "2025-11-10T17:00:00", arrivalTime: "2025-11-11T10:00:00", durationMin: 1020 },
        fare: 2000, seatsAvailable: 10, capacity: 30, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light", "Water Bottle"],
        boardingPoints: [{ name: "Mumbai", time: "2025-11-10T17:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-11-11T10:00:00" }],
        seatLayout: { rows: 10, columns: 3, layoutType: "2+1", bookedSeats: ["1A", "1B", "1C", "2A", "2B", "2C", "3A", "3B", "3C", "4A", "4B", "4C", "5A", "5B", "5C", "6A", "6B", "6C", "7A", "7B"], reservedSeats: [] },
        rating: 4.6, reviewsCount: 340
    },
    {
        id: "BUS00286",
        operator: "Skyline Transports",
        route: { source: "Hyderabad", destination: "Bangalore", via: ["Kurnool", "Anantapur"] },
        schedule: { departureTime: "2025-11-11T21:00:00", arrivalTime: "2025-11-12T05:45:00", durationMin: 525 },
        fare: 1250, seatsAvailable: 8, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["Charging Port", "Blanket", "Live Tracking"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-11-11T21:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-11-12T05:45:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B", "3C", "3D", "4A", "4B", "4C", "4D", "5A", "5B", "5C", "5D", "6A", "6B", "6C", "6D", "7A", "7B", "7C", "7D", "8A", "8B", "8C", "8D"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 260
    },
    {
        id: "BUS00287",
        operator: "Night Rider",
        route: { source: "Pune", destination: "Hyderabad", via: ["Solapur"] },
        schedule: { departureTime: "2025-11-11T22:30:00", arrivalTime: "2025-11-12T07:30:00", durationMin: 540 },
        fare: 900, seatsAvailable: 1, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["Blanket", "Pillow"],
        boardingPoints: [{ name: "Pune", time: "2025-11-11T22:30:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-11-12T07:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B", "3C", "3D", "4A", "4B", "4C", "4D", "5A", "5B", "5C", "5D", "6A", "6B", "6C", "6D", "7A", "7B", "7C", "7D", "8A", "8B", "8C", "8D", "9A", "9B", "9C", "9D", "10A", "10B", "10C"], reservedSeats: [] },
        rating: 3.7, reviewsCount: 135
    },
    {
        id: "BUS00288",
        operator: "Orange Tours",
        route: { source: "Bangalore", destination: "Hyderabad", via: ["Anantapur", "Kurnool"] },
        schedule: { departureTime: "2025-11-12T21:00:00", arrivalTime: "2025-11-13T05:30:00", durationMin: 510 },
        fare: 1650, seatsAvailable: 13, capacity: 36, busType: " Non-AC Seater",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle", "Live Tracking", "Snacks"],
        boardingPoints: [{ name: "Bangalore", time: "2025-11-12T21:00:00" }],
        dropPoints: [{ name: "Hyderabad", time: "2025-11-13T05:30:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A", "9B", "1C", "2D", "3A", "4B", "5C"], reservedSeats: [] },
        rating: 4.9, reviewsCount: 610
    },
    {
        id: "BUS00289",
        operator: "Kaveri Travels",
        route: { source: "Hyderabad", destination: "Pune", via: ["Solapur"] },
        schedule: { departureTime: "2025-11-12T21:45:00", arrivalTime: "2025-11-13T06:30:00", durationMin: 525 },
        fare: 1100, seatsAvailable: 19, capacity: 40, busType: "Non-AC Sleeper",
        amenities: ["Charging Port", "Blanket", "Reading Light", "Live Tracking"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-11-12T21:45:00" }],
        dropPoints: [{ name: "Pune", time: "2025-11-13T06:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A", "9B", "1C", "2D", "3A"], reservedSeats: [] },
        rating: 4.3, reviewsCount: 345
    },
    {
        id: "BUS00290",
        operator: "VRL Travels",
        route: { source: "Bangalore", destination: "Pune", via: ["Hubli", "Kolhapur"] },
        schedule: { departureTime: "2025-11-13T18:30:00", arrivalTime: "2025-11-14T08:00:00", durationMin: 810 },
        fare: 1900, seatsAvailable: 5, capacity: 36, busType: "Non-AC Seater",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle", "Live Tracking"],
        boardingPoints: [{ name: "Bangalore", time: "2025-11-13T18:30:00" }],
        dropPoints: [{ name: "Pune", time: "2025-11-14T08:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A", "9B", "1C", "2D", "3A", "4B", "5C", "6D", "7A", "8B", "9C", "1D", "2A", "3B", "4C"], reservedSeats: [] },
        rating: 4.7, reviewsCount: 470
    },
    {
        id: "BUS00291",
        operator: "CityLink",
        route: { source: "Bangalore", destination: "Chennai", via: ["Vellore", "Kanchipuram"] },
        schedule: { departureTime: "2025-11-13T14:00:00", arrivalTime: "2025-11-13T20:30:00", durationMin: 390 },
        fare: 550, seatsAvailable: 28, capacity: 48, busType: "Non-AC Seater",
        amenities: ["Charging Port", "Reading Light"],
        boardingPoints: [{ name: "Bangalore", time: "2025-11-13T14:00:00" }],
        dropPoints: [{ name: "Chennai", time: "2025-11-13T20:30:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "2A", "2B", "2C", "3A", "3B", "3C", "4A", "4B", "4C", "5A", "5B", "5C", "6A", "6B", "6C", "7A", "7B"], reservedSeats: [] },
        rating: 4.0, reviewsCount: 265
    },
    {
        id: "BUS00292",
        operator: "Greenline Tours",
        route: { source: "Hyderabad", destination: "Mumbai", via: ["Solapur", "Pune"] },
        schedule: { departureTime: "2025-11-14T21:00:00", arrivalTime: "2025-11-15T09:00:00", durationMin: 720 },
        fare: 1450, seatsAvailable: 1, capacity: 36, busType: " Non-AC Seater",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle", "Live Tracking"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-11-14T21:00:00" }],
        dropPoints: [{ name: "Mumbai", time: "2025-11-15T09:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A", "9B", "1C", "2D", "3A", "4B", "5C", "6D", "7A", "8B", "9C", "1D", "2A", "3B", "4C", "5D", "6A", "7B", "8C"], reservedSeats: [] },
        rating: 4.7, reviewsCount: 355
    },
    {
        id: "BUS00293",
        operator: "Sunrise Coaches",
        route: { source: "Hyderabad", destination: "Chennai", via: ["Vijayawada", "Nellore"] },
        schedule: { departureTime: "2025-11-14T19:30:00", arrivalTime: "2025-11-15T06:30:00", durationMin: 660 },
        fare: 1100, seatsAvailable: 2, capacity: 40, busType: "Non-AC Seater",
        amenities: ["Charging Port", "Blanket", "Reading Light", "CCTV"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-11-14T19:30:00" }],
        dropPoints: [{ name: "Chennai", time: "2025-11-15T06:30:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B", "3C", "3D", "4A", "4B", "4C", "4D", "5A", "5B", "5C", "5D", "6A", "6B", "6C", "6D", "7A", "7B", "7C", "7D", "8A", "8B", "8C", "8D", "9A", "9B", "9C", "9D", "10A", "10B"], reservedSeats: [] },
        rating: 3.9, reviewsCount: 190
    },
    {
        id: "BUS00294",
        operator: "Deccan Express",
        route: { source: "Bangalore", destination: "Chennai", via: ["Vellore", "Kanchipuram"] },
        schedule: { departureTime: "2025-11-15T22:00:00", arrivalTime: "2025-11-16T05:00:00", durationMin: 420 },
        fare: 600, seatsAvailable: 33, capacity: 44, busType: "Non-AC Seater",
        amenities: ["Charging Port", "Reading Light", "Water Bottle"],
        boardingPoints: [{ name: "Bangalore", time: "2025-11-15T22:00:00" }],
        dropPoints: [{ name: "Chennai", time: "2025-11-16T05:00:00" }],
        seatLayout: { rows: 11, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B", "3C"], reservedSeats: [] },
        rating: 4.1, reviewsCount: 422
    },
    {
        id: "BUS00295",
        operator: "Skyline Transports",
        route: { source: "Mumbai", destination: "Goa", via: ["Pune", "Kolhapur"] },
        schedule: { departureTime: "2025-11-15T20:45:00", arrivalTime: "2025-11-16T08:00:00", durationMin: 675 },
        fare: 1300, seatsAvailable: 1, capacity: 36, busType: "Non-AC Sleeper",
        amenities: ["WiFi", "Charging Port", "Blanket", "Pillow", "Live Tracking"],
        boardingPoints: [{ name: "Mumbai", time: "2025-11-15T20:45:00" }],
        dropPoints: [{ name: "Goa", time: "2025-11-16T08:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B", "3C", "3D", "4A", "4B", "4C", "4D", "5A", "5B", "5C", "5D", "6A", "6B", "6C", "6D", "7A", "7B", "7C", "7D", "8A", "8B", "8C", "8D", "9A", "9B", "9C"], reservedSeats: [] },
        rating: 4.5, reviewsCount: 299
    },
    {
        id: "BUS00296",
        operator: "Southern Star",
        route: { source: "Hyderabad", destination: "Bangalore", via: ["Kurnool", "Anantapur"] },
        schedule: { departureTime: "2025-11-16T21:15:00", arrivalTime: "2025-11-17T06:00:00", durationMin: 525 },
        fare: 800, seatsAvailable: 10, capacity: 40, busType: "Non-AC Seater",
        amenities: ["Charging Port"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-11-16T21:15:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-11-17T06:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B", "3C", "3D", "4A", "4B", "4C", "4D", "5A", "5B", "5C", "5D", "6A", "6B", "6C", "6D", "7A", "7B", "7C", "7D", "8A", "8B"], reservedSeats: [] },
        rating: 3.2, reviewsCount: 108
    },
    {
        id: "BUS00297",
        operator: "Night Rider",
        route: { source: "Delhi", destination: "Jaipur", via: ["Gurugram"] },
        schedule: { departureTime: "2025-11-16T23:00:00", arrivalTime: "2025-11-17T04:30:00", durationMin: 330 },
        fare: 550, seatsAvailable: 18, capacity: 48, busType: "Non-AC Seater",
        amenities: ["Charging Port", "Reading Light", "Water Bottle"],
        boardingPoints: [{ name: "Delhi", time: "2025-11-16T23:00:00" }],
        dropPoints: [{ name: "Jaipur", time: "2025-11-17T04:30:00" }],
        seatLayout: { rows: 12, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B", "3C", "3D", "4A", "4B", "4C", "4D", "5A", "5B", "5C", "5D", "6A", "6B", "6C", "6D", "7A", "7B", "7C", "7D", "8A", "8B"], reservedSeats: [] },
        rating: 4.0, reviewsCount: 520
    },
    {
        id: "BUS00298",
        operator: "Greenline Tours",
        route: { source: "Hyderabad", destination: "Bangalore", via: ["Kurnool", "Anantapur"] },
        schedule: { departureTime: "2025-11-17T22:30:00", arrivalTime: "2025-11-18T07:00:00", durationMin: 510 },
        fare: 1550, seatsAvailable: 20, capacity: 36, busType: " Non-AC Seater",
        amenities: ["WiFi", "Charging Port", "Blanket", "Water Bottle", "Live Tracking", "Snacks"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-11-17T22:30:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-11-18T07:00:00" }],
        seatLayout: { rows: 9, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D"], reservedSeats: [] },
        rating: 4.8, reviewsCount: 460
    },
    {
        id: "BUS00299",
        operator: "Express Travels",
        route: { source: "Pune", destination: "Bangalore", via: ["Kolhapur", "Hubli"] },
        schedule: { departureTime: "2025-11-17T18:00:00", arrivalTime: "2025-11-18T08:00:00", durationMin: 840 },
        fare: 1600, seatsAvailable: 11, capacity: 30, busType: "Non-AC Seater",
        amenities: ["WiFi", "Charging Port", "Blanket", "Reading Light", "Water Bottle", "CCTV"],
        boardingPoints: [{ name: "Pune", time: "2025-11-17T18:00:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-11-18T08:00:00" }],
        seatLayout: { rows: 10, columns: 3, layoutType: "2+1", bookedSeats: ["1A", "1B", "1C", "2A", "2B", "2C", "3A", "3B", "3C", "4A", "4B", "4C", "5A", "5B", "5C", "6A", "6B", "6C", "7A"], reservedSeats: [] },
        rating: 4.4, reviewsCount: 330
    },
    {
        id: "BUS00300",
        operator: "Deccan Express",
        route: { source: "Hyderabad", destination: "Pune", via: ["Solapur"] },
        schedule: { departureTime: "2025-11-18T21:45:00", arrivalTime: "2025-11-19T06:15:00", durationMin: 510 },
        fare: 950, seatsAvailable: 8, capacity: 40, busType: "Non-AC Seater",
        amenities: ["Blanket", "Pillow"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-11-18T21:45:00" }],
        dropPoints: [{ name: "Pune", time: "2025-11-19T06:15:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B", "3C", "3D", "4A", "4B", "4C", "4D", "5A", "5B", "5C", "5D", "6A", "6B", "6C", "6D", "7A", "7B", "7C", "7D", "8A", "8B", "8C", "8D"], reservedSeats: [] },
        rating: 3.5, reviewsCount: 160
    },
    {
        id: "BUS00301",
        operator: "Sunrise Coaches",
        route: { source: "Hyderabad", destination: "Bangalore", via: ["Kurnool", "Anantapur"] },
        schedule: { departureTime: "2025-11-18T20:30:00", arrivalTime: "2025-11-19T06:00:00", durationMin: 570 },
        fare: 900, seatsAvailable: 17, capacity: 40, busType: "Non-AC Seater",
        amenities: ["Charging Port", "Reading Light", "Water Bottle", "Live Tracking"],
        boardingPoints: [{ name: "Hyderabad", time: "2025-11-18T20:30:00" }],
        dropPoints: [{ name: "Bangalore", time: "2025-11-19T06:00:00" }],
        seatLayout: { rows: 10, columns: 4, layoutType: "2+2", bookedSeats: ["1A", "2B", "3C", "4D", "5A", "6B", "7C", "8D", "9A", "1B", "2C", "3D", "4A", "5B", "6C", "7D", "8A", "9B", "1C", "2D", "3A", "4B", "5C"], reservedSeats: [] },
        rating: 4.2, reviewsCount: 240
    }
];


// ==========================================================
// 🧩 Phase 2: DOM MANIPULATION - Dynamic Bus Search & Rendering
// ==========================================================

searchBtn.addEventListener('click', () => {

    const from = fromInput.value.trim().toLowerCase();
    const to = toInput.value.trim().toLowerCase();

    // Clearing previous search results (DOM Manipulation: remove old nodes)
    busResults.innerHTML = '';

    if (!from || !to) {
        alert("⚠️ Please enter both 'From' and 'To' cities!");
        return;
    }

    // Filter buses matching route
    const filtered = buses.filter(
        bus => bus.route.source.toLowerCase() === from && bus.route.destination.toLowerCase() === to
    );

    if (filtered.length === 0) {
        busResults.innerHTML = `<p class="text-center text-red-500 font-medium">❌ No buses found for ${fromInput.value} → ${toInput.value}</p>`;
        return;
    }

    console.log(filtered);

    // Loop through buses and create dynamic cards
    filtered.forEach(bus => {
        // Create a parent container dynamically
        const busCard = document.createElement('div');
        busCard.className = "bg-white p-5 mb-5 rounded-lg shadow-md border hover:shadow-lg transition buscard";

        // Using innerHTML to inject formatted dynamic content (DOM Manipulation)
        busCard.innerHTML = `
      <div class="flex justify-between items-center">
        <div>
          <h2 class="text-lg font-bold text-blue-600">${bus.operator}</h2>
          <p class="text-sm text-gray-500">${bus.busType}</p>
          <p class="text-gray-600">🕗 ${new Date(bus.schedule.departureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} → 
          ${new Date(bus.schedule.arrivalTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
        <div class="text-right">
          <p class="font-semibold text-lg text-green-600">₹${bus.fare}</p>
          <p class="text-sm text-gray-500">${bus.capacity} Seats</p>
        </div>
      </div>

      <div class="mt-3 flex flex-wrap gap-2 text-sm">
        ${bus.amenities.map(a => `<span class="bg-gray-100 border px-2 py-1 rounded">${a}</span>`).join('')}
      </div>

      <div class="mt-4 flex items-center justify-between">
        <div class="flex items-center text-yellow-500">⭐ ${bus.rating}</div>
        <button class="viewSeatsBtn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">View Seats</button>
      </div>

      <div class="seatLayout hidden mt-4 grid grid-cols-8 gap-2"></div>
    `;

        // Add the new bus card to DOM
        busResults.appendChild(busCard);

        // ==========================================================
        // 🎟️ Phase 3: DOM ATTRIBUTE MANIPULATION - Seat Selection
        // ==========================================================
        const seatLayout = busCard.querySelector('.seatLayout');
        const viewSeatsBtn = busCard.querySelector('.viewSeatsBtn');

        viewSeatsBtn.addEventListener('click', () => {
            seatLayout.classList.toggle('hidden'); // toggling visibility

            seatLayout.innerHTML = ''; // clear previous seats

            // Generate seats dynamically
            for (let i = 1; i <= bus.capacity; i++) {
                const seat = document.createElement('div');
                seat.className = "seat bg-gray-200 w-10 h-10 text-center leading-10 rounded cursor-pointer text-sm";
                seat.innerText = i;

                // Randomly mark some seats as already booked (Attribute Manipulation)
                if (Math.random() < 0.25) {
                    seat.classList.add('bg-gray-500', 'text-white', 'cursor-not-allowed');
                    seat.setAttribute('data-booked', 'true');
                } else {
                    seat.setAttribute('data-booked', 'false');
                }

                seatLayout.appendChild(seat);
            }

            const seats = seatLayout.querySelectorAll('.seat');
            const selected = [];

            seats.forEach(seat => {
                seat.addEventListener('click', () => {
                    if (seat.getAttribute('data-booked') === 'true') return; // Prevent clicking booked seat

                    // Toggle seat selection state visually
                    seat.classList.toggle('bg-green-500');
                    seat.classList.toggle('text-white');

                    // Toggle seat’s data-selected attribute (Attribute Manipulation)
                    const isSelected = seat.getAttribute('data-selected') === 'true';
                    seat.setAttribute('data-selected', isSelected ? 'false' : 'true');

                    const seatNum = seat.innerText;

                    if (selected.includes(seatNum)) {
                        selected.splice(selected.indexOf(seatNum), 1);
                    } else {
                        selected.push(seatNum);
                    }

                    // Update summary panel dynamically
                    if (selected.length > 0) {
                        bookingSummary.classList.remove('hidden');
                        busNameSummary.innerText = bus.operator;
                        busTypeSummary.innerText = bus.busType;
                        travelTimeSummary.innerText = `🕒 ${new Date(bus.schedule.departureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} → ${new Date(bus.schedule.arrivalTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
                        selectedSeatsText.innerText = `Seats: ${selected.join(', ')}`;
                        totalFareText.innerText = `Total Fare: ₹${selected.length * bus.fare}`;
                    } else {
                        bookingSummary.classList.add('hidden');
                    }

                    // Confirm booking updates seat attributes permanently
                    confirmBooking.onclick = () => {
                        selected.forEach(num => {
                            const s = Array.from(seats).find(seat => seat.innerText === num);
                            s.classList.remove('bg-green-500');
                            s.classList.add('bg-gray-500', 'cursor-not-allowed');
                            s.setAttribute('data-booked', 'true');
                            s.setAttribute('data-selected', 'false');
                        });

                        alert(`✅ ${bus.operator} - ${selected.length} seat(s) booked successfully!`);
                        selected.splice(0); // clear selected
                        bookingSummary.classList.add('hidden');
                    };
                });
            });
        });
    });
});
// ==========================================================
// 🧩 Phase 3: Adding Filter via Radio
// ==========================================================
acSeater.addEventListener('click', () => {
    const from = fromInput.value.trim().toLowerCase();
    const to = toInput.value.trim().toLowerCase();
    busResults.innerHTML = '';

    if (!from || !to) {
        alert("⚠️ Please enter both 'From' and 'To' cities before filtering!");
        acSeater.checked = false;
        return;
    }

    const filtered = buses.filter(bus =>
        bus.route.source.toLowerCase() === from &&
        bus.route.destination.toLowerCase() === to &&
        bus.busType.toLowerCase() === 'ac seater'
    );

    if (filtered.length === 0) {
        busResults.innerHTML = `<p class="text-center text-red-500 font-medium">❌ No AC Seater buses found for ${fromInput.value} → ${toInput.value}</p>`;
        return;
    }

    // This is the same rendering logic from your search button
    filtered.forEach(bus => {
        const busCard = document.createElement('div');
        busCard.className = "bg-white p-5 mb-5 rounded-lg shadow-md border hover:shadow-lg transition buscard";
        busCard.innerHTML = `
        <div class="flex justify-between items-center">
            <div>
                <h2 class="text-lg font-bold text-blue-600">${bus.operator}</h2>
                <p class="text-sm text-gray-500">${bus.busType}</p>
                <p class="text-gray-600">🕗 ${new Date(bus.schedule.departureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} → 
                ${new Date(bus.schedule.arrivalTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
            <div class="text-right">
                <p class="font-semibold text-lg text-green-600">₹${bus.fare}</p>
                <p class="text-sm text-gray-500">${bus.capacity} Seats</p>
            </div>
        </div>
        <div class="mt-3 flex flex-wrap gap-2 text-sm">${bus.amenities.map(a => `<span class="bg-gray-100 border px-2 py-1 rounded">${a}</span>`).join('')}</div>
        <div class="mt-4 flex items-center justify-between">
            <div class="flex items-center text-yellow-500">⭐ ${bus.rating}</div>
            <button class="viewSeatsBtn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">View Seats</button>
        </div>
        <div class="seatLayout hidden mt-4 grid grid-cols-8 gap-2"></div>`;
        busResults.appendChild(busCard);
        const seatLayout = busCard.querySelector('.seatLayout');
        const viewSeatsBtn = busCard.querySelector('.viewSeatsBtn');
        viewSeatsBtn.addEventListener('click', () => {
            seatLayout.classList.toggle('hidden');
            seatLayout.innerHTML = '';
            for (let i = 1; i <= bus.capacity; i++) {
                const seat = document.createElement('div');
                seat.className = "seat bg-gray-200 w-10 h-10 text-center leading-10 rounded cursor-pointer text-sm";
                seat.innerText = i;
                if (Math.random() < 0.25) {
                    seat.classList.add('bg-gray-500', 'text-white', 'cursor-not-allowed');
                    seat.setAttribute('data-booked', 'true');
                } else {
                    seat.setAttribute('data-booked', 'false');
                }
                seatLayout.appendChild(seat);
            }
            const seats = seatLayout.querySelectorAll('.seat');
            const selected = [];
            seats.forEach(seat => {
                seat.addEventListener('click', () => {
                    if (seat.getAttribute('data-booked') === 'true') return;
                    seat.classList.toggle('bg-green-500');
                    seat.classList.toggle('text-white');
                    const isSelected = seat.getAttribute('data-selected') === 'true';
                    seat.setAttribute('data-selected', isSelected ? 'false' : 'true');
                    const seatNum = seat.innerText;
                    if (selected.includes(seatNum)) {
                        selected.splice(selected.indexOf(seatNum), 1);
                    } else {
                        selected.push(seatNum);
                    }
                    if (selected.length > 0) {
                        bookingSummary.classList.remove('hidden');
                        busNameSummary.innerText = bus.operator;
                        busTypeSummary.innerText = bus.busType;
                        travelTimeSummary.innerText = `🕒 ${new Date(bus.schedule.departureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} → ${new Date(bus.schedule.arrivalTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
                        selectedSeatsText.innerText = `Seats: ${selected.join(', ')}`;
                        totalFareText.innerText = `Total Fare: ₹${selected.length * bus.fare}`;
                    } else {
                        bookingSummary.classList.add('hidden');
                    }
                    confirmBooking.onclick = () => {
                        selected.forEach(num => {
                            const s = Array.from(seats).find(seat => seat.innerText === num);
                            s.classList.remove('bg-green-500');
                            s.classList.add('bg-gray-500', 'cursor-not-allowed');
                            s.setAttribute('data-booked', 'true');
                            s.setAttribute('data-selected', 'false');
                        });
                        alert(`✅ ${bus.operator} - ${selected.length} seat(s) booked successfully!`);
                        selected.splice(0);
                        bookingSummary.classList.add('hidden');
                    };
                });
            });
        });
    });
});

acSleeper.addEventListener('click', () => {
    const from = fromInput.value.trim().toLowerCase();
    const to = toInput.value.trim().toLowerCase();
    busResults.innerHTML = '';

    if (!from || !to) {
        alert("⚠️ Please enter both 'From' and 'To' cities before filtering!");
        acSleeper.checked = false;
        return;
    }

    // The filter now also checks for busType that INCLUDES 'AC' and 'Sleeper'
    // This will match "Non-AC Sleeper", " Non-AC Sleeper", etc.
    const filtered = buses.filter(bus =>
        bus.route.source.toLowerCase() === from &&
        bus.route.destination.toLowerCase() === to &&
        bus.busType.toLowerCase() === "ac sleeper"
    );

    if (filtered.length === 0) {
        busResults.innerHTML = `<p class="text-center text-red-500 font-medium">❌ No AC Sleeper buses found for ${fromInput.value} → ${toInput.value}</p>`;
        return;
    }

    // This is the same rendering logic from your search button
    filtered.forEach(bus => {
        const busCard = document.createElement('div');
        busCard.className = "bg-white p-5 mb-5 rounded-lg shadow-md border hover:shadow-lg transition buscard";
        busCard.innerHTML = `
        <div class="flex justify-between items-center">
            <div>
                <h2 class="text-lg font-bold text-blue-600">${bus.operator}</h2>
                <p class="text-sm text-gray-500">${bus.busType}</p>
                <p class="text-gray-600">🕗 ${new Date(bus.schedule.departureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} → 
                ${new Date(bus.schedule.arrivalTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
            <div class="text-right">
                <p class="font-semibold text-lg text-green-600">₹${bus.fare}</p>
                <p class="text-sm text-gray-500">${bus.capacity} Seats</p>
            </div>
        </div>
        <div class="mt-3 flex flex-wrap gap-2 text-sm">${bus.amenities.map(a => `<span class="bg-gray-100 border px-2 py-1 rounded">${a}</span>`).join('')}</div>
        <div class="mt-4 flex items-center justify-between">
            <div class="flex items-center text-yellow-500">⭐ ${bus.rating}</div>
            <button class="viewSeatsBtn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">View Seats</button>
        </div>
        <div class="seatLayout hidden mt-4 grid grid-cols-8 gap-2"></div>`;
        busResults.appendChild(busCard);
        const seatLayout = busCard.querySelector('.seatLayout');
        const viewSeatsBtn = busCard.querySelector('.viewSeatsBtn');
        viewSeatsBtn.addEventListener('click', () => {
            seatLayout.classList.toggle('hidden');
            seatLayout.innerHTML = '';
            for (let i = 1; i <= bus.capacity; i++) {
                const seat = document.createElement('div');
                seat.className = "seat bg-gray-200 w-10 h-10 text-center leading-10 rounded cursor-pointer text-sm";
                seat.innerText = i;
                if (Math.random() < 0.25) {
                    seat.classList.add('bg-gray-500', 'text-white', 'cursor-not-allowed');
                    seat.setAttribute('data-booked', 'true');
                } else {
                    seat.setAttribute('data-booked', 'false');
                }
                seatLayout.appendChild(seat);
            }
            const seats = seatLayout.querySelectorAll('.seat');
            const selected = [];
            seats.forEach(seat => {
                seat.addEventListener('click', () => {
                    if (seat.getAttribute('data-booked') === 'true') return;
                    seat.classList.toggle('bg-green-500');
                    seat.classList.toggle('text-white');
                    const isSelected = seat.getAttribute('data-selected') === 'true';
                    seat.setAttribute('data-selected', isSelected ? 'false' : 'true');
                    const seatNum = seat.innerText;
                    if (selected.includes(seatNum)) {
                        selected.splice(selected.indexOf(seatNum), 1);
                    } else {
                        selected.push(seatNum);
                    }
                    if (selected.length > 0) {
                        bookingSummary.classList.remove('hidden');
                        busNameSummary.innerText = bus.operator;
                        busTypeSummary.innerText = bus.busType;
                        travelTimeSummary.innerText = `🕒 ${new Date(bus.schedule.departureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} → ${new Date(bus.schedule.arrivalTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
                        selectedSeatsText.innerText = `Seats: ${selected.join(', ')}`;
                        totalFareText.innerText = `Total Fare: ₹${selected.length * bus.fare}`;
                    } else {
                        bookingSummary.classList.add('hidden');
                    }
                    confirmBooking.onclick = () => {
                        selected.forEach(num => {
                            const s = Array.from(seats).find(seat => seat.innerText === num);
                            s.classList.remove('bg-green-500');
                            s.classList.add('bg-gray-500', 'cursor-not-allowed');
                            s.setAttribute('data-booked', 'true');
                            s.setAttribute('data-selected', 'false');
                        });
                        alert(`✅ ${bus.operator} - ${selected.length} seat(s) booked successfully!`);
                        selected.splice(0);
                        bookingSummary.classList.add('hidden');
                    };
                });
            });
        });
    });
});

nonAcSeater.addEventListener('click', () => {
    const from = fromInput.value.trim().toLowerCase();
    const to = toInput.value.trim().toLowerCase();
    busResults.innerHTML = '';

    if (!from || !to) {
        alert("⚠️ Please enter both 'From' and 'To' cities before filtering!");
        nonAcSeater.checked = false;
        return;
    }

    const filtered = buses.filter(bus =>
        bus.route.source.toLowerCase() === from &&
        bus.route.destination.toLowerCase() === to &&
        bus.busType.toLowerCase() === 'non-ac seater'
    );

    if (filtered.length === 0) {
        busResults.innerHTML = `<p class="text-center text-red-500 font-medium">❌ No Non-AC Seater buses found for ${fromInput.value} → ${toInput.value}</p>`;
        return;
    }

    // This is the same rendering logic from your search button
    filtered.forEach(bus => {
        const busCard = document.createElement('div');
        busCard.className = "bg-white p-5 mb-5 rounded-lg shadow-md border hover:shadow-lg transition buscard";
        busCard.innerHTML = `
        <div class="flex justify-between items-center">
            <div>
                <h2 class="text-lg font-bold text-blue-600">${bus.operator}</h2>
                <p class="text-sm text-gray-500">${bus.busType}</p>
                <p class="text-gray-600">🕗 ${new Date(bus.schedule.departureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} → 
                ${new Date(bus.schedule.arrivalTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
            <div class="text-right">
                <p class="font-semibold text-lg text-green-600">₹${bus.fare}</p>
                <p class="text-sm text-gray-500">${bus.capacity} Seats</p>
            </div>
        </div>
        <div class="mt-3 flex flex-wrap gap-2 text-sm">${bus.amenities.map(a => `<span class="bg-gray-100 border px-2 py-1 rounded">${a}</span>`).join('')}</div>
        <div class="mt-4 flex items-center justify-between">
            <div class="flex items-center text-yellow-500">⭐ ${bus.rating}</div>
            <button class="viewSeatsBtn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">View Seats</button>
        </div>
        <div class="seatLayout hidden mt-4 grid grid-cols-8 gap-2"></div>`;
        busResults.appendChild(busCard);
        const seatLayout = busCard.querySelector('.seatLayout');
        const viewSeatsBtn = busCard.querySelector('.viewSeatsBtn');
        viewSeatsBtn.addEventListener('click', () => {
            seatLayout.classList.toggle('hidden');
            seatLayout.innerHTML = '';
            for (let i = 1; i <= bus.capacity; i++) {
                const seat = document.createElement('div');
                seat.className = "seat bg-gray-200 w-10 h-10 text-center leading-10 rounded cursor-pointer text-sm";
                seat.innerText = i;
                if (Math.random() < 0.25) {
                    seat.classList.add('bg-gray-500', 'text-white', 'cursor-not-allowed');
                    seat.setAttribute('data-booked', 'true');
                } else {
                    seat.setAttribute('data-booked', 'false');
                }
                seatLayout.appendChild(seat);
            }
            const seats = seatLayout.querySelectorAll('.seat');
            const selected = [];
            seats.forEach(seat => {
                seat.addEventListener('click', () => {
                    if (seat.getAttribute('data-booked') === 'true') return;
                    seat.classList.toggle('bg-green-500');
                    seat.classList.toggle('text-white');
                    const isSelected = seat.getAttribute('data-selected') === 'true';
                    seat.setAttribute('data-selected', isSelected ? 'false' : 'true');
                    const seatNum = seat.innerText;
                    if (selected.includes(seatNum)) {
                        selected.splice(selected.indexOf(seatNum), 1);
                    } else {
                        selected.push(seatNum);
                    }
                    if (selected.length > 0) {
                        bookingSummary.classList.remove('hidden');
                        busNameSummary.innerText = bus.operator;
                        busTypeSummary.innerText = bus.busType;
                        travelTimeSummary.innerText = `🕒 ${new Date(bus.schedule.departureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} → ${new Date(bus.schedule.arrivalTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
                        selectedSeatsText.innerText = `Seats: ${selected.join(', ')}`;
                        totalFareText.innerText = `Total Fare: ₹${selected.length * bus.fare}`;
                    } else {
                        bookingSummary.classList.add('hidden');
                    }
                    confirmBooking.onclick = () => {
                        selected.forEach(num => {
                            const s = Array.from(seats).find(seat => seat.innerText === num);
                            s.classList.remove('bg-green-500');
                            s.classList.add('bg-gray-500', 'cursor-not-allowed');
                            s.setAttribute('data-booked', 'true');
                            s.setAttribute('data-selected', 'false');
                        });
                        alert(`✅ ${bus.operator} - ${selected.length} seat(s) booked successfully!`);
                        selected.splice(0);
                        bookingSummary.classList.add('hidden');
                    };
                });
            });
        });
    });
});

nonAcSleeper.addEventListener('click', () => {
    const from = fromInput.value.trim().toLowerCase();
    const to = toInput.value.trim().toLowerCase();
    busResults.innerHTML = '';

    if (!from || !to) {
        alert("⚠️ Please enter both 'From' and 'To' cities before filtering!");
        nonAcSleeper.checked = false;
        return;
    }

    const filtered = buses.filter(bus =>
        bus.route.source.toLowerCase() === from &&
        bus.route.destination.toLowerCase() === to &&
        bus.busType.toLowerCase() === 'non-ac sleeper'
    );

    if (filtered.length === 0) {
        busResults.innerHTML = `<p class="text-center text-red-500 font-medium">❌ No Non-AC Sleeper buses found for ${fromInput.value} → ${toInput.value}</p>`;
        return;
    }

    // This is the same rendering logic from your search button
    filtered.forEach(bus => {
        const busCard = document.createElement('div');
        busCard.className = "bg-white p-5 mb-5 rounded-lg shadow-md border hover:shadow-lg transition buscard";
        busCard.innerHTML = `
        <div class="flex justify-between items-center">
            <div>
                <h2 class="text-lg font-bold text-blue-600">${bus.operator}</h2>
                <p class="text-sm text-gray-500">${bus.busType}</p>
                <p class="text-gray-600">🕗 ${new Date(bus.schedule.departureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} → 
                ${new Date(bus.schedule.arrivalTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
            <div class="text-right">
                <p class="font-semibold text-lg text-green-600">₹${bus.fare}</p>
                <p class="text-sm text-gray-500">${bus.capacity} Seats</p>
            </div>
        </div>
        <div class="mt-3 flex flex-wrap gap-2 text-sm">${bus.amenities.map(a => `<span class="bg-gray-100 border px-2 py-1 rounded">${a}</span>`).join('')}</div>
        <div class="mt-4 flex items-center justify-between">
            <div class="flex items-center text-yellow-500">⭐ ${bus.rating}</div>
            <button class="viewSeatsBtn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">View Seats</button>
        </div>
        <div class="seatLayout hidden mt-4 grid grid-cols-8 gap-2"></div>`;
        busResults.appendChild(busCard);
        const seatLayout = busCard.querySelector('.seatLayout');
        const viewSeatsBtn = busCard.querySelector('.viewSeatsBtn');
        viewSeatsBtn.addEventListener('click', () => {
            seatLayout.classList.toggle('hidden');
            seatLayout.innerHTML = '';
            for (let i = 1; i <= bus.capacity; i++) {
                const seat = document.createElement('div');
                seat.className = "seat bg-gray-200 w-10 h-10 text-center leading-10 rounded cursor-pointer text-sm";
                seat.innerText = i;
                if (Math.random() < 0.25) {
                    seat.classList.add('bg-gray-500', 'text-white', 'cursor-not-allowed');
                    seat.setAttribute('data-booked', 'true');
                } else {
                    seat.setAttribute('data-booked', 'false');
                }
                seatLayout.appendChild(seat);
            }
            const seats = seatLayout.querySelectorAll('.seat');
            const selected = [];
            seats.forEach(seat => {
                seat.addEventListener('click', () => {
                    if (seat.getAttribute('data-booked') === 'true') return;
                    seat.classList.toggle('bg-green-500');
                    seat.classList.toggle('text-white');
                    const isSelected = seat.getAttribute('data-selected') === 'true';
                    seat.setAttribute('data-selected', isSelected ? 'false' : 'true');
                    const seatNum = seat.innerText;
                    if (selected.includes(seatNum)) {
                        selected.splice(selected.indexOf(seatNum), 1);
                    } else {
                        selected.push(seatNum);
                    }
                    if (selected.length > 0) {
                        bookingSummary.classList.remove('hidden');
                        busNameSummary.innerText = bus.operator;
                        busTypeSummary.innerText = bus.busType;
                        travelTimeSummary.innerText = `🕒 ${new Date(bus.schedule.departureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} → ${new Date(bus.schedule.arrivalTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
                        selectedSeatsText.innerText = `Seats: ${selected.join(', ')}`;
                        totalFareText.innerText = `Total Fare: ₹${selected.length * bus.fare}`;
                    } else {
                        bookingSummary.classList.add('hidden');
                    }
                    confirmBooking.onclick = () => {
                        selected.forEach(num => {
                            const s = Array.from(seats).find(seat => seat.innerText === num);
                            s.classList.remove('bg-green-500');
                            s.classList.add('bg-gray-500', 'cursor-not-allowed');
                            s.setAttribute('data-booked', 'true');
                            s.setAttribute('data-selected', 'false');
                        });
                        alert(`✅ ${bus.operator} - ${selected.length} seat(s) booked successfully!`);
                        selected.splice(0);
                        bookingSummary.classList.add('hidden');
                    };
                });
            });
        });
    });
});

priceLvl.addEventListener('click', () => {
    const from = fromInput.value.trim().toLowerCase();
    const to = toInput.value.trim().toLowerCase();
    busResults.innerHTML = '';

    if (!from || !to) {
        alert("⚠️ Please enter both 'From' and 'To' cities before filtering!");
        priceLvl.checked = false;
        return;
    }

    const filtered = buses.filter(bus =>
        bus.route.source.toLowerCase() === from &&
        bus.route.destination.toLowerCase() === to &&
        bus.fare < 900
    );

    if (filtered.length === 0) {
        busResults.innerHTML = `<p class="text-center text-red-500 font-medium">❌ No buses found below ₹900 for ${fromInput.value} → ${toInput.value}</p>`;
        return;
    }

    // This is the same rendering logic from your search button
    filtered.forEach(bus => {
        const busCard = document.createElement('div');
        busCard.className = "bg-white p-5 mb-5 rounded-lg shadow-md border hover:shadow-lg transition buscard";
        busCard.innerHTML = `
        <div class="flex justify-between items-center">
            <div>
                <h2 class="text-lg font-bold text-blue-600">${bus.operator}</h2>
                <p class="text-sm text-gray-500">${bus.busType}</p>
                <p class="text-gray-600">🕗 ${new Date(bus.schedule.departureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} → 
                ${new Date(bus.schedule.arrivalTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
            <div class="text-right">
                <p class="font-semibold text-lg text-green-600">₹${bus.fare}</p>
                <p class="text-sm text-gray-500">${bus.capacity} Seats</p>
            </div>
        </div>
        <div class="mt-3 flex flex-wrap gap-2 text-sm">${bus.amenities.map(a => `<span class="bg-gray-100 border px-2 py-1 rounded">${a}</span>`).join('')}</div>
        <div class="mt-4 flex items-center justify-between">
            <div class="flex items-center text-yellow-500">⭐ ${bus.rating}</div>
            <button class="viewSeatsBtn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">View Seats</button>
        </div>
        <div class="seatLayout hidden mt-4 grid grid-cols-8 gap-2"></div>`;
        busResults.appendChild(busCard);
        const seatLayout = busCard.querySelector('.seatLayout');
        const viewSeatsBtn = busCard.querySelector('.viewSeatsBtn');
        viewSeatsBtn.addEventListener('click', () => {
            seatLayout.classList.toggle('hidden');
            seatLayout.innerHTML = '';
            for (let i = 1; i <= bus.capacity; i++) {
                const seat = document.createElement('div');
                seat.className = "seat bg-gray-200 w-10 h-10 text-center leading-10 rounded cursor-pointer text-sm";
                seat.innerText = i;
                if (Math.random() < 0.25) {
                    seat.classList.add('bg-gray-500', 'text-white', 'cursor-not-allowed');
                    seat.setAttribute('data-booked', 'true');
                } else {
                    seat.setAttribute('data-booked', 'false');
                }
                seatLayout.appendChild(seat);
            }
            const seats = seatLayout.querySelectorAll('.seat');
            const selected = [];
            seats.forEach(seat => {
                seat.addEventListener('click', () => {
                    if (seat.getAttribute('data-booked') === 'true') return;
                    seat.classList.toggle('bg-green-500');
                    seat.classList.toggle('text-white');
                    const isSelected = seat.getAttribute('data-selected') === 'true';
                    seat.setAttribute('data-selected', isSelected ? 'false' : 'true');
                    const seatNum = seat.innerText;
                    if (selected.includes(seatNum)) {
                        selected.splice(selected.indexOf(seatNum), 1);
                    } else {
                        selected.push(seatNum);
                    }
                    if (selected.length > 0) {
                        bookingSummary.classList.remove('hidden');
                        busNameSummary.innerText = bus.operator;
                        busTypeSummary.innerText = bus.busType;
                        travelTimeSummary.innerText = `🕒 ${new Date(bus.schedule.departureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} → ${new Date(bus.schedule.arrivalTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
                        selectedSeatsText.innerText = `Seats: ${selected.join(', ')}`;
                        totalFareText.innerText = `Total Fare: ₹${selected.length * bus.fare}`;
                    } else {
                        bookingSummary.classList.add('hidden');
                    }
                    confirmBooking.onclick = () => {
                        selected.forEach(num => {
                            const s = Array.from(seats).find(seat => seat.innerText === num);
                            s.classList.remove('bg-green-500');
                            s.classList.add('bg-gray-500', 'cursor-not-allowed');
                            s.setAttribute('data-booked', 'true');
                            s.setAttribute('data-selected', 'false');
                        });
                        alert(`✅ ${bus.operator} - ${selected.length} seat(s) booked successfully!`);
                        selected.splice(0);
                        bookingSummary.classList.add('hidden');
                    };
                });
            });
        });
    });
});

sortByRating.addEventListener('click', () => {
    const from = fromInput.value.trim().toLowerCase();
    const to = toInput.value.trim().toLowerCase();
    busResults.innerHTML = '';

    if (!from || !to) {
        alert("⚠️ Please enter both 'From' and 'To' cities before filtering!");
        sortByRating.checked = false;
        return;
    }

    const filtered = buses.filter(bus =>
        bus.route.source.toLowerCase() === from &&
        bus.route.destination.toLowerCase() === to
    );

    // Sort the filtered results by rating, highest first
    filtered.sort((a, b) => b.rating - a.rating);

    if (filtered.length === 0) {
        // This message should not appear if search works, but it's good practice to keep it
        busResults.innerHTML = `<p class="text-center text-red-500 font-medium">❌ No buses found for ${fromInput.value} → ${toInput.value}</p>`;
        return;
    }

    // This is the same rendering logic from your search button
    filtered.forEach(bus => {
        const busCard = document.createElement('div');
        busCard.className = "bg-white p-5 mb-5 rounded-lg shadow-md border hover:shadow-lg transition buscard";
        busCard.innerHTML = `
        <div class="flex justify-between items-center">
            <div>
                <h2 class="text-lg font-bold text-blue-600">${bus.operator}</h2>
                <p class="text-sm text-gray-500">${bus.busType}</p>
                <p class="text-gray-600">🕗 ${new Date(bus.schedule.departureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} → 
                ${new Date(bus.schedule.arrivalTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
            <div class="text-right">
                <p class="font-semibold text-lg text-green-600">₹${bus.fare}</p>
                <p class="text-sm text-gray-500">${bus.capacity} Seats</p>
            </div>
        </div>
        <div class="mt-3 flex flex-wrap gap-2 text-sm">${bus.amenities.map(a => `<span class="bg-gray-100 border px-2 py-1 rounded">${a}</span>`).join('')}</div>
        <div class="mt-4 flex items-center justify-between">
            <div class="flex items-center text-yellow-500">⭐ ${bus.rating}</div>
            <button class="viewSeatsBtn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">View Seats</button>
        </div>
        <div class="seatLayout hidden mt-4 grid grid-cols-8 gap-2"></div>`;
        busResults.appendChild(busCard);
        const seatLayout = busCard.querySelector('.seatLayout');
        const viewSeatsBtn = busCard.querySelector('.viewSeatsBtn');
        viewSeatsBtn.addEventListener('click', () => {
            seatLayout.classList.toggle('hidden');
            seatLayout.innerHTML = '';
            for (let i = 1; i <= bus.capacity; i++) {
                const seat = document.createElement('div');
                seat.className = "seat bg-gray-200 w-10 h-10 text-center leading-10 rounded cursor-pointer text-sm";
                seat.innerText = i;
                if (Math.random() < 0.25) {
                    seat.classList.add('bg-gray-500', 'text-white', 'cursor-not-allowed');
                    seat.setAttribute('data-booked', 'true');
                } else {
                    seat.setAttribute('data-booked', 'false');
                }
                seatLayout.appendChild(seat);
            }
            const seats = seatLayout.querySelectorAll('.seat');
            const selected = [];
            seats.forEach(seat => {
                seat.addEventListener('click', () => {
                    if (seat.getAttribute('data-booked') === 'true') return;
                    seat.classList.toggle('bg-green-500');
                    seat.classList.toggle('text-white');
                    const isSelected = seat.getAttribute('data-selected') === 'true';
                    seat.setAttribute('data-selected', isSelected ? 'false' : 'true');
                    const seatNum = seat.innerText;
                    if (selected.includes(seatNum)) {
                        selected.splice(selected.indexOf(seatNum), 1);
                    } else {
                        selected.push(seatNum);
                    }
                    if (selected.length > 0) {
                        bookingSummary.classList.remove('hidden');
                        busNameSummary.innerText = bus.operator;
                        busTypeSummary.innerText = bus.busType;
                        travelTimeSummary.innerText = `🕒 ${new Date(bus.schedule.departureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} → ${new Date(bus.schedule.arrivalTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
                        selectedSeatsText.innerText = `Seats: ${selected.join(', ')}`;
                        totalFareText.innerText = `Total Fare: ₹${selected.length * bus.fare}`;
                    } else {
                        bookingSummary.classList.add('hidden');
                    }
                    confirmBooking.onclick = () => {
                        selected.forEach(num => {
                            const s = Array.from(seats).find(seat => seat.innerText === num);
                            s.classList.remove('bg-green-500');
                            s.classList.add('bg-gray-500', 'cursor-not-allowed');
                            s.setAttribute('data-booked', 'true');
                            s.setAttribute('data-selected', 'false');
                        });
                        alert(`✅ ${bus.operator} - ${selected.length} seat(s) booked successfully!`);
                        selected.splice(0);
                        bookingSummary.classList.add('hidden');
                    };
                });
            });
        });
    });
});
//===========================================================
//PHASE 3 END
//===========================================================
//===========================================================
// RESET RADIO
//===========================================================
resetBtn.addEventListener('click', () => {
    const rdiobtns = [
        acSeater,
        acSleeper,
        nonAcSeater,
        nonAcSleeper,
        priceLvl,
        sortByRating
    ];
    rdiobtns.forEach(radio => {
        radio.checked = false;
    });

});