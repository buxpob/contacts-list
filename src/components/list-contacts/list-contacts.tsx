import { useEffect } from 'react';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { fetchContactsAction } from '../../store/api-actions';
import { Contact } from '../../types/types';
import ItemContactsScreen from '../contacts-item/contacts-item';
import Loading from '../loading/loading';


export default function ListContactsScreen(): JSX.Element {
  const { contactsList, searchText, isDataLoaded } = useAppSelector((state) => state);

  useEffect(() => {
    store.dispatch(fetchContactsAction());
  }, [searchText]);

  return (
    <>
      {isDataLoaded ? <Loading /> : ''}

      {contactsList.length < 1 && !isDataLoaded
        && <p className='contacts-list__empty'>Контактов нет</p>}

      <div className='contacts-list'>

        {contactsList.map((contact: Contact) => <ItemContactsScreen contact={contact} key={contact.phone} />)}

      </div>
    </>

  );
}
