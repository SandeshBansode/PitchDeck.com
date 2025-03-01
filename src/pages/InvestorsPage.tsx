import React, { useState, useMemo } from 'react';
import { PageHeader } from '../components/PageHeader';
import { FilterBar } from '../components/FilterBar';
import { ContentCard } from '../components/ContentCard';
import { investors } from '../data/investors';

export function InvestorsPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => {
    const uniqueCategories = new Set(investors.map((investor) => investor.category));
    return Array.from(uniqueCategories);
  }, []);

  const filteredInvestors = useMemo(() => {
    return investors.filter((investor) => {
      const matchesCategory = !selectedCategory || investor.category === selectedCategory;
      const matchesSearch = investor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        investor.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div>
      <PageHeader
        title="Active Investors"
        description="Connect with leading investors and venture capital firms"
      />
      <div className="container mx-auto px-4">
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onSearchChange={setSearchQuery}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInvestors.map((investor) => (
            <ContentCard key={investor.id} item={investor} />
          ))}
        </div>
      </div>
    </div>
  );
}