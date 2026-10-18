import { RegistrationTier } from '../types';

export const pricingTiers: RegistrationTier[] = [
  {
    id: 'tier-early-bird',
    badge: 'LIMITED TIME',
    subBadge: 'Until Feb 28',
    title: 'Early Bird',
    description: 'Discounted pricing available for scholars and academicians registering in the initial phase.',
    prices: [
      {
        label: 'Students',
        amount: '₹1,000',
        period: '/person',
      },
      {
        label: 'Professionals / Academicians',
        amount: '₹1,500',
        period: '/person',
      },
    ],
    features: [
      'Full 2-day keynotes access',
      'Delegate welcome symposium kit',
      'Networking lunches & coffee sessions',
      'Digital proceeding abstracts',
    ],
  },
  {
    id: 'tier-regular',
    badge: 'STANDARD ACCESS',
    subBadge: 'Starts Mar 01',
    title: 'Regular',
    description: 'Standard symposium admission applicable across all delegates, universities, and industry.',
    prices: [
      {
        label: 'Students',
        amount: '₹1,500',
        period: '/person',
      },
      {
        label: 'Professionals / Academicians',
        amount: '₹2,000',
        period: '/person',
      },
    ],
    features: [
      'Complete symposium passes',
      'Formal participation certificate',
      'All meals & symposium gala reception',
      'Interactive demo zone entry pass',
    ],
    highlight: true,
  },
  {
    id: 'tier-members',
    badge: 'MEMBERS PRIVILEGE',
    title: 'HCIPAI Members',
    description: 'Exclusive subsidized tariff for valid members of HCIPAI Association of India.',
    prices: [
      {
        label: 'All Members (Flat Fee)',
        amount: '₹1,000',
        period: '/flat rate',
      },
    ],
    memberNotice: 'Active Member ID verified during checkout',
    features: [
      'Priority seating in Keynote Hall',
      'Guaranteed hands-on workshop seat',
      'Invitation to Annual General Meeting',
      'Full access to digital archives & kits',
    ],
  },
];
