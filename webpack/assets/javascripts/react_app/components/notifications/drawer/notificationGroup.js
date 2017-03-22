import React from 'react';
import Notification from './notification';
import { orderBy, reverse } from 'lodash';

export default (
  {
    group,
    notifications,
    isExpanded,
    onExpand,
    onMarkAsRead
  }
) => {
  const className = `panel panel-default ${isExpanded ? 'expanded' : ''}`;
  const unreadCount = notifications.filter(
    notification => !notification.seen
  ).length;

  return (
    <div className={className}>
      <div className="panel-heading" onClick={() => onExpand(group)}>
        <h4 className="panel-title">
          <a className={isExpanded ? '' : 'collapsed'}>
            {group}
          </a>
        </h4>
        <span className="panel-counter">
          {unreadCount} New {unreadCount !== 1 ? 'Events' : 'Event'}
        </span>
      </div>
      {
        isExpanded &&
        <div className="panel-body">
          {
            reverse(orderBy(notifications, 'created_at')).map(
              notification => (
                <Notification
                  key={notification.id}
                  notification={notification}
                  onMarkAsRead={onMarkAsRead.bind(this, group)}
                />
              )
            )
          }
        </div>
      }
    </div>
  );
};
