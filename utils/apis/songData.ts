export async function getSongData(uid: string) {
  console.log(uid)
  try {
    let name = `songs/${uid}.json`
    console.log(name)
    const res = await fetch(name);
    const data = await res.json();
    return data;
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
