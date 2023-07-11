import fs from 'fs';

export async function getSongData(uid: string) {
  try {
    const data = fs.readFileSync(`public/songs/${uid}.json`, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error fetching song data:', error);
    return null;
  }
}

export async function getSongs() {
  try {
    const res = await fetch(`/public/songs/_list.json`);
    const data = await res.json();
    return data;
  } catch (error) {
    // console.error('Error fetching song list:', error);
    return null;
  }
}
