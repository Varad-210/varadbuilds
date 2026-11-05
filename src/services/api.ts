// VITE_API_URL is the API server origin; /api is appended here.
// BookDemo uses the same convention so the two stay in step.
const API_ORIGIN =
  import.meta.env.VITE_API_URL || 'https://varadbuilds-api.onrender.com';

const API_BASE_URL = `${API_ORIGIN.replace(/\/$/, '')}/api`;

// Exactly what the BookDemo form can submit.
export const SERVICE_TYPES = [
  'Website',
  'Custom Software',
  'Meta Ads',
  'Restaurant POS / QR Ordering',
  'Not sure yet',
] as const;

export type ServiceType = (typeof SERVICE_TYPES)[number];

export type BookingStatus = 'pending' | 'confirmed' | 'completed';

export type ContactStatus = 'new' | 'contacted' | 'closed';

export interface BookingData {
  customerName: string;
  phoneNumber: string;
  email?: string | null;
  businessName: string;
  serviceType: ServiceType;
  preferredDate: string;
  preferredTime: string;
  city: string;
  message?: string | null;
}

export interface ContactData {
  name: string;
  phoneNumber: string;
  email?: string | null;
  businessType: 'cafe' | 'restaurant' | 'salon' | 'clinic' | 'hotel' | 'realestate' | 'other';
  city: string;
  message?: string | null;
}

// Public submission surface used by site pages.
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
};

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
};

// Administrative operations. Every one of these requires the shared-secret
// x-admin-token header server-side, so they belong in an authenticated admin
// surface rather than in the public site bundle.
export const bookingAdminAPI = {
  getAll: async (params?: { page?: number; limit?: number; status?: BookingStatus; serviceType?: ServiceType }) => {
    const queryParams = new URLSearchParams(params as Record<string, string>).toString();
    const response = await fetch(`${API_BASE_URL}/bookings?${queryParams}`);
    return response.json();
  },

  getById: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/bookings/${id}`);
    return response.json();
  },

  updateStatus: async (id: string, status: BookingStatus) => {
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

export const contactAdminAPI = {
  getAll: async (params?: { page?: number; limit?: number; status?: ContactStatus; businessType?: ContactData['businessType'] }) => {
    const queryParams = new URLSearchParams(params as Record<string, string>).toString();
    const response = await fetch(`${API_BASE_URL}/contacts?${queryParams}`);
    return response.json();
  },

  updateStatus: async (id: string, status: ContactStatus) => {
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
