import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkAsUnreadSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkAsUnreadSharpW700Filled'
      short_name='MarkAsUnread'

      {...props}
    >
      <path d="M0.575 16.875V5.175L9.65 0.475L18.675 5.15V6.875H15.2L9.65 4.025L3.725 7.075V16.875ZM4.725 22.575V7.875H23.4V22.575ZM14.075 16.3 20.25 12.95V10.725L14.075 14.075L7.875 10.725V12.95Z"/>
    </Icon>
  )
});

export default IconMaterialMarkAsUnreadSharpW700Filled;
