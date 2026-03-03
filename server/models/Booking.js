const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true
  },
  businessType: {
    type: String,
    enum: ['cafe', 'restaurant', 'salon', 'clinic', 'hotel', 'realestate', 'other'],
    required: true
  },
  serviceType: {
    type: String,
    enum: ['ai-voice-agent', 'pos-billing-qr', 'pos-billing', 'consultation'],
    required: true
  },
  preferredDate: {
    type: Date,
    required: true
  },
  preferredTime: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  monthlyCalls: {
    type: String,
    trim: true
  },
  message: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending'
  },
  source: {
    type: String,
    enum: ['website', 'phone', 'whatsapp', 'ai-agent'],
    default: 'website'
  }
}, {
  timestamps: true
});

// Index for faster queries
bookingSchema.index({ phoneNumber: 1 });
bookingSchema.index({ preferredDate: 1 });
bookingSchema.index({ status: 1 });

module.exports = mongoose.model('Booking', bookingSchema);
