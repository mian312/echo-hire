import React from 'react'
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface FilterBarProps {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    categories: string[];
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
    showCategoryDropdown: boolean;
    setShowCategoryDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterBar: React.FC<FilterBarProps> = ({
    searchTerm,
    setSearchTerm,
    categories,
    setSelectedCategory,
    showCategoryDropdown,
    setShowCategoryDropdown
}) => {
    return (
        <div className="flex flex-wrap gap-4 mb-8">
            {/* Skills Dropdown */}
            <DropdownMenu open={showCategoryDropdown} onOpenChange={setShowCategoryDropdown}>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                        Skills
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="m-4 bg-popover border border-border shadow-md">
                    {categories.map((category) => (
                        <DropdownMenuItem
                            key={category}
                            onClick={() => {
                                setSelectedCategory(category);
                                setShowCategoryDropdown(false);
                            }}
                        >
                            {category}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2" size={20} />
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full border border-input bg-background rounded-md pl-10 pr-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    );
};


export default FilterBar
