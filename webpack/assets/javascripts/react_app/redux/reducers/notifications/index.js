import {
  GET_NOTIFICATIONS,
  SET_NOTIFICATIONS_DRAWER_OPENED,
  SET_EXPANDED_GROUP,
  MARK_AS_READ
} from '../../consts';
import {keyBy} from 'lodash';
import Immutable from 'seamless-immutable';
import { notificationsDrawer } from '../../../common/sessionStorage';

const initialState = Immutable({
  isDrawerOpen: notificationsDrawer.getIsOpened(),
  expandedGroup: notificationsDrawer.getExpandedGroup()
});

export default (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case GET_NOTIFICATIONS:
      return state.set('notifications', keyBy(payload.notifications, 'id'));
    case SET_NOTIFICATIONS_DRAWER_OPENED:
      return state.set('isDrawerOpen', payload.value);
    case SET_EXPANDED_GROUP:
      return state.set('expandedGroup', payload.group);
    case MARK_AS_READ:
      return state.setIn(
        ['notifications', payload.id],
        Object.assign({}, state.notifications[payload.id], { seen: true })
      );
    default:
      return state;
  }
};
