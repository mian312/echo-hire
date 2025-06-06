"use client"

import React, { useState } from "react";
import FilteredTopics, { TopicCategory } from "@/components/page/FilteredTopics";
import FilterBar from "@/components/page/FilterBar";
import topicData from "@/lib/utils/topicData";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<TopicCategory>("All");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const handleTopicSelect = (topic: string):  void => {
    console.log("Selected topic:", topic);
  };

  return (
    <main className="flex min-h-screen flex-col p-6">
      <FilterBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        category={selectedCategory}
        categories={["All", ...(Object.keys(topicData) as TopicCategory[])]}
        setSelectedCategory={(category) => setSelectedCategory(category as TopicCategory)}
        showCategoryDropdown={showCategoryDropdown}
        setShowCategoryDropdown={setShowCategoryDropdown}
      />
      <FilteredTopics
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
        onSelect={(topic) => handleTopicSelect(topic.url)}
      />
    </main>
  );
}









