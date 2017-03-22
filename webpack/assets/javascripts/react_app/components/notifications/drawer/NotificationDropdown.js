import React from 'react';
import { Dropdown, Glyphicon, MenuItem } from 'react-bootstrap';

const NotificationDropdown = ({ links, id }) => {
  return (
    <Dropdown pullRight className="dropdown-kebab-pf" id={id}>
      <Dropdown.Toggle noCaret bsStyle="link">
        <Glyphicon bsClass="fa" glyph="ellipsis-v" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {
          links.map((link, i) =>
            <MenuItem key={i}
                      id={ `notification-kebab-${i}` }
                      target={link.external ? '_blank' : '_self'}
                      href={link.href}>
                {link.title}
            </MenuItem>
          )
        }
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NotificationDropdown;
