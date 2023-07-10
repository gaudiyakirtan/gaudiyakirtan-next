import { getSongData, getSongs } from '../../../utils/apis/songData';
import { Song } from '../../../utils/types/songs';

export default function Page(params: any) {
  const uid = params.params.uid;
  const getSongInfo = getSongData(uid);  
  getSongInfo.then((data) => {
    console.log(data);
  });

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