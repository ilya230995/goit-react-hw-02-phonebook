import s from './Contacts.module.css';
import PropTypes from 'prop-types';

function Contacts({ options, onDeleteContact }) {
  return (
    <ul className={s.contactsList}>
      {options.map(el => {
        return (
          <li className={s.contactsListItem} key={el.id}>
            {el.name}: {el.number}{' '}
            <button className={s.deleteContact} onClick={() => onDeleteContact(el.id)}>Удалить</button>
          </li>
        );
      })}
    </ul>
  );
}
export default Contacts;

Contacts.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
