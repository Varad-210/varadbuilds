const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
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
    enum: ['new', 'contacted', 'qualified', 'converted', 'closed'],
    default: 'new'
  }
}, {
  timestamps: true
});

// Index for faster queries
contactSchema.index({ phoneNumber: 1 });
contactSchema.index({ status: 1 });

module.exports = mongoose.model('Contact', contactSchema);
