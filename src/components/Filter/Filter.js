import s from './Filter.module.css'
import PropTypes from 'prop-types'; 

function Filter({ value, onChange}) {
  return (
    <label className={s.filterPhoneboke}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        name="filter"
        className={s.filterInput}
      />
    </label>
  );
}

export default Filter

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};