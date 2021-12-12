import React from "react";
import { render } from "@testing-library/react-native";

import { Teste } from "../../screens/Teste";

test("check if show correctly input user name placeholder", () => {
  const { debug } = render(<Teste />);

  debug();
});
