const transportOptions = [
    {
        id: 'air-1',
        type: 'air',
        name: 'Express Airways',
        description: 'Domestic flights connecting major cities with comfort and speed.',
        imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
        prices: {
            luxury: 15000,
            normal: 8000
        }
    },
    {
        id: 'air-2',
        type: 'air',
        name: 'Luxury Air',
        description: 'Premium air travel experience with exclusive services.',
        imageUrl: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b',
        prices: {
            luxury: 25000,
            normal: 12000
        }
    },
    {
        id: 'rail-1',
        type: 'rail',
        name: 'Metro Express',
        description: 'Modern railway service with comfortable seating and scenic routes.',
        imageUrl: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3',
        prices: {
            luxury: 3000,
            normal: 1000
        }
    },
    {
        id: 'rail-2',
        type: 'rail',
        name: 'Royal Rail',
        description: 'Luxury train travel with dining and sleeping accommodations.',
        imageUrl: 'https://images.unsplash.com/photo-1553773077-91673524aafa',
        prices: {
            luxury: 5000,
            normal: 2000
        }
    },
    {
        id: 'road-1',
        type: 'road',
        name: 'City Bus Service',
        description: 'Regular bus service covering all major city routes.',
        imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e',
        prices: {
            luxury: 500,
            normal: 200
        }
    },
    {
        id: 'road-2',
        type: 'road',
        name: 'Executive Coach',
        description: 'Luxury coach service with extra legroom and amenities.',
        imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957',
        prices: {
            luxury: 1500,
            normal: 800
        }
    }
];

function createTransportCard(transport) {
    return `
        <div class="transport-card">
            <img src="${transport.imageUrl}" alt="${transport.name}">
            <div class="card-content">
                <h3>${transport.name}</h3>
                <p>${transport.description}</p>
                <div class="price-info">
                    <p class="luxury-price">Luxury: KES ${transport.prices.luxury.toLocaleString()}</p>
                    <p class="normal-price">Normal: KES ${transport.prices.normal.toLocaleString()}</p>
                </div>
                <button onclick="bookTransport('${transport.id}')" class="book-btn">Book Now</button>
            </div>
        </div>
    `;
}

function loadTransportOptions() {
    const transportGrid = document.getElementById('transportGrid');
    if (transportGrid) {
        transportGrid.innerHTML = transportOptions.map(transport => createTransportCard(transport)).join('');
    }
}

function bookTransport(transportId) {
    const transport = transportOptions.find(t => t.id === transportId);
    if (transport) {
        alert(`Booking ${transport.name}. This feature will be implemented soon.`);
    }
}

// Load transport options when the page loads
document.addEventListener('DOMContentLoaded', loadTransportOptions);