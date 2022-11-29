export const API_END_POINT = "https://todo-api.roto.codes/roto";

export const request = async (url, options) => {
  try {
    const response = await fetch(`${API_END_POINT}${url}`, options);

    if (!response.ok) {
      throw new Error("API 호출에 실패했습니다.");
    }

    return await response.json();
  } catch (error) {
    alert(error.message);
  }
};
