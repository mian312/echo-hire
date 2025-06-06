import React from "react";
import Topic from "@/components/page/Topic";
import topicData from "@/lib/utils/topicData";

interface TopicItem {
  icon: string; // string instead of React.ElementType
  title: string;
  time: number;
  url: string;
};

export type TopicCategory = "All" | "Engineering Subject Mastery" | "Programming Language Proficiency" | "Applied Programming in Engineering" | "Non-Technical & Behavioral Readiness";

interface FilteredTopicsProps {
  selectedCategory: TopicCategory; // Change string to TopicCategory
  searchTerm: string;
  onSelect: (topic: TopicItem) => void;
}

const FilteredTopics: React.FC<FilteredTopicsProps> = ({
  selectedCategory,
  searchTerm,
  onSelect
}) => {
  const allTopics: TopicItem[] = Object.values(topicData).flat();

  const getFilteredTopics = (): TopicItem[] => {
    const term = searchTerm.toLowerCase();
    if (selectedCategory === "All") {
      return allTopics.filter(topic =>
        topic.title.toLowerCase().includes(term)
      );
    }
    return (
      topicData[selectedCategory]?.filter(topic =>
        topic.title.toLowerCase().includes(term)
      ) || []
    );
  };

  const filteredData: [string, TopicItem[]][] =
    selectedCategory === "All"
      ? Object.entries(topicData).map(([cat, topics]) => [
        cat,
        topics.filter(topic =>
          topic.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      ])
      : [[selectedCategory, getFilteredTopics()]];

  return (
    <>
      {filteredData.some(([_, topics]) => topics.length > 0) ? (
        filteredData.map(([category, topics]) =>
          topics.length > 0 ? (
            <div key={category} className="mb-12">
              <h2 className="text-3xl font-bold mb-6">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topics.map((topic, index) => (
                  <Topic
                    key={index}
                    Icon={topic.icon}
                    Title={topic.title}
                    Time={topic.time}
                    onClick={() => onSelect(topic)}
                  />
                ))}
              </div>
            </div>
          ) : null
        )
      ) : (
        <div className="text-center py-12">
          <div className="text-lg mb-2">No topics found</div>
          <div className="text-sm">Try adjusting your search or filters</div>
        </div>
      )}
    </>
  );
};

export default FilteredTopics;
