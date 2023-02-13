import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

// import { PropTypes } from 'prop-types';

import css from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);
    const valueFilter = payload => {
        dispatch(setFilter(payload));
    };

    const changeFilter = e => {
        valueFilter(e.currentTarget.value);

        console.log(e.currentTarget.value);
    };

    console.log(filter);

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

// Filter.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// };

export default Filter;
