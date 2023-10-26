import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NoteIndexPage from '../NoteIndexPage/NoteIndexPage'
import NoteShowPage from '../NoteShowPage/NoteShowPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/notes" element={<NoteIndexPage user={user}/>} />
              <Route path="/notes/:noteId" element={<NoteShowPage user={user} />} />
              <Route path="/new" element={<>hello</>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
