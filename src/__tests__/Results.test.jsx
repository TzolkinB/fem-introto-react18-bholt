import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import Results from "../components/Results";

const pets = [
  {
    id: 1,
    name: "Luna",
    animal: "dog",
    city: "Seattle",
    state: "WA",
    description:
      "Luna is actually the most adorable dog in the world. Her hobbies include yelling at squirrels, aggressively napping on her owners' laps, and asking to be fed two hours before IT'S DAMN WELL TIME LUNA. Luna is beloved by her puppy parents and lazily resides currently in Seattle, Washington.",
    breed: "Havanese",
    images: [
      "http://pets-images.dev-apis.com/pets/dog25.jpg",
      "http://pets-images.dev-apis.com/pets/dog26.jpg",
      "http://pets-images.dev-apis.com/pets/dog27.jpg",
      "http://pets-images.dev-apis.com/pets/dog28.jpg",
      "http://pets-images.dev-apis.com/pets/dog29.jpg",
    ],
  },
  {
    id: 2,
    name: "Charisse",
    animal: "rabbit",
    city: "Lexington",
    state: "KY",
    description:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    breed: "Havanese",
    images: ["http://pets-images.dev-apis.com/pets/rabbit0.jpg"],
  },
  {
    id: 3,
    name: "Maitilde",
    animal: "rabbit",
    city: "Dallas",
    state: "TX",
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    breed: "Lab",
    images: ["http://pets-images.dev-apis.com/pets/rabbit1.jpg"],
  },
  {
    id: 4,
    name: "Natalina",
    animal: "rabbit",
    city: "Tampa",
    state: "FL",
    description:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    breed: "Lab",
    images: ["http://pets-images.dev-apis.com/pets/rabbit2.jpg"],
  },
];

test("renders correctly with no pets", () => {
  const { asFragment } = render(<Results pets={[]} />);
  expect(asFragment()).toMatchSnapshot();
  // .toMatchInlineSnapshot is another option if you don't want snapshot folder created
});

test("renders correctly with some pets", () => {
  const { asFragment } = render(
    <StaticRouter>
      <Results pets={pets} />
    </StaticRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});