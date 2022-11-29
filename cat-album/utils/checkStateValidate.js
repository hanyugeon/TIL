export const isStateArray = (array) => {
  if (!Array.isArray(array)) {
    throw new Error("올바르지 않은 타입: array이(가) 아닙니다.");
  }

  return true;
};

export const isStateBoolean = (boolean) => {
  if (typeof boolean !== "boolean") {
    throw new Error("올바르지 않은 타입: boolean이(가) 아닙니다.");
  }

  return true;
};

export const isStateString = (string) => {
  if (typeof string !== "string" && typeof string !== "undefined") {
    throw new Error("올바르지 않은 타입: string이(가) 아닙니다.");
  }

  return true;
};
