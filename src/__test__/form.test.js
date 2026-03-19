import LoginForm from "../Pages/Login/LoginForm";

import { expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";


it("form submit", () => {

    const { getByTestID } = render(<LoginForm />)

    fireEvent.click(getByTestID("formSubmit"));

    except(getByTestID)
})

