import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkAsUnreadSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkAsUnreadSharpW700'
      short_name='MarkAsUnread'

      {...props}
    >
      <path d="M0.575 16.875V5.175L9.65 0.475L18.675 5.15V6.875H15.2L9.65 4.025L3.725 7.075V16.875ZM4.725 22.575V7.875H23.4V22.575ZM14.05 16.3 7.875 12.95V19.725H20.25V12.95ZM14.075 14.075 20.25 10.725H7.875ZM7.875 19.725V10.725V19.725Z"/>
    </Icon>
  )
});

export default IconMaterialMarkAsUnreadSharpW700;
