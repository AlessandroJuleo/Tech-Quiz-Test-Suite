export const getQuestions = async () => {
  try {
    const response = await fetch("/api/questions/random");
    if (!response.ok) {
      throw new Error("Failed to fetch questions");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
};
