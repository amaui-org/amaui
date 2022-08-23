import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkAsUnreadSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkAsUnreadSharpW100Filled'
      short_name='MarkAsUnread'

      {...props}
    >
      <path d="M2.975 16.2V6.675L10.825 2.75L18.525 6.6V7.15H18.075L10.825 3.55L3.675 7.1V16.2ZM6.625 19.7V9.3H21.025V19.7ZM13.825 14.15 20.325 10.8V10L13.825 13.35L7.325 10V10.8Z"/>
    </Icon>
  );
});

IconMaterialMarkAsUnreadSharpW100Filled.displayName = 'AmauiIconMaterialMarkAsUnreadSharpW100Filled';

export default IconMaterialMarkAsUnreadSharpW100Filled;
