import {
  GET_NOTIFICATIONS,
  SET_NOTIFICATIONS_DRAWER_OPENED,
  SET_EXPANDED_GROUP,
  MARK_AS_READ
} from '../../consts';
import { notificationsDrawer } from '../../../common/sessionStorage';
import API from '../../../API';

export const getNotifications = url => dispatch => {
  API.get(url).then(response => dispatch({
    type: GET_NOTIFICATIONS,
    payload: {
      notifications: response.notifications
    }
  }));
};

export const onMarkAsRead = (group, id) => dispatch => {
  dispatch({
    type: MARK_AS_READ,
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
    type: SET_EXPANDED_GROUP,
    payload: {
      group: getNewExpandedGroup()
    }
  });
};

export const toggleDrawer = () => (dispatch, getState) => {
  const isDrawerOpened = getState().notifications.isDrawerOpen;

  notificationsDrawer.setIsOpened(!isDrawerOpened);
  dispatch({
    type: SET_NOTIFICATIONS_DRAWER_OPENED,
    payload: {
      value: !isDrawerOpened
    }
  });
};
