import Songs from './../public/songs/_list.json'
import { Song } from '../utils/types/songs';

function App() {
  const songs = Songs as Song[];

  return (
    <div>
      <h1>Song List</h1>
      <ul>
        {songs.map((song) => (
          <li key={song.uid}>
            <h2><a href={`/songs/${song.uid}`}>{song.title}</a></h2>
            <p>Author: {song.author}</p>
            <p>Language: {song.language}</p>
            <p>Audio: {song.audio ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
