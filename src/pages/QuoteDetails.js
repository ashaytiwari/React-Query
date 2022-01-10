import React from "react";
import { Link } from "react-router-dom";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

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

const QuoteDetails = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((item) => item.id === params.quoteId);

  if (!quote) {
    return (
      <h1
        style={{
          backgroundColor: "teal",
          color: "#fff",
          padding: "20px",
          textAlign: "center "
        }}
      >
        No Quote Found
      </h1>
    );
  }

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quote/${params.quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quote/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`/quote/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetails;
