export const API_END_POINT = "https://kdt-frontend.cat-search-api.programmers.co.kr/api/cats";

export const request = async (url) => {
  try {
    const response = await fetch(`${API_END_POINT}${url}`);

    if (!response.ok) {
      throw new Error("API 호출에 실패했습니다.");
    }

    return await response.json();
  } catch (error) {
    alert(error.message);
  }
};
