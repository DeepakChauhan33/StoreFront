import { expect } from "vitest";
import QuantityBtn from "../Components/QuantityBtn";

import { render, fireEvent } from "@testing-library/react";

it("increment Quantity", () => {
    const { getByTestID } = render(<QuantityBtn />);

    fireEvent.click(getByTestID("inc"));

    expect(getByTestID("quantity")).toHaveTextContent("1");
})