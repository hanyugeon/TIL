import { API_END_POINT } from "./apiLink.js";

export const request = async (url) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`);

    if (!res.ok) {
      throw new Error("요청에 실패했습니다.");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
  }
};
