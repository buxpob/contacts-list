import { useEffect, useState } from 'react';
import { DEBOUNCE_TIME } from '../../const/const';
import { useAppDispatch } from '../../hooks';
import { useDebounce } from '../../hooks/debounced';
import { changeSearchText } from '../../store/action';

export default function SearchContactsScreen(): JSX.Element {
  const [value, setValue] = useState('');

  const dispatch = useAppDispatch();

  const debounced = useDebounce<string>(value, DEBOUNCE_TIME);

  useEffect(() => {
    dispatch(changeSearchText(debounced));
  }, [debounced]);

  return (
    <div className='search'>
      <label className='search__label' htmlFor="search"></label>
      <input
        className='search__input'
        type="text"
        id='search'
        name='search'
        onChange={(evt) => setValue(evt.target.value)}
      />
    </div>
  );
}
