import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../pages/index"

describe("App", () => {
    it("renders without crashing", () => {
        render(<App />);
        expect(
            screen.getByRole("heading", {name: "Welcome to Next.js!"})
        ).toBeInTheDocument();
    });
});
