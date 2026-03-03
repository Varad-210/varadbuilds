const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export interface BookingData {
  customerName: string;
  phoneNumber: string;
  email?: string;
  businessType: 'cafe' | 'restaurant' | 'salon' | 'clinic' | 'hotel' | 'realestate' | 'other';
  serviceType: 'ai-voice-agent' | 'pos-billing-qr' | 'pos-billing' | 'consultation';
  preferredDate: Date;
  preferredTime: string;
  city: string;
  monthlyCalls?: string;
  message?: string;
  source?: 'website' | 'phone' | 'whatsapp' | 'ai-agent';
}

export interface ContactData {
  name: string;
  phoneNumber: string;
  email?: string;
  businessType: 'cafe' | 'restaurant' | 'salon' | 'clinic' | 'hotel' | 'realestate' | 'other';
  city: string;
  monthlyCalls?: string;
  message?: string;
}

// Booking API
export const bookingAPI = {
  create: async (data: BookingData) => {
    const response = await fetch(`${API_BASE_URL}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  getAll: async (params?: { page?: number; limit?: number; status?: string; businessType?: string }) => {
    const queryParams = new URLSearchParams(params as any).toString();
    const response = await fetch(`${API_BASE_URL}/bookings?${queryParams}`);
    return response.json();
  },

  getById: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/bookings/${id}`);
    return response.json();
  },

  updateStatus: async (id: string, status: string) => {
    const response = await fetch(`${API_BASE_URL}/bookings/${id}/status`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });
    return response.json();
  },

  delete: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/bookings/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  },

  getStats: async () => {
    const response = await fetch(`${API_BASE_URL}/bookings/stats/overview`);
    return response.json();
  },
};

// Contact API
export const contactAPI = {
  create: async (data: ContactData) => {
    const response = await fetch(`${API_BASE_URL}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  getAll: async (params?: { page?: number; limit?: number; status?: string; businessType?: string }) => {
    const queryParams = new URLSearchParams(params as any).toString();
    const response = await fetch(`${API_BASE_URL}/contacts?${queryParams}`);
    return response.json();
  },

  updateStatus: async (id: string, status: string) => {
    const response = await fetch(`${API_BASE_URL}/contacts/${id}/status`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });
    return response.json();
  },
};
