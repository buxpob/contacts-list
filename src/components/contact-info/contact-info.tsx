import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCurrentContact } from '../../store/action';

export default function ItemContactsInfoScreen(): JSX.Element {
  const { currentContact } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  return (
    <div>
      { currentContact ?
        <div className='contact-info'>

          <div className='contact-info__container'>

            <button
              className='button-close'
              type='button'
              onClick={() => dispatch(changeCurrentContact(null))}
            >
            </button>

            <p className='contact-info__name'>{currentContact.name}</p>

            <div className='contact-info__item'>
              <p className='contact-info__text'>Телефон:</p>
              <p className='contact-info__phone contact-info__data'>{currentContact.phone}</p>
            </div>

            <div className='contact-info__item'>
              <p className='contact-info__text'>Почта:</p>
              <p className='contact-info__date contact-info__data'>{currentContact.email}</p>
            </div>

            <div className='contact-info__item'>
              <p className='contact-info__text'>Дата приема:</p>
              <p className='contact-info__position-name contact-info__data'>{currentContact.hireDate}</p>
            </div>

            <div className='contact-info__item'>
              <p className='contact-info__text'>Должность:</p>
              <p className='contact-info__department contact-info__data'>{currentContact.positionName}</p>
            </div>

            <div className='contact-info__item'>
              <p className='contact-info__text'>Подразделение:</p>
              <p className='contact-info__hire-date contact-info__data'>{currentContact.department}</p>
            </div>

            <div className='contact-info__item contact-info__item-additionally'>
              <p className='contact-info__text'>Дополнительная информация:</p>
              <p className='contact-info__hire-date contact-info__data'>{currentContact.address}</p>
            </div>

          </div>
        </div> : ''}
    </div>
  );
}
