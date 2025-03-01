import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ContentItem } from '../types';

interface ContentCardProps {
  item: ContentItem;
}

export function ContentCard({ item }: ContentCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-indigo-600 font-medium">{item.category}</span>
          <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
            <ExternalLink className="h-4 w-4 mr-1" />
            Learn More
          </button>
        </div>
      </div>
    </div>
    
  );
}
