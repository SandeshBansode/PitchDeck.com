import React from 'react';
import { ContentCard } from './ContentCard';
import { ContentItem } from '../types';

interface ContentGridProps {
  title: string;
  items: ContentItem[];
}

export function ContentGrid({ title, items }: ContentGridProps) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}