# VaradBuilds Backend Server

MongoDB-based backend for managing bookings and contact inquiries.

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure MongoDB

#### Option A: Local MongoDB
Install MongoDB locally and it will run on `mongodb://localhost:27017/varadbuilds`

#### Option B: MongoDB Atlas (Cloud - Recommended)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster
4. Get your connection string
5. Create `.env` file in the `server` folder:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/varadbuilds
PORT=5000
FRONTEND_URL=http://localhost:8080
```

### 3. Start the Server

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Bookings

- `POST /api/bookings` - Create new booking
- `GET /api/bookings` - Get all bookings (with pagination)
- `GET /api/bookings/:id` - Get booking by ID
- `PATCH /api/bookings/:id/status` - Update booking status
- `DELETE /api/bookings/:id` - Delete booking
- `GET /api/bookings/stats/overview` - Get booking statistics

### Contacts

- `POST /api/contacts` - Create new contact inquiry
- `GET /api/contacts` - Get all contacts (with pagination)
- `PATCH /api/contacts/:id/status` - Update contact status

### Health Check

- `GET /api/health` - Check if server is running

## Database Schema

### Booking Model
- customerName (required)
- phoneNumber (required)
- email
- businessType (cafe, restaurant, salon, clinic, hotel, realestate, other)
- serviceType (ai-voice-agent, pos-billing-qr, pos-billing, consultation)
- preferredDate (required)
- preferredTime (required)
- city (required)
- monthlyCalls
- message
- status (pending, confirmed, completed, cancelled)
- source (website, phone, whatsapp, ai-agent)
- timestamps (createdAt, updatedAt)

### Contact Model
- name (required)
- phoneNumber (required)
- email
- businessType (required)
- city (required)
- monthlyCalls
- message
- status (new, contacted, qualified, converted, closed)
- timestamps (createdAt, updatedAt)

## Frontend Integration

The frontend is configured to connect to the backend API. Make sure to:

1. Start the backend server first
2. The frontend will automatically connect to `http://localhost:5000/api`
3. All bookings from the website will be saved to MongoDB

## Testing the API

You can test the API using tools like:
- Postman
- Thunder Client (VS Code extension)
- curl commands

Example:
```bash
curl http://localhost:5000/api/health
```

## Production Deployment

For production, consider:
1. Use MongoDB Atlas for database
2. Deploy backend to services like:
   - Heroku
   - Railway
   - Render
   - DigitalOcean
3. Update FRONTEND_URL in .env to your production domain
4. Update VITE_API_URL in frontend .env to your backend URL
