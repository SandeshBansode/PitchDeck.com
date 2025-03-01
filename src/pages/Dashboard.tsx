import React from 'react';
import { BarChart2, Users, Briefcase, TrendingUp } from 'lucide-react';
import { ContentGrid } from '../components/ContentGrid';
import { startups } from '../data/startups';
import { investors } from '../data/investors';
import { incubators } from '../data/incubators';
import { courses } from '../data/courses';

const stats = [
  { title: 'Total Startups', value: '2,543', icon: Briefcase, change: '+12.5%' },
  { title: 'Active Investors', value: '1,234', icon: Users, change: '+8.2%' },
  { title: 'Total Investments', value: '$12.4M', icon: TrendingUp, change: '+15.3%' },
  { title: 'Success Rate', value: '94%', icon: BarChart2, change: '+4.5%' }
];

export function Dashboard() {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to PitchDeck</h1>
        <p className="text-lg text-gray-600 mb-8">startup ecosystem with AI—predict success, automate finances, and make data-driven decisions like never before.</p>
        <p className="text-lg text-gray-600 mb-8">Connect with innovative startups, investors, and resources to accelerate your growth.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="w-6 h-6 text-purple-600" />
                <span className="text-green-500 text-sm font-medium">{stat.change}</span>
              </div>
              <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
              <p className="text-2xl font-semibold text-gray-900 mt-1">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      <ContentGrid items={startups} title="Featured Startups" />
      <ContentGrid items={investors} title="Top Investors" />
      <ContentGrid items={incubators} title="Leading Incubators" />
      <ContentGrid items={courses} title="Popular Courses" />
      <ContentGrid items={courses} title="Finance ai" />
    </div>
  );
}
