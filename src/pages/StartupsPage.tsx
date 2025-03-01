import React, { useState, useMemo } from 'react';
import { PageHeader } from '../components/PageHeader';
import { FilterBar } from '../components/FilterBar';
import { ContentCard } from '../components/ContentCard';
import { startups } from '../data/startups';

export function StartupsPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => {
    const uniqueCategories = new Set(startups.map((startup) => startup.category));
    return Array.from(uniqueCategories);
  }, []);

  const filteredStartups = useMemo(() => {
    return startups.filter((startup) => {
      const matchesCategory = !selectedCategory || startup.category === selectedCategory;
      const matchesSearch = startup.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        startup.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div>
      <PageHeader
        title="Innovative Startups"
        description="Discover groundbreaking startups across various industries"
      />
      <div className="container mx-auto px-4">
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onSearchChange={setSearchQuery}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStartups.map((startup) => (
            <ContentCard key={startup.id} item={startup} />
          ))}
        </div>
      </div>
    </div>
  );
}
