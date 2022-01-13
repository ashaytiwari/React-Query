import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component Test Suite", () => {
  test("renders post if succeed", async () => {
    window.fetch = jest.fn();

    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First Post" }]
    });
    render(<Async />);

    const listElement = await screen.findAllByRole(
      "listitem",
      {},
      { timeout: 1000 }
    );
    expect(listElement).not.toHaveLength(0);
  });
});
