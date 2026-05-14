export interface Guest {
  id: number;
  name: string;
  email?: string;
}

export interface RsvpData {
  guest_name: string;
  attendance: 'yes' | 'no';
  message?: string;
}

export interface RsvpResponse {
  id: number;
  guest_name: string;
  attendance: string;
  message: string | null;
  created_at: string;
}

export interface RsvpFormData {
  fullName: string;
  attendMainDay: string; // 'yes' | 'maybe' | 'no'
  attendSecondDay: string; // 'yes_main_and_back' | 'yes_main_and_morning' | 'no_self' | 'not_decided'
  needTransfer: string; // 'yes_both' | 'yes_one_way' | 'no' | 'not_decided'
  alcoholPreferences: string[]; // multiple choice
  customAlcohol?: string;
}