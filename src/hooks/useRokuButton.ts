import { RokuButton } from "../types/interfaces";
import buttons from "../components/ButtonContainer/roku-buttons.json";

const useRokuButton = (name: string): RokuButton => (
  buttons
    .filter((b) => b.name === name)
    .reduce(d => d)
);

export { useRokuButton };