import { getSongData, getSongs } from '../../../utils/apis/songData';
import { Song } from '../../../utils/types/songs';

export default async function Page(params: any) {
  const uid = params.params.uid;
  const getSongInfo = await getSongData(uid);  
  // getSongInfo.then((data) => {
  //   console.log(data);
  // });
  console.log(getSongInfo);

  return (
    <div>
      <h1>{getSongInfo as string}</h1>
  </div>
  );
}

export async function getSongUIDs() {
  const songs = await getSongs();
  const uids = songs.map((song: Song) => ({
      params: {
        uid: song.uid,
      },
    }));

  return {
    uids,
    fallback: false,
  };
}

export async function getSongInfo(uid: string) {
  const songData = getSongData(uid);
  return {
    uid,
    songData
  }
}

// export async function getStaticProps({ params }) {
//   const songData = getSongInfo(params.id);
//   return {
//     props: {
//       songData,
//     },
//   };
// }