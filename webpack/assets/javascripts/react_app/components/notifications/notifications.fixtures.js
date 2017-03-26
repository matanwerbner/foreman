import immutable from 'seamless-immutable';

export const emptyState = immutable({
  notifications: {}
});

export const stateWithoutNotifications = immutable({
  notifications: {
    expandedGroup: 'React devs2',
    isDrawerOpen: true
  }
});

export const stateWithNotifications = immutable({
  notifications: {
    expandedGroup: 'React devs2',
    isDrawerOpen: true,
    notifications: {
      '1': {
        id: 1,
        seen: true,
        level: 'info',
        text: null,
        'created_at': '2017-02-23T05:00:28.715-05:00',
        group: 'React devs',
        actions: {}
      },
      '6': {
        id: 6,
        seen: true,
        level: 'info',
        text: 'Hi! This is a notification message',
        'created_at': '2017-03-14T11:25:07.138-04:00',
        group: 'React devs2',
        actions: {
          links: [
            {
              href: 'https://theforeman.org/blog',
              title: 'Link to blog'
            }
          ]
        }
      }
    }
  }
});

export const stateWithUnreadNotifications = immutable({
  notifications: {
    expandedGroup: 'React devs2',
    isDrawerOpen: true,
    notifications: {
      '1': {
        id: 1,
        seen: true,
        level: 'info',
        text: null,
        'created_at': '2017-02-23T05:00:28.715-05:00',
        group: 'React devs',
        actions: {}
      },
      '6': {
        id: 6,
        seen: false,
        level: 'info',
        text: 'Hi! This is a notification message',
        'created_at': '2017-03-14T11:25:07.138-04:00',
        group: 'React devs2',
        actions: {
          links: [
            {
              href: 'https://theforeman.org/blog',
              title: 'Link to blog'
            }
          ]
        }
      }
    }
  }
});

export const serverResponse = `{ "notifications":[
  {"id":1,"seen":true,"level":"info","text":null,"created_at":"2017-02-23T05:00:28.715-05:00",
  "group":"React devs","actions":{}},
  {"id":2,"seen":false,"level":"info","text":null,"created_at":"2017-02-23T05:00:28.715-05:00",
  "group":"React devs","actions":{}}]}`;

export const emptyHtml = '<div id="notifications_container">' +
'<a class="nav-item-iconic drawer-pf-trigger-icon">' +
'<span class="fa fa-bell-o" title="Notifications"></span></a>' +
'</div>';

export const fullHtml = '<div id="notifications_container">' +
'<a class="nav-item-iconic drawer-pf-trigger-icon"><span ' +
'class="fa fa-bell-o" title="Notifications"></span></a><div ' +
'class="drawer-pf drawer-pf-notifications-non-clickable"><div ' +
'class="drawer-pf-title"><h3 class="text-center">' +
'Notifications</h3></div><div class="panel-group" ' +
'id="notification-drawer-accordion"><div ' +
'class="panel panel-default "><div class="panel-heading"><h4 ' +
'class="panel-title"><a class="collapsed">React devs</a></h4><span ' +
'class="panel-counter">0 New Events</span></div></div><div ' +
'class="panel panel-default expanded"><div class="panel-heading"><h4 ' +
'class="panel-title"><a class="">React devs2</a></h4><span ' +
'class="panel-counter">0 New Events</span></div><div ' +
'class="panel-body"><div class="drawer-pf-notification"><span ' +
'class="pficon pficon-info"></span><div ' +
'class="notification-text-container"><span ' +
'class="drawer-pf-notification-message">Hi! This is a ' +
'notification message</span><div class="drawer-pf-notification-info">' +
'<span class="date">3/14/2017</span><span class="time">11:25:07 AM' +
'</span></div></div><div class="dropdown-kebab-pf dropdown btn-group">' +
'<button id="6" role="button" aria-haspopup="true" ' +
'aria-expanded="false" type="button" class="dropdown-toggle btn ' +
'btn-link"><span class="fa fa-ellipsis-v"></span></button><ul ' +
'role="menu" class="dropdown-menu dropdown-menu-right" ' +
'aria-labelledby="6"><li role="presentation" class=""><a ' +
'id="notification-kebab-0" target="_self" ' +
'href="https://theforeman.org/blog" role="menuitem" ' +
'tabindex="-1">Link to blog</a></li></ul></div></div></div></div></div>' +
'</div></div>';
