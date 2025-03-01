import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { FilterBar } from '../components/FilterBar';
import { ContentCard } from '../components/ContentCard';
import { incubators } from '../data/incubators';

export function IncubatorsPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => {
    const uniqueCategories = new Set(incubators.map((incubator) => incubator.category));
    return Array.from(uniqueCategories);
  }, []);

  const filteredIncubators = useMemo(() => {
    return incubators.filter((incubator) => {
      const matchesCategory = !selectedCategory || incubator.category === selectedCategory;
      const matchesSearch = incubator.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        incubator.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div>
      <PageHeader
        title="Startup Incubators"
        description="Find the perfect incubator to grow your startup"
      />
      <div className="container mx-auto px-4">
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onSearchChange={setSearchQuery}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIncubators.map((incubator) => (
            <ContentCard key={incubator.id} item={incubator} />
          ))}
        </div>
      </div>
    </div>
  );
}
