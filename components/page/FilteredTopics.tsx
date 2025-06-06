import React from "react";
import Topic from "@/components/page/Topic";
import topicData from "@/lib/utils/topicData";

interface TopicItem {
  icon: string; // string instead of React.ElementType
  title: string;
  time: number;
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
      {filteredData.map(([category, topics]) =>
        topics.length > 0 ? (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map((topic, index) => (
                <Topic
                  key={index}
                  Icon={topic.icon} // string path
                  Title={topic.title}
                  Time={topic.time}
                  onClick={() => onSelect(topic)}
                />
              ))}
            </div>
          </div>
        ) : null
      )}
    </>
  );
};

export default FilteredTopics;
