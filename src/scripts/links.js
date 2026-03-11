export const tftCdnBaseUrl = "https://ddragon.leagueoflegends.com/cdn";
export const tftImagesUrl = "img/tft-item"
export const tftCdnVersions = "https://ddragon.leagueoflegends.com/api/versions.json";

export const getLatestTftCdnVersion = async () => {
  const res = await fetch(tftCdnVersions);
  const data = await res.json();
  return data[0];
};
