import { getSongData } from '@/utils/apis/songData';
import { Song } from '@/utils/types/songs';
import transliterate from '@/utils/transliteration/transliterator';

// TODO: Context for Language
const lang = 'eng';

export default async function Page(params: any) {
  const uid = params.params.uid;
  const song: Song = await getSongData(uid);  

  return (
    Song({ song })
  );
}

const Song = ({ song }: { song: Song }) => {
  return (
    <div>
      {/* General Info */}
      <h1>{song.title} ({song.uid})</h1>
      <h3>{song.author} {transliterate(song.author, song.language, lang)}</h3>

      <h3>{song.language}</h3>
      <p>{song.notes.map((value, index) => {
        return <span key={index}>{value}</span>
      })}</p>

      {/* Original Script */}
      <h3>{song.verses.map((verse, index) => (
        <div key={index}>
          <p>{verse.lines.map((line, index) => (
            <span key={index}>{line.map((word, index) => (
              <span key={index}>{word.w}{word.h}</span>
            ))}</span>
          ))}</p>
        </div>
      ))}</h3>

      {/* Language Script */}
      <h3>{song.verses.map((verse, index) => (
        <div key={index}>
          <p>{verse.lines.map((line, index) => (
            <span key={index}>{line.map((word, index) => (
              <span key={index}>{transliterate(word.w, song.language, lang)}{word.h}</span>
            ))}</span>
          ))}</p>
        </div>
      ))}</h3>

      {/* Word to word transliteration */}
      {song.verses.map((verse, index) => (
        <div key={index}>
          <h3>{verse.lines.map((line, index) => (
            <div key={index}>
              <p>{line.map((word, index) => (
                <span key={index}>{word.w}{word.h}-{word.s[lang]}({word.o[lang]})</span>
              ))}</p>
            </div>
          ))}</h3>

          <h3>{verse.translation[lang]}</h3>
        </div>
      ))};

    </div>
  );
};
