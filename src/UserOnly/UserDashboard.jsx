import React from 'react';
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useState } from 'react';

function UserDashboard() {
  const [collapsed, setCollapsed] = useState(false);

  return (
     <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
      <Sidebar collapsed={collapsed} transitionDuration={1000}>
        <Menu>
        <SubMenu defaultOpen label="Charts" icon={<Icon name="bar-chart" />}>
          <MenuItem> Pie charts</MenuItem>
          <MenuItem> Line charts</MenuItem>
          <MenuItem> Bar charts</MenuItem>
        </SubMenu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
          <MenuItem> Examples</MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ padding: 10 }}>
        <div>
          <button className="sb-button" onClick={() => setCollapsed(!collapsed)}>
            Collapse
          </button>
        </div>
      </main>
    </div>
  )
}

export default UserDashboard