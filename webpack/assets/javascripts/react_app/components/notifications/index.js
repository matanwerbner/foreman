import React from 'react';
import { connect } from 'react-redux';
import * as NotificationActions from '../../redux/actions/notifications';
import './notifications.scss';
import ToggleIcon from './toggleIcon/';
import Drawer from './drawer/';
import { groupBy, some, isUndefined } from 'lodash';
import { getNotificationsInterval } from './notifications.consts';

class notificationContainer extends React.Component {
  componentDidUpdate() {
    window.tfm.tools.activateTooltips();
  }

  componentDidMount() {
    const { getNotifications, data: { url } } = this.props;
    const timerId = setInterval(
      getNotifications.bind(this, url),
      getNotificationsInterval
    );

    getNotifications(url);
    this.setState({
      timerId
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    const {
      notifications,
      isDrawerOpen,
      toggleDrawer,
      expandGroup,
      expandedGroup,
      onMarkAsRead,
      hasUnreadMessages,
      isReady
    } = this.props;

    return (
      <div id="notifications_container">
        <ToggleIcon hsUnreadMessages={hasUnreadMessages} onClick={toggleDrawer} />
        { isReady && isDrawerOpen &&
          <Drawer
            onExpandGroup={expandGroup}
            onMarkAsRead={onMarkAsRead}
            expandedGroup={expandedGroup}
            notificationGroups={notifications}
          />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    notifications,
    isDrawerOpen,
    expandedGroup
  } = state.notifications;

  return {
    isDrawerOpen,
    notifications: groupBy(notifications, 'group'),
    expandedGroup,
    isReady: !isUndefined(notifications),
    hasUnreadMessages: some(notifications, n => !n.seen)
  };
};

export default connect(mapStateToProps, NotificationActions)(
  notificationContainer
);
