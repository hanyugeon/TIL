export const compareStates = (previousState, nextState) => {
  if (JSON.stringify(previousState) !== JSON.stringify(nextState)) {
    return false;
  }

  return true;
};
