import React, { useState } from "react";
import Background from "./components/background";
import { useSwipeable } from "react-swipeable";
import { columns, cards } from "./lib/ScrumBoardData"; // Ensure this path is correct
import Header from "./components/header";
// import { Archive } from "lucide-react";

type Card = {
  id: string;
  column: string;
  content: string;
  category: string[]; // Assuming each card has a category array
};

const ScrumBoard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("todo");
  // Handlers for swiping
  const handlers = useSwipeable({
    onSwipedLeft: () => changeTab("next"),
    onSwipedRight: () => changeTab("prev"),
    onSwiping: (eventData) => {
      eventData.event.preventDefault();
    },

    trackMouse: true,
  });
  // Function to change tab based on swipe direction
  const changeTab = (direction: "next" | "prev") => {
    const currentIndex = columns.findIndex((column) => column.id === activeTab);
    let newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
    // Loop around if swiping beyond the start or end
    if (newIndex >= columns.length) newIndex = 0;
    if (newIndex < 0) newIndex = columns.length - 1;
    setActiveTab(columns[newIndex].id);
  };

  const getBackgroundColor = (columnId: string) => {
    switch (columnId) {
      case "todo":
        return "bg-rose-600"; // Red background for "To Do"
      case "inProgress":
        return "bg-amber-500"; // Yellow background for "In Progress"
      case "complete":
        return "bg-emerald-500"; // Green background for "Complete"
      default:
        return "bg-gray-200"; // Default background color if none of the above
    }
  };

  const getCategoryBackgroundColor = (columnId: string) => {
    switch (columnId) {
      case "todo":
        return "bg-rose-800"; // Lighter red for "To Do" categories
      case "inProgress":
        return "bg-amber-700"; // Lighter yellow for "In Progress" categories
      case "complete":
        return "bg-emerald-700"; // Lighter green for "Complete" categories
      default:
        return "bg-gray-100"; // Default color for categories if none of the above
    }
  };

  return (
    <>
      <Background />
      <Header />

      <div className="flex justify-center min-h-screen " {...handlers}>
        <div className="mt-2 w-full max-w-7xl mx-auto p-5">
          <div className=" mb-4 flex md:hidden">
            {columns.map((column) => (
              <button
                key={column.id}
                className={`flex-1 p-2 ${
                  activeTab === column.id
                    ? `${getBackgroundColor(column.id)} text-white`
                    : "bg-transparent text-emerald-50"
                } font-medium`}
                onClick={() => setActiveTab(column.id)}
                style={{ transition: "background-color 0.3s ease" }} // Optional: for smooth color transition
              >
                {column.name}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {columns.map((column) => (
              <div
                key={column.id}
                className={`bg-transparent drop-shadow-lg shadow-md border-2 border-white p-4 rounded-lg flex flex-col space-y-4 ${
                  activeTab === column.id ? "block" : "hidden md:block"
                }`}
              >
                <h2 className="font-bold text-2xl mb-2 text-left">
                  {column.name}
                </h2>
                {cards
                  .filter((card: Card) => card.column === column.id)
                  .map((card: Card, index: number) => (
                    <div
                      key={`${card.id}-${index}`}
                      className={`${getBackgroundColor(
                        column.id
                      )} p-2 rounded-lg shadow mb-2 text-white relative pb-10`}
                    >
                      {card.content}
                      <div className="absolute bottom-0 left-0 m-2 flex flex-wrap">
                        {card.category.map((cat, catIndex) => (
                          <div
                            key={catIndex}
                            className={`px-1  rounded ${getCategoryBackgroundColor(
                              column.id
                            )} text-white text-xs mr-2 mb-1`}
                          >
                            #{cat}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrumBoard;
