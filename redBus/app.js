// ==========================================================
// 🧠 Phase 1: DOM SELECTION - Identifying and Accessing Elements
// ==========================================================

// Using getElementById → most direct way to select elements by their ID
const fromInput = document.getElementById('fromCity');
const toInput = document.getElementById('toCity');
const searchBtn = document.getElementById('searchBtn');
const busResults = document.getElementById('busResults');

// Booking summary panel elements
const bookingSummary = document.getElementById('bookingSummary');
const busNameSummary = document.getElementById('busNameSummary');
const busTypeSummary = document.getElementById('busTypeSummary');
const travelTimeSummary = document.getElementById('travelTimeSummary');
const selectedSeatsText = document.getElementById('selectedSeats');
const totalFareText = document.getElementById('totalFare');
const confirmBooking = document.getElementById('confirmBooking');

// ==========================================================
// 🚌 Mock Data (Simulating a Real API response like RedBus)
// ==========================================================
const buses = [
    {
        id: "BUS0001",
        operator: "Express Travels",
        route: { source: "Hyderabad", destination: "Bangalore", via: ["Kurnool", "Anantapur"] },
        schedule: { departureTime: "2025-10-10T20:00:00", arrivalTime: "2025-10-11T05:30:00", durationMin: 570 },
        fare: 750, seatsAvailable: 12, capacity: 40, busType: "AC Sleeper",
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
        fare: 950, seatsAvailable: 20, capacity: 44, busType: "AC Sleeper",
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
        fare: 550, seatsAvailable: 18, capacity: 36, busType: "AC Seater",
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
        fare: 1100, seatsAvailable: 9, capacity: 30, busType: "Volvo Multi-Axle AC",
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
        fare: 650, seatsAvailable: 14, capacity: 24, busType: "AC Sleeper",
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
        fare: 680, seatsAvailable: 22, capacity: 40, busType: "AC Seater",
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
        fare: 890, seatsAvailable: 17, capacity: 36, busType: "AC Sleeper",
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
        fare: 1200, seatsAvailable: 11, capacity: 45, busType: "Volvo AC Sleeper",
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
        fare: 720, seatsAvailable: 20, capacity: 35, busType: "AC Sleeper",
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
        fare: 980, seatsAvailable: 15, capacity: 42, busType: "AC Sleeper",
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
        fare: 800, seatsAvailable: 21, capacity: 38, busType: "Volvo AC Sleeper",
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
        fare: 870, seatsAvailable: 16, capacity: 40, busType: "AC Sleeper",
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
        fare: 780, seatsAvailable: 12, capacity: 36, busType: "AC Sleeper",
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
        fare: 950, seatsAvailable: 10, capacity: 40, busType: "Volvo AC Sleeper",
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
        busCard.className = "bg-white p-5 mb-5 rounded-lg shadow-md border hover:shadow-lg transition";

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
