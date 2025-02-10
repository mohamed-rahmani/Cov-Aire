const API_URL = process.env.NEXT_PUBLIC_API_URL;
console.log("API_URL from env:", API_URL);

export const getAllRegion = async (options: RequestInit = {}) => {
  const response = await fetch(`${API_URL}/regions`, {
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response.json();
};

export const getDepartmentsByRegion = async (
  regionName: string,
  options: RequestInit = {}
) => {
  const response = await fetch(`${API_URL}/departements/${regionName}`, {
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response.json();
};

export const getCarpoolingAreasByDepartment = async (
  departmentName: string,
  options: RequestInit = {}
) => {
  const response = await fetch(`${API_URL}/departement/${departmentName}`, {
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response.json();
};

export const getCarpoolingAreasByKeyword = async (
  keyword: string,
  options: RequestInit = {}
) => {
  const response = await fetch(`${API_URL}/search/${keyword}`, {
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response.json();
};
