import { quickSearchOptions } from "../_constants/search";
import QuickSearchButton from "./QuickSearchButton";

const QuickSearchItems = () => {
  return (
    <div className="flex gap-2 mt-6 overflow-auto [&::-webkit-scrollbar]:hidden lg:hidden">
      {quickSearchOptions.map((option) => (
        <QuickSearchButton
          key={option.title}
          imageUrl={option.imageUrl}
          title={option.title}
        />
      ))}
    </div>
  );
};

export default QuickSearchItems;
