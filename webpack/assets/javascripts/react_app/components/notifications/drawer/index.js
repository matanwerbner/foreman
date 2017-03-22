import React from 'react';
import NotificationsGroup from './notificationGroup';
import {
  NO_NOTIFICATIONS_MESSAGE,
  NOTIFICATIONS_TITLE
} from '../notifications.consts';

export default (
  {
    notificationGroups,
    expandedGroup,
    onExpandGroup,
    onMarkAsRead
  }
) => {
  const groups = Object.keys(notificationGroups)
    .map(key => (
      <NotificationsGroup
        group={key}
        key={key}
        onMarkAsRead={onMarkAsRead}
        isExpanded={expandedGroup === key}
        onExpand={onExpandGroup}
        notifications={notificationGroups[key]}
      />
    ));
  const noNotificationsMessage = (
    <div id="no-notifications-container">
      { NO_NOTIFICATIONS_MESSAGE }
    </div>
  );

  return (
    <div className="drawer-pf drawer-pf-notifications-non-clickable">
      <div className="drawer-pf-title">
        <h3 className="text-center">{ NOTIFICATIONS_TITLE }</h3>
      </div>
      <div className="panel-group" id="notification-drawer-accordion">
        {groups.length === 0 ? noNotificationsMessage : groups}
      </div>
    </div>
  );
};
