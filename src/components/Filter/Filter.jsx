import { useSelector, useDispatch } from 'react-redux';
import s from './Filter.module.css';
import { filterActions } from '../../rudux/contacts/filterSlice';
import { getFilterValue } from '../../rudux/contacts/contacts-selectors';

function Filter() {
  const value = useSelector(getFilterValue);
  const dispatch = useDispatch();

  function handleFilterValue(e) {
    dispatch(filterActions.setFilterValue(e.target.value));
  }
  return (
    <div className={s.container}>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          value={value}
          placeholder="Name"
          onChange={handleFilterValue}
        />
      </label>
    </div>
  );
}

export default Filter;
