import {
  NOTIFICATIONS_GET_NOTIFICATIONS,
  NOTIFICATIONS_TOGGLE_DRAWER,
  NOTIFICATIONS_SET_EXPANDED_GROUP,
  NOTIFICATIONS_MARK_AS_READ
} from '../../consts';
import { notificationsDrawer } from '../../../common/sessionStorage';
import API from '../../../API';

export const getNotifications = url => dispatch => {
  API.get(url).then(response => dispatch({
    type: NOTIFICATIONS_GET_NOTIFICATIONS,
    payload: {
      notifications: response.notifications
    }
  }));
};

export const onMarkAsRead = (group, id) => dispatch => {
  dispatch({
    type: NOTIFICATIONS_MARK_AS_READ,
    payload: {
      group,
      id
    }
  });
  API.markNotificationAsRead(id);
};

export const expandGroup = group => (dispatch, getState) => {
  const currentExpanded = getState().notifications.expandedGroup;

  const getNewExpandedGroup = () => currentExpanded === group ? '' : group;

  notificationsDrawer.setExpandedGroup(getNewExpandedGroup());
  dispatch({
    type: NOTIFICATIONS_SET_EXPANDED_GROUP,
    payload: {
      group: getNewExpandedGroup()
    }
  });
};

export const toggleDrawer = () => (dispatch, getState) => {
  const isDrawerOpened = getState().notifications.isDrawerOpen;

  notificationsDrawer.setIsOpened(!isDrawerOpened);
  dispatch({
    type: NOTIFICATIONS_TOGGLE_DRAWER,
    payload: {
      value: !isDrawerOpened
    }
  });
};
