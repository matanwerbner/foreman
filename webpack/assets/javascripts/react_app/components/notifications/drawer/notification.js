import React from 'react';
import Icon from '../../common/Icon';
import NotificationDropdown from './NotificationDropdown';
import '../../../common/commonStyles.css';

/* eslint-disable camelcase */

const Notification = (
  {
    notification: {
      created_at,
      seen,
      text = '-',
      level,
      id,
      actions
    },
    onMarkAsRead
  }
) => {
  const created = new Date(created_at);
  const title = __('Click to mark as read').toString();
  const tooltip = {
    title: title,
    'data-toggle': 'tooltip',
    'data-placement': 'top'
  };
  const markup = seen ?
    <span className="drawer-pf-notification-message">{text}</span> :
    <span
        {...tooltip}
        className="drawer-pf-notification-message not-seen"
        onClick={onMarkAsRead.bind(this, id)}>
        { text }
    </span>;

  return (
    <div className="drawer-pf-notification">
      <Icon type={level} />
      <div className="notification-text-container">
      {markup}
      <div className="drawer-pf-notification-info">
        <span className="date">{created.toLocaleDateString()}</span>
        <span className="time">{created.toLocaleTimeString()}</span>
      </div>
      </div>
      {actions.links && <NotificationDropdown links={actions.links} id={id} />}
    </div>
  );
};

export default Notification;
