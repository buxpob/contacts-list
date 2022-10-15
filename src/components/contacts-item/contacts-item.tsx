import { useAppDispatch } from '../../hooks';
import { changeCurrentContact } from '../../store/action';
import { Contact } from '../../types/types';

type ItemContactsScreenProperty = {
  contact: Contact,
}

export default function ItemContactsScreen({ contact }: ItemContactsScreenProperty): JSX.Element {
  const {name, phone, email} = contact;

  const dispatch = useAppDispatch();

  return (
    <div
      className='contacts-item'
      onClick={() => {
        dispatch(changeCurrentContact(contact));
      }}
    >
      <p className='contacts-item__name'>{name}</p>
      <p className='contacts-item__phone'>{phone}</p>
      <p className='contacts-item__email'>{email}</p>
    </div>
  );
}
