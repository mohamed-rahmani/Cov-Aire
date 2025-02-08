export const getAllRegion = async (options: RequestInit = {}) => {
  const response = await fetch(
    `http://localhost:8081/api/v1/carpooling-areas/regions`,
    {
      headers: { "Content-Type": "application/json", ...options.headers },
      ...options,
    }
  );
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response.json();
};
