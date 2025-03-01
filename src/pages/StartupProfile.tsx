import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Users, DollarSign, TrendingUp, Calendar } from 'lucide-react';
import { MetricsCard } from '../components/analytics/MetricsCard';
import { MetricsChart } from '../components/analytics/MetricsChart';
import { BookingModal } from '../components/booking/BookingModal';
import { startupDetails } from '../data/startupDetails';

export function StartupProfile() {
  const { id } = useParams<{ id: string }>();
  const [showBookingModal, setShowBookingModal] = useState(false);

  const startup = startupDetails[id || ''];

  if (!startup) {
    return <div>Startup not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
        <img
          src={startup.image}
          alt={startup.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{startup.title}</h1>
              <p className="text-gray-600 mb-4">{startup.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <Users className="w-4 h-4 mr-1" />
                <span>{startup.employees} employees</span>
                <span className="mx-2">•</span>
                <span>{startup.location}</span>
              </div>
            </div>
            <button
              onClick={() => setShowBookingModal(true)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Meeting
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricsCard
          title="Total Funding"
          value={`$${(startup.funding / 1000000).toFixed(1)}M`}
          change={15}
        />
        <MetricsCard
          title="Annual Revenue"
          value={`$${(startup.revenue / 1000000).toFixed(1)}M`}
          change={startup.growth}
          prefix="$"
        />
        <MetricsCard
          title="User Growth"
          value="+127%"
          change={32}
        />
        <MetricsCard
          title="Market Position"
          value="#2"
          change={1}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <MetricsChart
          data={startup.metrics.users}
          title="User Growth"
          color="#4F46E5"
        />
        <MetricsChart
          data={startup.metrics.revenue}
          title="Revenue Growth"
          color="#059669"
        />
        <MetricsChart
          data={startup.metrics.engagement}
          title="User Engagement"
          color="#DC2626"
        />
      </div>

      {showBookingModal && (
        <BookingModal
          startupName={startup.title}
          onClose={() => setShowBookingModal(false)}
        />
      )}
    </div>
  );
}
