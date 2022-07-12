import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDashboardCustomizeOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DashboardCustomizeOutlined'
      short_name='DashboardCustomize'

      {...props}
    >
      <path d="M3 3H11V11H3ZM5 5V9ZM13 3H21V11H13ZM15 5V9ZM3 13H11V21H3ZM5 15V19ZM16 13H18V16H21V18H18V21H16V18H13V16H16ZM15 5V9H19V5ZM5 5V9H9V5ZM5 15V19H9V15Z"/>
    </Icon>
  )
});

export default IconMaterialDashboardCustomizeOutlined;
