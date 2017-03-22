import React from 'react';

export default ({ hsUnreadMessages, onClick }) => {
  const iconType = hsUnreadMessages ? 'fa-bell' : 'fa-bell-o';

   return (
   <a className="nav-item-iconic drawer-pf-trigger-icon" onClick={onClick}>
        <span className={`fa ${iconType}`} title={__('Notifications')}>
        </span>
    </a>
   );
};
