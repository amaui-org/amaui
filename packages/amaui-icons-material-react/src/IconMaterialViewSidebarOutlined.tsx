import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewSidebarOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewSidebarOutlined'
      short_name='ViewSidebar'

      {...props}
    >
      <path d="M2 20V4H22V20ZM17.5 8.675H20V6H17.5ZM17.5 13.325H20V10.675H17.5ZM4 18H15.5V6H4ZM17.5 18H20V15.325H17.5Z"/>
    </Icon>
  )
});

export default IconMaterialViewSidebarOutlined;
