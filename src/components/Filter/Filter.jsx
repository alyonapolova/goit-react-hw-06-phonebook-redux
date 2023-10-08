import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/actions';
import { FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleFilter = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <FilterInput
      value={filter}
      onChange={handleFilter}
      name="filter"
      type="text"
      placeholder="Find contacts by name"
    ></FilterInput>
  );
};
export default Filter;
