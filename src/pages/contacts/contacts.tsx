import { MouseEvent } from 'react';
import ItemContactsInfoScreen from '../../components/contact-info/contact-info';
import ListContactsScreen from '../../components/list-contacts/list-contacts';
import SearchContactsScreen from '../../components/search/search';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCurrentContact } from '../../store/action';

export default function ContactsScreen(): JSX.Element {
  const { currentContact } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  return (
    <div
      className='main'
      onClick={(evt: MouseEvent<HTMLDivElement>): void => {
        const element = evt.target as HTMLDivElement;
        if (currentContact && !element.closest('.contact-info__container' as string)) {
          dispatch(changeCurrentContact(null));
        }
      }}
    >

      <ItemContactsInfoScreen />

      <div className='main-container'>

        <SearchContactsScreen />

        <ListContactsScreen />

      </div>
    </div>
  );
}
