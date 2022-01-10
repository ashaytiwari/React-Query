import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    text: "We were fine originally and lost that fine-ness. That's when we became defined.",
    author: "Radhanth Swami Maharaj"
  },
  {
    id: "q2",
    text: "Suffering is sent to remind us to turn our thoughts towards God, who will give us solace.",
    author: "Radhanth Swami Maharaj"
  },
  {
    id: "q3",
    text: "You have too many gurus in this country. They have told you what to do, what to think, what to practice. They are the dictators.",
    author: "Radhanth Swami Maharaj"
  }
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
