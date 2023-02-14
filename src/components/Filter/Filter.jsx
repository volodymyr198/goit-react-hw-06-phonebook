import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import css from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);
    const valueFilter = payload => {
        dispatch(setFilter(payload));
    };

    const changeFilter = e => {
        valueFilter(e.currentTarget.value);
    };

    return (
        <label className={css.filterLabel}>
            Find contacts by name
            <input
                className={css.filterInput}
                type="text"
                value={filter}
                onChange={changeFilter}
            />
        </label>
    );
};

export default Filter;
