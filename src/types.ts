export type RoutePath = 
  | '/home'
  | '/schedule'
  | '/panel-members'
  | '/organizing-committee'
  | '/venue-contact';

export interface Speaker {
  id: string;
  name: string;
  designation: string;
  affiliation: string;
  roleCategory: 'Keynote Speaker' | 'Panelist' | 'Workshop Lead';
  imageUrl?: string;
  isTba?: boolean;
  topic?: string;
}

export interface ScheduleSession {
  id: string;
  day: 1 | 2;
  timeSlot: string;
  tag: string;
  tagType?: 'checkin' | 'keynote' | 'panel' | 'lunch' | 'workshop' | 'showcase' | 'colloquium';
  subTag?: string;
  location: string;
  title: string;
  description: string;
  speakerName?: string;
  speakerTitle?: string;
  speakerImage?: string;
  keyTakeaways?: string[];
  panellists?: {
    name: string;
    role: string;
    org: string;
    avatarInitials?: string;
  }[];
  workshops?: {
    track: string;
    location: string;
    title: string;
    description: string;
    facilitator: string;
    seats: string;
  }[];
  mentors?: {
    role: string;
    affiliation: string;
    isTba?: boolean;
  }[];
  kitInclusions?: string;
}

export interface CommitteePerson {
  id: string;
  name: string;
  role: string;
  category: 'leadership' | 'portfolio' | 'student';
  imageUrl?: string;
  isTba?: boolean;
  iconType?: 'helpdesk' | 'stream' | 'xr' | 'expo' | 'user';
}

export interface RegistrationTier {
  id: string;
  badge: string;
  subBadge?: string;
  title: string;
  description: string;
  prices: {
    label: string;
    amount: string;
    period: string;
  }[];
  features: string[];
  highlight?: boolean;
  memberNotice?: string;
}
