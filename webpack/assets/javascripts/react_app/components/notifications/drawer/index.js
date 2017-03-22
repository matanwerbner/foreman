import React from 'react';
import NotificationsGroup from './notificationGroup';

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
      No Notifications...
    </div>
  );

  return (
    <div className="drawer-pf drawer-pf-notifications-non-clickable">
      <div className="drawer-pf-title">
        <h3 className="text-center">Notifications</h3>
      </div>
      <div className="panel-group" id="notification-drawer-accordion">
        {groups.length === 0 ? noNotificationsMessage : groups}
      </div>
    </div>
  );
};
