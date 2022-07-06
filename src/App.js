import React,{ useState } from "react";
import "./App.css";
import Search from "./components/SearchReminders/Search";
import AllReminderContent from "./components/AllReminders/AllRemindersContent";

const DUMMY_DATA = [
  {
    id: "r1",
    name: "reminder 1",
    priority: "high",
    notes: "this is the first reminder in the dummy data",
    dueDate: "2022-10-03",
  },
  {
    id: "r2",
    name: "reminder 2",
    priority: "medium",
    notes: "this is the second reminder in the dummy data",
    dueDate: "20122-08-03",
  },
  {
    id: "r3",
    name: "reminder 3",
    priority: "medium",
    notes: "this is the second reminder in the dummy data",
    dueDate: "20122-08-03",
  },
];

const completedReminders = [];

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [addedReminderData, setAddedReminderData] = useState(DUMMY_DATA);

  const onCreateReminderHandler = (data) => {
    setAddedReminderData([...addedReminderData, data]);
  };

  const inputSearchHandler = (event) => {
    setSearchInput(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setSearchInput("");
  };
  const filteredReminderData = addedReminderData.filter((data) => {
    return data.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  const onRemoveReminderHandler = (reminder) => {
    console.log(reminder.id);
    const incompleteReminders = addedReminderData.filter((item) => {
      if (item.id === reminder.id) {
        completedReminders.push(item);
      }
      return item.id !== reminder.id;
    });
    setAddedReminderData(incompleteReminders);
    console.log(completedReminders);
  };
  console.log(addedReminderData);
  return (
    <div className="App">
      <Search
        inputSearchHandler={inputSearchHandler}
        onSubmitHandler={onSubmitHandler}
        searchInput={searchInput}
      />
      <AllReminderContent
        onCreateReminderHandler={onCreateReminderHandler}
        reminderData={addedReminderData}
        filteredReminderData={filteredReminderData}
        onRemoveReminderHandler={onRemoveReminderHandler}
        completedReminders={completedReminders}
      />
    </div>
  );
}

export default App;
