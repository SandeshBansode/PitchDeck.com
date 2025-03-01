import { StartupDetails } from '../types';
import { startups } from './startups';

export const startupDetails: Record<string, StartupDetails> = {
  '1': {
    ...startups[0],
    founded: '2020-03-15',
    location: 'San Francisco, CA',
    employees: 45,
    funding: 5000000,
    revenue: 2000000,
    growth: 127,
    metrics: {
      users: [
        { date: '2023-01', value: 1000 },
        { date: '2023-02', value: 1500 },
        // Add more data points...
      ],
      revenue: [
        { date: '2023-01', value: 100000 },
        { date: '2023-02', value: 150000 },
        // Add more data points...
      ],
      engagement: [
        { date: '2023-01', value: 75 },
        { date: '2023-02', value: 82 },
        // Add more data points...
      ]
    }
  },
  // Add more startup details...
};