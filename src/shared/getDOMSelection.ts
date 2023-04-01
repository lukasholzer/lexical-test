export const CAN_USE_DOM: boolean =
  typeof window !== "undefined" &&
  typeof window.document !== "undefined" &&
  typeof window.document.createElement !== "undefined";

const getSelection = (): Selection | null =>
  CAN_USE_DOM ? window.getSelection() : null;

export default getSelection;
