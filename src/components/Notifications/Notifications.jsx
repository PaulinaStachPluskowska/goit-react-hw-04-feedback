import PropTypes from 'prop-types';
import css from './Notifications.module.css';

export const Notification = ({message}) => (
    <p className={css.paragraph}>{message}</p>
);

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}