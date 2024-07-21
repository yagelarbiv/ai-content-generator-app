"use client"
import SearchSection from './_components/SearchSection';
import TemplateListSection from './_components/TemplateListSection'
import { useState } from 'react';
function Page() {
  
  const [searchInput, setSearchInput] = useState<string>('');
  
  return (
    <div>
      {/* Search Section */}
      <SearchSection onSearchInput={setSearchInput} />

      {/* Template List Section */}
      <TemplateListSection searchInput={searchInput} />
    </div>
  );
};

export default Page;
