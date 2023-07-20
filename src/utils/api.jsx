// utils/api.js

const API_ENDPOINT = 'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20';

export const getAnimalImages = async () => {
  const response = await fetch(API_ENDPOINT);
  if (!response.ok) {
    throw new Error('Failed to fetch animal images.');
  }
  const data = await response.json();
  return data.entries;
};
