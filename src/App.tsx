import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ContactsScreen from './pages/contacts/contacts';

export default function App(): JSX.Element {

  return (
    <div className="page-main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactsScreen />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
